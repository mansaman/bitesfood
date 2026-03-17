'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-display font-bold text-2xl text-orange-600 tracking-tight">
              BitesPOS
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Features</Link>
            <Link href="#pricing" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Pricing</Link>
            <Link href="#about" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">About</Link>
            <Link href="#contact" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Contact</Link>
            <Link 
              href="#pricing" 
              className="bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 text-slate-600 font-medium hover:text-orange-600 hover:bg-slate-50 rounded-md">Features</Link>
            <Link href="#pricing" className="block px-3 py-2 text-slate-600 font-medium hover:text-orange-600 hover:bg-slate-50 rounded-md">Pricing</Link>
            <Link href="#about" className="block px-3 py-2 text-slate-600 font-medium hover:text-orange-600 hover:bg-slate-50 rounded-md">About</Link>
            <Link href="#contact" className="block px-3 py-2 text-slate-600 font-medium hover:text-orange-600 hover:bg-slate-50 rounded-md">Contact</Link>
            <Link href="#pricing" className="block px-3 py-2 mt-4 text-center bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
