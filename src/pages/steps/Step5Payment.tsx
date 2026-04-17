import { useState } from 'react';
import { useReservation } from '@/context/ReservationContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2, Lock } from 'lucide-react';

export default function Step5Payment() {
  const { state, updateState, resetState } = useReservation();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleMockPayment = async () => {
    setIsProcessing(true);
    
    // Simulate API call to mock backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const reservationNumber = `ASTRA-2026-${Math.floor(Math.random() * 90000) + 10000}`;
    
    setIsProcessing(false);
    toast.success("Reservation confirmed!");
    
    // Clear state after success
    resetState();
    navigate(`/confirmation/${reservationNumber}`);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white border border-border rounded-xl p-10 text-center shadow-sm">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
          <Lock className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-navy tracking-tight">Payment Verification</h2>
        <p className="text-slate text-sm mb-10 leading-relaxed max-w-sm mx-auto font-medium">
          Secure, encrypted checkout powered by Stripe. Your hardware priority is secured upon successful deposit.
        </p>

        {/* Mock Stripe Element */}
        <div className="bg-bg border border-border p-8 rounded-lg mb-8 text-left space-y-6">
          <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate">Card Details</div>
            <div className="h-12 bg-white rounded border border-border flex items-center px-4 font-mono text-sm tracking-widest text-navy">
              •••• •••• •••• 4242
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate">Expiry</div>
              <div className="h-12 bg-white rounded border border-border flex items-center px-4 font-mono text-sm text-navy">
                12 / 26
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate">CVC</div>
              <div className="h-12 bg-white rounded border border-border flex items-center px-4 font-mono text-sm text-navy">
                •••
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={() => updateState({ step: 4 })} 
          disabled={isProcessing}
          className="flex-1 h-12 border-border text-navy uppercase tracking-widest font-bold text-[10px]"
        >
          Back
        </Button>
        <Button 
          onClick={handleMockPayment} 
          disabled={isProcessing}
          className="flex-[2] h-12 bg-navy hover:opacity-90 text-white font-bold uppercase tracking-widest text-[10px]"
        >
          {isProcessing ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            `Confirm Deposit: $${((state.taxInfo?.totalAmountCents || 4900) / 100).toFixed(2)}`
          )}
        </Button>
      </div>
    </div>
  );
}
