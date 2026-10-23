import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import { FormBadgeList } from '../common/FormBadge';
import { Trophy, Star, ChevronRight, Activity, Flame } from 'lucide-react';

export function StandingsTable() {
  const {
    leagues,
    selectedLeagueId,
    setSelectedLeagueId,
    teams,
    setSelectedTeam,
    favoriteLeagueIds,
    toggleFavoriteLeague
  } = useMatches();

  const [tableTab, setTableTab] = useState('overall'); // 'overall', 'home', 'away', 'form'

  const activeLeague =
    leagues.find((l) => l.id === selectedLeagueId) || leagues[0];

  const standings = activeLeague?.standings || [];
  const isFavLeague = favoriteLeagueIds.includes(activeLeague.id);

  const handleRowClick = (teamId) => {
    const foundTeam = teams.find((t) => t.id === teamId);
    if (foundTeam) setSelectedTeam(foundTeam);
  };

  return (
    <div className="space-y-6">
      {/* League Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {leagues.map((lg) => {
          const isSelected = activeLeague.id === lg.id;
          return (
            <button
              key={lg.id}
              onClick={() => setSelectedLeagueId(lg.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition border ${
                isSelected
                  ? 'bg-[#151C18] text-[#39F27A] border-[#39F27A]/50 shadow-neon'
                  : 'bg-[#101512] text-neutral-400 border-[#27322B] hover:text-white hover:bg-[#151C18]'
              }`}
            >
              <img
                src={lg.logo}
                alt={lg.name}
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>{lg.shortName || lg.name}</span>
            </button>
          );
        })}
      </div>

      {/* League Header Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#151C18] via-[#121915] to-[#151C18] border border-[#27322B] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={activeLeague.logo}
              alt={activeLeague.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-white/10 shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                  {activeLeague.name}
                </h2>
                <button
                  onClick={() => toggleFavoriteLeague(activeLeague.id)}
                  className={`p-1 rounded-lg transition ${
                    isFavLeague ? 'text-[#FFD700]' : 'text-neutral-500 hover:text-white'
                  }`}
                  title="Favorite competition"
                >
                  <Star className={`w-4 h-4 ${isFavLeague ? 'fill-[#FFD700]' : ''}`} />
                </button>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                {activeLeague.country} • Season {activeLeague.currentSeason} • {activeLeague.teamsCount} Clubs
              </p>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          <div className="flex items-center gap-3 sm:gap-6 border-t sm:border-t-0 sm:border-l border-[#27322B] pt-3 sm:pt-0 sm:pl-6">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">
                Avg Goals
              </span>
              <span className="text-base sm:text-lg font-black text-[#39F27A]">
                {activeLeague.avgGoalsPerMatch} / match
              </span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">
                Top Scorer
              </span>
              <span className="text-xs font-semibold text-white truncate max-w-[150px] block">
                {activeLeague.topScorer || 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Standings Table Container */}
      <div className="bg-[#151C18] rounded-3xl border border-[#27322B] overflow-hidden shadow-2xl">
        {/* Table Tabs */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#27322B] bg-[#101512]">
          <div className="flex items-center gap-2 text-xs font-bold">
            {['overall', 'home', 'away', 'form'].map((tab) => (
              <button
                key={tab}
                onClick={() => setTableTab(tab)}
                className={`px-3 py-1.5 rounded-lg capitalize transition ${
                  tableTab === tab
                    ? 'bg-[#39F27A] text-black shadow-neon'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab === 'overall' ? 'Full Table' : tab}
              </button>
            ))}
          </div>

          <span className="text-xs text-neutral-400 hidden sm:inline">
            Click any row to open club profile & squad
          </span>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 bg-[#101512]/50 border-b border-[#27322B]">
              <tr>
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">Club</th>
                <th className="py-3 px-3 text-center">P</th>
                <th className="py-3 px-3 text-center">W</th>
                <th className="py-3 px-3 text-center">D</th>
                <th className="py-3 px-3 text-center">L</th>
                <th className="py-3 px-3 text-center hidden md:table-cell">GF</th>
                <th className="py-3 px-3 text-center hidden md:table-cell">GA</th>
                <th className="py-3 px-3 text-center">GD</th>
                <th className="py-3 px-4 text-center font-extrabold text-white">PTS</th>
                <th className="py-3 px-4 text-center hidden sm:table-cell">Form</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27322B]/60">
              {standings.map((team, idx) => {
                const isUCL = team.rank <= 4;
                const isRelegation = team.rank >= (activeLeague.standings.length - 2);

                return (
                  <tr
                    key={team.teamId || idx}
                    onClick={() => handleRowClick(team.teamId)}
                    className="hover:bg-[#1B241F] transition cursor-pointer group"
                  >
                    {/* Rank with qualification indicator border */}
                    <td className="py-3.5 px-4 text-center font-bold relative">
                      {isUCL && (
                        <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#39F27A] rounded-r" />
                      )}
                      {isRelegation && (
                        <div className="absolute left-0 top-1 bottom-1 w-1 bg-rose-500 rounded-r" />
                      )}
                      <span className={isUCL ? 'text-[#39F27A]' : 'text-neutral-400'}>
                        {team.rank}
                      </span>
                    </td>

                    {/* Team Name */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white group-hover:text-[#39F27A] transition">
                          {team.team}
                        </span>
                      </div>
                    </td>

                    <td className="py-3.5 px-3 text-center font-semibold text-neutral-300">
                      {team.played}
                    </td>
                    <td className="py-3.5 px-3 text-center text-neutral-300">{team.won}</td>
                    <td className="py-3.5 px-3 text-center text-neutral-300">{team.drawn}</td>
                    <td className="py-3.5 px-3 text-center text-neutral-300">{team.lost}</td>
                    <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell font-mono">
                      {team.gf}
                    </td>
                    <td className="py-3.5 px-3 text-center text-neutral-400 hidden md:table-cell font-mono">
                      {team.ga}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-neutral-200">
                      {team.gd > 0 ? `+${team.gd}` : team.gd}
                    </td>

                    {/* Points */}
                    <td className="py-3.5 px-4 text-center font-black text-white text-sm sm:text-base font-['Outfit']">
                      {team.points}
                    </td>

                    {/* Form */}
                    <td className="py-3.5 px-4 text-center hidden sm:table-cell">
                      <div className="flex justify-center">
                        <FormBadgeList form={team.form} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="p-4 bg-[#101512] border-t border-[#27322B] flex flex-wrap items-center gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39F27A]" />
            <span>Champions League / Top Seed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Relegation Zone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
