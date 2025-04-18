
import React, { useState } from 'react';
import { playlists } from '../data/songs';
import { songs } from '../data/songs';

interface PlaylistCardProps {
  playlistId: number;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlistId }) => {
  const playlist = playlists.find(p => p.id === playlistId);
  const [imageError, setImageError] = useState(false);
  
  if (!playlist) return null;
  
  // Get first 4 song covers for the playlist
  const playlistSongs = playlist.songIds
    .map(id => songs.find(song => song.id === id))
    .filter(Boolean);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="p-4 bg-[#181818] rounded-md transition-all duration-300 hover:bg-[#282828] group">
      <div className="relative mb-4">
        <img 
          src={imageError ? 'https://placehold.co/250x250/181818/777?text=Cover+Not+Available' : playlist.cover} 
          alt={playlist.title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
          onError={handleImageError}
        />
      </div>
      <h3 className="text-white font-medium truncate">{playlist.title}</h3>
      <p className="text-gray-400 text-sm mt-1 truncate">{playlistSongs.length} songs</p>
    </div>
  );
};

export default PlaylistCard;
