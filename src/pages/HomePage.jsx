import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Sparkles } from 'lucide-react';

function HomePage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6 pt-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 180, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-8xl mb-8"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ✨
            </span>
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mx-4">
              👗
            </span>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              ✨
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl sm:text-8xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Style</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Discover your perfect style with our AI-powered fashion quiz.
            <br className="hidden sm:block" />
            <span className="text-cyan-400 font-semibold">Personalized. Electric. Unforgettable.</span>
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl sm:text-2xl font-bold px-12 py-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 mx-auto mb-16 border border-cyan-400/30"
          >
            Start Your Journey
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight size={28} />
            </motion.div>
          </motion.button>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'AI Personalized', desc: 'Smart recommendations' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Results in seconds' },
              { icon: Sparkles, title: 'Electric Style', desc: 'Cutting-edge fashion' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(6, 182, 212, 0.1)'
                }}
                className="flex flex-col items-center p-6 rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-300"
              >
                <feature.icon size={48} className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
