import React, { useState } from 'react';
import { VocabWord } from '../../types';
import { generateVocabData } from '../../services/geminiService';
import { Button } from '../ui/Button';
import { Trash2, Loader2, Save } from 'lucide-react';

interface WordManagerProps {
  currentWords: VocabWord[];
  onUpdateWords: (words: VocabWord[]) => void;
  onClose: () => void;
}

export const WordManager: React.FC<WordManagerProps> = ({ currentWords, onUpdateWords, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError('');
    
    // Split by comma or newline
    const rawWords = input.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
    
    if (rawWords.length === 0) {
      setLoading(false);
      return;
    }

    try {
      const newWords = await generateVocabData(rawWords);
      onUpdateWords([...currentWords, ...newWords]);
      setInput('');
    } catch (err: any) {
      setError(err.message || 'Failed to generate words.');
    } finally {
      setLoading(false);
    }
  };

  const deleteWord = (id: string) => {
    onUpdateWords(currentWords.filter(w => w.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black text-indigo-300">Parent Zone: Word Manager</h2>
        <Button variant="secondary" onClick={onClose}>Exit Parent Zone</Button>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl mb-8 border border-slate-700">
        <h3 className="text-xl font-bold mb-4">Add New Words</h3>
        <p className="text-slate-400 text-sm mb-4">
          Enter vocabulary words (comma or new line separated). <br/>
          <span className="text-indigo-400">Gemini AI</span> will automatically generate definitions, sentences, and quiz options!
        </p>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., ecstatic, melancholy, boisterous..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 h-32"
        />

        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

        <Button onClick={handleGenerate} disabled={loading} className="w-full md:w-auto">
          {loading ? <><Loader2 className="animate-spin" /> Generating Magic...</> : <><Save size={18}/> Generate Content</>}
        </Button>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-bold mb-4">Current Vocabulary List ({currentWords.length})</h3>
        
        {currentWords.length === 0 ? (
          <div className="text-slate-500 text-center py-8">No words added yet. Add some above!</div>
        ) : (
          <div className="space-y-4">
            {currentWords.map(word => (
              <div key={word.id} className="bg-slate-900 p-4 rounded-xl flex justify-between items-start group">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-lg text-indigo-300">{word.word}</h4>
                    <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                      Mastery: {word.masteryLevel}%
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm italic">{word.definition}</p>
                  <p className="text-slate-500 text-xs mt-1">"{word.sentence}"</p>
                </div>
                <button 
                  onClick={() => deleteWord(word.id)}
                  className="text-slate-600 hover:text-red-400 transition-colors p-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};