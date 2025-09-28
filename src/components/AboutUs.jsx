import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stylewise AI</span>
          </h1>
          <p className="text-xl text-gray-300">
            Revolutionizing fashion with artificial intelligence
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Stylewise AI, we believe everyone deserves to look and feel their best. Our cutting-edge AI technology 
              analyzes your personal style preferences, skin tone, and lifestyle to create perfectly curated outfit 
              combinations that reflect your unique personality.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our advanced algorithm processes thousands of fashion combinations and trends, matching them to your 
              personal quiz responses. The result? A curated wardrobe that's uniquely yours, backed by data science 
              and fashion expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">The Future of Fashion</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're not just creating outfits – we're building the future of personalized fashion. Join thousands 
              of users who have already discovered their perfect style with Stylewise AI.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;