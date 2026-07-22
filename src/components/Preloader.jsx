import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState('');
  const [showName, setShowName] = useState(false);

  // هادو هما الكلمات لي غيبقاو يدوزو بالزربة (كيبينو للـ Recruteur شنو كتعرف قبل ما يدخل)
  const techLogs = [
    "INITIALIZING NEURAL NETWORKS...",
    "LOADING SIRO OPTIMIZATION ALGORITHMS...",
    "MOUNTING COMPUTER VISION MODULES (OPENCV)...",
    "ESTABLISHING RAG & CHROMADB PIPELINES...",
    "DEPLOYING CREWAI MULTI-AGENT ARCHITECTURE...",
    "LOADING LEGAL TECH COMPLIANCE PROTOCOLS...",
    "FETCHING ORDOSENSE IA METRICS...",
    "CALIBRATING FINDAWA CLUSTER...",
    "ENVIRONMENT SECURED. ACCESS GRANTED."
  ];

  useEffect(() => {
    let progressValue = 0;
    let logIndex = 0;

    // العداد كيزيد بالزربة
    const progressInterval = setInterval(() => {
      progressValue += Math.floor(Math.random() * 8) + 2;
      if (progressValue >= 100) progressValue = 100;
      setProgress(progressValue);

      // تبديل الجمل ديال الكود مع العداد
      if (progressValue % 15 === 0 && logIndex < techLogs.length) {
        setCurrentLog(techLogs[logIndex]);
        logIndex++;
      }

      if (progressValue === 100) {
        clearInterval(progressInterval);
        setCurrentLog(techLogs[techLogs.length - 1]); // Access Granted
        
        // كيبين السمية ديالك بواحد الضربة د الضو
        setTimeout(() => setShowName(true), 400);
        
        // كيخفي كلشي ويدخلك للموقع مورا 2 ثواني
        setTimeout(() => setLoading(false), 2400);
      }
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
      backgroundColor: '#090E17', zIndex: 9999,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      overflow: 'hidden'
    }}>
      
      {/* شبكة خفيفة ف الخلفية (Grid Background) لزيادة الطابع التقني */}
      <div style={{
        position: 'absolute', width: '200%', height: '200%',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
        animation: 'gridMove 10s linear infinite'
      }}></div>

      <div style={{ zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
        
        {/* الدائرة لي كتدور (Radar/Scanner) */}
        {!showName && (
          <div style={{
            width: '60px', height: '60px', margin: '0 auto 30px auto',
            border: '2px solid rgba(217, 160, 91, 0.1)',
            borderTop: '2px solid #D9A05B', borderRadius: '50%',
            animation: 'spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
          }}></div>
        )}

        {/* السمية ديالك لي كتبان ف اللخر (Reveal Effect) */}
        <h1 style={{
          fontSize: showName ? '3.5rem' : '2rem',
          fontFamily: "'Playfair Display', serif",
          color: 'white',
          letterSpacing: showName ? '8px' : '4px',
          opacity: showName ? 1 : 0,
          transform: showName ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          textShadow: showName ? '0px 0px 30px rgba(217, 160, 91, 0.8)' : 'none',
          marginBottom: '20px',
          whiteSpace: 'nowrap'
        }}>
          YOUSSEF EL MAHMI<span style={{ color: '#D9A05B' }}>.</span>
        </h1>

        {/* السطور ديال الـ Terminal والـ Progress */}
        <div style={{
          opacity: showName ? 0 : 1, // كيغبرو فاش كتبان السمية
          transition: 'opacity 0.4s ease'
        }}>
          <div style={{
            fontFamily: "'Courier New', Courier, monospace",
            color: '#D9A05B', fontSize: '0.85rem', fontWeight: 'bold',
            letterSpacing: '1px', marginBottom: '15px', height: '20px'
          }}>
            {currentLog}
          </div>

          {/* الخط ديال التحميل (Progress Bar) مقاد بطريقة احترافية */}
          <div style={{
            width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, height: '100%',
              width: `${progress}%`, backgroundColor: '#D9A05B',
              boxShadow: '0 0 15px #D9A05B',
              transition: 'width 0.1s linear'
            }}></div>
          </div>
          
          <div style={{
            fontFamily: "'Courier New', Courier, monospace",
            color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', 
            marginTop: '10px', textAlign: 'right'
          }}>
            {progress}% / SYS.BOOT
          </div>
        </div>

      </div>

      {/* الـ CSS ديال الأنيميسون */}
      <style>
        {`
          @keyframes spin { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
          }
          @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;