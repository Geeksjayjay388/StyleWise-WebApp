import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';

function Wardrobe({ savedOutfits }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (outfitId) => {
    setFavorites(prev =>
      prev.includes(outfitId)
        ? prev.filter(id => id !== outfitId)
        : [...prev, outfitId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span> Wardrobe
          </h1>
          <p className="text-xl text-gray-300">
            All your personalized outfit combinations powered by AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {savedOutfits.map((outfit, index) => (
            <motion.div
              key={outfit.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-700/50"
            >
              <div className="relative">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => toggleFavorite(outfit.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all ${
                    favorites.includes(outfit.id)
                      ? 'bg-red-500/80 text-white shadow-lg shadow-red-500/25'
                      : 'bg-gray-800/60 text-gray-300 hover:bg-red-500/20'
                  }`}
                >
                  <Heart size={20} fill={favorites.includes(outfit.id) ? 'currentColor' : 'none'} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-cyan-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    Saved
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {outfit.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {outfit.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {outfit.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 border border-cyan-400/30">
                  <Eye size={18} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-cyan-500/20"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Your Style <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {savedOutfits.length}
              </div>
              <div className="text-white font-semibold">AI Outfits</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                {favorites.length}
              </div>
              <div className="text-white font-semibold">Favorites</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                100%
              </div>
              <div className="text-white font-semibold">Personalized</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export default Wardrobe;