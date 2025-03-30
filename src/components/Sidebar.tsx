
import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon } from 'lucide-react';
import { playlists } from '../data/songs';
import { Link } from 'react-router-dom';

interface SidebarProps {
  activePage?: 'home' | 'search' | 'library';
}

const Sidebar: React.FC<SidebarProps> = ({ activePage = 'home' }) => {
  return (
    <div className="w-64 bg-[#121212] h-screen p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-8">TuneFlicker</h1>
      
      <nav className="mb-8">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/" 
              className={`flex items-center gap-3 transition-colors ${
                activePage === 'home' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/search" 
              className={`flex items-center gap-3 transition-colors ${
                activePage === 'search' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <SearchIcon size={20} />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/library" 
              className={`flex items-center gap-3 transition-colors ${
                activePage === 'library' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <LibraryIcon size={20} />
              <span>Your Library</span>
            </Link>
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
