import type { FC } from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES_CONFIG } from '@/data/featuresData';

export const FeaturesSection: FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 animate-fade-in-up">
        <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 block mb-2 font-mono">
          {FEATURES_CONFIG.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
          {FEATURES_CONFIG.title}
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES_CONFIG.features.map((feature, idx) => (
          <FeatureCard key={feature.id} feature={feature} delayIndex={idx} />
        ))}
      </div>
    </section>
  );
};
