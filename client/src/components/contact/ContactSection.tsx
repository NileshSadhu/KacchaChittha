import type { FC } from 'react';
import { ContactCard } from './ContactCard';
import { CONTACT_CONFIG } from '@/data/contactData';

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 animate-fade-in-up">
        <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-400 block mb-2 font-mono">
          {CONTACT_CONFIG.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans mb-3">
          {CONTACT_CONFIG.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 font-normal">
          {CONTACT_CONFIG.description}
        </p>
      </div>

      {/* 3 Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {CONTACT_CONFIG.channels.map((channel, idx) => (
          <ContactCard key={channel.id} channel={channel} delayIndex={idx} />
        ))}
      </div>
    </section>
  );
};
