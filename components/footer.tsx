import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl text-orange-600 tracking-tight mb-4 inline-block">
              BitesPOS
            </Link>
            <p className="text-slate-600 mb-6">
              The complete restaurant point of sale system with a one-time setup cost and lifetime free usage.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-orange-600 transition-colors">Home</Link></li>
              <li><Link href="#features" className="text-slate-600 hover:text-orange-600 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-600 hover:text-orange-600 transition-colors">Pricing</Link></li>
              <li><Link href="#about" className="text-slate-600 hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-slate-600 hover:text-orange-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-600 hover:text-orange-600 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-orange-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm leading-relaxed">
                  100-2.011 & 2.013, 129 Offices, Block J, Jaya One, Jln Profesor Diraja Ungku Aziz, Seksyen 13, 46200 Petaling Jaya, Selangor, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                <span className="text-slate-600">+60 183692661</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                <span className="text-slate-600">hello@bitespos.ai</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bites POS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
