import React from 'react';

const Testimonials = () => {
    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <h2 className="section-title center">CUSTOMER SUCCESS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '3rem' }}>
                
                <div style={{ background: '#111', padding: '2rem', borderLeft: '4px solid #00f3ff' }}>
                    <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                        "PassiveGuard cut our incident response time in half and uncovered threats we didn't know we were missing. It's the only tool my team actually enjoys using."
                    </p>
                </div>

                <div style={{ background: '#111', padding: '2rem', borderLeft: '4px solid #bc13fe' }}>
                    <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                        "The AI correlation is magic. We went from drowning in false positives to only seeing what matters. The board loves the executive reports."
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
