import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num) {
  if (num === null || num === undefined) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function calculateVotePercentages(votes) {
  if (!votes) return { home: 33, draw: 34, away: 33 };
  const total = (votes.home || 0) + (votes.draw || 0) + (votes.away || 0);
  if (total === 0) return { home: 33, draw: 34, away: 33 };
  return {
    home: Math.round(((votes.home || 0) / total) * 100),
    draw: Math.round(((votes.draw || 0) / total) * 100),
    away: Math.round(((votes.away || 0) / total) * 100)
  };
}
