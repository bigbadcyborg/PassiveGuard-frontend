import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clinicsAPI } from '../../services/api';
import { useClinicContext } from '../../context/ClinicContext';
import './Msp.css';

const normalizeList = (payload, key) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.[key])) return payload[key];
  return [];
};

function ClinicDetail() {
  const { clinicId } = useParams();
  const { setSelectedClinicId } = useClinicContext();
  const [clinic, setClinic] = useState(null);
  const [assets, setAssets] = useState([]);
  const [reports, setReports] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setSelectedClinicId(clinicId);
  }, [clinicId, setSelectedClinicId]);

  useEffect(() => {
    let isMounted = true;
    setStatus('loading');

    Promise.allSettled([
      clinicsAPI.get(clinicId),
      clinicsAPI.getAssets(clinicId),
      clinicsAPI.getReports(clinicId),
      clinicsAPI.getAlerts(clinicId),
    ]).then((results) => {
      if (!isMounted) return;
      const [clinicResult, assetsResult, reportsResult, alertsResult] = results;

      if (clinicResult.status === 'fulfilled') {
        setClinic(clinicResult.value.data);
      }
      if (assetsResult.status === 'fulfilled') {
        setAssets(normalizeList(assetsResult.value.data, 'assets'));
      }
      if (reportsResult.status === 'fulfilled') {
        setReports(normalizeList(reportsResult.value.data, 'reports'));
      }
      if (alertsResult.status === 'fulfilled') {
        setAlerts(normalizeList(alertsResult.value.data, 'alerts'));
      }

      setStatus('ready');
    });

    return () => {
      isMounted = false;
    };
  }, [clinicId]);

  const clinicName = clinic?.name || clinic?.clinic_name || clinicId;

  return (
    <div className="msp-page">
      <div className="msp-header">
        <div>
          <h1>{clinicName}</h1>
          <p className="msp-subtitle">Clinic security posture and operational data</p>
        </div>
        <Link className="msp-pill" to={`/msp/clinics/${clinicId}/reports`}>
          View Reports
        </Link>
      </div>

      {status === 'loading' && <div className="msp-empty">Loading clinic telemetry…</div>}

      {status === 'ready' && (
        <>
          <div className="msp-grid">
            <div className="msp-card">
              <span className="msp-card-label">Assets</span>
              <span className="msp-card-value">{assets.length}</span>
            </div>
            <div className="msp-card">
              <span className="msp-card-label">Reports</span>
              <span className="msp-card-value">{reports.length}</span>
            </div>
            <div className="msp-card">
              <span className="msp-card-label">Active Alerts</span>
              <span className="msp-card-value">{alerts.length}</span>
            </div>
          </div>

          <div className="msp-section">
            <div className="msp-section-title">Critical Alerts</div>
            {alerts.length === 0 ? (
              <div className="msp-empty">No active alerts for this clinic.</div>
            ) : (
              <table className="msp-table">
                <thead>
                  <tr>
                    <th>Alert</th>
                    <th>Severity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert) => (
                    <tr key={alert.id || alert.alert_id}>
                      <td>{alert.title || alert.name || 'Alert'}</td>
                      <td>{alert.severity || 'Unknown'}</td>
                      <td>{alert.status || 'Open'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="msp-section">
            <div className="msp-section-title">Asset Inventory Snapshot</div>
            {assets.length === 0 ? (
              <div className="msp-empty">No assets reported for this clinic.</div>
            ) : (
              <table className="msp-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.slice(0, 5).map((asset) => (
                    <tr key={asset.id || asset.asset_id}>
                      <td>{asset.name || asset.hostname || 'Asset'}</td>
                      <td>{asset.type || asset.category || 'Unknown'}</td>
                      <td>{asset.status || 'Monitored'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ClinicDetail;
