import { describe, it, expect } from "vitest"
import { getStatus, combine, isString, setPort, handleShape } from "./solutions"

type Status = "active" | "inactive" | "pending"

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number }

describe('week-02-types-systems', () => {
  it('getStatus', () => {
    expect(getStatus("active")).toBe("The status is active")
    expect(getStatus("inactive")).toBe("The status is inactive")
    expect(getStatus("pending")).toBe("The status is pending")
  })
  it('combine', () => {
    const a = { name: "Alice" }
    const b = { age: 30 }
    const result = combine(a, b)
    expect(result).toEqual({ name: "Alice", age: 30 })

    const x = { x: 1, y: 2 }
    const y = { y: 3, z: 4 }
    const merged = combine(x, y)
    expect(merged).toEqual({ x: 1, y: 3, z: 4 })
  })
  it('isString', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(42)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })
  it('setPort', () => {
    expect(setPort(3000)).toBe(3000)
    expect(setPort(3001)).toBe(3001)
    expect(setPort(8080)).toBe(8080)
  })
  it('handleShape', () => {
    expect(handleShape({ kind: "circle", radius: 5 })).toBeCloseTo(78.54, 1)
    expect(handleShape({ kind: "square", side: 4 })).toBe(16)
    expect(handleShape({ kind: "triangle", base: 3, height: 6 })).toBe(9)
    expect(handleShape({ kind: "circle", radius: 0 })).toBe(0)
    expect(handleShape({ kind: "square", side: 0 })).toBe(0)
  })
})
