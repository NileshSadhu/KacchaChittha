import type { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { PreFooter } from './PreFooter';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
};
