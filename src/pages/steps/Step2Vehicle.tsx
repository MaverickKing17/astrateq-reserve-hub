import { useReservation } from '@/context/ReservationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  year: z.string().min(4, "Year is required"),
  make: z.string().min(2, "Make is required"),
  model: z.string().min(2, "Model is required"),
});

export default function Step2Vehicle() {
  const { state, updateState } = useReservation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: state.vehicleInfo
  });

  const onSubmit = (data: any) => {
    updateState({ vehicleInfo: data, step: 3 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="year" className="text-[10px] font-bold uppercase tracking-widest text-slate">Vehicle Year</Label>
          <Input id="year" {...register('year')} placeholder="2024" className="professional-input h-12" />
          {errors.year && <p className="text-destructive text-xs italic">{errors.year.message as string}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="make" className="text-[10px] font-bold uppercase tracking-widest text-slate">Vehicle Make</Label>
          <Input id="make" {...register('make')} placeholder="Tesla / BMW / Ford" className="professional-input h-12" />
          {errors.make && <p className="text-destructive text-xs italic">{errors.make.message as string}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="model" className="text-[10px] font-bold uppercase tracking-widest text-slate">Vehicle Model</Label>
          <Input id="model" {...register('model')} placeholder="Model Y / M3 / F-150" className="professional-input h-12" />
          {errors.model && <p className="text-destructive text-xs italic">{errors.model.message as string}</p>}
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => updateState({ step: 1 })} className="flex-1 h-12 border-border text-navy uppercase tracking-widest font-bold text-[10px]">
          Back
        </Button>
        <Button type="submit" className="flex-[2] h-12 bg-navy hover:opacity-90 text-white font-bold uppercase tracking-widest text-[10px]">
          Next: Location details
        </Button>
      </div>
    </form>
  );
}
