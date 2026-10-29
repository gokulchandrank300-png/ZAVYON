import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  navigate: (path: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ navigate }) => {
  return (
    <div className="w-full min-h-[80vh] bg-[#141411] text-[#F2EEE6] flex items-center justify-center px-6 py-32">
      <div className="max-w-md text-center flex flex-col items-center gap-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8E877D]">
          404 · Uncharted Domain
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F2EEE6] font-light leading-tight">
          This piece remains undiscovered.
        </h1>
        <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
          The path you followed may have moved or been retired from our current collection.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#F2EEE6] text-[#141411] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FFFFFF] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship</span>
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 border border-[#3A3832] text-[#F2EEE6] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#F2EEE6] transition-colors"
          >
            Browse Catalogue
          </button>
        </div>
      </div>
    </div>
  );
};
