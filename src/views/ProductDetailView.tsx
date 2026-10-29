import React, { useState } from 'react';
import { ArrowLeft, Check, ShieldCheck, Truck, RefreshCw, ChevronRight } from 'lucide-react';
import { Product, getRelatedProducts } from '../data/products';
import { WhatsAppOrderButton } from '../components/WhatsAppOrderButton';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailViewProps {
  product: Product;
  navigate: (path: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, navigate }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    // If not garments, preselect the first option for convenience; for garments, leave sizes unselected if mandatory
    const initial: Record<string, string> = {};
    if (product.variants) {
      product.variants.forEach((v) => {
        if (!v.required) {
          initial[v.name] = v.options[0];
        }
      });
    }
    return initial;
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  const relatedProducts = getRelatedProducts(product.slug, 3);

  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedOriginal = product.originalPrice
    ? `₹${product.originalPrice.toLocaleString('en-IN')}`
    : null;

  const handleOptionSelect = (variantName: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [variantName]: option,
    }));
    setValidationError(null);
  };

  const validateOptions = (): boolean => {
    if (product.variants) {
      for (const variant of product.variants) {
        if (variant.required && !selectedOptions[variant.name]) {
          setValidationError(`Please select your desired ${variant.name.toLowerCase()} before ordering.`);
          return false;
        }
      }
    }
    return true;
  };

  return (
    <div className="w-full min-h-screen bg-[#141411] text-[#F2EEE6] pt-24 pb-28">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 mb-6">
        <nav className="flex items-center gap-2 text-xs text-[#8E877D] uppercase tracking-wider">
          <button
            onClick={() => navigate('/')}
            className="hover:text-[#F2EEE6] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#3A3832]" />
          <button
            onClick={() => navigate(`/category/${product.category}`)}
            className="hover:text-[#F2EEE6] transition-colors"
          >
            {product.categoryTitle}
          </button>
          <ChevronRight className="w-3 h-3 text-[#3A3832]" />
          <span className="text-[#F2EEE6] truncate max-w-[200px] sm:max-w-xs">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main Product Layout: 2-Column Split */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary High-Resolution Display */}
            <div className="relative aspect-[4/3] w-full bg-[#1A1916] border border-[#282723] overflow-hidden">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} gallery view ${selectedImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.98]"
              />
              {/* Availability tag */}
              <div className="absolute top-4 left-4 bg-[#141411]/90 backdrop-blur-xs px-3 py-1 border border-[#282723] text-[10px] uppercase tracking-[0.2em] text-[#C8C0B3]">
                {product.availability}
              </div>
            </div>

            {/* Thumbnail Switcher (if multiple images) */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 bg-[#1A1916] border overflow-hidden cursor-pointer transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#F2EEE6] opacity-100 ring-1 ring-[#F2EEE6]'
                        : 'border-[#282723] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Editorial Specifications Table */}
            <div className="mt-8 pt-8 border-t border-[#282723]">
              <h3 className="text-sm uppercase tracking-[0.24em] text-[#F2EEE6] font-medium mb-4">
                Piece Specifications
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="pb-3 border-b border-[#282723]/60 flex flex-col gap-1">
                    <dt className="text-[#8E877D] uppercase tracking-wider">{key}</dt>
                    <dd className="text-[#F2EEE6] font-light leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-[#1A1916]/50 p-6 sm:p-8 border border-[#282723]">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#8E877D] mb-2 font-medium">
                <span>{product.categoryTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[#C8C0B3]">ID: {product.id}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif text-[#F2EEE6] font-light leading-tight mb-4">
                {product.name}
              </h1>

              {/* Price display with tabular figures */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-semibold text-[#F2EEE6] tabular-nums tracking-tight">
                  {formattedPrice}
                </span>
                {formattedOriginal && (
                  <span className="text-sm text-[#8E877D] line-through tabular-nums">
                    {formattedOriginal}
                  </span>
                )}
                <span className="text-xs text-[#8E877D] font-light tracking-wide">
                  (Inclusive of taxes)
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#C8C0B3] font-light leading-relaxed mb-6">
                {product.fullDescription}
              </p>
            </div>

            {/* Product Variants (Garment size, tone, leather color) */}
            {product.variants && product.variants.length > 0 && (
              <div className="flex flex-col gap-6 pt-4 border-t border-[#282723]">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="uppercase tracking-[0.2em] text-[#C8C0B3] font-medium">
                        Select {variant.name} {variant.required && <span className="text-[#BFA37C]">*</span>}
                      </span>
                      {selectedOptions[variant.name] && (
                        <span className="text-[#F2EEE6] font-medium">
                          {selectedOptions[variant.name]}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {variant.options.map((opt) => {
                        const isSelected = selectedOptions[variant.name] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleOptionSelect(variant.name, opt)}
                            className={`py-2.5 px-3 text-xs uppercase tracking-wider transition-all border text-center ${
                              isSelected
                                ? 'bg-[#F2EEE6] text-[#141411] border-[#F2EEE6] font-semibold'
                                : 'bg-[#141411] text-[#C8C0B3] border-[#282723] hover:border-[#8E877D]'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-4 border-t border-[#282723]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C8C0B3] font-medium">
                Quantity
              </span>
              <div className="flex items-center border border-[#282723] bg-[#141411]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-mono tabular-nums text-[#F2EEE6]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Primary Order Affordance: WhatsApp Purchase Flow */}
            <div className="pt-2">
              <WhatsAppOrderButton
                product={product}
                quantity={quantity}
                selectedOptions={selectedOptions}
                validateOptions={validateOptions}
              />
            </div>

            {/* Trust and Assurance Indicators (Clean typography, no fake claims) */}
            <div className="pt-6 border-t border-[#282723] flex flex-col gap-3 text-xs text-[#8E877D] font-light">
              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-[#C8C0B3] shrink-0 mt-0.5" />
                <span>Complimentary insured surface dispatch on all orders across India.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C8C0B3] shrink-0 mt-0.5" />
                <span>Authentic workshop edition inspected and hallmarked prior to packaging.</span>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-4 h-4 text-[#C8C0B3] shrink-0 mt-0.5" />
                <span>7-day return inspection window for pristine, unused creations.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-28 pt-16 border-t border-[#282723]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E877D] font-medium block mb-2">
                  Harmonious Finds
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EEE6] font-light">
                  Complete the Aesthetic
                </h2>
              </div>
              <button
                onClick={() => navigate('/shop')}
                className="text-xs uppercase tracking-wider text-[#C8C0B3] hover:text-[#FFFFFF] underline underline-offset-4"
              >
                Browse All →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onSelect={(slug) => {
                    navigate(`/product/${slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
