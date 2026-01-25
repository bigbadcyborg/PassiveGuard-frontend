import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clinicsAPI } from '../../services/api';
import './Msp.css';

const normalizeReports = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.reports)) return payload.reports;
  return [];
};

function ClinicReports() {
  const { clinicId } = useParams();
  const [reports, setReports] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    clinicsAPI
      .getReports(clinicId)
      .then((response) => {
        if (!isMounted) return;
        setReports(normalizeReports(response.data));
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
  }, [clinicId]);

  return (
    <div className="msp-page">
      <div className="msp-header">
        <div>
          <h1>Clinic Reports</h1>
          <p className="msp-subtitle">Reporting history for clinic {clinicId}</p>
        </div>
        <Link className="msp-pill" to={`/msp/clinics/${clinicId}`}>
          Back to Clinic
        </Link>
      </div>

      {status === 'loading' && <div className="msp-empty">Loading reports…</div>}
      {status === 'error' && <div className="msp-empty">Unable to load reports.</div>}
      {status === 'ready' && reports.length === 0 && (
        <div className="msp-empty">No reports available.</div>
      )}
      {status === 'ready' && reports.length > 0 && (
        <table className="msp-table">
          <thead>
            <tr>
              <th>Report</th>
              <th>Status</th>
              <th>Generated</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => {
              const reportId = report.id || report.report_id;
              return (
                <tr key={reportId}>
                  <td>{report.title || report.name || 'Report'}</td>
                  <td>{report.status || 'In Progress'}</td>
                  <td>{report.generated_at || report.created_at || 'Pending'}</td>
                  <td>
                    <Link
                      className="msp-link"
                      to={`/msp/clinics/${clinicId}/reports/${reportId}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClinicReports;
