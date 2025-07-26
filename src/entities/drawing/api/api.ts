import { ID } from 'appwrite'

import {
  storage,
  databases,
  BUCKET_ID,
  DATABASE_ID,
  IMAGES_COLLECTION_ID,
  DRAWINGS_COLLECTION_ID,
} from '~/shared/lib'

import { Drawing, DrawingPayload } from '../model'

const addDrawing = async ({
  title,
  description,
  price,
  images,
}: DrawingPayload) => {
  try {
    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        const buffer = Buffer.from(await image.arrayBuffer())

        const uploadedImage = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          new File([buffer], image.name, { type: image.type })
        )

        const url = storage.getFileView(BUCKET_ID, uploadedImage.$id)

        const imageDoc = await databases.createDocument(
          DATABASE_ID,
          IMAGES_COLLECTION_ID,
          ID.unique(),
          {
            storageId: uploadedImage.$id,
            name: image.name,
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
        images: uploadedImages,
      }
    )

    return drawingDoc.$id
  } catch (error) {
    throw error
  }
}

const getDrawings = async (): Promise<Drawing[]> => {
  try {
    const drawings = await databases.listDocuments(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID
    )

    return drawings.documents as unknown as Drawing[]
  } catch (error) {
    throw error
  }
}

const getDrawing = async (id: string): Promise<Drawing> => {
  try {
    const drawing = await databases.getDocument(
      DATABASE_ID,
      DRAWINGS_COLLECTION_ID,
      id
    )

    return drawing as unknown as Drawing
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

export { addDrawing, getDrawings, getDrawing, deleteDrawing }
