import { useState, useEffect, type FC } from 'react';
import { LayoutDashboard, ArrowRight } from 'lucide-react';
import CustomBtn from '../CustomBtn';

const Hero: FC = () => {
  const [scale, setScale] = useState(0.92);

  // Smoothly enlarge the dashboard image placeholder on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Interpolate scale from 0.92 up to 1.04 over 500px scroll
      const progress = Math.min(scrollY / 500, 1);
      setScale(0.92 + progress * 0.12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-12 sm:pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 max-w-4xl leading-[1.12]">
        Keep the track of your finances
      </h1>

      {/* Subheading */}
      <p className="mt-5 text-base sm:text-xl text-neutral-500 max-w-2xl leading-relaxed">
        Manage your expenses and income with ease. Real-time clarity designed for your financial peace of mind.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <CustomBtn variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Get Started
        </CustomBtn>
        <CustomBtn variant="secondary" size="lg">
          Book Demo
        </CustomBtn>
      </div>

      {/* Dashboard Image Placeholder (scales larger on scroll) */}
      <div
        className="mt-12 sm:mt-16 w-full max-w-5xl transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-neutral-50/70 p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
          {/* Mock Window Top Bar */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-neutral-200/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="h-5 w-44 rounded-md bg-neutral-200/60" />
            <div className="w-8" />
          </div>

          {/* Placeholder Dashboard Canvas */}
          <div className="mt-4 rounded-xl bg-white border border-neutral-200/70 p-6 sm:p-10 min-h-[340px] sm:min-h-[480px] flex flex-col justify-between">
            {/* Top Metric Cards Placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2 text-left">
                <div className="h-3 w-20 bg-neutral-200 rounded" />
                <div className="h-6 w-32 bg-neutral-800 rounded" />
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2 text-left">
                <div className="h-3 w-24 bg-neutral-200 rounded" />
                <div className="h-6 w-28 bg-neutral-300 rounded" />
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2 text-left">
                <div className="h-3 w-16 bg-neutral-200 rounded" />
                <div className="h-6 w-24 bg-neutral-300 rounded" />
              </div>
            </div>

            {/* Center Pending Dashboard Banner */}
            <div className="my-8 flex flex-col items-center justify-center text-neutral-400">
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-700 mb-3 shadow-inner">
                <LayoutDashboard className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-neutral-800">FinArt Dashboard Preview</p>
              <p className="text-xs text-neutral-400 mt-0.5">Pending UI Integration</p>
            </div>

            {/* Bottom Chart/Table Wireframe */}
            <div className="space-y-2.5">
              <div className="h-3.5 w-full bg-neutral-100 rounded-full" />
              <div className="h-3.5 w-4/5 bg-neutral-100 rounded-full" />
              <div className="h-3.5 w-2/3 bg-neutral-100 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;