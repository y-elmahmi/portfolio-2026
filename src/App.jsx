import React from 'react';
import { LanguageProvider } from './context/LanguageContext'; // استيراد Context ديال اللغة
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import BigFooter from './components/BigFooter';

function App() {
  return (
    // تغليف التطبيق كامل بـ LanguageProvider
    <LanguageProvider>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Research />
      <Certifications />
      <Contact />
      <BigFooter />
    </LanguageProvider>
  );
}

export default App;