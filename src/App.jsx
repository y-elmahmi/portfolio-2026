import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Research from './components/Research'; // هادا هو الملف ديال المشاريع لي صاوبنا
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import BigFooter from './components/BigFooter';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;