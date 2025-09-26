import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function HomePage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-8xl mb-8"
        >
          ✨👗✨
        </motion.div>
        
        <h1 className="text-6xl font-bold text-amber-800 mb-4">
          Style
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Quiz
          </span>
        </h1>
        
        <p className="text-xl text-amber-700 mb-8 leading-relaxed">
          Discover your perfect style with our personalized fashion quiz. 
          Answer 10 simple questions and get outfit combinations tailored just for you!
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGetStarted}
          className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xl font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          Get Started
          <ArrowRight className="animate-pulse" />
        </motion.button>
        
        <div className="mt-12 grid grid-cols-3 gap-4 text-amber-600">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm">Personalized</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm">Quick & Easy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">👔</div>
            <p className="text-sm">Complete Outfits</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;