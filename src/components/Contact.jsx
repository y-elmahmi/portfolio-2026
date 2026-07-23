import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [status, setStatus] = useState(t.sendBtn);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(language === 'AR' ? 'جاري الإرسال...' : language === 'FR' ? 'Envoi en cours...' : 'Transmitting...');
    const formData = new FormData(event.target);
    
    formData.append("access_key", "82737c46-6a30-4dda-8ac1-c974ec5fb808");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus(language === 'AR' ? 'تم إرسال الرسالة!' : language === 'FR' ? 'Message Envoyé !' : 'Message Sent!');
      event.target.reset();
      setTimeout(() => setStatus(t.sendBtn), 3000);
    } else {
      setStatus(language === 'AR' ? 'حدث خطأ، حاول مجدداً' : language === 'FR' ? 'Erreur, Réessayez' : 'Error, Try Again');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-[#090E17] text-white overflow-hidden border-t border-white/5" dir={language === 'AR' ? 'rtl' : 'ltr'}>
      
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, #D9A05B 25%, transparent 25%, transparent 75%, #D9A05B 75%, #D9A05B), repeating-linear-gradient(45deg, #D9A05B 25%, #090E17 25%, #090E17 75%, #D9A05B 75%, #D9A05B)`, 
          backgroundPosition: `0 0, 20px 20px`, 
          backgroundSize: `40px 40px` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'AR' ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          key={language}
          className="w-full md:w-5/12"
        >
          <span className="text-[#D9A05B] font-bold tracking-[3px] text-sm uppercase">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-3 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.title}
          </h2>
          <p className="text-gray-400 font-light mb-12 text-[1.05rem] leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">{t.emailLabel}</p>
              <a href="mailto:youssef.elmahmi@gmail.com" className="text-lg text-white hover:text-[#D9A05B] transition-colors font-medium">
                youssef.elmahmi@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">{t.locationLabel}</p>
              <p className="text-lg text-white font-medium">{t.locationValue}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: language === 'AR' ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          key={`form-${language}`}
          className="w-full md:w-7/12"
        >
          <form onSubmit={handleSubmit} className="bg-[#0F172A] p-8 md:p-10 border border-white/5 shadow-2xl relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#D9A05B]/0 to-[#D9A05B]/0 group-hover:from-[#D9A05B]/5 transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                  <label className="text-xs text-[#D9A05B] uppercase tracking-widest mb-2 font-bold">{t.firstName}</label>
                  <input 
                    type="text" 
                    name="First Name"
                    required
                    className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#D9A05B] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-[#D9A05B] uppercase tracking-widest mb-2 font-bold">{t.lastName}</label>
                  <input 
                    type="text" 
                    name="Last Name"
                    required
                    className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#D9A05B] transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex flex-col mb-8">
                <label className="text-xs text-[#D9A05B] uppercase tracking-widest mb-2 font-bold">{t.email}</label>
                <input 
                  type="email" 
                  name="Email"
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#D9A05B] transition-colors"
                />
              </div>
              
              <div className="flex flex-col mb-10">
                <label className="text-xs text-[#D9A05B] uppercase tracking-widest mb-2 font-bold">{t.message}</label>
                <textarea 
                  rows="4" 
                  name="Message"
                  required
                  className="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#D9A05B] transition-colors resize-none"
                ></textarea>
              </div>
              
              {/* Button */}
              <button 
                type="submit" 
                className="w-full py-4 bg-[#D9A05B] text-[#090E17] font-black tracking-[2px] uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(217,160,91,0.4)] transition-all duration-300"
              >
                {status}
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;