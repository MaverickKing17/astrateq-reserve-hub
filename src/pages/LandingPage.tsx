import Hero from '../components/sections/Hero';
import Pricing from '../components/sections/Pricing';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        
        {/* Trust Strip */}
        <section className="bg-white py-12 border-b border-border">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="border-l-4 border-accent pl-6">
                <div className="text-3xl font-bold text-navy mb-1 tracking-tighter">98%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate">Incident Avoidance</div>
              </div>
              <div className="border-l-4 border-border pl-6">
                <div className="text-3xl font-bold text-navy mb-1 tracking-tighter">10k+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate">Canadian Families</div>
              </div>
              <div className="border-l-4 border-border pl-6">
                <div className="text-3xl font-bold text-navy mb-1 tracking-tighter">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate">Active Response</div>
              </div>
              <div className="border-l-4 border-border pl-6">
                <div className="text-3xl font-bold text-navy mb-1 tracking-tighter">15ms</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate">AI Reaction Time</div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        
        {/* FAQ */}
        <section className="py-24 container mx-auto px-10 max-w-4xl">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold text-navy">Frequent Questions</h2>
            <span className="text-slate text-sm font-medium">Customer Support v2.4</span>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-3 text-base">Is the deposit refundable?</h3>
              <p className="text-sm text-slate leading-relaxed">
                Yes, your $49 deposit is 100% refundable at any time before your hardware ships. We provide a hassle-free cancellation process directly through our support portal.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-3 text-base">How does the AI detection work?</h3>
              <p className="text-sm text-slate leading-relaxed">
                ASTRA-AI uses a custom neural engine to analyze driving telemetry and visual data 60 times per second, identifying safety risks before they manifest physically.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
