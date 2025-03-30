
import React from 'react';
import Sidebar from '../components/Sidebar';
import MusicPlayer from '../components/MusicPlayer';
import { MusicProvider } from '../contexts/MusicContext';
import { SearchIcon } from 'lucide-react';
import { songs } from '../data/songs';
import MusicCard from '../components/MusicCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<typeof songs>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filtered = songs.filter(song => 
      song.title.toLowerCase().includes(term.toLowerCase()) || 
      song.artist.toLowerCase().includes(term.toLowerCase()) || 
      song.album.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  return (
    <MusicProvider>
      <div className="flex h-screen bg-black text-white">
        <Sidebar activePage="search" />
        <main className="flex-1 flex flex-col h-screen">
          <div className="flex-1 overflow-auto bg-gradient-to-b from-purple-900/30 to-[#121212] p-6">
            <div className="mb-8">
              <div className="relative">
                <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search for songs, artists, or albums..."
                  className="w-full py-2 pl-10 pr-4 rounded-full bg-[#2a2a2a] text-white border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            {searchTerm && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Search Results</h2>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {searchResults.map(song => (
                      <MusicCard key={song.id} song={song} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No results found for "{searchTerm}"</p>
                )}
              </div>
            )}
            
            {!searchTerm && (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-400 text-center">
                  Start typing to search for songs, artists, or albums
                </p>
              </div>
            )}
          </div>
          <MusicPlayer />
        </main>
      </div>
    </MusicProvider>
  );
};

export default Search;
