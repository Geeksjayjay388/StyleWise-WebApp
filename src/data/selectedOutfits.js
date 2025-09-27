import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Shirt, Eye, Menu, X, Sparkles, Zap, Target } from 'lucide-react';

// Comprehensive outfit database
const OUTFIT_DATABASE = [
  {
    id: 'neon-night',
    name: 'Neon Night',
    description: 'Electric vibes for night adventures',
    tags: ['Bold', 'Night', 'Electric'],
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    category: 'trendy',
    season: 'all',
    colors: ['neon', 'dark'],
    style: 'bold'
  },
  {
    id: 'cyber-chic',
    name: 'Cyber Chic',
    description: 'Futuristic style meets everyday comfort',
    tags: ['Futuristic', 'Chic', 'Modern'],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    category: 'modern',
    season: 'all',
    colors: ['blue', 'black'],
    style: 'fitted'
  },
  {
    id: 'midnight-elegance',
    name: 'Midnight Elegance',
    description: 'Sophisticated darkness with subtle glow',
    tags: ['Elegant', 'Dark', 'Sophisticated'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    category: 'classic',
    season: 'all',
    colors: ['black', 'white'],
    style: 'tailored'
  },
  {
    id: 'blue-wave',
    name: 'Blue Wave',
    description: 'Ocean depths meet urban style',
    tags: ['Cool', 'Blue', 'Wave'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    category: 'casual',
    season: 'summer',
    colors: ['blue', 'white'],
    style: 'loose'
  },
  {
    id: 'neon-casual',
    name: 'Neon Casual',
    description: 'Bright accents for everyday adventures',
    tags: ['Casual', 'Bright', 'Fun'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    category: 'casual',
    season: 'spring',
    colors: ['neon', 'neutral'],
    style: 'loose'
  },
  {
    id: 'electric-formal',
    name: 'Electric Formal',
    description: 'Professional with an electric edge',
    tags: ['Formal', 'Electric', 'Professional'],
    image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&w=800&q=80',
    category: 'formal',
    season: 'all',
    colors: ['blue', 'black'],
    style: 'tailored'
  },
  {
    id: 'neon-sport',
    name: 'Neon Sport',
    description: 'High-energy athletic wear with glow',
    tags: ['Athletic', 'Neon', 'Energy'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    category: 'athleisure',
    season: 'all',
    colors: ['neon', 'dark'],
    style: 'fitted'
  },
  {
    id: 'dark-minimalist',
    name: 'Dark Minimalist',
    description: 'Less is more in sophisticated black',
    tags: ['Minimalist', 'Dark', 'Clean'],
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    category: 'minimal',
    season: 'all',
    colors: ['black', 'white'],
    style: 'fitted'
  },
  {
    id: 'blue-gradient',
    name: 'Blue Gradient',
    description: 'Flowing blues from sky to ocean',
    tags: ['Gradient', 'Blue', 'Flowing'],
    image: 'https://images.unsplash.com/photo-1520975710010-7f4f0d4bfa3d?auto=format&fit=crop&w=800&q=80',
    category: 'trendy',
    season: 'summer',
    colors: ['blue', 'white'],
    style: 'loose'
  },
  {
    id: 'cyber-street',
    name: 'Cyber Street',
    description: 'Street style meets digital future',
    tags: ['Street', 'Cyber', 'Urban'],
    image: 'https://images.unsplash.com/photo-1503342452485-86f8f9d98b43?auto=format&fit=crop&w=800&q=80',
    category: 'streetwear',
    season: 'all',
    colors: ['neon', 'black'],
    style: 'oversized'
  },
  {
    id: 'white-electric',
    name: 'White Electric',
    description: 'Pure white with electric blue accents',
    tags: ['White', 'Electric', 'Pure'],
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    category: 'modern',
    season: 'summer',
    colors: ['white', 'blue'],
    style: 'fitted'
  },
  {
    id: 'neon-layer',
    name: 'Neon Layer',
    description: 'Layered textures with neon highlights',
    tags: ['Layered', 'Neon', 'Textured'],
    image: 'https://images.unsplash.com/photo-1533674689012-402e6e681f8f?auto=format&fit=crop&w=800&q=80',
    category: 'layered',
    season: 'fall',
    colors: ['neon', 'dark'],
    style: 'oversized'
  }
];

// Improved algorithm to select personalized outfits
const generatePersonalizedOutfits = (quizAnswers, skinTone) => {
  const styleMapping = {
    'Casual & Comfortable': ['casual', 'athleisure'],
    'Chic & Polished': ['modern', 'formal'],
    'Bold & Trendy': ['trendy', 'streetwear'],
    'Classic & Timeless': ['classic', 'minimal']
  };

  const colorMapping = {
    'Neutral & Earth Tones': ['neutral', 'dark'],
    'Bright & Vibrant': ['neon', 'blue'],
    'Dark & Moody': ['black', 'dark'],
    'Pastels & Soft': ['white', 'blue']
  };

  const fitMapping = {
    'Loose & Flowy': ['loose'],
    'Fitted & Structured': ['fitted', 'tailored'],
    'Oversized & Cozy': ['oversized'],
    'Tailored & Sharp': ['tailored']
  };

  // Extract user preferences
  const preferredStyles = styleMapping[quizAnswers[0]] || ['casual'];
  const preferredColors = colorMapping[quizAnswers[1]] || ['neutral'];
  const preferredFits = fitMapping[quizAnswers[3]] || ['fitted'];

  // Score each outfit based on user preferences
  const scoredOutfits = OUTFIT_DATABASE.map(outfit => {
    let score = 0;
    
    // Style preference
    if (preferredStyles.some(style => outfit.category === style)) score += 3;
    
    // Color preference
    if (preferredColors.some(color => outfit.colors.includes(color))) score += 2;
    
    // Fit preference
    if (preferredFits.includes(outfit.style)) score += 2;
    
    // Skin tone compatibility (simplified)
    if (skinTone === 'Dark' && outfit.colors.includes('neon')) score += 1;
    if (skinTone === 'Light' && outfit.colors.includes('blue')) score += 1;
    
    return { ...outfit, score };
  });

  // Sort by score and return top 4 unique outfits
  const selectedOutfits = scoredOutfits
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(outfit => ({
      ...outfit,
      id: `${outfit.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }));

  return selectedOutfits;
};
export default OUTFIT_DATABASE;
export { generatePersonalizedOutfits };;