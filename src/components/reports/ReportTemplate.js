import React from 'react';

function ReportTemplate({ clinic, report, branding, generatedAt }) {
  const executiveSummary = report?.executive_summary ||
    'Overall risk posture is improving, with critical findings reduced across monitored systems. The focus for the next cycle is to close residual high-severity exposure and maintain configuration hygiene.';
  const riskOverview = report?.risk_overview ||
    'High-risk findings are concentrated in externally facing services and credential hygiene gaps. Medium risks are primarily configuration drift and legacy protocol usage.';
  const exposureHighlights = report?.exposure_highlights || [
    'Legacy TLS endpoints detected on patient portal infrastructure.',
    'Unencrypted backups exposed to shared storage policies.',
    'Over-permissioned service accounts in scheduling stack.'
  ];
  const prioritizedFixList = report?.prioritized_fixes || [
    { item: 'Disable legacy TLS ciphers on patient portal', owner: 'Network Team', eta: '7 days' },
    { item: 'Rotate exposed service account credentials', owner: 'IT Security', eta: '3 days' },
    { item: 'Enforce MFA on remote access tools', owner: 'Operations', eta: '14 days' }
  ];
  const trendComparison = report?.trend_comparison || [
    { metric: 'Critical Findings', current: '2', previous: '5', change: '↓ 60%' },
    { metric: 'Mean Time to Remediate', current: '12 days', previous: '18 days', change: '↓ 33%' },
    { metric: 'Compliance Coverage', current: '92%', previous: '88%', change: '↑ 4%' }
  ];
  const evidenceAppendix = report?.evidence_appendix || [
    'Scan evidence bundle: 2024-09-14-clinic-a.zip',
    'Packet capture summary: TLS-downgrade-findings.pdf',
    'Configuration diff report: infra-drift-2024-09.txt'
  ];

  return (
    <div className="report-template">
      <header className="report-template__header">
        <div>
          <h2>{clinic?.name || 'Clinic Security Report'}</h2>
          <p>{generatedAt || report?.generated_at || 'Prepared for the latest assessment window.'}</p>
        </div>
        <div className="report-template__branding">
          <div className="report-template__branding-block">
            <span className="report-template__label">MSP Branding</span>
            <span>{branding?.mspName || 'Managed Security Partner'}</span>
            <span className="report-template__muted">{branding?.mspLogo ? 'Logo uploaded' : 'No logo uploaded'}</span>
          </div>
          {branding?.coBrandName && (
            <div className="report-template__branding-block">
              <span className="report-template__label">Co-branding</span>
              <span>{branding.coBrandName}</span>
              <span className="report-template__muted">{branding?.coBrandLogo ? 'Logo uploaded' : 'No logo uploaded'}</span>
            </div>
          )}
        </div>
      </header>

      <section className="report-template__section">
        <h3>Executive Summary</h3>
        <p>{executiveSummary}</p>
      </section>

      <section className="report-template__section">
        <h3>Risk Overview</h3>
        <p>{riskOverview}</p>
      </section>

      <section className="report-template__section">
        <h3>Exposure Highlights</h3>
        <ul>
          {exposureHighlights.map((item, index) => (
            <li key={`exposure-${index}`}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="report-template__section">
        <h3>Prioritized Fix List</h3>
        <div className="report-template__table">
          <div className="report-template__row report-template__row--header">
            <span>Fix Item</span>
            <span>Owner</span>
            <span>ETA</span>
          </div>
          {prioritizedFixList.map((fix, index) => (
            <div className="report-template__row" key={`fix-${index}`}>
              <span>{fix.item}</span>
              <span>{fix.owner}</span>
              <span>{fix.eta}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="report-template__section">
        <h3>Trend Comparison</h3>
        <div className="report-template__table">
          <div className="report-template__row report-template__row--header">
            <span>Metric</span>
            <span>Current</span>
            <span>Previous</span>
            <span>Change</span>
          </div>
          {trendComparison.map((trend, index) => (
            <div className="report-template__row" key={`trend-${index}`}>
              <span>{trend.metric}</span>
              <span>{trend.current}</span>
              <span>{trend.previous}</span>
              <span>{trend.change}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="report-template__section">
        <h3>Evidence Appendix</h3>
        <ul>
          {evidenceAppendix.map((item, index) => (
            <li key={`evidence-${index}`}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="report-template__footer">
        <div>
          <strong>Contact</strong>
          <p>{branding?.contactName || 'Security Operations Center'}</p>
          <p>{branding?.contactEmail || 'security@yourmsp.com'}</p>
          <p>{branding?.contactPhone || '+1 (555) 010-9920'}</p>
        </div>
        {branding?.coBrandName && branding?.coBrandContact && (
          <div>
            <strong>Co-brand Contact</strong>
            <p>{branding.coBrandContact}</p>
          </div>
        )}
      </footer>
    </div>
  );
}

export default ReportTemplate;
