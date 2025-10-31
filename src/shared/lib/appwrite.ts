import { Account, Client, Databases, Storage } from 'appwrite'

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string
const DRAWINGS_COLLECTION_ID = process.env
  .NEXT_PUBLIC_APPWRITE_DRAWINGS_COLLECTION_ID as string
const IMAGES_COLLECTION_ID = process.env
  .NEXT_PUBLIC_APPWRITE_IMAGES_COLLECTION_ID as string
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string
const API_URL = process.env.NEXT_PUBLIC_APPWRITE_API as string

const appwriteClient = new Client().setEndpoint(API_URL).setProject(PROJECT_ID)

const databases = new Databases(appwriteClient)
const storage = new Storage(appwriteClient)
const account = new Account(appwriteClient)

export {
  databases,
  storage,
  account,
  DATABASE_ID,
  BUCKET_ID,
  DRAWINGS_COLLECTION_ID,
  IMAGES_COLLECTION_ID,
  PROJECT_ID,
  API_URL,
}
