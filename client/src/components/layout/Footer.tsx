import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Top Row: Brand & Channels */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <a href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 inline-block transition-transform group-hover:scale-125" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-zinc-950 font-sans">
              KacchaChitta
            </span>
          </a>

          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <a
              href="https://instagram.com/kacchachitta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:hello@kacchachitta.com"
              className="hover:text-zinc-950 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Guarantees */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2025 KacchaChitta. Quiet digital craft for modern ledgers.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-600 transition-colors">Private & Secure</span>
            <span className="hover:text-zinc-600 transition-colors">Swiss Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
