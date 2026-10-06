import { useState, type FC } from 'react';
import { HERO_CONFIG } from '@/data/heroMockData';

export const DashboardHeader: FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="space-y-4 pb-2 border-b border-zinc-100">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between">
        {/* Left window control dots + title */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          </div>
          <span className="text-[11px] sm:text-xs text-zinc-500 font-normal tracking-tight">
            {HERO_CONFIG.windowTitle}
          </span>
        </div>

        {/* Right status badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-[11px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{HERO_CONFIG.vaultStatus}</span>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          {HERO_CONFIG.tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Fiscal Year Label */}
        <div className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-mono text-zinc-500 border border-zinc-200/70 bg-zinc-50/50">
          {HERO_CONFIG.fiscalYear}
        </div>
      </div>
    </div>
  );
};
