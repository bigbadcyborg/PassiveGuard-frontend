import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Platform.css';

const PlatformOverview = () => {
  return (
    <div className="platform-page">
      <div className="scanline"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="platform-hero"
      >
        <h1 className="cyber-title">PASSIVEGUARD PLATFORM</h1>
        <p className="cyber-subtitle">
          Complete security visibility without the noise. We scan your entire innovative footprint—from code to cloud traffic—passively. 
          No agents, no probes, just pure observation and AI-driven analysis.
        </p>
      </motion.div>

      <div className="platform-section">
        <div className="features-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <h3>What We Scan</h3>
            <ul>
              <li>Code (Repositories, Snippets)</li>
              <li>Cloud Infrastructure (AWS, Azure)</li>
              <li>Containers & Registries</li>
              <li>SaaS Configurations</li>
              <li>Endpoints (Passive telemetry)</li>
              <li>Network Traffic Logs</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <h3>Outcomes</h3>
            <ul>
              <li>Comprehensive Audit Reports</li>
              <li>Automated Jira/Linear Tickets</li>
              <li>Real-time Security Dashboards</li>
              <li>CI/CD Quality Gates</li>
              <li>Compliance Evidence</li>
              <li>Risk & Severity Scoring</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="passive-box"
      >
        <h3>TRUE PASSIVE SCANNING</h3>
        <p>We do not generate probe traffic. We observe existing artifacts and network traffic. Zero impact on production.</p>
      </motion.div>

      <div className="platform-section">
        <h2>How It Works</h2>
        <div className="diagram-container">
          <div className="diagram-step">
            <div className="diagram-box">Connect Sources</div>
          </div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-step">
            <div className="diagram-box">Passive Observation</div>
          </div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-step">
            <div className="diagram-box">AI Analysis</div>
          </div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-step">
            <div className="diagram-box">Actionable Results</div>
          </div>
        </div>
      </div>

      <div className="explore-buttons">
        <Link to="/platform/coverage" className="explore-btn">
          Explore Coverage →
        </Link>
        <Link to="/platform/tuning" className="explore-btn">
          Tuning & False Positives →
        </Link>
      </div>
    </div>
  );
};

export default PlatformOverview;
