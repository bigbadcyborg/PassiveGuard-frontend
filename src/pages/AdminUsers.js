import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDuration } from '../utils/format';
import './AdminUsers.css';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get('/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="spinner" />;

  return (
    <div className="admin-users-page">
      <div className="admin-header">
        <h1>User Management</h1>
        <div className="admin-meta">Total Registered: {users.length}</div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="card">
        <h2 className="card-title">All System Accounts</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Scans Run</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>#{user.id}</td>
                  <td style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status-badge ${user.role === 'admin' ? 'status-failed' : 'status-completed'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>{user.scan_count}</td>
                  <td>{new Date(user.created_at).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/admin/users/${user.id}`} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      Inspect
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;

