import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroIntro = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      width: '100%',
      textAlign: 'center',
      pointerEvents: 'none' // Allow clicks to pass through to visual elements if needed, but buttons need pointer-events: auto
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 style={{ 
          color: '#00f3ff', 
          fontFamily: "'Courier New', monospace", 
          letterSpacing: '4px',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '1rem' 
        }}>
          NEXT-GEN SIEM & SOAR
        </h2>
        <h1 style={{ 
          color: '#fff', 
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
          fontWeight: '900',
          lineHeight: '1.1',
          textShadow: '0 0 20px rgba(0, 243, 255, 0.3)',
          marginBottom: '2rem'
        }}>
          PASSIVEGUARD
        </h1>
        <p style={{ 
          color: '#ccc', 
          maxWidth: '800px', 
          margin: '0 auto 3rem auto', 
          fontSize: '1.2rem',
          lineHeight: '1.6' 
        }}>
          Uncover threats others miss with our AI-Powered Scanner. 
          Faster detection, smarter responses, and seamless integration for your SOC.
        </p>
        
        <div style={{ pointerEvents: 'auto', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/register" className="cyber-btn" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            START FREE TRIAL
          </Link>
          <Link to="/pricing" className="cyber-btn" style={{ 
            padding: '15px 40px', 
            fontSize: '1.1rem', 
            background: 'transparent', 
            border: '1px solid #00f3ff' 
          }}>
            VIEW PRICING
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroIntro;
