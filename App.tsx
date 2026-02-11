import { useState, useEffect, useRef, FC } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import FloatingCart from './components/FloatingCart';
import CartModal from './components/CartModal';
import OfferBanner from './components/OfferBanner.tsx';
import { SWEET_CATALOG } from './constants';
import { Sweet, CartItem } from './types';
import { Phone, MapPin, Clock, Instagram, Facebook, Search } from 'lucide-react';

const App: FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const contactRef = useRef<HTMLDivElement>(null);

  const filteredSweets = SWEET_CATALOG.filter(sweet =>
    sweet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add item to cart
  const addToCart = (product: Sweet) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Show a toast notification here
  };

  // Update quantity
  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  // Clear cart
  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <OfferBanner
        message="🎉 Special Festival Offer: Flat 20% OFF on all orders above ₹2000! Use Code: SWEET20"
        variant="secondary"
      />
      <Header onContactClick={scrollToContact} />

      {/* Hero Section */}
      <section className="bg-brand-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Taste the Tradition</h2>
          <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Handcrafted Indian sweets made with pure ghee and premium ingredients.
            Perfect for every celebration.
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search sweets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <main id="catalog" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-brand-200 flex-1"></div>
          <h2 className="text-3xl font-bold text-center text-brand-800">Our Sweets</h2>
          <div className="h-px bg-brand-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSweets.map((sweet) => (
            <ProductCard
              key={sweet.id}
              product={sweet}
              onAdd={addToCart}
            />
          ))}
        </div>
      </main>

      {/* Footer / Contact Section */}
      <footer ref={contactRef} className="bg-brand-900 text-brand-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Golden Sweets</h3>
              <p className="text-brand-200 mb-4">
                Serving sweetness since 1985. We take pride in our authentic recipes and hygiene standards.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="hover:text-white transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} /> <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} /> <span>123 Market Road, Sweet City</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Clock size={18} /> <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Clock size={18} /> <span>Sunday: 9:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-800 mt-8 pt-8 text-center text-sm text-brand-400">
            © {new Date().getFullYear()} Golden Sweets Shop. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating UI Elements */}
      <FloatingCart
        count={cartCount}
        onClick={() => setIsCartOpen(true)}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onClear={clearCart}
      />
    </div>
  );
};

export default App;
