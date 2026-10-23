import React from 'react';
import { useMatches } from '../../context/MatchContext';
import { Pin, X, ChevronRight } from 'lucide-react';

export function PinnedBar() {
  const { matches, pinnedMatchIds, togglePinMatch, setSelectedMatch } = useMatches();

  const pinnedMatches = matches.filter((m) => pinnedMatchIds.includes(m.id));

  if (pinnedMatches.length === 0) return null;

  return (
    <div className="w-full bg-[#101512] border-b border-[#27322B] py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#39F27A] uppercase tracking-wider whitespace-nowrap pl-1">
          <Pin className="w-3.5 h-3.5 fill-[#39F27A]" />
          <span>Pinned:</span>
        </div>

        <div className="flex items-center gap-2.5">
          {pinnedMatches.map((m) => {
            const isLive = m.status === 'LIVE';
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMatch(m)}
                className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#151C18] border border-[#27322B] hover:border-[#39F27A]/50 cursor-pointer transition select-none shrink-0"
              >
                {/* Status indicator */}
                {isLive ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#39F27A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39F27A] animate-pulse" />
                    {m.minute}'
                  </span>
                ) : m.status === 'FT' ? (
                  <span className="text-[11px] font-semibold text-neutral-400">FT</span>
                ) : (
                  <span className="text-[11px] text-neutral-400">{m.startTime}</span>
                )}

                {/* Teams & Score */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={m.homeTeam.logo}
                      alt={m.homeTeam.name}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-neutral-200">
                      {m.homeTeam.code || m.homeTeam.shortName}
                    </span>
                  </div>

                  <span className="text-xs font-black text-white px-1.5 py-0.5 rounded bg-black/40">
                    {m.status === 'SCHEDULED' ? 'vs' : `${m.homeTeam.score} - ${m.awayTeam.score}`}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-neutral-200">
                      {m.awayTeam.code || m.awayTeam.shortName}
                    </span>
                    <img
                      src={m.awayTeam.logo}
                      alt={m.awayTeam.name}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Unpin button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePinMatch(m.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-0.5 text-neutral-400 hover:text-white rounded transition"
                  title="Unpin match"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
