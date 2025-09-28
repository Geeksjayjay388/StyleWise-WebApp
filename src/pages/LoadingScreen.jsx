import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "🔍 Analyzing your style DNA...",
    "🎨 Matching colors to your skin tone...",
    "✨ AI curating perfect combinations...",
    "🤖 Processing fashion algorithms...",
    "🎯 Finalizing your personalized wardrobe...",
    "⚡ Almost ready! Adding electric touches..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1800);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-lg w-full relative z-10"
      >
        {/* Animated AI Brain Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            filter: [
              'hue-rotate(0deg) brightness(1)',
              'hue-rotate(180deg) brightness(1.2)',
              'hue-rotate(360deg) brightness(1)'
            ]
          }}
          transition={{ 
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
            filter: { duration: 3, repeat: Infinity }
          }}
          className="text-8xl mb-8 relative"
        >
          <div className="relative">
            <span className="absolute inset-0 text-8xl blur-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent opacity-50">
              🧠
            </span>
            <span className="relative text-8xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              🧠
            </span>
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-2"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Stylewise AI
          </span>{' '}
          Working...
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mb-12 text-lg"
        >
          Creating your perfect wardrobe with artificial intelligence
        </motion.p>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700/50 h-4 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/50">
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                backgroundSize: '200% 100%'
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: `${progress}%`,
                backgroundPosition: ['0% 0%', '200% 0%']
              }}
              transition={{ 
                width: { duration: 0.3 },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </motion.div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400 font-bold text-lg"
            >
              {progress.toFixed(0)}%
            </motion.p>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Loading Messages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 30, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -30, rotateX: -90 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-xl font-medium bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20"
          >
            {messages[currentMessage]}
          </motion.div>
        </AnimatePresence>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [Math.random() * 400, Math.random() * 400],
                y: [Math.random() * 300, Math.random() * 300],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;