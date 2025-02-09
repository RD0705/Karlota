import React from 'react';
import { Guitar, Heart, Music, Info, GithubIcon } from 'lucide-react';

function App() {
  const playlist = [
    { title: "Highway to Hell", artist: "AC/DC", url: "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s" },
    { title: "Smoke on the Water", artist: "Deep Purple", url: "https://open.spotify.com/track/5SAUIWdZ04OxYfJFDchC7S" },
    { title: "Another Brick in the Wall", artist: "Pink Floyd", url: "https://open.spotify.com/track/4gMgiXfqyzZLMhsksGmbQV" },
    { title: "I Hate Everything About You", artist: "Three Days Grace", url: "https://open.spotify.com/track/0M955bMOoilikPXwKLYpoi" },
    { title: "Welcome to the Jungle", artist: "Guns N' Roses", url: "https://open.spotify.com/track/1jzDzZWeSDBg5fhNc3tczV" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Rock for Children of Divorced Parents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 italic">
            Because parents' love can be divided, but rock never will be!
          </p>
          <Guitar className="mx-auto mt-8 w-16 h-16 animate-bounce" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Info className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-bold">About</h2>
          </div>
          <p className="text-xl text-gray-300">
            This site is dedicated to all children of divorced parents who found their true family in rock.
            Here, we laugh at pain because crying is too mainstream. 🤘
          </p>
        </div>
      </section>

      {/* Playlist Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Music className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-bold">Divorce Playlist</h2>
          </div>
          <div className="space-y-4">
            {playlist.map((song, index) => (
              <a
                key={index}
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{song.title}</h3>
                    <p className="text-gray-400">{song.artist}</p>
                  </div>
                  <Music className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dedication Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-10 h-10 mr-4 text-red-500" />
            <h2 className="text-4xl font-bold">Dedicated to [Name]</h2>
          </div>
          <p className="text-xl text-gray-300">
            Because you deserve a rock that understands your pain, but also knows how to transform it into something amazing.
            You're my guitar solo in the midst of chaos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <p className="text-gray-400">
              Created with love by [Your Name] | {new Date().getFullYear()}
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;