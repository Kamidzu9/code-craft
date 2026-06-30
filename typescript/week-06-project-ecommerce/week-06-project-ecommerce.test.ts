import { describe, it, expect } from "vitest"
import { calcTotal, validateOrder, applyDiscount, checkStock, productType } from "./solutions"

interface CartItem {
  productId: number
  name: string
  price: number
  quantity: number
}

interface Order {
  id: number
  items: CartItem[]
  total: number
}

type Discount =
  | { type: "percentage"; value: number }
  | { type: "fixed"; value: number }

interface Product {
  id: number
  name: string
  price: number
  stock: number
}

describe('week-06-project-ecommerce', () => {
  it('calcTotal', () => {
    const items: CartItem[] = [
      { productId: 1, name: "Laptop", price: 1000, quantity: 1 },
      { productId: 2, name: "Mouse", price: 25, quantity: 2 },
    ]
    expect(calcTotal(items)).toBe(1050)
    expect(calcTotal([])).toBe(0)
  })

  it('validateOrder', () => {
    const validOrder: Order = { id: 1, items: [{ productId: 1, name: "Laptop", price: 1000, quantity: 1 }], total: 1000 }
    expect(validateOrder(validOrder)).toBe(true)
    const invalidOrder = { id: 2, items: [], total: 0 }
    expect(validateOrder(invalidOrder as Order)).toBe(false)
  })

  it('applyDiscount', () => {
    expect(applyDiscount(100, { type: "percentage", value: 10 })).toBe(90)
    expect(applyDiscount(100, { type: "fixed", value: 15 })).toBe(85)
    expect(applyDiscount(0, { type: "percentage", value: 50 })).toBe(0)
    expect(applyDiscount(50, { type: "fixed", value: 100 })).toBe(0)
  })

  it('checkStock', () => {
    const product: Product = { id: 1, name: "Laptop", price: 1000, stock: 5 }
    expect(checkStock(product, 3)).toBe(true)
    expect(checkStock(product, 5)).toBe(true)
    expect(checkStock(product, 6)).toBe(false)
    expect(checkStock(product, 0)).toBe(true)
  })

  it('productType', () => {
    const product = productType()
    expect(product).toHaveProperty("id")
    expect(product).toHaveProperty("name")
    expect(product).toHaveProperty("price")
    expect(product).toHaveProperty("stock")
    expect(typeof product.price).toBe("number")
    expect(typeof product.stock).toBe("number")
  })
})
