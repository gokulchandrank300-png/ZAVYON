import React from 'react';
import { ArrowUpRight, MessageCircle, Clock, Globe } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppGeneralEnquiryUrl } from '../config/site';

interface ContactViewProps {
  navigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ navigate }) => {
  return (
    <div className="w-full min-h-screen bg-[#141411] text-[#F2EEE6] pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] font-medium block mb-3">
            Client Relations & Enquiries
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#F2EEE6] font-light tracking-tight mb-4">
            Concierge Desk
          </h1>
          <p className="text-sm sm:text-base text-[#C8C0B3] font-light max-w-xl mx-auto leading-relaxed">
            Every piece at ZAVYON is handled with personal care. Connect with our client advisors for product availability, custom orders, and insured dispatch.
          </p>
        </div>

        {/* Concierge Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Channel 1: WhatsApp Concierge (Privacy preserved: phone number is NEVER visible text) */}
          <div className="p-8 bg-[#1A1916] border border-[#282723] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 border border-[#3A3832] flex items-center justify-center text-[#BFA37C]">
                <MessageCircle className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h2 className="text-xl font-serif text-[#F2EEE6]">
                Direct WhatsApp Concierge
              </h2>
              <p className="text-xs text-[#8E877D] font-light leading-relaxed">
                Connect directly with our curatorial team to enquire about specific products, verify stock, request dimensions, or complete your order.
              </p>
            </div>

            <div>
              <a
                href={buildWhatsAppGeneralEnquiryUrl('contact-page')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#F2EEE6] hover:bg-[#FFFFFF] text-[#141411] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                <span>Initiate WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </a>
              <p className="text-[10px] text-[#55524B] text-center mt-2 font-mono">
                Average reply time: Under 2 hours during studio hours
              </p>
            </div>
          </div>

          {/* Channel 2: Official Instagram */}
          <div className="p-8 bg-[#1A1916] border border-[#282723] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 border border-[#3A3832] flex items-center justify-center text-[#BFA37C]">
                <Globe className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h2 className="text-xl font-serif text-[#F2EEE6]">
                Instagram Journal
              </h2>
              <p className="text-xs text-[#8E877D] font-light leading-relaxed">
                Follow our ongoing visual journal featuring studio processes, material documentation, and announcements of upcoming limited editions.
              </p>
            </div>

            <div>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 border border-[#3A3832] hover:border-[#F2EEE6] text-[#F2EEE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <span>Follow @zavyon.official</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
              </a>
              <p className="text-[10px] text-[#55524B] text-center mt-2 font-mono">
                Direct messages welcomed
              </p>
            </div>
          </div>
        </div>

        {/* Studio Guidelines & Transparency */}
        <div className="p-8 border border-[#282723] bg-[#141411] flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8C0B3] font-medium">
            <Clock className="w-4 h-4 text-[#BFA37C]" />
            <span>Studio Operational Hours</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#8E877D] font-light leading-relaxed">
            <div>
              <strong className="text-[#F2EEE6] block mb-1">Advisory & Order Dispatch:</strong>
              <p>Monday through Saturday · 10:00 AM – 7:00 PM IST</p>
              <p className="mt-1">Orders placed on Sunday are processed first thing Monday morning.</p>
            </div>
            <div>
              <strong className="text-[#F2EEE6] block mb-1">Packaging & Integrity:</strong>
              <p>Each object is wrapped in acid-free archival tissue, cushioned with recycled honeycomb paper, and secured in rigid crush-proof boxes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
