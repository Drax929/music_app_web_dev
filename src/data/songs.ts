
export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  cover: string;
  audio: string;
  duration: number;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    cover: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 182,
  },
  {
    id: 2,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 224,
  },
  {
    id: 3,
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 198,
  },
  {
    id: 4,
    title: "The Hills",
    artist: "The Weeknd",
    album: "Beauty Behind the Madness",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 176,
  },
  {
    id: 5,
    title: "Heartless",
    artist: "The Weeknd",
    album: "After Hours",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 245,
  },
  {
    id: 6,
    title: "I Feel It Coming",
    artist: "The Weeknd ft. Daft Punk",
    album: "Starboy",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 193,
  },
  {
    id: 7,
    title: "In Your Eyes",
    artist: "The Weeknd",
    album: "After Hours",
    cover: "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 210,
  },
  {
    id: 8,
    title: "Call Out My Name",
    artist: "The Weeknd",
    album: "My Dear Melancholy",
    cover: "https://images.unsplash.com/photo-1513104487127-813ea879b8da?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 189,
  },
  {
    id: 9,
    title: "Often",
    artist: "The Weeknd",
    album: "Beauty Behind the Madness",
    cover: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 229,
  },
  {
    id: 10,
    title: "Earned It",
    artist: "The Weeknd",
    album: "Beauty Behind the Madness",
    cover: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 215,
  },
  {
    id: 11,
    title: "Die For You",
    artist: "The Weeknd",
    album: "Starboy",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 205,
  },
  {
    id: 12,
    title: "Can't Feel My Face",
    artist: "The Weeknd",
    album: "Beauty Behind the Madness",
    cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3", // Fallback audio
    duration: 240,
  }
];

export const playlists = [
  {
    id: 1,
    title: "After Hours Collection",
    cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=250&q=80",
    songIds: [1, 2, 5, 7]
  },
  {
    id: 2,
    title: "Starboy Hits",
    cover: "https://images.unsplash.com/photo-1530649159659-c3a8dd1df3c4?auto=format&fit=crop&w=250&q=80",
    songIds: [3, 6, 11]
  },
  {
    id: 3,
    title: "Beauty Behind the Madness",
    cover: "https://images.unsplash.com/photo-1431440869543-efaf3388c585?auto=format&fit=crop&w=250&q=80",
    songIds: [4, 9, 10, 12]
  }
];
