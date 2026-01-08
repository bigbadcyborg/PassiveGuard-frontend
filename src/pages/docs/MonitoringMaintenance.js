import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, BarChart3 } from 'lucide-react';

const MonitoringMaintenance = () => {
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
          <Activity size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Monitoring and Maintenance
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
              <Activity size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Performance Monitoring</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive performance monitoring ensures optimal system operation and proactive issue resolution.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Monitoring Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• System Health Tracking</li>
                <li>• Resource Utilization</li>
                <li>• Alert Management</li>
                <li>• Trend Analysis</li>
                <li>• Optimization Recommendations</li>
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
              <Shield size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Security Monitoring</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Continuous security monitoring maintains platform integrity and enables rapid threat response.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Security Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Threat Detection</li>
                <li>• Vulnerability Assessment</li>
                <li>• Compliance Monitoring</li>
                <li>• Security Updates</li>
                <li>• Incident Tracking</li>
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
              <BarChart3 size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Capacity Planning</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Strategic capacity planning ensures resources meet current demands and future growth requirements.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Planning Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Resource Forecasting</li>
                <li>• Scalability Assessment</li>
                <li>• Usage Analytics</li>
                <li>• Infrastructure Planning</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Maintenance Operations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Automated Updates</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Regular system updates and patches with minimal downtime</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Backup Systems</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Comprehensive backup and recovery capabilities</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Health Checks</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Automated system health monitoring and diagnostics</p>
            </div>
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 243, 255, 0.05)', border: '1px solid rgba(0, 243, 255, 0.2)', borderRadius: '8px' }}>
              <h4 style={{ color: '#00f3ff', marginBottom: '0.5rem' }}>Disaster Recovery</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Business continuity and disaster recovery planning</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MonitoringMaintenance;