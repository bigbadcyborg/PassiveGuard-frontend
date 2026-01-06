import React from 'react';

const TrustedLogos = () => {
  const logos = [
    "CYBERDYNE", "MASSIVE DYNAMIC", "WAYLAND YUTANI", "TYRELL CORP", "ARASAKA"
  ];

  return (
    <div style={{ 
      borderBottom: '1px solid rgba(0, 243, 255, 0.1)',
      borderTop: '1px solid rgba(0, 243, 255, 0.1)',
      padding: '2rem 0',
      background: 'rgba(0,0,0,0.5)',
      overflow: 'hidden'
    }}>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
        Trusted by Security Teams at
      </p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '4rem', 
        flexWrap: 'wrap',
        opacity: 0.6 
      }}>
        {logos.map((logo, i) => (
          <span key={i} style={{ 
            fontFamily: 'monospace', 
            fontSize: '1.2rem', 
            color: '#fff',
            textShadow: '0 0 5px rgba(255,255,255,0.2)' 
          }}>
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedLogos;
