import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Cloud, Code, Layers } from 'lucide-react';

const Integrations = () => {
    
  const categories = [
    {
      title: "Dependency & Code Scanning",
      icon: <Code size={24} color="#00f3ff" />,
      tools: ["Semgrep", "Safety DB", "Trivy", "OWASP Dependency Check"],
      desc: "Ingests static analysis findings directly into the specific vulnerability pipeline."
    },
    {
      title: "Infrastructure as Code",
      icon: <Layers size={24} color="#00f3ff" />,
      tools: ["Terraform", "Docker Config", "Kubernetes Manifests", "Ansible"],
      desc: "Detects misconfigurations like 'iac_docker_001' before deployment."
    },
    {
      title: "Cloud Providers",
      icon: <Cloud size={24} color="#00f3ff" />,
      tools: ["AWS CloudTrail", "Azure Monitor", "GCP Stackdriver"],
      desc: "Correlates cloud logs with application events for full-stack visibility."
    },
    {
      title: "Network & Traffic",
      icon: <Network size={24} color="#00f3ff" />,
      tools: ["PCAP Analysis", "NetFlow", "Zeek", "Suricata"],
      desc: "Analyzes packet captures for insecure protocols and data exfiltration."
    }
  ];

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
          <Server size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          UNIFIED <br /> SECURITY FABRIC
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '800px', margin: '0 auto' }}>
          PassiveGuard creates a single pane of glass by ingesting data from 
          development, infrastructure, and runtime sources.
        </p>
      </motion.section>

      {/* Integration Grid */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                backgroundColor: '#111', 
                border: '1px solid #333', 
                padding: '2rem', 
                borderRadius: '12px',
                transition: 'border-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 243, 255, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#000', borderRadius: '8px', border: '1px solid #333' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>{cat.title}</h3>
              </div>
              <p style={{ color: '#888', marginBottom: '1.5rem', lineHeight: '1.5' }}>{cat.desc}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {cat.tools.map((tool, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#ccc' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#00f3ff', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developers Section */}
      <section style={{ background: 'linear-gradient(to bottom, #111, #000)', padding: '5rem 2rem', borderTop: '1px solid #333' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title center">Developer-First API</h2>
            <p className="section-description center" style={{ marginBottom: '3rem' }}>
                Build your own integration. PassiveGuard exposes a full REST API for 
                custom log ingestion, query execution, and playbook triggering.
            </p>
            <div style={{ 
                backgroundColor: '#050505', 
                textAlign: 'left', 
                padding: '2rem', 
                borderRadius: '8px', 
                border: '1px solid #333', 
                fontFamily: "'Courier New', monospace", 
                fontSize: '0.9rem',
                overflowX: 'auto'
            }}>
                <span style={{ color: '#bc13fe' }}>POST</span> <span style={{ color: '#ff9e00' }}>/api/v1/ingest/event</span> <br/>
                <span style={{ color: '#666' }}>Authorization: Bearer {'<API_KEY>'}</span> <br/><br/>
                <pre style={{ color: '#ccc' }}>
{`{
  "source": "custom_app_firewall",
  "event_type": "exploit_attempt",
  "payload": { ... }
}`}
                </pre>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
