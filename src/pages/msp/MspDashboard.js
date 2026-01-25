import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { clinicsAPI } from '../../services/api';
import './Msp.css';

const normalizeClinics = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.clinics)) return payload.clinics;
  return [];
};

function MspDashboard() {
  const [clinics, setClinics] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    clinicsAPI
      .list()
      .then((response) => {
        if (!isMounted) return;
        const clinicList = normalizeClinics(response.data);
        setClinics(clinicList);
        setStatus('ready');
      })
      .catch(() => {
        if (isMounted) {
          setStatus('error');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const totals = useMemo(() => {
    return clinics.reduce(
      (acc, clinic) => {
        acc.assets += clinic.assets_count || clinic.assets || 0;
        acc.reports += clinic.reports_count || clinic.report_count || 0;
        acc.alerts += clinic.alerts_count || clinic.alert_count || 0;
        return acc;
      },
      { assets: 0, reports: 0, alerts: 0 }
    );
  }, [clinics]);

  return (
    <div className="msp-page">
      <div className="msp-header">
        <div>
          <h1>MSP Command Center</h1>
          <p className="msp-subtitle">Portfolio health across onboarded clinics</p>
        </div>
        <span className="msp-pill">Total Clinics: {clinics.length}</span>
      </div>

      <div className="msp-grid">
        <div className="msp-card">
          <span className="msp-card-label">Managed Assets</span>
          <span className="msp-card-value">{totals.assets}</span>
        </div>
        <div className="msp-card">
          <span className="msp-card-label">Active Reports</span>
          <span className="msp-card-value">{totals.reports}</span>
        </div>
        <div className="msp-card">
          <span className="msp-card-label">Open Alerts</span>
          <span className="msp-card-value">{totals.alerts}</span>
        </div>
        <Link className="msp-card" to="/msp/clinics">
          <span className="msp-card-label">Clinic Navigation</span>
          <span className="msp-card-title">Review Clinics</span>
          <span className="msp-subtitle">Drill into assets, reports, and alerts</span>
        </Link>
      </div>

      <div className="msp-section">
        <div className="msp-section-title">Clinic Watchlist</div>
        {status === 'loading' && <div className="msp-empty">Loading clinic telemetry…</div>}
        {status === 'error' && (
          <div className="msp-empty">Unable to load clinics. Check connectivity.</div>
        )}
        {status === 'ready' && clinics.length === 0 && (
          <div className="msp-empty">No clinics detected yet.</div>
        )}
        {status === 'ready' && clinics.length > 0 && (
          <table className="msp-table">
            <thead>
              <tr>
                <th>Clinic</th>
                <th>Assets</th>
                <th>Reports</th>
                <th>Alerts</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {clinics.map((clinic) => {
                const clinicId = clinic.id || clinic.clinic_id;
                const clinicName = clinic.name || clinic.clinic_name || clinicId;
                return (
                  <tr key={clinicId}>
                    <td>{clinicName}</td>
                    <td>{clinic.assets_count || clinic.assets || 0}</td>
                    <td>{clinic.reports_count || clinic.report_count || 0}</td>
                    <td>{clinic.alerts_count || clinic.alert_count || 0}</td>
                    <td>
                      <Link className="msp-link" to={`/msp/clinics/${clinicId}`}>
                        View Detail
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MspDashboard;
