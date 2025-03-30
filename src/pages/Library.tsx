
import React from 'react';
import Sidebar from '../components/Sidebar';
import MusicPlayer from '../components/MusicPlayer';
import { MusicProvider, useMusic } from '../contexts/MusicContext';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data/songs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LibraryContent = () => {
  const { recentlyPlayed } = useMusic();
  
  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-purple-900/30 to-[#121212] p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Your Library</h1>
      
      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="bg-[#282828] mb-6">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="recent">Recently Played</TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {playlists.map(playlist => (
              <PlaylistCard key={playlist.id} playlistId={playlist.id} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="mt-6">
          {recentlyPlayed.length > 0 ? (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recentlyPlayed.map(song => (
                  <div key={song.id} className="p-4 bg-[#181818] rounded-md transition-all duration-300 hover:bg-[#282828]">
                    <div className="relative mb-4">
                      <img 
                        src={song.cover} 
                        alt={song.title}
                        className="w-full aspect-square object-cover rounded-md shadow-lg"
                      />
                    </div>
                    <h3 className="text-white font-medium truncate">{song.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 truncate">{song.artist}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-400 text-center">
                No recently played songs
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Library = () => {
  return (
    <MusicProvider>
      <div className="flex h-screen bg-black text-white">
        <Sidebar activePage="library" />
        <main className="flex-1 flex flex-col h-screen">
          <LibraryContent />
          <MusicPlayer />
        </main>
      </div>
    </MusicProvider>
  );
};

export default Library;
