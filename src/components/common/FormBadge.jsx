import React from 'react';

export function FormBadge({ result }) {
  const isWin = result === 'W';
  const isDraw = result === 'D';
  const isLoss = result === 'L';

  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold rounded ${
        isWin
          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
          : isDraw
          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
          : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
      }`}
      title={isWin ? 'Win' : isDraw ? 'Draw' : 'Loss'}
    >
      {result}
    </span>
  );
}

export function FormBadgeList({ form = [] }) {
  return (
    <div className="flex items-center gap-1">
      {form.map((res, index) => (
        <FormBadge key={index} result={res} />
      ))}
    </div>
  );
}
