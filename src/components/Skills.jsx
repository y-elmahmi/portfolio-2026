import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillsData = [
    {
      category: t.cat1,
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'LLMs & GenAI', 'NLP (SpaCy)', 'Réseaux de Neurones'],
    },
    {
      category: t.cat2,
      skills: ['Prog. Linéaire & Non-Linéaire', 'Optimisation Multiobjectif', 'Théorie de la Dualité', 'Algorithmes de Graphes', 'Modèles de la RO', 'Métaheuristiques'],
    },
    {
      category: t.cat3,
      skills: ['Modèles Statistiques', 'Optimisation Stochastique', 'Régression Logistique', 'Probabilités Appliquées', 'Science de la Décision', 'Data Analytics'],
    },
    {
      category: t.cat4,
      skills: ['Python & React', 'Architecture MVC', 'Cloud Computing', 'Sécurité des Données', 'Bases de Données', 'Git & CI/CD'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  };

  const SkillCard = ({ category, skills }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -8,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        className="group relative bg-[#0F172A] border border-white/5 rounded-2xl p-6 h-fit shadow-sm hover:shadow-2xl hover:shadow-[#D9A05B]/10 transition-all duration-500"
        dir={language === 'AR' ? 'rtl' : 'ltr'}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D9A05B]/0 via-[#D9A05B]/0 to-[#D9A05B]/0 group-hover:from-[#D9A05B]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        <div className="relative z-10">
          <h3 className="text-[1.1rem] font-bold text-white mb-5 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            {category}
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <motion.button
                key={idx}
                variants={skillPillVariants}
                initial="initial"
                whileHover="hover"
                className="px-3 py-1.5 text-[0.75rem] font-medium text-gray-300 bg-white/5 hover:bg-[#D9A05B]/10 border border-white/10 hover:border-[#D9A05B]/40 rounded-full transition-all duration-300 cursor-default select-none hover:text-[#D9A05B] uppercase tracking-wider"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative w-full bg-[#090E17] py-24 overflow-hidden border-t border-white/5">
      
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, #D9A05B 25%, transparent 25%, transparent 75%, #D9A05B 75%, #D9A05B), repeating-linear-gradient(45deg, #D9A05B 25%, #090E17 25%, #090E17 75%, #D9A05B 75%, #D9A05B)`, 
          backgroundPosition: `0 0, 20px 20px`, 
          backgroundSize: `40px 40px` 
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header ديال السيكسيون */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`mb-14 text-center ${language === 'AR' ? 'md:text-right' : 'md:text-left'}`}
          dir={language === 'AR' ? 'rtl' : 'ltr'}
        >
          <div className="mb-4">
            <span className="inline-block text-[0.75rem] font-bold text-[#D9A05B] uppercase tracking-[3px]">
              {t.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.title1} <span className="font-black text-[#D9A05B]">{t.title2}</span>
          </h2>

          <p className="text-[1.05rem] text-gray-400 font-light max-w-2xl mx-auto md:mx-0">
            {t.description}
          </p>
        </motion.div>

        {/* شبكة المهارات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={language}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              category={item.category}
              skills={item.skills}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#D9A05B] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.01, 0.03, 0.01] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-[#D9A05B] rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
};

export default Skills;