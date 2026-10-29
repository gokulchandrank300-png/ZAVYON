import React, { useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface WelcomeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string) => void;
  onExploreAll: () => void;
}

export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onExploreAll,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scrolling when overlay is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus first focusable item for accessibility
      const timer = setTimeout(() => {
        firstButtonRef.current?.focus();
      }, 50);

      // Handle Escape key to close
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to ZAVYON — Select your curated world"
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#141411]/90 backdrop-blur-md transition-opacity duration-500 flex flex-col justify-between"
    >
      {/* Top Bar with Wordmark and subtle Close Control */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 flex items-center justify-between">
        <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#F2EEE6] font-normal">
          {SITE_CONFIG.brandName}
        </span>

        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8C0B3] hover:text-[#FFFFFF] py-2 px-3 border border-transparent hover:border-[#3A3832] transition-all focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8C0B3]"
          aria-label="Close welcome entrance and view flagship"
        >
          <span>Continue to Flagship</span>
          <X className="w-4 h-4 stroke-[1.5] group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Editorial Entrance Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-8 sm:py-12 my-auto">
        {/* Tracked uppercase label & refined headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8C0B3] mb-3 font-medium">
            {SITE_CONFIG.welcomeKicker}
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#F2EEE6] font-light leading-tight tracking-tight mb-4">
            &ldquo;{SITE_CONFIG.welcomeHeadline.replace(/[."]/g, '')}&rdquo;
          </h1>
          <p className="text-sm sm:text-base text-[#C8C0B3] font-light tracking-wide max-w-xl mx-auto">
            {SITE_CONFIG.welcomeSubcopy}
          </p>
        </div>

        {/* Four Image-Led Bespoke Editorial Category Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SITE_CONFIG.categories.map((category, index) => (
            <button
              key={category.id}
              ref={index === 0 ? firstButtonRef : undefined}
              onClick={() => onSelectCategory(category.id)}
              className="group relative flex flex-col text-left overflow-hidden bg-[#282723]/40 border border-[#282723] hover:border-[#C8C0B3]/50 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8C0B3]"
            >
              {/* Category Imagery with subtle zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1E1D19]">
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                {/* Subtle vignette gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141411] via-[#141411]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Subtle Category Number Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#C8C0B3] px-2 py-0.5 border border-[#3A3832] bg-[#141411]/70 backdrop-blur-xs">
                    {category.number}
                  </span>
                </div>

                {/* Bottom text inside card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#F2EEE6] tracking-wide group-hover:text-[#FFFFFF] transition-colors">
                      {category.name}
                    </h2>
                    <ArrowRight className="w-4 h-4 text-[#C8C0B3] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-[#C8C0B3] font-light leading-relaxed line-clamp-2">
                    &ldquo;{category.subtitle}&rdquo;
                  </p>
                  
                  {/* Subtle responsive bottom indicator line */}
                  <div className="w-full h-[1px] bg-[#3A3832] mt-3 group-hover:bg-[#C8C0B3] transition-colors duration-500" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Bottom Bar with "Curated to be Discovered" & "Explore Everything" Link */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-8 sm:pb-10 pt-4 border-t border-[#282723]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E877D] font-medium">
          {SITE_CONFIG.curatedFooterLine}
        </span>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
          <button
            onClick={onExploreAll}
            className="text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors underline underline-offset-4 decoration-[#3A3832] hover:decoration-[#F2EEE6]"
          >
            Explore all items
          </button>
          <span className="text-[#3A3832]">·</span>
          <button
            onClick={onClose}
            className="text-[#8E877D] hover:text-[#C8C0B3] transition-colors"
          >
            Enter Flagship Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
