
import { Link } from "react-router-dom";
import {
  FiMap,
  FiMapPin,
  FiCompass,
  FiBriefcase,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall,
  FiCalendar,
} from "react-icons/fi";

import "./Travel.css";

const travelServices = [
  {
    icon: FiMap,
    title: "Holiday Packages",
    description:
      "Enquire about available holiday packages for your preferred destination, dates and budget.",
    features: [
      "Destination options",
      "Trip duration enquiries",
      "Package inclusions and pricing",
    ],
  },
  {
    icon: FiCompass,
    title: "Domestic Travel",
    description:
      "Explore travel options for holidays, family visits and journeys across India.",
    features: [
      "Destination planning",
      "Travel itinerary assistance",
      "Transport options",
    ],
  },
  {
    icon: FiMapPin,
    title: "International Travel",
    description:
      "Discuss international travel arrangements and requirements for your planned trip.",
    features: [
      "Destination information",
      "Travel arrangement enquiries",
      "Visa requirements guidance",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Business Travel",
    description:
      "Enquire about travel arrangements for meetings, work visits and business trips.",
    features: [
      "Business trip planning",
      "Travel schedule coordination",
      "Accommodation enquiries",
    ],
  },
  {
    icon: FiUsers,
    title: "Group & Family Travel",
    description:
      "Explore travel arrangements for families, groups and special occasions.",
    features: [
      "Group travel enquiries",
      "Family trip planning",
      "Travel coordination",
    ],
  },
  {
    icon: FiCalendar,
    title: "Custom Travel Planning",
    description:
      "Share your preferred dates and interests to discuss a travel plan that suits your needs.",
    features: [
      "Flexible itinerary enquiries",
      "Activity and destination options",
      "Travel budget discussion",
    ],
  },
];

export default function Travel() {
  const phoneNumber = "919904856687";

  const createWhatsAppLink = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hello Samarth Business Solutions, I would like to enquire about ${serviceTitle}. Please share the available options and details.`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="travel-page">
      {/* Hero */}
      <section className="travel-hero">
        <div className="container travel-hero-grid">
          <div className="travel-hero-content">
            <div className="travel-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Travel & Tourism</span>
            </div>

            <span className="travel-eyebrow">
              DISCOVER YOUR NEXT JOURNEY
            </span>

            <h1>
              Every Journey
              <br />
              <span>Starts With a Plan.</span>
            </h1>

            <p>
              Explore travel possibilities for holidays, family
              trips, business visits and international journeys.
              Tell us your requirements to enquire about available
              arrangements and services.
            </p>

            <div className="travel-hero-actions">
              <a
                href={createWhatsAppLink("travel services")}
                target="_blank"
                rel="noreferrer"
                className="travel-primary-btn"
              >
                Plan Your Trip
                <FiArrowRight />
              </a>

              <a
                href="#travel-services"
                className="travel-secondary-btn"
              >
                Explore Services
              </a>
            </div>

            <div className="travel-trust-note">
              <FiCheckCircle />
              <span>
                Travel options are subject to availability and provider terms.
              </span>
            </div>
          </div>

          <div className="travel-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85"
              alt="Mountain landscape at a travel destination"
            />

            <div className="travel-image-card">
              <span className="travel-image-icon">
                <FiCompass size={25} />
              </span>

              <div>
                <strong>Your next adventure awaits</strong>
                <span>Start by sharing your travel plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="travel-services section-padding"
        id="travel-services"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">TRAVEL SERVICES</span>

            <h2>Explore Travel Possibilities</h2>

            <p>
              Choose a travel category and let us know what
              arrangements you are looking for.
            </p>
          </div>

          <div className="travel-grid">
            {travelServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="travel-card"
                  key={service.title}
                >
                  <div className="travel-card-heading">
                    <span className="travel-card-icon">
                      <Icon size={25} />
                    </span>

                    <FiArrowRight className="travel-card-arrow" />
                  </div>

                  <h3>{service.title}</h3>

                  <p className="travel-card-description">
                    {service.description}
                  </p>

                  <ul className="travel-features">
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
                    className="travel-card-link"
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

      {/* Planning process */}
      <section className="travel-process">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">HOW IT WORKS</span>

            <h2>Make Your Travel Enquiry Simple</h2>

            <p>
              Start with your plans, then explore the available options.
            </p>
          </div>

          <div className="travel-process-grid">
            <article className="travel-step">
              <span className="travel-step-number">01</span>
              <h3>Share Your Destination</h3>
              <p>
                Tell us where you want to go and who is travelling.
              </p>
            </article>

            <article className="travel-step">
              <span className="travel-step-number">02</span>
              <h3>Discuss Your Requirements</h3>
              <p>
                Share your dates, preferences and approximate budget.
              </p>
            </article>

            <article className="travel-step">
              <span className="travel-step-number">03</span>
              <h3>Review Available Options</h3>
              <p>
                Check availability, inclusions, prices and provider terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="travel-cta-section">
        <div className="container travel-cta">
          <div className="travel-cta-icon">
            <FiPhoneCall size={27} />
          </div>

          <div className="travel-cta-content">
            <span>READY TO START PLANNING?</span>
            <h2>Tell us about your next trip.</h2>
            <p>
              Enquire about travel arrangements and the services
              available for your requirements.
            </p>
          </div>

          <a
            href={createWhatsAppLink("a customised travel enquiry")}
            target="_blank"
            rel="noreferrer"
            className="travel-cta-btn"
          >
            Enquire Now
            <FiArrowRight />
          </a>
        </div>
      </section>

      <p className="travel-disclaimer container">
        Travel arrangements, bookings, prices, availability and visa
        requirements depend on the relevant providers and authorities.
        Confirm all details before booking. This page does not guarantee
        availability, visa approval or any particular travel outcome.
      </p>
    </div>
  );
}
