import type { FC } from 'react';
import type { TransactionItem } from '@/types/dashboard';
import { TransactionRow } from './TransactionRow';

interface TransactionsListProps {
  transactions: TransactionItem[];
}

export const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className="border border-zinc-100 rounded-xl bg-white overflow-hidden shadow-sm">
      {/* Table Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-zinc-50/80 border-b border-zinc-100 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
        <span className="min-w-0">Description</span>
        <div className="flex items-center gap-4 sm:gap-8 shrink-0">
          <span className="w-16 text-center">Status</span>
          <span className="w-24 sm:w-28 text-right">Amount</span>
        </div>
      </div>

      {/* Rows Container */}
      <div className="p-1 sm:p-1.5 divide-y divide-zinc-50">
        {transactions.map((tx) => (
          <TransactionRow key={tx.id} transaction={tx} />
        ))}
      </div>
    </div>
  );
};
