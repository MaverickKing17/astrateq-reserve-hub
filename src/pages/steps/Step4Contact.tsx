import { useReservation } from '@/context/ReservationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

export default function Step4Contact() {
  const { state, updateState } = useReservation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: state.contact
  });

  const onSubmit = (data: any) => {
    updateState({ contact: data, step: 5 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-widest text-slate">First Name</Label>
          <Input id="firstName" {...register('firstName')} placeholder="John" className="professional-input h-12" />
          {errors.firstName && <p className="text-destructive text-xs italic">{errors.firstName.message as string}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-widest text-slate">Last Name</Label>
          <Input id="lastName" {...register('lastName')} placeholder="Doe" className="professional-input h-12" />
          {errors.lastName && <p className="text-destructive text-xs italic">{errors.lastName.message as string}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate">Email Address</Label>
        <Input id="email" type="email" {...register('email')} placeholder="john@example.com" className="professional-input h-12" />
        {errors.email && <p className="text-destructive text-xs italic">{errors.email.message as string}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate">Phone Number</Label>
        <Input id="phone" type="tel" {...register('phone')} placeholder="+1 (555) 000-0000" className="professional-input h-12" />
        {errors.phone && <p className="text-destructive text-xs italic">{errors.phone.message as string}</p>}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => updateState({ step: 3 })} className="flex-1 h-12 border-border text-navy uppercase tracking-widest font-bold text-[10px]">
          Back
        </Button>
        <Button type="submit" className="flex-[2] h-12 bg-navy hover:opacity-90 text-white font-bold uppercase tracking-widest text-[10px]">
          Review & Pay
        </Button>
      </div>
    </form>
  );
}
