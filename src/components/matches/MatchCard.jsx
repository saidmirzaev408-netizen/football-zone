import React from 'react';
import { useMatches } from '../../context/MatchContext';
import { Pin, Star, ChevronRight, Zap, TrendingUp } from 'lucide-react';
import { MatchStatusBadge } from '../common/Badge';
import { calculateVotePercentages } from '../../utils/helpers';

export function MatchCard({ match }) {
  const {
    pinnedMatchIds,
    togglePinMatch,
    setSelectedMatch,
    setSelectedTeam,
    teams,
    userVotes,
    voteOnMatch
  } = useMatches();

  const isPinned = pinnedMatchIds.includes(match.id);
  const isLive = match.status === 'LIVE';
  const isFT = match.status === 'FT';
  const userVote = userVotes[match.id];
  const votePcts = calculateVotePercentages(match.votes);

  // Extract recent goal events for quick preview
  const goalEvents = (match.events || []).filter((e) => e.type === 'goal').slice(0, 3);

  const handleTeamClick = (e, teamId) => {
    e.stopPropagation();
    const found = teams.find((t) => t.id === teamId);
    if (found) setSelectedTeam(found);
  };

  return (
    <div
      onClick={() => setSelectedMatch(match)}
      className={`glass-card rounded-2xl p-4 sm:p-5 cursor-pointer relative overflow-hidden group ${
        isLive ? 'border-[#39F27A]/30 hover:border-[#39F27A]/60' : 'hover:border-white/20'
      }`}
    >
      {/* Live ambient glow */}
      {isLive && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#39F27A]/5 rounded-full blur-2xl pointer-events-none" />
      )}

      {/* Card Header: League & Status */}
      <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-[#27322B]">
        <div className="flex items-center gap-2 truncate">
          <span className="text-xs font-bold text-neutral-300 truncate">
            {match.leagueName}
          </span>
          {match.leagueRound && (
            <span className="text-[11px] text-neutral-400 hidden sm:inline">
              • {match.leagueRound}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <MatchStatusBadge status={match.status} minute={match.minute} />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePinMatch(match.id);
            }}
            className={`p-1.5 rounded-lg border transition ${
              isPinned
                ? 'bg-[#39F27A]/15 text-[#39F27A] border-[#39F27A]/30'
                : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white'
            }`}
            title={isPinned ? 'Unpin match' : 'Pin to top bar'}
          >
            <Pin className={`w-3.5 h-3.5 ${isPinned ? 'fill-[#39F27A]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Scoreboard Section */}
      <div className="grid grid-cols-12 items-center gap-3 my-2">
        {/* Home Team */}
        <div
          onClick={(e) => handleTeamClick(e, match.homeTeam.id)}
          className="col-span-5 flex items-center gap-3 group/team cursor-pointer"
        >
          <img
            src={match.homeTeam.logo}
            alt={match.homeTeam.name}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/10 group-hover/team:scale-105 transition"
          />
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-white group-hover/team:text-[#39F27A] transition truncate">
              {match.homeTeam.name}
            </h4>
            <p className="text-[11px] text-neutral-400 truncate hidden sm:block">Home</p>
          </div>
        </div>

        {/* Score / Status Display */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          {match.status === 'SCHEDULED' ? (
            <div className="text-center">
              <span className="text-xs sm:text-sm font-bold text-neutral-300 block">VS</span>
              <span className="text-[11px] text-neutral-400 whitespace-nowrap block mt-0.5">
                {match.startTime}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white px-2.5 py-1 rounded-xl bg-black/50 border border-white/10 font-['Outfit']">
                {match.homeTeam.score}
              </span>
              <span className="text-neutral-400 font-bold">-</span>
              <span className="text-xl sm:text-2xl font-black text-white px-2.5 py-1 rounded-xl bg-black/50 border border-white/10 font-['Outfit']">
                {match.awayTeam.score}
              </span>
            </div>
          )}

          {isLive && (
            <span className="text-[10px] font-bold text-[#39F27A] mt-1 tracking-wider uppercase">
              {match.minute}' MIN
            </span>
          )}
        </div>

        {/* Away Team */}
        <div
          onClick={(e) => handleTeamClick(e, match.awayTeam.id)}
          className="col-span-5 flex items-center justify-end gap-3 group/team cursor-pointer text-right"
        >
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-white group-hover/team:text-[#39F27A] transition truncate">
              {match.awayTeam.name}
            </h4>
            <p className="text-[11px] text-neutral-400 truncate hidden sm:block">Away</p>
          </div>
          <img
            src={match.awayTeam.logo}
            alt={match.awayTeam.name}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/10 group-hover/team:scale-105 transition"
          />
        </div>
      </div>

      {/* Goal Highlights Strip */}
      {goalEvents.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-[#27322B]/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
          {goalEvents.map((ev, i) => (
            <span key={i} className="inline-flex items-center gap-1">
              <span>⚽</span>
              <strong className="text-neutral-200">{ev.player}</strong>
              <span className="text-[11px] text-[#39F27A] font-semibold">{ev.minute}'</span>
            </span>
          ))}
        </div>
      )}

      {/* Card Footer: Odds & Quick Fan Vote */}
      <div className="mt-3.5 pt-2.5 border-t border-[#27322B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        {/* Odds pills */}
        {match.odds && (
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-neutral-400 font-medium">Odds:</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-neutral-300 font-mono">
              1: {match.odds.home}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-neutral-300 font-mono">
              X: {match.odds.draw}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-neutral-300 font-mono">
              2: {match.odds.away}
            </span>
          </div>
        )}

        {/* Prediction Vote Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-[11px] select-none"
        >
          <span className="text-neutral-400 hidden lg:inline">Poll:</span>
          <button
            onClick={() => voteOnMatch(match.id, 'home')}
            className={`px-2 py-0.5 rounded font-semibold transition ${
              userVote === 'home'
                ? 'bg-[#39F27A] text-black font-bold'
                : 'bg-white/5 hover:bg-white/10 text-neutral-300'
            }`}
            title="Vote Home Win"
          >
            {match.homeTeam.code || '1'} ({votePcts.home}%)
          </button>
          <button
            onClick={() => voteOnMatch(match.id, 'draw')}
            className={`px-2 py-0.5 rounded font-semibold transition ${
              userVote === 'draw'
                ? 'bg-amber-400 text-black font-bold'
                : 'bg-white/5 hover:bg-white/10 text-neutral-300'
            }`}
            title="Vote Draw"
          >
            X ({votePcts.draw}%)
          </button>
          <button
            onClick={() => voteOnMatch(match.id, 'away')}
            className={`px-2 py-0.5 rounded font-semibold transition ${
              userVote === 'away'
                ? 'bg-[#00E5FF] text-black font-bold'
                : 'bg-white/5 hover:bg-white/10 text-neutral-300'
            }`}
            title="Vote Away Win"
          >
            {match.awayTeam.code || '2'} ({votePcts.away}%)
          </button>
        </div>
      </div>
    </div>
  );
}
