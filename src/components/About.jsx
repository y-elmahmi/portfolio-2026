import React from 'react';
// 1. هنا كنجيبو التصويرة ديالك من assets. تأكد من السمية واش .jpg ولا .png
import profileImg from '../assets/profile.png';

const About = () => {
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
            {/* 2. هنا درنا المتغير profileImg ف بلاصة الرابط، وقادينا القياسات باش تجي مربعة وتغطي الإطار */}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={profileImg} 
                alt="Youssef El Mahmi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* الجزء ديال اليمين: التيكست */}
        <div className="w-full md:w-8/12">
          <p className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase mb-3">
            Biography & Core Profile
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Architecting <span className="font-black text-[#D9A05B]">Optimal Decisions.</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-[1.05rem] font-light">
            <p>
              I am an AI Software Engineer specializing in <strong className="text-white font-medium">Systèmes Intelligents et Recherche Opérationnelle</strong>. My academic and professional journey is deeply rooted in designing <strong className="text-[#D9A05B] font-medium">Systèmes de Décision Optimaux</strong> and advanced Artificial Intelligence architectures that solve tangible, complex problems.
            </p>
            <p>
              What sets my profile apart is a proven capacity for extreme discipline and time management. I successfully architect production-ready software platforms while balancing demanding full-time professional responsibilities with an intensive academic engineering workload.
            </p>
            <p>
              My technical focus lies at the intersection of sophisticated algorithms and real-world utility. By leveraging Machine Learning, Computer Vision, and Multi-Agent AI frameworks, I have engineered robust systems like <strong className="text-white font-medium">FinDawa</strong> for automated healthcare logistics and <strong className="text-white font-medium">OrdoSense IA</strong> for semantic prescription analysis and pharmacovigilance.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-12">
            <div>
              <h4 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>AI & OR</h4>
              <p className="text-xs text-[#D9A05B] tracking-widest mt-2 uppercase font-bold">Core Specialization</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>100%</h4>
              <p className="text-xs text-[#D9A05B] tracking-widest mt-2 uppercase font-bold">Delivery & Discipline</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;