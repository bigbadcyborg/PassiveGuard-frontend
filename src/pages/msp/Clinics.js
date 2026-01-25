import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clinicsAPI } from '../../services/api';
import './Msp.css';

const normalizeClinics = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.clinics)) return payload.clinics;
  return [];
};

function Clinics() {
  const [clinics, setClinics] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    clinicsAPI
      .list()
      .then((response) => {
        if (!isMounted) return;
        setClinics(normalizeClinics(response.data));
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

  return (
    <div className="msp-page">
      <div className="msp-header">
        <div>
          <h1>Clinics</h1>
          <p className="msp-subtitle">Monitor assets, alerts, and report readiness</p>
        </div>
        <span className="msp-pill">{clinics.length} Active</span>
      </div>

      {status === 'loading' && <div className="msp-empty">Loading clinic list…</div>}
      {status === 'error' && (
        <div className="msp-empty">Clinic inventory unavailable. Try again later.</div>
      )}
      {status === 'ready' && clinics.length === 0 && (
        <div className="msp-empty">No clinics onboarded yet.</div>
      )}
      {status === 'ready' && clinics.length > 0 && (
        <div className="msp-grid">
          {clinics.map((clinic) => {
            const clinicId = clinic.id || clinic.clinic_id;
            const clinicName = clinic.name || clinic.clinic_name || clinicId;
            return (
              <Link key={clinicId} to={`/msp/clinics/${clinicId}`} className="msp-card">
                <div className="msp-card-title">{clinicName}</div>
                <div className="msp-card-label">
                  Assets: {clinic.assets_count || clinic.assets || 0}
                </div>
                <div className="msp-card-label">
                  Reports: {clinic.reports_count || clinic.report_count || 0}
                </div>
                <div className="msp-card-label">
                  Alerts: {clinic.alerts_count || clinic.alert_count || 0}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Clinics;
