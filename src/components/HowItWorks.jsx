
import {
  FiMessageSquare,
  FiSearch,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: FiMessageSquare,
    title: "Tell Us What You Need",
    description:
      "Contact our team and explain whether you need loans, insurance, travel or another service.",
  },
  {
    number: "02",
    icon: FiSearch,
    title: "Explore Your Options",
    description:
      "Discuss relevant services and understand the options available for your requirements.",
  },
  {
    number: "03",
    icon: FiFileText,
    title: "Understand the Process",
    description:
      "Learn about the applicable documents, eligibility criteria, charges and terms.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Take Your Next Step",
    description:
      "Choose how you want to proceed and follow the process applicable to your selected service.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-heading">
          <span className="how-it-works-eyebrow">OUR PROCESS</span>

          <h2>
            Getting started is
            <span> simple and clear.</span>
          </h2>

          <p>
            We help you understand where to begin, what to explore and
            what steps may be needed for your chosen service.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="how-step-card" key={step.number}>
                <div className="how-step-top">
                  <span className="how-step-icon">
                    <Icon size={25} />
                  </span>

                  <span className="how-step-number">
                    {step.number}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <span className="how-step-connector">
                    <FiArrowRight />
                  </span>
                )}

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="how-it-works-bottom">
          <div className="how-bottom-icon">
            <FiMessageSquare size={23} />
          </div>

          <div className="how-bottom-copy">
            <h3>Have a requirement in mind?</h3>
            <p>
              Start a conversation with our team and tell us how we can help.
            </p>
          </div>

          <Link to="/contact" className="how-bottom-button">
            Start an Enquiry <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
