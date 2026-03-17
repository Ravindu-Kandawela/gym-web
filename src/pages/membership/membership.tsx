import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { plans } from '../../constants/constant';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/button';

export const Membership = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="membership">
      <SectionHeader 
        title="Membership Plans"
        description="Choose the level that fits your ambition."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative rounded-xl p-8 flex flex-col h-full transition-all ${
              plan.popular 
              ? 'border-2 border-primary shadow-xl bg-slate-900 text-white scale-105 z-10' 
              : 'border border-slate-200 shadow-sm'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-slate-900 px-4 py-1 text-xs font-black uppercase rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className={`text-4xl font-black ${plan.popular ? 'text-primary' : ''}`}>${plan.price}</span>
              <span className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>/month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature.text} className={`flex items-center gap-2 text-sm ${!feature.included ? 'text-slate-400' : ''}`}>
                  {feature.included 
                    ? <CheckCircle className="w-4 h-4 text-primary" /> 
                    : <XCircle className="w-4 h-4" />
                  }
                  {feature.text}
                </li>
              ))}
            </ul>
            <Button 
              fullWidth
              variant={plan.popular ? 'primary' : 'outline'}
              className={!plan.popular ? 'border-slate-900 hover:bg-slate-900 hover:text-white' : ''}
            >
              Select Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
