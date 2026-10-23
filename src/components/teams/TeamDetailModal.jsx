import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import { X, Star, Trophy, Users, Shield, MapPin, Calendar, Activity } from 'lucide-react';
import { FormBadgeList } from '../common/FormBadge';

export function TeamDetailModal() {
  const { selectedTeam, setSelectedTeam, favoriteTeamIds, toggleFavoriteTeam } = useMatches();
  const [activeTab, setActiveTab] = useState('squad'); // 'squad', 'stats', 'trophies'

  if (!selectedTeam) return null;

  const isFav = favoriteTeamIds.includes(selectedTeam.id);

  // Group squad by position
  const squadByPosition = (selectedTeam.squad || []).reduce((acc, player) => {
    const pos = player.position || 'Other';
    if (!acc[pos]) acc[pos] = [];
    acc[pos].push(player);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-3xl bg-[#101512] border border-[#27322B] rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Team Header */}
        <div className="relative h-44 sm:h-52 bg-gradient-to-r from-neutral-900 to-[#151C18] overflow-hidden">
          {selectedTeam.banner && (
            <img
              src={selectedTeam.banner}
              alt={selectedTeam.name}
              className="w-full h-full object-cover opacity-35"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101512] via-transparent to-black/40" />

          {/* Close & Star buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => toggleFavoriteTeam(selectedTeam.id)}
              className={`p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 transition ${
                isFav ? 'text-[#FFD700]' : 'text-neutral-400 hover:text-white'
              }`}
              title={isFav ? 'Favorited' : 'Favorite team'}
            >
              <Star className={`w-4 h-4 ${isFav ? 'fill-[#FFD700]' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedTeam(null)}
              className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Team Crest & Name info */}
          <div className="absolute bottom-4 left-6 flex items-end gap-4 z-10">
            <img
              src={selectedTeam.logo}
              alt={selectedTeam.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white/20 shadow-2xl bg-[#151C18]"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                {selectedTeam.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300 mt-1">
                <span>{selectedTeam.stadium}</span>
                <span>•</span>
                <span>Manager: {selectedTeam.manager}</span>
                <span>•</span>
                <span>Founded {selectedTeam.founded}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 bg-[#151C18] border-b border-[#27322B]">
          {[
            { id: 'squad', label: 'Squad & Players', icon: Users },
            { id: 'stats', label: 'Season Stats', icon: Activity },
            { id: 'trophies', label: 'Trophies & History', icon: Trophy }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-3 text-xs font-bold border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-[#39F27A] text-[#39F27A]'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">
          {/* Squad Tab */}
          {activeTab === 'squad' && (
            <div className="space-y-6">
              {Object.keys(squadByPosition).length === 0 ? (
                <p className="text-xs text-neutral-400">No squad data available.</p>
              ) : (
                Object.entries(squadByPosition).map(([pos, players]) => (
                  <div key={pos} className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#39F27A]">
                      {pos}s ({players.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {players.map((p) => (
                        <div
                          key={p.id || p.number}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#151C18] border border-[#27322B] hover:border-white/20 transition"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-black/40 flex items-center justify-center font-bold text-xs text-neutral-300 font-mono">
                              {p.number}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">{p.name}</p>
                              <p className="text-[11px] text-neutral-400">
                                {p.nationality} • {p.age} yrs
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/5 text-neutral-300">
                            {p.position}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Season Stats Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              {selectedTeam.stats ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#151C18] border border-[#27322B] text-center">
                      <span className="text-[11px] text-neutral-400">Matches Played</span>
                      <p className="text-xl font-black text-white mt-1">
                        {selectedTeam.stats.matches}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#151C18] border border-[#27322B] text-center">
                      <span className="text-[11px] text-neutral-400">Wins</span>
                      <p className="text-xl font-black text-emerald-400 mt-1">
                        {selectedTeam.stats.wins}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#151C18] border border-[#27322B] text-center">
                      <span className="text-[11px] text-neutral-400">Goals For</span>
                      <p className="text-xl font-black text-[#39F27A] mt-1">
                        {selectedTeam.stats.goalsFor}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#151C18] border border-[#27322B] text-center">
                      <span className="text-[11px] text-neutral-400">Clean Sheets</span>
                      <p className="text-xl font-black text-[#00E5FF] mt-1">
                        {selectedTeam.stats.cleanSheets}
                      </p>
                    </div>
                  </div>

                  {/* Top Club Scorers */}
                  {selectedTeam.topScorers && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Top Club Scorers
                      </h4>
                      <div className="space-y-1.5">
                        {selectedTeam.topScorers.map((scorer, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#151C18] border border-[#27322B]"
                          >
                            <span className="text-sm font-semibold text-white">
                              {scorer.name}
                            </span>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="font-bold text-[#39F27A]">
                                {scorer.goals} Goals
                              </span>
                              <span className="text-neutral-400">
                                {scorer.assists} Assists
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-xs text-neutral-400">No season stats recorded.</p>
              )}
            </div>
          )}

          {/* Trophies Tab */}
          {activeTab === 'trophies' && (
            <div className="space-y-3">
              {(!selectedTeam.trophies || selectedTeam.trophies.length === 0) ? (
                <p className="text-xs text-neutral-400">No trophy cabinet information.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTeam.trophies.map((tr, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-2xl bg-[#151C18] border border-[#27322B]"
                    >
                      <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-[#FFD700]" />
                        <span className="text-sm font-bold text-white">{tr.name}</span>
                      </div>
                      <span className="text-base font-black text-[#39F27A] px-2.5 py-1 rounded-xl bg-black/50 border border-[#27322B]">
                        {tr.count}x
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
