import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shirt, Sparkles } from 'lucide-react';
import { generatePersonalizedOutfits } from '../data/selectedOutfits.js';

function Results({ quizData, onContinueToWardrobe }) {
  const [favorites, setFavorites] = useState([]);
  const [generatedOutfits, setGeneratedOutfits] = useState([]);

  useEffect(() => {
    const personalizedOutfits = generatePersonalizedOutfits(quizData.answers, quizData.skinTone);
    setGeneratedOutfits(personalizedOutfits);
  }, [quizData]);

  const toggleFavorite = (outfitId) => {
    setFavorites((prev) =>
      prev.includes(outfitId)
        ? prev.filter((id) => id !== outfitId)
        : [...prev, outfitId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Perfect</span> Outfits
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            AI-curated specially for your <span className="text-cyan-400 font-semibold">{quizData.skinTone}</span> skin tone
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-6 py-3 rounded-full font-semibold border border-cyan-500/30">
            <Sparkles size={20} />
            {generatedOutfits.length} AI-Selected Combos
          </div>
        </motion.div>

        {/* Outfit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {generatedOutfits.map((outfit, index) => (
            <motion.div
              key={outfit.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
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
                  <Heart
                    size={22}
                    fill={favorites.includes(outfit.id) ? 'currentColor' : 'none'}
                  />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-cyan-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    AI Match
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onContinueToWardrobe}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 mx-auto border border-cyan-400/30"
          >
            <Shirt size={24} />
            View My AI Wardrobe
          </button>
        </motion.div>
      </div>
    </div>
  );
}
export default Results;
