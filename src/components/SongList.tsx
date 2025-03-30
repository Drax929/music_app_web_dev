
import React from 'react';
import { useMusic } from '../contexts/MusicContext';
import { songs, Song } from '../data/songs';
import { Play, Pause } from 'lucide-react';

interface SongListProps {
  title: string;
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ title, songs }) => {
  const { playSong, currentSong, isPlaying, pauseSong, resumeSong } = useMusic();

  const handleSongClick = (song: Song) => {
    if (currentSong?.id === song.id) {
      isPlaying ? pauseSong() : resumeSong();
    } else {
      playSong(song);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-2">
        {songs.map((song) => (
          <div 
            key={song.id}
            className="music-item p-2 rounded-md flex items-center gap-4 group hover:bg-white/10 transition cursor-pointer"
            onClick={() => handleSongClick(song)}
          >
            <div className="relative">
              <img 
                src={song.cover} 
                alt={song.title} 
                className="h-12 w-12 object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 play-icon transition-opacity">
                {currentSong?.id === song.id && isPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white" />
                )}
              </div>
            </div>
            <div className="flex-1">
              <h4 className={`text-sm ${currentSong?.id === song.id ? 'text-purple-400' : 'text-white'} font-medium`}>
                {song.title}
              </h4>
              <p className="text-xs text-gray-400">{song.artist}</p>
            </div>
            <div className="text-xs text-gray-400">
              {song.duration ? `${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, '0')}` : '0:00'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
