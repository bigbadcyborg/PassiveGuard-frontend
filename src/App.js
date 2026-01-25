import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlatformOverviewAndCore from './pages/docs/PlatformOverviewAndCore';
import TechnicalImplementation from './pages/docs/TechnicalImplementation';
import AdvancedFeatures from './pages/docs/AdvancedFeatures';
import FutureProofing from './pages/docs/FutureProofing';
import IncidentResponse from './pages/docs/IncidentResponse';
import SecurityOperations from './pages/docs/SecurityOperations';
import ContinuousImprovement from './pages/docs/ContinuousImprovement';
import ImplementationDeployment from './pages/docs/ImplementationDeployment';
import IntegrationCapabilities from './pages/docs/IntegrationCapabilities';
import MonitoringMaintenance from './pages/docs/MonitoringMaintenance';
import Dashboard from './pages/Dashboard';
import Scans from './pages/Scans';
import ScanDetail from './pages/ScanDetail';
import Onboarding from './pages/Onboarding';
import ExternalAssets from './pages/ExternalAssets';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import ResendVerification from './pages/ResendVerification';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AdminUsers from './pages/AdminUsers';
import AdminUserDetail from './pages/AdminUserDetail';
import AdminTraffic from './pages/AdminTraffic';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Agents from './pages/Agents';
import DebugAgents from './pages/DebugAgents';
import Reports from './pages/Reports';
import Alerts from './pages/Alerts';
import Workflows from './pages/features/Workflows';
import Response from './pages/features/Response';
import Integrations from './pages/features/Integrations';
import PlatformOverview from './pages/PlatformOverview';
import Coverage from './pages/Coverage';
import Tuning from './pages/Tuning';
import MspDashboard from './pages/msp/MspDashboard';
import Clinics from './pages/msp/Clinics';
import ClinicDetail from './pages/msp/ClinicDetail';
import ClinicReports from './pages/msp/ClinicReports';
import ClinicReportDetail from './pages/msp/ClinicReportDetail';
import { ClinicProvider } from './context/ClinicContext';
import './App.css';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('access_token');
  return token ? children : <Navigate to="/home" />;
}

function AdminRoute({ children }) {
  const token = localStorage.getItem('access_token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!token) return <Navigate to="/login" />;
  if (user.role !== 'admin') return <Navigate to="/" />;
  
  return children;
}

function MainContent({ isAuthenticated }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  
  return (
    <main className={isAuthenticated && !isHomePage ? "main-content" : ""}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/resend-verification" element={<ResendVerification />} />
        <Route path="/features/workflows" element={<Workflows />} />
        <Route path="/features/response" element={<Response />} />
        <Route path="/features/integrations" element={<Integrations />} />
        <Route path="/platform" element={<PlatformOverview />} />
        <Route path="/platform/coverage" element={<Coverage />} />
        <Route path="/platform/tuning" element={<Tuning />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Documentation Dropdown Pages */}
        <Route path="/docs/platform-overview" element={<PlatformOverviewAndCore />} />
        <Route path="/docs/technical-implementation" element={<TechnicalImplementation />} />
        <Route path="/docs/advanced-features" element={<AdvancedFeatures />} />
        <Route path="/docs/future-proofing" element={<FutureProofing />} />
        <Route path="/docs/incident-response" element={<IncidentResponse />} />
        <Route path="/docs/security-operations" element={<SecurityOperations />} />
        <Route path="/docs/continuous-improvement" element={<ContinuousImprovement />} />
        <Route path="/docs/implementation-deployment" element={<ImplementationDeployment />} />
        <Route path="/docs/integration-capabilities" element={<IntegrationCapabilities />} />
        <Route path="/docs/monitoring-maintenance" element={<MonitoringMaintenance />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/scans"
          element={
            <PrivateRoute>
              <Scans />
            </PrivateRoute>
          }
        />
        <Route
          path="/msp"
          element={
            <PrivateRoute>
              <MspDashboard />
          path="/onboarding"
          element={
            <PrivateRoute>
              <Onboarding />
            </PrivateRoute>
          }
        />
        <Route
          path="/msp/clinics"
          element={
            <PrivateRoute>
              <Clinics />
            </PrivateRoute>
          }
        />
        <Route
          path="/msp/clinics/:clinicId"
          element={
            <PrivateRoute>
              <ClinicDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/msp/clinics/:clinicId/reports"
          element={
            <PrivateRoute>
              <ClinicReports />
            </PrivateRoute>
          }
        />
        <Route
          path="/msp/clinics/:clinicId/reports/:reportId"
          element={
            <PrivateRoute>
              <ClinicReportDetail />
          path="/external-assets"
          element={
            <PrivateRoute>
              <ExternalAssets />
            </PrivateRoute>
          }
        />
        <Route
          path="/agents"
          element={
            <PrivateRoute>
              <Agents />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
          path="/alerts"
          element={
            <PrivateRoute>
              <Alerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/debug/agents"
          element={
            <PrivateRoute>
              <DebugAgents />
            </PrivateRoute>
          }
        />
        <Route
          path="/scans/:scanId"
          element={
            <PrivateRoute>
              <ScanDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog/:postId"
          element={
            <PrivateRoute>
              <BlogPost />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users/:userId"
          element={
            <AdminRoute>
              <AdminUserDetail />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/traffic"
          element={
            <AdminRoute>
              <AdminTraffic />
            </AdminRoute>
          }
        />
      </Routes>
    </main>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'));

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('access_token');
      setIsAuthenticated(!!token);
    };

    // Listen for storage changes to update auth state across tabs/windows
    window.addEventListener('storage', checkAuth);
    
    // Initial check
    checkAuth();

    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="global-scanline"></div>
        <ClinicProvider isAuthenticated={isAuthenticated}>
          <Navbar />
          <MainContent isAuthenticated={isAuthenticated} />
        </ClinicProvider>
      </div>
    </Router>
  );
}

export default App;
