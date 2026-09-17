import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { VocabQuest } from './views/VocabQuest';
import { GovQuiz } from './views/GovQuiz';
import { StatesExplorer } from './views/StatesExplorer';
import { SpellingSparkle } from './views/SpellingSparkle';
import { Navbar } from './components/layout/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-display selection:bg-primary/20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocabquest" element={<VocabQuest />} />
            <Route path="/govquiz" element={<GovQuiz />} />
            <Route path="/states" element={<StatesExplorer />} />
            <Route path="/spelling" element={<SpellingSparkle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
