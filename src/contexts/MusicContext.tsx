import React, { createContext, useContext, useEffect, useState } from 'react';
import { Song, songs } from '../data/songs';

interface MusicContextType {
  isPlaying: boolean;
  currentSong: Song | null;
  currentTime: number;
  duration: number;
  volume: number;
  recentlyPlayed: Song[];
  playSong: (song: Song) => void;
  pauseSong: () => void;
  resumeSong: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setProgress: (value: number) => void;
  setVolume: (value: number) => void;
  formatTime: (time: number) => string;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audioElement] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);

  useEffect(() => {
    audioElement.volume = volume;
  }, [volume, audioElement]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleEnded = () => {
      playNext();
    };

    const handleLoadedData = () => {
      setDuration(audioElement.duration);
      if (isPlaying) audioElement.play();
    };

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('ended', handleEnded);
    audioElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('ended', handleEnded);
      audioElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [audioElement, isPlaying]);

  const playSong = (song: Song) => {
    // Add to recently played
    setRecentlyPlayed(prev => {
      // Remove the song if it already exists
      const filtered = prev.filter(s => s.id !== song.id);
      // Add the song to the beginning and keep only the last 5
      return [song, ...filtered].slice(0, 5);
    });

    // Set current song and play
    setCurrentSong(song);
    audioElement.src = song.audio;
    audioElement.load();
    audioElement.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error("Error playing audio:", error);
    });
  };

  const pauseSong = () => {
    audioElement.pause();
    setIsPlaying(false);
  };

  const resumeSong = () => {
    audioElement.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error("Error resuming audio:", error);
    });
  };

  const playNext = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  };

  const playPrevious = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[previousIndex]);
  };

  const setProgress = (value: number) => {
    if (audioElement.duration) {
      const newTime = (value / 100) * audioElement.duration;
      audioElement.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <MusicContext.Provider value={{
      isPlaying,
      currentSong,
      currentTime,
      duration,
      volume,
      recentlyPlayed,
      playSong,
      pauseSong,
      resumeSong,
      playNext,
      playPrevious,
      setProgress,
      setVolume,
      formatTime
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
