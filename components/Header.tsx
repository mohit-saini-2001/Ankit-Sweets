import { FC } from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-50/80 backdrop-blur-md border-b border-brand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg text-white">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-900 leading-tight">Golden Sweets</h1>
              <p className="text-xs text-brand-600 font-medium">Authentic Taste</p>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={onContactClick}
            className="hidden sm:block text-brand-700 hover:text-brand-900 font-medium transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
