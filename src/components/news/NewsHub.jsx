import React from 'react';
import { demoNews } from '../../data/demoNews';
import { Clock, BookOpen, Share2, Sparkles } from 'lucide-react';

export function NewsHub() {
  const featured = demoNews.find((n) => n.featured) || demoNews[0];
  const others = demoNews.filter((n) => n.id !== featured.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-2 border-b border-[#27322B]">
        <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
          Headlines & Tactical Analysis
        </h2>
        <p className="text-xs text-neutral-400 mt-1">
          In-depth stories, match reactions, and coverage from the Champions League to Uzbekistan Super League
        </p>
      </div>

      {/* Featured Lead Story */}
      <div className="relative rounded-3xl overflow-hidden border border-[#27322B] group cursor-pointer bg-[#151C18]">
        <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 sm:p-8 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#39F27A] text-black uppercase">
              {featured.category}
            </span>
            <span className="text-xs text-neutral-300 font-medium">{featured.time}</span>
            <span className="text-xs text-neutral-400">• {featured.readTime}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-[#39F27A] transition font-['Outfit'] max-w-2xl">
            {featured.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-2 max-w-xl">
            {featured.summary}
          </p>
        </div>
      </div>

      {/* Secondary Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {others.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl overflow-hidden border border-[#27322B] hover:border-white/20 transition group cursor-pointer flex flex-col"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-400 mb-1">
                  <span className="text-[#39F27A] font-semibold">{item.category}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#39F27A] transition line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-[#27322B] flex items-center justify-between text-[11px] text-neutral-400">
                <span>{item.readTime}</span>
                <span className="text-[#39F27A] font-semibold group-hover:underline">Read Story →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
