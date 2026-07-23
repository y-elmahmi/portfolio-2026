import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Certifications = () => {
  const { language } = useLanguage();
  const t = translations[language].certifications;

  const education = t.edu;
  const certifications = t.certs;

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 bg-[#0F172A] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" dir={language === 'AR' ? 'rtl' : 'ltr'}>
        
        <div className="text-center mb-20">
          <span className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase">{t.badge}</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.title1} <span className="font-black text-[#D9A05B]">{t.title2}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* العمود الأول: المسار الأكاديمي (Timeline) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[#D9A05B] text-3xl">🎓</span> {t.eduTitle}
            </h3>
            
            <div className="relative rtl:border-r rtl:border-l-0 ltr:border-l ltr:border-r-0 border-white/10 rtl:mr-3 ltr:ml-3 space-y-10">
              {education.map((item, index) => (
                <motion.div 
                  key={`${language}-edu-${index}`}
                  initial={{ opacity: 0, x: language === 'AR' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rtl:pr-8 ltr:pl-8"
                >
                  <div className={`absolute rtl:right-[-6px] ltr:left-[-6px] top-1.5 w-3 h-3 rounded-full ${index === 0 ? 'bg-[#D9A05B] shadow-[0_0_10px_#D9A05B]' : 'bg-gray-600'}`}></div>
                  
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-1 flex-wrap gap-2">
                      <span className="text-[#D9A05B] text-xs font-bold tracking-widest uppercase">
                        {item.period}
                      </span>
                      <span className="text-[0.65rem] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400 uppercase tracking-wider">
                        {index === 0 ? t.statusEnCours : t.statusValide}
                      </span>
                    </div>
                    <h4 className="text-[1.1rem] font-bold text-white leading-tight mb-1">
                      {item.degree}
                    </h4>
                    <span className="text-gray-400 text-sm font-medium mb-2">
                      {item.institution}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* العمود الثاني: الشواهد والجوائز (Cards) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[#D9A05B] text-3xl">📜</span> {t.certTitle}
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={`${language}-cert-${index}`}
                  initial={{ opacity: 0, x: language === 'AR' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#090E17] p-6 border border-white/5 hover:border-[#D9A05B]/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="text-[1.1rem] font-bold text-white group-hover:text-[#D9A05B] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {cert.title}
                    </h4>
                    <span className="text-gray-500 text-xs font-bold tracking-widest bg-white/5 px-2 py-1 rounded whitespace-nowrap rtl:mr-auto ltr:ml-auto">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[#D9A05B] text-xs font-bold uppercase tracking-widest mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;