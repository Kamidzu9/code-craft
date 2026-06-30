import { describe, it, expect, vi } from "vitest"
import { fetchJSON, PI, waitAll, logMethod, eventEmitter } from "./solutions"

describe('week-05-async-modules', () => {
  it('fetchJSON', async () => {
    const mockData = { id: 1, name: "test" }
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
    vi.stubGlobal("fetch", mockFetch)
    const result = await fetchJSON("https://api.example.com/data")
    expect(result).toEqual(mockData)
    expect(mockFetch).toHaveBeenCalledWith("https://api.example.com/data")
    vi.unstubAllGlobals()
  })

  it('PI', () => {
    expect(PI).toBe(3.14159)
    expect(typeof PI).toBe("number")
  })

  it('waitAll', async () => {
    const results = await waitAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    expect(results).toEqual([1, 2, 3])
    const strings = await waitAll([Promise.resolve("a"), Promise.resolve("b")])
    expect(strings).toEqual(["a", "b"])
  })

  it('logMethod', () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})

    class TestClass {
      @logMethod
      greet(name: string) {
        return `Hello, ${name}!`
      }
    }

    const instance = new TestClass()
    const result = instance.greet("Alice")
    expect(result).toBe("Hello, Alice!")
    expect(consoleSpy).toHaveBeenCalled()
    consoleSpy.mockRestore()
  })

  it('eventEmitter', () => {
    const emitter = new eventEmitter()
    const handler = vi.fn()
    emitter.on("data", handler)
    emitter.emit("data", "test payload")
    expect(handler).toHaveBeenCalledWith("test payload")
    emitter.off("data", handler)
    emitter.emit("data", "second")
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
