import { useTranslation } from 'react-i18next';
import { useReservation } from '@/context/ReservationContext';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, Info } from 'lucide-react';

export default function SummarySidebar() {
  const { t } = useTranslation();
  const { state } = useReservation();

  const deposit = 4900;
  const tax = state.taxInfo?.taxAmountCents || 0;
  const total = deposit + tax;

  return (
    <div className="space-y-8">
      <h2 className="font-bold text-lg mb-6 flex items-center gap-2 text-navy tracking-tight uppercase border-b border-border pb-4">
        <ShieldCheck className="h-5 w-5 text-accent" />
        {t('funnel.summary')}
      </h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-sm">
          <span className="text-slate font-medium">{t('funnel.deposit')}</span>
          <span className="font-bold text-navy">${(deposit / 100).toFixed(2)} CAD</span>
        </div>
        
        {state.location.provinceCode && (
          <div className="flex justify-between text-sm">
            <span className="text-slate font-medium">{t('funnel.tax')} ({state.taxInfo?.taxType})</span>
            <span className="font-bold text-navy">${(tax / 100).toFixed(2)} CAD</span>
          </div>
        )}

        <Separator className="bg-border" />
        
        <div className="flex justify-between text-lg font-bold text-navy">
          <span>{t('funnel.total')}</span>
          <span className="text-accent font-black">${(total / 100).toFixed(2)} CAD</span>
        </div>
      </div>

      <div className="bg-bg border border-border rounded-lg p-5">
        <div className="flex gap-3 text-[11px] leading-relaxed text-slate font-medium uppercase tracking-[0.02em]">
          <Info className="h-4 w-4 shrink-0 text-accent" />
          <p>This is a 100% refundable reservation deposit. You will be notified 30 days before shipping to complete your full payment.</p>
        </div>
      </div>

      <div className="p-4 border border-border rounded flex items-center justify-center gap-2">
         <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
         <span className="text-[10px] text-slate font-bold uppercase tracking-widest leading-none">
           Secured Connection
         </span>
      </div>
    </div>
  );
}
