import React from 'react';

const Research = () => {
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* العنوان الفوقاني */}
        <p className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase mb-3 text-center">
          Applied Optimal Solutions
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          AI Projects & <span className="font-black text-[#D9A05B]">Innovations</span>
        </h2>

        {/* الكارطات ديال المشاريع (Research Cards Style) */}
        <div className="space-y-12">
          
          {/* مشروع 1: FinDawa */}
          <div className="bg-white p-10 border border-black/5 border-l-4 border-l-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">Optimal Architecture</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">Healthcare Logistics</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              FinDawa: Geolocation & optimal stock management for healthcare logistics via MVC
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              El Mahmi, Youssef. (2025). Architecture optimization in dynamic inventory querying.
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              Introduces FinDawa, an applied ecosystem for optimized pharmacy geolocation and real-time inventory tracking. The system dynamically scales database queries for maximum accessibility by leveraging a strict Model-View-Controller (MVC) architecture, optimizing query latency and data consistency.
            </p>
          </div>

          {/* مشروع 2: OrdoSense IA */}
          <div className="bg-white p-10 border border-black/5 border-l-4 border-l-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">Optimal Decision</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">CV & NLP</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              OrdoSense IA: Optimized semantic extraction and interaction analysis from medical prescriptions
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              El Mahmi, Youssef. (2026). Applied OpenCV, SpaCy, and decision optimal pharmacovigilance.
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              An advanced AI system optimized for reading medical prescriptions. It integrates OCR (OpenCV) for raw text extraction and semantic analysis (SpaCy, NLP) to dynamically optimize pharmacovigilance processes by accurately identifying and mitigating potential drug interactions before medical decisions are finalized.
            </p>
          </div>

          {/* مشروع 3: IntentTrials */}
          <div className="bg-white p-10 border border-black/5 border-l-4 border-l-[#D9A05B] shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#090E17] text-white px-5 py-2 text-xs font-bold tracking-[1px] uppercase">DevTools Optimization</span>
              <span className="border border-[#D9A05B] text-[#D9A05B] px-5 py-2 text-xs font-bold tracking-[1px] uppercase">Multi-Agent AI</span>
            </div>
            
            <h3 className="text-2xl font-black text-[#090E17] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              IntentTrials: Optimal execution framework for deterministic control in AI coding agents
            </h3>
            <p className="text-[#64748B] text-[0.95rem] font-medium mb-6">
              El Mahmi, Youssef. (2026). Developed at OpenAI Build Week.
            </p>
            <p className="text-[#475569] leading-relaxed text-[1.05rem]">
              A specialized developer tool designed to optimize the execution pipelines of automated AI coding agents. It provides a robust, optimized framework using CrewAI and ChromaDB to ensure deterministic control, resolving ambiguity and optimizing the path from agent decision to code generation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;