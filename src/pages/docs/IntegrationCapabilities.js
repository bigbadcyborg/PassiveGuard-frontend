import React from 'react';
import { motion } from 'framer-motion';
import { Link, Plug, Database } from 'lucide-react';

const IntegrationCapabilities = () => {
  return (
    <div className="home-container" style={{ minHeight: '100vh', paddingTop: '80px', overflowY: 'auto' }}>
      <div className="scanline"></div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}
      >
        <div style={{
          display: 'inline-block',
          padding: '1.5rem',
          border: '1px solid #00f3ff',
          borderRadius: '50%',
          marginBottom: '2rem',
          boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)'
        }}>
          <Plug size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Integration Capabilities
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              border: '1px solid #333',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Link size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Tool Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Seamless integration with industry-leading security tools and platforms for unified security operations.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Security Integrations:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• SIEM Systems</li>
                <li>• Endpoint Detection</li>
                <li>• Network Security</li>
                <li>• Vulnerability Scanners</li>
                <li>• Identity Management</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              border: '1px solid #333',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Database size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Enterprise System Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive integration with enterprise applications and systems for holistic security management.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Enterprise Integrations:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Business Applications</li>
                <li>• Database Security</li>
                <li>• Identity Providers</li>
                <li>• Ticketing Systems</li>
                <li>• Email Gateways</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              border: '1px solid #333',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Plug size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>API Connectivity</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Robust API ecosystem enabling custom integrations, automation, and third-party application connectivity.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>API Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• RESTful APIs</li>
                <li>• Webhook Support</li>
                <li>• SDK Availability</li>
                <li>• OAuth 2.0</li>
                <li>• GraphQL Support</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Integration Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Data Format Support</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Multiple data format compatibility for seamless data exchange</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Third-party Vendor Support</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Compatibility with major security vendors and platforms</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Real-time Data Sync</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Continuous data synchronization across integrated systems</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Event-driven Integration</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Automated responses triggered by events from integrated systems</p>
            </div>
          </div>
        </div>

        {/* Summary Paragraph for PassiveGuard */}
        <div style={{ marginTop: '3rem', background: 'rgba(0, 243, 255, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid #00f3ff' }}>
          <h2 style={{ color: '#00f3ff', fontSize: '1.5rem', marginBottom: '1rem' }}>PassiveGuard Integration Summary</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7' }}>
            PassiveGuard excels in providing seamless integration capabilities with a wide array of security tools and platforms. By supporting connections to SIEM systems, endpoint detection, network security, vulnerability scanners, and identity management solutions, PassiveGuard ensures unified and efficient security operations. The platform's robust integration architecture allows organizations to centralize their security workflows, automate data exchange, and enhance visibility across their security landscape. This comprehensive approach empowers teams to respond to threats faster, leverage existing investments, and maintain a resilient security posture.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default IntegrationCapabilities;