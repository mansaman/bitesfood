import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const perks = [
  { title: 'Exclusive 5% Discount', description: 'Save big on the complete System' },
  { title: 'Complimentary Starter Kit', description: 'High-value bundle included' },
  { title: 'Priority Service', description: 'Jump the queue during launch' },
  { title: 'Limited Availability', description: 'Only a few spots left!' },
];

export default function EarlyAccess() {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-medium text-sm mb-6 border border-orange-500/20">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Early Access Prebooking
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Prebook Your Bites POS Today
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Secure your Bites POS today with a refundable deposit of just <span className="text-white font-bold">RM2,000</span>. Be among the first to revolutionize your restaurant operations.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Early Access Package</h3>
              <p className="text-orange-400 font-medium mb-6">Only for the first 50 restaurants</p>
              
              <ul className="space-y-4">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">{perk.title}</h4>
                      <p className="text-slate-400 text-sm">{perk.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900">
            <h3 className="font-display text-3xl font-bold mb-2">Claim Your Advantage</h3>
            <p className="text-slate-600 mb-8">Fill out the form below to secure your early access deal.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Restaurant Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="The Great Eatery" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="hello@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all" placeholder="+60 12-345 6789" />
              </div>
              
              <button type="button" className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 mt-4">
                Prebook Now - RM2,000 Deposit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                Fully refundable deposit. No commitment required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
