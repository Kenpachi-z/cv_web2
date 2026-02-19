
import React from 'react';
import { RESUME_DATA, THEME_COLOR, GRADIENT_PRIMARY } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Section Contact */}
      <section aria-labelledby="side-contact">
        <h3 id="side-contact" className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-6 flex items-center gap-2">
          Contact
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </h3>
        <ul className="space-y-4 text-[12px] font-bold text-slate-800">
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-800 border border-slate-100 flex-shrink-0">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            </div>
            <span>{RESUME_DATA.contact.location}</span>
          </li>
          <li>
            <a href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-red-800 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-800 border border-slate-100 flex-shrink-0 group-hover:border-red-300">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
              </div>
              <span>{RESUME_DATA.contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-3 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-red-800 border border-slate-100 flex-shrink-0 group-hover:border-red-300">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </div>
              <span className="break-all text-[12px] font-semibold tracking-tight text-slate-700 group-hover:text-red-800 transition-colors">
                {RESUME_DATA.contact.email}
              </span>
            </a>
          </li>
          <li>
            <a 
              href={`https://${RESUME_DATA.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100 flex-shrink-0 group-hover:border-red-300 group-hover:shadow-md" style={{ color: THEME_COLOR }}>
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </div>
              <div className="relative">
                <span className="text-slate-900 font-black">
                  {RESUME_DATA.name}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: GRADIENT_PRIMARY }}></div>
              </div>
            </a>
          </li>
        </ul>
      </section>

      {/* Expertise Section */}
      <section aria-labelledby="side-skills">
        <h3 id="side-skills" className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-6 flex items-center gap-2">
          Expertise
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </h3>
        <div className="space-y-6">
          {RESUME_DATA.skills.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-[10px] font-black text-red-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                <i className="fa-solid fa-circle text-[4px]"></i>
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-white text-slate-900 text-[11px] font-black rounded-md border border-slate-200 shadow-sm transition-all hover:border-red-800 hover:shadow-md cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section aria-labelledby="side-soft-skills">
        <h3 id="side-soft-skills" className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-6 flex items-center gap-2">
          Soft Skills
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </h3>
        <div className="space-y-3">
          {RESUME_DATA.softSkills.map((skill, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F9FA] p-3 relative shadow-sm text-[12px] font-bold text-slate-800 leading-tight flex items-center overflow-hidden rounded-r-md"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: GRADIENT_PRIMARY }}></div>
              <div className="pl-2">{skill}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Formation */}
      <section aria-labelledby="side-edu">
        <h3 id="side-edu" className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-6 flex items-center gap-2">
          Formation
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </h3>
        <div className="space-y-6">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="relative pl-5">
              <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-full" style={{ background: GRADIENT_PRIMARY }}></div>
              <div className="font-black text-[13px] uppercase text-slate-900 leading-tight mb-1.5">{edu.degree}</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-tight leading-snug">
                {edu.school}
                <div className="text-red-900 mt-1.5 font-black text-[14px] tracking-widest">{edu.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section aria-labelledby="side-lang">
        <h3 id="side-lang" className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-4 flex items-center gap-2">
          Langues
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </h3>
        <div className="space-y-4 text-[11px] font-black text-slate-800">
           <div className="flex flex-col gap-1">
             <div className="flex justify-between items-center">
               <span>FRANÇAIS</span>
               <span className="text-red-900">COURANT</span>
             </div>
           </div>
           <div className="flex flex-col gap-1">
             <div className="flex justify-between items-center">
               <span>ANGLAIS</span>
               <span className="text-red-900">B1 (TECHNIQUE)</span>
             </div>
             <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Lu et écrit</div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
