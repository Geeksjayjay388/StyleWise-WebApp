import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Eye, ArrowRight, Shirt } from 'lucide-react';

// Complete outfit combinations data
const outfitCombinations = [
  {
    id: 1,
    name: "Casual Chic",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
    description: "Perfect for everyday comfort with style",
    tags: ["Casual", "Comfortable", "Versatile"]
  },
  {
    id: 2,
    name: "Professional Power",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    description: "Command the boardroom with confidence",
    tags: ["Professional", "Elegant", "Confident"]
  },
  {
    id: 3,
    name: "Weekend Vibes",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop",
    description: "Relaxed and stylish for your days off",
    tags: ["Relaxed", "Fun", "Comfortable"]
  },
  {
    id: 4,
    name: "Night Out Glam",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    description: "Turn heads wherever you go",
    tags: ["Glamorous", "Bold", "Statement"]
  },
  {
    id: 5,
    name: "Boho Dreams",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&h=600&fit=crop",
    description: "Free-spirited and effortlessly beautiful",
    tags: ["Bohemian", "Artistic", "Flowing"]
  },
  {
    id: 6,
    name: "Street Smart",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
    description: "Urban edge meets modern comfort",
    tags: ["Urban", "Edgy", "Modern"]
  }
];

export { outfitCombinations };