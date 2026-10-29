import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';
import { buildWhatsAppProductUrl } from '../config/site';

interface ProductCardProps {
  product: Product;
  onSelect: (slug: string) => void;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, priority = false }) => {
  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedOriginal = product.originalPrice
    ? `₹${product.originalPrice.toLocaleString('en-IN')}`
    : null;

  // Direct buy now via WhatsApp with canonical product link
  const handleQuickBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const canonical = typeof window !== 'undefined'
      ? `${window.location.origin}/product/${product.slug}`
      : `https://zavyon.com/product/${product.slug}`;
    const url = buildWhatsAppProductUrl({
      productName: product.name,
      categoryTitle: product.categoryTitle,
      price: product.price,
      quantity: 1,
      canonicalUrl: canonical,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelect(product.slug)}
      className="group cursor-pointer flex flex-col bg-[#1A1916] border border-[#282723] hover:border-[#3A3832] transition-all duration-300 relative focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8C0B3]"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product.slug);
        }
      }}
    >
      {/* Product Image Slot */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#201F1B]">
        <img
          src={product.images[0]}
          alt={product.name}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141411]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Tag (Zero-Pill discipline: unboxed subtle text with border) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C8C0B3] bg-[#141411]/85 backdrop-blur-xs px-2.5 py-1 border border-[#282723]">
          <span>{product.availability}</span>
        </div>
      </div>

      {/* Product Metadata & Action */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Unboxed Category Kicker */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E877D] mb-1.5 font-medium">
            <span>{product.categoryTitle}</span>
            {product.variants && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.variants[0].options.length} options</span>
              </>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-lg font-serif text-[#F2EEE6] group-hover:text-[#FFFFFF] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#8E877D] line-clamp-2 mt-1.5 font-light leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing and Actions Row */}
        <div className="pt-3 border-t border-[#282723] flex items-center justify-between gap-2">
          {/* Price with tabular numerals */}
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#F2EEE6] tabular-nums tracking-tight">
              {formattedPrice}
            </span>
            {formattedOriginal && (
              <span className="text-xs text-[#8E877D] line-through tabular-nums">
                {formattedOriginal}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickBuy}
              className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#141411] bg-[#F2EEE6] hover:bg-[#FFFFFF] px-3 py-1.5 transition-colors flex items-center gap-1"
              title="Buy now via WhatsApp"
            >
              <span>Buy Now</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
