import { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { Check, Flame, MessageSquare, Info, Zap } from 'lucide-react';

interface PricingSwitcherProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSwitcher({ onSelectPlan }: PricingSwitcherProps) {
  // Billing model toggler: 'project' (fixed single asset) or 'monthly' (agile continuous growth iterations)
  const [billingModel, setBillingModel] = useState<'project' | 'monthly'>('project');

  // Alternative monthly retainer schemes
  const getDynamicPricing = (planId: string) => {
    if (billingModel === 'project') {
      const match = PRICING_PLANS.find(p => p.id === planId);
      return {
        price: match?.price || '',
        billing: match?.billing || 'One-time investment'
      };
    } else {
      // Return custom monthly retainer pricing mapping
      switch (planId) {
        case 'starter':
          return { price: '399', billing: 'billed monthly' };
        case 'growth':
          return { price: '899', billing: 'billed monthly (Best Seller)' };
        case 'enterprise':
          return { price: '1,599', billing: 'billed monthly' };
        default:
          return { price: '799', billing: 'billed monthly' };
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* billing toggle */}
      <div className="inline-flex items-center p-1.5 rounded-2xl bg-brand-muted border border-brand-dark/10 mb-10 md:mb-14 relative z-10 shadow-[0_4px_20px_rgba(15,76,58,0.05)]">
        <button
          onClick={() => setBillingModel('project')}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
            billingModel === 'project'
              ? 'bg-brand-dark text-brand-cream shadow-md border border-brand-gold/20'
              : 'text-brand-text hover:text-brand-dark font-medium'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-brand-gold" />
          <span>Single Project</span>
        </button>
        <button
          onClick={() => setBillingModel('monthly')}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
            billingModel === 'monthly'
              ? 'bg-brand-dark text-brand-cream shadow-md border border-brand-gold/20'
              : 'text-brand-text hover:text-brand-dark font-medium'
          }`}
        >
          <span>Active Retainer</span>
          <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-brand-gold text-brand-dark">
            ELITE
          </span>
        </button>
      </div>

      {/* Pricing info box */}
      <div className="max-w-2xl text-center mb-10 px-4">
        {billingModel === 'monthly' ? (
          <p className="text-xs md:text-sm text-brand-dark bg-brand-cream border border-brand-gold/40 rounded-full py-1.5 px-4 font-mono font-bold inline-flex items-center gap-1.5 shadow-sm">
            <Info className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Continuous sprint operations, weekly content refinement, complete technical support.</span>
          </p>
        ) : (
          <p className="text-xs md:text-sm text-brand-dark bg-brand-cream border border-brand-gold/40 rounded-full py-1.5 px-4 font-mono font-bold inline-flex items-center gap-1.5 shadow-sm">
            <Info className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Structured high-density design files and web assets delivered completely turnkey.</span>
          </p>
        )}
      </div>

      {/* Cards grids (on mobile, user can horizontal scroll; on desktop, beautiful 3-col grid) */}
      <div 
        id="pricing-grid-container"
        className="w-full flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 px-4 md:px-0 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PRICING_PLANS.map((plan) => {
          const pricingDetails = getDynamicPricing(plan.id);
          const isPopular = plan.popular;

          return (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`w-[88vw] sm:w-[350px] md:w-auto shrink-0 snap-center snap-always flex flex-col justify-between rounded-3xl relative transition-all duration-300 p-6 border ${
                isPopular 
                  ? 'bg-brand-dark text-brand-cream border-brand-gold/40 shadow-[0_20px_50px_rgba(15,76,58,0.15)] md:scale-103 z-10' 
                  : 'bg-white text-brand-text border-brand-dark/5 shadow-[0_10px_35px_rgba(15,76,58,0.03)]'
              }`}
            >
              {/* Highlight Overlay for Best Value */}
              {isPopular && (
                <div className="absolute -top-3.5 right-6 bg-brand-gold text-brand-dark text-xs font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-1 border border-brand-dark/20 z-10 font-mono tracking-widest uppercase">
                  <Flame className="w-3.5 h-3.5 fill-brand-dark text-brand-dark" />
                  <span>{plan.badge || 'Highly Popular'}</span>
                </div>
              )}

              {/* Plan Header */}
              <div>
                <h4 className={`text-xl font-bold tracking-tight mb-1 font-serif ${isPopular ? 'text-brand-cream' : 'text-brand-dark'}`}>
                  {plan.name}
                </h4>
                <p className={`text-xs mb-6 min-h-[32px] ${isPopular ? 'text-brand-muted' : 'text-brand-text/80'}`}>
                  {plan.subtitle}
                </p>

                {/* Price tag */}
                <div className="flex items-baseline space-x-1.5 mb-6">
                  <span className={`text-3xl md:text-4xl font-black tracking-tight font-sans ${isPopular ? 'text-brand-cream' : 'text-brand-dark'}`}>
                    {pricingDetails.price}
                  </span>
                  {pricingDetails.billing !== 'One-time investment' && pricingDetails.billing !== 'Tailored timeline estimates' && (
                    <span className={`text-xs font-semibold tracking-wide ${isPopular ? 'text-brand-gold' : 'text-brand-text/60'}`}>
                      / {pricingDetails.billing}
                    </span>
                  )}
                </div>

                <hr className={`mb-6 ${isPopular ? 'border-white/10' : 'border-brand-dark/5'}`} />

                {/* Features Checklist */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs leading-normal font-medium">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2.5 mt-0.5 shrink-0 border ${
                        isPopular 
                          ? 'bg-brand-cream/10 border-brand-gold/30 text-brand-gold' 
                          : 'bg-brand-cream border-brand-dark/10 text-brand-green'
                      }`}>
                        <Check className="w-2.5 h-2.5 shrink-0" />
                      </div>
                      <span className={isPopular ? 'text-brand-cream/90' : 'text-brand-dark'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs md:text-sm font-bold tracking-wider transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5 uppercase ${
                  isPopular
                    ? 'bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark font-black shadow-lg shadow-brand-gold/10'
                    : 'bg-brand-dark hover:bg-brand-green text-brand-cream font-bold border border-brand-gold/20'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{plan.ctaText}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Swipe indicator label for mobile screens */}
      <span className="md:hidden mt-4 text-[10px] uppercase font-mono tracking-widest text-brand-green font-bold flex items-center gap-1.5 animate-pulse">
        Swipe left/right to view all plans
      </span>
    </div>
  );
}
