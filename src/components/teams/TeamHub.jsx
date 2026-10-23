import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import { Shield, Star, Users, MapPin, Trophy } from 'lucide-react';

export function TeamHub() {
  const { teams, setSelectedTeam, favoriteTeamIds, toggleFavoriteTeam } = useMatches();
  const [filterText, setFilterText] = useState('');

  const filteredTeams = teams.filter(
    (t) =>
      t.name.toLowerCase().includes(filterText.toLowerCase()) ||
      t.country.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#27322B]">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            Featured Clubs & Squads
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Browse team rosters, managers, stadiums, and trophy records
          </p>
        </div>

        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter clubs by name or country..."
          className="px-4 py-2 rounded-xl bg-[#151C18] border border-[#27322B] text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#39F27A]"
        />
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeams.map((team) => {
          const isFav = favoriteTeamIds.includes(team.id);

          return (
            <div
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className="glass-card rounded-2xl p-5 cursor-pointer relative group border border-[#27322B] hover:border-[#39F27A]/50 transition overflow-hidden"
            >
              {/* Star favorite toggle */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavoriteTeam(team.id);
                }}
                className={`absolute top-4 right-4 p-1.5 rounded-lg border transition z-10 ${
                  isFav
                    ? 'bg-[#FFD700]/15 text-[#FFD700] border-[#FFD700]/40'
                    : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white'
                }`}
                title={isFav ? 'Favorited' : 'Favorite club'}
              >
                <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-[#FFD700]' : ''}`} />
              </button>

              {/* Team Identity */}
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition"
                />
                <div className="min-w-0 pr-6">
                  <h3 className="text-base font-bold text-white group-hover:text-[#39F27A] transition truncate">
                    {team.name}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {team.country} • Founded {team.founded}
                  </p>
                </div>
              </div>

              {/* Stadium & Manager details */}
              <div className="space-y-1.5 text-xs text-neutral-300 py-3 border-t border-[#27322B]/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="truncate">{team.stadium} ({team.capacity})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="truncate">Manager: {team.manager}</span>
                </div>
              </div>

              {/* Card Footer: Squad count & Action */}
              <div className="mt-3 pt-3 border-t border-[#27322B] flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  {team.squad?.length || 0} Squad Members
                </span>
                <span className="font-bold text-[#39F27A] group-hover:underline">
                  View Squad →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
