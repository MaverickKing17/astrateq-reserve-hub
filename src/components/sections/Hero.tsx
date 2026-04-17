import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-white border-b border-border py-24">
      {/* Abstract Background Detail */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-bg skew-x-[-12deg] translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-10 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 rounded text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            New Safety Standards
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight text-navy">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate mb-10 font-medium leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-navy hover:opacity-90 text-white font-bold h-14 px-10 rounded-md">
              <Link to="/reserve" className="flex items-center gap-2 uppercase tracking-widest text-xs">
                {t('hero.cta')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 border-border text-navy uppercase tracking-widest text-xs font-bold">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-slate/5 p-4 rounded-2xl border border-border">
            <img 
              src="https://picsum.photos/seed/dashcam-pro/800/600" 
              alt="Astrateq AI Dashcam"
              className="rounded-xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg border border-border shadow-xl">
            <div className="text-accent text-3xl font-bold mb-1 tracking-tighter">ASTRA-AI</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate">Active Protection Engine</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
