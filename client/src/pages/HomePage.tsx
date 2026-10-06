import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { PricingSection } from '@/components/pricing/PricingSection';
import { ContactSection } from '@/components/contact/ContactSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};
