import { describe, it, expect } from "vitest"
import { declareVariable, add, createUser, greetUser, formatId } from "./solutions"

interface User {
  id: number
  name: string
  email: string
}

describe('week-01-basics', () => {
  it('declareVariable', () => {
    const result = declareVariable()
    expect(result).toBe("TypeScript")
  })
  it('add', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
    expect(add(100, -50)).toBe(50)
  })
  it('createUser', () => {
    const user = createUser(1, "Alice", "alice@example.com")
    expect(user).toEqual({ id: 1, name: "Alice", email: "alice@example.com" })
  })
  it('greetUser', () => {
    const user: User = { id: 1, name: "Alice", email: "alice@example.com" }
    expect(greetUser(user)).toBe("Hello, Alice!")
    const user2: User = { id: 2, name: "Bob", email: "bob@example.com" }
    expect(greetUser(user2)).toBe("Hello, Bob!")
  })
  it('formatId', () => {
    expect(formatId(42)).toBe("ID: 42")
    expect(formatId("abc")).toBe("ID: abc")
    expect(formatId(0)).toBe("ID: 0")
    expect(formatId("user_1")).toBe("ID: user_1")
  })
})
