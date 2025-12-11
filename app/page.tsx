import Link from "next/link"
import { ShoppingBag, Truck, Clock, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
        <img
          src="/images/api-attachments-9f2gprwltdjgs5skekxju.jpg"
          alt="Feel in Saudia traditional Saudi Arabian dish with rice and grilled meat"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse" />
              <div className="relative bg-black border-4 border-amber-500 rounded-full w-full h-full flex items-center justify-center">
                <span className="text-amber-500 text-4xl font-bold">FS</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-amber-500 mb-4 font-serif tracking-wide">
            Feel in Saudia
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 mb-8 font-serif italic">Burdah In Every Bite</p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience authentic Saudi Arabian cuisine delivered to your doorstep. From traditional Mandi to delicious
            Shawarma, taste the heritage of Arabia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50"
            >
              Order Now
            </Link>
            <Link
              href="/menu"
              className="border-2 border-amber-500 text-amber-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-500 hover:text-black transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-amber-500 mb-16 font-serif">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full mb-6">
                <Truck className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Fast Delivery</h3>
              <p className="text-gray-300">
                Quick and reliable delivery to your doorstep. Hot, fresh, and delicious every time.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full mb-6">
                <ShoppingBag className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Easy Ordering</h3>
              <p className="text-gray-300">Simple and intuitive online ordering system. Order in just a few clicks.</p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full mb-6">
                <Clock className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Fresh Food</h3>
              <p className="text-gray-300">Made fresh to order with authentic spices and traditional recipes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-amber-500 mb-4 font-serif">Our Specialties</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Discover our authentic Saudi Arabian dishes</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🍖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Mandi</h3>
                <p className="text-gray-400 text-sm">Traditional rice and meat dish</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🌯</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Shawarma</h3>
                <p className="text-gray-400 text-sm">Wrapped perfection in every bite</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Platters</h3>
                <p className="text-gray-400 text-sm">Perfect for sharing with family</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🥗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Salads</h3>
                <p className="text-gray-400 text-sm">Fresh and healthy options</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-3 rounded-full font-bold hover:from-amber-600 hover:to-amber-700 transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black border-t border-amber-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-500 mb-8 font-serif">Contact Us</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-amber-500" />
              <span className="text-lg">+966 XXX XXX XXX</span>
            </div>
            <div className="hidden sm:block text-amber-500">|</div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-500" />
              <span className="text-lg">Open Daily: 11 AM - 11 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
