
import {
  FiTrendingUp,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FeaturedServices.css";

const WHATSAPP_NUMBER = "919904856687"; // Verify before publishing

const featuredServices = [
  {
    id: "loans",
    eyebrow: "FINANCIAL SOLUTIONS",
    title: "Find loan options for your goals.",
    description:
      "Explore loan categories for personal, family and business requirements. Enquire about eligibility, documentation and the next steps.",
    icon: FiTrendingUp,
    features: [
      "Personal and home loan enquiries",
      "Business and vehicle finance",
      "Information about eligibility and documents",
    ],
    link: "/loans",
    linkText: "Explore Loan Services",
    theme: "featured-loans",
  },
  {
    id: "insurance",
    eyebrow: "PROTECTION & COVERAGE",
    title: "Explore insurance for what matters.",
    description:
      "Discuss your insurance requirements and learn about available policy options, coverage details and applicable terms.",
    icon: FiShield,
    features: [
      "Health and life insurance enquiries",
      "Motor and property insurance",
      "Information about policy terms and coverage",
    ],
    link: "/insurance",
    linkText: "Explore Insurance",
    theme: "featured-insurance",
  },
];

export default function FeaturedServices() {
  return (
    <section className="featured-services-section" id="featured-services">
      <div className="featured-services-container">
        <div className="featured-services-heading">
          <span className="featured-services-eyebrow">
            OUR FEATURED SERVICES
          </span>

          <h2>
            Important decisions.
            <span> Better-informed choices.</span>
          </h2>

          <p>
            Start with the service you need. Our team can help you understand
            the relevant enquiry process and the information to consider.
          </p>
        </div>

        <div className="featured-services-grid">
          {featuredServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className={`featured-service-card ${service.theme}`}
                key={service.id}
              >
                <div className="featured-service-top">
                  <span className="featured-service-icon">
                    <Icon size={28} />
                  </span>

                  <span className="featured-service-label">
                    {service.eyebrow}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="featured-service-description">
                  {service.description}
                </p>

                <ul className="featured-service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FiCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="featured-service-actions">
                  <Link
                    to={service.link}
                    className="featured-service-button"
                  >
                    {service.linkText}
                    <FiArrowRight />
                  </Link>
                </div>

                <div className="featured-service-decoration" aria-hidden="true">
                  <Icon />
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-services-footer">
          <div className="featured-services-footer-copy">
            <span className="featured-services-footer-icon">
              <FiMessageCircle size={22} />
            </span>

            <div>
              <h3>Need help deciding where to start?</h3>
              <p>Tell us your requirement and discuss the available options.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Samarth Business Solutions! I would like help understanding your services."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="featured-services-contact-button"
          >
            Talk to Our Team <FiArrowRight />
          </a>
        </div>

        <p className="featured-services-disclaimer">
          Loan availability and approval depend on the relevant lender's
          eligibility criteria. Insurance coverage, exclusions and policy
          terms depend on the insurer and the selected policy.
        </p>
      </div>
    </section>
  );
}
