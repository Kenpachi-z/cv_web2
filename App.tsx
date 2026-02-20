import React, { useState } from 'react';
import { RESUME_DATA, THEME_COLOR, GRADIENT_PRIMARY, GRADIENT_SUBTLE } from './constants';
import Sidebar from './Sidebar';
import profilePhoto from './photo.jpg';

const App: React.FC = () => {
  const [isAtsMode, setIsAtsMode] = useState(false);

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center sm:py-6 px-0 sm:px-4 font-sans text-slate-900 selection:bg-red-100">

      {/* Navigation */}
      <nav className="max-w-[210mm] w-full mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center no-print px-4 sm:px-0">
        <div className="flex bg-white p-1 rounded-lg border border-slate-300 shadow-sm">
          <button onClick={() => setIsAtsMode(false)} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${!isAtsMode ? 'bg-slate-900 text-white' : 'text-slate-500'}`}>Executive</button>
          <button onClick={() => setIsAtsMode(true)} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${isAtsMode ? 'bg-slate-900 text-white' : 'text-slate-500'}`}>Mode ATS</button>
        </div>
        <div className="flex gap-2">
          <button onClick={handlePrint} style={{ background: isAtsMode ? '#1e293b' : THEME_COLOR }} className="flex items-center gap-3 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
            <i className="fa-solid fa-file-pdf"></i> Imprimer / PDF
          </button>
        </div>
      </nav>

      {/* Container CV Format A4 */}
      <div className={`cv-container max-w-[210mm] min-h-[297mm] w-full bg-white shadow-2xl relative sm:rounded-sm flex flex-col ${isAtsMode ? 'overflow-visible' : 'overflow-hidden'}`}>

        {!isAtsMode && <div className="h-1.5 w-full shrink-0" style={{ background: THEME_COLOR }}></div>}

        {isAtsMode ? (
          <div className="p-10 sm:p-12 space-y-6 text-slate-900 font-sans">
            <header className="text-center border-b-2 border-slate-900 pb-4 mb-4">
              <h1 className="text-2xl font-bold mb-1 tracking-tight uppercase">{RESUME_DATA.name}</h1>
              <h2 className="text-md font-bold text-slate-700 uppercase mb-2 tracking-wide">{RESUME_DATA.title}</h2>
              <div className="text-[11px] font-bold flex flex-wrap justify-center gap-x-2 text-slate-800">
                <span>{RESUME_DATA.contact.location}</span> | <span>{RESUME_DATA.contact.phone}</span> | <span>{RESUME_DATA.contact.email}</span>
              </div>
            </header>
            <section>
              <h2 className="text-[12px] font-bold uppercase border-b border-slate-300 mb-2 pb-0.5">PROFIL PROFESSIONNEL</h2>
              <p className="text-[12px] leading-relaxed text-justify">{RESUME_DATA.profile}</p>
            </section>
            <section>
              <h2 className="text-[12px] font-bold uppercase border-b border-slate-300 mb-4 pb-0.5">EXPÉRIENCE PROFESSIONNELLE</h2>
              <div className="space-y-4">
                {RESUME_DATA.experiences.map((exp, i) => (
                  <article key={i}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-[12px] font-bold uppercase">{exp.title}</h3>
                      <span className="text-[11px] font-bold">{exp.period}</span>
                    </div>
                    <div className="text-[11px] font-bold text-slate-700 mb-1 italic uppercase tracking-wide">{exp.company}</div>
                    {exp.missions ? (
                      <div className="space-y-3 mt-2 ml-4">
                        {exp.missions.map((mission, mi) => (
                          <div key={mi}>
                            <div className="text-[11px] font-bold uppercase text-slate-800 mb-0.5">
                              {mission.title} — {mission.client} ({mission.period})
                            </div>
                            <ul className="list-disc ml-5 space-y-0.5">
                              {mission.highlights.map((h, j) => (
                                <li key={j} className="text-[11px] leading-snug">{h}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="list-disc ml-5 space-y-0.5">
                        {exp.highlights?.map((h, j) => (
                          <li key={j} className="text-[11px] leading-snug">{h}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row print-layout flex-1 overflow-visible">
            <main className="main-col flex-1 p-6 sm:p-10 overflow-visible bg-white">

              <header className="flex flex-col sm:flex-row gap-8 items-start mb-10">
                <div className="w-32 h-44 flex-shrink-0 rounded-xl shadow-lg relative overflow-hidden border border-slate-100">
                  <img src={profilePhoto} alt={RESUME_DATA.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pt-4">
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2 leading-none">{RESUME_DATA.name}</h1>
                  <h2 className="text-md font-bold mb-6 leading-tight max-w-[420px]" style={{ color: THEME_COLOR }}>{RESUME_DATA.title}</h2>
                  <div className="h-1 w-full max-w-[380px] rounded-full" style={{ background: GRADIENT_PRIMARY }}></div>
                </div>
              </header>

              <section className="mb-10">
                <div className="bg-slate-50 border-l-[4px] p-6 rounded-r-2xl relative overflow-hidden" style={{ borderLeftColor: THEME_COLOR }}>
                  <i className="fa-solid fa-quote-right absolute top-2 right-4 text-7xl opacity-[0.07] pointer-events-none" style={{ color: THEME_COLOR }}></i>
                  <p className="text-slate-800 leading-relaxed text-[13px] font-semibold italic relative z-10">"{RESUME_DATA.profile}"</p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900">Expériences</h2>
                  <div className="h-[1px] flex-1" style={{ background: GRADIENT_SUBTLE }}></div>
                </div>
                <div className="space-y-10 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-100" aria-hidden="true"></div>
                  {RESUME_DATA.experiences.map((exp, idx) => (
                    <article key={idx} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: THEME_COLOR }}></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1">
                        <h3 className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">{exp.title}</h3>
                        <span className="text-[10px] font-black text-white px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm" style={{ background: GRADIENT_PRIMARY }}>{exp.period}</span>
                      </div>
                      <div className="font-bold mb-3 text-[12px] tracking-widest uppercase" style={{ color: THEME_COLOR }}>{exp.company}</div>
                      {exp.missions ? (
                        <div className="mt-6 space-y-6">
                          {exp.missions.map((mission, mi) => (
                            <div key={mi} className="relative group">
                              <div className="mb-2">
                                <h4 className="text-[14px] font-black text-slate-800 leading-tight">{mission.title}</h4>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-wider">
                                  <span className="text-red-900">{mission.client}</span>
                                  <span className="opacity-30">•</span>
                                  <span>{mission.period}</span>
                                </div>
                              </div>
                              <ul className="space-y-1.5">
                                {mission.highlights.map((point, pIdx) => (
                                  <li key={pIdx} className="text-slate-700 text-[12px] font-medium leading-tight flex gap-2">
                                    <i className="fa-solid fa-caret-right mt-1 text-[8px] opacity-40"></i>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {exp.highlights?.map((point, pIdx) => (
                            <li key={pIdx} className="text-slate-700 text-[12px] font-medium leading-tight flex gap-2">
                              <i className="fa-solid fa-caret-right mt-1 text-[8px] opacity-40"></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            </main>

            <aside className="side-col w-full sm:w-[32%] bg-slate-50 p-6 sm:p-8 border-l border-slate-200 shadow-inner">
              <Sidebar />
            </aside>
          </div>
        )}
      </div>

      <footer className="mt-8 text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] text-center pb-8 no-print">
        {RESUME_DATA.name} • Portfolio Digital A4 Standard
      </footer>
    </div>
  );
};

export default App;
