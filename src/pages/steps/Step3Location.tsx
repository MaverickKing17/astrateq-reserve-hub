import { useReservation } from '@/context/ReservationContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CANADIAN_PROVINCES } from '@/types';
import { calculateTax } from '@/lib/tax';

export default function Step3Location() {
  const { state, updateState } = useReservation();

  const handleProvinceChange = (code: string) => {
    const taxInfo = calculateTax(4900, code); // 4900 is the deposit
    updateState({ location: { provinceCode: code }, taxInfo });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-[10px] font-bold uppercase tracking-widest text-slate">Select Province for Tax Calculation</Label>
        <Select onValueChange={handleProvinceChange} defaultValue={state.location.provinceCode}>
          <SelectTrigger className="professional-input h-12 text-sm bg-bg">
            <SelectValue placeholder="Choose a province" />
          </SelectTrigger>
          <SelectContent className="bg-white border-border">
            {CANADIAN_PROVINCES.map((p) => (
              <SelectItem key={p.code} value={p.code} className="text-navy hover:bg-slate/5">
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => updateState({ step: 2 })} className="flex-1 h-12 border-border text-navy uppercase tracking-widest font-bold text-[10px]">
          Back
        </Button>
        <Button 
          disabled={!state.location.provinceCode}
          onClick={() => updateState({ step: 4 })}
          className="flex-[2] h-12 bg-navy hover:opacity-90 text-white font-bold uppercase tracking-widest text-[10px]"
        >
          Next: Contact verification
        </Button>
      </div>
    </div>
  );
}
