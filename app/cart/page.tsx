"use client"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart()
  const router = useRouter()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="bg-gray-900 border-b border-amber-500/30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/menu" className="flex items-center gap-2 text-amber-500 hover:text-amber-400">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Menu</span>
            </Link>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-amber-500 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Add some delicious items to get started!</p>
          <Link
            href="/menu"
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-all"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/menu" className="flex items-center gap-2 text-amber-500 hover:text-amber-400">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Menu</span>
          </Link>
          <h1 className="text-2xl font-bold text-amber-500 font-serif">Your Cart</h1>
          <button onClick={clearCart} className="text-red-500 hover:text-red-400 text-sm">
            Clear Cart
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size || "regular"}`}
              className="bg-gray-900 rounded-lg p-6 border border-amber-500/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-400 mb-1">
                    {item.name}
                    {item.size && <span className="ml-2 text-sm text-gray-400 capitalize">({item.size})</span>}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">SAR {item.price} each</p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-red-500 hover:text-red-400 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-amber-500">SAR {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-900 rounded-lg p-6 border border-amber-500/30 mb-6">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">Order Summary</h2>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>SAR {getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Delivery Fee</span>
              <span>SAR 15.00</span>
            </div>
            <div className="border-t border-gray-700 pt-3 flex justify-between text-xl font-bold">
              <span className="text-amber-400">Total</span>
              <span className="text-amber-500">SAR {(getTotal() + 15).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}
