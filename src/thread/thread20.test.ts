import { describe, expect, it } from 'vitest'
import { parseNumber } from './thread20'

describe('parseNumber', () => {
  it('should return ok for valid number', () => {
    const result = parseNumber("42")
    expect(result.isOk()).toBe(true)
    expect(result._unsafeUnwrap()).toBe(42)
  })

  it('should return err for invalid number', () => {
    const result = parseNumber("abc")
    expect(result.isErr()).toBe(true)
    expect(result._unsafeUnwrapErr()).toBe("Invalid number")
  })
})