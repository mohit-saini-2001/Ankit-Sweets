import { FC } from 'react';
import { X } from 'lucide-react';
import { useState } from 'react';

interface OfferBannerProps {
    message: string;
    variant?: 'primary' | 'secondary' | 'accent';
    onClose?: () => void;
}

const OfferBanner: FC<OfferBannerProps> = ({ message, variant = 'primary', onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const bgColors = {
        primary: 'bg-brand-600',
        secondary: 'bg-yellow-500',
        accent: 'bg-red-600',
    };

    const textColors = {
        primary: 'text-white',
        secondary: 'text-brand-900',
        accent: 'text-white',
    };

    return (
        <div className={`${bgColors[variant]} ${textColors[variant]} px-4 py-2 relative text-center text-sm font-medium z-50`}>
            <div className="container mx-auto flex items-center justify-center">
                <span>{message}</span>
                {onClose && (
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            onClose();
                        }}
                        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                )}
                {!onClose && (
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default OfferBanner;
