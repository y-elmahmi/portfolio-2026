import React from 'react';
// 1. استيراد أدوات الترجمة
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Research = () => {
  // 2. استخراج اللغة الحالية ونصوص المشاريع
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#FAFAFA] text-[#090E17] relative overflow-hidden">
      
      {/* زخرفة زليج خفيفة جداً للوراء ف سيكسيون البيضاء */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, #090E17 25%, transparent 25%, transparent 75%, #090E17 75%, #090E17), repeating-linear-gradient(45deg, #090E17 25%, #FAFAFA 25%, #FAFAFA 75%, #090E17 75%, #090E17)`, 
          backgroundPosition: `0 0, 20px 20px`, 
          backgroundSize: `40px 40px` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10" dir={language === 'AR' ? 'rtl' : 'ltr'}>
        
        {/* العنوان الفوقاني */}
        <p className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase mb-3 text-center">
          {t.badge}
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          {t.title1} <span className="font-black text-[#D9A05B]">{t.title2}</span>
        </h2>

        {/* الكارطات ديال المشاريع (Research Cards Style) */}
        <div className="space-y-12">
          
          {/* مشروع 1: FinDawa */}
          <div className="bg-white p-10 border border-black/5 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-l-[#D9A05B] rtl:border-r-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj1.tag1}</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj1.tag2}</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.proj1.title}
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              {t.proj1.meta}
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              {t.proj1.description}
            </p>
          </div>

          {/* مشروع 2: OrdoSense IA */}
          <div className="bg-white p-10 border border-black/5 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-l-[#D9A05B] rtl:border-r-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj2.tag1}</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj2.tag2}</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.proj2.title}
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              {t.proj2.meta}
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              {t.proj2.description}
            </p>
          </div>

          {/* مشروع 3: IntentTrials */}
          <div className="bg-white p-10 border border-black/5 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-l-[#D9A05B] rtl:border-r-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj3.tag1}</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">{t.proj3.tag2}</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.proj3.title}
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              {t.proj3.meta}
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              {t.proj3.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;