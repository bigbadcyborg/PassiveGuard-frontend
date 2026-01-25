import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Play, Workflow } from 'lucide-react';

const IncidentResponse = () => {
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
          <AlertTriangle size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Incident Response and Automation Framework
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
              <Play size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Incident Plans and Playbooks</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Structured incident response processes ensure consistent, efficient, and effective security incident handling.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Response Framework:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Automated Response Workflows</li>
                <li>• Playbook Management</li>
                <li>• Task Assignment</li>
                <li>• Runbook Automation</li>
                <li>• Response Orchestration</li>
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
              <Workflow size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Orchestration Capabilities</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Advanced orchestration capabilities enable automated, coordinated responses across multiple security systems and tools.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Orchestration Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Multi-Tool Integration</li>
                <li>• Workflow Automation</li>
                <li>• Case Management</li>
                <li>• Playbook Execution</li>
                <li>• API-Driven Automation</li>
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
              <AlertTriangle size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Risk Assessment and Compliance</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive risk management and compliance monitoring support risk management for regulatory obligations and may be relevant for audits.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Risk & Compliance Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Continuous Risk Monitoring</li>
                <li>• Compliance Mapping Support</li>
                <li>• Vulnerability Management</li>
                <li>• Audit Trail Generation</li>
                <li>• Regulatory Reporting Support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default IncidentResponse;
