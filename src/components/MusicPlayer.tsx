
import React from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Volume1, Volume2, VolumeX } from 'lucide-react';
import { Slider } from "./ui/slider";

const MusicPlayer = () => {
  const { 
    isPlaying, 
    currentSong, 
    currentTime, 
    duration,
    volume,
    pauseSong, 
    resumeSong, 
    playNext, 
    playPrevious,
    setProgress,
    setVolume,
    formatTime
  } = useMusic();

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  const handleProgressChange = (value: number[]) => {
    if (value.length > 0) {
      const progressPercentage = value[0];
      setProgress(progressPercentage);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (value.length > 0) {
      const newVolume = value[0] / 100;
      setVolume(newVolume);
    }
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={18} />;
    if (volume < 0.5) return <Volume1 size={18} />;
    return <Volume2 size={18} />;
  };

  if (!currentSong) {
    return (
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-center">
        <p className="text-gray-400">Select a song to play</p>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-[#282828] px-4 flex items-center ${isPlaying ? 'playing' : ''}`}>
      {/* Song Info */}
      <div className="flex items-center w-1/4">
        <div className="flex-shrink-0 mr-3 album-rotate">
          <img 
            src={currentSong.cover} 
            alt={currentSong.album} 
            className="h-14 w-14 rounded"
          />
        </div>
        <div>
          <h4 className="text-white text-sm font-medium">{currentSong.title}</h4>
          <p className="text-gray-400 text-xs">{currentSong.artist}</p>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto">
        {/* Playback controls */}
        <div className="flex items-center justify-center gap-6 mb-2">
          <button 
            onClick={playPrevious}
            className="text-gray-400 hover:text-white transition"
          >
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={isPlaying ? pauseSong : resumeSong}
            className="bg-white rounded-full p-2 hover:scale-105 transition"
          >
            {isPlaying ? <Pause size={18} color="#000" /> : <Play size={18} color="#000" />}
          </button>
          
          <button 
            onClick={playNext}
            className="text-gray-400 hover:text-white transition"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="w-full flex items-center gap-2 text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <div className="flex-1 px-2">
            <Slider
              value={[progressPercentage]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleProgressChange}
              className="cursor-pointer"
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* Volume */}
      <div className="w-1/4 flex justify-end items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
            {getVolumeIcon()}
          </span>
          <div className="w-24">
            <Slider
              value={[volume * 100]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
