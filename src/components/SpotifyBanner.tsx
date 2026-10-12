import React from 'react';
import { Music, ExternalLink, Headphones, Disc3 } from 'lucide-react';
import { DELINE_DATA } from '../data/delineData';

export const SpotifyBanner: React.FC = () => {
  return (
    <section className="py-10 bg-white/40" aria-label="Playlist musical do Estúdio Delinê">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#ccc7c6]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-5 text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1DB954]/10 text-[#1DB954] flex items-center justify-center shrink-0 border border-[#1DB954]/20">
              <Disc3 className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a32451] mb-1">
                <Headphones className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Trilha Sonora Exclusiva</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2d2929]">
                Playlist Delinê no Spotify
              </h3>
              <p className="text-xs sm:text-sm text-[#5c5555] max-w-lg mt-0.5">
                Entre no clima do nosso estúdio! Selecionamos músicas relaxantes e acolhedoras para
                acompanhar seu dia e seu momento de autocuidado.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={DELINE_DATA.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold bg-[#1DB954] text-white hover:bg-[#1aa34a] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1DB954] whitespace-nowrap"
              aria-label="Ouvir a Playlist Delinê no Spotify"
            >
              <Music className="w-4 h-4" aria-hidden="true" />
              <span>Ouvir no Spotify</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
