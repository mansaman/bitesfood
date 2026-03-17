import { Timer, BarChart3, Printer, Tag, Gift } from 'lucide-react';

const features = [
  {
    title: 'Faster Ordering',
    description: 'Accelerate the ordering process with a user-friendly interface that speeds up service and reduces errors.',
    icon: Timer,
  },
  {
    title: 'Comprehensive Reports',
    description: 'Gain valuable insights with detailed analytics and reports on your weekly, monthly, and daily sales.',
    icon: BarChart3,
  },
  {
    title: 'Error Free Printing',
    description: 'Our reliable printing integration instantly prints receipts and bills to the kitchen and counter.',
    icon: Printer,
  },
  {
    title: 'Restaurant Promotions',
    description: 'Create and manage custom promotions like discounts, buy-one-get-one deals, and happy hour specials.',
    icon: Tag,
  },
  {
    title: 'Lifetime Free Usage',
    description: 'Pay once and use forever. No monthly fees, hidden costs, or unexpected charges ever.',
    icon: Gift,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="text-lg text-slate-600">
            Designed specifically for restaurants, Bites POS gives you powerful features to simplify restaurant management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
                <feature.icon className="h-6 w-6 text-slate-700 group-hover:text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
