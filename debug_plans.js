const PLANS = {
  TRIAL: { id: 'trial', name: 'Trial', price: 'Free', planId: null },
  SENTINEL: { id: 'sentinel', name: 'Sentinel', price: '$29.99/mo', planId: 'P-SENTINEL-PLACEHOLDER' },
  OVERDRIVE: { id: 'overdrive', name: 'Overdrive', price: '$99.99/mo', planId: 'P-2WU47714HK420213SNFPXJ7Y' },
  NEXUS: { id: 'nexus', name: 'Nexus', price: '$199.99/mo', planId: 'P-NEXUS-PLACEHOLDER' }
};

const selectedPlan = 'overdrive';
console.log("Selected Plan:", selectedPlan);
console.log("Upper:", selectedPlan.toUpperCase());
console.log("Plan Object:", PLANS[selectedPlan.toUpperCase()]);
console.log("Plan ID:", PLANS[selectedPlan.toUpperCase()].planId);
