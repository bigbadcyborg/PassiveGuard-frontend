import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { formatDuration } from '../utils/format';
import './AdminUserDetail.css';

function AdminUserDetail() {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserDetail();
  }, [userId]);

  const fetchUserDetail = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get(`/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="spinner" />;
  if (error) return <div className="error-message">{error}</div>;
  if (!data) return <div>User not found</div>;

  const { user, scans } = data;

  return (
    <div className="admin-user-detail">
      <div className="admin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/admin/users" className="btn btn-secondary" style={{ padding: '8px 15px' }}>&lt; BACK</Link>
          <h1>INSPECT: {user.username}</h1>
        </div>
        <div className={`status-badge ${user.role === 'admin' ? 'status-failed' : 'status-completed'}`}>
          ROLE: {user.role}
        </div>
      </div>

      <div className="scan-info-grid">
        <div className="card">
          <h3 className="card-title">Profile Data</h3>
          <div className="profile-info">
            <p><strong>ACCOUNT_ID:</strong> #{user.id}</p>
            <p><strong>USERNAME:</strong> {user.username}</p>
            <p><strong>EMAIL:</strong> {user.email}</p>
            <p><strong>JOINED:</strong> {new Date(user.created_at).toLocaleString()}</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Account Activity</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <span className="summary-label">TOTAL SCANS</span>
              <span className="summary-value">{scans.length}</span>
            </div>
            <div className="summary-stat">
              <span className="summary-label">LAST ACTIVE</span>
              <span className="summary-value">
                {scans.length > 0 ? new Date(scans[0].created_at).toLocaleDateString() : 'NEVER'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">User Scans</h2>
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
              {scans.length === 0 ? (
                <tr><td colSpan="6" style={{ textAlign: 'center' }}>No scans found for this user</td></tr>
              ) : (
                scans.map(scan => (
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
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUserDetail;



