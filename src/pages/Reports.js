import React, { useEffect, useMemo, useState } from 'react';
import { reportsAPI } from '../services/api';
import ReportTemplate from '../components/reports/ReportTemplate';
import './Reports.css';

const buildClinicKey = (clinic) => clinic?.id || clinic?.clinic_id || clinic?.clinicId || clinic?.name || clinic?.clinic_name || 'unassigned';
const buildClinicName = (clinic) => clinic?.name || clinic?.clinic_name || clinic?.clinic || clinic?.id || 'Unassigned Clinic';

const groupReportsByClinic = (reports) => reports.reduce((acc, report) => {
  const clinicKey = buildClinicKey(report) || buildClinicKey(report?.clinic) || 'unassigned';
  const clinicName = buildClinicName(report?.clinic || report);
  if (!acc[clinicKey]) {
    acc[clinicKey] = { clinicKey, clinicName, reports: [] };
  }
  acc[clinicKey].reports.push(report);
  return acc;
}, {});

const deriveClinics = (reports) => {
  const grouped = groupReportsByClinic(reports);
  return Object.values(grouped).map((entry) => ({ id: entry.clinicKey, name: entry.clinicName }));
};

function Reports() {
  const [clinics, setClinics] = useState([]);
  const [reportsByClinic, setReportsByClinic] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState(null);
  const [branding, setBranding] = useState({
    mspName: '',
    mspLogo: null,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    coBrandName: '',
    coBrandLogo: null,
    coBrandContact: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await reportsAPI.list();
      const data = response.data || {};
      const reports = Array.isArray(data) ? data : data.reports || [];
      const clinicList = data.clinics || deriveClinics(reports);

      setClinics(clinicList.map((clinic) => ({
        id: clinic.id || clinic.clinic_id || clinic.name,
        name: clinic.name || clinic.clinic_name || clinic.id || 'Clinic'
      })));
      setReportsByClinic(groupReportsByClinic(reports));
    } catch (loadError) {
      console.error('Error loading reports:', loadError);
      setError('Unable to load reports. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectClinic = (clinic) => {
    setSelectedClinic(clinic);
    setGeneratedReport(null);
  };

  const handleBrandingChange = (field) => (event) => {
    const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
    setBranding((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const generatedTimestamp = useMemo(() => {
    if (!generatedReport?.generated_at) return null;
    return new Date(generatedReport.generated_at).toLocaleString();
  }, [generatedReport]);

  const canGenerate = selectedClinic && branding.contactEmail && branding.contactName;

  const handleGenerateReport = async (event) => {
    event.preventDefault();
    if (!selectedClinic) return;
    setIsGenerating(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('clinic_id', selectedClinic.id);
      formData.append('clinic_name', selectedClinic.name);
      formData.append('msp_name', branding.mspName);
      formData.append('contact_name', branding.contactName);
      formData.append('contact_email', branding.contactEmail);
      formData.append('contact_phone', branding.contactPhone);
      if (branding.mspLogo) {
        formData.append('msp_logo', branding.mspLogo);
      }
      if (branding.coBrandName) {
        formData.append('co_brand_name', branding.coBrandName);
      }
      if (branding.coBrandLogo) {
        formData.append('co_brand_logo', branding.coBrandLogo);
      }
      if (branding.coBrandContact) {
        formData.append('co_brand_contact', branding.coBrandContact);
      }

      const response = await reportsAPI.generate(formData);
      setGeneratedReport(response.data);
      await loadReports();
    } catch (generateError) {
      console.error('Error generating report:', generateError);
      setError('Unable to generate report. Please check the inputs and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="reports-page">
      <header className="reports-header">
        <div>
          <h1>Reports Center</h1>
          <p>Generate branded security reports and track clinic readiness in one place.</p>
        </div>
      </header>

      <div className="reports-grid">
        <section className="reports-card">
          <div className="reports-card__header">
            <h2>Clinic Reports</h2>
            <p>Review existing reports by clinic and launch new report builds.</p>
          </div>
          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="reports-clinic-list">
              {error && <div className="reports-error">{error}</div>}
              {clinics.length === 0 && (
                <p className="reports-empty">No clinics found yet. Start by generating your first report.</p>
              )}
              {clinics.map((clinic) => {
                const clinicReports = reportsByClinic[clinic.id]?.reports || [];
                return (
                  <div className="clinic-card" key={clinic.id}>
                    <div className="clinic-card__header">
                      <div>
                        <h3>{clinic.name}</h3>
                        <span>{clinicReports.length} reports</span>
                      </div>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => handleSelectClinic(clinic)}
                      >
                        Generate Report
                      </button>
                    </div>
                    <div className="clinic-card__body">
                      {clinicReports.length === 0 ? (
                        <p className="reports-empty">No reports generated for this clinic yet.</p>
                      ) : (
                        <ul>
                          {clinicReports.slice(0, 3).map((report) => (
                            <li key={report.id || report.created_at}>
                              <span>{report.title || 'Security Report'}</span>
                              <span>{report.status || 'Completed'}</span>
                              <span>{report.created_at ? new Date(report.created_at).toLocaleDateString() : 'Recent'}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="reports-card">
          <div className="reports-card__header">
            <h2>Generate Report</h2>
            <p>Brand each report with MSP details and optional co-branding.</p>
          </div>
          {!selectedClinic ? (
            <p className="reports-empty">Select a clinic to configure and generate a report.</p>
          ) : (
            <form className="reports-form" onSubmit={handleGenerateReport}>
              <div className="reports-form__section">
                <h3>Clinic</h3>
                <div className="reports-form__highlight">
                  <strong>{selectedClinic.name}</strong>
                  <span>Clinic ID: {selectedClinic.id}</span>
                </div>
              </div>

              <div className="reports-form__section">
                <h3>MSP Branding</h3>
                <label>
                  MSP Name
                  <input
                    type="text"
                    value={branding.mspName}
                    onChange={handleBrandingChange('mspName')}
                    placeholder="PassiveGuard Managed Services"
                  />
                </label>
                <label>
                  MSP Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBrandingChange('mspLogo')}
                  />
                </label>
              </div>

              <div className="reports-form__section">
                <h3>Contact Info</h3>
                <label>
                  Contact Name
                  <input
                    type="text"
                    value={branding.contactName}
                    onChange={handleBrandingChange('contactName')}
                    placeholder="Security Operations Center"
                    required
                  />
                </label>
                <label>
                  Contact Email
                  <input
                    type="email"
                    value={branding.contactEmail}
                    onChange={handleBrandingChange('contactEmail')}
                    placeholder="soc@yourmsp.com"
                    required
                  />
                </label>
                <label>
                  Contact Phone
                  <input
                    type="text"
                    value={branding.contactPhone}
                    onChange={handleBrandingChange('contactPhone')}
                    placeholder="+1 (555) 010-9920"
                  />
                </label>
              </div>

              <div className="reports-form__section">
                <h3>Optional Co-branding</h3>
                <label>
                  Co-brand Name
                  <input
                    type="text"
                    value={branding.coBrandName}
                    onChange={handleBrandingChange('coBrandName')}
                    placeholder="Partner Organization"
                  />
                </label>
                <label>
                  Co-brand Logo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBrandingChange('coBrandLogo')}
                  />
                </label>
                <label>
                  Co-brand Contact
                  <input
                    type="text"
                    value={branding.coBrandContact}
                    onChange={handleBrandingChange('coBrandContact')}
                    placeholder="partner@organization.com"
                  />
                </label>
              </div>

              <button className="btn btn-primary" type="submit" disabled={!canGenerate || isGenerating}>
                {isGenerating ? 'Generating...' : 'Generate Report'}
              </button>
            </form>
          )}
        </section>
      </div>

      <section className="reports-card report-preview">
        <div className="reports-card__header">
          <h2>Report Preview</h2>
          <p>Live layout showing the standard report sections for stakeholders.</p>
        </div>
        <ReportTemplate
          clinic={selectedClinic}
          report={generatedReport}
          branding={branding}
          generatedAt={generatedTimestamp}
        />
      </section>
    </div>
  );
}

export default Reports;
