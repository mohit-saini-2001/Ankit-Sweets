import { FC } from 'react';
import { X, Minus, Plus, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onClear: () => void;
}

const CartModal: FC<CartModalProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onClear }) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    // Construct the message
    let message = "Hello, I want to order:\n";
    cart.forEach(item => {
      message += `• ${item.quantity}${item.unit} ${item.name}\n`;
    });
    message += `\nTotal: ₹${totalAmount}`;
    message += "\n\nPlease confirm my order.";

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">

          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-brand-50">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
              <p className="text-sm text-brand-600">{totalItems} items</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-brand-100 rounded-full text-gray-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-300">
                  <MessageCircle size={40} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="text-gray-500 max-w-xs">Add some delicious sweets from our catalog to get started!</p>
                <button
                  onClick={onClose}
                  className="text-brand-600 font-bold hover:underline mt-2"
                >
                  Browse Sweets
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">₹{item.price}/{item.unit}</p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 rounded-md bg-brand-100 hover:bg-brand-200 text-brand-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-700">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-green-200 hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                <MessageCircle size={24} fill="white" className="text-white" />
                Order via WhatsApp
              </button>

              <button
                onClick={onClear}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
