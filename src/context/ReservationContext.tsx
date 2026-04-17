import React, { createContext, useContext, useEffect, useState } from 'react';
import { ReservationState } from '../types';

interface ReservationContextType {
  state: ReservationState;
  updateState: (updates: Partial<ReservationState>) => void;
  resetState: () => void;
}

const initialState: ReservationState = {
  step: 1,
  productId: null,
  vehicleInfo: { year: '', make: '', model: '' },
  location: { provinceCode: '' },
  contact: { firstName: '', lastName: '', email: '', phone: '' },
  taxInfo: null,
  paymentIntentId: null,
};

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ReservationState>(() => {
    const saved = localStorage.getItem('as_reservation_state');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('as_reservation_state', JSON.stringify(state));
  }, [state]);

  const updateState = (updates: Partial<ReservationState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const resetState = () => {
    setState(initialState);
    localStorage.removeItem('as_reservation_state');
  };

  return (
    <ReservationContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}
