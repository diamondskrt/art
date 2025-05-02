import { addMilliseconds, isAfter } from 'date-fns'
import localforage from 'localforage'

const defaultTTL = 24 * 60 * 60 * 1000 // 24 hours

const setKey = async <T>({
  key,
  data,
  ttl = defaultTTL,
}: {
  key: string
  data: T
  ttl?: number
}) => {
  const expiry = addMilliseconds(new Date(), ttl).getTime()
  const record = { data, expiry }
  await localforage.setItem(key, record)
}

const getKey = async <T>(key: string): Promise<T | null> => {
  const record = await localforage.getItem<{ data: T; expiry: number }>(key)
  if (!record) return null

  const now = new Date()
  const expiryDate = new Date(record.expiry)

  if (isAfter(now, expiryDate)) {
    await localforage.removeItem(key)
    return null
  }

  return record.data
}

const removeKey = async (key: string) => {
  await localforage.removeItem(key)
}

export { setKey, getKey, removeKey, defaultTTL }
