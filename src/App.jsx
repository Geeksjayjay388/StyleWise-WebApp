import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Wardrobe from './pages/Wardrobe';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import LoadingScreen from './pages/LoadingScreen';
import selectedOutfits, { generatePersonalizedOutfits } from './data/selectedOutfits.js';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [quizData, setQuizData] = useState(null);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuizComplete = (data) => {
    setQuizData(data);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setCurrentView('results');
  };

  const handleContinueToWardrobe = () => {
    if (quizData) {
      const personalizedOutfits = generatePersonalizedOutfits(quizData.answers, quizData.skinTone);
      setSavedOutfits(personalizedOutfits);
    }
    setCurrentView('wardrobe');
  };

  const handleGetStarted = () => {
    setCurrentView('quiz');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === 'home' && <HomePage onGetStarted={handleGetStarted} />}
      {currentView === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {currentView === 'results' && quizData && (
        <Results quizData={quizData} onContinueToWardrobe={handleContinueToWardrobe} />
      )}
      {currentView === 'wardrobe' && <Wardrobe savedOutfits={savedOutfits} />}
      {currentView === 'about' && <AboutUs />}
      {currentView === 'contact' && <Contact />}
    </div>
  );
}

export default App;