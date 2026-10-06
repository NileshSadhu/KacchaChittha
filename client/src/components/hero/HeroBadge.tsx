import type { FC } from 'react';
import { HERO_CONFIG } from '@/data/heroMockData';

export const HeroBadge: FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/90 bg-zinc-100/60 shadow-xs transition-all hover:bg-zinc-100">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-600">
        {HERO_CONFIG.versionBadge}
      </span>
    </div>
  );
};
