import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { alertsAPI } from '../services/api';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAuthenticated = !!localStorage.getItem('access_token');
  const [highRiskCount, setHighRiskCount] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    navigate('/home');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setHighRiskCount(0);
      return;
    }

    const loadAlerts = async () => {
      try {
        const response = await alertsAPI.list({ status: 'open' });
        const responseAlerts = response.data.alerts || response.data || [];
        const highRiskAlerts = responseAlerts.filter((alert) => {
          const severity = (alert.severity || alert.risk || alert.priority || '').toLowerCase();
          return severity === 'high' || severity === 'critical';
        });
        setHighRiskCount(highRiskAlerts.length);
      } catch (error) {
        console.error('Error loading alert badge count:', error);
      }
    };

    loadAlerts();
  }, [isAuthenticated]);

  // Don't show regular Navbar on Home page if not authenticated
  // as the Home page has its own cyberpunk header
  if (location.pathname === '/home' && !isAuthenticated) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={isAuthenticated ? "/" : "/home"} className="navbar-brand">
          PassiveGuard
        </Link>
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/" className="navbar-link">Dashboard</Link>
              <div className="dropdown">
                <Link to="/features/workflows" className="navbar-link">Workflows</Link>
                <div className="dropdown-content">
                  <Link to="/docs/platform-overview" className="dropdown-item">Platform Overview & Core Components</Link>
                  <Link to="/docs/technical-implementation" className="dropdown-item">Technical Implementation & Data Flow</Link>
                  <Link to="/docs/advanced-features" className="dropdown-item">Advanced Features & Security Capabilities</Link>
                  <Link to="/docs/future-proofing" className="dropdown-item">Future-Proofing & Innovation</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link to="/features/response" className="navbar-link">Response</Link>
                <div className="dropdown-content">
                  <Link to="/docs/incident-response" className="dropdown-item">Incident Response & Automation Framework</Link>
                  <Link to="/docs/security-operations" className="dropdown-item">Security Operations & Best Practices</Link>
                  <Link to="/docs/continuous-improvement" className="dropdown-item">Continuous Improvement</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link to="/features/integrations" className="navbar-link">Integrations</Link>
                <div className="dropdown-content">
                  <Link to="/docs/implementation-deployment" className="dropdown-item">Implementation & Deployment</Link>
                  <Link to="/docs/integration-capabilities" className="dropdown-item">Integration Capabilities</Link>
                  <Link to="/docs/monitoring-maintenance" className="dropdown-item">Monitoring & Maintenance</Link>
                </div>
              </div>
              <Link to="/scans" className="navbar-link">Scans</Link>
              <Link to="/agents" className="navbar-link">Agents</Link>
              <Link to="/alerts" className="navbar-link navbar-alerts-link">
                Alerts
                {highRiskCount > 0 && (
                  <span className="navbar-badge" aria-label={`${highRiskCount} high risk alerts`}>
                    {highRiskCount}
                  </span>
                )}
              </Link>
              <Link to="/pricing" className="navbar-link">Pricing</Link>
              <Link to="/blog" className="navbar-link">Blog</Link>
              {user.role === 'admin' && (
                <>
                  <Link to="/admin/users" className="navbar-link" style={{ color: 'var(--neon-pink)' }}>Users</Link>
                  <Link to="/admin/traffic" className="navbar-link" style={{ color: 'var(--neon-purple)' }}>Traffic</Link>
                </>
              )}
              <span className="navbar-user" style={{ color: user.role === 'admin' ? 'var(--neon-pink)' : 'var(--neon-blue)' }}>
                {user.username} [{user.role.toUpperCase()}]
              </span>
              <button onClick={handleLogout} className="navbar-link navbar-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="dropdown">
                <Link to="/features/workflows" className="navbar-link">Workflows</Link>
                <div className="dropdown-content">
                  <Link to="/docs/platform-overview" className="dropdown-item">Platform Overview & Core Components</Link>
                  <Link to="/docs/technical-implementation" className="dropdown-item">Technical Implementation & Data Flow</Link>
                  <Link to="/docs/advanced-features" className="dropdown-item">Advanced Features & Security Capabilities</Link>
                  <Link to="/docs/future-proofing" className="dropdown-item">Future-Proofing & Innovation</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link to="/features/response" className="navbar-link">Response</Link>
                <div className="dropdown-content">
                  <Link to="/docs/incident-response" className="dropdown-item">Incident Response & Automation Framework</Link>
                  <Link to="/docs/security-operations" className="dropdown-item">Security Operations & Best Practices</Link>
                  <Link to="/docs/continuous-improvement" className="dropdown-item">Continuous Improvement</Link>
                </div>
              </div>
              <div className="dropdown">
                <Link to="/features/integrations" className="navbar-link">Integrations</Link>
                <div className="dropdown-content">
                  <Link to="/docs/implementation-deployment" className="dropdown-item">Implementation & Deployment</Link>
                  <Link to="/docs/integration-capabilities" className="dropdown-item">Integration Capabilities</Link>
                  <Link to="/docs/monitoring-maintenance" className="dropdown-item">Monitoring & Maintenance</Link>
                </div>
              </div>
              <Link to="/pricing" className="navbar-link">Pricing</Link>
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/register" className="navbar-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
