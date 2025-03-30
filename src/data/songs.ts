
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
    audio: "https://storage.googleapis.com/lightmetrics-public/121733__boss-music__pulsing-synth-loop.mp3",
    duration: 182,
  },
  {
    id: 2,
    title: "Midnight Blues",
    artist: "Luna Skye",
    album: "Moonlit",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/450964__tigersound__dark-cinematic-piano-loop.mp3",
    duration: 224,
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Coastal Dreams",
    album: "Seaside",
    cover: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/639328__jose-maigua__mellow-pad-with-bass-loop.wav",
    duration: 198,
  },
  {
    id: 4,
    title: "Urban Vibes",
    artist: "City Pulse",
    album: "Metropolis",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/353524__frankum__ambient-loop-022.mp3",
    duration: 176,
  },
  {
    id: 5,
    title: "Starlight Sonata",
    artist: "Cosmic Dreams",
    album: "Celestial",
    cover: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/587213__frankum__ambient-guitar-x1-loop-mode.mp3",
    duration: 245,
  },
  {
    id: 6,
    title: "Rainy Day",
    artist: "Serenity",
    album: "Tranquility",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/321265__frankum__ambient-guitar-loop-1.mp3",
    duration: 193,
  },
  {
    id: 7,
    title: "Desert Wind",
    artist: "Nomad",
    album: "Oasis",
    cover: "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/322102__frankum__ambient-guitar-loop-22.mp3",
    duration: 210,
  },
  {
    id: 8,
    title: "City Lights",
    artist: "Urban Echoes",
    album: "Downtown",
    cover: "https://images.unsplash.com/photo-1513104487127-813ea879b8da?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/561071__frankum__medium-loop-020.mp3", 
    duration: 189,
  },
  {
    id: 9,
    title: "Mountain High",
    artist: "Altitude",
    album: "Summit",
    cover: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/635506__frankum__ambient-loop-1.mp3",
    duration: 229,
  },
  {
    id: 10,
    title: "Sunset Drive",
    artist: "Horizon",
    album: "Westbound",
    cover: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/531711__frankum__techno-loop-1.mp3",
    duration: 215,
  },
  {
    id: 11,
    title: "Neon Nights",
    artist: "Synthwave",
    album: "Retrowave",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/410232__frankum__freestyle-dance-loop-99-bpm.mp3",
    duration: 205,
  },
  {
    id: 12,
    title: "Forest Echo",
    artist: "Nature's Harmony",
    album: "Wilderness",
    cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=250&q=80",
    audio: "https://storage.googleapis.com/lightmetrics-public/507306__frankum__ambient-loop-100-bpm.mp3",
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
