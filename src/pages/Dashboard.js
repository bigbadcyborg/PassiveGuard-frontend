import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { statsAPI, scansAPI } from '../services/api';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentScans, setRecentScans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [statsResponse, scansResponse] = await Promise.all([
        statsAPI.get(),
        scansAPI.list(),
      ]);
      setStats(statsResponse.data);
      setRecentScans(scansResponse.data.slice(0, 5));
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="spinner" />;
  }

  const severityData = stats ? [
    { name: 'High', value: stats.severity_breakdown.high, color: '#ff0055' },
    { name: 'Medium', value: stats.severity_breakdown.medium, color: '#f3f315' },
    { name: 'Low', value: stats.severity_breakdown.low, color: '#39ff14' },
  ] : [];

  const vulnTypeData = stats ? Object.entries(stats.vulnerability_types)
    .map(([name, value]) => ({
      name: name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      value
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10) : [];

  const calculateAxisHeight = (data, baseHeight = 60, charThreshold = 12) => {
    if (!data || data.length === 0) return baseHeight;
    const maxLength = Math.max(...data.map(item => item.name.length));
    if (maxLength <= charThreshold) return baseHeight;
    const extraHeight = (maxLength - charThreshold) * 7; // Increased from 5 to 7px
    return Math.min(baseHeight + extraHeight, 220); // Increased from 180 to 220
  };

  const xAxisHeight = calculateAxisHeight(vulnTypeData);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="cyber-action-card">
        <div className="action-content">
          <div className="action-text">
            <h2 className="action-title">System Ready</h2>
            <p className="action-description">Initialize a new vulnerability scan to audit your codebase.</p>
          </div>
          <Link to="/scans?new=true" className="btn btn-primary">Initialize Scan</Link>
        </div>
      </div>

      <div className="stats-grid">
        <Link to="/scans" className="stat-card">
          <div className="stat-label">Total Scans</div>
          <div className="stat-value">{stats?.total_scans || 0}</div>
        </Link>
        <Link to="/scans" className="stat-card">
          <div className="stat-label">Total Findings</div>
          <div className="stat-value">{stats?.total_findings || 0}</div>
        </Link>
        <Link to="/scans?severity=high" className="stat-card stat-card-high">
          <div className="stat-label">High Severity</div>
          <div className="stat-value">{stats?.severity_breakdown?.high || 0}</div>
        </Link>
        <Link to="/scans?severity=medium" className="stat-card stat-card-medium">
          <div className="stat-label">Medium Severity</div>
          <div className="stat-value">{stats?.severity_breakdown?.medium || 0}</div>
        </Link>
        <Link to="/scans?severity=low" className="stat-card stat-card-low">
          <div className="stat-label">Low Severity</div>
          <div className="stat-value">{stats?.severity_breakdown?.low || 0}</div>
        </Link>
      </div>

      <div className="charts-grid">
        <div className="card">
          <h2 className="card-title">Severity Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart margin={{ bottom: 0 }}>
              <Pie
                data={severityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {severityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="card-title">Top Vulnerability Types</h2>
          <ResponsiveContainer width="100%" height={550}>
            <BarChart 
              data={vulnTypeData} 
              margin={{ top: 10, right: 20, left: 60, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={xAxisHeight} 
                interval={0}
                tick={{ fontSize: 11, dx: -5 }}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00f3ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Recent Scans</h2>
        {recentScans.length === 0 ? (
          <p>No scans yet. <Link to="/scans?new=true">Create your first scan</Link></p>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Target</th>
                  <th>Status</th>
                  <th>Findings</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentScans.map(scan => (
                  <tr key={scan.id}>
                    <td>{scan.name}</td>
                    <td>{scan.target_path}</td>
                    <td>
                      <span className={`status-badge status-${scan.status}`}>
                        {scan.status}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-high">{scan.high_severity}</span>
                      <span className="badge badge-medium">{scan.medium_severity}</span>
                      <span className="badge badge-low">{scan.low_severity}</span>
                    </td>
                    <td>{new Date(scan.created_at).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/scans/${scan.id}`} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                        View
                      </Link>
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

export default Dashboard;

