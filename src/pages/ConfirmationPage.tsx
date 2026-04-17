import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, Download, Mail, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfirmationPage() {
  const { t } = useTranslation();
  const { reservationNumber } = useParams();

  return (
    <div className="min-h-screen bg-navy-deep text-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <Card className="bg-navy-surface border-white/10 p-12 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success mb-8">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Reservation Confirmed</h1>
            <p className="text-text-secondary mb-12 max-w-md mx-auto">
              Your spot in the Canadian ASTRA-AI launch is secured. A confirmation email has been sent to your inbox.
            </p>

            <div className="bg-navy-deep rounded-xl border border-white/10 p-8 mb-12">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary mb-2">Reservation Number</div>
              <div className="text-2xl font-mono font-bold text-cyan-accent">{reservationNumber}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <Button asChild variant="outline" className="h-14 border-white/10 text-white hover:bg-white/5 uppercase tracking-widest font-bold">
                <a href="#">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 border-white/10 text-white hover:bg-white/5 uppercase tracking-widest font-bold">
                <a href="#">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-widest">
                <Mail className="h-4 w-4" />
                Need help? <a href="mailto:support@astrateq.ca" className="text-cyan-accent hover:underline">support@astrateq.ca</a>
              </div>
              
              <Button asChild variant="ghost" className="text-text-secondary hover:text-white">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
