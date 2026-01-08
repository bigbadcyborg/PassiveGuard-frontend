import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database } from 'lucide-react';

const PlatformOverviewAndCore = () => {
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
          <Shield size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Platform Overview and Core Components
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
              <Shield size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Orchestration, Automation, and Response (SOAR)</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              A SOAR platform is a centralized, integrated system that streamlines security operations by automating incident response workflows, orchestrating security tools, and enabling rapid, coordinated responses to threats. These platforms aggregate alerts from multiple sources and present them in a unified interface, reducing alert fatigue and improving analyst efficiency.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Key SOAR Capabilities:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Alert Consolidation from diverse security tools</li>
                <li>• Data Integration via APIs and connectors</li>
                <li>• Focused Analysis with automated filtering</li>
                <li>• Case Management for incident lifecycle tracking</li>
                <li>• Playbook Automation for consistent responses</li>
                <li>• Task Assignment based on roles and expertise</li>
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
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Information and Event Management (SIEM)</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              SIEM systems combine Security Information Management (SIM) and Security Event Management (SEM) to provide real-time monitoring, analysis, and reporting of security events across an organization's network infrastructure.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>SIEM Components:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Vulnerability Scan Output and remediation</li>
                <li>• Interactive SIEM Dashboards</li>
                <li>• Real-time Security Event Monitoring</li>
                <li>• Log Aggregation and Correlation</li>
                <li>• Automated Compliance Reporting</li>
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
              <Zap size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Unified Endpoint Management (UEM)</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Unified Endpoint Management (UEM) refers to a centralized approach to managing all types of endpoints within an enterprise, including workstations, mobile devices, IoT devices, wearables, and printers.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>UEM Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Device Enrollment and Configuration</li>
                <li>• Policy Enforcement across all endpoints</li>
                <li>• Remote Management capabilities</li>
                <li>• Continuous Compliance Monitoring</li>
                <li>• Automated Security Updates</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Key SOAR Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Alert Consolidation</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Gathers alert data and places it in specified locations</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Data Integration</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Facilitates application data integration across security tools</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Focused Analysis</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Enables targeted security analysis through automated filtering</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Case Management</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Creates single security cases for streamlined incident handling</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Playbook Automation</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Supports multiple playbooks with automated playbook step execution</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PlatformOverviewAndCore;