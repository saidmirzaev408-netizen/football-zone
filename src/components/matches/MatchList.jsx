import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import { MatchCard } from './MatchCard';
import { Radio, Calendar, CheckCircle2, Clock, Filter, Trophy, Sparkles } from 'lucide-react';

export function MatchList() {
  const { matches, selectedLeagueId, setSelectedLeagueId, leagues } = useMatches();
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL', 'LIVE', 'FT', 'SCHEDULED'

  // Filter by league and status
  const filteredMatches = matches.filter((m) => {
    const matchesLeague =
      selectedLeagueId === 'all' || m.leagueId === selectedLeagueId;
    const matchesStatus =
      statusFilter === 'ALL' || m.status === statusFilter;
    return matchesLeague && matchesStatus;
  });

  const liveCount = matches.filter((m) => m.status === 'LIVE').length;
  const ftCount = matches.filter((m) => m.status === 'FT').length;
  const upcomingCount = matches.filter((m) => m.status === 'SCHEDULED').length;

  // Group filtered matches by league
  const groupedByLeague = filteredMatches.reduce((acc, match) => {
    const key = match.leagueId;
    if (!acc[key]) {
      acc[key] = {
        leagueId: match.leagueId,
        leagueName: match.leagueName,
        matches: []
      };
    }
    acc[key].matches.push(match);
    return acc;
  }, {});

  const currentLeagueObj = leagues.find((l) => l.id === selectedLeagueId);

  return (
    <div className="space-y-6">
      {/* Top Header Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#27322B]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              {selectedLeagueId === 'all'
                ? 'Today’s Matches & Scores'
                : currentLeagueObj?.name || 'League Matches'}
            </h2>
            {liveCount > 0 && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[#39F27A]/20 text-[#39F27A] border border-[#39F27A]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39F27A] animate-pulse" />
                {liveCount} Live
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Real-time score updates, lineups, odds, and interactive simulation
          </p>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 rounded-xl bg-[#151C18] border border-[#27322B]">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              statusFilter === 'ALL'
                ? 'bg-[#39F27A] text-black shadow-neon'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All ({matches.length})
          </button>
          <button
            onClick={() => setStatusFilter('LIVE')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              statusFilter === 'LIVE'
                ? 'bg-[#39F27A] text-black shadow-neon'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Live ({liveCount})
          </button>
          <button
            onClick={() => setStatusFilter('FT')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              statusFilter === 'FT'
                ? 'bg-white text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Finished ({ftCount})
          </button>
          <button
            onClick={() => setStatusFilter('SCHEDULED')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              statusFilter === 'SCHEDULED'
                ? 'bg-white text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Upcoming ({upcomingCount})
          </button>
        </div>
      </div>

      {/* League Filter Quick Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setSelectedLeagueId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
            selectedLeagueId === 'all'
              ? 'bg-[#151C18] text-[#39F27A] border-[#39F27A]/50 shadow-neon'
              : 'bg-[#101512] text-neutral-400 border-[#27322B] hover:text-white'
          }`}
        >
          All Competitions
        </button>
        {leagues.map((lg) => (
          <button
            key={lg.id}
            onClick={() => setSelectedLeagueId(lg.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
              selectedLeagueId === lg.id
                ? 'bg-[#151C18] text-[#39F27A] border-[#39F27A]/50 shadow-neon'
                : 'bg-[#101512] text-neutral-400 border-[#27322B] hover:text-white'
            }`}
          >
            <img
              src={lg.logo}
              alt={lg.name}
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>{lg.shortName || lg.name}</span>
          </button>
        ))}
      </div>

      {/* Match Cards Grouped by League */}
      {Object.keys(groupedByLeague).length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-[#151C18] border border-[#27322B] p-8">
          <Calendar className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
          <h4 className="text-base font-bold text-white">No matches found</h4>
          <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
            No matches match the selected filter. Try selecting 'All' or a different competition.
          </p>
          <button
            onClick={() => {
              setSelectedLeagueId('all');
              setStatusFilter('ALL');
            }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#39F27A] text-black hover:bg-[#39F27A]/90 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.values(groupedByLeague).map((group) => {
            const leagueInfo = leagues.find((l) => l.id === group.leagueId);

            return (
              <div key={group.leagueId} className="space-y-3">
                {/* League Section Header */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2.5">
                    {leagueInfo?.logo && (
                      <img
                        src={leagueInfo.logo}
                        alt={group.leagueName}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                    )}
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                      {group.leagueName}
                    </h3>
                    <span className="text-xs text-neutral-400">
                      ({leagueInfo?.country || 'Tournament'})
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    {group.matches.length} {group.matches.length === 1 ? 'Match' : 'Matches'}
                  </span>
                </div>

                {/* Match Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
