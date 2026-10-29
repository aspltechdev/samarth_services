
// // import {
// //   FiTarget,
// //   FiUsers,
// //   FiShield,
// //   FiMessageCircle,
// //   FiCheckCircle,
// //   FiArrowRight,
// // } from "react-icons/fi";
// // import { Link } from "react-router-dom";
// // import "./WhyChooseUs.css";

// // const benefits = [
// //   {
// //     icon: FiTarget,
// //     number: "01",
// //     title: "Solutions for Your Needs",
// //     description:
// //       "Explore relevant services based on your individual, family or business requirements.",
// //   },
// //   {
// //     icon: FiUsers,
// //     number: "02",
// //     title: "Personalised Assistance",
// //     description:
// //       "Discuss your requirements with our team and understand the available options.",
// //   },
// //   {
// //     icon: FiShield,
// //     number: "03",
// //     title: "Clear and Transparent Guidance",
// //     description:
// //       "Get information about applicable processes, documentation, charges and terms before proceeding.",
// //   },
// //   {
// //     icon: FiMessageCircle,
// //     number: "04",
// //     title: "Easy Communication",
// //     description:
// //       "Connect with us through phone or WhatsApp to ask questions and make service enquiries.",
// //   },
// // ];

// // export default function WhyChooseUs() {
// //   return (
// //     <section className="why-choose-section" id="why-choose-us">
// //       <div className="why-choose-container">
// //         {/* Left Content */}
// //         <div className="why-choose-content">
// //           <span className="why-choose-eyebrow">
// //             WHY SAMARTH BUSINESS SOLUTIONS
// //           </span>

// //           <h2>
// //             Your needs.
// //             <span> Our commitment.</span>
// //           </h2>

// //           <p className="why-choose-description">
// //             Finding the right service shouldn't be complicated. We help you
// //             explore your options, understand the process and take your next
// //             step with greater clarity.
// //           </p>

// //           <div className="why-choose-points">
// //             <div>
// //               <FiCheckCircle />
// //               <span>Multiple services in one place</span>
// //             </div>

// //             <div>
// //               <FiCheckCircle />
// //               <span>Guidance based on your requirements</span>
// //             </div>

// //             <div>
// //               <FiCheckCircle />
// //               <span>Clear information about next steps</span>
// //             </div>
// //           </div>

// //           <Link to="/about" className="why-choose-button">
// //             Discover Our Approach <FiArrowRight />
// //           </Link>
// //         </div>

// //         {/* Right Benefit Cards */}
// //         <div className="why-choose-grid">
// //           {benefits.map((benefit) => {
// //             const Icon = benefit.icon;

// //             return (
// //               <article
// //                 className="why-choose-card"
// //                 key={benefit.number}
// //               >
// //                 <div className="why-choose-card-top">
// //                   <span className="why-choose-icon">
// //                     <Icon size={25} />
// //                   </span>

// //                   <span className="why-choose-number">
// //                     {benefit.number}
// //                   </span>
// //                 </div>

// //                 <h3>{benefit.title}</h3>

// //                 <p>{benefit.description}</p>
// //               </article>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import {
//   FiTarget,
//   FiUsers,
//   FiShield,
//   FiMessageCircle,
//   FiCheckCircle,
//   FiArrowUpRight,
//   FiArrowRight,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./WhyChooseUs.css";

// const benefits = [
//   {
//     icon: FiTarget,
//     number: "01",
//     title: "Solutions for Your Needs",
//     description:
//       "Explore relevant services for your individual, family or business requirements.",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
//     alt: "Modern home representing financial and property solutions",
//   },
//   {
//     icon: FiUsers,
//     number: "02",
//     title: "Personalised Assistance",
//     description:
//       "Discuss your requirements with our team and explore suitable options.",
//     image:
//       "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
//     alt: "Professionals discussing customer requirements",
//   },
//   {
//     icon: FiShield,
//     number: "03",
//     title: "Clear & Transparent Guidance",
//     description:
//       "Understand documentation, applicable charges, processes and terms before proceeding.",
//     image:
//       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
//     alt: "Documents and paperwork on an office desk",
//   },
//   {
//     icon: FiMessageCircle,
//     number: "04",
//     title: "Easy Communication",
//     description:
//       "Connect with us by phone or WhatsApp for questions and service enquiries.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
//     alt: "Person using a smartphone for communication",
//   },
// ];

// const points = [
//   "Multiple services in one place",
//   "Guidance based on your requirements",
//   "Clear information about next steps",
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="why-choose-section" id="why-choose-us">
//       <div className="why-choose-container">
//         {/* LEFT: BRAND STORY */}

//         <motion.div
//           className="why-choose-content"
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.65 }}
//         >
//           <span className="why-choose-eyebrow">
//             <span className="why-eyebrow-line" />
//             WHY SAMARTH MULTISERVE
//           </span>

//           <h2>
//             Your needs.
//             <span>Our commitment.</span>
//           </h2>

//           <p className="why-choose-description">
//             Finding the right service shouldn't be complicated. We help
//             you explore your options, understand the process and take
//             your next step with greater clarity.
//           </p>

//           <div className="why-choose-points">
//             {points.map((point) => (
//               <div className="why-choose-point" key={point}>
//                 <span className="why-point-icon">
//                   <FiCheckCircle size={19} />
//                 </span>
//                 <span>{point}</span>
//               </div>
//             ))}
//           </div>

//           <Link to="/about" className="why-choose-button">
//             <span>Discover Our Approach</span>
//             <span className="why-button-arrow">
//               <FiArrowRight size={19} />
//             </span>
//           </Link>

//           <div className="why-choose-note">
//             <span className="why-note-dot" />
//             <span>Here to help you take your next step.</span>
//           </div>
//         </motion.div>

//         {/* RIGHT: IMAGE-LED BENEFIT CARDS */}

//         <div className="why-choose-grid">
//           {benefits.map((benefit, index) => {
//             const Icon = benefit.icon;

//             return (
//               <motion.article
//                 className="why-choose-card"
//                 key={benefit.number}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <div className="why-card-image">
//                   <img
//                     src={benefit.image}
//                     alt={benefit.alt}
//                     loading="lazy"
//                   />

//                   <div className="why-card-image-overlay" />

//                   <span className="why-card-number">
//                     <span />
//                     {benefit.number}
//                   </span>

//                   <span className="why-card-image-icon">
//                     <Icon size={23} />
//                   </span>

//                   <span className="why-card-image-caption">
//                     SAMARTH MULTISERVE
//                   </span>
//                 </div>

//                 <div className="why-card-body">
//                   <div className="why-card-title-row">
//                     <h3>{benefit.title}</h3>

//                     <span className="why-card-arrow">
//                       <FiArrowUpRight size={20} />
//                     </span>
//                   </div>

//                   <p>{benefit.description}</p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




import {
  FiTarget,
  FiUsers,
  FiShield,
  FiMessageCircle,
  FiCheckCircle,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import h6 from "../assets/h6.png";
import h7 from "../assets/h7.png";

const smWhyBenefits = [
  {
    icon: FiTarget,
    number: "01",
    title: "Solutions for Your Needs",
    description:
      "Explore relevant services based on your individual, family or business requirements.",
    image:
      h4,
    alt: "Home and property",
  },
  {
    icon: FiUsers,
    number: "02",
    title: "Personalised Assistance",
    description:
      "Discuss your requirements with our team and understand the available options.",
    image:
      h5,
    alt: "Professionals assisting a customer",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Clear and Transparent Guidance",
    description:
      "Understand applicable processes, documentation, charges and terms before proceeding.",
    image:
      h6,
    alt: "Documents and paperwork",
  },
  {
    icon: FiMessageCircle,
    number: "04",
    title: "Easy Communication",
    description:
      "Connect with us through phone or WhatsApp for questions and service enquiries.",
    image:
     h7,
    alt: "Digital communication",
  },
];

const smWhyPoints = [
  "Multiple services in one place",
  "Guidance based on your requirements",
  "Clear information about next steps",
];

export default function WhyChooseUs() {
  return (
    <section className="sm-why-section" id="why-choose-us">
      <div className="sm-why-background" aria-hidden="true" />

      <div className="sm-why-container">
        {/* LEFT CONTENT */}

        <motion.div
          className="sm-why-content"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sm-why-eyebrow">
            <span className="sm-why-eyebrow-line" />
            WHY SAMARTH MULTISERVE
          </div>

          <h2 className="sm-why-heading">
            Your needs.
            <span>Our commitment.</span>
          </h2>

          <p className="sm-why-description">
            Finding the right service shouldn't be complicated. We help
            you explore your options, understand the process and take
            your next step with greater clarity.
          </p>

          <div className="sm-why-points">
            {smWhyPoints.map((point) => (
              <div className="sm-why-point" key={point}>
                <span className="sm-why-point-icon">
                  <FiCheckCircle size={21} />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="sm-why-cta">
            <span>Discover Our Approach</span>
            <span className="sm-why-cta-icon">
              <FiArrowRight size={20} />
            </span>
          </Link>
        </motion.div>

    

        {/* RIGHT IMAGE CARDS */}

        <div className="sm-why-grid">
          {smWhyBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                className="sm-why-card"
                key={benefit.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="sm-why-card-visual">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    loading="lazy"
                  />

                  <div className="sm-why-card-overlay" />

                  <div className="sm-why-card-number">
                    <span />
                    {benefit.number}
                  </div>

                  <div className="sm-why-card-icon">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="sm-why-card-body">
                  <div className="sm-why-card-heading">
                    <h3>{benefit.title}</h3>
                    <span className="sm-why-card-arrow">
                      <FiArrowUpRight size={20} />
                    </span>
                  </div>

                  <p>{benefit.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
