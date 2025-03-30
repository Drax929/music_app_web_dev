
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
    title: "Electric Dreams",
    artist: "Neon Wave",
    album: "Retrograde",
    cover: "https://images.unsplash.com/photo-1507246207829-732ed643ea0a?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-bombshell.mp3",
    duration: 182,
  },
  {
    id: 2,
    title: "Midnight Blues",
    artist: "Luna Skye",
    album: "Moonlit",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-unlock-your-heart.mp3",
    duration: 224,
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Coastal Dreams",
    album: "Seaside",
    cover: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-ukelele.mp3",
    duration: 198,
  },
  {
    id: 4,
    title: "Urban Vibes",
    artist: "City Pulse",
    album: "Metropolis",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-upbeat.mp3",
    duration: 176,
  },
  {
    id: 5,
    title: "Starlight Sonata",
    artist: "Cosmic Dreams",
    album: "Celestial",
    cover: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-getaway.mp3",
    duration: 245,
  },
  {
    id: 6,
    title: "Rainy Day",
    artist: "Serenity",
    album: "Tranquility",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-emotional-trap.mp3",
    duration: 193,
  },
  {
    id: 7,
    title: "Desert Wind",
    artist: "Nomad",
    album: "Oasis",
    cover: "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-inspiration.mp3",
    duration: 210,
  },
  {
    id: 8,
    title: "City Lights",
    artist: "Urban Echoes",
    album: "Downtown",
    cover: "https://images.unsplash.com/photo-1513104487127-813ea879b8da?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-everyday.mp3", 
    duration: 189,
  },
  {
    id: 9,
    title: "Mountain High",
    artist: "Altitude",
    album: "Summit",
    cover: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-summer-walk.mp3",
    duration: 229,
  },
  {
    id: 10,
    title: "Sunset Drive",
    artist: "Horizon",
    album: "Westbound",
    cover: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-going-higher.mp3",
    duration: 215,
  },
  {
    id: 11,
    title: "Neon Nights",
    artist: "Synthwave",
    album: "Retrowave",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-groovy-lifestyle.mp3",
    duration: 205,
  },
  {
    id: 12,
    title: "Forest Echo",
    artist: "Nature's Harmony",
    album: "Wilderness",
    cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=250&q=80",
    audio: "https://assets.codepen.io/296057/fem-happy-day.mp3",
    duration: 240,
  }
];

export const playlists = [
  {
    id: 1,
    title: "Chill Vibes",
    cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=250&q=80",
    songIds: [1, 3, 5, 6, 9]
  },
  {
    id: 2,
    title: "Urban Beats",
    cover: "https://images.unsplash.com/photo-1530649159659-c3a8dd1df3c4?auto=format&fit=crop&w=250&q=80",
    songIds: [2, 4, 8, 10, 11]
  },
  {
    id: 3,
    title: "Nature Sounds",
    cover: "https://images.unsplash.com/photo-1431440869543-efaf3388c585?auto=format&fit=crop&w=250&q=80",
    songIds: [3, 6, 7, 9, 12]
  }
];
