import React, { useState, useEffect } from 'react';
import { useMatches } from '../../context/MatchContext';
import { Search, X, Trophy, Users, Shield, Calendar } from 'lucide-react';
import { demoTopScorers } from '../../data/demoPlayers';

export function SearchModal({ isOpen, onClose }) {
  const { matches, teams, leagues, setSelectedMatch, setSelectedTeam, setSelectedLeagueId } = useMatches();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  const filteredMatches = cleanQ
    ? matches.filter(
        (m) =>
          m.homeTeam.name.toLowerCase().includes(cleanQ) ||
          m.awayTeam.name.toLowerCase().includes(cleanQ) ||
          m.leagueName.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredTeams = cleanQ
    ? teams.filter((t) => t.name.toLowerCase().includes(cleanQ) || t.shortName.toLowerCase().includes(cleanQ))
    : [];

  const filteredLeagues = cleanQ
    ? leagues.filter((l) => l.name.toLowerCase().includes(cleanQ) || l.shortName.toLowerCase().includes(cleanQ))
    : [];

  const filteredPlayers = cleanQ
    ? demoTopScorers.filter((p) => p.name.toLowerCase().includes(cleanQ) || p.team.toLowerCase().includes(cleanQ))
    : [];

  const totalResults =
    filteredMatches.length + filteredTeams.length + filteredLeagues.length + filteredPlayers.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md">
      <div
        className="w-full max-w-2xl bg-[#101512] border border-[#27322B] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#27322B] bg-[#151C18]">
          <Search className="w-5 h-5 text-[#39F27A]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search teams, matches, leagues, players (e.g. Madrid, Paxtakor, Haaland)..."
            className="w-full bg-transparent text-[#F5F7F5] placeholder-neutral-400 focus:outline-none text-sm font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 text-neutral-300 rounded-lg transition"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!cleanQ ? (
            <div className="py-8 text-center text-neutral-400 text-sm">
              <p>Type to search across European leagues, Uzbekistan Super League, teams & top players.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Real Madrid', 'Paxtakor', 'Champions League', 'Haaland', 'Barcelona'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 text-xs rounded-full bg-[#1B241F] text-neutral-300 border border-[#27322B] hover:border-[#39F27A] hover:text-[#39F27A] transition"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-neutral-400 text-sm">
              No results found for "<span className="text-white font-medium">{query}</span>"
            </div>
          ) : (
            <>
              {/* Matches */}
              {filteredMatches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39F27A] mb-2">
                    <Calendar className="w-3.5 h-3.5" /> Matches ({filteredMatches.length})
                  </div>
                  <div className="space-y-1.5">
                    {filteredMatches.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          setSelectedMatch(m);
                          onClose();
                        }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#151C18] hover:bg-[#1B241F] border border-transparent hover:border-[#39F27A]/40 cursor-pointer transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-neutral-400 font-medium">
                            {m.leagueName}
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {m.homeTeam.name} vs {m.awayTeam.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {m.status === 'LIVE' ? (
                            <span className="text-xs font-bold text-[#39F27A] bg-[#39F27A]/10 px-2 py-0.5 rounded">
                              LIVE {m.homeTeam.score}-{m.awayTeam.score} ({m.minute}')
                            </span>
                          ) : m.status === 'FT' ? (
                            <span className="text-xs font-medium text-neutral-300 bg-white/5 px-2 py-0.5 rounded">
                              FT {m.homeTeam.score}-{m.awayTeam.score}
                            </span>
                          ) : (
                            <span className="text-xs text-neutral-400">{m.startTime}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Teams */}
              {filteredTeams.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39F27A] mb-2">
                    <Shield className="w-3.5 h-3.5" /> Teams ({filteredTeams.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredTeams.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => {
                          setSelectedTeam(t);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-[#151C18] hover:bg-[#1B241F] border border-transparent hover:border-[#39F27A]/40 cursor-pointer transition"
                      >
                        <img
                          src={t.logo}
                          alt={t.name}
                          className="w-7 h-7 rounded-full object-cover border border-white/10"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                          <p className="text-xs text-neutral-400 truncate">{t.stadium} • {t.country}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Leagues */}
              {filteredLeagues.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39F27A] mb-2">
                    <Trophy className="w-3.5 h-3.5" /> Leagues ({filteredLeagues.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredLeagues.map((l) => (
                      <div
                        key={l.id}
                        onClick={() => {
                          setSelectedLeagueId(l.id);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-[#151C18] hover:bg-[#1B241F] border border-transparent hover:border-[#39F27A]/40 cursor-pointer transition"
                      >
                        <img
                          src={l.logo}
                          alt={l.name}
                          className="w-7 h-7 rounded-full object-cover border border-white/10"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{l.name}</p>
                          <p className="text-xs text-neutral-400">{l.country}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Players */}
              {filteredPlayers.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39F27A] mb-2">
                    <Users className="w-3.5 h-3.5" /> Players ({filteredPlayers.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredPlayers.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#151C18] border border-[#27322B]"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={p.photo}
                            alt={p.name}
                            className="w-8 h-8 rounded-full object-cover border border-[#39F27A]/30"
                          />
                          <div>
                            <p className="text-sm font-semibold text-white">{p.name}</p>
                            <p className="text-xs text-neutral-400">{p.team}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#39F27A] bg-[#39F27A]/10 px-2 py-0.5 rounded">
                          {p.goals} Goals
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
