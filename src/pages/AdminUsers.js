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

  const handleUpdateRole = async (userId, newRole) => {
    try {
      const token = localStorage.getItem('access_token');
      await axios.put(`/api/admin/users/${userId}/role`, 
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchUsers(); // Refresh the list
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to update user role');
    }
  };

  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Are you sure you want to delete user "${username}"? This cannot be undone.`)) {
      return;
    }
    
    try {
      const token = localStorage.getItem('access_token');
      await axios.delete(`/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUsers(); // Refresh the list
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to delete user');
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
                    <span className={`status-badge role-${user.role}`}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>{user.scan_count}</td>
                  <td>{new Date(user.created_at).toLocaleDateString()}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <Link to={`/admin/users/${user.id}`} className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '11px' }}>
                        Inspect
                      </Link>
                      
                      {user.role !== 'admin' && (
                        <>
                          {user.role === 'sentinel' && (
                            <button 
                              onClick={() => handleUpdateRole(user.id, 'overdrive')}
                              className="btn btn-primary" 
                              style={{ padding: '4px 8px', fontSize: '11px', borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)', background: 'transparent' }}
                            >
                              + Overdrive
                            </button>
                          )}
                          {user.role === 'overdrive' && (
                            <div style={{ display: 'flex', gap: '5px' }}>
                              <button 
                                onClick={() => handleUpdateRole(user.id, 'sentinel')}
                                className="btn btn-primary" 
                                style={{ padding: '4px 8px', fontSize: '11px', borderColor: 'var(--neon-blue)', color: 'var(--neon-blue)', background: 'transparent' }}
                              >
                                - Sentinel
                              </button>
                              <button 
                                onClick={() => handleUpdateRole(user.id, 'nexus')}
                                className="btn btn-primary" 
                                style={{ padding: '4px 8px', fontSize: '11px', borderColor: 'var(--neon-yellow)', color: 'var(--neon-yellow)', background: 'transparent' }}
                              >
                                + Nexus
                              </button>
                            </div>
                          )}
                          {user.role === 'nexus' && (
                            <button 
                              onClick={() => handleUpdateRole(user.id, 'overdrive')}
                              className="btn btn-primary" 
                              style={{ padding: '4px 8px', fontSize: '11px', borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)', background: 'transparent' }}
                            >
                              - Overdrive
                            </button>
                          )}
                          
                          <button 
                            onClick={() => handleDeleteUser(user.id, user.username)}
                            className="btn" 
                            style={{ padding: '4px 8px', fontSize: '11px', borderColor: '#ff4444', color: '#ff4444', background: 'transparent', marginLeft: '5px' }}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
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

