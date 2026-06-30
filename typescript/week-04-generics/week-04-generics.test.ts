import { describe, it, expect } from "vitest"
import { identity, createResponse, getLength, stackPush, updatePartial } from "./solutions"

interface Stack<T> {
  items: T[]
  push(item: T): void
  pop(): T | undefined
}

describe('week-04-generics', () => {
  it('identity', () => {
    expect(identity(42)).toBe(42)
    expect(identity('hi')).toBe("hi")
    expect(identity(true)).toBe(true)
    expect(identity({ key: "value" })).toEqual({ key: "value" })
  })
  it('createResponse', () => {
    const result = createResponse("hello")
    expect(result).toEqual({ data: "hello", error: null })
    const numResult = createResponse(42)
    expect(numResult).toEqual({ data: 42, error: null })
    const objResult = createResponse({ id: 1 })
    expect(objResult).toEqual({ data: { id: 1 }, error: null })
  })
  it('getLength', () => {
    expect(getLength('hello')).toBe(5)
    expect(getLength('')).toBe(0)
    expect(getLength([1, 2, 3])).toBe(3)
    expect(getLength([])).toBe(0)
    expect(getLength({ length: 10 })).toBe(10)
  })
  it('stackPush', () => {
    const stack: Stack<number> = { items: [], push(item) { this.items.push(item) }, pop() { return this.items.pop() } }
    stackPush(stack, 1)
    expect(stack.items).toEqual([1])
    stackPush(stack, 2)
    expect(stack.items).toEqual([1, 2])
  })
  it('updatePartial', () => {
    const obj = { name: "Alice", age: 30, email: "alice@example.com" }
    const result = updatePartial(obj, { age: 31 })
    expect(result).toEqual({ name: "Alice", age: 31, email: "alice@example.com" })
    const result2 = updatePartial(obj, {})
    expect(result2).toEqual(obj)
    expect(result2).not.toBe(obj)
  })
})
