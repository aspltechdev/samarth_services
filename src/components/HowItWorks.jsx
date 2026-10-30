
// import {
//   FiMessageSquare,
//   FiSearch,
//   FiFileText,
//   FiCheckCircle,
//   FiArrowRight,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./HowItWorks.css";

// const steps = [
//   {
//     number: "01",
//     icon: FiMessageSquare,
//     title: "Tell Us What You Need",
//     description:
//       "Contact our team and explain whether you need loans, insurance, travel or another service.",
//   },
//   {
//     number: "02",
//     icon: FiSearch,
//     title: "Explore Your Options",
//     description:
//       "Discuss relevant services and understand the options available for your requirements.",
//   },
//   {
//     number: "03",
//     icon: FiFileText,
//     title: "Understand the Process",
//     description:
//       "Learn about the applicable documents, eligibility criteria, charges and terms.",
//   },
//   {
//     number: "04",
//     icon: FiCheckCircle,
//     title: "Take Your Next Step",
//     description:
//       "Choose how you want to proceed and follow the process applicable to your selected service.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="how-it-works-section" id="how-it-works">
//       <div className="how-it-works-container">
//         <div className="how-it-works-heading">
//           <span className="how-it-works-eyebrow">OUR PROCESS</span>

//           <h2>
//             Getting started is
//             <span> simple and clear.</span>
//           </h2>

//           <p>
//             We help you understand where to begin, what to explore and
//             what steps may be needed for your chosen service.
//           </p>
//         </div>

//         <div className="how-it-works-grid">
//           {steps.map((step, index) => {
//             const Icon = step.icon;

//             return (
//               <article className="how-step-card" key={step.number}>
//                 <div className="how-step-top">
//                   <span className="how-step-icon">
//                     <Icon size={25} />
//                   </span>

//                   <span className="how-step-number">
//                     {step.number}
//                   </span>
//                 </div>

//                 {index < steps.length - 1 && (
//                   <span className="how-step-connector">
//                     <FiArrowRight />
//                   </span>
//                 )}

//                 <h3>{step.title}</h3>

//                 <p>{step.description}</p>
//               </article>
//             );
//           })}
//         </div>

//         <div className="how-it-works-bottom">
//           <div className="how-bottom-icon">
//             <FiMessageSquare size={23} />
//           </div>

//           <div className="how-bottom-copy">
//             <h3>Have a requirement in mind?</h3>
//             <p>
//               Start a conversation with our team and tell us how we can help.
//             </p>
//           </div>

//           <Link to="/contact" className="how-bottom-button">
//             Start an Enquiry <FiArrowRight />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }



// import {
//   FiMessageSquare,
//   FiSearch,
//   FiFileText,
//   FiCheckCircle,
//   FiArrowRight,
//   FiArrowUpRight,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./HowItWorks.css";

// const smProcessSteps = [
//   {
//     number: "01",
//     icon: FiMessageSquare,
//     title: "Tell Us What You Need",
//     description:
//       "Share your requirements for loans, insurance, travel or other services.",
//     image:
//       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
//     alt: "People discussing their requirements",
//     tag: "CONNECT",
//   },
//   {
//     number: "02",
//     icon: FiSearch,
//     title: "Explore Your Options",
//     description:
//       "Discuss available options and identify services relevant to your needs.",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85",
//     alt: "Team reviewing information and options",
//     tag: "DISCOVER",
//   },
//   {
//     number: "03",
//     icon: FiFileText,
//     title: "Understand the Process",
//     description:
//       "Review applicable documents, eligibility criteria, charges and terms.",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=85",
//     alt: "Documents and financial information",
//     tag: "PREPARE",
//   },
//   {
//     number: "04",
//     icon: FiCheckCircle,
//     title: "Take Your Next Step",
//     description:
//       "Decide how to proceed and follow the relevant service process.",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85",
//     alt: "Professionals working together",
//     tag: "MOVE FORWARD",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="sm-process-section" id="how-it-works">
//       <div className="sm-process-bg" aria-hidden="true" />

//       <div className="sm-process-container">
//         {/* SECTION HEADING */}

//         <motion.div
//           className="sm-process-heading"
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="sm-process-eyebrow">
//             <span className="sm-process-eyebrow-line" />
//             OUR PROCESS
//             <span className="sm-process-eyebrow-line" />
//           </span>

//           <h2>
//             Getting started is
//             <span> simple and clear.</span>
//           </h2>

//           <p>
//             From your first enquiry to your next step, we help you
//             understand the process and explore your options with clarity.
//           </p>
//         </motion.div>

//         {/* PROCESS CARDS */}

//         <div className="sm-process-grid">
//           {smProcessSteps.map((step, index) => {
//             const Icon = step.icon;

//             return (
//               <motion.article
//                 className="sm-process-card"
//                 key={step.number}
//                 initial={{ opacity: 0, y: 26 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <div className="sm-process-visual">
//                   <img
//                     src={step.image}
//                     alt={step.alt}
//                     loading="lazy"
fetchPriority="high"
  decoding="async"
//                   />

//                   <div className="sm-process-image-overlay" />

//                   <span className="sm-process-number">
//                     STEP {step.number}
//                   </span>

//                   <span className="sm-process-tag">{step.tag}</span>

//                   <span className="sm-process-image-icon">
//                     <Icon size={23} />
//                   </span>
//                 </div>

//                 <div className="sm-process-card-body">
//                   <span className="sm-process-small-label">
//                     YOUR JOURNEY · {step.number}
//                   </span>

//                   <div className="sm-process-card-title-row">
//                     <h3>{step.title}</h3>

//                     <span className="sm-process-card-arrow">
//                       <FiArrowUpRight size={19} />
//                     </span>
//                   </div>

//                   <p>{step.description}</p>
//                 </div>

//                 {index < smProcessSteps.length - 1 && (
//                   <span className="sm-process-connector" aria-hidden="true">
//                     <FiArrowRight size={17} />
//                   </span>
//                 )}
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* BOTTOM CTA */}

//         <motion.div
//           className="sm-process-cta"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.55 }}
//         >
//           <div className="sm-process-cta-left">
//             <span className="sm-process-cta-icon">
//               <FiMessageSquare size={24} />
//             </span>

//             <div className="sm-process-cta-copy">
//               <span className="sm-process-cta-eyebrow">
//                 LET'S GET STARTED
//               </span>
//               <h3>Have a requirement in mind?</h3>
//               <p>
//                 Tell us what you need. Our team will help you understand
//                 the next steps.
//               </p>
//             </div>
//           </div>

//           <Link to="/contact" className="sm-process-cta-button">
//             Start an Enquiry
//             <span>
//               <FiArrowRight size={19} />
//             </span>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import {
  FiMessageSquare,
  FiSearch,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiArrowUpRight,
  FiMove,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HowItWorks.css";
import h11 from "../assets/h11.png";
import h12 from "../assets/h12.png";
import h13 from "../assets/h13.png";
import h14 from "../assets/h14.png";


const smProcessSteps = [
  {
    number: "01",
    icon: FiMessageSquare,
    title: "Start a Conversation",
    description:
      "Tell us what you are looking for. We'll help you identify the right service to explore.",
    image:
      h11,
    alt: "Professionals discussing customer requirements",
    tag: "THE BEGINNING",
    keyword: "CONNECT",
  },
  {
    number: "02",
    icon: FiSearch,
    title: "Discover Your Options",
    description:
      "Explore relevant solutions and understand which options may suit your requirements.",
    image:
      h12,
    alt: "Business professionals evaluating options",
    tag: "FIND YOUR FIT",
    keyword: "EXPLORE",
  },
  {
    number: "03",
    icon: FiFileText,
    title: "Get Complete Clarity",
    description:
      "Understand documentation, eligibility, applicable charges and terms before proceeding.",
    image:
      h13,
    alt: "Reviewing documents and business paperwork",
    tag: "KNOW THE DETAILS",
    keyword: "UNDERSTAND",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Move Forward Confidently",
    description:
      "Choose how to proceed and follow the process for your selected service.",
    image:
    h14,
    alt: "Business professionals working together",
    tag: "YOUR NEXT CHAPTER",
    keyword: "TAKE ACTION",
  },
];

export default function HowItWorks() {
  return (
    <section className="sm-process-section" id="how-it-works">
      <div className="sm-process-bg" aria-hidden="true">
        <span className="sm-process-orb sm-process-orb-one" />
        <span className="sm-process-orb sm-process-orb-two" />
        <span className="sm-process-grid-pattern" />
      </div>

      <div className="sm-process-container">
        {/* EDITORIAL HEADER */}

        <motion.header
          className="sm-process-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sm-process-eyebrow">
            <span className="sm-process-eyebrow-dot" />
            A BETTER WAY TO GET STARTED
          </div>

          <div className="sm-process-heading-layout">
            <h2>
              Your next step
              <span>starts right here.</span>
            </h2>

            <div className="sm-process-heading-aside">
              <span className="sm-process-aside-line" />
              <p>
                Simple conversations. Clear information.
                A more confident way to explore the services you need.
              </p>
            </div>
          </div>
        </motion.header>

        {/* JOURNEY LABEL */}

        <div className="sm-process-journey-bar">
          <div className="sm-process-journey-label">
            <FiMove size={15} />
            <span>YOUR JOURNEY WITH SAMARTH</span>
          </div>

          <span className="sm-process-journey-count">
            FOUR STEPS <span> / </span> ONE JOURNEY
          </span>
        </div>

        {/* CONNECTED PROCESS CARDS */}

        <div className="sm-process-grid">
          <div className="sm-process-journey-line" aria-hidden="true" />

          {smProcessSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className={`sm-process-card ${
                  index % 2 === 1 ? "sm-process-card-offset" : ""
                }`}
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
              >
                {/* IMAGE COMPOSITION */}

                <div className="sm-process-visual">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
fetchPriority="high"
  decoding="async"
                  />

                  <div className="sm-process-image-overlay" />

                  <span className="sm-process-image-index">
                    {step.number}
                  </span>

                  <span className="sm-process-image-tag">
                    {step.tag}
                  </span>

                  <div className="sm-process-image-bottom">
                    <span className="sm-process-image-icon">
                      <Icon size={22} />
                    </span>

                    <span className="sm-process-image-keyword">
                      {step.keyword}
                    </span>
                  </div>

                  <span className="sm-process-image-ring" />
                </div>

                {/* CARD INFORMATION */}

                <div className="sm-process-card-body">
                  <div className="sm-process-card-overline">
                    <span>STEP {step.number}</span>
                    <span className="sm-process-overline-line" />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  {/* <div className="sm-process-card-footer">
                    <span className="sm-process-footer-status">
                      <span />
                      YOUR JOURNEY
                    </span>

                    <span className="sm-process-card-arrow">
                      <FiArrowUpRight size={19} />
                    </span>
                  </div> */}
                </div>

                {/* TIMELINE NODE */}

                <span
                  className="sm-process-node"
                  aria-label={`Step ${step.number}`}
                >
                  <span />
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* PREMIUM CTA */}

        <motion.div
          className="sm-process-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="sm-process-cta-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="sm-process-cta-main">
            <div className="sm-process-cta-symbol">
              <FiMessageSquare size={25} />
              <span />
            </div>

            <div className="sm-process-cta-copy">
              <span className="sm-process-cta-eyebrow">
                YOUR JOURNEY STARTS WITH A CONVERSATION
              </span>

              <h3>
                Let's find the right
                <span> way forward.</span>
              </h3>

              <p>
                Tell us what you need. We'll help you understand the
                available options and next steps.
              </p>
            </div>
          </div>

          <div className="sm-process-cta-action">
            <Link to="/contact" className="sm-process-cta-button">
              <span>Talk to Our Team</span>
              <span className="sm-process-cta-button-icon">
                <FiArrowRight size={20} />
              </span>
            </Link>

            <span className="sm-process-cta-caption">
              LET'S TAKE THE FIRST STEP
            </span>
          </div>
        </motion.div>

        <div className="sm-process-bottom-line">
          <span>SAMARTH MULTISERVE</span>
          <span>MADE SIMPLE. MADE FOR YOU.</span>
        </div>
      </div>
    </section>
  );
}
