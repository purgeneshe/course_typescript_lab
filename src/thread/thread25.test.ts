import { describe, expect, it } from "vitest"
import { fetchNumberFromAPI } from "./thread25"

describe('fetchNumberFromAPI', () => {
  it('should return number for successful fetch', async () => {
    const result = await fetchNumberFromAPI("success")
    expect(result.isOk()).toBe(true)
    expect(result._unsafeUnwrap()).toBe(42)
  })

  it('should return error for failed fetch', async () => {
    const result = await fetchNumberFromAPI("fail")
    expect(result.isErr()).toBe(true)
    expect(result._unsafeUnwrapErr()).toBe("Fetch failed: API error")
  })
})