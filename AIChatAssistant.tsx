
import React, { useState, useRef, useEffect } from 'react';
import { askQuestion } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GRADIENT_PRIMARY, THEME_COLOR } from '../constants';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant IA de Robert. Posez-moi n\'importe quelle question sur son parcours.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const answer = await askQuestion(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: answer }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print" role="complementary" aria-label="Assistant de recrutement Robert KABA">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border-2 border-gray-300 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div style={{ background: GRADIENT_PRIMARY }} className="text-white p-5 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-robot text-xl" aria-hidden="true"></i>
              <span className="font-black tracking-tight">Recruiter Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-black/20 p-2 rounded-full focus:ring-2 focus:ring-white outline-none"
              aria-label="Fermer le chat"
            >
              <i className="fa-solid fa-times text-lg" aria-hidden="true"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-bold shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gray-900 text-white rounded-tr-none' 
                    : 'bg-white text-gray-900 border-2 border-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-gray-100 text-xs text-gray-800 font-black italic animate-pulse">
                  L'IA de Robert analyse votre demande...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t-2 border-gray-200 bg-white flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Pourquoi recruter Robert ?"
              className="flex-1 text-sm border-2 border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-800 font-bold"
              aria-label="Votre question"
            />
            <button 
              type="submit"
              className="bg-red-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-950 focus:ring-4 focus:ring-red-200 transition-all shadow-md"
              aria-label="Envoyer"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          style={{ background: GRADIENT_PRIMARY }}
          className="text-white p-5 rounded-full shadow-2xl hover:scale-105 focus:scale-105 focus:ring-4 focus:ring-red-300 transition-all flex items-center gap-3 border-2 border-white/20"
          aria-label="Ouvrir l'assistant de recrutement IA"
        >
          <i className="fa-solid fa-comments text-2xl" aria-hidden="true"></i>
          <span className="font-black text-sm pr-2 hidden sm:block">Besoin d'infos ?</span>
        </button>
      )}
    </div>
  );
};

export default AIChatAssistant;
