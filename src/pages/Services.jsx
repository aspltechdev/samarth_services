
// import { Link } from "react-router-dom";
// import {
//   FiTruck,
//   FiPackage,
//   FiHome,
//   FiFileText,
//   FiBriefcase,
//   FiMapPin,
//   FiCheckCircle,
//   FiArrowRight,
//   FiMessageCircle,
// } from "react-icons/fi";

// import "./Services.css";

// const businessServices = [
//   {
//     icon: FiTruck,
//     title: "Vehicle Rentals",
//     description:
//       "Enquire about vehicle rental options for personal travel, business trips and transportation needs.",
//     features: [
//       "Vehicle availability enquiries",
//       "Rental duration options",
//       "Rental terms and pricing",
//     ],
//   },
//   {
//     icon: FiPackage,
//     title: "Courier & Cargo",
//     description:
//       "Explore courier and cargo services for sending parcels, documents and eligible goods.",
//     features: [
//       "Parcel delivery enquiries",
//       "Cargo transportation options",
//       "Delivery timelines and charges",
//     ],
//   },
//   {
//     icon: FiHome,
//     title: "Real Estate",
//     description:
//       "Discuss your property-related requirements and enquire about available real estate services.",
//     features: [
//       "Property-related enquiries",
//       "Buying and selling assistance",
//       "Property information",
//     ],
//   },
//   {
//     icon: FiFileText,
//     title: "E-Stamp Services",
//     description:
//       "Enquire about e-stamp availability, applicable requirements and related assistance.",
//     features: [
//       "E-stamp enquiries",
//       "Documentation requirements",
//       "Applicable fees and procedures",
//     ],
//   },
//   {
//     icon: FiBriefcase,
//     title: "Business Support",
//     description:
//       "Discuss your business service requirements and explore the assistance available through our team.",
//     features: [
//       "Business service enquiries",
//       "Requirement discussions",
//       "Information about available services",
//     ],
//   },
//   {
//     icon: FiMapPin,
//     title: "Other Services",
//     description:
//       "Have a specific requirement? Contact our team to ask whether the relevant service is available.",
//     features: [
//       "Personalised enquiries",
//       "Service availability information",
//       "Next-step guidance",
//     ],
//   },
// ];

// export default function Services() {
//   const phoneNumber = "919900458068";

//   const createWhatsAppLink = (serviceTitle) => {
//     const message = encodeURIComponent(
//       `Hello Samarth Business Solutions, I would like to enquire about ${serviceTitle}. Please share more information about the available services.`
//     );

//     return `https://wa.me/${phoneNumber}?text=${message}`;
//   };

//   return (
//     <div className="business-services-page">
//       {/* Hero */}
//       <section className="business-services-hero">
//         <div className="container business-services-hero-inner">
//           <div className="business-services-breadcrumb">
//             <Link to="/">Home</Link>
//             <span>/</span>
//             <span>Our Services</span>
//           </div>

//           <span className="business-services-eyebrow">
//             MORE WAYS WE CAN HELP
//           </span>

//           <h1>
//             Business & Everyday
//             <br />
//             <span>Services in One Place.</span>
//           </h1>

//           <p>
//             From vehicle rentals and logistics to real estate and
//             e-stamp enquiries, connect with our team to explore
//             the services relevant to your requirements.
//           </p>

//           <div className="business-services-hero-actions">
//             <a
//               href={createWhatsAppLink("business services")}
//               target="_blank"
//               rel="noreferrer"
//               className="business-services-primary-btn"
//             >
//               <FiMessageCircle size={18} />
//               Enquire on WhatsApp
//               <FiArrowRight />
//             </a>

//             <a
//               href="#business-service-list"
//               className="business-services-secondary-btn"
//             >
//               Explore All Services
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Service cards */}
//       <section
//         className="business-services-list section-padding"
//         id="business-service-list"
//       >
//         <div className="container">
//           <div className="section-heading">
//             <span className="section-kicker">
//               OUR SERVICE CATEGORIES
//             </span>

//             <h2>Find the Service You Need</h2>

//             <p>
//               Select a category to learn more and send an enquiry
//               to our team.
//             </p>
//           </div>

//           <div className="business-services-grid">
//             {businessServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   className="business-service-card"
//                   key={service.title}
//                 >
//                   <div className="business-service-card-top">
//                     <span className="business-service-icon">
//                       <Icon size={26} />
//                     </span>

//                     <FiArrowRight className="business-service-arrow" />
//                   </div>

//                   <h3>{service.title}</h3>

//                   <p className="business-service-description">
//                     {service.description}
//                   </p>

//                   <ul className="business-service-features">
//                     {service.features.map((feature) => (
//                       <li key={feature}>
//                         <FiCheckCircle />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href={createWhatsAppLink(service.title)}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="business-service-link"
//                   >
//                     Enquire Now
//                     <FiArrowRight />
//                   </a>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="business-services-process">
//         <div className="container">
//           <div className="section-heading">
//             <span className="section-kicker">
//               A SIMPLE PROCESS
//             </span>

//             <h2>How to Get Started</h2>

//             <p>
//               Share your requirements and discuss the next steps
//               with our team.
//             </p>
//           </div>

//           <div className="business-services-steps">
//             <article className="business-services-step">
//               <span>01</span>
//               <h3>Choose a Service</h3>
//               <p>
//                 Select the category that matches your requirement.
//               </p>
//             </article>

//             <article className="business-services-step">
//               <span>02</span>
//               <h3>Send an Enquiry</h3>
//               <p>
//                 Tell us what you need and share relevant details.
//               </p>
//             </article>

//             <article className="business-services-step">
//               <span>03</span>
//               <h3>Discuss the Options</h3>
//               <p>
//                 Confirm availability, costs, terms and next steps
//                 with the relevant service provider.
//               </p>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="business-services-cta-section">
//         <div className="container business-services-cta">
//           <div className="business-services-cta-icon">
//             <FiMessageCircle size={27} />
//           </div>

//           <div className="business-services-cta-content">
//             <span>HAVE A SPECIFIC REQUIREMENT?</span>

//             <h2>Let's find the right service for your needs.</h2>

//             <p>
//               Contact our team to discuss your requirements and
//               the services currently available.
//             </p>
//           </div>

//           <Link to="/contact" className="business-services-cta-btn">
//             Contact Us
//             <FiArrowRight />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiRefreshCw,
  FiCreditCard,
  FiTruck,
  FiShield,
  FiMapPin,
  FiMessageCircle,
  FiClipboard,
} from "react-icons/fi";
import "./Services.css";
import rt1 from "../assets/rt1.png";
import rt2 from "../assets/rt2.png";
import rt3 from "../assets/rt3.png";
import rt4 from "../assets/rt4.png";
import rt5 from "../assets/rt5.png";
import rt6 from "../assets/rt6.png";

const whatsapp = "https://wa.me/919900458068";

const services = [
  {
    number: "01",
    title: "Vehicle Registration",
    description:
      "Guidance for new vehicle registration, documentation and applicable RTO procedures.",
    image:
    rt1,
    icon: <FiFileText />,
    tag: "REGISTRATION",
  },
  {
    number: "02",
    title: "RC Transfer",
    description:
      "Assistance with ownership transfer documentation when buying or selling a vehicle.",
    image:
      rt2,
    icon: <FiRefreshCw />,
    tag: "OWNERSHIP TRANSFER",
  },
  {
    number: "03",
    title: "Driving Licence",
    description:
      "Application guidance for learner licences, driving licences and eligible renewals.",
    image:
      rt3,
    icon: <FiCreditCard />,
    tag: "LICENCE SERVICES",
  },
  {
    number: "04",
    title: "NOC & State Transfer",
    description:
      "Guidance on NOC documents and vehicle transfer procedures between states.",
    image:
      rt4,
    icon: <FiMapPin />,
    tag: "INTER-STATE",
  },
  {
    number: "05",
    title: "Commercial Vehicle RTO",
    description:
      "Documentation support for commercial vehicles, permits and fitness procedures.",
    image:
      rt5,
    icon: <FiTruck />,
    tag: "COMMERCIAL VEHICLES",
  },
  {
    number: "06",
    title: "RC Renewal & Duplicate RC",
    description:
      "Assistance with registration certificate renewal and duplicate RC applications.",
    image:
    rt6,
    icon: <FiClipboard />,
    tag: "DOCUMENT SUPPORT",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    text: "Share your RTO service requirement with our team.",
  },
  {
    number: "02",
    title: "Prepare Your Documents",
    text: "Understand the required documents and application process.",
  },
  {
    number: "03",
    title: "Get Process Guidance",
    text: "Receive guidance for the relevant RTO procedure and next steps.",
  },
];

function Services() {
  const whatsappLink =
    `${whatsapp}?text=` +
    encodeURIComponent(
      "Hi Samarth Business Solutions, I need assistance with RTO services."
    );

  return (
    <main className="rto-page">
      {/* CINEMATIC HERO */}
      <section className="rto-hero">
        <div className="rto-hero-image" />

        <div className="rto-container rto-hero-inner">
          <div className="rto-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>RTO Services</span>
          </div>

          <motion.div
            className="rto-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rto-eyebrow">
              <span className="rto-dot" />
              SAMARTH BUSINESS SOLUTIONS
            </span>

            <h1>
              Your Journey.
              <br />
              <span>Our Assistance.</span>
            </h1>

            <p>
              From vehicle registration to driving licence procedures,
              get guidance for your RTO documentation and service
              requirements — all in one place.
            </p>

            <div className="rto-hero-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rto-btn rto-btn-blue"
              >
                <FiMessageCircle />
                Get RTO Assistance
                <FiArrowUpRight />
              </a>

              <a href="#rto-services" className="rto-text-link">
                Explore Our Services
                <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <div className="rto-hero-bottom">
            <span>01 — 06</span>
            <span className="rto-bottom-line" />
            <span>RTO SERVICES ACROSS INDIA</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="rto-intro">
        <div className="rto-container rto-intro-grid">
          <div>
            <span className="rto-section-label">YOUR RTO SUPPORT PARTNER</span>
            <h2>
              Less confusion.
              <br />
              <span>More confidence.</span>
            </h2>
          </div>

          <div className="rto-intro-copy">
            <p>
              Vehicle-related documentation can feel complicated.
              Samarth Business Solutions helps you understand the process,
              prepare your documents and identify the appropriate next steps.
            </p>
            <a href="#rto-services" className="rto-inline-link">
              Discover our services <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE SERVICE CARDS */}
      <section className="rto-services-section" id="rto-services">
        <div className="rto-container">
          <div className="rto-section-heading">
            <div>
              <span className="rto-section-label">WHAT WE HELP WITH</span>
              <h2>
                RTO Services,
                <br />
                <span>Simplified for You.</span>
              </h2>
            </div>

            <p>
              Explore our service categories and speak with our team
              about your specific requirement.
            </p>
          </div>

          <div className="rto-service-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                className="rto-service-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.1,
                }}
              >
                <div className="rto-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
fetchPriority="high"
  decoding="async"
                  />

                  <div className="rto-card-image-overlay" />

                  <span className="rto-card-number">
                    {service.number}
                  </span>

                  <span className="rto-card-tag">{service.tag}</span>

                  <a
                    href={`${whatsapp}?text=${encodeURIComponent(
                      `Hi Samarth Business Solutions, I need assistance with ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rto-card-arrow"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <FiArrowUpRight />
                  </a>
                </div>

                <div className="rto-card-content">
                  <div className="rto-card-title">
                    <span className="rto-card-icon">{service.icon}</span>
                    <h3>{service.title}</h3>
                  </div>

                  <p>{service.description}</p>

                  <a
                    href={`${whatsapp}?text=${encodeURIComponent(
                      `Hi, I would like to know more about ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rto-card-link"
                  >
                    Enquire Now <FiArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="rto-disclaimer">
            Availability, eligibility and documentation requirements vary by
            state and RTO. Approvals are subject to the relevant authority.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rto-process-section">
        <div className="rto-container">
          <div className="rto-section-heading">
            <div>
              <span className="rto-section-label">A SIMPLE PROCESS</span>
              <h2>
                Three Steps.
                <br />
                <span>Clear Direction.</span>
              </h2>
            </div>
          </div>

          <div className="rto-process-grid">
            {steps.map((step) => (
              <div className="rto-process-card" key={step.number}>
                <span className="rto-process-number">{step.number}</span>
                <FiCheckCircle className="rto-process-check" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rto-cta-section">
        <div className="rto-container">
          <div className="rto-cta">
            <div className="rto-cta-image" />

            <div className="rto-cta-content">
              <span className="rto-section-label">
                LET'S GET YOU MOVING
              </span>
              <h2>
                Need help with
                <br />
                your RTO work?
              </h2>
              <p>
                Connect with Samarth Business Solutions to discuss your
                documentation and RTO service requirements.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rto-btn rto-btn-blue"
              >
                Talk to Our Team
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
