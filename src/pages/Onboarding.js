import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';

const onboardingSteps = [
  {
    title: 'Create MSP account',
    description: 'Set up your Managed Service Provider workspace to centralize client environments.',
    details: [
      'Confirm your organization profile and billing contact.',
      'Invite additional MSP administrators and analysts.',
      'Define default alerting preferences.',
    ],
  },
  {
    title: 'Add clinic',
    description: 'Register the clinic or customer you are onboarding for external discovery.',
    details: [
      'Capture the clinic name, primary contact, and location.',
      'Assign ownership and escalation paths.',
      'Tag the clinic with a service tier.',
    ],
  },
  {
    title: 'Input domain',
    description: 'Provide the primary domain you want to discover and monitor.',
    details: [
      'Enter the base domain (e.g., clinic-example.com).',
      'Add optional domain aliases used by the clinic.',
      'Confirm the discovery scope before verification.',
    ],
  },
  {
    title: 'Verify ownership',
    description: 'Validate that the clinic authorizes external discovery.',
    details: [
      'Upload a DNS TXT record or HTTP verification file.',
      'Confirm email-based verification with the primary contact.',
      'Review the verification audit log.',
    ],
  },
  {
    title: 'Schedule first scan',
    description: 'Launch the inaugural discovery scan and configure cadence.',
    details: [
      'Choose an immediate or scheduled start time.',
      'Enable notifications for new external assets.',
      'Review scan configuration and confirm.',
    ],
  },
];

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = onboardingSteps.length;
  const step = onboardingSteps[currentStep];

  const progressPercent = useMemo(() => {
    if (totalSteps === 0) return 0;
    return Math.round(((currentStep + 1) / totalSteps) * 100);
  }, [currentStep, totalSteps]);

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="onboarding-page">
      <div className="card">
        <div className="onboarding-header">
          <div>
            <h1 className="onboarding-title">External Discovery Onboarding</h1>
            <p className="onboarding-subtitle">
              Follow the guided steps to set up external asset discovery for a new clinic.
            </p>
          </div>
          <div className="onboarding-progress">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <div className="onboarding-progress-bar">
              <div className="onboarding-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        <div className="onboarding-body">
          <aside className="onboarding-steps">
            {onboardingSteps.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`onboarding-step ${index === currentStep ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
              >
                <span className="onboarding-step-index">{index + 1}</span>
                <span className="onboarding-step-title">{item.title}</span>
              </button>
            ))}
          </aside>

          <section className="onboarding-content">
            <h2>{step.title}</h2>
            <p className="onboarding-description">{step.description}</p>
            <ul className="onboarding-details">
              {step.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="onboarding-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={goBack}
            disabled={currentStep === 0}
          >
            Back
          </button>
          {currentStep < totalSteps - 1 ? (
            <button type="button" className="btn btn-primary" onClick={goNext}>
              Next Step
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={() => navigate('/external-assets')}>
              View External Assets
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
