import { describe, it, expect, vi } from "vitest"
import { createApp, addRoutes, validateBody, errorHandler, signToken } from "./solutions"

interface ExpressApp {
  get(path: string, handler: Function): void
  post(path: string, handler: Function): void
  listen(port: number, cb?: () => void): void
}

describe('week-07-project-api', () => {
  it('createApp', () => {
    const app = createApp()
    expect(app).toHaveProperty("get")
    expect(app).toHaveProperty("post")
    expect(app).toHaveProperty("listen")
    expect(typeof app.get).toBe("function")
    expect(typeof app.post).toBe("function")
    expect(typeof app.listen).toBe("function")
  })

  it('addRoutes', () => {
    const app: ExpressApp = {
      get: vi.fn(),
      post: vi.fn(),
      listen: vi.fn(),
    }
    addRoutes(app)
    expect(app.get).toHaveBeenCalled()
    expect(app.post).toHaveBeenCalled()
  })

  it('validateBody', () => {
    expect(validateBody({ name: "Alice" })).toBe(true)
    expect(validateBody({ name: "" })).toBe(true)
    expect(validateBody({})).toBe(false)
    expect(validateBody({ name: "Alice", extra: true })).toBe(true)
    expect(validateBody(null)).toBe(false)
    expect(validateBody(undefined)).toBe(false)
    expect(validateBody("string")).toBe(false)
    expect(validateBody(42)).toBe(false)
  })

  it('errorHandler', () => {
    const result = errorHandler(new Error("Not found"))
    expect(result).toHaveProperty("status")
    expect(result).toHaveProperty("message")
    expect(typeof result.status).toBe("number")
    expect(typeof result.message).toBe("string")
    expect(result.message).toBe("Not found")
  })

  it('signToken', () => {
    const token = signToken({ userId: 1, role: "admin" })
    expect(typeof token).toBe("string")
    expect(token.length).toBeGreaterThan(0)
    const token2 = signToken({ userId: 1, role: "admin" })
    expect(token2).toBe(token)
  })
})
