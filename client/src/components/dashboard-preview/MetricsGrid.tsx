import type { FC } from 'react';
import type { MetricItem } from '@/types/dashboard';
import { MetricCard } from './MetricCard';

interface MetricsGridProps {
  metrics: MetricItem[];
}

export const MetricsGrid: FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-5">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
};
