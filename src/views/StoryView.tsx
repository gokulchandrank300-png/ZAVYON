import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface StoryViewProps {
  navigate: (path: string) => void;
  onOpenWelcome: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ navigate, onOpenWelcome }) => {
  return (
    <div className="w-full min-h-screen bg-[#141411] text-[#F2EEE6] pt-28 pb-32">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16 sm:mb-24">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] font-medium block mb-3">
          Our Story & Philosophy
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F2EEE6] font-light leading-tight tracking-tight mb-6">
          The Art of Discovery.
        </h1>
        <p className="text-base sm:text-lg text-[#C8C0B3] font-light max-w-2xl mx-auto leading-relaxed">
          ZAVYON was founded on a simple observation: modern commerce is crowded with excess, yet sparse in soulful consideration.
        </p>
      </section>

      {/* Hero Documentary Image */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 mb-20">
        <div className="aspect-[16/9] w-full overflow-hidden border border-[#282723] bg-[#1A1916]">
          <img
            src="/src/assets/images/story_craftsmanship_1793235465626.jpg"
            alt="Artisanal workshop hands"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-[1.04]"
          />
        </div>
      </section>

      {/* Narrative Editorial Sections */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col gap-16 text-sm sm:text-base text-[#C8C0B3] font-light leading-relaxed">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block mb-2">01. Principle</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EEE6] mb-4">
            Curated through restraint, not abundance.
          </h2>
          <p className="mb-4">
            We do not believe in infinite catalogs or chasing algorithmic trends. Every single creation within ZAVYON is vetted against a rigorous criteria of tactile weight, honest material origin, and timeless silhouettes.
          </p>
          <p>
            Whether an architectural stoneware vessel, a hand-stitched Tuscan leather wallet, an unlined linen workwear overshirt, or an incense burner cast in solid bronze, each piece has earned its place through quiet excellence.
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#282723]" />

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block mb-2">02. Four Worlds</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EEE6] mb-4">
            Four distinct spaces of human experience.
          </h2>
          <p className="mb-4">
            Our catalogue is intentionally partitioned into four worlds that speak to one cohesive lifestyle:
          </p>
          <ul className="space-y-3 pl-4 border-l border-[#282723] text-sm">
            <li>
              <strong className="text-[#F2EEE6] font-medium">Home Decor:</strong> Sculptural objects that ground living spaces in stillness and organic light.
            </li>
            <li>
              <strong className="text-[#F2EEE6] font-medium">Fashion Accessories:</strong> Intimate personal accoutrements forged from heirloom metals and full-grain hides.
            </li>
            <li>
              <strong className="text-[#F2EEE6] font-medium">Garments:</strong> Relaxed, unstructured garments woven from natural fibers with effortless drape.
            </li>
            <li>
              <strong className="text-[#F2EEE6] font-medium">Others:</strong> Curious artifacts, sensory vessels, and tactile journals that reward discovery.
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-[#282723]" />

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block mb-2">03. Concierge Commerce</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EEE6] mb-4">
            Personal conversation over automated checkout.
          </h2>
          <p className="mb-4">
            We deliberately conduct our ordering experience through direct WhatsApp conversation. Rather than an impersonal payment terminal, our collectors speak directly with a dedicated client concierge.
          </p>
          <p>
            We inspect each edition before packaging, discuss sizing or custom finish queries in real time, and ensure dispatch with bespoke tracking.
          </p>
        </div>

        {/* Action Callouts */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => navigate('/shop')}
            className="w-full sm:w-auto px-8 py-4 bg-[#F2EEE6] text-[#141411] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FFFFFF] transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenWelcome}
            className="w-full sm:w-auto px-8 py-4 border border-[#3A3832] text-[#F2EEE6] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#F2EEE6] transition-colors"
          >
            Choose Your World
          </button>
        </div>
      </section>
    </div>
  );
};
