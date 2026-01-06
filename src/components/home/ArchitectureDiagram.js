import React from 'react';

const ArchitectureDiagram = () => {
    return (
        <div style={{ background: '#050505', padding: '6rem 0' }}>
            <div className="container">
                <h2 className="section-title center">HOW PASSIVEGUARD WORKS</h2>
                <p className="section-description center" style={{ marginBottom: '4rem' }}>
                    Cloud-native architecture designed for infinite scale and millisecond latency.
                </p>
                
                {/* Simplified CSS-based flowchart */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    
                    {/* Step 1 */}
                    <div style={{ textAlign: 'center', width: '200px' }}>
                        <div style={{ border: '2px solid #00f3ff', borderRadius: '50%', width: '100px', height: '100px', display: 'grid', placeItems: 'center', margin: '0 auto 20px', fontSize: '2rem', boxShadow: '0 0 20px rgba(0, 243, 255, 0.2)' }}>
                            📡
                        </div>
                        <h4 style={{ color: '#fff' }}>COLLECT</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Agents, Logs, & Traffic</p>
                    </div>

                    <div style={{ color: '#00f3ff', fontSize: '2rem' }}>➜</div>

                    {/* Step 2 */}
                    <div style={{ textAlign: 'center', width: '200px' }}>
                         <div style={{ border: '2px solid #bc13fe', borderRadius: '50%', width: '100px', height: '100px', display: 'grid', placeItems: 'center', margin: '0 auto 20px', fontSize: '2rem', boxShadow: '0 0 20px rgba(188, 19, 254, 0.2)' }}>
                            🧠
                        </div>
                        <h4 style={{ color: '#fff' }}>ANALYZE</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>AI Correlation Engine</p>
                    </div>

                    <div style={{ color: '#bc13fe', fontSize: '2rem' }}>➜</div>

                     {/* Step 3 */}
                     <div style={{ textAlign: 'center', width: '200px' }}>
                         <div style={{ border: '2px solid #ff0055', borderRadius: '50%', width: '100px', height: '100px', display: 'grid', placeItems: 'center', margin: '0 auto 20px', fontSize: '2rem', boxShadow: '0 0 20px rgba(255, 0, 85, 0.2)' }}>
                            🛡️
                        </div>
                        <h4 style={{ color: '#fff' }}>RESPOND</h4>
                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Auto-Remediation & Alerts</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
