import { useReservation } from '@/context/ReservationContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PRODUCTS = [
  { sku: 'ASTRA-BASIC', name: 'Guardian Bundle', popular: false },
  { sku: 'ASTRA-PRO', name: 'Guardian Pro', popular: true },
  { sku: 'ASTRA-ELITE', name: 'Guardian Elite', popular: false }
];

export default function Step1Plan() {
  const { state, updateState } = useReservation();

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {PRODUCTS.map((p) => (
          <Card 
            key={p.sku}
            onClick={() => updateState({ productId: p.sku })}
            className={`p-6 bg-white cursor-pointer border-2 transition-all shadow-sm ${state.productId === p.sku ? 'border-accent ring-1 ring-accent' : 'border-border'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-navy tracking-tight">{p.name}</h3>
                <p className="text-[10px] text-slate font-bold uppercase tracking-widest mt-1">Tier: {p.sku.split('-')[1]}</p>
              </div>
              {state.productId === p.sku && (
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      <Button 
        disabled={!state.productId}
        onClick={() => updateState({ step: 2 })}
        className="w-full h-12 bg-navy hover:opacity-90 text-white font-bold uppercase tracking-widest text-[11px] rounded-md"
      >
        Next: Vehicle Information
      </Button>
    </div>
  );
}
