import type { FC } from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import type { ContactChannel } from '@/data/contactData';

const InstagramIcon: FC<{ className?: string }> = ({ className = 'w-5 h-5 text-zinc-800' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface ContactCardProps {
  channel: ContactChannel;
  delayIndex?: number;
}

export const ContactCard: FC<ContactCardProps> = ({ channel, delayIndex = 0 }) => {
  const getIcon = () => {
    switch (channel.type) {
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-zinc-800" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-zinc-800" />;
      case 'email':
        return <Mail className="w-5 h-5 text-zinc-800" />;
      default:
        return <Mail className="w-5 h-5 text-zinc-800" />;
    }
  };

  const delayClasses = ['', 'animation-delay-100', 'animation-delay-200'];

  return (
    <a
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-sm flex flex-col justify-between card-hover-lift hover:shadow-md hover:border-zinc-300 transition-all group animate-fade-in-up cursor-pointer ${delayClasses[delayIndex % 3]}`}
    >
      {/* Top row: icon and arrow */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center transition-transform group-hover:scale-105">
          {getIcon()}
        </div>
        <div className="text-zinc-400 group-hover:text-zinc-950 transition-all duration-200 transform group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Info */}
      <div className="mt-8">
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase font-mono block">
          {channel.label}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-zinc-950 font-sans mt-1 mb-1.5 transition-colors group-hover:text-black">
          {channel.value}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
          {channel.description}
        </p>
      </div>
    </a>
  );
};
