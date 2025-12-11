"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const orderType = searchParams.get("type")

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-amber-500 mb-4 font-serif">Order Confirmed!</h1>
          <p className="text-xl text-gray-300 mb-2">Thank you for your order</p>
          <p className="text-gray-400">
            Order ID: <span className="text-amber-500 font-mono font-bold">{orderId}</span>
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-amber-500/30 mb-8">
          {orderType === "delivery" ? (
            <>
              <div className="text-6xl mb-4">🚚</div>
              <h2 className="text-2xl font-bold text-amber-400 mb-3">Your order is on the way!</h2>
              <p className="text-gray-300 mb-4">
                Estimated delivery time: <span className="font-bold text-amber-500">30-45 minutes</span>
              </p>
              <p className="text-gray-400 text-sm">You will receive a call from our delivery partner shortly.</p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">🏃</div>
              <h2 className="text-2xl font-bold text-amber-400 mb-3">Your order is being prepared!</h2>
              <p className="text-gray-300 mb-4">
                Your order will be ready for pickup in: <span className="font-bold text-amber-500">15-20 minutes</span>
              </p>
              <p className="text-gray-400 text-sm">We will notify you when your order is ready.</p>
            </>
          )}
        </div>

        <div className="space-y-4">
          <Link
            href="/menu"
            className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-full font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
          >
            Order Again
          </Link>
          <Link
            href="/"
            className="block w-full border-2 border-amber-500 text-amber-500 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-black transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
