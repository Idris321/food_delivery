"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart()
  const router = useRouter()
  const [orderType, setOrderType] = useState<"delivery" | "takeout">("delivery")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
    paymentMethod: "cash",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate order processing
    setTimeout(() => {
      const orderId = Math.random().toString(36).substring(2, 9).toUpperCase()
      clearCart()
      router.push(`/order-confirmation?orderId=${orderId}&type=${orderType}`)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  const subtotal = getTotal()
  const deliveryFee = orderType === "delivery" ? 15 : 0
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/cart" className="flex items-center gap-2 text-amber-500 hover:text-amber-400">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cart</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-500 mb-8 font-serif">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Type Selection */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Order Type</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setOrderType("delivery")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  orderType === "delivery"
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="text-3xl mb-2">🚚</div>
                <div className="font-bold">Delivery</div>
                <div className="text-sm text-gray-400">30-45 mins</div>
              </button>

              <button
                type="button"
                onClick={() => setOrderType("takeout")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  orderType === "takeout" ? "border-amber-500 bg-amber-500/10" : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="text-3xl mb-2">🏃</div>
                <div className="font-bold">Takeout</div>
                <div className="text-sm text-gray-400">15-20 mins</div>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
                  placeholder="+966 XXX XXX XXX"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address (only for delivery) */}
          {orderType === "delivery" && (
            <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
              <h2 className="text-xl font-bold text-amber-400 mb-4">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required={orderType === "delivery"}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Building, Street, Area"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required={orderType === "delivery"}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="City name"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Special Instructions</h2>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
              placeholder="Any special requests for your order?"
            />
          </div>

          {/* Payment Method */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Payment Method</h2>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size || "regular"}`} className="flex justify-between text-gray-300">
                  <span>
                    {item.name} {item.size && `(${item.size})`} x {item.quantity}
                  </span>
                  <span>SAR {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>SAR {subtotal.toFixed(2)}</span>
              </div>
              {orderType === "delivery" && (
                <div className="flex justify-between text-gray-300">
                  <span>Delivery Fee</span>
                  <span>SAR {deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold pt-2">
                <span className="text-amber-400">Total</span>
                <span className="text-amber-500">SAR {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  )
}
