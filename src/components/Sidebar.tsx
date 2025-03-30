
import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon } from 'lucide-react';
import { playlists } from '../data/songs';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#121212] h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-8">TuneFlicker</h1>
      
      <nav className="mb-8">
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-white flex items-center gap-3 hover:text-purple-400 transition-colors">
              <HomeIcon size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 flex items-center gap-3 hover:text-white transition-colors">
              <SearchIcon size={20} />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 flex items-center gap-3 hover:text-white transition-colors">
              <LibraryIcon size={20} />
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="mt-4">
        <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Playlists</h2>
        <ul className="space-y-2">
          {playlists.map(playlist => (
            <li key={playlist.id}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {playlist.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
