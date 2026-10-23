import React, { useState } from 'react';
import { useMatches } from '../../context/MatchContext';
import {
  X,
  Pin,
  Clock,
  Radio,
  Share2,
  Play,
  RotateCcw,
  Zap,
  MapPin,
  User,
  Shield,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { MatchStatusBadge } from '../common/Badge';
import { TacticalPitch } from './TacticalPitch';
import { MatchStats } from './MatchStats';
import { calculateVotePercentages } from '../../utils/helpers';

export function MatchDetailModal() {
  const {
    selectedMatch,
    setSelectedMatch,
    pinnedMatchIds,
    togglePinMatch,
    triggerGoal,
    triggerCard,
    advanceMinute,
    userVotes,
    voteOnMatch
  } = useMatches();

  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline', 'lineups', 'stats', 'commentary', 'h2h', 'prediction'
  const [copiedLink, setCopiedLink] = useState(false);

  if (!selectedMatch) return null;

  const isPinned = pinnedMatchIds.includes(selectedMatch.id);
  const isLive = selectedMatch.status === 'LIVE';
  const userVote = userVotes[selectedMatch.id];
  const votePcts = calculateVotePercentages(selectedMatch.votes);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-[#101512] border border-[#27322B] rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#151C18] border-b border-[#27322B]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-300">
              {selectedMatch.leagueName}
            </span>
            {selectedMatch.leagueRound && (
              <span className="text-xs text-neutral-400">
                • {selectedMatch.leagueRound}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-white/5 border border-white/5 text-xs flex items-center gap-1 transition"
              title="Share match link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => togglePinMatch(selectedMatch.id)}
              className={`p-1.5 rounded-lg border transition ${
                isPinned
                  ? 'bg-[#39F27A]/15 text-[#39F27A] border-[#39F27A]/30'
                  : 'bg-white/5 text-neutral-400 border-white/5 hover:text-white'
              }`}
              title={isPinned ? 'Unpin match' : 'Pin to top bar'}
            >
              <Pin className={`w-3.5 h-3.5 ${isPinned ? 'fill-[#39F27A]' : ''}`} />
            </button>

            <button
              onClick={() => setSelectedMatch(null)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Scoreboard Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#151C18] to-[#101512] border-b border-[#27322B] overflow-hidden">
          {/* Neon radial glow in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#39F27A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Status & Minute Pill */}
            <div className="mb-4">
              <MatchStatusBadge
                status={selectedMatch.status}
                minute={selectedMatch.minute}
              />
            </div>

            {/* Teams Duel */}
            <div className="w-full grid grid-cols-12 items-center gap-4">
              {/* Home Team */}
              <div className="col-span-5 flex flex-col items-center sm:items-end text-center sm:text-right">
                <img
                  src={selectedMatch.homeTeam.logo}
                  alt={selectedMatch.homeTeam.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/10 shadow-xl mb-2"
                />
                <h3 className="text-base sm:text-xl font-black text-white font-['Outfit']">
                  {selectedMatch.homeTeam.name}
                </h3>
                <span className="text-xs text-neutral-400">Home</span>
              </div>

              {/* Score Display */}
              <div className="col-span-2 flex flex-col items-center justify-center">
                {selectedMatch.status === 'SCHEDULED' ? (
                  <div className="text-center">
                    <span className="text-xl sm:text-2xl font-black text-white">VS</span>
                    <span className="text-xs text-neutral-400 block mt-1">
                      {selectedMatch.startTime}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
                      {selectedMatch.homeTeam.score}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-neutral-400">-</span>
                    <span className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
                      {selectedMatch.awayTeam.score}
                    </span>
                  </div>
                )}
                {isLive && (
                  <span className="text-xs font-bold text-[#39F27A] mt-2 tracking-widest uppercase">
                    {selectedMatch.minute}' MIN
                  </span>
                )}
              </div>

              {/* Away Team */}
              <div className="col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  src={selectedMatch.awayTeam.logo}
                  alt={selectedMatch.awayTeam.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/10 shadow-xl mb-2"
                />
                <h3 className="text-base sm:text-xl font-black text-white font-['Outfit']">
                  {selectedMatch.awayTeam.name}
                </h3>
                <span className="text-xs text-neutral-400">Away</span>
              </div>
            </div>

            {/* Stadium & Referee Info */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              {selectedMatch.venue && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{selectedMatch.venue}</span>
                </div>
              )}
              {selectedMatch.referee && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Ref: {selectedMatch.referee}</span>
                </div>
              )}
            </div>

            {/* Live Match Simulator Controls (Interactive demo experience!) */}
            {isLive && (
              <div className="mt-5 pt-4 border-t border-[#27322B] w-full flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-bold text-[#39F27A] uppercase tracking-wider mr-2 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-[#39F27A]" /> Simulator:
                </span>
                <button
                  onClick={() => triggerGoal(selectedMatch.id, 'home')}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#39F27A]/15 text-[#39F27A] border border-[#39F27A]/40 hover:bg-[#39F27A] hover:text-black transition"
                >
                  ⚽ Goal: {selectedMatch.homeTeam.code || 'Home'}
                </button>
                <button
                  onClick={() => triggerGoal(selectedMatch.id, 'away')}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/40 hover:bg-[#00E5FF] hover:text-black transition"
                >
                  ⚽ Goal: {selectedMatch.awayTeam.code || 'Away'}
                </button>
                <button
                  onClick={() => advanceMinute(selectedMatch.id)}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1"
                >
                  <Clock className="w-3 h-3" /> +1 Min
                </button>
                <button
                  onClick={() => triggerCard(selectedMatch.id, 'home', 'yellow')}
                  className="px-2 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition"
                >
                  🟨 Card
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 bg-[#151C18] border-b border-[#27322B] overflow-x-auto no-scrollbar">
          {[
            { id: 'timeline', label: 'Timeline' },
            { id: 'lineups', label: 'Tactical Pitch & Lineups' },
            { id: 'stats', label: 'Match Stats' },
            { id: 'commentary', label: 'Live Commentary' },
            { id: 'h2h', label: 'H2H History' },
            { id: 'prediction', label: 'Fan Poll' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-[#39F27A] text-[#39F27A]'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6 max-h-[55vh] overflow-y-auto">
          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              {(!selectedMatch.events || selectedMatch.events.length === 0) ? (
                <div className="py-12 text-center text-neutral-400 text-sm">
                  No match events recorded yet. Kickoff is scheduled for {selectedMatch.startTime}.
                </div>
              ) : (
                <div className="relative pl-6 sm:pl-8 border-l border-[#27322B] space-y-5">
                  {selectedMatch.events.map((ev) => {
                    const isHome = ev.team === 'home';
                    const isAway = ev.team === 'away';
                    const isGoal = ev.type === 'goal';
                    const isYellow = ev.type === 'yellow_card';
                    const isRed = ev.type === 'red_card';
                    const isSub = ev.type === 'sub';

                    return (
                      <div key={ev.id} className="relative group">
                        {/* Dot on the timeline line */}
                        <div
                          className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-[#101512] flex items-center justify-center ${
                            isGoal
                              ? 'bg-[#39F27A] shadow-neon'
                              : isYellow
                              ? 'bg-amber-400'
                              : isRed
                              ? 'bg-rose-500'
                              : 'bg-white/30'
                          }`}
                        />

                        {/* Event Card */}
                        <div className="p-3.5 rounded-xl bg-[#151C18] border border-[#27322B] hover:border-white/20 transition">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-black/40 text-[#39F27A] font-mono">
                                {ev.minute}'
                              </span>
                              <span className="text-sm font-bold text-white">
                                {isGoal && '⚽ GOAL — '}
                                {isYellow && '🟨 YELLOW CARD — '}
                                {isRed && '🟥 RED CARD — '}
                                {isSub && '🔄 SUBSTITUTION — '}
                                {ev.player || (isSub ? `${ev.playerIn} (IN)` : '')}
                              </span>
                            </div>

                            <span className="text-[11px] font-semibold text-neutral-400">
                              {isHome ? selectedMatch.homeTeam.shortName : isAway ? selectedMatch.awayTeam.shortName : ''}
                            </span>
                          </div>

                          {ev.assist && (
                            <p className="text-xs text-neutral-300 mt-1 pl-1">
                              Assist: <span className="text-white font-medium">{ev.assist}</span>
                            </p>
                          )}

                          {ev.detail && (
                            <p className="text-xs text-neutral-400 mt-1 pl-1 italic">
                              {ev.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Lineups / Tactical Pitch Tab */}
          {activeTab === 'lineups' && (
            <TacticalPitch
              lineups={selectedMatch.lineups}
              homeTeam={selectedMatch.homeTeam}
              awayTeam={selectedMatch.awayTeam}
            />
          )}

          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <MatchStats
              stats={selectedMatch.stats}
              homeTeam={selectedMatch.homeTeam}
              awayTeam={selectedMatch.awayTeam}
            />
          )}

          {/* Live Commentary Tab */}
          {activeTab === 'commentary' && (
            <div className="space-y-3">
              {(!selectedMatch.commentary || selectedMatch.commentary.length === 0) ? (
                <div className="py-12 text-center text-neutral-400 text-sm">
                  Live commentary begins once the match gets underway.
                </div>
              ) : (
                selectedMatch.commentary.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#151C18] border border-[#27322B]"
                  >
                    <span className="px-2 py-1 rounded bg-[#39F27A]/15 text-[#39F27A] font-mono font-bold text-xs shrink-0">
                      {c.minute}'
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Head to Head (H2H) Tab */}
          {activeTab === 'h2h' && (
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Recent Meetings
              </h5>
              {(!selectedMatch.h2h || selectedMatch.h2h.length === 0) ? (
                <p className="text-xs text-neutral-400">No previous head-to-head records.</p>
              ) : (
                <div className="space-y-2">
                  {selectedMatch.h2h.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#151C18] border border-[#27322B] text-xs"
                    >
                      <span className="text-neutral-400 font-mono">{h.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{h.home}</span>
                        <span className="px-2 py-0.5 rounded bg-black font-black text-[#39F27A]">
                          {h.score}
                        </span>
                        <span className="font-semibold text-white">{h.away}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Fan Prediction Poll Tab */}
          {activeTab === 'prediction' && (
            <div className="space-y-6 bg-[#151C18] p-6 rounded-2xl border border-[#27322B]">
              <div className="text-center">
                <h4 className="text-base font-bold text-white">Who will win this match?</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Cast your fan prediction and see how thousands of football fans voted worldwide!
                </p>
              </div>

              {/* Vote Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => voteOnMatch(selectedMatch.id, 'home')}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center transition ${
                    userVote === 'home'
                      ? 'bg-[#39F27A]/20 border-[#39F27A] shadow-neon text-white'
                      : 'bg-[#101512] border-[#27322B] hover:border-white/30 text-neutral-300'
                  }`}
                >
                  <span className="text-xs text-neutral-400">Home Win</span>
                  <span className="text-sm font-bold mt-1">{selectedMatch.homeTeam.name}</span>
                  <span className="text-xl font-black text-[#39F27A] mt-2 font-['Outfit']">
                    {votePcts.home}%
                  </span>
                  {userVote === 'home' && (
                    <span className="mt-1 text-[10px] font-bold text-[#39F27A]">✓ Your Vote</span>
                  )}
                </button>

                <button
                  onClick={() => voteOnMatch(selectedMatch.id, 'draw')}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center transition ${
                    userVote === 'draw'
                      ? 'bg-amber-400/20 border-amber-400 text-white'
                      : 'bg-[#101512] border-[#27322B] hover:border-white/30 text-neutral-300'
                  }`}
                >
                  <span className="text-xs text-neutral-400">Draw</span>
                  <span className="text-sm font-bold mt-1">Tie Game</span>
                  <span className="text-xl font-black text-amber-400 mt-2 font-['Outfit']">
                    {votePcts.draw}%
                  </span>
                  {userVote === 'draw' && (
                    <span className="mt-1 text-[10px] font-bold text-amber-400">✓ Your Vote</span>
                  )}
                </button>

                <button
                  onClick={() => voteOnMatch(selectedMatch.id, 'away')}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center transition ${
                    userVote === 'away'
                      ? 'bg-[#00E5FF]/20 border-[#00E5FF] shadow-neon-cyan text-white'
                      : 'bg-[#101512] border-[#27322B] hover:border-white/30 text-neutral-300'
                  }`}
                >
                  <span className="text-xs text-neutral-400">Away Win</span>
                  <span className="text-sm font-bold mt-1">{selectedMatch.awayTeam.name}</span>
                  <span className="text-xl font-black text-[#00E5FF] mt-2 font-['Outfit']">
                    {votePcts.away}%
                  </span>
                  {userVote === 'away' && (
                    <span className="mt-1 text-[10px] font-bold text-[#00E5FF]">✓ Your Vote</span>
                  )}
                </button>
              </div>

              {/* Aggregated Progress Bar */}
              <div className="space-y-1.5">
                <div className="h-3 w-full bg-[#101512] rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${votePcts.home}%` }}
                    className="bg-[#39F27A] h-full"
                    title={`Home: ${votePcts.home}%`}
                  />
                  <div
                    style={{ width: `${votePcts.draw}%` }}
                    className="bg-amber-400 h-full"
                    title={`Draw: ${votePcts.draw}%`}
                  />
                  <div
                    style={{ width: `${votePcts.away}%` }}
                    className="bg-[#00E5FF] h-full"
                    title={`Away: ${votePcts.away}%`}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>Home: {votePcts.home}%</span>
                  <span>Draw: {votePcts.draw}%</span>
                  <span>Away: {votePcts.away}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
