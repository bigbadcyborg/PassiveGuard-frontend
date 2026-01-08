import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCode, Database, Lock, AlertTriangle } from 'lucide-react';
import '../../components/Navbar.css';

const Response = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-container" style={{ minHeight: '100vh', paddingTop: '80px', overflowY: 'auto' }}>
      <div className="scanline"></div>
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
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
          <ShieldCheck size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          SMART RESPONSE <br /> <span style={{ color: '#00f3ff' }}>ENRICHMENT ENGINE</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Don't just see the alert. Understand the context, the standard, and the fix. 
          PassiveGuard maps every finding to actionable intelligence instantly using our proprietary Vulnerability Knowledge Base.
        </p>
      </motion.section>

      {/* Feature Section: The Knowledge Base */}
      <section style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)', padding: '5rem 0', borderTop: '1px solid rgba(0, 243, 255, 0.1)', borderBottom: '1px solid rgba(0, 243, 255, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Automated Vulnerability Enrichment</h2>
            <p className="section-description" style={{ marginBottom: '2rem' }}>
              Every raw finding detected by our scanners is passed through the 
              <span style={{ color: '#00f3ff', fontWeight: 'bold' }}> Vulnerability Knowledge Base</span>. 
              We automatically map technical detections to high-level security standards.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                "Maps 'sql_injection' -> OWASP A03:2021",
                "Associates CWE IDs (e.g., CWE-89, CWE-798)",
                "Calculates severity overrides based on context",
                "Links findings to compliance frameworks"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#ccc' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#00f3ff', borderRadius: '50%', marginRight: '1rem' }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              backgroundColor: '#050505', 
              border: '1px solid #00f3ff', 
              padding: '2rem', 
              borderRadius: '8px', 
              fontFamily: "'Courier New', monospace", 
              boxShadow: '0 0 30px rgba(0, 243, 255, 0.1)'
            }}
          >
            {/* Mock JSON Response */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
              <Database size={16} color="#bc13fe" />
              <span style={{ color: '#666', fontSize: '0.9rem' }}>enrich_finding(finding) -{'>'}  Output</span>
            </div>
            <pre style={{ color: '#ccc', overflowX: 'auto', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {`{
  "type": "hardcoded_secrets",
  "severity": "HIGH",
  "enrichment": {
    "owasp": "A07:2021 – Identification Failures",
    "cwe_id": "CWE-798",
    "risk_score": 9.2
  },
  "context": "AWS Key found in config.py line 42"
}`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Feature Section: Smart Remediation */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title center">Code-Level Remediation</h2>
          <p className="section-description center">We don't just tell you what's wrong. We give you the code to fix it.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              icon: <FileCode size={32} color="#39ff14" />, // Green
              title: "SQL Injection",
              desc: "Switch from concatenation to parameterized queries.",
              code: 'cursor.execute("SELECT * FROM users WHERE id = %s", (uid,))'
            },
            {
              icon: <AlertTriangle size={32} color="#ff9e00" />, // Orange
              title: "XSS Vulnerability",
              desc: "Implement context-aware encoding for user input.",
              code: 'element.textContent = "Hello " + userInput;'
            },
            {
              icon: <Lock size={32} color="#ff0055" />, // Red
              title: "Weak Crypto",
              desc: "Upgrade legacy protocols to TLS 1.3 standards.",
              code: 'ssl_context.options |= ssl.OP_NO_TLSv1 | ssl.OP_NO_TLSv1_1'
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ 
                backgroundColor: '#111', 
                border: '1px solid #333', 
                padding: '2rem', 
                borderRadius: '8px', 
                transition: 'border-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00f3ff'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>{card.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{card.desc}</p>
              <div style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '4px', border: '1px solid #333' }}>
                <code style={{ fontSize: '0.8rem', color: '#00f3ff', wordBreak: 'break-all' }}>{card.code}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Response;
