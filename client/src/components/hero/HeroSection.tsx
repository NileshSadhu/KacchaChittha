import { HeroContent } from './HeroContent';
import { DashboardMockup } from '../dashboard-preview/DashboardMockup';

export const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-20 sm:pb-28 overflow-hidden">
      {/* Background subtle radial ambient highlight */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-zinc-200/40 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Headline & CTA */}
        <HeroContent />

        {/* Dashboard Preview Mockup Window */}
        <DashboardMockup />
      </div>
    </section>
  );
};
