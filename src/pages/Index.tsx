
import React from 'react';
import Sidebar from '../components/Sidebar';
import MusicPlayer from '../components/MusicPlayer';
import SongList from '../components/SongList';
import MusicCard from '../components/MusicCard';
import PlaylistCard from '../components/PlaylistCard';
import { MusicProvider, useMusic } from '../contexts/MusicContext';
import { songs, playlists } from '../data/songs';
import { SearchIcon } from 'lucide-react';

const MainContent = () => {
  const { recentlyPlayed } = useMusic();
  
  const featuredSongs = songs.slice(0, 5);
  
  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-purple-900/30 to-[#121212] p-6">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for songs, artists, or albums..."
            className="w-full py-2 pl-10 pr-4 rounded-full bg-[#2a2a2a] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      {/* Featured Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Tracks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {featuredSongs.map(song => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      
      {/* Recently Played */}
      {recentlyPlayed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recently Played</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recentlyPlayed.map(song => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      )}
      
      {/* Playlists */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} playlistId={playlist.id} />
          ))}
        </div>
      </div>
      
      {/* All Songs */}
      <SongList title="All Songs" songs={songs} />
    </div>
  );
};

const Index = () => {
  return (
    <MusicProvider>
      <div className="flex h-screen bg-black text-white">
        <Sidebar activePage="home" />
        <main className="flex-1 flex flex-col h-screen">
          <MainContent />
          <MusicPlayer />
        </main>
      </div>
    </MusicProvider>
  );
};

export default Index;
