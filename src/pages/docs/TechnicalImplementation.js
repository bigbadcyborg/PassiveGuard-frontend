import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Smartphone } from 'lucide-react';

const TechnicalImplementation = () => {
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
          <Cpu size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Technical Implementation and Data Flow
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
              <Network size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Data Collection and Processing</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              The platform leverages advanced data collection mechanisms to gather, process, and normalize information from a wide range of sources.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Data Integration Architecture:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Real-Time Security Data Aggregation</li>
                <li>• Cross-Platform Compatibility</li>
                <li>• Automated Data Normalization</li>
                <li>• Scalable Processing Capabilities</li>
                <li>• Secure Data Transmission Protocols</li>
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
              <Cpu size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Event Management</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              SIEM systems process security events through a series of sophisticated techniques to detect, analyze, and respond to threats.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Event Management Techniques:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Event Correlation for complex threat detection</li>
                <li>• Anomaly Detection using ML algorithms</li>
                <li>• Log Management and secure storage</li>
                <li>• Real-Time Analysis and alerting</li>
                <li>• Historical Analysis and trend identification</li>
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
              <Smartphone size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Mobile Device Management Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              The platform supports robust mobile device management (MDM) capabilities, ensuring that mobile endpoints are securely managed and monitored.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>MDM Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Unified Management Interface</li>
                <li>• Policy Enforcement across all endpoints</li>
                <li>• Remote Management (wipe, lock, app install)</li>
                <li>• Compliance Monitoring and verification</li>
                <li>• Automated Security Updates</li>
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
              <Network size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Cloud Infrastructure Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              The platform provides comprehensive cloud security monitoring and management capabilities across major cloud providers.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Cloud Integration Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Multi-Cloud Support (AWS, Azure, GCP)</li>
                <li>• Cloud Configuration Assessment</li>
                <li>• Resource Monitoring and alerting</li>
                <li>• Identity and Access Management</li>
                <li>• Container Security (Kubernetes, Docker)</li>
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
              <Network size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Network Security Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Advanced network security monitoring and threat detection capabilities protect against sophisticated cyber attacks.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Network Security Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Intrusion Detection and Prevention</li>
                <li>• Network Traffic Analysis</li>
                <li>• Firewall Management and monitoring</li>
                <li>• VPN Security Assessment</li>
                <li>• DDoS Protection and mitigation</li>
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
              <Cpu size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Endpoint Protection Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive endpoint protection ensures that all devices connected to the network are secured against malware and unauthorized access.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Endpoint Protection Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Advanced Malware Detection</li>
                <li>• Behavioral Analysis</li>
                <li>• Host-based Intrusion Prevention</li>
                <li>• Device Control and management</li>
                <li>• Vulnerability Assessment</li>
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
              <Network size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Threat Intelligence Integration</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Integration with global threat intelligence feeds provides proactive defense against emerging threats and attack patterns.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Threat Intelligence Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Global Threat Feed Integration</li>
                <li>• IOC (Indicators of Compromise) Management</li>
                <li>• Threat Actor Profiling</li>
                <li>• Predictive Threat Analysis</li>
                <li>• Automated Response Actions</li>
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
              <Cpu size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Compliance and Reporting</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive compliance monitoring and automated reporting capabilities support risk management for regulatory requirements and ongoing documentation.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Compliance Support:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Multi-Framework Mapping Support</li>
                <li>• Audit Trail Automation</li>
                <li>• Regulatory Reporting Workflows</li>
                <li>• Risk Assessment and scoring</li>
                <li>• Continuous Control Monitoring</li>
              </ul>
            </div>
          </motion.div>

        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Data Integration Architecture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Real-time Aggregation</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Continuous security data collection from multiple endpoints</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Cross-platform Compatibility</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Seamless integration across different security tools and systems</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Automated Normalization</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Standardized data formatting for consistent processing</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Scalable Processing</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>High-performance data processing for enterprise-scale operations</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Secure Transmission</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Encrypted data transfer protocols for sensitive information</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TechnicalImplementation;
