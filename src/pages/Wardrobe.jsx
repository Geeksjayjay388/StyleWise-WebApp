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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-amber-800 mb-4">
            My Wardrobe
          </h1>
          <p className="text-xl text-amber-600">
            All your personalized outfit combinations in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedOutfits.map((outfit, index) => (
            <motion.div
              key={outfit.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(outfit.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    favorites.includes(outfit.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-red-50'
                  }`}
                >
                  <Heart size={20} fill={favorites.includes(outfit.id) ? 'currentColor' : 'none'} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    Saved
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {outfit.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {outfit.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {outfit.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
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
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
            Your Style Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {savedOutfits.length}
              </div>
              <div className="text-amber-800 font-semibold">Total Outfits</div>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {favorites.length}
              </div>
              <div className="text-amber-800 font-semibold">Favorites</div>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                100%
              </div>
              <div className="text-amber-800 font-semibold">Personalized</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Wardrobe;