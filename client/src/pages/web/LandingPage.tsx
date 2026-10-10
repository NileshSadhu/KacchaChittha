import type { FC } from 'react';
import Navbar from '../../shared/components/web/Navbar';

export const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
    </div>
  );
};

export default LandingPage;