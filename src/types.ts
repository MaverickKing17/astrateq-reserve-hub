export interface Product {
  id: string;
  sku: string;
  price_cents: number;
  deposit_cents: number;
  name_en: string;
  name_fr: string;
  features_en: string[];
  features_fr: string[];
}

export interface ReservationState {
  step: number;
  productId: string | null;
  vehicleInfo: {
    year: string;
    make: string;
    model: string;
  };
  location: {
    provinceCode: string;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  taxInfo: {
    taxAmountCents: number;
    taxType: string;
    totalAmountCents: number;
  } | null;
  paymentIntentId: string | null;
}

export const CANADIAN_PROVINCES = [
  { code: 'AB', name: 'Alberta', rate: 0.05, type: 'GST' },
  { code: 'BC', name: 'British Columbia', rate: 0.12, type: 'PST+GST' },
  { code: 'MB', name: 'Manitoba', rate: 0.12, type: 'PST+GST' },
  { code: 'NB', name: 'New Brunswick', rate: 0.15, type: 'HST' },
  { code: 'NL', name: 'Newfoundland and Labrador', rate: 0.15, type: 'HST' },
  { code: 'NS', name: 'Nova Scotia', rate: 0.15, type: 'HST' },
  { code: 'ON', name: 'Ontario', rate: 0.13, type: 'HST' },
  { code: 'PE', name: 'Prince Edward Island', rate: 0.15, type: 'HST' },
  { code: 'QC', name: 'Quebec', rate: 0.14975, type: 'GST+QST' },
  { code: 'SK', name: 'Saskatchewan', rate: 0.11, type: 'PST+GST' },
  { code: 'NT', name: 'Northwest Territories', rate: 0.05, type: 'GST' },
  { code: 'NU', name: 'Nunavut', rate: 0.05, type: 'GST' },
  { code: 'YT', name: 'Yukon', rate: 0.05, type: 'GST' },
];
