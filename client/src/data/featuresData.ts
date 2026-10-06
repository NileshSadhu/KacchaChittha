export interface FeatureItem {
  id: string;
  iconType: 'reconciliation' | 'security' | 'export';
  title: string;
  description: string;
  footerMeta: string;
}

export const FEATURES_CONFIG = {
  tag: 'CRAFTED FOR SIMPLICITY',
  title: 'Quiet precision. Zero accounting clutter.',
  features: [
    {
      id: 'reconciliation',
      iconType: 'reconciliation' as const,
      title: 'Instant Chit Reconciliation',
      description:
        'Zero delays in tracking informal loans, split expenses, and daily registers. Clear out receivables and payable balances with single-swipe clarity.',
      footerMeta: 'Micro-seconds latency • Offline-native',
    },
    {
      id: 'privacy',
      iconType: 'security' as const,
      title: 'Private & Local-First',
      description:
        'Your records live in SQLite databases stored safely on your own device. End-to-end encrypted storage that lives securely with you, strictly confidential.',
      footerMeta: 'Zero data harvesting • Apple Secure Enclave',
    },
    {
      id: 'export',
      iconType: 'export' as const,
      title: 'Export Ready',
      description:
        'Generate audit-ready statements and CSV sheets in a tap. Effortlessly hand over polished PDFs to your chartered accountant or business partner.',
      footerMeta: 'PDF, CSV, Excel & JSON formats',
    },
  ],
};
