
import {
  FiTarget,
  FiUsers,
  FiShield,
  FiMessageCircle,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./WhyChooseUs.css";

const benefits = [
  {
    icon: FiTarget,
    number: "01",
    title: "Solutions for Your Needs",
    description:
      "Explore relevant services based on your individual, family or business requirements.",
  },
  {
    icon: FiUsers,
    number: "02",
    title: "Personalised Assistance",
    description:
      "Discuss your requirements with our team and understand the available options.",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Clear and Transparent Guidance",
    description:
      "Get information about applicable processes, documentation, charges and terms before proceeding.",
  },
  {
    icon: FiMessageCircle,
    number: "04",
    title: "Easy Communication",
    description:
      "Connect with us through phone or WhatsApp to ask questions and make service enquiries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="why-choose-container">
        {/* Left Content */}
        <div className="why-choose-content">
          <span className="why-choose-eyebrow">
            WHY SAMARTH BUSINESS SOLUTIONS
          </span>

          <h2>
            Your needs.
            <span> Our commitment.</span>
          </h2>

          <p className="why-choose-description">
            Finding the right service shouldn't be complicated. We help you
            explore your options, understand the process and take your next
            step with greater clarity.
          </p>

          <div className="why-choose-points">
            <div>
              <FiCheckCircle />
              <span>Multiple services in one place</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Guidance based on your requirements</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Clear information about next steps</span>
            </div>
          </div>

          <Link to="/about" className="why-choose-button">
            Discover Our Approach <FiArrowRight />
          </Link>
        </div>

        {/* Right Benefit Cards */}
        <div className="why-choose-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="why-choose-card"
                key={benefit.number}
              >
                <div className="why-choose-card-top">
                  <span className="why-choose-icon">
                    <Icon size={25} />
                  </span>

                  <span className="why-choose-number">
                    {benefit.number}
                  </span>
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
