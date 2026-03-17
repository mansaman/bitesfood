import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BitesPOS - Restaurant Management System',
  description: 'Pay Once for Restaurant POS and Use Forever. The Complete Restaurant POS System for Modern Dining.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
