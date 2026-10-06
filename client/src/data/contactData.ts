export interface ContactChannel {
  id: string;
  type: 'instagram' | 'whatsapp' | 'email';
  label: string;
  value: string;
  description: string;
  href: string;
}

export const CONTACT_CONFIG = {
  tag: 'DIRECT REACH',
  title: 'Connect instantly.',
  description: 'No tedious forms or waiting lists. Reach our personal channels directly.',
  channels: [
    {
      id: 'instagram',
      type: 'instagram' as const,
      label: 'INSTAGRAM',
      value: '@kacchachitta',
      description: 'DM us on Instagram for product drops and sneak peeks.',
      href: 'https://instagram.com/kacchachitta',
    },
    {
      id: 'whatsapp',
      type: 'whatsapp' as const,
      label: 'WHATSAPP',
      value: '+91 98765 43210',
      description: 'Chat directly on WhatsApp for instant onboarding help.',
      href: 'https://wa.me/919876543210',
    },
    {
      id: 'email',
      type: 'email' as const,
      label: 'EMAIL',
      value: 'hello@kacchachitta.com',
      description: 'Write to our team for custom invoicing and multi-seat plans.',
      href: 'mailto:hello@kacchachitta.com',
    },
  ],
};
