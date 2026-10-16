
import { Link } from "react-router-dom";
import {
  FiShield,
  FiHeart,
  FiHome,
  FiTruck,
  FiBriefcase,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall,
} from "react-icons/fi";

import "./Insurance.css";

const insuranceTypes = [
  {
    icon: FiHeart,
    title: "Health Insurance",
    description:
      "Explore health insurance options for eligible medical expenses, hospitalisation and healthcare needs.",
    features: [
      "Individual and family cover options",
      "Policy benefits and exclusions",
      "Waiting periods and eligibility",
    ],
  },
  {
    icon: FiShield,
    title: "Life Insurance",
    description:
      "Learn about life insurance products designed to provide financial protection to eligible beneficiaries.",
    features: [
      "Life cover options",
      "Policy term and benefits",
      "Premium and eligibility details",
    ],
  },
  {
    icon: FiTruck,
    title: "Motor Insurance",
    description:
      "Explore insurance options for cars, two-wheelers and other eligible vehicles.",
    features: [
      "Third-party insurance",
      "Comprehensive policy options",
      "Coverage and claim conditions",
    ],
  },
  {
    icon: FiHome,
    title: "Home Insurance",
    description:
      "Explore available insurance products for eligible homes and household assets.",
    features: [
      "Property protection options",
      "Covered risks and exclusions",
      "Policy conditions",
    ],
  },
  {
    icon: FiUsers,
    title: "Family Insurance",
    description:
      "Understand available insurance options that may help address your family's protection needs.",
    features: [
      "Family coverage options",
      "Benefits and limitations",
      "Policy suitability enquiries",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Business Insurance",
    description:
      "Enquire about insurance products that may address eligible business risks and operational needs.",
    features: [
      "Business risk protection",
      "Property and asset cover",
      "Policy-specific terms",
    ],
  },
];

export default function Insurance() {
  const phoneNumber = "919904856687";

  const createWhatsAppLink = (insuranceTitle) => {
    const message = encodeURIComponent(
      `Hello Samarth Business Solutions, I would like to enquire about ${insuranceTitle}. Please share the available policy options and details.`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="insurance-page">
      {/* Hero section */}
      <section className="insurance-hero">
        <div className="container insurance-hero-grid">
          <div className="insurance-hero-content">
            <div className="insurance-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Insurance</span>
            </div>

            <span className="insurance-eyebrow">
              PROTECTION & PEACE OF MIND
            </span>

            <h1>
              Understand Your
              <br />
              <span>Insurance Options.</span>
            </h1>

            <p>
              Explore health, life, motor, home and business
              insurance categories. Get information about policy
              benefits, eligibility, exclusions and terms before
              making an informed decision.
            </p>

            <div className="insurance-hero-actions">
              <a
                href={createWhatsAppLink("insurance options")}
                target="_blank"
                rel="noreferrer"
                className="insurance-primary-btn"
              >
                Enquire About Insurance
                <FiArrowRight />
              </a>

              <a
                href="#insurance-types"
                className="insurance-secondary-btn"
              >
                Explore Coverage Types
              </a>
            </div>

            <div className="insurance-note">
              <FiCheckCircle />
              <span>
                Coverage and claims depend on the actual policy terms.
              </span>
            </div>
          </div>

          <div className="insurance-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85"
              alt="Professional reviewing documents and insurance information"
            />

            <div className="insurance-floating-card">
              <span className="insurance-floating-icon">
                <FiShield size={25} />
              </span>

              <div>
                <strong>Make informed choices</strong>
                <span>Understand policy details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance categories */}
      <section
        className="insurance-types section-padding"
        id="insurance-types"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              INSURANCE CATEGORIES
            </span>

            <h2>Explore Insurance Options</h2>

            <p>
              Start with the coverage category that best matches
              your personal or business requirements.
            </p>
          </div>

          <div className="insurance-grid">
            {insuranceTypes.map((insurance) => {
              const Icon = insurance.icon;

              return (
                <article
                  className="insurance-card"
                  key={insurance.title}
                >
                  <div className="insurance-card-heading">
                    <span className="insurance-card-icon">
                      <Icon size={25} />
                    </span>

                    <FiArrowRight className="insurance-card-arrow" />
                  </div>

                  <h3>{insurance.title}</h3>

                  <p className="insurance-card-description">
                    {insurance.description}
                  </p>

                  <ul className="insurance-features">
                    {insurance.features.map((feature) => (
                      <li key={feature}>
                        <FiCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={createWhatsAppLink(insurance.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="insurance-card-link"
                  >
                    Enquire Now
                    <FiArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer guidance */}
      <section className="insurance-guidance">
        <div className="container insurance-guidance-grid">
          <div className="insurance-guidance-content">
            <span className="section-kicker">
              BEFORE YOU CHOOSE
            </span>

            <h2>Understand the Details Before You Decide</h2>

            <p>
              Insurance policies differ in their coverage,
              exclusions, premium costs and claim conditions.
              Review the actual policy documents and ask the
              insurer or authorised intermediary to explain
              anything that is unclear.
            </p>

            <Link to="/contact" className="insurance-guidance-link">
              Ask Us a Question
              <FiArrowRight />
            </Link>
          </div>

          <div className="insurance-checklist">
            {[
              "Understand the coverage and exclusions.",
              "Review premiums, deductibles and other charges.",
              "Check waiting periods and eligibility conditions.",
              "Understand the claims process and required documents.",
            ].map((item) => (
              <div className="insurance-checklist-item" key={item}>
                <FiCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="insurance-cta-section">
        <div className="container insurance-cta">
          <div className="insurance-cta-icon">
            <FiPhoneCall size={27} />
          </div>

          <div className="insurance-cta-content">
            <span>NEED HELP?</span>
            <h2>Let's discuss your insurance enquiry.</h2>
            <p>
              Contact our team to ask about available options
              and the next steps.
            </p>
          </div>

          <a
            href={createWhatsAppLink("insurance enquiry")}
            target="_blank"
            rel="noreferrer"
            className="insurance-cta-btn"
          >
            Contact Us
            <FiArrowRight />
          </a>
        </div>
      </section>

      <p className="insurance-disclaimer container">
        Insurance availability and suitability depend on the insurer,
        policy wording and applicable eligibility conditions.
        Coverage, premiums, exclusions and claims are governed by
        the actual policy documents. This page provides general
        information and does not guarantee coverage or claim approval.
      </p>
    </div>
  );
}
