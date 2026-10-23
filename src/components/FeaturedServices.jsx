
// import {
//   FiTrendingUp,
//   FiShield,
//   FiCheckCircle,
//   FiArrowRight,
//   FiMessageCircle,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./FeaturedServices.css";

// const WHATSAPP_NUMBER = "919904856687"; // Verify before publishing

// const featuredServices = [
//   {
//     id: "loans",
//     eyebrow: "FINANCIAL SOLUTIONS",
//     title: "Find loan options for your goals.",
//     description:
//       "Explore loan categories for personal, family and business requirements. Enquire about eligibility, documentation and the next steps.",
//     icon: FiTrendingUp,
//     features: [
//       "Personal and home loan enquiries",
//       "Business and vehicle finance",
//       "Information about eligibility and documents",
//     ],
//     link: "/loans",
//     linkText: "Explore Loan Services",
//     theme: "featured-loans",
//   },
//   {
//     id: "insurance",
//     eyebrow: "PROTECTION & COVERAGE",
//     title: "Explore insurance for what matters.",
//     description:
//       "Discuss your insurance requirements and learn about available policy options, coverage details and applicable terms.",
//     icon: FiShield,
//     features: [
//       "Health and life insurance enquiries",
//       "Motor and property insurance",
//       "Information about policy terms and coverage",
//     ],
//     link: "/insurance",
//     linkText: "Explore Insurance",
//     theme: "featured-insurance",
//   },
// ];

// export default function FeaturedServices() {
//   return (
//     <section className="featured-services-section" id="featured-services">
//       <div className="featured-services-container">
//         <div className="featured-services-heading">
//           <span className="featured-services-eyebrow">
//             OUR FEATURED SERVICES
//           </span>

//           <h2>
//             Important decisions.
//             <span> Better-informed choices.</span>
//           </h2>

//           <p>
//             Start with the service you need. Our team can help you understand
//             the relevant enquiry process and the information to consider.
//           </p>
//         </div>

//         <div className="featured-services-grid">
//           {featuredServices.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 className={`featured-service-card ${service.theme}`}
//                 key={service.id}
//               >
//                 <div className="featured-service-top">
//                   <span className="featured-service-icon">
//                     <Icon size={28} />
//                   </span>

//                   <span className="featured-service-label">
//                     {service.eyebrow}
//                   </span>
//                 </div>

//                 <h3>{service.title}</h3>

//                 <p className="featured-service-description">
//                   {service.description}
//                 </p>

//                 <ul className="featured-service-features">
//                   {service.features.map((feature) => (
//                     <li key={feature}>
//                       <FiCheckCircle />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="featured-service-actions">
//                   <Link
//                     to={service.link}
//                     className="featured-service-button"
//                   >
//                     {service.linkText}
//                     <FiArrowRight />
//                   </Link>
//                 </div>

//                 <div className="featured-service-decoration" aria-hidden="true">
//                   <Icon />
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="featured-services-footer">
//           <div className="featured-services-footer-copy">
//             <span className="featured-services-footer-icon">
//               <FiMessageCircle size={22} />
//             </span>

//             <div>
//               <h3>Need help deciding where to start?</h3>
//               <p>Tell us your requirement and discuss the available options.</p>
//             </div>
//           </div>

//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//               "Hello Samarth Business Solutions! I would like help understanding your services."
//             )}`}
//             target="_blank"
//             rel="noreferrer"
//             className="featured-services-contact-button"
//           >
//             Talk to Our Team <FiArrowRight />
//           </a>
//         </div>

//         <p className="featured-services-disclaimer">
//           Loan availability and approval depend on the relevant lender's
//           eligibility criteria. Insurance coverage, exclusions and policy
//           terms depend on the insurer and the selected policy.
//         </p>
//       </div>
//     </section>
//   );
// }



import {
  FiTrendingUp,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./FeaturedServices.css";

const SM_FEATURED_WHATSAPP = "919904856687"; // Verify before publishing

const smFeaturedServices = [
  {
    id: "loans",
    eyebrow: "FINANCIAL SOLUTIONS",
    title: "Find the right path to your goals.",
    description:
      "Explore loan categories for personal, family and business requirements. Understand eligibility, documentation and the next steps.",
    icon: FiTrendingUp,
    features: [
      "Personal and home loan enquiries",
      "Business and vehicle finance",
      "Eligibility and document guidance",
    ],
    link: "/loans",
    linkText: "Explore Loan Services",
    theme: "sm-featured-loans",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90",
    imageAlt: "Modern home representing property and finance goals",
    imageLabel: "BUILD YOUR FUTURE",
  },
  {
    id: "insurance",
    eyebrow: "PROTECTION & COVERAGE",
    title: "Protect what matters most.",
    description:
      "Explore insurance options for yourself, your family and your assets, with guidance on coverage, exclusions and policy terms.",
    icon: FiShield,
    features: [
      "Health and life insurance enquiries",
      "Motor and property insurance",
      "Coverage and policy information",
    ],
    link: "/insurance",
    linkText: "Explore Insurance",
    theme: "sm-featured-insurance",
    number: "02",
    image:
      "https://images.unsplash.com/photo-family-photo?auto=format&fit=crop&w=1200&q=90",
    imageAlt: "Family representing protection and peace of mind",
    imageLabel: "PROTECT WHAT MATTERS",
  },
];

export default function FeaturedServices() {
  return (
    <section
      className="sm-featured-section"
      id="featured-services"
    >
      <div className="sm-featured-background" aria-hidden="true" />

      <div className="sm-featured-container">
        {/* EDITORIAL HEADING */}

        <motion.header
          className="sm-featured-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="sm-featured-eyebrow">
            <span />
            OUR FEATURED SERVICES
          </div>

          <div className="sm-featured-heading-layout">
            <h2>
              Important decisions.
              <span>Better-informed choices.</span>
            </h2>

            <p>
              Explore services designed around life's important
              needs. Start with a conversation and understand
              the options available to you.
            </p>
          </div>
        </motion.header>

        {/* FEATURED SERVICE CARDS */}

        <div className="sm-featured-grid">
          {smFeaturedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className={`sm-featured-card ${service.theme}`}
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
              >
                {/* FULL-BLEED IMAGE */}

                <div className="sm-featured-visual">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                  />

                  <div className="sm-featured-image-overlay" />

                  <div className="sm-featured-image-top">
                    <span className="sm-featured-image-label">
                      <span />
                      {service.imageLabel}
                    </span>

                    <span className="sm-featured-index">
                      {service.number}
                    </span>
                  </div>

                  <span className="sm-featured-visual-icon">
                    <Icon size={25} />
                  </span>

                  <span className="sm-featured-visual-caption">
                    SAMARTH MULTISERVE
                  </span>
                </div>

                {/* SERVICE DETAILS */}

                <div className="sm-featured-body">
                  <div className="sm-featured-service-eyebrow">
                    <span />
                    {service.eyebrow}
                  </div>

                  <h3>{service.title}</h3>

                  <p className="sm-featured-description">
                    {service.description}
                  </p>

                  <ul className="sm-featured-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="sm-featured-check">
                          <FiCheckCircle size={15} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="sm-featured-actions">
                    <Link
                      to={service.link}
                      className="sm-featured-button"
                    >
                      <span>{service.linkText}</span>
                      <span className="sm-featured-button-icon">
                        <FiArrowRight size={19} />
                      </span>
                    </Link>

                    <span className="sm-featured-action-note">
                      EXPLORE YOUR OPTIONS
                      <FiArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <span
                  className="sm-featured-watermark"
                  aria-hidden="true"
                >
                  <Icon />
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* CONTACT PANEL */}

        <motion.div
          className="sm-featured-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="sm-featured-contact-content">
            <span className="sm-featured-contact-icon">
              <FiMessageCircle size={24} />
            </span>

            <div>
              <span className="sm-featured-contact-eyebrow">
                NEED A LITTLE GUIDANCE?
              </span>

              <h3>Not sure where to begin?</h3>

              <p>
                Tell us what you need and discuss the available
                options with our team.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${SM_FEATURED_WHATSAPP}?text=${encodeURIComponent(
              "Hello Samarth MultiServe! I would like help understanding your services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sm-featured-contact-button"
          >
            <span>Talk to Our Team</span>
            <FiArrowRight size={19} />
          </a>
        </motion.div>

        {/* DISCLAIMER */}

        <p className="sm-featured-disclaimer">
          Loan availability and approval depend on the relevant
          lender's eligibility criteria. Insurance coverage,
          exclusions and policy terms depend on the insurer and
          selected policy.
        </p>
      </div>
    </section>
  );
}
