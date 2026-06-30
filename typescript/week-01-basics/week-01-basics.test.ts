import { describe, it, expect } from "vitest"
import { declareVariable, add, createUser, greetUser, formatId } from "./solutions"

describe('week-01-basics', () => {
  it('declareVariable', () => {
    // TODO: write test assertions
  })
  it('add', () => {
    expect(add(2, 3)).toBe(5)
  })
  it('createUser', () => {
    // TODO: write test assertions
  })
  it('greetUser', () => {
    // TODO: write test assertions
  })
  it('formatId', () => {
    expect(formatId(42)).toBe("ID: 42")
  })
})
