import React from 'react';
import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { SITE_CONFIG } from '../config/site';

interface HomeViewProps {
  navigate: (path: string) => void;
  onOpenWelcome: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate, onOpenWelcome }) => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="w-full flex flex-col bg-[#141411] text-[#F2EEE6]">
      {/* 01. STRIKING EDITORIAL HERO */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start overflow-hidden pt-28 pb-16 sm:pb-24 px-6 sm:px-12">
        {/* Full-width editorial hero image with architectural composition */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_flagship_living_1793235462690.jpg"
            alt="ZAVYON architectural interior showcase"
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
          {/* Subtle gradient scrim ensuring crisp typographic contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141411] via-[#141411]/45 to-[#141411]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141411]/70 via-[#141411]/20 to-transparent" />
        </div>

        {/* Hero Content aligned to bottom-left */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C8C0B3] font-medium">
              Curated Multi-Category Living
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F2EEE6] font-light leading-[1.08] tracking-tight mb-6">
            Considered Finds.<br />
            <span className="italic font-normal text-[#FFFFFF]">Distinctive Living.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#C8C0B3] font-light max-w-xl mb-10 leading-relaxed">
            A curated world of home, style, and everyday discoveries. Crafted through restraint, architectural materials, and enduring beauty.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 bg-[#F2EEE6] text-[#141411] hover:bg-[#FFFFFF] text-xs uppercase tracking-[0.22em] font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8C0B3]"
            >
              <span>Discover The Collection</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>

            <button
              onClick={onOpenWelcome}
              className="px-8 py-4 border border-[#C8C0B3]/50 text-[#F2EEE6] hover:bg-[#282723]/60 hover:border-[#FFFFFF] text-xs uppercase tracking-[0.22em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8C0B3]"
            >
              <Compass className="w-4 h-4 text-[#C8C0B3]" />
              <span>Explore Categories</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02. COLLECTION INTRODUCTION: "A collection beyond categories." */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#8E877D] font-medium">
              The Architecture of Curation
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F2EEE6] font-light leading-tight">
              A collection beyond categories.
            </h2>
            <div className="w-12 h-[1px] bg-[#BFA37C]" />
            <p className="text-sm sm:text-base text-[#C8C0B3] font-light leading-relaxed">
              ZAVYON brings together selected pieces across home decor, fashion accessories, garments, and other unexpected discoveries. We reject the conventional boundaries of retail in pursuit of items that elevate daily rituals.
            </p>
            <p className="text-xs sm:text-sm text-[#8E877D] font-light leading-relaxed">
              Every object is selected for tactile integrity, honest materials, and an enduring character that outlasts transient trends.
            </p>
          </div>

          {/* Asymmetrical Editorial Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Panel 1: Home Decor */}
            <div
              onClick={() => navigate('/category/home-decor')}
              className="group cursor-pointer flex flex-col bg-[#1A1916] border border-[#282723] hover:border-[#C8C0B3]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/cat_home_decor_1793235463113.jpg"
                  alt="Home Decor curation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8E877D] uppercase">World 01</span>
                <h3 className="text-xl font-serif text-[#F2EEE6] group-hover:text-[#FFFFFF] mt-1 mb-2">Home Decor</h3>
                <p className="text-xs text-[#8E877D] font-light">&ldquo;Objects and details for considered living.&rdquo;</p>
              </div>
            </div>

            {/* Panel 2: Fashion Accessories (Offset down for asymmetric rhythm) */}
            <div
              onClick={() => navigate('/category/fashion-accessories')}
              className="group cursor-pointer flex flex-col bg-[#1A1916] border border-[#282723] hover:border-[#C8C0B3]/50 transition-all duration-500 overflow-hidden sm:mt-10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/cat_fashion_acc_1793235463210.jpg"
                  alt="Fashion Accessories curation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8E877D] uppercase">World 02</span>
                <h3 className="text-xl font-serif text-[#F2EEE6] group-hover:text-[#FFFFFF] mt-1 mb-2">Fashion Accessories</h3>
                <p className="text-xs text-[#8E877D] font-light">&ldquo;Small details. A signature of your own.&rdquo;</p>
              </div>
            </div>

            {/* Panel 3: Garments */}
            <div
              onClick={() => navigate('/category/garments')}
              className="group cursor-pointer flex flex-col bg-[#1A1916] border border-[#282723] hover:border-[#C8C0B3]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/cat_garments_1793235464700.jpg"
                  alt="Garments curation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8E877D] uppercase">World 03</span>
                <h3 className="text-xl font-serif text-[#F2EEE6] group-hover:text-[#FFFFFF] mt-1 mb-2">Garments</h3>
                <p className="text-xs text-[#8E877D] font-light">&ldquo;Personal style, thoughtfully discovered.&rdquo;</p>
              </div>
            </div>

            {/* Panel 4: Others */}
            <div
              onClick={() => navigate('/category/others')}
              className="group cursor-pointer flex flex-col bg-[#1A1916] border border-[#282723] hover:border-[#C8C0B3]/50 transition-all duration-500 overflow-hidden sm:mt-10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/cat_others_1793235465648.jpg"
                  alt="Curated Others collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono tracking-widest text-[#8E877D] uppercase">World 04</span>
                <h3 className="text-xl font-serif text-[#F2EEE6] group-hover:text-[#FFFFFF] mt-1 mb-2">Others</h3>
                <p className="text-xs text-[#8E877D] font-light">&ldquo;Unexpected finds worth discovering.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED COLLECTION: SELECTED FOR YOU */}
      <section className="py-24 bg-[#10100E] border-t border-b border-[#282723]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8E877D] font-medium block mb-2">
                Curator&apos;s Edit
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F2EEE6] font-light">
                SELECTED FOR YOU
              </h2>
            </div>

            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors self-start sm:self-auto group"
            >
              <span>View All Discoveries ({featuredProducts.length} items)</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Carefully composed product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(slug) => navigate(`/product/${slug}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04. BRAND STORY: "Less ordinary. More considered." */}
      <section className="py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
          {/* Large tactile editorial photograph */}
          <div className="lg:col-span-7 overflow-hidden border border-[#282723]">
            <img
              src="/src/assets/images/story_craftsmanship_1793235465626.jpg"
              alt="Artisan hands in workshop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.04]"
            />
          </div>

          {/* Text block with thoughtful whitespace */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] font-medium">
              The Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F2EEE6] font-light leading-tight">
              Less ordinary.<br />
              <span className="italic">More considered.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#BFA37C]" />
            <p className="text-base text-[#C8C0B3] font-light leading-relaxed">
              ZAVYON is a curated destination for discovering products across the spaces we live in, the styles we express, and the details that make everyday life our own.
            </p>
            <p className="text-sm text-[#8E877D] font-light leading-relaxed">
              We collaborate with independent workshops and master artisans who practice quiet discipline. No artificial mass runs; only deliberate pieces that invite touch, reflection, and quiet companionship.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/story')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F2EEE6] hover:text-[#FFFFFF] py-2 border-b border-[#3A3832] hover:border-[#F2EEE6] transition-all"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CLOSING SECTION: "Your next favourite find might be here." */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-[#1A1916] border-t border-[#282723] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] font-medium">
            The Curated Flagship
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#F2EEE6] font-light leading-tight">
            &ldquo;Your next favourite find might be here.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-[#C8C0B3] font-light max-w-lg leading-relaxed">
            Four distinct categories. Hand-inspected materials. Inquire directly with our concierge via WhatsApp for bespoke ordering.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate('/shop')}
              className="px-10 py-4 bg-[#F2EEE6] text-[#141411] hover:bg-[#FFFFFF] text-xs uppercase tracking-[0.24em] font-semibold transition-all shadow-sm cursor-pointer"
            >
              EXPLORE ZAVYON
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
