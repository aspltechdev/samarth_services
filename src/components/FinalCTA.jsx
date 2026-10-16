
import { FiArrowRight, FiPhoneCall, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./FinalCTA.css";

const WHATSAPP_NUMBER = "919904856687"; // Verify before publishing
const PHONE_NUMBER = "+91 99048 56687"; // Verify before publishing

export default function FinalCTA() {
  const message = encodeURIComponent(
    "Hello Samarth Business Solutions, I would like to know more about your services."
  );

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="final-cta-decoration final-cta-decoration-one" />
        <div className="final-cta-decoration final-cta-decoration-two" />

        <div className="final-cta-content">
          <span className="final-cta-label">
            LET'S MOVE FORWARD TOGETHER
          </span>

          <h2>
            Looking for the
            <span> Right Solution?</span>
          </h2>

          <p>
            Whether you need financial assistance, insurance, travel
            services or business support, our team is ready to help
            you explore your options.
          </p>

          <div className="final-cta-actions">
            <Link to="/contact" className="final-cta-primary">
              Get in Touch
              <FiArrowRight size={19} />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              className="final-cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMessageCircle size={19} />
              WhatsApp Us
            </a>
          </div>

          <div className="final-cta-contact">
            <FiPhoneCall size={17} />
            <span>Prefer to call?</span>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
