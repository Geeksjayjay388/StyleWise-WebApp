import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shirt } from 'lucide-react';

function Results({ quizData, onContinueToWardrobe, generatedOutfits }) {
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
            Your Perfect Outfits
          </h1>
          <p className="text-xl text-amber-600 mb-6">
            Curated specially for your {quizData.skinTone} skin tone
          </p>
          <div className="flex justify-center">
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
              {generatedOutfits.length} Complete Outfit Combinations
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {generatedOutfits.map((outfit, index) => (
            <motion.div
              key={outfit.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
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
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {outfit.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {outfit.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {outfit.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onContinueToWardrobe}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xl font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Shirt />
            View My Wardrobe
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Results;