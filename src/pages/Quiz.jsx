import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Quiz({ onComplete }) {
  const questions = [
    {
      question: "What's your go-to style for everyday wear?",
      options: ["Casual & Comfortable", "Chic & Polished", "Bold & Trendy", "Classic & Timeless"]
    },
    {
      question: "Which color palette speaks to you?",
      options: ["Neutral & Earth Tones", "Bright & Vibrant", "Dark & Moody", "Pastels & Soft"]
    },
    {
      question: "What's your ideal weekend outfit?",
      options: ["Jeans & T-shirt", "Sundress & Sandals", "Athleisure Set", "Blazer & Trousers"]
    },
    {
      question: "How do you like your clothes to fit?",
      options: ["Loose & Flowy", "Fitted & Structured", "Oversized & Cozy", "Tailored & Sharp"]
    },
    {
      question: "What's your favorite type of top?",
      options: ["Basic Tees", "Blouses & Shirts", "Crop Tops", "Sweaters & Knits"]
    },
    {
      question: "Which bottom do you reach for most?",
      options: ["Jeans", "Skirts & Dresses", "Shorts", "Trousers & Pants"]
    },
    {
      question: "What's your shoe preference?",
      options: ["Sneakers", "Heels", "Flats", "Boots"]
    },
    {
      question: "How do you accessorize?",
      options: ["Minimalist", "Statement Pieces", "Layered & Boho", "Classic & Simple"]
    },
    {
      question: "What's your ideal night out look?",
      options: ["Little Black Dress", "Jeans & Nice Top", "Jumpsuit", "Skirt & Blouse"]
    },
    {
      question: "Which fashion era inspires you?",
      options: ["Modern/Current", "90s Grunge", "70s Boho", "60s Mod"]
    }
  ];

  const skinTones = [
    "Light", "Medium Light", "Medium", "Medium Dark", "Dark"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedSkinTone, setSelectedSkinTone] = useState("");
  const [showSkinTone, setShowSkinTone] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSkinTone(true);
    }
  };

  const handleSkinToneSelect = (tone) => {
    setSelectedSkinTone(tone);
    setIsCompleted(true);
    onComplete({ answers, skinTone: tone });
  };

  if (isCompleted) return null;

  if (showSkinTone) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-6 pt-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-cyan-500/20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Choose Your Skin Tone
          </h2>
          <p className="text-gray-300 mb-8">
            This helps our AI recommend colors that complement you perfectly
          </p>
          
          <div className="space-y-3">
            {skinTones.map((tone, index) => (
              <motion.button
                key={tone}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                }}
                onClick={() => handleSkinToneSelect(tone)}
                className="w-full py-4 px-6 bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-600 hover:border-cyan-400/50 rounded-xl font-semibold text-white transition-all backdrop-blur-sm"
              >
                {tone}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-6 pt-24">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-cyan-500/20"
      >
        <div className="mb-8">
          <div className="flex justify-between text-gray-300 text-sm mb-4">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-10">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={option}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 25px rgba(6, 182, 212, 0.3)'
                  }}
                  onClick={() => handleAnswer(option)}
                  className="w-full py-5 px-6 text-left bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-600 hover:border-cyan-400/50 rounded-xl font-semibold text-white transition-all backdrop-blur-sm"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Quiz;
