import type { MetricItem, TransactionItem, NavItem } from '../types/dashboard';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONFIG = {
  versionBadge: 'VERSION 2.0 • THE MODERN LEDGER',
  titleLine1: 'Clarity for every record.',
  titleLine2: 'Effortless Kaccha Chitta.',
  description:
    'An unadorned, beautifully restrained ledger built for personal clarity and quiet financial peace of mind. Every transaction, categorized with zero friction.',
  primaryCta: 'Try 1 month free',
  secondaryCta: 'Watch the keynote preview →',
  windowTitle: 'Kaccha Chitta — General Journal 2025',
  vaultStatus: 'Vault Synced',
  fiscalYear: 'FY 2024–25',
  tabs: ['Overview', 'Daybook', 'Receivables', 'Settlements'] as const,
};

export const METRIC_CARDS: MetricItem[] = [
  {
    id: 'net-position',
    label: 'NET POSITION',
    value: '₹4,82,500',
    badge: {
      text: '+14.2%',
      variant: 'success',
    },
    note: 'Reconciled with bank feeds',
  },
  {
    id: 'pending-chits',
    label: 'PENDING CHITS',
    value: '3 Active',
    badge: {
      text: 'Due in 4 days',
      variant: 'neutral',
    },
    note: '₹34,200 pending inward balance',
  },
  {
    id: 'cashflow-balance',
    label: 'CASHFLOW BALANCE',
    value: '₹1,18,940',
    badge: {
      text: '30d Velocity',
      variant: 'neutral',
    },
    hasSparkline: true,
    sparklinePoints: [35, 38, 34, 42, 39, 44, 42, 50, 48, 56],
  },
];

export const RECENT_TRANSACTIONS: TransactionItem[] = [
  {
    id: 'tx-1',
    iconType: 'archive',
    title: 'Raw Material Settlement',
    subtitle: 'Timber Depot • Today, 11:42 AM',
    status: {
      label: 'Settled',
      variant: 'settled',
    },
    amount: '-₹42,800.00',
    isIncome: false,
  },
  {
    id: 'tx-2',
    iconType: 'building',
    title: 'Studio Rent & Utilities',
    subtitle: 'Maker Lane Complex • Yesterday',
    status: {
      label: 'Settled',
      variant: 'settled',
    },
    amount: '-₹35,000.00',
    isIncome: false,
  },
  {
    id: 'tx-3',
    iconType: 'creditCard',
    title: 'Client Retainer — Q2 Brand Work',
    subtitle: 'Aura Design Studio • May 12',
    status: {
      label: 'Settled',
      variant: 'settled',
    },
    amount: '+₹1,20,000.00',
    isIncome: true,
  },
  {
    id: 'tx-4',
    iconType: 'clock',
    title: 'Vendor Advance Balance',
    subtitle: 'Precision Print Co. • May 10',
    status: {
      label: 'Due 3d',
      variant: 'due',
    },
    amount: '-₹18,500.00',
    isIncome: false,
  },
];
