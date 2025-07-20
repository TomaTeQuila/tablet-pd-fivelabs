// helpers/dataHelpers.ts

import type { PenalCode } from '../data/penalcode';
import type { Crime } from '../data/crimes';


export function getUniqueCategories(penalCodes: PenalCode[]): string[] {
  const categories = [
    ...new Set(
      penalCodes
        .map(code => code.category)
        .filter((cat): cat is string => typeof cat === 'string' && !!cat)
    )
  ];
  return ["Todos", ...categories.sort()];
}


export function getCategoryCounts(penalCodes: PenalCode[], categories: string[]): Record<string, number> {
  return categories.reduce((acc, cat) => {
    if (cat === "Todos") {
      acc[cat] = penalCodes.length;
    } else {
      acc[cat] = penalCodes.filter(code => code.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);
}

export function calculateTotals(crimes: Crime[]): {
  totalFine: number;
  totalPrison: number;
  totalCrimes: number;
} {
  return crimes.reduce((acc, crime) => {
    const fineMatch = crime.fine.match(/[\d,]+/);
    const fine = fineMatch ? parseInt(fineMatch[0].replace(/,/g, '')) : 0;
    
    const prisonMatch = crime.conviction.match(/(\d+)\s*(año|mes)/i);
    let prison = 0;
    if (prisonMatch) {
      const value = parseInt(prisonMatch[1]);
      prison = prisonMatch[2].toLowerCase().includes('año') ? value * 12 : value;
    }
    
    return {
      totalFine: acc.totalFine + fine,
      totalPrison: acc.totalPrison + prison,
      totalCrimes: acc.totalCrimes + 1
    };
  }, { totalFine: 0, totalPrison: 0, totalCrimes: 0 });
}


export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString()} $`;
}

export function formatPrison(months: number): string {
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths > 0 
      ? `${years} año${years > 1 ? 's' : ''} y ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`
      : `${years} año${years > 1 ? 's' : ''}`;
  }
  return `${months} mes${months > 1 ? 'es' : ''}`;
}