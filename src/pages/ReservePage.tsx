import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useReservation } from '@/context/ReservationContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';
import Step1Plan from './steps/Step1Plan';
import Step2Vehicle from './steps/Step2Vehicle';
import Step3Location from './steps/Step3Location';
import Step4Contact from './steps/Step4Contact';
import Step5Payment from './steps/Step5Payment';
import SummarySidebar from './SummarySidebar';

export default function ReservePage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { state, updateState } = useReservation();
  const navigate = useNavigate();

  useEffect(() => {
    const productSku = searchParams.get('product');
    if (productSku && !state.productId) {
      updateState({ productId: productSku });
    }
  }, [searchParams]);

  const progress = (state.step / 5) * 100;

  const renderStep = () => {
    switch (state.step) {
      case 1: return <Step1Plan />;
      case 2: return <Step2Vehicle />;
      case 3: return <Step3Location />;
      case 4: return <Step4Contact />;
      case 5: return <Step5Payment />;
      default: return <Step1Plan />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow flex overflow-hidden">
        <div className="container mx-auto flex h-full">
          {/* Main Content Area */}
          <div className="flex-1 p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex justify-between items-baseline mb-4">
                  <h1 className="text-3xl font-bold text-navy tracking-tight uppercase">
                    {t(`funnel.steps.${['plan', 'vehicle', 'location', 'contact', 'payment'][state.step - 1]}`)}
                  </h1>
                  <span className="text-slate font-bold text-xs uppercase tracking-widest leading-none">Step {state.step} of 5</span>
                </div>
                <Progress value={progress} className="h-1 bg-border rounded-none" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={state.step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Professional Sidebar integration */}
          <aside className="professional-sidebar h-full shrink-0">
            <SummarySidebar />
          </aside>
        </div>
      </main>

      <div className="professional-footer">
        <span>Need help? Contact concierge at +1 (800) 555-0199</span>
        <span>© {new Date().getFullYear()} Astrateq Gadgets Inc.</span>
      </div>
    </div>
  );
}
