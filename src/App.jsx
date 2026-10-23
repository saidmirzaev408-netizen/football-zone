import React, { useState } from 'react';
import { MatchProvider, useMatches } from './context/MatchContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { PinnedBar } from './components/layout/PinnedBar';
import { MobileNav } from './components/layout/MobileNav';
import { MatchList } from './components/matches/MatchList';
import { StandingsTable } from './components/leagues/StandingsTable';
import { TeamHub } from './components/teams/TeamHub';
import { TopScorers } from './components/stats/TopScorers';
import { TransferHub } from './components/transfers/TransferHub';
import { FanPredictions } from './components/predictions/FanPredictions';
import { NewsHub } from './components/news/NewsHub';
import { MatchDetailModal } from './components/matches/MatchDetailModal';
import { TeamDetailModal } from './components/teams/TeamDetailModal';

function MainApp() {
  const [activeTab, setActiveTab] = useState('matches');

  return (
    <div className="min-h-screen bg-[#080B0A] text-[#F5F7F5] flex flex-col font-sans selection:bg-[#39F27A] selection:text-black">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Pinned Live Match Ticker */}
      <PinnedBar />

      {/* Main Center Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Desktop Left Sidebar */}
        <div className="hidden md:block">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Dynamic Main Content View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 md:pb-12 overflow-x-hidden">
          {activeTab === 'matches' && <MatchList />}
          {activeTab === 'standings' && <StandingsTable />}
          {activeTab === 'teams' && <TeamHub />}
          {activeTab === 'stats' && <TopScorers />}
          {activeTab === 'transfers' && <TransferHub />}
          {activeTab === 'predictions' && <FanPredictions />}
          {activeTab === 'news' && <NewsHub />}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Modals */}
      <MatchDetailModal />
      <TeamDetailModal />

      {/* Footer */}
      <footer className="border-t border-[#27322B] bg-[#101512] py-6 px-4 text-center text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-['Outfit']">
              FOOTBALL<span className="text-[#39F27A]">ZONE</span>
            </span>
            <span>— The Ultimate Live Football Experience</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>UEFA Champions League</span>
            <span>•</span>
            <span>Premier League</span>
            <span>•</span>
            <span>La Liga</span>
            <span>•</span>
            <span>Superliga UZB</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <MatchProvider>
      <MainApp />
    </MatchProvider>
  );
}
