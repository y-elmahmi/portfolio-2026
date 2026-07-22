import React from 'react';
// تأكد بلي المسار ديال الفيديو هو هاداك
import videoBg from '../assets/hero video/herovideo.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[#090E17]/75 z-10"></div>

      {/* Flexible Container: padding and margin adapt dynamically */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-[clamp(5rem,15vh,8rem)] md:pt-0">
        
        {/* Fluid Typography: السمية كتصغار وتكبار بسلاسة */}
        <h1 
          className="font-black text-white mb-4 tracking-wide drop-shadow-2xl leading-[1.1]" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw + 1rem, 5.5rem)" // Minimum: 3rem, Dynamic: 8vw, Maximum: 5.5rem
          }}
        >
          Youssef <br className="md:hidden" />
          EL MAHMI
        </h1>
        
        {/* Flexible Box: كياخد القياس لي محتاج بالضبط */}
        <div className="border-l-4 border-[#D9A05B] bg-white/5 backdrop-blur-md p-[clamp(0.75rem,2vw,1rem)] mb-6 inline-block w-fit rounded-r-lg shadow-lg">
          <h2 
            className="text-[#D9A05B] font-bold tracking-wide"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          >
            AI Developer & Software Engineer
          </h2>
        </div>
        
        {/* Flexible Paragraph width */}
        <p 
          className="text-gray-300 leading-relaxed w-full max-w-[min(100%,42rem)] mb-10 font-light"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
        >
          Pursuing a dual academic path in Intelligent Systems & Operations Research (SIRO) and Law, while delivering real-world software solutions. Creator of advanced platforms like <strong className="text-white">FinDawa</strong> and <strong className="text-white">OrdoSense IA</strong>.
        </p>

        {/* Flexible Buttons: flex-1 كيعطيهم المرونة باش يعمرو الشاشة ف التليفون، و flex-none كيخليهم عاديين ف البيسي */}
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D9A05B] text-[#090E17] font-bold rounded-full hover:bg-white transition-all duration-300 min-w-[250px] text-sm uppercase tracking-wider shadow-[0_4px_15px_rgba(217,160,91,0.3)]"
          >
            <span className="text-lg">💼</span> LinkedIn Profile
          </a>
          
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-[#090E17] font-bold rounded-full hover:bg-gray-200 transition-all duration-300 min-w-[250px] text-sm uppercase tracking-wider"
          >
            <span className="text-lg">👨‍💻</span> GitHub Repo
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;