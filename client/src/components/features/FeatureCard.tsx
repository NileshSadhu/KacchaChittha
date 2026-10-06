import type { FC } from 'react';
import { ArrowLeftRight, ShieldCheck, Upload } from 'lucide-react';
import type { FeatureItem } from '@/data/featuresData';

interface FeatureCardProps {
  feature: FeatureItem;
  delayIndex?: number;
}

export const FeatureCard: FC<FeatureCardProps> = ({ feature, delayIndex = 0 }) => {
  const getIcon = () => {
    switch (feature.iconType) {
      case 'reconciliation':
        return <ArrowLeftRight className="w-5 h-5 text-zinc-800" />;
      case 'security':
        return <ShieldCheck className="w-5 h-5 text-zinc-800" />;
      case 'export':
        return <Upload className="w-5 h-5 text-zinc-800" />;
      default:
        return <ArrowLeftRight className="w-5 h-5 text-zinc-800" />;
    }
  };

  const delayClasses = ['', 'animation-delay-100', 'animation-delay-200'];

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-sm flex flex-col justify-between card-hover-lift hover:shadow-md hover:border-zinc-300 animate-fade-in-up ${delayClasses[delayIndex % 3]}`}
    >
      <div>
        {/* Icon box */}
        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-5 transition-transform group-hover:scale-105">
          {getIcon()}
        </div>

        {/* Feature Title */}
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 mb-2.5 font-sans">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="text-xs text-zinc-400 font-mono tracking-tight pt-6 mt-6 border-t border-zinc-100">
        {feature.footerMeta}
      </div>
    </div>
  );
};
