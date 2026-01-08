import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Award } from 'lucide-react';

const ContinuousImprovement = () => {
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
          <RefreshCw size={48} color="#00f3ff" />
        </div>
        <h1 className="glitch-text" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
          Continuous Improvement
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
              <RefreshCw size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Performance Analytics</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Data-driven performance optimization ensures maximum security effectiveness and operational efficiency.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Analytics Capabilities:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Security Metrics Tracking</li>
                <li>• Process Efficiency Analysis</li>
                <li>• Response Time Measurement</li>
                <li>• Resource Utilization</li>
                <li>• Quality Assurance</li>
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
              <Users size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Training and Development</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Comprehensive training programs ensure security teams maintain cutting-edge skills and knowledge.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Training Programs:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Security Awareness Programs</li>
                <li>• Technical Skill Enhancement</li>
                <li>• Certification Programs</li>
                <li>• Knowledge Management</li>
                <li>• Simulation Exercises</li>
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
              <Award size={24} color="#00f3ff" style={{ marginRight: '1rem' }} />
              <h3 style={{ color: '#00f3ff', fontSize: '1.2rem' }}>Best Practice Implementation</h3>
            </div>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Implementation of industry-leading security frameworks and standards ensures comprehensive protection.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>Best Practice Features:</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4', listStyle: 'none' }}>
                <li>• Industry Standards Adoption</li>
                <li>• Regulatory Compliance</li>
                <li>• Security Framework Integration</li>
                <li>• Audit Preparation</li>
                <li>• Continuous Monitoring</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContinuousImprovement;