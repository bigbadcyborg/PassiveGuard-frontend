import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './Register.css';

const PLANS = {
  TRIAL: { id: 'trial', name: 'Trial', price: 'Free', planId: null },
  SENTINEL: { id: 'sentinel', name: 'Sentinel', price: 'Under Maintenance', planId: 'P-SENTINEL-PLACEHOLDER' },
  OVERDRIVE: {
    id: 'overdrive',
    name: 'Overdrive',
    priceMonthly: '$99/mo',
    priceAnnual: '$950/yr (20% discount)',
    planIdMonthly: 'P-2WU47714HK420213SNFPXJ7Y',
    planIdAnnual: 'P-0WT31235DR558524CNFQIUDY',
  },
  NEXUS: { id: 'nexus', name: 'Nexus', price: 'Under Maintenance', planId: 'P-NEXUS-PLACEHOLDER' }
};

const initialOptions = {
    "client-id": "Af66kwAAX_3AFXqdlrhBTu20xs3MhJEYHnXyj2e1M7_qJSUsBTQmPrm35uGrdZIhuBLBcnPL7Cg0Iu0W",
    vault: true,
    intent: "subscription",
    "data-sdk-integration-source": "button-factory"
};

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedPlan, setSelectedPlan] = useState(PLANS.TRIAL.id);
  const [overdriveBilling, setOverdriveBilling] = useState('monthly'); // 'monthly' or 'annual'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (role, subscriptionId = null) => {
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!formData.username || !formData.email || !formData.password) {
        setError('Please fill in all fields');
        return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: role,
          subscription_id: subscriptionId
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (subscriptionId) {
             // If paid, auto-verified
             alert('Payment successful! Account created and verified.');
             navigate('/login');
        } else {
             // If trial, needs verification
             setRegisteredEmail(formData.email);
             setRegistrationSuccess(true);
        }
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      setError('Network error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleTrialSubmit = (e) => {
      e.preventDefault();
      handleRegister(PLANS.TRIAL.id, null);
  }

  if (registrationSuccess) {
    return (
      <div className="register-container">
        <div className="register-card">
          <h1>PassiveGuard</h1>
          <div className="success-container">
            <div className="success-icon">✓</div>
            <h2>Check Your Email</h2>
            <p>
              We've sent a verification link to <strong>{registeredEmail}</strong>
            </p>
            <p className="instructions">
              Click the link in the email to verify your account. The link will expire in 24 hours.
            </p>
            <div className="success-actions">
              <Link to="/login" className="btn btn-primary">
                Go to Login
              </Link>
              <Link 
                to="/resend-verification" 
                state={{ email: registeredEmail }}
                className="btn btn-secondary"
              >
                Resend Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="register-container">
      <div className="register-card" style={{ maxWidth: '500px' }}>
        <h1>PassiveGuard</h1>
        <h2>Create Account</h2>

        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <label style={{display: 'block', marginBottom: '10px', fontWeight: 'bold'}}>Select Plan</label>
          <div className="plan-selection">
            {Object.values(PLANS).map(plan => (
              <div 
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
              >
                <span className="plan-name">{plan.name}</span>
                {plan.id === 'overdrive' ? (
                  <>
                    <span className="plan-price">{overdriveBilling === 'annual' ? plan.priceAnnual : plan.priceMonthly}</span>
                    {selectedPlan === 'overdrive' && (
                      <div style={{ marginTop: 8 }}>
                        <label>
                          <input
                            type="radio"
                            name="overdriveBilling"
                            value="monthly"
                            checked={overdriveBilling === 'monthly'}
                            onChange={() => setOverdriveBilling('monthly')}
                          />
                          <span style={{ color: 'black' }}>Monthly</span>
                        </label>
                        <label style={{ marginLeft: 16 }}>
                          <input
                            type="radio"
                            name="overdriveBilling"
                            value="annual"
                            checked={overdriveBilling === 'annual'}
                            onChange={() => setOverdriveBilling('annual')}
                          />
                          <span style={{ color: 'black' }}>Annual</span>
                        </label>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="plan-price">{plan.price}</span>
                )}
              </div>
            ))}
          </div>

          {error && <div className="error-message">{error}</div>}

            {selectedPlan === PLANS.TRIAL.id ? (
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block" 
                  disabled={loading}
                  onClick={handleTrialSubmit}
                >
                  {loading ? 'Creating Account...' : 'Register for Trial'}
                </button>
            ) : (
                <div style={{ marginTop: '20px', minHeight: '150px' }}>
                        <PayPalButtons
                          key={selectedPlan + (selectedPlan === 'overdrive' ? '-' + overdriveBilling : '')}
                          style={{ 
                            shape: 'pill',
                            color: 'gold',
                            layout: 'vertical',
                            label: 'paypal'
                          }}
                          onInit={(data, actions) => {
                            console.log(`PayPal Button initialized for plan: ${selectedPlan}`, data);
                          }}
                          createSubscription={(data, actions) => {
                            let planId;
                            if (selectedPlan === 'overdrive') {
                              planId = overdriveBilling === 'annual' ? PLANS.OVERDRIVE.planIdAnnual : PLANS.OVERDRIVE.planIdMonthly;
                            } else {
                              planId = PLANS[selectedPlan.toUpperCase()].planId;
                            }
                            return actions.subscription.create({
                              'plan_id': planId
                            });
                          }}
                          onApprove={(data, actions) => {
                             handleRegister(selectedPlan, data.subscriptionID);
                          }}
                          onError={(err) => {
                            console.error("PayPal Error:", err);
                            setError("Payment failed to load. Please verify PayPal Client ID configuration.");
                          }}
                        />
                </div>
            )}
        </form>

        <div className="auth-links">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
    </PayPalScriptProvider>
  );
}

export default Register;



