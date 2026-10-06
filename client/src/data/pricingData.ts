export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

export const PRICING_CONFIG = {
  tag: 'FAIR & TRANSPARENT',
  title: 'Transparent, honest pricing.',
  description: "No hidden tiers. Start free for 30 days, upgrade when you're ready.",
  plans: [
    {
      id: 'starter',
      name: 'Starter / Solo',
      badge: 'Free Trial',
      price: '₹0',
      period: '/ 30 days',
      description: 'Experience the full platform without giving credit card details upfront.',
      features: [
        { text: 'Up to 100 entries / month', included: true },
        { text: '1 Business ledger', included: true },
        { text: 'Standard CSV exports', included: true },
        { text: 'Multi-device sync', included: false },
      ],
      buttonText: 'Start 1 Month Free',
    },
    {
      id: 'pro',
      name: 'Pro Ledger',
      badge: 'Professional',
      price: '₹499',
      period: '/ month (billed monthly)',
      description: 'For entrepreneurs, boutique founders, and active freelancers.',
      isPopular: true,
      features: [
        { text: 'Unlimited transaction entries', included: true },
        { text: 'Unlimited sub-ledgers & chits', included: true },
        { text: 'Automated WhatsApp reminder drafts', included: true },
        { text: 'Encrypted iCloud & Local backups', included: true },
      ],
      buttonText: 'Get Pro',
    },
    {
      id: 'lifetime',
      name: 'Lifetime Studio',
      badge: 'One-time',
      price: '₹7,999',
      period: 'perpetual',
      description: 'Pay once. Own your financial record keeper forever with lifetime updates.',
      features: [
        { text: 'Everything in Pro Ledger', included: true },
        { text: 'Lifetime major version updates', included: true },
        { text: 'Direct WhatsApp developer hotline', included: true },
        { text: 'Custom PDF branding templates', included: true },
      ],
      buttonText: 'Purchase Once',
    },
  ],
};
