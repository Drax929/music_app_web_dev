
import React from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Song } from '../data/songs';
import { Play, Pause } from 'lucide-react';

interface MusicCardProps {
  song: Song;
}

const MusicCard: React.FC<MusicCardProps> = ({ song }) => {
  const { playSong, pauseSong, resumeSong, currentSong, isPlaying } = useMusic();

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (currentSong?.id === song.id) {
      isPlaying ? pauseSong() : resumeSong();
    } else {
      playSong(song);
    }
  };

  const isCurrentSong = currentSong?.id === song.id;

  return (
    <div 
      className="p-4 bg-[#181818] rounded-md transition-all duration-300 group hover:bg-[#282828]"
      onClick={() => playSong(song)}
    >
      <div className="relative mb-4">
        <img 
          src={song.cover} 
          alt={song.title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button
          className={`absolute bottom-2 right-2 rounded-full shadow-lg transform transition-transform duration-200 ${isCurrentSong && isPlaying ? 'scale-100 opacity-100' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}
          onClick={handlePlayClick}
        >
          <div className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition">
            {isCurrentSong && isPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </div>
        </button>
      </div>
      <h3 className="text-white font-medium truncate">{song.title}</h3>
      <p className="text-gray-400 text-sm mt-1 truncate">{song.artist}</p>
    </div>
  );
};

export default MusicCard;
