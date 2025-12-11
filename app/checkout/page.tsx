// app/checkout/page.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"
import { saveOrder, type Order } from "@/lib/orders"

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart()
  const router = useRouter()
  const [orderType, setOrderType] = useState<"delivery" | "takeout">("delivery")
  const [loading, setLoading] = useState(false)

  // customer fields
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const total = getTotal()

  function makeOrderId() {
    return `ORD-${Date.now().toString(36)}-${Math.floor(Math.random() * 9000 + 1000)}`
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!cart || cart.length === 0) {
      alert("Your cart is empty")
      return
    }
    setLoading(true)

    // build order object
    const order: Order = {
      id: makeOrderId(),
      items: cart.map((c) => ({
        id: c.id,
        name: c.name,
        price: c.price,
        quantity: c.quantity,
        size: (c as any).size,
      })),
      total,
      customer: {
        name,
        phone,
        address,
      },
      type: orderType,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    try {
      // Save to localStorage (admin can read this)
      saveOrder(order)

      // clear cart
      clearCart?.()

      // redirect to confirmation page with order id in query
      router.push(`/order-confirmation?orderId=${encodeURIComponent(order.id)}&type=${orderType}`)
    } catch (err) {
      console.error(err)
      alert("Failed to place order. See console for details.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft /> Back
        </Link>

        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Order type</label>
            <div className="flex gap-2 mt-2">
              <button type="button" onClick={() => setOrderType("delivery")} className={`px-3 py-1 rounded ${orderType === "delivery" ? "bg-amber-500 text-black" : "border"}`}>
                Delivery
              </button>
              <button type="button" onClick={() => setOrderType("takeout")} className={`px-3 py-1 rounded ${orderType === "takeout" ? "bg-amber-500 text-black" : "border"}`}>
                Takeout
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-2 bg-white/5 rounded" required />
          </div>

          <div>
            <label className="block text-sm">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mt-1 p-2 bg-white/5 rounded" required />
          </div>

          {orderType === "delivery" && (
            <div>
              <label className="block text-sm">Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full mt-1 p-2 bg-white/5 rounded" required />
            </div>
          )}

          <div className="pt-4 border-t border-white/10">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold">₹{total}</span>
            </div>

            <button disabled={loading} className="w-full py-3 rounded bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold">
              {loading ? "Processing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
