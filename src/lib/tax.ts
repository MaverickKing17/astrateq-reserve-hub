import { CANADIAN_PROVINCES } from '../types';

export function calculateTax(amountCents: number, provinceCode: string) {
  const province = CANADIAN_PROVINCES.find((p) => p.code === provinceCode);
  if (!province) {
    return {
      taxAmountCents: 0,
      taxType: 'Tax',
      totalAmountCents: amountCents,
    };
  }

  const taxAmountCents = Math.round(amountCents * province.rate);
  return {
    taxAmountCents,
    taxType: province.type,
    totalAmountCents: amountCents + taxAmountCents,
  };
}
