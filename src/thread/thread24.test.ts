import { describe, expect, it } from "vitest"
import { tryParseNumber } from "./thread24"

describe('tryParseNumber', () => {
  it('should use main parser for numbers', () => {
    const result = tryParseNumber("42")
    expect(result._unsafeUnwrap()).toBe(42)
  })

  it('should fallback to alternative for "zero"', () => {
    const result = tryParseNumber("zero")
    expect(result._unsafeUnwrap()).toBe(0)
  })

  it('should fail for both parsers', () => {
    const result = tryParseNumber("invalid")
    expect(result.isErr()).toBe(true)
  })
})