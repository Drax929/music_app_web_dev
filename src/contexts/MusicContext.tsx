
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Song, songs } from '../data/songs';
import { toast } from "sonner";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    
    audio.volume = volume;
    
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      playNext();
    };

    const handleLoadedData = () => {
      setDuration(audio.duration);
      if (isPlaying) {
        audio.play()
          .catch(error => {
            console.error("Error playing audio:", error);
            toast.error("Failed to play audio. Please try again.");
            setIsPlaying(false);
          });
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', () => {
      toast.error("Error loading audio file");
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', () => {});
    };
  }, [isPlaying]);

  const playSong = (song: Song) => {
    if (!audioRef.current) return;
    
    // Add to recently played
    setRecentlyPlayed(prev => {
      // Remove the song if it already exists
      const filtered = prev.filter(s => s.id !== song.id);
      // Add the song to the beginning and keep only the last 5
      return [song, ...filtered].slice(0, 5);
    });

    // Set current song and play
    setCurrentSong(song);
    
    const audio = audioRef.current;
    audio.src = song.audio;
    audio.load();
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.error("Error playing audio:", error);
        toast.error("Failed to play audio. Please try again.");
        setIsPlaying(false);
      });
  };

  const pauseSong = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const resumeSong = () => {
    if (!audioRef.current || !currentSong) return;
    
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.error("Error resuming audio:", error);
        toast.error("Failed to resume audio. Please try again.");
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
    if (!audioRef.current || !audioRef.current.duration) return;
    
    const newTime = (value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
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
