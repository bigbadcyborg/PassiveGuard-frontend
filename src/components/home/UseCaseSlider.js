import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UseCaseSlider = () => {
    const navigate = useNavigate();
    const cases = [
        {
            title: "Insider Threat Detection",
            content: "Identify anomalous user behavior and data exfiltration attempts before they become breaches. PassiveGuard baselines normal activity and flags deviations instantly.",
            img: "👤",
            route: "/docs/security-operations"
        },
        {
            title: "Cloud Security Monitoring",
            content: "Gain visibility into your AWS, Azure, and GCP logs. Detect misconfigurations, unauthorized access, and insecure storage buckets in real-time.",
            img: "☁️",
            route: "/docs/integration-capabilities"
        },
        {
            title: "Threat Hunting",
            content: "Proactively search through petabytes of data using our high-speed query engine. Pivot from indicators of compromise (IOCs) to root cause in seconds.",
            img: "🎯",
            route: "/docs/security-operations"
        }
    ];

    const [active, setActive] = useState(0);

    const handleLearnMore = () => {
        navigate(cases[active].route);
    };

    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <h2 className="section-title center">SOLUTIONS & USE CASES</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '3rem', flexWrap: 'wrap' }}>
                {cases.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`cyber-btn ${active === i ? '' : 'outline'}`}
                        style={{ background: active === i ? '#00f3ff' : 'transparent', color: active === i ? '#000' : '#00f3ff' }}
                    >
                        {c.title}
                    </button>
                ))}
            </div>

            <div style={{ 
                background: 'rgba(10,10,10,0.8)', 
                border: '1px solid #00f3ff', 
                padding: '3rem',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 30px rgba(0, 243, 255, 0.1)'
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '4rem', width: '100%', flexDirection: 'row' }}
                    >
                         <div style={{ fontSize: '8rem', flex: '0 0 200px', textAlign: 'center' }}>
                            {cases[active].img}
                         </div>
                         <div>
                             <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>{cases[active].title}</h3>
                             <p style={{ color: '#ccc', fontSize: '1.2rem', lineHeight: '1.8' }}>{cases[active].content}</p>
                             <button className="cyber-btn" style={{ marginTop: '2rem', fontSize: '0.9rem' }} onClick={handleLearnMore}>LEARN MORE</button>
                         </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default UseCaseSlider;
