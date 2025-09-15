import { describe, expect, it } from "vitest"
import { processNumbers } from "./thread22"

describe('processNumbers', () => {
  it('should return all numbers if all valid', () => {
    const result = processNumbers(["1", "2", "3"])
    expect(result._unsafeUnwrap()).toEqual([1, 2, 3])
  })

  it('should return first error', () => {
    const result = processNumbers(["1", "abc", "3"])
    expect(result._unsafeUnwrapErr()).toContain("Invalid number")
  })
})