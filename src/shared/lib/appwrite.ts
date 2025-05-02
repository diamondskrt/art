import { Client, Account, Databases, Storage } from 'appwrite'

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string
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
  COLLECTION_ID,
  PROJECT_ID,
  API_URL,
}
