import { useState, type FC } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { NAV_ITEMS } from '@/data/heroMockData';

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAFAFA]/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 inline-block transition-transform group-hover:scale-125" />
          <span className="font-bold text-lg sm:text-xl tracking-tight text-zinc-950 font-sans">
            KacchaChitta
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-zinc-950 ${
                item.active ? 'text-zinc-950 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="primary" size="md" className="px-5.5 py-2 font-medium">
            Get Started
          </Button>
          <Button
            variant="icon"
            size="icon"
            aria-label="User Profile"
            className="w-9 h-9"
          >
            <User className="w-4 h-4 text-white" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="icon"
            size="icon"
            aria-label="User Profile"
            className="w-8 h-8"
          >
            <User className="w-3.5 h-3.5 text-white" />
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200/70 bg-[#FAFAFA] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.active
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button variant="primary" size="md" className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
