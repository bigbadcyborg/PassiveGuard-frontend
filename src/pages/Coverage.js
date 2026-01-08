import React from 'react';
import { Link } from 'react-router-dom';
import './Platform.css';

const Coverage = () => {
  return (
    <div className="platform-page">
      <div className="scanline"></div>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/platform" style={{ color: '#00f3ff', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px' }}>
          &lt; BACK TO PLATFORM
        </Link>
      </div>

      <h1 className="cyber-title">SECURITY COVERAGE</h1>
      <p className="cyber-subtitle">Deep inspection across every layer of your technology stack.</p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>SAST</h3>
          <p>Static Application Security Testing. We analyze your source code for vulnerabilities like SQL Injection, XSS, and insecure cryptographic practices without executing the code.</p>
        </div>
        <div className="feature-card">
          <h3>Secret Detection</h3>
          <p>Scans for hardcoded secrets such as API keys, database credentials, private tokens, and SSL certificates to prevent accidental leaks.</p>
        </div>
        <div className="feature-card">
          <h3>Dependency Vulnerabilities (SCA)</h3>
          <p>Software Composition Analysis. Identifies vulnerable open-source libraries and third-party dependencies (CVEs) in your project.</p>
        </div>
        <div className="feature-card">
          <h3>IaC Misconfigurations</h3>
          <p>Checks Infrastructure as Code files (Terraform, Kubernetes, CloudFormation) for security misconfigurations before they are deployed.</p>
        </div>
        <div className="feature-card">
          <h3>Container Security</h3>
          <p>Analyzes Docker images and container layers to detect operating system vulnerabilities and insecure configuration settings.</p>
        </div>
        <div className="feature-card">
          <h3>Authorization Patterns</h3>
          <p>Detects Broken Access Control (BAC) issues, weak authentication schemes, and potential privilege escalation vectors in code logic.</p>
        </div>
      </div>

      <div className="explore-buttons">
         <Link to="/platform/tuning" className="explore-btn">
          Next: Tuning →
        </Link>
      </div>
    </div>
  );
};

export default Coverage;
