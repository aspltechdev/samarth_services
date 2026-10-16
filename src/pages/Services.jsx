
import { Link } from "react-router-dom";
import {
  FiTruck,
  FiPackage,
  FiHome,
  FiFileText,
  FiBriefcase,
  FiMapPin,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

import "./Services.css";

const businessServices = [
  {
    icon: FiTruck,
    title: "Vehicle Rentals",
    description:
      "Enquire about vehicle rental options for personal travel, business trips and transportation needs.",
    features: [
      "Vehicle availability enquiries",
      "Rental duration options",
      "Rental terms and pricing",
    ],
  },
  {
    icon: FiPackage,
    title: "Courier & Cargo",
    description:
      "Explore courier and cargo services for sending parcels, documents and eligible goods.",
    features: [
      "Parcel delivery enquiries",
      "Cargo transportation options",
      "Delivery timelines and charges",
    ],
  },
  {
    icon: FiHome,
    title: "Real Estate",
    description:
      "Discuss your property-related requirements and enquire about available real estate services.",
    features: [
      "Property-related enquiries",
      "Buying and selling assistance",
      "Property information",
    ],
  },
  {
    icon: FiFileText,
    title: "E-Stamp Services",
    description:
      "Enquire about e-stamp availability, applicable requirements and related assistance.",
    features: [
      "E-stamp enquiries",
      "Documentation requirements",
      "Applicable fees and procedures",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Business Support",
    description:
      "Discuss your business service requirements and explore the assistance available through our team.",
    features: [
      "Business service enquiries",
      "Requirement discussions",
      "Information about available services",
    ],
  },
  {
    icon: FiMapPin,
    title: "Other Services",
    description:
      "Have a specific requirement? Contact our team to ask whether the relevant service is available.",
    features: [
      "Personalised enquiries",
      "Service availability information",
      "Next-step guidance",
    ],
  },
];

export default function Services() {
  const phoneNumber = "919904856687";

  const createWhatsAppLink = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hello Samarth Business Solutions, I would like to enquire about ${serviceTitle}. Please share more information about the available services.`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="business-services-page">
      {/* Hero */}
      <section className="business-services-hero">
        <div className="container business-services-hero-inner">
          <div className="business-services-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Services</span>
          </div>

          <span className="business-services-eyebrow">
            MORE WAYS WE CAN HELP
          </span>

          <h1>
            Business & Everyday
            <br />
            <span>Services in One Place.</span>
          </h1>

          <p>
            From vehicle rentals and logistics to real estate and
            e-stamp enquiries, connect with our team to explore
            the services relevant to your requirements.
          </p>

          <div className="business-services-hero-actions">
            <a
              href={createWhatsAppLink("business services")}
              target="_blank"
              rel="noreferrer"
              className="business-services-primary-btn"
            >
              <FiMessageCircle size={18} />
              Enquire on WhatsApp
              <FiArrowRight />
            </a>

            <a
              href="#business-service-list"
              className="business-services-secondary-btn"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section
        className="business-services-list section-padding"
        id="business-service-list"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              OUR SERVICE CATEGORIES
            </span>

            <h2>Find the Service You Need</h2>

            <p>
              Select a category to learn more and send an enquiry
              to our team.
            </p>
          </div>

          <div className="business-services-grid">
            {businessServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="business-service-card"
                  key={service.title}
                >
                  <div className="business-service-card-top">
                    <span className="business-service-icon">
                      <Icon size={26} />
                    </span>

                    <FiArrowRight className="business-service-arrow" />
                  </div>

                  <h3>{service.title}</h3>

                  <p className="business-service-description">
                    {service.description}
                  </p>

                  <ul className="business-service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FiCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={createWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="business-service-link"
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

      {/* How it works */}
      <section className="business-services-process">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">
              A SIMPLE PROCESS
            </span>

            <h2>How to Get Started</h2>

            <p>
              Share your requirements and discuss the next steps
              with our team.
            </p>
          </div>

          <div className="business-services-steps">
            <article className="business-services-step">
              <span>01</span>
              <h3>Choose a Service</h3>
              <p>
                Select the category that matches your requirement.
              </p>
            </article>

            <article className="business-services-step">
              <span>02</span>
              <h3>Send an Enquiry</h3>
              <p>
                Tell us what you need and share relevant details.
              </p>
            </article>

            <article className="business-services-step">
              <span>03</span>
              <h3>Discuss the Options</h3>
              <p>
                Confirm availability, costs, terms and next steps
                with the relevant service provider.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="business-services-cta-section">
        <div className="container business-services-cta">
          <div className="business-services-cta-icon">
            <FiMessageCircle size={27} />
          </div>

          <div className="business-services-cta-content">
            <span>HAVE A SPECIFIC REQUIREMENT?</span>

            <h2>Let's find the right service for your needs.</h2>

            <p>
              Contact our team to discuss your requirements and
              the services currently available.
            </p>
          </div>

          <Link to="/contact" className="business-services-cta-btn">
            Contact Us
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
