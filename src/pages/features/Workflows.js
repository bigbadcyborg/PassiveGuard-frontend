import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ShieldAlert, Cpu } from 'lucide-react';

const Workflows = () => {
  return (
    <div className="home-container" style={{ minHeight: '100vh', paddingTop: '80px', overflowY: 'auto' }}>
      <div className="scanline"></div>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}
      >
        <div style={{ 
          display: 'inline-block', 
          padding: '1.5rem', 
          border: '1px solid #00f3ff', 
          borderRadius: '50%', 
          marginBottom: '2rem', 
          boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)'
        }}>
          <GitBranch size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          SECURITY ORCHESTRATION <br /> & AUTOMATION
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '800px', margin: '0 auto' }}>
          Build complex defense playbooks visually. Automate the mundane, 
          so your analysts can focus on the critical.
        </p>
      </motion.section>

      {/* Use Cases Grid */}
      <section style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)', padding: '5rem 0', borderTop: '1px solid rgba(0, 243, 255, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="section-title center">Automated Playbooks</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               style={{ 
                   padding: '2.5rem', 
                   backgroundColor: '#050505', 
                   border: '1px solid #333', 
                   borderRadius: '12px', 
                   position: 'relative', 
                   overflow: 'hidden' 
                }}
            >
              <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.1 }}>
                <ShieldAlert size={150} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>1. Credential Leak Response</h3>
              <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <strong>Trigger:</strong> 'hardcoded_secrets' detected in commit.<br/>
                <strong>Action 1:</strong> Block merge request via API.<br/>
                <strong>Action 2:</strong> Revoke credential in AWS Secrets Manager.<br/>
                <strong>Action 3:</strong> Notify developer on Slack with rotation guide.
              </p>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', backgroundColor: 'rgba(255, 0, 85, 0.2)', color: '#ff0055', padding: '5px 10px', borderRadius: '4px' }}>HIGH PRIORITY</span>
            </motion.div>

            <motion.div 
               whileHover={{ scale: 1.02 }}
               style={{ 
                   padding: '2.5rem', 
                   backgroundColor: '#050505', 
                   border: '1px solid #333', 
                   borderRadius: '12px', 
                   position: 'relative', 
                   overflow: 'hidden' 
                }}
            >
              <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.1 }}>
                <Cpu size={150} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>2. Suspicious Traffic Halt</h3>
              <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                <strong>Trigger:</strong> 'port_scan' or 'brute_force' from single IP.<br/>
                <strong>Action 1:</strong> Update WAF rules to blacklist IP.<br/>
                <strong>Action 2:</strong> Snapshot instance for forensic analysis.<br/>
                <strong>Action 3:</strong> Log incident to SIEM timeline.
              </p>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', backgroundColor: 'rgba(255, 158, 0, 0.2)', color: '#ff9e00', padding: '5px 10px', borderRadius: '4px' }}>MEDIUM PRIORITY</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', color: '#fff' }}>
            <div style={{ padding: '2rem', border: '1px solid rgba(0, 243, 255, 0.3)', borderRadius: '8px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00f3ff', marginBottom: '0.5rem' }}>95%</div>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>Reduction in Triage Time</div>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(0, 243, 255, 0.3)', borderRadius: '8px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00f3ff', marginBottom: '0.5rem' }}>&lt;1m</div>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>Avg. Auto-Response Latency</div>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(0, 243, 255, 0.3)', borderRadius: '8px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00f3ff', marginBottom: '0.5rem' }}>24/7</div>
                <div style={{ fontSize: '0.9rem', color: '#888' }}>Always-On Automated Watch</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Workflows;
