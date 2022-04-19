export const HEADING = "Ready to start with us?";
export const SUBTEXT = "Choose the package that suits you.";

export const PRICING = [
  {
    name: "Junior",
    suitedFor: ["For basics"],
    rate: { hourly: "30$", monthly: "" },
    features: ["Standard SLA", "2-5 years experience"],
    terms: ["10 hour retainer (min)"],
  },
  {
    name: "Senior",
    suitedFor: ["For small teams"],
    rate: { hourly: "50$", monthly: "" },
    features: ["Standard SLA", "4-8 years experience"],
    terms: ["10 hour retainer (min)"],
  },
  {
    name: "Architect",
    suitedFor: ["For small teams & complex environments"],
    rate: { hourly: "80$", monthly: "" },
    features: ["Customized SLA", "8-15 years experience", "Shared slack"],
    terms: ["20 hour retainer (min)"],
  },
  {
    name: "Full",
    suitedFor: ["For complete outsourcing"],
    rate: { hourly: "80$", monthly: "" },
    features: [
      "Unlimited Hosting",
      "Product Design",
      "24/7 Development Support",
      "Monitoring & Alerts",
      "QA on our end",
      "Per hour consulting",
    ],
    terms: ["1 year contract (min)"],
  },
];
