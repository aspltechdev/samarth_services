
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiUsers,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";
import "./About.css";

const values = [
  {
    icon: FiUsers,
    title: "Customer First",
    description:
      "We focus on understanding each customer's needs and helping them explore suitable services.",
  },
  {
    icon: FiTarget,
    title: "Practical Solutions",
    description:
      "We help customers navigate different service options with clear and useful guidance.",
  },
  {
    icon: FiAward,
    title: "Professional Approach",
    description:
      "We aim to provide a responsive, respectful and reliable customer experience.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Relationships",
    description:
      "We believe in building lasting relationships through communication and continued support.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <span className="about-eyebrow">GET TO KNOW US</span>

          <h1>
            Your Needs Matter.
            <br />
            <span>Our Solutions Bring You Closer.</span>
          </h1>

          <p>
            Discover Samarth Business Solutions, a destination
            for exploring a range of financial, travel and
            business-related services.
          </p>

          <Link to="/contact" className="about-hero-button">
            Connect With Our Team
            <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* About Introduction */}
      <section className="about-intro section-padding">
        <div className="container about-intro-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Professionals collaborating in a business meeting"
              loading="lazy"
            />

            <div className="about-image-label">
              <FiUsers size={25} />
              <div>
                <strong>People-Focused Service</strong>
                <span>Understanding your requirements</span>
              </div>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="section-kicker">WHO WE ARE</span>

            <h2>
              One Destination.
              <br />
              Multiple Service Solutions.
            </h2>

            <p>
              At Samarth Business Solutions, we bring together
              different service categories to make it easier
              for customers to explore their options.
            </p>

            <p>
              Whether you are looking into loan options,
              insurance, travel planning, vehicle rentals,
              courier and cargo, e-stamp or real estate services,
              our goal is to help you connect with the right
              service for your requirements.
            </p>

            <div className="about-check-list">
              <div>
                <FiCheckCircle />
                Multiple service categories
              </div>

              <div>
                <FiCheckCircle />
                Customer-focused assistance
              </div>

              <div>
                <FiCheckCircle />
                Convenient enquiry process
              </div>
            </div>

            <Link to="/services" className="about-text-link">
              Explore our services
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="container about-purpose-grid">
          <article className="purpose-card">
            <span className="purpose-number">01</span>
            <span className="purpose-icon">
              <FiTarget size={25} />
            </span>
            <h3>Our Mission</h3>
            <p>
              To make exploring everyday financial and business
              services more convenient through accessible
              information and helpful customer assistance.
            </p>
          </article>

          <article className="purpose-card purpose-card-highlight">
            <span className="purpose-number">02</span>
            <span className="purpose-icon">
              <FiTrendingUp size={25} />
            </span>
            <h3>Our Vision</h3>
            <p>
              To build lasting customer relationships and become
              a trusted destination for discovering a broad range
              of service solutions.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-padding">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">WHAT GUIDES US</span>
            <h2>The Values Behind Our Service</h2>
            <p>
              The principles that shape how we communicate,
              support customers and approach their requirements.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section">
        <div className="container about-cta">
          <div>
            <span>LET'S CONNECT</span>
            <h2>Looking for a service that fits your needs?</h2>
            <p>
              Talk to our team about your requirements and
              available service options.
            </p>
          </div>

          <Link to="/contact" className="about-cta-button">
            Contact Us
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
