import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ValueProps from '@/components/value-props';
import Features from '@/components/features';
import EarlyAccess from '@/components/early-access';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ValueProps />
      <Features />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
