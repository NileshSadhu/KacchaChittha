import type { FC } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { MetricsGrid } from './MetricsGrid';
import { TransactionsList } from './TransactionsList';
import { METRIC_CARDS, RECENT_TRANSACTIONS } from '@/data/heroMockData';

export const DashboardMockup: FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 sm:mt-16 transition-all duration-300 animate-fade-in-up animation-delay-200">
      {/* Outer Card with subtle glow/shadow */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-2xl shadow-zinc-300/30 p-3.5 sm:p-6 transition-all hover:shadow-zinc-300/50 card-hover-lift">
        {/* Window Chrome & Header */}
        <DashboardHeader />

        {/* 3 KPI Metric Cards */}
        <MetricsGrid metrics={METRIC_CARDS} />

        {/* Transactions Ledger Preview */}
        <TransactionsList transactions={RECENT_TRANSACTIONS} />
      </div>
    </div>
  );
};
