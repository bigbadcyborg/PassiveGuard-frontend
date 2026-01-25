import React, { useEffect, useState } from 'react';
import { alertsAPI } from '../services/api';
import './Alerts.css';

const getSeverityLabel = (alert) => (alert.severity || alert.risk || alert.priority || 'medium').toLowerCase();

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actioning, setActioning] = useState({});

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    try {
      const response = await alertsAPI.list();
      const responseAlerts = response.data.alerts || response.data || [];
      setAlerts(responseAlerts);
    } catch (error) {
      console.error('Error loading alerts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAcknowledge = async (alertId) => {
    setActioning((prev) => ({ ...prev, [alertId]: true }));
    try {
      await alertsAPI.acknowledge(alertId);
      setAlerts((prev) => prev.map((alert) => (
        alert.id === alertId ? { ...alert, acknowledged: true, status: 'acknowledged' } : alert
      )));
    } catch (error) {
      console.error('Error acknowledging alert:', error);
    } finally {
      setActioning((prev) => ({ ...prev, [alertId]: false }));
    }
  };

  if (loading) {
    return (
      <div className="alerts-container">
        <div className="card">
          <h2 className="card-title">Alerts Center</h2>
          <p>Loading change detection alerts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="alerts-container">
      <div className="alerts-header">
        <div>
          <h1>Alerts Center</h1>
          <p>Prioritized change detection events across monitored clinics.</p>
        </div>
      </div>

      {alerts.length === 0 ? (
        <div className="card alerts-empty">
          <h2 className="card-title">No active alerts</h2>
          <p>New scan-to-scan changes will appear here as soon as they are detected.</p>
        </div>
      ) : (
        <div className="alerts-grid">
          {alerts.map((alert) => {
            const severity = getSeverityLabel(alert);
            const status = (alert.status || (alert.acknowledged ? 'acknowledged' : 'open')).toLowerCase();
            return (
              <div key={alert.id || alert.created_at} className="card alert-card">
                <div className="alert-card-header">
                  <div>
                    <h2>{alert.title || 'Change Detection Alert'}</h2>
                    <p className="alert-meta">
                      <span className={`badge badge-${severity}`}>{severity.toUpperCase()}</span>
                      <span className={`alert-status alert-status-${status}`}>{status.replace('_', ' ')}</span>
                    </p>
                  </div>
                  {!alert.acknowledged && (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleAcknowledge(alert.id)}
                      disabled={actioning[alert.id]}
                    >
                      {actioning[alert.id] ? 'Acknowledging...' : 'Acknowledge'}
                    </button>
                  )}
                </div>

                <div className="alert-content-grid">
                  <div>
                    <h3>What Changed</h3>
                    <p>{alert.what_changed || alert.change_summary || alert.summary || 'No change summary provided.'}</p>
                  </div>
                  <div>
                    <h3>Why It Matters</h3>
                    <p>{alert.why_it_matters || alert.impact || alert.risk_summary || 'No impact narrative provided.'}</p>
                  </div>
                  <div>
                    <h3>Clinic</h3>
                    <p>{alert.clinic || alert.clinic_name || alert.location || 'Unassigned clinic'}</p>
                  </div>
                  <div>
                    <h3>Evidence</h3>
                    {alert.evidence_link || alert.evidence_url ? (
                      <a
                        href={alert.evidence_link || alert.evidence_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="evidence-link"
                      >
                        View evidence →
                      </a>
                    ) : (
                      <p>No evidence link available.</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Alerts;
