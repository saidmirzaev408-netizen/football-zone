import React from 'react';
import { useMatches } from '../../context/MatchContext';
import { TrendingUp, Users, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { calculateVotePercentages } from '../../utils/helpers';

export function FanPredictions() {
  const { matches, userVotes, voteOnMatch, setSelectedMatch } = useMatches();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#27322B]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              Fan Predictions & Community Polls
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#39F27A]/20 text-[#39F27A] border border-[#39F27A]/30">
              Interactive
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Pick match outcomes, compare against global crowd wisdom, and test your football instinct
          </p>
        </div>
      </div>

      {/* Prediction Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match) => {
          const userVote = userVotes[match.id];
          const votePcts = calculateVotePercentages(match.votes);
          const totalVotes =
            (match.votes?.home || 0) + (match.votes?.draw || 0) + (match.votes?.away || 0);

          return (
            <div
              key={match.id}
              className="glass-card rounded-3xl p-5 border border-[#27322B] hover:border-[#39F27A]/40 transition space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-[#27322B]">
                <span className="font-semibold text-neutral-300">{match.leagueName}</span>
                <span className="flex items-center gap-1 font-mono">
                  <Users className="w-3.5 h-3.5 text-[#39F27A]" />
                  {totalVotes.toLocaleString()} votes
                </span>
              </div>

              {/* Match Overview */}
              <div
                onClick={() => setSelectedMatch(match)}
                className="flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-bold text-white group-hover:text-[#39F27A] transition">
                    {match.homeTeam.name}
                  </span>
                </div>

                <div className="px-3 py-1 rounded-xl bg-black/40 text-xs font-bold text-neutral-400">
                  {match.status === 'SCHEDULED' ? 'VS' : `${match.homeTeam.score} - ${match.awayTeam.score}`}
                </div>

                <div className="flex items-center gap-3 text-right">
                  <span className="text-sm font-bold text-white group-hover:text-[#39F27A] transition">
                    {match.awayTeam.name}
                  </span>
                  <img
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Voting Options */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button
                  onClick={() => voteOnMatch(match.id, 'home')}
                  className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center ${
                    userVote === 'home'
                      ? 'bg-[#39F27A]/20 border-[#39F27A] text-white shadow-neon'
                      : 'bg-[#151C18] border-[#27322B] hover:border-white/20 text-neutral-300'
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 uppercase font-bold">1 (Home)</span>
                  <span className="text-base font-black text-[#39F27A] font-['Outfit'] mt-1">
                    {votePcts.home}%
                  </span>
                  {userVote === 'home' && (
                    <span className="text-[10px] text-[#39F27A] font-bold mt-1">✓ Your Pick</span>
                  )}
                </button>

                <button
                  onClick={() => voteOnMatch(match.id, 'draw')}
                  className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center ${
                    userVote === 'draw'
                      ? 'bg-amber-400/20 border-amber-400 text-white'
                      : 'bg-[#151C18] border-[#27322B] hover:border-white/20 text-neutral-300'
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 uppercase font-bold">X (Draw)</span>
                  <span className="text-base font-black text-amber-400 font-['Outfit'] mt-1">
                    {votePcts.draw}%
                  </span>
                  {userVote === 'draw' && (
                    <span className="text-[10px] text-amber-400 font-bold mt-1">✓ Your Pick</span>
                  )}
                </button>

                <button
                  onClick={() => voteOnMatch(match.id, 'away')}
                  className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center ${
                    userVote === 'away'
                      ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-white shadow-neon-cyan'
                      : 'bg-[#151C18] border-[#27322B] hover:border-white/20 text-neutral-300'
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 uppercase font-bold">2 (Away)</span>
                  <span className="text-base font-black text-[#00E5FF] font-['Outfit'] mt-1">
                    {votePcts.away}%
                  </span>
                  {userVote === 'away' && (
                    <span className="text-[10px] text-[#00E5FF] font-bold mt-1">✓ Your Pick</span>
                  )}
                </button>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full bg-[#101512] rounded-full overflow-hidden flex">
                <div style={{ width: `${votePcts.home}%` }} className="bg-[#39F27A] h-full" />
                <div style={{ width: `${votePcts.draw}%` }} className="bg-amber-400 h-full" />
                <div style={{ width: `${votePcts.away}%` }} className="bg-[#00E5FF] h-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
