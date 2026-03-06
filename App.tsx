import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { VocabQuest } from './views/VocabQuest';
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
