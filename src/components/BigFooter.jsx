import React from 'react';

const BigFooter = () => {
  return (
    <footer style={{ backgroundColor: '#090E17', color: 'white', padding: '80px 4% 40px 4%', position: 'relative', overflow: 'hidden' }}>
      
      {/* الخطوط الرقيقة الفوق */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '60px', fontSize: '0.75rem', letterSpacing: '1px', color: '#94A3B8', textTransform: 'uppercase', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <p style={{ margin: '0 0 5px 0' }}>ARTIFICIAL INTELLIGENCE SPECIALIST</p>
          <p style={{ margin: '0 0 5px 0' }}>SOFTWARE ARCHITECTURE & DEV</p>
          <p style={{ margin: 0 }}>INTELLIGENT SYSTEMS (SIRO) & LAW</p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#D9A05B', margin: '0 0 5px 0', fontWeight: 'bold' }}>BASED IN MOROCCO</p>
          <a href="#contact" style={{ color: '#E2E8F0', textDecoration: 'none', borderBottom: '1px solid #E2E8F0', paddingBottom: '2px' }}>CONTACT FOR COLLABORATION</a>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: '0 0 5px 0' }}>UNIVERSITÉ MOULAY ISMAIL</p>
          <p style={{ margin: 0 }}>MEKNÈS, MOROCCO</p>
        </div>
      </div>

      {/* السمية العملاقة */}
      <div style={{ textAlign: 'center', margin: '80px 0' }}>
        <h1 style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', fontFamily: 'serif', margin: 0, lineHeight: '0.9', color: '#F8FAFC', letterSpacing: '-2px' }}>
          Youssef
        </h1>
        <h1 style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', fontFamily: 'serif', margin: 0, lineHeight: '0.9', color: '#F8FAFC', letterSpacing: '-2px' }}>
          EL MAHMI<span style={{ color: '#D9A05B' }}>.</span>
        </h1>
      </div>

      {/* حقوق النشر لتحت كاع */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748B', fontSize: '0.85rem', marginTop: '60px', flexWrap: 'wrap', gap: '15px' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Youssef El Mahmi. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.3s' }}>LinkedIn</a>
          <a href="#" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.3s' }}>GitHub</a>
        </div>
      </div>
      
    </footer>
  );
};

export default BigFooter;