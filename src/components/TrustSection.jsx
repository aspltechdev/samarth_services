
// import {
//   FiGrid,
//   FiUsers,
//   FiMessageCircle,
//   FiCheckCircle,
//   FiArrowRight,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./TrustSection.css";

// const trustPoints = [
//   {
//     icon: FiGrid,
//     title: "Multiple Services",
//     description:
//       "Explore financial, insurance, travel and other service enquiries in one place.",
//   },
//   {
//     icon: FiUsers,
//     title: "Customer-Focused",
//     description:
//       "We aim to understand your requirements before discussing suitable next steps.",
//   },
//   {
//     icon: FiMessageCircle,
//     title: "Direct Communication",
//     description:
//       "Connect with our team to ask questions and discuss your service needs.",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Clear Next Steps",
//     description:
//       "Understand applicable processes, documentation and terms before proceeding.",
//   },
// ];

// export default function TrustSection() {
//   return (
//     <section className="trust-section" id="our-commitment">
//       <div className="trust-container">
//         <div className="trust-heading">
//           <span className="trust-eyebrow">THE SAMARTH APPROACH</span>

//           <h2>
//             More than a service.
//             <span> A partner for your next step.</span>
//           </h2>

//           <p>
//             We believe that good service starts with listening, clear
//             communication and helping customers understand their options.
//           </p>
//         </div>

//         <div className="trust-grid">
//           {trustPoints.map((point, index) => {
//             const Icon = point.icon;

//             return (
//               <article className="trust-card" key={point.title}>
//                 <div className="trust-card-top">
//                   <span className="trust-card-icon">
//                     <Icon size={25} />
//                   </span>

//                   <span className="trust-card-number">
//                     0{index + 1}
//                   </span>
//                 </div>

//                 <h3>{point.title}</h3>

//                 <p>{point.description}</p>
//               </article>
//             );
//           })}
//         </div>

//         <div className="trust-bottom">
//           <div className="trust-bottom-content">
//             <span className="trust-bottom-label">
//               YOUR REQUIREMENTS COME FIRST
//             </span>

//             <h3>Let's understand what you need.</h3>

//             <p>
//               Share your requirements with our team and learn about the
//               relevant services and next steps.
//             </p>
//           </div>

//           <Link to="/contact" className="trust-button">
//             Connect With Us <FiArrowRight />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  FiUsers,
  FiGrid,
  FiShield,
  FiMessageCircle,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./TrustSection.css";

const trustItems = [
  {
    number: "01",
    title: "Multiple Services",
    description:
      "Explore financial, insurance, travel and other service enquiries in one place.",
    label: "ONE CONNECTED DESTINATION",
    icon: FiGrid,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Customer-Focused",
    description:
      "We take time to understand your requirements and explore relevant options.",
    label: "YOUR NEEDS FIRST",
    icon: FiUsers,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Direct Communication",
    description:
      "Ask questions and understand the applicable processes before proceeding.",
    label: "CLEAR COMMUNICATION",
    icon: FiShield,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "Clear Next Steps",
    description:
      "Understand documentation, processes and terms relevant to your enquiry.",
    label: "INFORMED DECISIONS",
    icon: FiMessageCircle,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function TrustSection() {
  return (
    <section className="smc-trust-section" id="our-commitment">
      {/* Background effects */}
      <div className="smc-trust-ambient" aria-hidden="true" />
      <div className="smc-trust-grid-bg" aria-hidden="true" />
      <div
        className="smc-trust-orbit smc-trust-orbit-one"
        aria-hidden="true"
      />
      <div
        className="smc-trust-orbit smc-trust-orbit-two"
        aria-hidden="true"
      />

      <div className="smc-trust-container">
        {/* Brand header */}
        <motion.div
          className="smc-trust-topbar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="smc-trust-brand">
            <span className="smc-trust-brand-icon">S</span>
            <span>SAMARTH MULTISERVE</span>
          </div>

          <span className="smc-trust-topbar-label">
            THE SAMARTH APPROACH
          </span>
        </motion.div>

        {/* Main cinematic layout */}
        <div className="smc-trust-hero">
          {/* Left content */}
          <motion.div
            className="smc-trust-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="smc-trust-eyebrow">
              <span />
              YOUR NEEDS. OUR COMMITMENT.
            </span>

            <h2 className="smc-trust-title">
              More than
              <br />
              a service.
              <br />
              <span>A partner for your</span>
              <br />
              <span>next step.</span>
            </h2>

            <p className="smc-trust-description">
              We combine multiple services, personalised support
              and clear guidance to help you move forward with
              confidence.
            </p>

            <div className="smc-trust-value-list">
              <div className="smc-trust-value">
                <span className="smc-trust-value-icon">
                  <FiUsers />
                </span>
                <div>
                  <strong>People-first approach</strong>
                  <span>We listen and understand.</span>
                </div>
              </div>

              <div className="smc-trust-value">
                <span className="smc-trust-value-icon">
                  <FiGrid />
                </span>
                <div>
                  <strong>Multiple services</strong>
                  <span>Different needs, one place.</span>
                </div>
              </div>

              <div className="smc-trust-value">
                <span className="smc-trust-value-icon">
                  <FiShield />
                </span>
                <div>
                  <strong>Clear and transparent</strong>
                  <span>Guidance at every step.</span>
                </div>
              </div>
            </div>

            <Link to="/contact" className="smc-trust-intro-link">
              Discover the Samarth approach
              <FiArrowUpRight />
            </Link>
          </motion.div>

          {/* Central image */}
          <motion.div
            className="smc-trust-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="smc-trust-main-image">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=90"
                alt="Business professionals discussing customer needs"
                loading="lazy"
              />
              <div className="smc-trust-image-shade" />

              <div className="smc-trust-image-caption">
                <span>YOUR GROWTH PARTNER</span>
                <p>
                  Every journey
                  <br />
                  starts with
                  <span> understanding.</span>
                </p>
              </div>
            </div>

            <div className="smc-trust-floating-card">
              <span className="smc-trust-floating-icon">
                <FiCheckCircle />
              </span>
              <div>
                <strong>Guidance that starts with you.</strong>
                <span>Understand your options and next steps.</span>
              </div>
            </div>

            <span className="smc-trust-visual-index">
              PEOPLE FIRST / ALWAYS
            </span>
          </motion.div>

          {/* Right-side glass cards */}
          <motion.div
            className="smc-trust-cards"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="smc-trust-card"
                  key={item.number}
                  variants={fadeUp}
                >
                  <div className="smc-trust-card-image">
                    <img src={item.image} alt="" loading="lazy" />
                    <div className="smc-trust-card-image-shade" />

                    <span className="smc-trust-card-number">
                      <span />
                      {item.number}
                    </span>

                    <span className="smc-trust-card-icon">
                      <Icon />
                    </span>
                  </div>

                  <div className="smc-trust-card-body">
                    <span className="smc-trust-card-label">
                      {item.label}
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <span className="smc-trust-card-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="smc-trust-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="smc-trust-bottom-note">
            <span className="smc-trust-bottom-symbol">
              <FiShield />
            </span>

            <div>
              <span>OUR COMMITMENT</span>
              <strong>Clear guidance. Thoughtful service.</strong>
              <p>
                Every enquiry begins with understanding your needs.
              </p>
            </div>
          </div>

          <div className="smc-trust-bottom-cta">
            <div className="smc-trust-bottom-copy">
              <span>HAVE A REQUIREMENT IN MIND?</span>
              <h3>Let&apos;s understand what you need.</h3>
              <p>
                Connect with our team to discuss your requirements
                and the next steps.
              </p>
            </div>

            <Link to="/contact" className="smc-trust-cta-button">
              Connect With Us
              <span>
                <FiArrowRight />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
