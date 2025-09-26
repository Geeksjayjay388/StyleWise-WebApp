import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Analyzing your style preferences...",
    "Matching colors to your skin tone...",
    "Curating perfect outfit combinations...",
    "Finalizing your personalized wardrobe...",
    "Almost ready! Putting finishing touches..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md w-full"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="text-6xl mb-8"
        >
          ✨
        </motion.div>
        
        <h2 className="text-3xl font-bold text-amber-800 mb-8">
          Creating Your Perfect Wardrobe
        </h2>
        
        <div className="mb-8">
          <div className="w-full bg-amber-200 h-3 rounded-full overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-amber-600 mt-2 font-semibold">{progress}%</p>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-amber-700 text-lg"
          >
            {messages[currentMessage]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;