
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiBriefcase,
  FiTruck,
  FiBookOpen,
  FiDollarSign,
  FiCreditCard,
  FiShield,
  FiPhone,
} from "react-icons/fi";

import "./Loans.css";

const loanTypes = [
  {
    icon: FiDollarSign,
    title: "Personal Loans",
    description:
      "Explore financing options for eligible personal expenses and financial needs.",
    features: [
      "Flexible loan options",
      "Eligibility-based assessment",
      "Guidance through the enquiry process",
    ],
  },
  {
    icon: FiHome,
    title: "Home Loans",
    description:
      "Explore financing options for purchasing, constructing or improving a home.",
    features: [
      "Home purchase financing",
      "Construction loan enquiries",
      "Property-related guidance",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Business Loans",
    description:
      "Discover financing options for eligible business expenses and growth plans.",
    features: [
      "Business funding enquiries",
      "Working capital options",
      "Business expansion financing",
    ],
  },
  {
    icon: FiTruck,
    title: "Vehicle Loans",
    description:
      "Enquire about financing options for eligible new or used vehicles.",
    features: [
      "Car financing enquiries",
      "Commercial vehicle options",
      "Eligibility information",
    ],
  },
  {
    icon: FiBookOpen,
    title: "Education Loans",
    description:
      "Explore education financing options for eligible academic programmes.",
    features: [
      "Course-related financing",
      "Eligible study expenses",
      "Application guidance",
    ],
  },
  {
    icon: FiCreditCard,
    title: "Gold Loans",
    description:
      "Enquire about gold-backed loan products offered by eligible lenders.",
    features: [
      "Lender-specific eligibility",
      "Gold valuation requirements",
      "Terms and charges information",
    ],
  },
  {
    icon: FiShield,
    title: "Loan Against Property",
    description:
      "Explore secured borrowing options subject to property and lender eligibility.",
    features: [
      "Property eligibility enquiries",
      "Documentation guidance",
      "Lender-specific loan terms",
    ],
  },
  {
    icon: FiDollarSign,
    title: "Other Loan Options",
    description:
      "Tell us what type of financing you need so we can discuss available options.",
    features: [
      "Discuss your requirements",
      "Understand eligibility criteria",
      "Explore available products",
    ],
  },
];

export default function Loans() {
  const phoneNumber = "919904856687";

  const getWhatsAppLink = (loanTitle) => {
    const message = encodeURIComponent(
      `Hello Samarth Business Solutions, I would like to enquire about ${loanTitle}. Please share the available options and eligibility requirements.`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="loans-page">
      {/* Hero */}
      <section className="loans-hero">
        <div className="container loans-hero-grid">
          <div className="loans-hero-content">
            <div className="loans-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Loans & Finance</span>
            </div>

            <span className="loans-eyebrow">
              FINANCING OPTIONS
            </span>

            <h1>
              Explore Your
              <br />
              <span>Loan Options</span>
              With Confidence.
            </h1>

            <p>
              Explore different loan categories and enquire about
              eligibility, documentation and terms from the relevant
              lending provider.
            </p>

            <div className="loans-hero-actions">
              <a
                href={getWhatsAppLink("loan options")}
                target="_blank"
                rel="noreferrer"
                className="loans-primary-btn"
              >
                Enquire About Loans
                <FiArrowRight />
              </a>

              <a href="#loan-types" className="loans-secondary-btn">
                Explore Categories
              </a>
            </div>

            <div className="loans-trust-note">
              <FiCheckCircle />
              <span>
                Options and approvals depend on lender criteria.
              </span>
            </div>
          </div>

          <div className="loans-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=85"
              alt="Professional discussing financial planning"
            />

            <div className="loans-image-card">
              <span className="loans-image-icon">
                <FiCreditCard size={23} />
              </span>
              <div>
                <strong>Find an option for your needs</strong>
                <span>Start with a simple enquiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan categories */}
      <section className="loans-categories section-padding" id="loan-types">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">OUR LOAN CATEGORIES</span>
            <h2>Explore Available Loan Options</h2>
            <p>
              Choose a category to discuss your requirements
              and learn about applicable eligibility conditions.
            </p>
          </div>

          <div className="loans-grid">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;

              return (
                <article className="loan-card" key={loan.title}>
                  <div className="loan-card-heading">
                    <span className="loan-card-icon">
                      <Icon size={25} />
                    </span>

                    <span className="loan-card-arrow">
                      <FiArrowRight size={19} />
                    </span>
                  </div>

                  <h3>{loan.title}</h3>
                  <p className="loan-card-description">
                    {loan.description}
                  </p>

                  <ul className="loan-features">
                    {loan.features.map((feature) => (
                      <li key={feature}>
                        <FiCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppLink(loan.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="loan-card-link"
                  >
                    Enquire Now
                    <FiArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="loans-process">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">HOW IT WORKS</span>
            <h2>Start With Three Simple Steps</h2>
            <p>
              A straightforward way to begin your loan enquiry.
            </p>
          </div>

          <div className="loans-process-grid">
            <article className="loan-step">
              <span className="loan-step-number">01</span>
              <h3>Choose a Category</h3>
              <p>
                Select the type of financing that matches your needs.
              </p>
            </article>

            <article className="loan-step">
              <span className="loan-step-number">02</span>
              <h3>Share Your Enquiry</h3>
              <p>
                Tell our team what you are looking for and ask about
                the next steps.
              </p>
            </article>

            <article className="loan-step">
              <span className="loan-step-number">03</span>
              <h3>Review Your Options</h3>
              <p>
                Review available products, eligibility, charges and
                lender terms before making a decision.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="loans-cta-section">
        <div className="container loans-cta">
          <div className="loans-cta-icon">
            <FiPhone size={28} />
          </div>

          <div className="loans-cta-content">
            <span>NEED HELP GETTING STARTED?</span>
            <h2>Let's discuss your financing requirements.</h2>
            <p>
              Contact our team to enquire about available loan
              categories and the relevant lender's requirements.
            </p>
          </div>

          <a
            href={getWhatsAppLink("financing requirements")}
            target="_blank"
            rel="noreferrer"
            className="loans-cta-btn"
          >
            Contact Us
            <FiArrowRight />
          </a>
        </div>
      </section>

      <p className="loans-disclaimer container">
        Loan availability, eligibility, interest rates, fees and approval
        are determined by the respective lender. The categories shown are
        informational and do not guarantee that a particular product is
        offered by Samarth Business Solutions.
      </p>
    </div>
  );
}
