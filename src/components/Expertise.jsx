import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
  // هنا تقدر تبدل المعلومات بالتجارب الحقيقية ديالك
  const experiences = [
    {
      role: "AI Software Engineer & Co-Creator",
      company: "FinDawa Ecosystem",
      period: "2025 - Present",
      description: "Architected a healthcare logistics platform using MVC architecture. Optimized database queries for real-time pharmacy geolocation and inventory tracking.",
      type: "Professional Project"
    },
    {
      role: "AI Tool Architect",
      company: "OpenAI Build Week",
      period: "2026",
      description: "Engineered 'IntentTrials', a developer tool using CrewAI and ChromaDB to resolve ambiguity in automated AI coding agents and ensure deterministic control.",
      type: "Hackathon / R&D"
    },
    {
      role: "Software Developer",
      company: "OrdoSense IA",
      period: "2026",
      description: "Developed an advanced desktop application integrating OpenCV (OCR) and SpaCy (NLP) for semantic prescription analysis and automated pharmacovigilance.",
      type: "Academic R&D"
    }
  ];

  return (
    <section id="expertise" className="relative py-24 px-6 md:px-12 bg-[#090E17] text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Domain <span className="font-black text-[#D9A05B]">Expertise.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          
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

                {/* نص الكارطة (باش تجي وحدة يمين وحدة يسار) */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0">
                  <div className={`bg-[#0F172A] p-8 border border-white/5 hover:border-[#D9A05B]/30 transition-all duration-300 relative group ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    
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