import { describe, expect, it } from "vitest"
import { parseNumberWithDetailedError } from "./thread23"

describe('parseNumberWithDetailedError', () => {
  it('should transform error to AppError', () => {
    const result = parseNumberWithDetailedError("abc")
    const error = result._unsafeUnwrapErr()
    expect(error.message).toContain("Parse error")
    expect(error.code).toBe(400)
  })
})