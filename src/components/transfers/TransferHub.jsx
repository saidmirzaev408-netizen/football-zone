import React, { useState } from 'react';
import { demoTransfers } from '../../data/demoTransfers';
import { ArrowRight, ArrowLeftRight, CheckCircle, Flame, ShieldAlert } from 'lucide-react';

export function TransferHub() {
  const [filter, setFilter] = useState('ALL'); // 'ALL', 'CONFIRMED', 'RUMOR'

  const filtered = demoTransfers.filter((t) => {
    if (filter === 'CONFIRMED') return t.status.toLowerCase().includes('confirmed') || t.status.toLowerCase().includes('here we go');
    if (filter === 'RUMOR') return !t.status.toLowerCase().includes('confirmed');
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#27322B]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              Transfer Market & Rumors Hub
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Live Window
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Confirmed signings, verified journalist tiers, release clauses, and exclusive buzz
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#151C18] border border-[#27322B]">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'ALL'
                ? 'bg-[#39F27A] text-black shadow-neon'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Updates ({demoTransfers.length})
          </button>
          <button
            onClick={() => setFilter('CONFIRMED')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'CONFIRMED'
                ? 'bg-[#39F27A] text-black shadow-neon'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Confirmed Deals
          </button>
          <button
            onClick={() => setFilter('RUMOR')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'RUMOR'
                ? 'bg-amber-400 text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Top Rumors
          </button>
        </div>
      </div>

      {/* Transfer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((deal) => {
          const isConfirmed =
            deal.status.toLowerCase().includes('confirmed') ||
            deal.status.toLowerCase().includes('here we go');

          return (
            <div
              key={deal.id}
              className={`glass-card rounded-2xl p-5 border transition relative overflow-hidden ${
                isConfirmed
                  ? 'border-emerald-500/30 hover:border-emerald-500/60'
                  : 'border-[#27322B] hover:border-white/20'
              }`}
            >
              {/* Card Header: Status & Fee */}
              <div className="flex items-center justify-between pb-3 border-b border-[#27322B]">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                    isConfirmed
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}
                >
                  {isConfirmed ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : (
                    <Flame className="w-3.5 h-3.5" />
                  )}
                  {deal.status}
                </span>

                <span className="text-sm font-black text-[#39F27A] font-['Outfit']">
                  {deal.fee}
                </span>
              </div>

              {/* Player & Movement */}
              <div className="py-4 space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-white">{deal.player}</h3>
                  <p className="text-xs text-neutral-400">
                    {deal.position} • {deal.age} yrs old • {deal.type}
                  </p>
                </div>

                {/* Clubs Transfer Arrow */}
                <div className="flex items-center justify-between bg-[#101512] p-3 rounded-xl border border-[#27322B]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={deal.fromLogo}
                      alt={deal.fromClub}
                      className="w-8 h-8 rounded-full object-cover border border-white/10 shrink-0"
                    />
                    <div className="truncate">
                      <span className="text-[10px] text-neutral-500 uppercase block font-bold">
                        From
                      </span>
                      <span className="text-xs font-bold text-neutral-200 truncate block">
                        {deal.fromClub}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-white/5 text-[#39F27A] shrink-0 mx-2">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  <div className="flex items-center gap-2.5 min-w-0 text-right justify-end">
                    <div className="truncate">
                      <span className="text-[10px] text-neutral-500 uppercase block font-bold">
                        To
                      </span>
                      <span className="text-xs font-bold text-[#39F27A] truncate block">
                        {deal.toClub}
                      </span>
                    </div>
                    <img
                      src={deal.toLogo}
                      alt={deal.toClub}
                      className="w-8 h-8 rounded-full object-cover border border-white/10 shrink-0"
                    />
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{deal.detail}"
                </p>
              </div>

              {/* Footer: Reliability Source */}
              <div className="pt-3 border-t border-[#27322B] flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1 text-neutral-400">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#39F27A]" />
                  <span>{deal.reliability}</span>
                </span>
                <span>{deal.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
