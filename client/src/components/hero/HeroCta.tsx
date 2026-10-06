import type { FC } from 'react';
import { Button } from '@/components/common/Button';
import { HERO_CONFIG } from '@/data/heroMockData';

export const HeroCta: FC = () => {
  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <Button variant="primary" size="lg" className="px-7 py-3 text-sm font-medium shadow-md">
        {HERO_CONFIG.primaryCta}
      </Button>

      <a
        href="#keynote-preview"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors group cursor-pointer py-2"
      >
        <span>{HERO_CONFIG.secondaryCta.replace('→', '').trim()}</span>
        <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
      </a>
    </div>
  );
};
