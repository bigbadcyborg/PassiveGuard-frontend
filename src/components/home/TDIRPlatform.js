import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TDIRPlatform = () => {
  const features = [
    "Transition to a cloud-native SIEM",
    "Replace an on-premises SIEM",
    "Consolidate multiple SIEM tools",
    "Augment your SIEM with behavioral analytics",
    "Add AI and automation to an existing SIEM",
    "Integrate TDIR with a single UI",
    "Start an insider threat program"
  ];

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '4rem', 
        alignItems: 'center',
        flexWrap: 'wrap-reverse' 
      }}>
        
        {/* Left Content */}
        <motion.div 
          style={{ flex: 1, minWidth: '300px' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#fff'
          }}>
            The Leading Platform for TDIR
          </h2>
          
          <p style={{ 
            color: '#aaa', 
            fontSize: '1.1rem', 
            lineHeight: '1.6', 
            marginBottom: '2rem' 
          }}>
            Realize the full potential of your security operations with the cloud-native PassiveGuard Security Operations Platform, or the self-hosted PassiveGuard SIEM Platform.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
            {features.map((item, index) => (
              <motion.li 
                key={index}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  color: '#fff'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  border: '2px solid #39ff14', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="#39ff14" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>

          <Link to="/platform" style={{
            backgroundColor: '#009900', /* Green similar to image */
            color: 'white',
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#00bb00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#009900'}
          >
            Discover the Platform
          </Link>
        </motion.div>

        {/* Right Image Placeholder */}
        <motion.div 
          style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '16/10',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            borderRadius: '12px',
            border: '1px solid #333',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Simple Laptop/Dashboard Representation */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', background: '#0a0a0a', borderRadius: '4px', border: '1px solid #333', overflow: 'hidden', fontFamily: 'sans-serif' }}>
                 {/* Browser Chrome */}
                <div style={{ height: '24px', background: '#1f1f1f', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56', marginRight: '6px' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e', marginRight: '6px' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                    <div style={{ marginLeft: '10px', height: '14px', background: '#111', flex: 1, borderRadius: '2px' }}></div>
                </div>

                {/* Dashboard Body */}
                <div style={{ display: 'flex', height: 'calc(100% - 24px)' }}>
                   {/* Sidebar */}
                   <div style={{ width: '40px', background: '#141414', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px', gap: '10px' }}>
                      <div style={{ width: '20px', height: '20px', background: '#39ff14', opacity: 0.8, borderRadius: '4px' }}></div>
                      <div style={{ width: '20px', height: '2px', background: '#333' }}></div>
                      <div style={{ width: '16px', height: '16px', background: '#333', borderRadius: '3px' }}></div>
                      <div style={{ width: '16px', height: '16px', background: '#333', borderRadius: '3px' }}></div>
                      <div style={{ width: '16px', height: '16px', background: '#333', borderRadius: '3px' }}></div>
                   </div>

                   {/* Main Content */}
                   <div style={{ flex: 1, padding: '15px' }}>
                      
                      {/* Header Stats */}
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                          <div style={{ flex: 1, background: '#1a0505', border: '1px solid #330000', borderRadius: '4px', padding: '8px' }}>
                             <div style={{ color: '#ff4444', fontSize: '10px', fontWeight: 'bold' }}>HIGH RISK</div>
                             <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>12</div>
                          </div>
                          <div style={{ flex: 1, background: '#1a1005', border: '1px solid #332200', borderRadius: '4px', padding: '8px' }}>
                             <div style={{ color: '#ffaa00', fontSize: '10px', fontWeight: 'bold' }}>MEDIUM</div>
                             <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>45</div>
                          </div>
                           <div style={{ flex: 1, background: '#05101a', border: '1px solid #002233', borderRadius: '4px', padding: '8px' }}>
                             <div style={{ color: '#00ccff', fontSize: '10px', fontWeight: 'bold' }}>LOW</div>
                             <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>128</div>
                          </div>
                      </div>

                      {/* Chart Area */}
                      <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid #222', marginBottom: '10px' }}>
                         {/* Fake bar chart */}
                         {[40, 60, 30, 80, 50, 90, 45, 70, 35, 60, 85, 55].map((h, i) => (
                            <div key={i} style={{ 
                               flex: 1, 
                               height: `${h}%`, 
                               background: h > 70 ? '#ff4444' : h > 40 ? '#ffaa00' : '#00ccff',
                               borderRadius: '2px 2px 0 0',
                               opacity: 0.8
                            }}></div>
                         ))}
                      </div>

                      {/* List Preview */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px', color: '#666' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff4444' }}></div>
                            <div style={{ color: '#ddd' }}>SQL Injection Detected</div>
                            <div style={{ marginLeft: 'auto' }}>10m ago</div>
                         </div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px', color: '#666' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffaa00' }}></div>
                            <div style={{ color: '#ddd' }}>Privileged Container</div>
                            <div style={{ marginLeft: 'auto' }}>2h ago</div>
                         </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px', color: '#666' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ccff' }}></div>
                            <div style={{ color: '#ddd' }}>Outdated Dependency</div>
                            <div style={{ marginLeft: 'auto' }}>5h ago</div>
                         </div>
                      </div>

                   </div>
                </div>
            </div>
            
            {/* Floating AI Badge */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '80px',
                height: '80px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                zIndex: 10
            }}>
                <span style={{ color: '#000', fontWeight: 'bold' }}>AI</span>
                <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid #39ff14', animation: 'spin 10s linear infinite' }}></div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TDIRPlatform;
