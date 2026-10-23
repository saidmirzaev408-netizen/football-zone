import React from 'react';
import { useMatches } from '../../context/MatchContext';
import {
  Calendar,
  Trophy,
  Shield,
  Award,
  ArrowLeftRight,
  TrendingUp,
  Newspaper,
  Star,
  CheckCircle2
} from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab }) {
  const {
    matches,
    leagues,
    selectedLeagueId,
    setSelectedLeagueId,
    favoriteLeagueIds,
    toggleFavoriteLeague
  } = useMatches();

  const liveCount = matches.filter((m) => m.status === 'LIVE').length;

  const navItems = [
    { id: 'matches', label: 'Match Center', icon: Calendar, badge: liveCount > 0 ? `${liveCount} Live` : null },
    { id: 'standings', label: 'Standings & Tables', icon: Trophy },
    { id: 'teams', label: 'Clubs & Squads', icon: Shield },
    { id: 'stats', label: 'Top Scorers & Stats', icon: Award },
    { id: 'transfers', label: 'Transfer Market', icon: ArrowLeftRight, isHot: true },
    { id: 'predictions', label: 'Fan Predictions', icon: TrendingUp },
    { id: 'news', label: 'News & Analysis', icon: Newspaper }
  ];

  return (
    <aside className="w-64 bg-[#101512] border-r border-[#27322B] flex flex-col shrink-0 min-h-[calc(100vh-4rem)] p-4 select-none">
      {/* Navigation Links */}
      <div className="space-y-1 mb-6">
        <p className="px-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
          Menu
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition group ${
                isActive
                  ? 'bg-[#151C18] text-[#39F27A] border border-[#39F27A]/30 shadow-neon'
                  : 'text-neutral-300 hover:text-white hover:bg-[#151C18] border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition ${
                    isActive ? 'text-[#39F27A]' : 'text-neutral-400 group-hover:text-white'
                  }`}
                />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#39F27A]/20 text-[#39F27A] border border-[#39F27A]/40 animate-pulse">
                  {item.badge}
                </span>
              )}

              {item.isHot && (
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  HOT
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Featured Competitions / Leagues */}
      <div className="flex-1">
        <div className="flex items-center justify-between px-3 mb-2">
          <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
            Top Leagues
          </p>
          {selectedLeagueId !== 'all' && (
            <button
              onClick={() => setSelectedLeagueId('all')}
              className="text-[11px] text-[#39F27A] hover:underline"
            >
              Show All
            </button>
          )}
        </div>

        <div className="space-y-1">
          <button
            onClick={() => setSelectedLeagueId('all')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
              selectedLeagueId === 'all'
                ? 'bg-[#151C18] text-white border border-[#27322B]'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#151C18]/60 border border-transparent'
            }`}
          >
            <span>All Competitions</span>
            <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
              {matches.length}
            </span>
          </button>

          {leagues.map((league) => {
            const isSelected = selectedLeagueId === league.id;
            const isFav = favoriteLeagueIds.includes(league.id);

            return (
              <div
                key={league.id}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                  isSelected
                    ? 'bg-[#151C18] text-[#39F27A] border border-[#39F27A]/30'
                    : 'text-neutral-300 hover:text-white hover:bg-[#151C18] border border-transparent'
                }`}
                onClick={() => {
                  setSelectedLeagueId(league.id);
                  if (activeTab !== 'matches' && activeTab !== 'standings') {
                    setActiveTab('standings');
                  }
                }}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <img
                    src={league.logo}
                    alt={league.name}
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                  />
                  <span className="truncate">{league.shortName || league.name}</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavoriteLeague(league.id);
                    }}
                    className={`p-1 rounded hover:scale-110 transition ${
                      isFav ? 'text-[#FFD700]' : 'text-neutral-600 hover:text-neutral-400 opacity-0 group-hover:opacity-100'
                    }`}
                    title={isFav ? 'Favorited' : 'Add to favorites'}
                  >
                    <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-[#FFD700]' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Footer info */}
      <div className="pt-4 border-t border-[#27322B] text-[11px] text-neutral-400">
        <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#39F27A]" />
          <span>Real-time Sync Active</span>
        </div>
        <p className="text-[10px] text-neutral-400">Data mode: Demo Simulation</p>
      </div>
    </aside>
  );
}
