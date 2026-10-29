import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppGeneralEnquiryUrl } from '../config/site';

interface FooterProps {
  navigate: (path: string) => void;
  onOpenWelcome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenWelcome }) => {
  return (
    <footer className="bg-[#10100E] border-t border-[#282723] text-[#C8C0B3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Brand Statement & Worlds Discovery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#282723]">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="text-3xl font-serif tracking-[0.2em] text-[#F2EEE6] font-normal">
              {SITE_CONFIG.brandName}
            </span>
            <p className="text-sm text-[#8E877D] font-light leading-relaxed max-w-md">
              A curated destination bringing together four distinct shopping categories under one considered identity. Home decor, personal style, and unexpected discoveries for distinctive living.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenWelcome}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F2EEE6] hover:text-[#FFFFFF] py-2 px-3 border border-[#282723] hover:border-[#C8C0B3] transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Experience the 4 Worlds</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Curated Categories */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-[#F2EEE6] font-medium pb-2 border-b border-[#282723]">
                Categories
              </span>
              <button
                onClick={() => navigate('/category/home-decor')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                01. Home Decor
              </button>
              <button
                onClick={() => navigate('/category/fashion-accessories')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                02. Fashion Accessories
              </button>
              <button
                onClick={() => navigate('/category/garments')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                03. Garments
              </button>
              <button
                onClick={() => navigate('/category/others')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                04. Others
              </button>
              <button
                onClick={() => navigate('/shop')}
                className="text-left text-xs tracking-wider text-[#F2EEE6] hover:text-[#BFA37C] transition-colors py-1 pt-2 font-medium"
              >
                Shop All Items →
              </button>
            </div>

            {/* Curated Discovery & Journal */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-[#F2EEE6] font-medium pb-2 border-b border-[#282723]">
                Information
              </span>
              <button
                onClick={() => navigate('/story')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Our Story & Studio
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Client Concierge
              </button>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
              </a>
              <a
                href={buildWhatsAppGeneralEnquiryUrl('footer')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                <span>WhatsApp Concierge</span>
                <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
              </a>
            </div>

            {/* Legal & Policies */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs uppercase tracking-[0.22em] text-[#F2EEE6] font-medium pb-2 border-b border-[#282723]">
                Policies
              </span>
              <button
                onClick={() => navigate('/privacy-policy')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/terms')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => navigate('/shipping-policy')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Shipping Policy
              </button>
              <button
                onClick={() => navigate('/returns-policy')}
                className="text-left text-xs tracking-wider text-[#8E877D] hover:text-[#F2EEE6] transition-colors py-1"
              >
                Returns & Cancellation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Restrained Copyright & Privacy Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E877D] font-light">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px] text-[#55524B]">
            {SITE_CONFIG.curatedFooterLine} · THE ART OF DISCOVERY
          </p>
        </div>
      </div>
    </footer>
  );
};
