"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { menuData } from "@/lib/menu-data"
import { useCart } from "@/lib/cart-context"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("shawarma")
  const { addToCart, cart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const categories = [
    { id: "shawarma", name: "Shawarma", icon: "🌯" },
    { id: "salad", name: "Salad", icon: "🥗" },
    { id: "platter", name: "Platter", icon: "🍽️" },
    { id: "open-shawarma", name: "Open Shawarma", icon: "🍖" },
    { id: "chicken-mandi", name: "Chicken Mandi", icon: "🍗" },
    { id: "mutton-mandi", name: "Mutton Mandi", icon: "🥩" },
    { id: "beef-mandi", name: "Beef Mandi", icon: "🥩" },
    { id: "fish-mandi", name: "Fish Mandi", icon: "🐟" },
    { id: "prawns-mandi", name: "Prawns Mandi", icon: "🦐" },
    { id: "add-ons", name: "Add Ons", icon: "➕" },
  ]

  const activeItems = menuData[activeCategory] || []
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCart = (item: any, size?: string) => {
    const itemKey = `${item.id}-${size || "regular"}`
    const quantity = quantities[itemKey] || 1

    addToCart(
      {
        ...item,
        size,
        price: size === "half" ? item.halfPrice : size === "full" ? item.fullPrice : item.price,
      },
      quantity,
    )

    setQuantities({ ...quantities, [itemKey]: 1 })
  }

  const updateQuantity = (itemId: string, size: string | undefined, delta: number) => {
    const itemKey = `${itemId}-${size || "regular"}`
    const current = quantities[itemKey] || 1
    const newQuantity = Math.max(1, current + delta)
    setQuantities({ ...quantities, [itemKey]: newQuantity })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-500 font-serif">
            Feel in Saudia
          </Link>

          <Link
            href="/cart"
            className="relative bg-amber-500 text-black px-6 py-2 rounded-full font-bold hover:bg-amber-600 transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="sticky top-[73px] z-40 bg-gray-900 border-b border-amber-500/30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-500 mb-8 font-serif capitalize">
          {categories.find((c) => c.id === activeCategory)?.name}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((item: any) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">{item.name}</h3>
                {item.description && <p className="text-gray-400 text-sm mb-4">{item.description}</p>}

                {/* Price Display */}
                {item.halfPrice && item.fullPrice ? (
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-300">Half</span>
                        <span className="text-amber-500 font-bold">SAR {item.halfPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, "half", -1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{quantities[`${item.id}-half`] || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, "half", 1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAddToCart(item, "half")}
                          className="ml-2 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-600 transition-all"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-gray-300">Full</span>
                        <span className="text-amber-500 font-bold">SAR {item.fullPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, "full", -1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{quantities[`${item.id}-full`] || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, "full", 1)}
                          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAddToCart(item, "full")}
                          className="ml-2 bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-600 transition-all"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-amber-500">SAR {item.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, undefined, -1)}
                        className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{quantities[`${item.id}-regular`] || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, undefined, 1)}
                        className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Add to Cart Button for Single Price Items */}
                {!item.halfPrice && !item.fullPrice && (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-amber-500 text-black py-3 rounded-full font-bold hover:bg-amber-600 transition-all"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
