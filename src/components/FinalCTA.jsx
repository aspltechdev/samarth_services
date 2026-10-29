
// import { FiArrowRight, FiPhoneCall, FiMessageCircle } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./FinalCTA.css";

// const WHATSAPP_NUMBER = "919904856687"; // Verify before publishing
// const PHONE_NUMBER = "+91 99048 56687"; // Verify before publishing

// export default function FinalCTA() {
//   const message = encodeURIComponent(
//     "Hello Samarth Business Solutions, I would like to know more about your services."
//   );

//   return (
//     <section className="final-cta">
//       <div className="final-cta-container">
//         <div className="final-cta-decoration final-cta-decoration-one" />
//         <div className="final-cta-decoration final-cta-decoration-two" />

//         <div className="final-cta-content">
//           <span className="final-cta-label">
//             LET'S MOVE FORWARD TOGETHER
//           </span>

//           <h2>
//             Looking for the
//             <span> Right Solution?</span>
//           </h2>

//           <p>
//             Whether you need financial assistance, insurance, travel
//             services or business support, our team is ready to help
//             you explore your options.
//           </p>

//           <div className="final-cta-actions">
//             <Link to="/contact" className="final-cta-primary">
//               Get in Touch
//               <FiArrowRight size={19} />
//             </Link>

//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
//               className="final-cta-secondary"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiMessageCircle size={19} />
//               WhatsApp Us
//             </a>
//           </div>

//           <div className="final-cta-contact">
//             <FiPhoneCall size={17} />
//             <span>Prefer to call?</span>
//             <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
//               {PHONE_NUMBER}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  FiArrowRight,
  FiPhoneCall,
  FiMessageCircle,
  FiShield,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./FinalCTA.css";
import ft from "../assets/ft.png";

const WHATSAPP_NUMBER = "919904856687"; // Verify before publishing
const PHONE_NUMBER = "+91 99048 56687"; // Verify before publishing

export default function FinalCTA() {
  const message = encodeURIComponent(
    "Hello Samarth Business Solutions, I would like to know more about your services."
  );

  return (
    <section className="smc-final-cta" id="contact-cta">
      {/* Background atmosphere */}
      <div className="smc-final-cta-glow" aria-hidden="true" />
      <div className="smc-final-cta-grid" aria-hidden="true" />
      <div className="smc-final-cta-ring smc-final-cta-ring-one" />
      <div className="smc-final-cta-ring smc-final-cta-ring-two" />

      <div className="smc-final-cta-container">
        {/* Top eyebrow */}
        <motion.div
          className="smc-final-cta-topline"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="smc-final-cta-status">
            <span />
            LET'S MOVE FORWARD TOGETHER
          </span>

          <span className="smc-final-cta-index">
            SAMARTH / YOUR NEXT STEP
          </span>
        </motion.div>

        {/* Main content */}
        <div className="smc-final-cta-layout">
          <motion.div
            className="smc-final-cta-copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="smc-final-cta-kicker">
              A BETTER WAY TO MOVE FORWARD
            </span>

            <h2 className="smc-final-cta-title">
              Looking for the
              <br />
              <span>right solution?</span>
              <br />
              Let's find your
              <br />
              next step.
            </h2>

            <p className="smc-final-cta-description">
              From financial and insurance enquiries to travel and
              business services, connect with our team to understand
              your options and the next steps.
            </p>

            <div className="smc-final-cta-actions">
              <Link
                to="/contact"
                className="smc-final-cta-primary"
              >
                <span>Get in Touch</span>
                <span className="smc-final-cta-primary-icon">
                  <FiArrowRight />
                </span>
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                className="smc-final-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Samarth Business Solutions on WhatsApp"
              >
                <FiMessageCircle />
                <span>Chat on WhatsApp</span>
                <FiArrowUpRight className="smc-final-cta-external" />
              </a>
            </div>

            <div className="smc-final-cta-trustline">
              <span className="smc-final-cta-trust-icon">
                <FiCheckCircle />
              </span>
              <span>Start with a conversation. Explore your options.</span>
            </div>
          </motion.div>

          {/* Visual contact card */}
          <motion.div
            className="smc-final-cta-visual"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="smc-final-cta-image">
              <img
                src={ft}
                alt="Business professionals collaborating and discussing ideas"
                loading="lazy"
              />
              <div className="smc-final-cta-image-overlay" />

              <div className="smc-final-cta-image-caption">
                <span>YOUR NEEDS COME FIRST</span>
                <h3>
                  Your journey.
                  <br />
                  <span>Your priorities.</span>
                </h3>
              </div>

              <span className="smc-final-cta-image-tag">
                <FiShield />
                PERSONALIZED GUIDANCE
              </span>
            </div>

            {/* Floating phone card */}
            <div className="smc-final-cta-phone-card">
              <span className="smc-final-cta-phone-icon">
                <FiPhoneCall />
              </span>

              <div className="smc-final-cta-phone-copy">
                <span>PREFER A PHONE CALL?</span>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                  {PHONE_NUMBER}
                </a>
                <small>Speak with our team about your enquiry.</small>
              </div>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="smc-final-cta-call-link"
                aria-label="Call Samarth Business Solutions"
              >
                <FiArrowUpRight />
              </a>
            </div>

            <span className="smc-final-cta-visual-caption">
              HERE WHEN YOU NEED US
            </span>
          </motion.div>
        </div>

        {/* Bottom service strip */}
        <motion.div
          className="smc-final-cta-bottom"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="smc-final-cta-bottom-copy">
            <span className="smc-final-cta-bottom-label">
              ONE CONNECTED DESTINATION
            </span>
            <strong>Let’s talk about what you need.</strong>
          </div>

          <div className="smc-final-cta-service-tags">
            <span>Finance</span>
            <i />
            <span>Insurance</span>
            <i />
            <span>Travel</span>
            <i />
            <span>Business Services</span>
          </div>

          <Link
            to="/contact"
            className="smc-final-cta-bottom-link"
          >
            Contact our team
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
