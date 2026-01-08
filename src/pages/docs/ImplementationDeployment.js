import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Settings } from 'lucide-react';

const ImplementationDeployment = () => {
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
          <Server size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Implementation and Deployment
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
              <Server size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Deployment Options</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Flexible deployment options accommodate diverse infrastructure requirements and organizational preferences.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Deployment Models:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• On-Premises Installation</li>
                <li>• Cloud-Based Deployment</li>
                <li>• Hybrid Architecture</li>
                <li>• Containerized Deployment</li>
                <li>• Edge Deployment</li>
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
              <Cloud size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Cloud Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive cloud integration capabilities ensure seamless operation across hybrid and multi-cloud environments.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Cloud Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Multi-Cloud Support</li>
                <li>• Auto-Scaling</li>
                <li>• Cloud Security</li>
                <li>• Migration Tools</li>
                <li>• Cost Optimization</li>
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
              <Settings size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Configuration Management</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Centralized configuration management ensures consistent, secure, and compliant platform deployment.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Configuration Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Automated Setup</li>
                <li>• Environment Templates</li>
                <li>• Version Control</li>
                <li>• Centralized Management</li>
                <li>• Compliance Configuration</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Deployment Models</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>On-Premises</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Traditional local server deployment with complete infrastructure control</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Cloud-Based</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>AWS, Azure, GCP hosted solutions with managed infrastructure</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Hybrid</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Mixed on-premises and cloud components for optimal flexibility</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Containerized</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Docker and Kubernetes support for scalable container deployments</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Edge Deployment</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Distributed edge computing support for low-latency processing</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ImplementationDeployment;