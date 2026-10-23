import React from 'react';

export function MatchStats({ stats, homeTeam, awayTeam }) {
  if (!stats) {
    return (
      <div className="py-8 text-center text-neutral-400 text-sm">
        No live statistics available for this fixture yet.
      </div>
    );
  }

  const statRows = [
    { label: 'Ball Possession', home: `${stats.possession[0]}%`, away: `${stats.possession[1]}%`, homeVal: stats.possession[0], awayVal: stats.possession[1] },
    { label: 'Expected Goals (xG)', home: stats.expectedGoals[0], away: stats.expectedGoals[1], homeVal: parseFloat(stats.expectedGoals[0]), awayVal: parseFloat(stats.expectedGoals[1]) },
    { label: 'Total Shots', home: stats.totalShots[0], away: stats.totalShots[1], homeVal: stats.totalShots[0], awayVal: stats.totalShots[1] },
    { label: 'Shots on Target', home: stats.shotsOnTarget[0], away: stats.shotsOnTarget[1], homeVal: stats.shotsOnTarget[0], awayVal: stats.shotsOnTarget[1] },
    { label: 'Big Chances Created', home: stats.bigChances[0], away: stats.bigChances[1], homeVal: stats.bigChances[0], awayVal: stats.bigChances[1] },
    { label: 'Pass Accuracy', home: stats.passAccuracy[0], away: stats.passAccuracy[1], homeVal: parseInt(stats.passAccuracy[0]), awayVal: parseInt(stats.passAccuracy[1]) },
    { label: 'Total Passes', home: stats.passes[0], away: stats.passes[1], homeVal: stats.passes[0], awayVal: stats.passes[1] },
    { label: 'Corner Kicks', home: stats.cornerKicks[0], away: stats.cornerKicks[1], homeVal: stats.cornerKicks[0], awayVal: stats.cornerKicks[1] },
    { label: 'Fouls Committed', home: stats.fouls[0], away: stats.fouls[1], homeVal: stats.fouls[0], awayVal: stats.fouls[1] },
    { label: 'Yellow Cards', home: stats.yellowCards[0], away: stats.yellowCards[1], homeVal: stats.yellowCards[0], awayVal: stats.yellowCards[1] }
  ];

  return (
    <div className="space-y-4 bg-[#151C18] p-5 rounded-2xl border border-[#27322B]">
      {/* Team Labels Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#27322B]">
        <div className="flex items-center gap-2">
          <img
            src={homeTeam.logo}
            alt={homeTeam.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs font-bold text-white">{homeTeam.shortName || homeTeam.name}</span>
        </div>
        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
          Match Statistics
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white">{awayTeam.shortName || awayTeam.name}</span>
          <img
            src={awayTeam.logo}
            alt={awayTeam.name}
            className="w-5 h-5 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="space-y-4">
        {statRows.map((row, idx) => {
          const total = (row.homeVal || 0) + (row.awayVal || 0);
          const homePct = total > 0 ? (row.homeVal / total) * 100 : 50;
          const awayPct = total > 0 ? (row.awayVal / total) * 100 : 50;

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white font-mono">{row.home}</span>
                <span className="text-neutral-400 font-medium text-[11px]">{row.label}</span>
                <span className="font-bold text-white font-mono">{row.away}</span>
              </div>

              {/* Comparative Dual Bar */}
              <div className="h-2 w-full bg-[#101512] rounded-full overflow-hidden flex gap-1 p-0.5">
                <div
                  style={{ width: `${homePct}%` }}
                  className="h-full bg-[#39F27A] rounded-full transition-all duration-500"
                />
                <div
                  style={{ width: `${awayPct}%` }}
                  className="h-full bg-[#00E5FF] rounded-full transition-all duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
