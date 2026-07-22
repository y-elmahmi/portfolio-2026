import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  // المسار الأكاديمي والمدارس الكبرى (مرتب من الجديد للقديم)
  const education = [
    {
      period: "2026 - 2028",
      degree: "Master d'Excellence en IA & Système de Décision Optimal (IARO)",
      institution: "Université Moulay Ismail - Faculté des Sciences",
      status: "En cours"
    },
    {
      period: "2025 - 2026",
      degree: "Licence d'Excellence (SIRO)",
      institution: "Systèmes Intelligents & Recherche Opérationnelle",
      status: "Validé"
    },
    {
      period: "2023 - 2024",
      degree: "Full Stack Software Engineering Program",
      institution: "ALX Africa (Tech Incubator)",
      status: "Validé (Top Performer)"
    },
    {
      period: "2023",
      degree: "Architecture Logicielle & Programmation C (Réseau 42)",
      institution: "1337 MED Coding School",
      status: "Validé"
    },
    {
      period: "2020 - 2021",
      degree: "Licence Professionnelle en Informatique",
      institution: "Appliquée à la Finance et à la Gestion",
      status: "Validé"
    },
    {
      period: "2018 - 2020",
      degree: "Diplôme Universitaire de Technologie (DUT)",
      institution: "Informatique Décisionnelle et Statistique",
      status: "Validé"
    },
    {
      period: "2017 - 2018",
      degree: "Baccalauréat Scientifique",
      institution: "Ministère de l'Éducation Nationale",
      status: "Validé"
    }
  ];

  // الشواهد المهنية والهاكاثونات
  const certifications = [
    {
      title: "OpenAI Hackathon Participant",
      issuer: "OpenAI Build Week",
      date: "2026",
      desc: "Conception et développement d'outils d'IA (IntentTrials) en utilisant des agents autonomes, CrewAI et l'architecture RAG pour la résolution d'ambiguïtés."
    },
    {
      title: "ALX Foundations Excellence",
      issuer: "ALX Africa",
      date: "2023",
      desc: "Validation des modules fondamentaux en ingénierie logicielle avec un score exceptionnel, démontrant une maîtrise des bases algorithmiques complexes."
    },
    {
      title: "Future Certification (Placeholder)",
      issuer: "AWS / Coursera / IBM",
      date: "En préparation",
      desc: "Espace réservé pour vos futures certifications professionnelles en Cloud Computing, Machine Learning Ops ou Data Engineering."
    }
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 bg-[#0F172A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase">Background & Achievements</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Education & <span className="font-black text-[#D9A05B]">Certifications.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* العمود الأول: المسار الأكاديمي والمدارس (Timeline) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[#D9A05B] text-3xl">🎓</span> Cursus & Écoles d'Élite
            </h3>
            
            <div className="relative border-l border-white/10 ml-3 space-y-10">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* النقطة ديال الخط الزمني */}
                  <div className={`absolute left-[-6px] top-1.5 w-3 h-3 rounded-full ${index === 0 ? 'bg-[#D9A05B] shadow-[0_0_10px_#D9A05B]' : 'bg-gray-600'}`}></div>
                  
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#D9A05B] text-xs font-bold tracking-widest uppercase">
                        {item.period}
                      </span>
                      <span className="text-[0.65rem] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400 uppercase tracking-wider">
                        {item.status}
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

          {/* العمود الثاني: الشواهد المهنية والهاكاثونات (Cards) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[#D9A05B] text-3xl">📜</span> Certifications & Awards
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#090E17] p-6 border border-white/5 hover:border-[#D9A05B]/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[1.1rem] font-bold text-white group-hover:text-[#D9A05B] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {cert.title}
                    </h4>
                    <span className="text-gray-500 text-xs font-bold tracking-widest bg-white/5 px-2 py-1 rounded whitespace-nowrap ml-4">
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