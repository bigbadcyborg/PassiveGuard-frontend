import React, { useState, useEffect } from 'react';
import { debugAPI } from '../services/api';
import './DebugAgents.css';

function DebugAgents() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDebugInfo();
  }, []);

  const loadDebugInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await debugAPI.getAgents();
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to load debug info');
      console.error('Debug API error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="debug-container">
        <h1>Agent Debug Information</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="debug-container">
        <h1>Agent Debug Information</h1>
        <div className="error-message">Error: {error}</div>
        <button onClick={loadDebugInfo}>Retry</button>
      </div>
    );
  }

  return (
    <div className="debug-container">
      <h1>Agent Debug Information</h1>
      <button onClick={loadDebugInfo} style={{ marginBottom: '20px' }}>Refresh</button>
      
      <div className="debug-section">
        <h2>Current User</h2>
        <pre>{JSON.stringify(data.current_user, null, 2)}</pre>
      </div>

      <div className="debug-section">
        <h2>Connected Agents ({data.connected_agents.length})</h2>
        {data.connected_agents.length === 0 ? (
          <p className="no-agents">No agents currently connected.</p>
        ) : (
          <div className="agents-list">
            {data.connected_agents.map((agent, idx) => (
              <div key={idx} className="agent-item">
                <h3>Agent {idx + 1}</h3>
                <pre>{JSON.stringify(agent, null, 2)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="debug-section">
        <h2>Raw JSON</h2>
        <pre className="raw-json">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default DebugAgents;







