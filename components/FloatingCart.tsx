import { FC } from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartProps {
  count: number;
  onClick: () => void;
}

const FloatingCart: FC<FloatingCartProps> = ({ count, onClick }) => {
  if (count === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-600 text-white pl-4 pr-6 py-3 rounded-full shadow-lg shadow-brand-600/40 hover:bg-brand-700 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-5 fade-in"
    >
      <div className="relative">
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-white text-brand-600 text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-brand-600">
          {count}
        </span>
      </div>
      <span className="font-bold text-lg">View Cart</span>
    </button>
  );
};

export default FloatingCart;
