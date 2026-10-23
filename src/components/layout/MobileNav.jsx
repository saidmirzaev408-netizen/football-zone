import React from 'react';
import { Calendar, Trophy, Shield, Award, ArrowLeftRight } from 'lucide-react';
import { useMatches } from '../../context/MatchContext';

export function MobileNav({ activeTab, setActiveTab }) {
  const { matches } = useMatches();
  const liveCount = matches.filter((m) => m.status === 'LIVE').length;

  const items = [
    { id: 'matches', label: 'Matches', icon: Calendar, badge: liveCount },
    { id: 'standings', label: 'Tables', icon: Trophy },
    { id: 'teams', label: 'Clubs', icon: Shield },
    { id: 'stats', label: 'Stats', icon: Award },
    { id: 'transfers', label: 'Transfers', icon: ArrowLeftRight }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101512]/95 backdrop-blur-lg border-t border-[#27322B] px-2 py-1.5 flex items-center justify-around">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative flex flex-col items-center py-1 px-3 rounded-xl transition ${
              isActive ? 'text-[#39F27A]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-semibold mt-0.5">{item.label}</span>

            {item.badge > 0 && (
              <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#39F27A] animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
}
