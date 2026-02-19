
import React, { useState } from 'react';
import { generateCoverLetter } from '../services/geminiService';

const CoverLetterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [jd, setJd] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!jd.trim()) return;
    setLoading(true);
    const text = await generateCoverLetter(jd);
    setResult(text);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('Copié dans le presse-papier !');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 no-print">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Générateur de Lettre de Motivation (IA)</h2>
            <p className="text-sm text-gray-500">Adaptez Robert au poste en un clic</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!result ? (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Collez l'offre d'emploi ici :</label>
              <textarea
                className="w-full h-40 border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
                placeholder="Ex: Nous recherchons un Product Owner avec de l'expérience en Agile et Jira..."
                value={jd}
                onChange={(e) => setJd(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors disabled:bg-gray-400"
              >
                {loading ? <i className="fa-solid fa-spinner fa-spin mr-2"></i> : <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>}
                {loading ? "Rédaction en cours..." : "Générer la lettre"}
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-red-50 border border-red-100 p-6 rounded-xl text-gray-800 whitespace-pre-wrap text-sm leading-relaxed font-serif">
                {result}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setResult('')}
                  className="flex-1 border border-gray-300 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50"
                >
                  Recommencer
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 bg-gray-900 text-white py-2 rounded-xl text-sm font-semibold hover:bg-black"
                >
                  <i className="fa-solid fa-copy mr-2"></i> Copier
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverLetterModal;
