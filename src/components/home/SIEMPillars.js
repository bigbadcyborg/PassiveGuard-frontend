import React from 'react';
import { motion } from 'framer-motion';

const SIEMPillars = () => {
  const pillars = [
    {
      title: "Advanced Threat Scanner",
      desc: "Deep inspection using AI/ML to catch sophisticated threats in real-time.",
      icon: "🔍"
    },
    {
      title: "Unified Detection & Response",
      desc: "SIEM + SOAR + NDR fused into one single pane of glass.",
      icon: "🛡️"
    },
    {
      title: "Developer-First",
      desc: "Open APIs, custom rules (Sigma/YARA), and direct CI/CD integration.",
      icon: "💻"
    },
    {
      title: "AI Automation",
      desc: "Automate Tier-1 analyst triage and correlation. Let AI handle the noise.",
      icon: "🤖"
    },
    {
      title: "Executive Insights",
      desc: "Instant ROI reports, risk trends, and compliance dashboards for the board.",
      icon: "📊"
    }
  ];

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title center">THE 5 PILLARS OF PASSIVEGUARD</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {pillars.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(0, 243, 255, 0.2)',
              padding: '2rem',
              borderRadius: '4px'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{p.icon}</div>
            <h3 style={{ color: '#00f3ff', marginBottom: '1rem' }}>{p.title}</h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SIEMPillars;
