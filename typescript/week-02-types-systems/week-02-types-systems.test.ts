import { describe, it, expect } from "vitest"
import { getStatus, combine, isString, setPort, handleShape } from "./solutions"

describe('week-02-types-systems', () => {
  it('getStatus', () => {
    // TODO: write test assertions
  })
  it('combine', () => {
    // TODO: write test assertions
  })
  it('isString', () => {
    expect(isString('hello')).toBe(true)
    expect(isString(42)).toBe(false)
  })
  it('setPort', () => {
    expect(setPort(3000)).toBe(3000)
  })
  it('handleShape', () => {
    // TODO: write test assertions
  })
})
