import { outfitCombinations } from './data/outfitData';
import HomePage from './pages/HomePage.jsx';
import Quiz from './pages/Quiz.jsx';
import LoadingScreen from './pages/LoadingScreen.jsx';
import Results from './pages/Results.jsx';
import Wardrobe from './pages/Wardrobe.jsx';
import { useState } from 'react';


function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizData, setQuizData] = useState(null);
  const [generatedOutfits, setGeneratedOutfits] = useState([]);

  const handleGetStarted = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (data) => {
    setQuizData(data);
    setCurrentScreen('loading');
  };

  const handleLoadingComplete = () => {
    // Generate outfits based on quiz answers (simplified logic)
    setGeneratedOutfits(outfitCombinations);
    setCurrentScreen('results');
  };

  const handleContinueToWardrobe = () => {
    setCurrentScreen('wardrobe');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setQuizData(null);
    setGeneratedOutfits([]);
  };

  return (
    <div className="relative">
      {currentScreen !== 'home' && (
        <button
          onClick={handleBackToHome}
          className="fixed top-6 left-6 z-50 bg-white text-amber-600 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
        >
          ← Start Over
        </button>
      )}
      
      {currentScreen === 'home' && (
        <HomePage onGetStarted={handleGetStarted} />
      )}
      
      {currentScreen === 'quiz' && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      
      {currentScreen === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentScreen === 'results' && (
        <Results
          quizData={quizData}
          generatedOutfits={generatedOutfits}
          onContinueToWardrobe={handleContinueToWardrobe}
        />
      )}
      
      {currentScreen === 'wardrobe' && (
        <Wardrobe savedOutfits={generatedOutfits} />
      )}
    </div>
  );
}

export default App;