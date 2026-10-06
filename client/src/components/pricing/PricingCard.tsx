import type { FC } from 'react';
import { Check, Minus } from 'lucide-react';
import type { PricingPlan } from '@/data/pricingData';
import { Button } from '@/components/common/Button';

interface PricingCardProps {
  plan: PricingPlan;
  delayIndex?: number;
}

export const PricingCard: FC<PricingCardProps> = ({ plan, delayIndex = 0 }) => {
  const isDark = plan.isPopular;
  const delayClasses = ['', 'animation-delay-100', 'animation-delay-200'];

  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 card-hover-lift animate-fade-in-up ${delayClasses[delayIndex % 3]} ${
        isDark
          ? 'bg-zinc-950 text-white border border-zinc-800 shadow-2xl md:-translate-y-2'
          : 'bg-white text-zinc-900 border border-zinc-200/90 shadow-sm'
      }`}
    >
      {/* Floating Popular Pill */}
      {isDark && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-zinc-950 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md select-none">
          Most Popular
        </div>
      )}

      <div>
        {/* Header row: Plan Name + Badge */}
        <div className="flex items-center justify-between mb-4">
          <h3
            className={`text-lg font-bold tracking-tight font-sans ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            {plan.name}
          </h3>
          <span
            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
              isDark
                ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
            }`}
          >
            {plan.badge}
          </span>
        </div>

        {/* Pricing line */}
        <div className="flex items-baseline gap-1.5 mb-2.5">
          <span
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            {plan.price}
          </span>
          <span
            className={`text-xs font-medium ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            {plan.period}
          </span>
        </div>

        {/* Subtitle / Description */}
        <p
          className={`text-xs sm:text-sm leading-relaxed mb-6 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {plan.description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-3 mb-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
          {plan.features.map((feat) => (
            <li key={feat.text} className="flex items-start gap-2.5 text-xs sm:text-sm">
              {feat.included ? (
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-zinc-200' : 'text-zinc-900'
                  }`}
                />
              ) : (
                <Minus className="w-4 h-4 shrink-0 mt-0.5 text-zinc-300 dark:text-zinc-600" />
              )}
              <span
                className={
                  feat.included
                    ? isDark
                      ? 'text-zinc-200'
                      : 'text-zinc-800'
                    : isDark
                    ? 'text-zinc-500'
                    : 'text-zinc-400'
                }
              >
                {feat.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div>
        {isDark ? (
          <button className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]">
            {plan.buttonText}
          </button>
        ) : (
          <Button
            variant="secondary"
            size="md"
            className="w-full justify-center py-2.5 sm:py-3 rounded-full text-zinc-900 font-semibold text-sm bg-zinc-100 hover:bg-zinc-200"
          >
            {plan.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
