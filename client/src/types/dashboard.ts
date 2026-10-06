export interface MetricItem {
  id: string;
  label: string;
  value: string;
  badge?: {
    text: string;
    variant?: 'success' | 'neutral' | 'warning';
  };
  note?: string;
  hasSparkline?: boolean;
  sparklinePoints?: number[];
}

export type TransactionStatusVariant = 'settled' | 'pending' | 'due';

export interface TransactionItem {
  id: string;
  iconType: 'archive' | 'building' | 'creditCard' | 'clock';
  title: string;
  subtitle: string;
  status: {
    label: string;
    variant: TransactionStatusVariant;
  };
  amount: string;
  isIncome?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const DASHBOARD_MODULE_LOADED = true;
