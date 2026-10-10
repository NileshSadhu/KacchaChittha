import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/components/web/Navbar';
import Footer from '../../shared/components/web/Footer';

export const WebLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
