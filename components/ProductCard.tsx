import { FC } from 'react';
import { Plus } from 'lucide-react';
import { Sweet } from '../types';

interface ProductCardProps {
  product: Sweet;
  onAdd: (product: Sweet) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-brand-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.tag && (
          <div className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-brand-600">
            ₹{product.price}<span className="text-sm text-gray-500 font-normal">/{product.unit}</span>
          </p>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        <button
          onClick={() => onAdd(product)}
          className="w-full bg-brand-50 text-brand-700 border-2 border-brand-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
        >
          <Plus size={18} strokeWidth={3} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
