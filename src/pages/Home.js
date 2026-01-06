import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreatVisualization from '../components/home/ThreatVisualization';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import UrgencyBanner from '../components/home/UrgencyBanner';
import SecurityNewsFeed from '../components/home/SecurityNewsFeed';
import ValueProposition from '../components/home/ValueProposition';
import SIEMPillars from '../components/home/SIEMPillars';
import UseCaseSlider from '../components/home/UseCaseSlider';
import ArchitectureDiagram from '../components/home/ArchitectureDiagram';
import TDIRPlatform from '../components/home/TDIRPlatform';
import Testimonials from '../components/home/Testimonials';
import './Home.css';

const IconSearch = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <circle cx="27" cy="27" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
    <line x1="39" y1="39" x2="54" y2="54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const IconTaint = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <path d="M10 44c8-6 14-6 22 0s14 6 22 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 20c8 6 14 6 22 0s14-6 22 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
  </svg>
);

const IconIac = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <path d="M16 16 32 8l16 8v16l-16 8-16-8Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M16 32v16l16 8 16-8V32" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const IconSupply = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <rect x="12" y="18" width="40" height="28" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M12 28h40M24 46V28" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const IconNetwork = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <path d="M16 15c8-8 24-8 32 0M22 21c5-5 15-5 20 0M28 27c2-2 6-2 8 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="32" y1="27" x2="32" y2="43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="47" r="2.5" fill="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
    <path d="M32 4l-18 8v16c0 14 18 28 18 28s18-14 18-28v-16l-18-8z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeJoin="round" />
    <path d="M32 14v24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M22 26h20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// ... (Icon components remain the same)

const iconMap = {
  search: <IconSearch />,
  taint: <IconTaint />,
  iac: <IconIac />,
  supply: <IconSupply />,
  network: <IconNetwork />,
  shield: <IconShield />
};

const features = [
  {
    title: "PASSIVEGUARD",
    subtitle: "NEXT-GEN SIEM & SOAR",
    description: "Uncover threats others miss with our AI-Powered Scanner. Faster detection, smarter responses, and seamless integration for your SOC.",
    color: "#00f3ff",
    icon: "shield",
    video: "/videos/static-analysis.mp4"
  },
  {
    title: "STATIC ANALYSIS",
    subtitle: "SAST / SEMGREP / BANDIT",
    description: "Deep inspection of source code for hardcoded secrets, SQL injection, XSS, and insecure function calls using industry-leading engines.",
    color: "#00f3ff",
    icon: "search",
    video: "/videos/security-shield.mp4"
  },
  {
    title: "TAINT TRACKING",
    subtitle: "DATA FLOW ANALYSIS",
    description: "Automatically trace untrusted input from request parameters to security-critical sinks like database queries and shell commands.",
    color: "#ff0055",
    icon: "taint",
    video: "/videos/taint-tracking.mp4"
  },
  {
    title: "INFRASTRUCTURE AS CODE",
    subtitle: "DOCKER / K8S / TERRAFORM",
    description: "Scan your cloud infrastructure configurations for misconfigurations, privileged containers, and exposed secrets before they deploy.",
    color: "#bc13fe",
    icon: "iac",
    video: "/videos/x.mp4"
  },
  {
    title: "SUPPLY CHAIN SECURITY",
    subtitle: "SCA / OSV / SBOM",
    description: "Track vulnerabilities in your open-source dependencies and generate comprehensive Software Bill of Materials (SBOM) in CycloneDX format.",
    color: "#39ff14",
    icon: "supply",
    video: "/videos/dependency-network.mp4"
  },
  {
    title: "NETWORK ANALYSIS",
    subtitle: "PCAP / PROTOCOL INSPECTION",
    description: "Passive analysis of packet captures to detect insecure protocols like HTTP, FTP, and Telnet, and identify plaintext credentials.",
    color: "#ff9e00",
    icon: "network",
    video: "/videos/network-analysis.mp4"
  }
];

const FeatureSlide = ({ feature }) => {
  return (
    <div className="slide-content">
      <div className="slide-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <motion.div 
          className="feature-icon"
          style={{ 
            color: feature.color,
            width: 'clamp(80px, 18vh, 120px)',
            height: 'clamp(80px, 18vh, 120px)',
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            margin: '0 auto',
            transform: 'translateY(-60px)',
            zIndex: 5,
            position: 'relative'
          }}
          animate={{ 
            boxShadow: [
              `0 0 20px ${feature.color}`, 
              `0 0 40px ${feature.color}`, 
              `0 0 20px ${feature.color}`
            ] 
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {iconMap[feature.icon]}
        </motion.div>
        <h3 className="slide-subtitle" style={{ color: feature.color }}>
          {feature.subtitle}
        </h3>
        <h2 className="slide-title" data-text={feature.title}>
          {feature.title}
        </h2>
        <p className="slide-description">
          {feature.description}
        </p>
        <Link to="/register" className="cta-btn" style={{ borderColor: feature.color, color: feature.color }}>
          SECURE YOUR PROJECT
        </Link>
      </div>
    </div>
  );
};

const BackgroundVideo = ({ features, currentSlide }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const video = videoRefs.current[currentSlide];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [currentSlide]);

  return (
    <div className="video-background-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
      {features.map((feature, index) => (
        <video
          key={index}
          ref={(el) => {
            if (el) {
              videoRefs.current[index] = el;
              el.playbackRate = 0.5;
            }
          }}
          muted
          playsInline
          preload="auto"
          onEnded={(e) => e.target.pause()} 
          className={`slide-bg-video ${index === currentSlide ? 'active-zoom' : ''}`}
          style={{ 
            opacity: index === currentSlide ? 0.3 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: 'block',
            visibility: 'visible'
          }}
        >
          <source src={process.env.PUBLIC_URL + feature.video + "?v=2"} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const isAuthenticated = !!localStorage.getItem('access_token');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Sync slide transition with 10s video cycle
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
      setTimeout(() => setIsGlitching(false), 100);
    }, 100);
  };

  const handlePrev = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
      setTimeout(() => setIsGlitching(false), 100);
    }, 100);
  };

  return (
    <div className={`home-container ${isGlitching ? 'glitch-active' : ''}`}>
      <div className="scanline"></div>
      
      {!isAuthenticated && (
        <header className="home-header">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="logo-glitch"
            data-text="PASSIVEGUARD"
          >
            PASSIVEGUARD
          </motion.div>
          
          {/* NEW: Home Nav for unauthenticated users */}
          <nav className="home-nav-links" style={{ display: 'flex', gap: '20px' }}>
              <Link to="/features/workflows" className="navbar-link" style={{ fontFamily: "'Courier New', monospace", color: '#fff' }}>Workflows</Link>
              <Link to="/features/response" className="navbar-link" style={{ fontFamily: "'Courier New', monospace", color: '#fff' }}>Response</Link>
              <Link to="/features/integrations" className="navbar-link" style={{ fontFamily: "'Courier New', monospace", color: '#fff' }}>Integrations</Link>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="cyber-btn login-btn">LOGIN</Link>
            <Link to="/pricing" className="cyber-btn register-btn">PRICING</Link>
          </div>
        </header>
      )}

      <div className="scroll-container">
         {/* EXISTING: The Technical Slider (now primary) */}
        <section className="hero-section" style={{ height: '100vh' }}>
          <BackgroundVideo features={features} currentSlide={currentSlide} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>
          
          <main className="glitch-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -100, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
              >
                <FeatureSlide feature={features[currentSlide]} />
              </motion.div>
            </AnimatePresence>

            <div className="slider-nav">
              <button onClick={handlePrev} className="nav-btn">{"<"}</button>
              <div className="nav-dots">
                {features.map((_, index) => (
                  <div 
                    key={index} 
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    style={{ backgroundColor: index === currentSlide ? features[index].color : 'transparent' }}
                  ></div>
                ))}
              </div>
              <button onClick={handleNext} className="nav-btn">{">"}</button>
            </div>
          </main>
        </section>

         {/* NEW: TDIR Platform */}
         <TDIRPlatform />

         {/* NEW: 5 Pillars */}
         <SIEMPillars />

        {/* NEW: Use Cases */}
        <UseCaseSlider />

        {/* NEW: Architecture */}
        <ArchitectureDiagram />

        <motion.section 
          className="feature-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="container">
            <h2 className="section-title center">GLOBAL THREAT INTELLIGENCE</h2>
            <p className="section-description center">
              Stay ahead of emerging threats with our real-time global intelligence feed. We aggregate and analyze security data from sources worldwide to provide you with the latest vulnerability disclosures, exploit trends, and security advisories relevant to your infrastructure.
            </p>
            <SecurityNewsFeed />
          </div>
        </motion.section>

        <motion.section 
          className="feature-section alt-bg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Moved ValueProposition from here to bottom */}
        </motion.section>

        <motion.section 
          className="feature-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ThreatVisualization />
        </motion.section>

         {/* NEW: Testimonials */}
         <Testimonials />

        <motion.section 
          className="feature-section alt-bg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <BeforeAfterComparison />
        </motion.section>

        <motion.section 
          className="feature-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
           <ValueProposition />
        </motion.section>

        <footer className="home-footer" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '20px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', fontSize: '0.9rem', color: '#888', marginBottom: '3rem', width: '100%', borderBottom: '1px solid #222', paddingBottom: '2rem' }}>
             <div style={{ textAlign: 'left' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '15px', letterSpacing: '1px' }}>PRODUCT</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                   <li style={{ marginBottom: '10px' }}><Link to="/features/workflows" style={{ color: '#888', textDecoration: 'none' }}>Automation</Link></li>
                   <li style={{ marginBottom: '10px' }}><Link to="/features/response" style={{ color: '#888', textDecoration: 'none' }}>Response</Link></li>
                   <li style={{ marginBottom: '10px' }}><Link to="/features/integrations" style={{ color: '#888', textDecoration: 'none' }}>Integrations</Link></li>
                </ul>
             </div>
             <div style={{ textAlign: 'left' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '15px', letterSpacing: '1px' }}>COMPANY</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                   <li style={{ marginBottom: '10px' }}><Link to="/pricing" style={{ color: '#888', textDecoration: 'none' }}>Pricing</Link></li>
                   <li style={{ marginBottom: '10px' }}><Link to="/blog" style={{ color: '#888', textDecoration: 'none' }}>Blog</Link></li>
                   <li style={{ marginBottom: '10px' }}>About Us</li>
                </ul>
             </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 2rem', boxSizing: 'border-box' }}>
            <div className="footer-status">
              <span className="status-indicator"></span>
              SYSTEM STATUS: SECURE
            </div>
            <div className="footer-version">v1.0.5 STABLE</div>
          </div>
        </footer>
      </div>

      <UrgencyBanner />
    </div>
  );
};

export default Home;

