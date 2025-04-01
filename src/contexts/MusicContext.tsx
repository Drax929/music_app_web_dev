
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
  const [useRealAudio, setUseRealAudio] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    
    audio.volume = volume;
    
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
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
            // If real audio fails, switch to mock audio
            if (useRealAudio) {
              setUseRealAudio(false);
              mockAudioPlayback(currentSong);
            }
            toast.error("Using simulated audio playback");
          });
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', () => {
      console.log("Audio error detected, switching to mock playback");
      if (useRealAudio && currentSong) {
        setUseRealAudio(false);
        mockAudioPlayback(currentSong);
      }
      toast.error("Using simulated audio playback");
    });

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', () => {});
    };
  }, [isPlaying, currentSong, useRealAudio]);

  const mockAudioPlayback = (song: Song | null) => {
    if (!song) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    
    // Set initial values
    const songDuration = song.duration || 180; // Default to 3 minutes if no duration
    setDuration(songDuration);
    setCurrentTime(0);
    
    // Create interval to simulate audio progress
    if (isPlaying) {
      const interval = window.setInterval(() => {
        setCurrentTime(prevTime => {
          if (prevTime >= songDuration) {
            window.clearInterval(interval);
            playNext();
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
      
      intervalRef.current = interval;
    }
  };

  const playSong = (song: Song) => {
    // Add to recently played
    setRecentlyPlayed(prev => {
      // Remove the song if it already exists
      const filtered = prev.filter(s => s.id !== song.id);
      // Add the song to the beginning and keep only the last 5
      return [song, ...filtered].slice(0, 5);
    });

    // Set current song
    setCurrentSong(song);
    
    // Clear any existing mock interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    
    if (useRealAudio) {
      // Try to play real audio first
      if (!audioRef.current) return;
      const audio = audioRef.current;
      audio.src = song.audio;
      audio.load();
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Error playing audio:", error);
          setUseRealAudio(false);
          mockAudioPlayback(song);
          setIsPlaying(true);
        });
    } else {
      // Use mock audio playback
      mockAudioPlayback(song);
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (useRealAudio && audioRef.current) {
      audioRef.current.pause();
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    setIsPlaying(false);
  };

  const resumeSong = () => {
    if (!currentSong) return;
    
    if (useRealAudio) {
      if (!audioRef.current) return;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Error resuming audio:", error);
          setUseRealAudio(false);
          mockAudioPlayback(currentSong);
          setIsPlaying(true);
        });
    } else {
      mockAudioPlayback(currentSong);
      setIsPlaying(true);
    }
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
    if (useRealAudio) {
      if (!audioRef.current || !audioRef.current.duration) return;
      const newTime = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    } else {
      // For mock playback
      const newTime = (value / 100) * duration;
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
