import type { FC } from 'react';
import { HeroBadge } from './HeroBadge';
import { HeroCta } from './HeroCta';
import { HERO_CONFIG } from '@/data/heroMockData';

export const HeroContent: FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10 animate-fade-in-up">
      {/* Version badge */}
      <div className="mb-6 sm:mb-8">
        <HeroBadge />
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 font-sans leading-[1.15]">
        {HERO_CONFIG.titleLine1}
        <span className="block text-zinc-500 font-medium mt-1 sm:mt-2">
          {HERO_CONFIG.titleLine2}
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[17px] text-zinc-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal">
        {HERO_CONFIG.description}
      </p>

      {/* Action Buttons */}
      <HeroCta />
    </div>
  );
};
