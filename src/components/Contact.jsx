import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with the StyleAI team
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="text-gray-300">
                  <strong className="text-cyan-400">Email:</strong> Beckycherop363@gmail.com
                </div>
                <div className="text-gray-300">
                  <strong className="text-cyan-400">Support:</strong> jacobsihul911@gmail.com
                </div>
                <div className="text-gray-300">
                  <strong className="text-cyan-400">Phone:</strong> +254 7990
                  49979 | | +254 79478
                  7682
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="space-y-2 text-gray-300">
                <div>Instagram: @BeckyCherop || @Jayjaygeeks</div>
                
                <div>TikTok: @styleai</div>
              </div>
            </div> 
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Contact;