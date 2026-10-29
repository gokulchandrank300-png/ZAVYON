import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, Product } from '../data/products';
import { SITE_CONFIG } from '../config/site';

interface CollectionViewProps {
  categoryId?: string; // 'home-decor' | 'fashion-accessories' | 'garments' | 'others' or undefined for all
  navigate: (path: string) => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({ categoryId, navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');

  // Match category meta if a specific category is requested
  const categoryMeta = useMemo(() => {
    if (!categoryId || categoryId === 'all') return null;
    return SITE_CONFIG.categories.find((c) => c.id === categoryId);
  }, [categoryId]);

  // Base products for this view
  const baseProducts = useMemo(() => {
    if (!categoryId || categoryId === 'all') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((p) => p.category === categoryId);
  }, [categoryId]);

  // Extract unique tags for this category
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    baseProducts.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [baseProducts]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    return baseProducts
      .filter((product) => {
        // Search filter
        if (searchQuery.trim().length > 0) {
          const query = searchQuery.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesDesc = product.shortDescription.toLowerCase().includes(query);
          const matchesTags = product.tags.some((t) => t.toLowerCase().includes(query));
          if (!matchesName && !matchesDesc && !matchesTags) return false;
        }

        // Tag filter
        if (selectedTag !== 'all') {
          if (!product.tags.includes(selectedTag)) return false;
        }

        // Availability filter
        if (selectedAvailability !== 'all') {
          if (product.availability !== selectedAvailability) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        // Default featured sorting
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [baseProducts, searchQuery, selectedTag, selectedAvailability, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('all');
    setSelectedAvailability('all');
    setSortBy('featured');
  };

  const hasActiveFilters = searchQuery !== '' || selectedTag !== 'all' || selectedAvailability !== 'all' || sortBy !== 'featured';

  return (
    <div className="w-full min-h-screen bg-[#141411] text-[#F2EEE6] pt-24 pb-28">
      {/* Editorial Header / Hero Banner */}
      <section className="relative overflow-hidden bg-[#1A1916] border-b border-[#282723] mb-12">
        {categoryMeta ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[420px] items-stretch">
            {/* Title & Introduction Column */}
            <div className="lg:col-span-7 p-8 sm:p-14 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#8E877D] mb-3">
                <button
                  onClick={() => navigate('/shop')}
                  className="hover:text-[#F2EEE6] flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Collections</span>
                </button>
                <span>·</span>
                <span className="font-mono">{categoryMeta.number}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F2EEE6] font-light tracking-tight mb-4">
                {categoryMeta.name}
              </h1>

              <p className="text-lg font-serif italic text-[#C8C0B3] mb-4">
                &ldquo;{categoryMeta.subtitle}&rdquo;
              </p>

              <p className="text-sm text-[#8E877D] font-light max-w-xl leading-relaxed">
                {categoryMeta.description}
              </p>
            </div>

            {/* Category Banner Imagery */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#282723]">
              <img
                src={categoryMeta.image}
                alt={categoryMeta.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141411]/60 to-transparent lg:hidden" />
            </div>
          </div>
        ) : (
          /* General Shop All Banner */
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20 flex flex-col justify-center text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] mb-3 font-medium">
              The Complete Catalogue
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#F2EEE6] font-light tracking-tight mb-4">
              All Discoveries
            </h1>
            <p className="text-sm sm:text-base text-[#C8C0B3] font-light max-w-2xl mx-auto leading-relaxed">
              Explore our unified collection across Home Decor, Fashion Accessories, Garments, and unexpected lifestyle artifacts.
            </p>

            {/* Category Quick Filter Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              <button
                onClick={() => navigate('/shop')}
                className="px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium bg-[#F2EEE6] text-[#141411] transition-colors"
              >
                All Worlds
              </button>
              {SITE_CONFIG.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/category/${cat.id}`)}
                  className="px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium text-[#C8C0B3] hover:text-[#FFFFFF] bg-[#282723]/60 hover:bg-[#282723] border border-[#3A3832] transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Filter, Search & Sort Toolbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10">
        <div className="p-4 bg-[#1A1916] border border-[#282723] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E877D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by piece name or material..."
              className="w-full bg-[#141411] border border-[#282723] pl-10 pr-4 py-2.5 text-xs text-[#F2EEE6] placeholder-[#55524B] focus:border-[#C8C0B3] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8E877D] hover:text-[#F2EEE6]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controls: Tags & Sort */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Tag Filter */}
            {availableTags.length > 0 && (
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-[#141411] border border-[#282723] px-3 py-2.5 text-xs text-[#C8C0B3] focus:border-[#C8C0B3] focus:outline-none cursor-pointer"
                aria-label="Filter by material or tag"
              >
                <option value="all">All Styles & Materials</option>
                {availableTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            )}

            {/* Availability Filter */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="bg-[#141411] border border-[#282723] px-3 py-2.5 text-xs text-[#C8C0B3] focus:border-[#C8C0B3] focus:outline-none cursor-pointer"
              aria-label="Filter by availability"
            >
              <option value="all">All Availability</option>
              <option value="In Stock">In Stock</option>
              <option value="Limited Edition">Limited Edition</option>
              <option value="Studio Edition">Studio Edition</option>
            </select>

            {/* Sort by Price */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#141411] border border-[#282723] px-3 py-2.5 text-xs text-[#C8C0B3] focus:border-[#C8C0B3] focus:outline-none cursor-pointer"
              aria-label="Sort products"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs uppercase tracking-wider text-[#8E877D] hover:text-[#F2EEE6] underline px-2 py-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#8E877D]">
          <span>
            Showing <strong className="text-[#F2EEE6] font-mono">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>
          {categoryMeta && (
            <button
              onClick={() => navigate('/shop')}
              className="text-[#C8C0B3] hover:text-[#FFFFFF] underline underline-offset-4"
            >
              Browse all other categories →
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(slug) => navigate(`/product/${slug}`)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-16 border border-[#282723] bg-[#1A1916] text-center max-w-xl mx-auto my-12 flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8E877D]">
              Catalogue Query
            </span>
            <h3 className="text-2xl font-serif text-[#F2EEE6]">
              No pieces match your criteria
            </h3>
            <p className="text-xs text-[#8E877D] font-light max-w-md">
              We could not find any items matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or exploring another category.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2.5 bg-[#F2EEE6] text-[#141411] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
