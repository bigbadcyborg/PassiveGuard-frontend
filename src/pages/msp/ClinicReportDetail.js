import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clinicsAPI } from '../../services/api';
import './Msp.css';

function ClinicReportDetail() {
  const { clinicId, reportId } = useParams();
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    clinicsAPI
      .getReport(clinicId, reportId)
      .then((response) => {
        if (!isMounted) return;
        setReport(response.data);
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
  }, [clinicId, reportId]);

  return (
    <div className="msp-page">
      <div className="msp-header">
        <div>
          <h1>Report Detail</h1>
          <p className="msp-subtitle">Clinic {clinicId}</p>
        </div>
        <Link className="msp-pill" to={`/msp/clinics/${clinicId}/reports`}>
          Back to Reports
        </Link>
      </div>

      {status === 'loading' && <div className="msp-empty">Loading report…</div>}
      {status === 'error' && (
        <div className="msp-empty">Unable to load report details.</div>
      )}
      {status === 'ready' && report && (
        <div className="msp-grid">
          <div className="msp-card">
            <span className="msp-card-label">Report</span>
            <span className="msp-card-title">{report.title || report.name || reportId}</span>
          </div>
          <div className="msp-card">
            <span className="msp-card-label">Status</span>
            <span className="msp-card-value">{report.status || 'In Progress'}</span>
          </div>
          <div className="msp-card">
            <span className="msp-card-label">Generated</span>
            <span className="msp-card-value">
              {report.generated_at || report.created_at || 'Pending'}
            </span>
          </div>
          <div className="msp-card">
            <span className="msp-card-label">Summary</span>
            <span className="msp-subtitle">
              {report.summary || 'No summary available yet.'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClinicReportDetail;
