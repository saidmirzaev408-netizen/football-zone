import React from 'react';

export function MatchStatusBadge({ status, minute }) {
  if (status === 'LIVE') {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#39F27A]/15 text-[#39F27A] border border-[#39F27A]/30">
        <span className="w-2 h-2 rounded-full bg-[#39F27A] animate-pulse-live" />
        <span>LIVE {minute}'</span>
      </div>
    );
  }

  if (status === 'FT') {
    return (
      <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-white/10 text-neutral-300 border border-white/10">
        FT
      </div>
    );
  }

  return (
    <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-neutral-400 border border-white/5">
      Upcoming
    </div>
  );
}
