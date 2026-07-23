import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { language: currentLang, setLanguage: setCurrentLang } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages = ['EN', 'FR', 'AR'];

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'expertise', label: t.expertise },
    { id: 'skills', label: t.skills },
    { id: 'projects', label: t.projects },
    { id: 'certifications', label: t.certifications },
    { id: 'contact', label: t.contact }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#0F172A] py-4' 
          : isScrolled 
            ? 'bg-[#090E17]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center gap-4">
        
        {/* اللوجو: رجعنا المربع الذهبي (Y encadré) + dir="ltr" باش ما يتقلبش ف العربية */}
        <div className="flex items-center cursor-pointer flex-shrink-0 group" dir="ltr">
          <a 
            href="#" 
            className="flex items-center gap-3 relative whitespace-nowrap block"
          >
            {/* المربع الذهبي لي فيه حرف Y */}
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#D9A05B] to-[#8C6433] flex items-center justify-center shadow-[0_4px_15px_rgba(217,160,91,0.5)] group-hover:rotate-[15deg] group-hover:scale-105 transition-all duration-300 border border-[#f5c68b]/30">
              <span className="text-[#090E17] font-black text-2xl tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Y</span>
            </div>
            
            {/* السمية EL MAHMI بوحدها */}
            <div className="flex items-baseline" style={{ fontFamily: "'Playfair Display', serif" }}>
               <span className="text-white text-[1.3rem] font-black tracking-widest drop-shadow-sm">
                 EL MAHMI
               </span>
            </div>
          </a>
        </div>

        {/* روابط البيسي */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
          
          <div className="flex space-x-5 xl:space-x-7">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="font-medium text-[0.75rem] xl:text-[0.8rem] uppercase tracking-widest relative group transition-colors duration-500 text-gray-300 hover:text-white whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D9A05B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="w-px h-6 bg-white/10 flex-shrink-0"></div>

          {/* زر اللغات */}
          <div className="relative flex-shrink-0">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-[0.8rem] font-bold text-gray-300 hover:text-[#D9A05B] transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-[#D9A05B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentLang}
              <svg className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full right-0 mt-6 w-24 bg-[#0F172A] border border-white/5 shadow-2xl transition-all duration-300 ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCurrentLang(lang);
                    setIsLangOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
                    currentLang === lang ? 'text-[#D9A05B] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* زر التواصل */}
          <div className="flex-shrink-0">
            <a 
              href="#contact" 
              className={`inline-block px-6 xl:px-8 py-3 text-[0.75rem] xl:text-[0.8rem] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${
                isScrolled
                  ? 'bg-[#D9A05B] text-[#090E17] hover:bg-white hover:shadow-[0_0_20px_rgba(217,160,91,0.4)]'
                  : 'border border-[#D9A05B] text-[#D9A05B] hover:bg-[#D9A05B] hover:text-[#090E17]'
              }`}
            >
              {t.contactBtn}
            </a>
          </div>
        </div>

        {/* زر التليفون */}
        <div className="lg:hidden flex items-center flex-shrink-0">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-white transition-colors duration-500"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* قائمة التليفون */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px] py-6 opacity-100 bg-[#0F172A] border-t border-white/5 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-8 space-y-5">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#D9A05B] font-bold text-sm tracking-widest uppercase border-b border-white/5 pb-3 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          
          <div className="pt-2 pb-2">
            <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-bold mb-3">{t.selectLang}</p>
            <div className="flex gap-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCurrentLang(lang);
                    setIsOpen(false);
                  }}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                    currentLang === lang ? 'text-[#D9A05B] border-b-2 border-[#D9A05B] pb-1' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 bg-[#D9A05B] text-[#090E17] font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 w-full text-center whitespace-nowrap"
             >
               {t.contactBtn}
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;