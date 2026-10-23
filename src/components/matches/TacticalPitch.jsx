import React, { useState } from 'react';

export function TacticalPitch({ lineups, homeTeam, awayTeam }) {
  const [activeSide, setActiveSide] = useState('home'); // 'home' or 'away'

  if (!lineups || (!lineups.home && !lineups.away)) {
    return (
      <div className="py-12 text-center text-neutral-400 bg-[#151C18] rounded-2xl border border-[#27322B]">
        <p className="text-sm font-medium">Official lineups not confirmed yet.</p>
        <p className="text-xs text-neutral-400 mt-1">Expected 1 hour prior to kickoff.</p>
      </div>
    );
  }

  const currentLineup = activeSide === 'home' ? lineups.home : lineups.away;
  const currentTeam = activeSide === 'home' ? homeTeam : awayTeam;

  return (
    <div className="space-y-4">
      {/* Side Selector Tabs */}
      <div className="flex items-center justify-between bg-[#151C18] p-1.5 rounded-xl border border-[#27322B]">
        <button
          onClick={() => setActiveSide('home')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition ${
            activeSide === 'home'
              ? 'bg-[#39F27A] text-black shadow-neon'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <img
            src={homeTeam.logo}
            alt={homeTeam.name}
            className="w-4 h-4 rounded-full object-cover"
          />
          <span>{homeTeam.name} ({lineups.home?.formation || '4-3-3'})</span>
        </button>

        <button
          onClick={() => setActiveSide('away')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition ${
            activeSide === 'away'
              ? 'bg-[#00E5FF] text-black shadow-neon-cyan'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <img
            src={awayTeam.logo}
            alt={awayTeam.name}
            className="w-4 h-4 rounded-full object-cover"
          />
          <span>{awayTeam.name} ({lineups.away?.formation || '4-2-3-1'})</span>
        </button>
      </div>

      {/* Tactical Pitch Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px] rounded-2xl overflow-hidden border-2 border-[#27322B] shadow-2xl bg-gradient-to-b from-[#0c2214] via-[#091d11] to-[#0c2214] select-none">
        {/* Grass Alternating Stripes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full flex flex-col">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? 'bg-black/30' : 'bg-transparent'}`}
              />
            ))}
          </div>
        </div>

        {/* Pitch Markings SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full stroke-white/20 fill-none"
          strokeWidth="2"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Outer Boundary */}
          <rect x="4" y="4" width="92" height="92" rx="2" />
          {/* Halfway line */}
          <line x1="4" y1="50" x2="96" y2="50" />
          {/* Center Circle */}
          <circle cx="50" cy="50" r="12" />
          <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.4)" />
          {/* Top Penalty Area (Opponent Box) */}
          <rect x="25" y="4" width="50" height="18" />
          <rect x="37" y="4" width="26" height="7" />
          <path d="M 40 22 A 10 10 0 0 0 60 22" />
          {/* Bottom Penalty Area (Defending Box) */}
          <rect x="25" y="78" width="50" height="18" />
          <rect x="37" y="89" width="26" height="7" />
          <path d="M 40 78 A 10 10 0 0 1 60 78" />
        </svg>

        {/* Formation & Manager Badge */}
        <div className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
          <span className="text-neutral-400">Formation: </span>
          <span className="font-extrabold text-[#39F27A]">
            {currentLineup?.formation || '4-3-3'}
          </span>
          <span className="text-neutral-400 ml-2">Manager: </span>
          <span className="text-white font-medium">
            {currentLineup?.manager || 'Head Coach'}
          </span>
        </div>

        {/* Player Markers on the pitch */}
        {currentLineup?.players?.map((player) => {
          const isHighRating = player.rating >= 8.0;

          return (
            <div
              key={player.number}
              style={{
                left: `${player.x}%`,
                top: `${player.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className="absolute z-20 flex flex-col items-center group cursor-pointer"
            >
              {/* Player Node */}
              <div
                className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-black border-2 transition-transform duration-200 group-hover:scale-125 shadow-lg ${
                  activeSide === 'home'
                    ? 'bg-[#39F27A] border-white group-hover:shadow-neon'
                    : 'bg-[#00E5FF] border-white group-hover:shadow-neon-cyan'
                }`}
              >
                {player.number}

                {/* Rating badge */}
                {player.rating && (
                  <span
                    className={`absolute -top-2 -right-2 px-1 rounded text-[9px] font-black border ${
                      isHighRating
                        ? 'bg-emerald-500 text-black border-emerald-300'
                        : 'bg-black/90 text-neutral-200 border-white/20'
                    }`}
                  >
                    {player.rating}
                  </span>
                )}
              </div>

              {/* Player Name & Role Tag */}
              <div className="mt-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/10 text-center pointer-events-none group-hover:border-[#39F27A]">
                <p className="text-[10px] sm:text-xs font-semibold text-white truncate max-w-[80px]">
                  {player.name}
                </p>
                <p className="text-[8px] text-neutral-400 uppercase font-mono">
                  {player.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Players List Grid / Subs */}
      <div className="bg-[#151C18] p-4 rounded-2xl border border-[#27322B]">
        <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
          Starting XI — {currentTeam.name}
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {currentLineup?.players?.map((p) => (
            <div
              key={p.number}
              className="flex items-center justify-between p-2 rounded-xl bg-[#101512] border border-[#27322B] text-xs"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-bold text-[10px] text-neutral-200">
                  {p.number}
                </span>
                <span className="font-semibold text-white truncate">{p.name}</span>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#39F27A]">
                {p.rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
