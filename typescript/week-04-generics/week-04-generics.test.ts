import { describe, it, expect } from "vitest"
import { identity, createResponse, getLength, stackPush, updatePartial } from "./solutions"

describe('week-04-generics', () => {
  it('identity', () => {
    expect(identity(42)).toBe(42)
    expect(identity('hi')).toBe("hi")
  })
  it('createResponse', () => {
    // TODO: write test assertions
  })
  it('getLength', () => {
    expect(getLength('hello')).toBe(5)
  })
  it('stackPush', () => {
    // TODO: write test assertions
  })
  it('updatePartial', () => {
    // TODO: write test assertions
  })
})
