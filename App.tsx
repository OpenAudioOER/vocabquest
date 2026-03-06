import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { VocabQuest } from './views/VocabQuest';
import { Navbar } from './components/layout/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
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
