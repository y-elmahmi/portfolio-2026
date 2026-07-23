import React from 'react';
import { motion } from 'framer-motion';
// 1. استيراد أدوات الترجمة
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Expertise = () => {
  // 2. كنجبدو اللغة لي ختار اليوزر والنصوص ديال قسم expertise
  const { language } = useLanguage();
  const t = translations[language].expertise;

  // الداتا دابا كتجي من ملف الترجمة مباشرة
  const experiences = [
    t.exp1,
    t.exp2,
    t.exp3
  ];

  return (
    <section id="expertise" className="relative py-24 px-6 md:px-12 bg-[#090E17] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* العناوين المترجمة */}
        <div className="text-center mb-16">
          <span className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase">{t.badge}</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.title1} <span className="font-black text-[#D9A05B]">{t.title2}</span>
          </h2>
        </div>

        {/* Timeline Container */}
        {/* dir="ltr" باش الكارطات يبقاو ديما مقادين: وحدة ف اليمين ووحدة ف اليسار */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0" dir="ltr">
          
          {/* الخط الزمني الوسطاني (كيبان غير ف البيسي) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* النقطة ديال الـ Timeline */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-[#D9A05B] rounded-full transform md:-translate-x-1/2 shadow-[0_0_10px_#D9A05B]"></div>

                {/* نص الكارطة */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0">
                  <div 
                    className={`bg-[#0F172A] p-8 border border-white/5 hover:border-[#D9A05B]/30 transition-all duration-300 relative group ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}
                    // باش الكتابة لداخل تتقاد من اليمين فاش تكون العربية
                    dir={language === 'AR' ? 'rtl' : 'ltr'}
                  >
                    
                    <span className="inline-block px-3 py-1 bg-white/5 text-[#D9A05B] text-xs font-bold uppercase tracking-widest mb-4">
                      {exp.type}
                    </span>
                    
                    <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{exp.role}</h3>
                    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                      <span className="text-gray-300 font-medium">{exp.company}</span>
                      <span className="text-sm text-gray-500 font-bold tracking-wider">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;