import { GoogleGenAI, Type, Modality } from "@google/genai";
import { VocabWord } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSpeech = async (text: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio || null;
  } catch (error) {
    console.error("Error generating speech:", error);
    return null;
  }
};

export const generateVocabData = async (rawWords: string[]): Promise<VocabWord[]> => {
  if (rawWords.length === 0) return [];
  if (!process.env.API_KEY) {
    console.warn("No API Key found. Returning mock data.");
    return [];
  }

  const prompt = `
    I have a list of vocabulary words for a 10-year-old student.
    Words: ${rawWords.join(', ')}.

    For EACH word, generate a JSON object with:
    1. The word itself.
    2. A clear, age-appropriate definition.
    3. An array of 3 DIFFERENT sentences using the word (use "______" for the word).
    4. An array of 3 Synonyms.
    5. An array of 3 Antonyms.
    6. 3 "Distractors" (fake definitions).
    
    LENGTH RULES FOR DEFINITION DISTRACTORS:
    - One distractor must be MUCH LONGER than the correct definition.
    - One distractor must be MUCH SHORTER than the correct definition.
    - One distractor must be SIMILAR in length.

    Return ONLY a JSON array.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              definition: { type: Type.STRING },
              sentences: { type: Type.ARRAY, items: { type: Type.STRING } },
              synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
              antonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
              distractors: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    const parsed = JSON.parse(text);

    return parsed.map((item: any, index: number) => ({
      id: `${Date.now()}-${index}`,
      word: item.word,
      definition: item.definition,
      sentences: item.sentences,
      synonyms: item.synonyms,
      antonyms: item.antonyms,
      distractors: item.distractors,
      masteryLevel: 0
    }));

  } catch (error) {
    console.error("Error generating vocab data:", error);
    throw new Error("Failed to generate word data. Please check your API key.");
  }
};