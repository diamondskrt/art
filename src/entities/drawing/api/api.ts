import { ID } from 'appwrite'

import {
  storage,
  databases,
  BUCKET_ID,
  DATABASE_ID,
  IMAGES_COLLECTION_ID,
  DRAWINGS_COLLECTION_ID,
} from '~/shared/lib'

import { Drawing, AddDrawingPayload } from '../model'

const addDrawing = async ({
  title,
  description,
  price,
  images,
}: AddDrawingPayload) => {
  try {
    const uploadedImageIds = await Promise.all(
      images
        .filter((image) => image.file)
        .map(async (image) => {
          const arrayBuffer = await image.file!.arrayBuffer()
          const file = new File([Buffer.from(arrayBuffer)], image.file!.name, {
            type: image.file!.type,
          })

          const uploaded = await storage.createFile(
            BUCKET_ID,
            ID.unique(),
            file
          )
          const url = storage.getFileView(BUCKET_ID, uploaded.$id)

          const imageDoc = await databases.createDocument(
            DATABASE_ID,
            IMAGES_COLLECTION_ID,
            ID.unique(),
            {
              storageId: uploaded.$id,
              name: image.name,
              type: image.type,
              size: image.size,
              order: image.order,
              url,
            }
          )

          return imageDoc.$id
        })
    )

    const drawingDoc = await databases.createDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      ID.unique(),
      {
        title,
        description,
        price,
        images: uploadedImageIds,
      }
    )

    return drawingDoc.$id
  } catch (error) {
    throw error
  }
}

const getDrawings = async (): Promise<Drawing[]> => {
  try {
    const drawings = (await databases.listDocuments(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID
    )) as unknown as { documents: Drawing[] }

    return drawings.documents.map((drawing) => ({
      ...drawing,
      images: drawing.images.toSorted(
        (a, b) => (a.order ?? 0) - (b.order ?? 0)
      ),
    }))
  } catch (error) {
    throw error
  }
}

const getDrawing = async (id: string): Promise<Drawing> => {
  try {
    const drawing = (await databases.getDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      id
    )) as unknown as Drawing

    return {
      ...drawing,
      images: drawing.images.toSorted(
        (a, b) => (a.order ?? 0) - (b.order ?? 0)
      ),
    }
  } catch (error) {
    throw error
  }
}

const deleteDrawing = async (id: string) => {
  try {
    const drawing = (await databases.getDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      id
    )) as unknown as Drawing

    const images = await Promise.all(
      drawing.images.map(({ $id }) =>
        databases.getDocument(DATABASE_ID, IMAGES_COLLECTION_ID, $id)
      )
    )

    await Promise.all(
      images.map((image) => storage.deleteFile(BUCKET_ID, image.storageId))
    )

    await databases.deleteDocument(DATABASE_ID, DRAWINGS_COLLECTION_ID, id)
  } catch (error) {
    throw error
  }
}

const updateDrawing = async (drawing: Drawing): Promise<Drawing> => {
  try {
    // Достаем из DRAWINGS_COLLECTION_ID предыдущие изображения
    const { images: previousImages } = (await databases.getDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      drawing.$id
    )) as unknown as Drawing

    // Текущие изображения из формы
    const drawingImages = drawing.images

    // Загруженные изображения из формы
    const newFileImages = drawingImages.filter(
      ({ url, file }) => url.includes('blob') && file
    )

    // Существующие изображения из формы
    const currentImages = drawingImages.filter(
      ({ $id, url }) => $id && !url.includes('blob')
    )

    const currentImageIds = currentImages.map(({ $id }) => $id)

    // Идентификаторы предыдущих изображений
    const previousImageIds = previousImages.map(({ $id }) => $id)

    // Идентификаторы удаляемых изображений
    const removedImageIds = previousImageIds.filter(
      (id) => !currentImageIds.includes(id)
    )

    await Promise.all(
      removedImageIds.map(async (id) => {
        const img = await databases.getDocument(
          DATABASE_ID,
          IMAGES_COLLECTION_ID,
          id
        )
        await Promise.all([
          storage.deleteFile(BUCKET_ID, img.storageId),
          databases.deleteDocument(DATABASE_ID, IMAGES_COLLECTION_ID, id),
        ])
      })
    )

    // Загружаем новые изображения и забираем их идентификаторы
    const uploadedImageIds = await Promise.all(
      newFileImages.map(async ({ name, type, size, file, order }) => {
        if (!file) return

        const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file)
        const url = storage.getFileView(BUCKET_ID, uploaded.$id)

        const { $id } = await databases.createDocument(
          DATABASE_ID,
          IMAGES_COLLECTION_ID,
          ID.unique(),
          {
            name,
            type,
            size,
            url,
            storageId: uploaded.$id,
            order: order,
          }
        )

        return $id
      })
    )

    // Обновляем порядок изображений, если он изменился
    await Promise.all(
      currentImages.map(async ({ $id, order }) => {
        const prev = previousImages.find((p) => p.$id === $id)
        if (typeof prev?.order === 'number' && prev.order === order) return
        await databases.updateDocument(DATABASE_ID, IMAGES_COLLECTION_ID, $id, {
          order,
        })
      })
    )

    // Собираем идентификаторы всех изображений
    const finalImageIds = drawing.images.map((img) =>
      img.$id && !img.url.includes('blob') ? img.$id : uploadedImageIds.shift()!
    )

    // Обновляем DRAWINGS_COLLECTION с указанием идентификаторов всех изображений
    const updatedDrawing = await databases.updateDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      drawing.$id,
      {
        title: drawing.title,
        description: drawing.description,
        price: drawing.price,
        images: finalImageIds,
      }
    )

    return updatedDrawing as unknown as Drawing
  } catch (error) {
    throw error
  }
}

export { addDrawing, getDrawings, getDrawing, deleteDrawing, updateDrawing }
