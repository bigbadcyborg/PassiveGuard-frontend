import React, { useEffect, useMemo, useState } from 'react';
import { externalAssetsAPI } from '../services/api';
import './ExternalAssets.css';

const normalizeArray = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return [value];
};

const formatList = (value, emptyLabel = '—') => {
  const items = normalizeArray(value);
  if (items.length === 0) return emptyLabel;
  return items.join(', ');
};

const formatServices = (services) => {
  const items = normalizeArray(services);
  if (items.length === 0) return '—';
  return items
    .map((service) => {
      if (typeof service === 'string') return service;
      if (service?.name && service?.port) {
        const protocol = service.protocol ? `/${service.protocol}` : '';
        return `${service.name} (${service.port}${protocol})`;
      }
      if (service?.port && service?.protocol) {
        return `${service.port}/${service.protocol}`;
      }
      return JSON.stringify(service);
    })
    .join(', ');
};

const formatMetadataList = (items) => {
  return items.map((item) => {
    if (typeof item === 'string') return item;
    if (item?.name) return item.name;
    if (item?.id) return String(item.id);
    return JSON.stringify(item);
  });
};

const formatTlsHeaders = (asset) => {
  const tlsItems = formatMetadataList(normalizeArray(asset.tls));
  const headerItems = formatMetadataList(normalizeArray(asset.headers));
  const sections = [];
  if (tlsItems.length > 0) {
    sections.push(`TLS: ${tlsItems.join(', ')}`);
  }
  if (headerItems.length > 0) {
    sections.push(`Headers: ${headerItems.join(', ')}`);
  }
  return sections.length > 0 ? sections.join(' | ') : '—';
};

const formatTimestamp = (value) => {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString();
};

function ExternalAssets() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadAssets = async () => {
      setLoading(true);
      try {
        const response = await externalAssetsAPI.list();
        const payload = response.data;
        const list = Array.isArray(payload) ? payload : payload.assets || [];
        setAssets(list);
      } catch (error) {
        console.error('Error loading external assets:', error);
        setErrorMessage(error.response?.data?.error || 'Failed to load external assets.');
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  const summary = useMemo(() => {
    const domains = assets.length;
    const subdomains = assets.reduce((count, asset) => count + normalizeArray(asset.subdomains).length, 0);
    const ips = assets.reduce((count, asset) => count + normalizeArray(asset.ips).length, 0);
    return { domains, subdomains, ips };
  }, [assets]);

  return (
    <div className="external-assets-page">
      <div className="external-assets-header">
        <div>
          <h1>External Assets</h1>
          <p>Track discovered domains, infrastructure, and exposure metadata.</p>
        </div>
        <div className="external-assets-metrics">
          <div>
            <span className="metric-label">Domains</span>
            <span className="metric-value">{summary.domains}</span>
          </div>
          <div>
            <span className="metric-label">Subdomains</span>
            <span className="metric-value">{summary.subdomains}</span>
          </div>
          <div>
            <span className="metric-label">IPs</span>
            <span className="metric-value">{summary.ips}</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Asset Inventory</h2>
        {loading ? (
          <div className="spinner" />
        ) : errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : assets.length === 0 ? (
          <p>No external assets discovered yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Subdomains</th>
                  <th>IPs</th>
                  <th>Services</th>
                  <th>TLS / Headers</th>
                  <th>First Seen</th>
                  <th>Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id || asset.domain}>
                    <td>{asset.domain || '—'}</td>
                    <td>{formatList(asset.subdomains)}</td>
                    <td>{formatList(asset.ips)}</td>
                    <td>{formatServices(asset.services)}</td>
                    <td>{formatTlsHeaders(asset)}</td>
                    <td>{formatTimestamp(asset.first_seen_at)}</td>
                    <td>{formatTimestamp(asset.last_seen_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExternalAssets;
