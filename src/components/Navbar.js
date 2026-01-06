import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAuthenticated = !!localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    navigate('/home');
  };

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
              <Link to="/features/workflows" className="navbar-link">Workflows</Link>
              <Link to="/features/response" className="navbar-link">Response</Link>
              <Link to="/features/integrations" className="navbar-link">Integrations</Link>
              <Link to="/scans" className="navbar-link">Scans</Link>
              <Link to="/agents" className="navbar-link">Agents</Link>
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
              <Link to="/features/workflows" className="navbar-link">Workflows</Link>
              <Link to="/features/response" className="navbar-link">Response</Link>
              <Link to="/features/integrations" className="navbar-link">Integrations</Link>
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

