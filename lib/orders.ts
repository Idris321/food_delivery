// lib/orders.ts
export type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  size?: string
}

export type OrderStatus = "pending" | "preparing" | "ready" | "served"

export type Order = {
  id: string
  items: OrderItem[]
  total: number
  customer?: {
    name?: string
    phone?: string
    address?: string
  }
  type: "delivery" | "takeout"
  status: OrderStatus
  createdAt: string // ISO
}

const STORAGE_KEY = "food_orders_v1"

export function getOrders(): Order[] {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  } catch {
    return []
  }
}

export function saveOrder(order: Order) {
  if (typeof window === "undefined") return
  const existing = getOrders()
  // newest first
  existing.unshift(order)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  if (typeof window === "undefined") return
  const orders = getOrders().map((o) => (o.id === id ? { ...o, status } : o))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
  return orders
}

export function clearOrders() {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
