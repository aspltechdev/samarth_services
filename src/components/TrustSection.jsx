
import {
  FiGrid,
  FiUsers,
  FiMessageCircle,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./TrustSection.css";

const trustPoints = [
  {
    icon: FiGrid,
    title: "Multiple Services",
    description:
      "Explore financial, insurance, travel and other service enquiries in one place.",
  },
  {
    icon: FiUsers,
    title: "Customer-Focused",
    description:
      "We aim to understand your requirements before discussing suitable next steps.",
  },
  {
    icon: FiMessageCircle,
    title: "Direct Communication",
    description:
      "Connect with our team to ask questions and discuss your service needs.",
  },
  {
    icon: FiCheckCircle,
    title: "Clear Next Steps",
    description:
      "Understand applicable processes, documentation and terms before proceeding.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section" id="our-commitment">
      <div className="trust-container">
        <div className="trust-heading">
          <span className="trust-eyebrow">THE SAMARTH APPROACH</span>

          <h2>
            More than a service.
            <span> A partner for your next step.</span>
          </h2>

          <p>
            We believe that good service starts with listening, clear
            communication and helping customers understand their options.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <article className="trust-card" key={point.title}>
                <div className="trust-card-top">
                  <span className="trust-card-icon">
                    <Icon size={25} />
                  </span>

                  <span className="trust-card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{point.title}</h3>

                <p>{point.description}</p>
              </article>
            );
          })}
        </div>

        <div className="trust-bottom">
          <div className="trust-bottom-content">
            <span className="trust-bottom-label">
              YOUR REQUIREMENTS COME FIRST
            </span>

            <h3>Let's understand what you need.</h3>

            <p>
              Share your requirements with our team and learn about the
              relevant services and next steps.
            </p>
          </div>

          <Link to="/contact" className="trust-button">
            Connect With Us <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
