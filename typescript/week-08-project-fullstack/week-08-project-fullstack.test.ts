import { describe, it, expect, vi } from "vitest"
import { userCardProps, fetchUsers, loginForm, useApi, appReducer } from "./solutions"

interface User {
  id: number
  name: string
  email: string
}

interface UserCardProps {
  user: User
  avatar?: string
  role?: string
}

interface ApiState<T> {
  data: T | null
  loading: boolean
}

interface AppState {
  user: User | null
  isAuthenticated: boolean
  theme: "light" | "dark"
}

type AppAction =
  | { type: "LOGIN"; user: User }
  | { type: "LOGOUT" }
  | { type: "SET_THEME"; theme: "light" | "dark" }

describe('week-08-project-fullstack', () => {
  it('userCardProps', () => {
    const user: User = { id: 1, name: "Alice", email: "alice@example.com" }
    const props = userCardProps(user)
    expect(props.user).toEqual(user)
    expect(props).toHaveProperty("user")
  })

  it('fetchUsers', async () => {
    const mockUsers: User[] = [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ]
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUsers),
    })
    vi.stubGlobal("fetch", mockFetch)
    const result = await fetchUsers()
    expect(result).toEqual(mockUsers)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(2)
    vi.unstubAllGlobals()
  })

  it('loginForm', () => {
    const form = loginForm()
    expect(form).toHaveProperty("fields")
    expect(Array.isArray(form.fields)).toBe(true)
    expect(form.fields.some((f: any) => f.name === "email")).toBe(true)
    expect(form.fields.some((f: any) => f.name === "password")).toBe(true)
    expect(form).toHaveProperty("validate")
    expect(typeof form.validate).toBe("function")
    expect(form.validate({ email: "test@example.com", password: "123456" })).toBe(true)
    expect(form.validate({ email: "", password: "" })).toBe(false)
  })

  it('useApi', async () => {
    const mockData = { id: 1, title: "Test" }
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
    vi.stubGlobal("fetch", mockFetch)
    const { data, loading } = useApi<typeof mockData>("https://api.example.com/data")
    expect(loading).toBe(true)
    expect(data).toBeNull()
    await new Promise(process.nextTick)
    vi.unstubAllGlobals()
  })

  it('appReducer', () => {
    const initialState: AppState = { user: null, isAuthenticated: false, theme: "light" }
    const user: User = { id: 1, name: "Alice", email: "alice@example.com" }

    const loggedIn = appReducer(initialState, { type: "LOGIN", user })
    expect(loggedIn.user).toEqual(user)
    expect(loggedIn.isAuthenticated).toBe(true)
    expect(loggedIn.theme).toBe("light")

    const loggedOut = appReducer(loggedIn, { type: "LOGOUT" })
    expect(loggedOut.user).toBeNull()
    expect(loggedOut.isAuthenticated).toBe(false)

    const darkMode = appReducer(loggedOut, { type: "SET_THEME", theme: "dark" })
    expect(darkMode.theme).toBe("dark")
  })
})
