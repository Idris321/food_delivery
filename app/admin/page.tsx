// app/admin/page.tsx
"use client"

import React, { useEffect, useState } from "react"
import { getOrders, updateOrderStatus, type Order } from "@/lib/orders"
import dayjs from "dayjs"




export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  function refresh() {
    setOrders(getOrders())
  }

  function handleStatusChange(id: string, next: Order["status"]) {
    updateOrderStatus(id, next)
    setOrders(getOrders())
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin — Orders</h1>

        <div className="mb-4">
          <button onClick={refresh} className="px-3 py-1 border rounded">Refresh</button>
        </div>

        {orders.length === 0 && <div className="text-sm text-white/60">No orders yet.</div>}

        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="bg-white/5 p-4 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-white/70">{dayjs(o.createdAt).format("DD MMM YYYY, HH:mm:ss")}</div>
                  <div className="text-lg font-semibold">{o.id} — {o.type}</div>
                  <div className="text-sm text-white/80 mt-1">
                    {o.customer?.name} {o.customer?.phone && <>• {o.customer.phone}</>}
                    {o.customer?.address && <div className="mt-1">{o.customer.address}</div>}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm">Total</div>
                  <div className="font-bold text-lg">₹{o.total}</div>
                  <div className="mt-2">
                    <span className="px-2 py-1 rounded bg-white/6 text-sm">{o.status}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-sm font-medium mb-2">Items</div>
                <ul className="space-y-1">
                  {o.items.map((it) => (
                    <li key={it.id} className="flex justify-between text-sm">
                      <div>
                        {it.name} {it.size ? `(${it.size})` : ""} x {it.quantity}
                      </div>
                      <div>₹{it.price * it.quantity}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex gap-2">
                {o.status !== "preparing" && (
                  <button onClick={() => handleStatusChange(o.id, "preparing")} className="px-3 py-1 border rounded">Mark Preparing</button>
                )}
                {o.status !== "ready" && (
                  <button onClick={() => handleStatusChange(o.id, "ready")} className="px-3 py-1 border rounded">Mark Ready</button>
                )}
                {o.status !== "served" && (
                  <button onClick={() => handleStatusChange(o.id, "served")} className="px-3 py-1 border rounded">Mark Served</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
