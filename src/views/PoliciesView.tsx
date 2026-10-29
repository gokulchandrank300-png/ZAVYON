import React, { useState } from 'react';
import { ShieldCheck, FileText, Truck, RefreshCw, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface PoliciesViewProps {
  initialTab?: 'privacy' | 'terms' | 'shipping' | 'returns';
  navigate: (path: string) => void;
}

export const PoliciesView: React.FC<PoliciesViewProps> = ({ initialTab = 'privacy', navigate }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'shipping' | 'returns'>(initialTab);

  return (
    <div className="w-full min-h-screen bg-[#141411] text-[#F2EEE6] pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E877D] font-medium block mb-3">
            Legal & Operations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F2EEE6] font-light tracking-tight mb-4">
            Store Policies & Terms
          </h1>
          <p className="text-xs sm:text-sm text-[#8E877D] font-light max-w-lg mx-auto">
            Transparent, fair guidelines governing acquisition, transit, and data privacy at ZAVYON.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#282723] overflow-x-auto mb-10 gap-2 sm:gap-4 scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-4 px-3 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center gap-2 border-b-2 font-medium ${
              activeTab === 'privacy'
                ? 'border-[#F2EEE6] text-[#F2EEE6]'
                : 'border-transparent text-[#8E877D] hover:text-[#C8C0B3]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-4 px-3 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center gap-2 border-b-2 font-medium ${
              activeTab === 'terms'
                ? 'border-[#F2EEE6] text-[#F2EEE6]'
                : 'border-transparent text-[#8E877D] hover:text-[#C8C0B3]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-4 px-3 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center gap-2 border-b-2 font-medium ${
              activeTab === 'shipping'
                ? 'border-[#F2EEE6] text-[#F2EEE6]'
                : 'border-transparent text-[#8E877D] hover:text-[#C8C0B3]'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Shipping Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`pb-4 px-3 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap flex items-center gap-2 border-b-2 font-medium ${
              activeTab === 'returns'
                ? 'border-[#F2EEE6] text-[#F2EEE6]'
                : 'border-transparent text-[#8E877D] hover:text-[#C8C0B3]'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Returns & Cancellation</span>
          </button>
        </div>

        {/* Merchant Editorial Notice Box */}
        <div className="p-4 mb-8 bg-[#1A1916] border border-[#3A3832] flex items-start gap-3 text-xs text-[#C8C0B3]">
          <AlertCircle className="w-4 h-4 text-[#BFA37C] shrink-0 mt-0.5" />
          <p className="font-light">
            <strong className="text-[#F2EEE6] font-medium">Merchant Notice:</strong> The terms below are comprehensive editable operational drafts. Sections marked in brackets like <span className="font-mono text-[#BFA37C]">[COMPANY LEGAL ENTITY]</span> should be verified by the brand owner before formal commercial transactions.
          </p>
        </div>

        {/* Tab 1: Privacy Policy */}
        {activeTab === 'privacy' && (
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed space-y-6">
            <h2 className="text-xl font-serif text-[#F2EEE6] font-normal">1. Privacy Statement</h2>
            <p>
              At {SITE_CONFIG.brandName}, accessible from our official flagship web application, protecting the privacy of our collectors is one of our fundamental commitments. This Privacy Document outlines the types of information we collect and how we utilize it.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">2. Direct WhatsApp Communication & Orders</h3>
            <p>
              When you initiate an order or enquiry via our WhatsApp concierge link, your phone number, message transcript, and any shipping details voluntarily provided are transmitted directly through WhatsApp (Meta Platforms Inc.) in accordance with their end-to-end encrypted protocol. We do not maintain or sell external third-party marketing databases.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">3. Local Storage & Device Data</h3>
            <p>
              We utilize client-side local browser storage strictly for functional preferences (such as remembering that you have experienced the editorial welcome entrance and your shopping bag preferences). We do not deploy intrusive third-party cross-site advertising cookies.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">4. Information to Verify Before Launch</h3>
            <p className="p-3 bg-[#1A1916] border border-[#282723] font-mono text-xs text-[#8E877D]">
              [MERCHANT ACTION REQUIRED: Insert your official Grievance Officer name, legal business registration number, and official correspondence address in accordance with applicable consumer protection legislation.]
            </p>
          </article>
        )}

        {/* Tab 2: Terms & Conditions */}
        {activeTab === 'terms' && (
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed space-y-6">
            <h2 className="text-xl font-serif text-[#F2EEE6] font-normal">Terms of Curated Commerce</h2>
            <p>
              Welcome to {SITE_CONFIG.brandName}. By accessing or acquiring items displayed on this website, you agree to comply with and be bound by the following operational terms.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">1. Product Descriptions & Photography</h3>
            <p>
              We strive to capture the tactile nuance, color balance, and dimensional reality of all creations. Because many pieces in our four collections are hand-thrown, hand-hammered, or crafted from natural vegetable-tanned leathers and raw flax linens, subtle variations in texture, grain, and patina are natural hallmarks of authenticity rather than defects.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">2. Pricing & Currency</h3>
            <p>
              All prices are listed in Indian Rupees (₹/INR). Prices are subject to revision without prior notice, but confirmed orders will be honored at the negotiated quotation agreed upon during your concierge consultation.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">3. Pre-Order & Limited Editions</h3>
            <p>
              Pieces designated as &ldquo;Limited Edition&rdquo; or &ldquo;Studio Edition&rdquo; are handcrafted in small studio batches. Allocation is prioritized strictly according to confirmed concierge timestamps.
            </p>

            <div className="p-3 bg-[#1A1916] border border-[#282723] font-mono text-xs text-[#8E877D]">
              [MERCHANT ACTION REQUIRED: Confirm applicable legal jurisdiction e.g. Courts of New Delhi / Bengaluru / Mumbai.]
            </div>
          </article>
        )}

        {/* Tab 3: Shipping Policy */}
        {activeTab === 'shipping' && (
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed space-y-6">
            <h2 className="text-xl font-serif text-[#F2EEE6] font-normal">Shipping & Dispatch Guidelines</h2>
            <p>
              Every artifact is packed by hand using archival cushioning, corrugated protection, and moisture-resistant wrapping to ensure pristine arrival.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">1. Domestic Dispatch (Within India)</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong className="text-[#F2EEE6]">In Stock Items:</strong> Dispatched within 24 to 48 business hours of order confirmation.</li>
              <li><strong className="text-[#F2EEE6]">Limited Editions & Studio Orders:</strong> Handcrafted to order; typically dispatched within 5 to 7 business days.</li>
              <li><strong className="text-[#F2EEE6]">Transit Timelines:</strong> 3 to 5 business days for major metropolitan hubs; 5 to 8 business days for regional addresses.</li>
            </ul>

            <h3 className="text-base font-serif text-[#F2EEE6]">2. Tracking & Concierge Updates</h3>
            <p>
              Once your shipment has been booked with our premium logistics partner, the client concierge shares live docket tracking directly through your ongoing WhatsApp order thread.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">3. Shipping Costs</h3>
            <p>
              Complimentary standard insured surface shipping is extended to all orders across India above ₹2,000. Express air delivery charges are quoted at actual cost upon request.
            </p>

            <div className="p-3 bg-[#1A1916] border border-[#282723] font-mono text-xs text-[#8E877D]">
              [MERCHANT ACTION REQUIRED: Confirm contracted logistics carriers e.g., BlueDart, Delhivery, DTDC, and international shipment availability.]
            </div>
          </article>
        )}

        {/* Tab 4: Returns & Cancellation */}
        {activeTab === 'returns' && (
          <article className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed space-y-6">
            <h2 className="text-xl font-serif text-[#F2EEE6] font-normal">Returns & Cancellation Protocol</h2>
            <p>
              We want your discovery experience to be unconditional in quality and satisfaction.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">1. 7-Day Inspection Window</h3>
            <p>
              If a piece does not suit your space or personal aesthetic, you may initiate a return request via WhatsApp within 7 calendar days of receipt.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">2. Condition for Acceptance</h3>
            <p>
              The creation must be returned in pristine, unused condition with all original studio tags, dust bags, authenticity cards, and structural packaging intact. Garments must be unworn and unwashed.
            </p>

            <h3 className="text-base font-serif text-[#F2EEE6]">3. Transit Damage Guarantee</h3>
            <p>
              In the unlikely event an object arrives damaged or compromised during transit, please photograph the external box and the piece within 24 hours of delivery and notify our WhatsApp concierge. We arrange an immediate replacement or full reimbursement without friction.
            </p>

            <div className="p-3 bg-[#1A1916] border border-[#282723] font-mono text-xs text-[#8E877D]">
              [MERCHANT ACTION REQUIRED: Confirm reverse-pickup charge policy and refund processing bank turnaround time e.g., 5-7 working days.]
            </div>
          </article>
        )}
      </div>
    </div>
  );
};
