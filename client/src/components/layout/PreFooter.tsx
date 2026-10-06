import type { FC } from 'react';

export const PreFooter: FC = () => {
  return (
    <div className="border-t border-zinc-200/60 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        {/* Left Author Credit */}
        <p className="font-normal text-center sm:text-left">
          made with love by Nilesh Sadhu and all right reserved
        </p>

        {/* Right Status & Legal Links */}
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-zinc-950 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-zinc-950 transition-colors">
            Terms of Service
          </a>
          <div className="flex items-center gap-1.5 font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span>System Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
