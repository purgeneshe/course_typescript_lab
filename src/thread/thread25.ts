import { ResultAsync } from 'neverthrow'

// Mock API функция
const mockFetch = (url: string): Promise<number> => {
  return url === "success" ? Promise.resolve(42) : Promise.reject("API error")
}

export const fetchNumberFromAPI = (url: string): ResultAsync<number, string> => {
  // Преобразуем Promise в ResultAsync, приводим ошибку к нужному формату
  return ResultAsync.fromPromise(
    mockFetch(url),
    (error) => `Fetch failed: ${error}`
  )
}
