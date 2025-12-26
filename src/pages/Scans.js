import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scansAPI, utilsAPI } from '../services/api';
import socketService from '../services/socket';
import { formatDuration } from '../utils/format';
import './Scans.css';

const SCAN_TYPE_INFO = {
  full: {
    title: 'Full Scan',
    description: 'A comprehensive non-intrusive analysis combining Static Code Analysis (SAST), Taint Tracking, Dependency Scanning (SCA), Configuration Audits, and Network Traffic analysis.',
    details: [
      'SAST: Finds logical flaws and hardcoded secrets in source code.',
      'Taint Tracking: Maps data paths from untrusted sources to sensitive sinks.',
      'SCA: Identifies vulnerable 3rd-party libraries using the OSV database.',
      'Config: Ensures environment settings and IaC follow best practices.',
      'Network: Advanced analysis for insecure protocols, anomalies, and DNS exfiltration.'
    ]
  },
  code: {
    title: 'Code Analysis',
    description: 'Focuses on the application source code using SAST and Taint Tracking.',
    details: [
      'Identifies logical vulnerabilities (e.g., Command Injection, XSS).',
      'Detects hardcoded API keys, passwords, and tokens.',
      'Analyzes Abstract Syntax Trees (AST) for Python logic flaws.',
      'Traces unsanitized data flow from request parameters to database queries.'
    ]
  },
  config: {
    title: 'Configuration Analysis',
    description: 'Inspects infrastructure settings, environment variables, and deployment configs.',
    details: [
      'Flags insecure CORS, SSL/TLS, and Debug settings.',
      'Checks for exposed credentials in .env and config files.',
      'Audits Docker and environment configurations for best practices.'
    ]
  },
  traffic: {
    title: 'Network Traffic Analysis',
    description: 'Deep passive analysis of network logs and PCAP files for advanced security risks.',
    details: [
      'Detects insecure protocols (HTTP, FTP, SMTP, etc.) and legacy TLS (SSL 3.0, TLS 1.0/1.1).',
      'Flags plaintext credentials, bearer tokens, and JWTs in packet payloads.',
      'Advanced DNS security: Detects exfiltration, tunneling, and NXDOMAIN bursts.',
      'Flow Anomaly Detection: Identifies port scans, brute-force attempts, and C2 beaconing.',
      'Protocol-Aware Parsing: Verb-level analysis for FTP, SMTP, and SMBv1.'
    ]
  }
};

function Scans() {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    severity: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    target_path: '',
    scan_type: 'full',
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Folder Picker State
  const [showPicker, setShowPicker] = useState(false);
  const [pickerPath, setPickerPath] = useState('/app/projects');
  const [pickerItems, setPickerItems] = useState({ current: '/app/projects', parent: null, directories: [] });
  const [pickerLoading, setPickerLoading] = useState(false);

  useEffect(() => {
    loadScans();
    
    // Listen for real-time scan updates
    socketService.connect();
    socketService.on('scan_progress', (data) => {
      setScans(prevScans => prevScans.map(scan => 
        scan.id === data.scan_id ? { ...scan, status: 'running' } : scan
      ));
    });

    socketService.on('scan_completed', (data) => {
      setScans(prevScans => prevScans.map(scan => 
        scan.id === data.scan_id ? { 
          ...scan, 
          status: 'completed',
          duration: data.duration,
          total_findings: data.total_findings,
          high_severity: data.high_severity,
          medium_severity: data.medium_severity,
          low_severity: data.low_severity
        } : scan
      ));
    });

    socketService.on('scan_failed', (data) => {
      setScans(prevScans => prevScans.map(scan => 
        scan.id === data.scan_id ? { ...scan, status: 'failed' } : scan
      ));
    });

    return () => {
      socketService.off('scan_progress');
      socketService.off('scan_completed');
      socketService.off('scan_failed');
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newParam = params.get('new');
    const severityParam = params.get('severity');

    if (newParam === 'true') {
      setShowForm(true);
    }

    if (severityParam) {
      setFilters(prev => ({ ...prev, severity: severityParam }));
    }

    if (newParam || severityParam) {
      // Clear parameters so they don't persist on refresh
      navigate('/scans', { replace: true });
    }
  }, [location.search, navigate]);

  const loadScans = async () => {
    try {
      const response = await scansAPI.list();
      setScans(response.data);
    } catch (error) {
      console.error('Error loading scans:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPickerData = async (path) => {
    setPickerLoading(true);
    try {
      const response = await utilsAPI.ls(path);
      setPickerItems(response.data);
      setPickerPath(response.data.current);
    } catch (error) {
      console.error('Error loading directory:', error);
      alert('Could not read directory');
    } finally {
      setPickerLoading(false);
    }
  };

  const handleBrowse = () => {
    setShowPicker(true);
    loadPickerData(formData.target_path || '/app/projects');
  };

  const selectFolder = (dir) => {
    const newPath = pickerItems.current === '/' ? `/${dir}` : `${pickerItems.current}/${dir}`.replace(/\/+/g, '/');
    loadPickerData(newPath);
  };

  const goUp = () => {
    if (pickerItems.parent) {
      loadPickerData(pickerItems.parent);
    }
  };

  const confirmSelection = () => {
    setFormData({ ...formData, target_path: pickerItems.current });
    setShowPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await scansAPI.create(formData);
      setFormData({ name: '', target_path: '', scan_type: 'full' });
      setShowForm(false);
      
      // Automatically navigate to the new scan's detail page
      if (response.data && response.data.id) {
        navigate(`/scans/${response.data.id}`);
      } else {
        loadScans();
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error creating scan:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Error creating scan. Please check the target path exists.';
      alert(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (scanId) => {
    if (window.confirm('Are you sure you want to delete this scan and all its findings?')) {
      try {
        await scansAPI.delete(scanId);
        loadScans(); // Reload the list
      } catch (error) {
        console.error('Error deleting scan:', error);
        alert('Failed to delete scan.');
      }
    }
  };

  const filteredScans = scans.filter(scan => {
    if (filters.severity === 'high') return scan.high_severity > 0;
    if (filters.severity === 'medium') return scan.medium_severity > 0;
    if (filters.severity === 'low') return scan.low_severity > 0;
    return true;
  });

  if (loading) {
    return <div className="spinner" />;
  }

  return (
    <div className="scans-page">
      <div className="scans-header">
        <h1>Vulnerability Scans</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'New Scan'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2 className="card-title">Create New Scan</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Scan Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Target Path</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="form-input"
                  value={formData.target_path}
                  onChange={(e) => setFormData({ ...formData, target_path: e.target.value })}
                  placeholder="/path/to/codebase"
                  required
                />
                <button type="button" className="btn btn-secondary" onClick={handleBrowse}>
                  Browse
                </button>
              </div>
            </div>

            {showPicker && (
              <div className="modal-overlay">
                <div className="modal-content folder-picker">
                  <h3>Select Target Directory</h3>
                  <div className="picker-path">
                    <strong>Current:</strong> {pickerItems.current}
                  </div>
                  <div className="picker-list">
                    {pickerItems.parent && (
                      <div className="picker-item parent" onClick={goUp}>
                        📁 .. (Parent Directory)
                      </div>
                    )}
                    {pickerLoading ? (
                      <div className="spinner-small"></div>
                    ) : (
                      pickerItems.directories.map(dir => (
                        <div key={dir} className="picker-item" onClick={() => selectFolder(dir)}>
                          📁 {dir}
                        </div>
                      ))
                    )}
                    {!pickerLoading && pickerItems.directories.length === 0 && (
                      <div className="picker-empty">No subdirectories found</div>
                    )}
                  </div>
                  <div className="modal-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowPicker(false)}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={confirmSelection}>Select This Folder</button>
                  </div>
                </div>
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Scan Type</label>
              <select
                className="form-select"
                value={formData.scan_type}
                onChange={(e) => setFormData({ ...formData, scan_type: e.target.value })}
              >
                <option value="full">Full Scan (Code + Config + Dependencies + Traffic)</option>
                <option value="code">Code Analysis Only</option>
                <option value="config">Configuration Analysis Only</option>
                <option value="traffic">Network Traffic Analysis Only</option>
              </select>
            </div>

            {SCAN_TYPE_INFO[formData.scan_type] && (
              <div className="scan-type-description">
                <h4>{SCAN_TYPE_INFO[formData.scan_type].title}</h4>
                <p>{SCAN_TYPE_INFO[formData.scan_type].description}</p>
                <ul>
                  {SCAN_TYPE_INFO[formData.scan_type].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ marginTop: '10px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Starting...' : 'Start Scan'}
            </button>
          </form>
        </div>
      )}

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 className="card-title" style={{ marginBottom: 0 }}>All Scans</h2>
          <div className="filters">
            <select
              className="form-select"
              style={{ width: '200px' }}
              value={filters.severity}
              onChange={(e) => setFilters({ ...filters, severity: e.target.value })}
            >
              <option value="">All Severities</option>
              <option value="high">Has High Severity</option>
              <option value="medium">Has Medium Severity</option>
              <option value="low">Has Low Severity</option>
            </select>
          </div>
        </div>
        {scans.length === 0 ? (
          <p>No scans yet. Create your first scan to get started.</p>
        ) : filteredScans.length === 0 ? (
          <p>No scans found matching your criteria.</p>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Target</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Duration</th>
                  <th>Findings</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredScans.map(scan => (
                  <tr key={scan.id}>
                    <td>{scan.name}</td>
                    <td>{scan.target_path}</td>
                    <td>{scan.scan_type}</td>
                    <td>
                      <span className={`status-badge status-${scan.status}`}>
                        {scan.status}
                      </span>
                    </td>
                    <td>{formatDuration(scan.duration)}</td>
                    <td>
                      <span className="badge badge-high">{scan.high_severity}</span>
                      <span className="badge badge-medium">{scan.medium_severity}</span>
                      <span className="badge badge-low">{scan.low_severity}</span>
                    </td>
                    <td>{new Date(scan.created_at).toLocaleString()}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <Link to={`/scans/${scan.id}`} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                          View Details
                        </Link>
                        <button 
                          onClick={() => handleDelete(scan.id)} 
                          className="btn btn-danger" 
                          style={{ padding: '6px 12px', fontSize: '12px' }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scans;

