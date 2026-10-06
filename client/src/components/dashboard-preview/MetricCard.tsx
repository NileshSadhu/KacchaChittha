import type { FC } from 'react';
import type { MetricItem } from '@/types/dashboard';
import { Badge } from '@/components/common/Badge';
import { Sparkline } from './Sparkline';
import { cn } from '@/lib/utils';

export interface MetricCardProps {
  metric: MetricItem;
  className?: string;
}

export const MetricCard: FC<MetricCardProps> = ({ metric, className }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-3.5 sm:p-4 border border-zinc-100 shadow-sm flex flex-col justify-between transition-all hover:border-zinc-200',
        className
      )}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-2 sm:mb-2.5">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
          {metric.label}
        </span>
        {metric.badge && (
          metric.badge.variant === 'success' ? (
            <Badge variant="success" className="text-[11px] px-2 py-0.5 font-semibold">
              {metric.badge.text}
            </Badge>
          ) : (
            <span className="text-[11px] text-zinc-400 font-medium">
              {metric.badge.text}
            </span>
          )
        )}
      </div>

      {/* Main Metric Value */}
      {metric.hasSparkline ? (
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 font-sans">
            {metric.value}
          </div>
          <Sparkline points={metric.sparklinePoints} className="w-20 sm:w-24 h-7 sm:h-8" />
        </div>
      ) : (
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 font-sans">
          {metric.value}
        </div>
      )}

      {/* Footer / Subtitle Note */}
      {metric.note ? (
        <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">
          {metric.note}
        </div>
      ) : (
        <div className="h-4" />
      )}
    </div>
  );
};
