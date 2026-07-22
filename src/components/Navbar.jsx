import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#0F172A] py-4' // خلفية كحلية غامقة للموبايل
          : isScrolled 
            ? 'bg-[#090E17]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' // خلفية زجاجية كحلية فاش كتهبط
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* اللوجو / السمية */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-2xl font-black tracking-tight text-white transition-colors duration-500"
            style={{ fontFamily: "'Playfair Display', serif" }} // الخط الأكاديمي للسمية
          >
            Y<span className="text-[#D9A05B]">.</span> EL MAHMI
          </a>
        </div>

        {/* الروابط ديال البيسي */}
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="font-medium text-[0.8rem] uppercase tracking-widest relative group transition-colors duration-500 text-gray-300 hover:text-white"
            >
              {link}
              {/* السطر الذهبي لي كيبان فاش كتحط السوريس */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D9A05B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* زر التواصل (Contact Me) */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-8 py-3 text-[0.8rem] font-bold uppercase tracking-widest transition-all duration-500 ${
              isScrolled
                ? 'bg-[#D9A05B] text-[#090E17] hover:bg-white hover:shadow-[0_0_20px_rgba(217,160,91,0.4)]'
                : 'border border-[#D9A05B] text-[#D9A05B] hover:bg-[#D9A05B] hover:text-[#090E17]'
            }`}
          >
            Contact Me
          </a>
        </div>

        {/* زر المينو ديال التليفون (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-white transition-colors duration-500"
            aria-label="Toggle navigation"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* المينو ديال التليفون فاش كيتحل */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] py-6 opacity-100 bg-[#0F172A] border-t border-white/5 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-8 space-y-5">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#D9A05B] font-bold text-sm tracking-widest uppercase border-b border-white/5 pb-3 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 bg-[#D9A05B] text-[#090E17] font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 w-full text-center"
             >
               Contact Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;