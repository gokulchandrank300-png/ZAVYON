import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppGeneralEnquiryUrl } from '../config/site';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenWelcome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, onOpenWelcome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141411]/95 backdrop-blur-md border-b border-[#282723] py-4'
            : 'bg-gradient-to-b from-[#141411]/90 via-[#141411]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <button
            onClick={() => handleNavClick('/')}
            className="group text-left text-2xl sm:text-3xl font-serif tracking-[0.2em] font-normal text-[#F2EEE6] hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8C0B3]"
            aria-label="ZAVYON Home"
          >
            {SITE_CONFIG.brandName}
          </button>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#C8C0B3] font-medium">
            <button
              onClick={() => handleNavClick('/shop')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/shop' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Shop All
            </button>
            <button
              onClick={() => handleNavClick('/category/home-decor')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/category/home-decor' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Home Decor
            </button>
            <button
              onClick={() => handleNavClick('/category/fashion-accessories')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/category/fashion-accessories' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Accessories
            </button>
            <button
              onClick={() => handleNavClick('/category/garments')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/category/garments' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Garments
            </button>
            <button
              onClick={() => handleNavClick('/category/others')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/category/others' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Others
            </button>
            <button
              onClick={() => handleNavClick('/story')}
              className={`hover:text-[#F2EEE6] transition-colors py-1 relative ${
                currentPath === '/story' ? 'text-[#F2EEE6] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8C0B3]' : ''
              }`}
            >
              Our Story
            </button>
          </nav>

          {/* Zone 3: Actions (Worlds overlay trigger, discreet Instagram, WhatsApp enquiry affordance) */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Reopen Editorial Welcome Overlay */}
            <button
              onClick={onOpenWelcome}
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors px-2 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8C0B3]"
              title="Experience the curated four worlds"
            >
              <Compass className="w-3.5 h-3.5 stroke-[1.5]" />
              <span className="hidden sm:inline">Choose Your World</span>
            </button>

            {/* Instagram Link (Discreet) */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8C0B3] hover:text-[#FFFFFF] transition-colors p-1"
              aria-label="ZAVYON on Instagram"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* General WhatsApp Enquiry Affordance (Privacy compliant: phone number is NEVER visible) */}
            <a
              href={buildWhatsAppGeneralEnquiryUrl('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#141411] bg-[#F2EEE6] hover:bg-[#FFFFFF] px-3.5 py-2 transition-colors"
              title="Enquire with our concierge"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2]" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F2EEE6] p-1.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#C8C0B3]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141411] flex flex-col p-8 lg:hidden animate-fade-in">
          <div className="flex items-center justify-between pb-8 border-b border-[#282723]">
            <span className="text-2xl font-serif tracking-[0.2em] text-[#F2EEE6]">
              {SITE_CONFIG.brandName}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#C8C0B3] hover:text-[#FFFFFF] p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 pt-10 text-lg font-serif tracking-wider text-[#F2EEE6]">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left hover:text-[#BFA37C] transition-colors py-1"
            >
              Home Flagship
            </button>
            <button
              onClick={() => handleNavClick('/shop')}
              className="text-left hover:text-[#BFA37C] transition-colors py-1"
            >
              Shop All Discoveries
            </button>
            <button
              onClick={() => handleNavClick('/category/home-decor')}
              className="text-left text-[#C8C0B3] hover:text-[#F2EEE6] transition-colors py-1 pl-4 text-base"
            >
              01. Home Decor
            </button>
            <button
              onClick={() => handleNavClick('/category/fashion-accessories')}
              className="text-left text-[#C8C0B3] hover:text-[#F2EEE6] transition-colors py-1 pl-4 text-base"
            >
              02. Fashion Accessories
            </button>
            <button
              onClick={() => handleNavClick('/category/garments')}
              className="text-left text-[#C8C0B3] hover:text-[#F2EEE6] transition-colors py-1 pl-4 text-base"
            >
              03. Garments
            </button>
            <button
              onClick={() => handleNavClick('/category/others')}
              className="text-left text-[#C8C0B3] hover:text-[#F2EEE6] transition-colors py-1 pl-4 text-base"
            >
              04. Others
            </button>
            <button
              onClick={() => handleNavClick('/story')}
              className="text-left hover:text-[#BFA37C] transition-colors py-1"
            >
              Our Story & Philosophy
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-left hover:text-[#BFA37C] transition-colors py-1"
            >
              Client Concierge
            </button>
          </nav>

          <div className="mt-auto pt-8 border-t border-[#282723] flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWelcome();
              }}
              className="w-full text-center py-3 border border-[#3A3832] text-xs uppercase tracking-[0.2em] text-[#F2EEE6] hover:bg-[#282723] transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Choose Your World</span>
            </button>

            <a
              href={buildWhatsAppGeneralEnquiryUrl('mobile-menu')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#F2EEE6] text-[#141411] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};
