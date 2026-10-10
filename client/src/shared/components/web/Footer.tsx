import type { FC } from 'react';
import { Heart } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-8 px-4 border-t border-neutral-100 bg-white text-neutral-500 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
        <p>© {new Date().getFullYear()} FinArt. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-heartbeat" aria-label="love" />
          <span>with love by Nilesh Sadhu</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
