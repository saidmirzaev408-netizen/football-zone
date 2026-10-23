import React, { createContext, useContext, useState, useEffect } from 'react';
import { demoMatches } from '../data/demoMatches';
import { demoLeagues } from '../data/demoLeagues';
import { demoTeams } from '../data/demoTeams';
import { sounds } from '../utils/soundEffects';

const MatchContext = createContext(null);

export function MatchProvider({ children }) {
  const [matches, setMatches] = useState(() => {
    const saved = localStorage.getItem('fz_matches');
    return saved ? JSON.parse(saved) : demoMatches;
  });

  const [pinnedMatchIds, setPinnedMatchIds] = useState(() => {
    const saved = localStorage.getItem('fz_pinned_matches');
    return saved ? JSON.parse(saved) : ['match-ucl-rma-mci', 'match-epl-ars-che'];
  });

  const [userVotes, setUserVotes] = useState(() => {
    const saved = localStorage.getItem('fz_user_votes');
    return saved ? JSON.parse(saved) : {};
  });

  const [favoriteTeamIds, setFavoriteTeamIds] = useState(() => {
    const saved = localStorage.getItem('fz_fav_teams');
    return saved ? JSON.parse(saved) : ['realmadrid', 'mancity', 'paxtakor'];
  });

  const [favoriteLeagueIds, setFavoriteLeagueIds] = useState(() => {
    const saved = localStorage.getItem('fz_fav_leagues');
    return saved ? JSON.parse(saved) : ['ucl', 'epl', 'uzbekistan'];
  });

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedLeagueId, setSelectedLeagueId] = useState('all');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [goalAlert, setGoalAlert] = useState(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('fz_matches', JSON.stringify(matches));
  }, [matches]);

  useEffect(() => {
    localStorage.setItem('fz_pinned_matches', JSON.stringify(pinnedMatchIds));
  }, [pinnedMatchIds]);

  useEffect(() => {
    localStorage.setItem('fz_user_votes', JSON.stringify(userVotes));
  }, [userVotes]);

  useEffect(() => {
    localStorage.setItem('fz_fav_teams', JSON.stringify(favoriteTeamIds));
  }, [favoriteTeamIds]);

  useEffect(() => {
    localStorage.setItem('fz_fav_leagues', JSON.stringify(favoriteLeagueIds));
  }, [favoriteLeagueIds]);

  // Keep selectedMatch updated when matches list updates
  useEffect(() => {
    if (selectedMatch) {
      const updated = matches.find((m) => m.id === selectedMatch.id);
      if (updated) setSelectedMatch(updated);
    }
  }, [matches]);

  // Toggle Pinned Match
  const togglePinMatch = (matchId) => {
    setPinnedMatchIds((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId]
    );
  };

  // Toggle Favorite Team
  const toggleFavoriteTeam = (teamId) => {
    setFavoriteTeamIds((prev) =>
      prev.includes(teamId) ? prev.filter((id) => id !== teamId) : [...prev, teamId]
    );
  };

  // Toggle Favorite League
  const toggleFavoriteLeague = (leagueId) => {
    setFavoriteLeagueIds((prev) =>
      prev.includes(leagueId) ? prev.filter((id) => id !== leagueId) : [...prev, leagueId]
    );
  };

  // User Voting
  const voteOnMatch = (matchId, choice) => {
    if (userVotes[matchId]) return; // already voted
    setUserVotes((prev) => ({ ...prev, [matchId]: choice }));

    setMatches((prevMatches) =>
      prevMatches.map((m) => {
        if (m.id === matchId) {
          const currentVotes = m.votes || { home: 10, draw: 5, away: 10 };
          return {
            ...m,
            votes: {
              ...currentVotes,
              [choice]: (currentVotes[choice] || 0) + 1
            }
          };
        }
        return m;
      })
    );
  };

  // Sound switch
  const toggleSound = () => {
    const state = sounds.toggleSound();
    setSoundEnabled(state);
  };

  // Simulation: Trigger Goal
  const triggerGoal = (matchId, teamKey) => {
    sounds.playGoalChime();
    setMatches((prev) =>
      prev.map((m) => {
        if (m.id === matchId) {
          const isHome = teamKey === 'home';
          const newHomeScore = isHome ? m.homeTeam.score + 1 : m.homeTeam.score;
          const newAwayScore = !isHome ? m.awayTeam.score + 1 : m.awayTeam.score;
          const scoringTeam = isHome ? m.homeTeam : m.awayTeam;
          const nextMinute = Math.min(90, (m.minute || 60) + 1);

          const newEvent = {
            id: 'ev_' + Date.now(),
            minute: nextMinute,
            type: 'goal',
            team: teamKey,
            player: isHome ? 'Attacking Forward' : 'Striker',
            assist: 'Playmaker',
            detail: `Sensational goal for ${scoringTeam.name}!`
          };

          const newCommentary = {
            minute: nextMinute,
            text: `GOAL! ${scoringTeam.name} score! An unbelievable strike sets the stadium alight!`
          };

          // Trigger screen alert banner
          setGoalAlert({
            teamName: scoringTeam.name,
            score: `${newHomeScore} - ${newAwayScore}`,
            matchId: m.id
          });
          setTimeout(() => setGoalAlert(null), 4500);

          return {
            ...m,
            minute: nextMinute,
            homeTeam: { ...m.homeTeam, score: newHomeScore },
            awayTeam: { ...m.awayTeam, score: newAwayScore },
            events: [newEvent, ...m.events],
            commentary: [newCommentary, ...(m.commentary || [])]
          };
        }
        return m;
      })
    );
  };

  // Simulation: Trigger Card
  const triggerCard = (matchId, teamKey, cardType = 'yellow') => {
    sounds.playWhistle();
    setMatches((prev) =>
      prev.map((m) => {
        if (m.id === matchId) {
          const team = teamKey === 'home' ? m.homeTeam : m.awayTeam;
          const nextMinute = Math.min(90, (m.minute || 60) + 1);
          const newEvent = {
            id: 'card_' + Date.now(),
            minute: nextMinute,
            type: cardType === 'red' ? 'red_card' : 'yellow_card',
            team: teamKey,
            player: 'Defensive Player',
            detail: `${cardType.toUpperCase()} CARD shown for a harsh tactical challenge.`
          };

          return {
            ...m,
            minute: nextMinute,
            events: [newEvent, ...m.events],
            commentary: [
              {
                minute: nextMinute,
                text: `Referee stops play! ${cardType.toUpperCase()} CARD awarded to ${team.name}!`
              },
              ...(m.commentary || [])
            ]
          };
        }
        return m;
      })
    );
  };

  // Simulation: Advance minute by 1
  const advanceMinute = (matchId) => {
    setMatches((prev) =>
      prev.map((m) => {
        if (m.id === matchId && m.status === 'LIVE') {
          const newMin = m.minute + 1;
          const isFT = newMin >= 90;
          if (isFT) sounds.playWhistle();
          return {
            ...m,
            minute: isFT ? 90 : newMin,
            status: isFT ? 'FT' : 'LIVE',
            commentary: [
              {
                minute: newMin,
                text: isFT
                  ? 'FULL TIME whistle blows! The match comes to an end.'
                  : `Minute ${newMin}: Match tempo intensifies as both sides press high.`
              },
              ...(m.commentary || [])
            ]
          };
        }
        return m;
      })
    );
  };

  // Reset matches to default demo data
  const resetAllMatches = () => {
    localStorage.removeItem('fz_matches');
    setMatches(demoMatches);
  };

  return (
    <MatchContext.Provider
      value={{
        matches,
        pinnedMatchIds,
        userVotes,
        favoriteTeamIds,
        favoriteLeagueIds,
        selectedMatch,
        selectedTeam,
        selectedLeagueId,
        soundEnabled,
        goalAlert,
        setSelectedMatch,
        setSelectedTeam,
        setSelectedLeagueId,
        togglePinMatch,
        toggleFavoriteTeam,
        toggleFavoriteLeague,
        voteOnMatch,
        toggleSound,
        triggerGoal,
        triggerCard,
        advanceMinute,
        resetAllMatches,
        leagues: demoLeagues,
        teams: demoTeams
      }}
    >
      {children}
    </MatchContext.Provider>
  );
}

export function useMatches() {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error('useMatches must be used within a MatchProvider');
  }
  return context;
}
