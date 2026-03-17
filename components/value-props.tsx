import { CreditCard, Zap, Infinity } from 'lucide-react';

const valueProps = [
  {
    title: 'One-Time Payment',
    description: 'Pay a single setup fee with no hidden costs or recurring charges.',
    icon: CreditCard,
  },
  {
    title: 'Quick Setup',
    description: 'Our team handles the installation and configuration process for your restaurant.',
    icon: Zap,
  },
  {
    title: 'Lifetime Usage',
    description: 'Enjoy all features forever with free updates and technical support.',
    icon: Infinity,
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            One Payment, Lifetime Access
          </h2>
          <p className="text-lg text-slate-600">
            Pay just once and enjoy all features with no recurring fees or subscription costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                <prop.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
