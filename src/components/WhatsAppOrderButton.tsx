import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';
import { buildWhatsAppProductUrl } from '../config/site';

interface WhatsAppOrderButtonProps {
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
  validateOptions?: () => boolean;
  className?: string;
  label?: string;
}

export const WhatsAppOrderButton: React.FC<WhatsAppOrderButtonProps> = ({
  product,
  quantity,
  selectedOptions = {},
  validateOptions,
  className = '',
  label = 'BUY NOW · VIA WHATSAPP',
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    // If validation provided, check required options
    if (validateOptions && !validateOptions()) {
      e.preventDefault();
      setErrorMessage('Please choose your required options above before ordering.');
      return;
    }

    setErrorMessage(null);

    // Format selected options string
    const optionsArray = Object.entries(selectedOptions)
      .filter(([_, value]) => Boolean(value))
      .map(([key, value]) => `${key}: ${value}`);
    const optionsText = optionsArray.join(', ');

    const canonicalUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/product/${product.slug}`
      : `https://zavyon.com/product/${product.slug}`;

    const destinationUrl = buildWhatsAppProductUrl({
      productName: product.name,
      categoryTitle: product.categoryTitle,
      price: product.price,
      quantity,
      optionsText: optionsText.length > 0 ? optionsText : undefined,
      canonicalUrl,
    });

    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        className={`w-full py-4 px-6 text-xs uppercase tracking-[0.22em] font-semibold text-[#141411] bg-[#F2EEE6] hover:bg-[#FFFFFF] active:bg-[#C8C0B3] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8C0B3] ${className}`}
        aria-label="Order or enquire about this item via WhatsApp concierge"
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 stroke-[2]" />
      </button>

      {errorMessage && (
        <p className="text-xs text-[#E0A899] font-medium text-center animate-fade-in" role="alert">
          {errorMessage}
        </p>
      )}

      {/* Reassurance text without showing any phone numbers */}
      <p className="text-[11px] text-[#8E877D] text-center font-light leading-normal">
        Connect directly with our client concierge for availability, bespoke dispatch, and secure payment assistance.
      </p>
    </div>
  );
};
