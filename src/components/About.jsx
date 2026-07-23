import React from 'react';
import profileImg from '../assets/profile.png';
// 1. استيراد أدوات الترجمة
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const About = () => {
  // 2. كنجبدو اللغة لي ختار اليوزر والنصوص ديال قسم about
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-[#090E17] text-white overflow-hidden">
      
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, #D9A05B 25%, transparent 25%, transparent 75%, #D9A05B 75%, #D9A05B), repeating-linear-gradient(45deg, #D9A05B 25%, #090E17 25%, #090E17 75%, #D9A05B 75%, #D9A05B)`, 
          backgroundPosition: `0 0, 20px 20px`, 
          backgroundSize: `40px 40px` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        {/* الجزء ديال اليسار: الصورة ديالك مقادة ومسنطرة */}
        <div className="w-full md:w-4/12 relative flex justify-center">
          
          {/* زوايا نحاسية/ذهبية */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D9A05B] z-20"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D9A05B] z-20"></div>
          
          <div className="bg-[#0F172A] p-3 border border-white/5 shadow-2xl relative z-10 w-full max-w-[350px]">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={profileImg} 
                alt="Youssef El Mahmi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* الجزء ديال اليمين: التيكست المترجم */}
        <div className="w-full md:w-8/12">
          {/* هنا بدلنا التيكست الإنجليزي بـ t.badge */}
          <p className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase mb-3">
            {t.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.title1} <span className="font-black text-[#D9A05B]">{t.title2}</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-[1.05rem] font-light">
            <p>
              {t.p1_part1}<strong className="text-white font-medium">{t.p1_bold1}</strong>{t.p1_part2}<strong className="text-[#D9A05B] font-medium">{t.p1_bold2}</strong>{t.p1_part3}
            </p>
            <p>
              {t.p2}
            </p>
            <p>
              {t.p3_part1}<strong className="text-white font-medium">{t.p3_bold1}</strong>{t.p3_part2}<strong className="text-white font-medium">{t.p3_bold2}</strong>{t.p3_part3}
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-12">
            <div>
              <h4 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.stat1Title}</h4>
              <p className="text-xs text-[#D9A05B] tracking-widest mt-2 uppercase font-bold">{t.stat1Desc}</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.stat2Title}</h4>
              <p className="text-xs text-[#D9A05B] tracking-widest mt-2 uppercase font-bold">{t.stat2Desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;