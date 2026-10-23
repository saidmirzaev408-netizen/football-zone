import React, { useState } from 'react';
import { demoTopScorers, demoTopAssists } from '../../data/demoPlayers';
import { Award, Zap, Trophy, TrendingUp } from 'lucide-react';

export function TopScorers() {
  const [activeTab, setActiveTab] = useState('goals'); // 'goals' or 'assists'

  const list = activeTab === 'goals' ? demoTopScorers : demoTopAssists;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#27322B]">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            Player Leaderboards & Golden Boot
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Top goalscorers and assist architects across Europe and Uzbekistan Super League
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#151C18] border border-[#27322B]">
          <button
            onClick={() => setActiveTab('goals')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'goals'
                ? 'bg-[#39F27A] text-black shadow-neon'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            ⚽ Top Scorers (Goals)
          </button>
          <button
            onClick={() => setActiveTab('assists')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'assists'
                ? 'bg-[#00E5FF] text-black shadow-neon-cyan'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            🎯 Top Assists
          </button>
        </div>
      </div>

      {/* Top 3 Podium Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.slice(0, 3).map((player, idx) => {
          const isGold = idx === 0;
          const isSilver = idx === 1;
          const isBronze = idx === 2;

          return (
            <div
              key={idx}
              className={`relative rounded-3xl p-5 border flex flex-col items-center text-center overflow-hidden transition hover:-translate-y-1 duration-300 ${
                isGold
                  ? 'bg-gradient-to-b from-[#1c2e22] to-[#151C18] border-[#39F27A]/50 shadow-neon'
                  : 'bg-[#151C18] border-[#27322B]'
              }`}
            >
              {/* Podium medal tag */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs mb-3 ${
                  isGold
                    ? 'bg-[#FFD700] text-black shadow-lg'
                    : isSilver
                    ? 'bg-neutral-300 text-black'
                    : 'bg-amber-700 text-white'
                }`}
              >
                #{player.rank}
              </div>

              {/* Player Portrait */}
              <img
                src={player.photo}
                alt={player.name}
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20 shadow-xl mb-3"
              />

              <h4 className="text-base font-bold text-white">{player.name}</h4>
              <p className="text-xs text-neutral-400 mt-0.5">{player.team}</p>
              <span className="text-[10px] text-neutral-400 mt-0.5">{player.league}</span>

              {/* Big Metric Display */}
              <div className="mt-4 pt-3 border-t border-[#27322B] w-full flex items-center justify-center gap-2">
                <span className="text-3xl font-black text-[#39F27A] font-['Outfit']">
                  {activeTab === 'goals' ? player.goals : player.assists}
                </span>
                <span className="text-xs font-semibold text-neutral-400 uppercase">
                  {activeTab === 'goals' ? 'Goals' : 'Assists'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-[#151C18] rounded-3xl border border-[#27322B] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 bg-[#101512] border-b border-[#27322B]">
              <tr>
                <th className="py-3 px-4 text-center w-12">#</th>
                <th className="py-3 px-4">Player</th>
                <th className="py-3 px-4">Club</th>
                <th className="py-3 px-4 hidden sm:table-cell">League</th>
                <th className="py-3 px-3 text-center">Matches</th>
                {activeTab === 'goals' && (
                  <>
                    <th className="py-3 px-3 text-center hidden md:table-cell">Pens</th>
                    <th className="py-3 px-3 text-center hidden md:table-cell">Min / Goal</th>
                  </>
                )}
                <th className="py-3 px-4 text-center font-extrabold text-[#39F27A]">
                  {activeTab === 'goals' ? 'Goals' : 'Assists'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27322B]/60">
              {list.map((p, idx) => (
                <tr key={idx} className="hover:bg-[#1B241F] transition">
                  <td className="py-3.5 px-4 text-center font-bold text-neutral-400">
                    {p.rank}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="w-8 h-8 rounded-full object-cover border border-white/10"
                      />
                      <span className="font-bold text-white">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-neutral-300 font-medium">{p.team}</td>
                  <td className="py-3.5 px-4 text-neutral-400 hidden sm:table-cell">{p.league}</td>
                  <td className="py-3.5 px-3 text-center text-neutral-300 font-mono">
                    {p.matches}
                  </td>
                  {activeTab === 'goals' && (
                    <>
                      <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell font-mono">
                        {p.penalties ?? 0}
                      </td>
                      <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell font-mono">
                        {p.minutesPerGoal ? `${p.minutesPerGoal}'` : '-'}
                      </td>
                    </>
                  )}
                  <td className="py-3.5 px-4 text-center font-black text-white text-base font-['Outfit']">
                    <span className="text-[#39F27A]">
                      {activeTab === 'goals' ? p.goals : p.assists}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
