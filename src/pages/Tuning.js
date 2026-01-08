import React from 'react';
import { Link } from 'react-router-dom';
import './Platform.css';

const Tuning = () => {
  return (
    <div className="platform-page">
      <div className="scanline"></div>
       <div style={{ marginBottom: '2rem' }}>
        <Link to="/platform" style={{ color: '#00f3ff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px' }}>
          &lt; BACK TO PLATFORM
        </Link>
      </div>

      <h1 className="cyber-title">TUNING & FALSE POSITIVES</h1>
      <p className="cyber-subtitle">Precision controls to filter noise and focus on real threats.</p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Suppress</h3>
          <p>One-click suppression for known safe patterns. Mark findings as "Won't Fix" or "False Positive" to stop seeing them in future reports. These are stored in your project configuration.</p>
        </div>
        <div className="feature-card">
          <h3>Baseline</h3>
          <p>Establish a 'known good' state. Configure the scanner to only alert on new deviations (regressions) introduced after a specific baseline commit or date.</p>
        </div>
        <div className="feature-card">
          <h3>Enforce</h3>
          <p>Block builds or deployments based on severity thresholds. Set policies (e.g., "Fail on High") to automatically break CI/CD pipelines when critical issues are found.</p>
        </div>
      </div>

      <div className="passive-box" style={{ marginTop: '4rem' }}>
        <h3>Adaptive Learning</h3>
        <p>Our platform learns from your suppressions. If you consistently mark a specific pattern as safe, the AI engine adapts to reduce future alerts for similar structures.</p>
      </div>
    </div>
  );
};

export default Tuning;
