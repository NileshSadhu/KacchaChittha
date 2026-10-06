import type { FC } from 'react';
import { Package, Building2, CreditCard, Clock } from 'lucide-react';
import type { TransactionItem } from '@/types/dashboard';
import { Badge } from '@/components/common/Badge';

interface TransactionRowProps {
  transaction: TransactionItem;
}

export const TransactionRow: FC<TransactionRowProps> = ({ transaction }) => {
  const getIcon = () => {
    switch (transaction.iconType) {
      case 'archive':
        return <Package className="w-4 h-4 text-zinc-500" />;
      case 'building':
        return <Building2 className="w-4 h-4 text-zinc-500" />;
      case 'creditCard':
        return <CreditCard className="w-4 h-4 text-zinc-500" />;
      case 'clock':
        return <Clock className="w-4 h-4 text-zinc-500" />;
      default:
        return <Package className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div className="flex items-center justify-between py-2.5 sm:py-3 px-2 sm:px-3 hover:bg-zinc-50/70 rounded-lg transition-colors group">
      {/* Description & Icon */}
      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
        <div className="w-8 h-8 rounded-md bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-200/70 transition-colors">
          {getIcon()}
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-medium text-zinc-900 truncate">
            {transaction.title}
          </p>
          <p className="text-[11px] sm:text-xs text-zinc-400 truncate">
            {transaction.subtitle}
          </p>
        </div>
      </div>

      {/* Status & Amount */}
      <div className="flex items-center gap-4 sm:gap-8 shrink-0">
        {/* Status Badge */}
        <div>
          {transaction.status.variant === 'due' ? (
            <Badge variant="warning" className="text-[11px] px-2.5 py-0.5">
              {transaction.status.label}
            </Badge>
          ) : (
            <Badge variant="success" className="text-[11px] px-2.5 py-0.5">
              {transaction.status.label}
            </Badge>
          )}
        </div>

        {/* Amount */}
        <div
          className={`text-xs sm:text-sm font-semibold text-right tabular-nums w-24 sm:w-28 ${
            transaction.isIncome ? 'text-emerald-600' : 'text-zinc-900'
          }`}
        >
          {transaction.amount}
        </div>
      </div>
    </div>
  );
};
