import { describe, expect, it } from "vitest"
import { parsePositiveNumber } from "./thread21"

describe('parsePositiveNumber', () => {
  it('should succeed for positive number', () => {
    const result = parsePositiveNumber("10")
    expect(result._unsafeUnwrap()).toBe(10)
  })

  it('should fail for negative number', () => {
    const result = parsePositiveNumber("-5")
    expect(result._unsafeUnwrapErr()).toBe("Number must be positive")
  })

  it('should fail for invalid number', () => {
    const result = parsePositiveNumber("abc")
    expect(result._unsafeUnwrapErr()).toBe("Invalid number")
  })
})