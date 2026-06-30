import { describe, it, expect } from "vitest"
import { makeOptional, isArrayType, prependUser, pickKeys, deepReadonly } from "./solutions"

describe('week-03-advanced-types', () => {
  it('makeOptional', () => {
    const obj = { name: "Alice", age: 30 }
    const result = makeOptional(obj)
    expect(result).toEqual({ name: "Alice", age: 30 })
    const empty: Partial<typeof obj> = makeOptional(obj)
    delete empty.name
    delete empty.age
    expect(empty).toEqual({})
  })
  it('isArrayType', () => {
    expect(isArrayType<number>([1, 2, 3])).toBe(true)
    expect(isArrayType<string>(["a", "b"])).toBe(true)
    expect(isArrayType<number>([])).toBe(true)
    expect(isArrayType<number>("hello")).toBe(false)
    expect(isArrayType<number>(42)).toBe(false)
    expect(isArrayType<number>(null)).toBe(false)
    expect(isArrayType<number>(undefined)).toBe(false)
    expect(isArrayType<number>({ 0: "a", length: 1 })).toBe(false)
  })
  it('prependUser', () => {
    expect(prependUser("abc")).toBe("user_abc")
    expect(prependUser("123")).toBe("user_123")
    expect(prependUser("")).toBe("user_")
  })
  it('pickKeys', () => {
    const obj = { name: "Alice", age: 30, email: "alice@example.com" }
    expect(pickKeys(obj, ["name", "email"])).toEqual({ name: "Alice", email: "alice@example.com" })
    expect(pickKeys(obj, ["age"])).toEqual({ age: 30 })
    expect(pickKeys(obj, [])).toEqual({})
  })
  it('deepReadonly', () => {
    const obj = { name: "Alice", address: { city: "Berlin", zip: 10115 } }
    const frozen = deepReadonly(obj)
    expect(frozen).toEqual(obj)
    expect(Object.isFrozen(frozen)).toBe(true)
    expect(Object.isFrozen((frozen as any).address)).toBe(true)
  })
})
