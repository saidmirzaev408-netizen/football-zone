import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import { Search, Volume2, VolumeX, RotateCcw, Star, Radio, Zap } from 'lucide-react';
import { SearchModal } from '../common/SearchModal';

export function Navbar({ activeTab, setActiveTab }) {
  const {
    matches,
    soundEnabled,
    toggleSound,
    resetAllMatches,
    favoriteTeamIds,
    favoriteLeagueIds,
    goalAlert,
    setSelectedMatch
  } = useMatches();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const liveMatches = matches.filter((m) => m.status === 'LIVE');
  const favCount = favoriteTeamIds.length + favoriteLeagueIds.length;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#080B0A]/90 backdrop-blur-xl border-b border-[#27322B]">
        {/* Goal Flash Alert (when simulated or live goal happens) */}
        {goalAlert && (
          <div
            onClick={() => {
              const m = matches.find((match) => match.id === goalAlert.matchId);
              if (m) setSelectedMatch(m);
            }}
            className="w-full bg-gradient-to-r from-[#39F27A] via-[#00E5FF] to-[#39F27A] text-black py-2 px-4 text-center font-bold text-sm tracking-wide shadow-neon cursor-pointer animate-bounce flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>
              GOAL ALERT! {goalAlert.teamName} scores! Current score: {goalAlert.score}
            </span>
            <span className="text-xs bg-black text-[#39F27A] px-2 py-0.5 rounded font-black ml-2">
              CLICK TO VIEW
            </span>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={() => setActiveTab('matches')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#39F27A] to-[#15803d] flex items-center justify-center shadow-neon group-hover:scale-105 transition duration-300">
              <svg
                className="w-6 h-6 text-black fill-current"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="white" />
                <path d="M12 7l3 3-1.5 4h-3L9 10z" fill="black" />
                <path d="M12 7V2M15 10l5-2M13.5 14l3 5M10.5 14l-3 5M9 10l-5-2" stroke="black" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white font-['Outfit']">
                  FOOTBALL<span className="text-[#39F27A]">ZONE</span>
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-[#39F27A]/20 text-[#39F27A] border border-[#39F27A]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39F27A] animate-pulse" />
                  LIVE
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                Scores • Standings • Tactical Formations • Transfers
              </p>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#151C18] border border-[#27322B] hover:border-[#39F27A]/50 text-neutral-400 text-sm transition group"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-neutral-400 group-hover:text-[#39F27A] transition" />
                <span>Search teams, leagues, players...</span>
              </div>
              <kbd className="px-2 py-0.5 text-[11px] font-mono bg-white/5 border border-white/10 rounded text-neutral-400">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Count Pill */}
            <div
              onClick={() => setActiveTab('matches')}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151C18] border border-[#27322B] cursor-pointer hover:border-[#39F27A]/40 transition"
              title="View live matches"
            >
              <Radio className="w-4 h-4 text-[#39F27A] animate-pulse-live" />
              <span className="text-xs font-semibold text-neutral-300">
                {liveMatches.length} Live Games
              </span>
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 md:hidden text-neutral-400 hover:text-white bg-[#151C18] border border-[#27322B] rounded-xl transition"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition flex items-center gap-1.5 text-xs font-medium ${
                soundEnabled
                  ? 'bg-[#151C18] text-[#39F27A] border-[#39F27A]/30 hover:border-[#39F27A]'
                  : 'bg-[#151C18] text-neutral-400 border-[#27322B] hover:text-white'
              }`}
              title={soundEnabled ? 'Goal and whistle sound enabled' : 'Sound muted'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#39F27A]" />
                  <span className="hidden sm:inline">Audio</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">Muted</span>
                </>
              )}
            </button>

            {/* Reset Simulation Data */}
            <button
              onClick={resetAllMatches}
              className="p-2 text-neutral-400 hover:text-white bg-[#151C18] border border-[#27322B] hover:border-white/20 rounded-xl transition"
              title="Reset scores and simulation data"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Starred / Favorites counter */}
            <div
              onClick={() => setActiveTab('teams')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151C18] border border-[#27322B] hover:border-[#FFD700]/40 cursor-pointer transition text-xs font-semibold text-neutral-300"
              title="Favorite teams & leagues"
            >
              <Star className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
              <span>{favCount}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
