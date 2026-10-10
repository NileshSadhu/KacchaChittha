import type { FC } from 'react';
import Navbar from '../../shared/components/web/Navbar';
import Hero from '../../shared/components/web/Hero';

export const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;