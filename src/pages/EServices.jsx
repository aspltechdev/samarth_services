
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCreditCard,
  FiFileText,
  FiBriefcase,
  FiShield,
  FiUser,
  FiGlobe,
  FiCheckCircle,
  FiMessageCircle,
  FiClipboard,
} from "react-icons/fi";
import "./EServices.css";

const WHATSAPP = "https://wa.me/919904856687";

const eServices = [
  {
    number: "01",
    tag: "IDENTITY SERVICES",
    title: "PAN Card Services",
    description:
      "Assistance with PAN applications, corrections, and other eligible PAN-related requests.",
    icon: <FiCreditCard />,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    tag: "CITIZEN SERVICES",
    title: "Aadhaar Assistance",
    description:
      "Guidance on official Aadhaar services, appointment procedures and eligible update requests.",
    icon: <FiUser />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    tag: "TAXATION",
    title: "Income Tax & ITR",
    description:
      "Assistance with income tax return preparation, document checklists and filing procedures.",
    icon: <FiFileText />,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    tag: "BUSINESS SERVICES",
    title: "GST Services",
    description:
      "Guidance for GST registration, return filing requirements and related documentation.",
    icon: <FiBriefcase />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    tag: "CERTIFICATES",
    title: "Government Certificates",
    description:
      "Assistance with eligible applications for income, community, residence and other certificates.",
    icon: <FiShield />,
    image:
      "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    tag: "ONLINE APPLICATIONS",
    title: "Government E-Forms",
    description:
      "Help understanding application forms, required documents and official submission processes.",
    icon: <FiClipboard />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "07",
    tag: "BUSINESS REGISTRATION",
    title: "Business & MSME Support",
    description:
      "Guidance on eligible business registrations and MSME/Udyam registration procedures.",
    icon: <FiBriefcase />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "08",
    tag: "DIGITAL ACCESS",
    title: "Online Government Services",
    description:
      "Assistance navigating relevant government portals and understanding application steps.",
    icon: <FiGlobe />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
  },
];

const process = [
  {
    number: "01",
    title: "Choose Your Service",
    description:
      "Tell us which government service or online application you need help with.",
  },
  {
    number: "02",
    title: "Prepare Documents",
    description:
      "Understand the required documents, eligibility conditions and application details.",
  },
  {
    number: "03",
    title: "Application Assistance",
    description:
      "Get guidance on the relevant official portal and the next steps in the process.",
  },
];

function EServices() {
  const generalEnquiry =
    `${WHATSAPP}?text=` +
    encodeURIComponent(
      "Hi Samarth Business Solutions, I need assistance with government e-services."
    );

  return (
    <main className="es-page">
      {/* HERO */}
      <section className="es-hero">
        <div className="es-hero-bg" />

        <div className="es-container es-hero-inner">
          <div className="es-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>E-Services</span>
          </div>

          <motion.div
            className="es-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="es-eyebrow">
              <span className="es-live-dot" />
              SAMARTH BUSINESS SOLUTIONS
            </span>

            <h1>
              Government Services.
              <br />
              <span>Made Simpler.</span>
            </h1>

            <p>
              Your assistance partner for online government applications,
              PAN services, tax filing, certificates and business
              documentation — with guidance at every step.
            </p>

            <div className="es-hero-actions">
              <a
                href={generalEnquiry}
                target="_blank"
                rel="noreferrer"
                className="es-btn es-btn-primary"
              >
                <FiMessageCircle />
                Get Assistance
                <FiArrowUpRight />
              </a>

              <a href="#es-services" className="es-hero-link">
                Explore E-Services <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <div className="es-hero-bottom">
            <span>01 — 08</span>
            <span className="es-hero-line" />
            <span>DIGITAL & CITIZEN SERVICES</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="es-intro">
        <div className="es-container es-intro-grid">
          <div>
            <span className="es-section-label">
              YOUR DIGITAL SERVICE PARTNER
            </span>

            <h2>
              Less paperwork stress.
              <br />
              <span>More clarity.</span>
            </h2>
          </div>

          <div className="es-intro-copy">
            <p>
              Government applications can involve multiple forms,
              documents and eligibility requirements. Our team helps
              you understand the process and navigate the appropriate
              official channels.
            </p>

            <a href="#es-services" className="es-inline-link">
              View available services <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="es-services" id="es-services">
        <div className="es-container">
          <div className="es-section-heading">
            <div>
              <span className="es-section-label">OUR E-SERVICES</span>
              <h2>
                Essential Services.
                <br />
                <span>One Convenient Place.</span>
              </h2>
            </div>

            <p>
              Choose a service category to discuss your requirements
              and the available assistance.
            </p>
          </div>

          <div className="es-service-grid">
            {eServices.map((service, index) => {
              const enquiry =
                `${WHATSAPP}?text=` +
                encodeURIComponent(
                  `Hi Samarth Business Solutions, I need assistance with ${service.title}. Please share the requirements and process.`
                );

              return (
                <motion.article
                  className="es-service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.08,
                  }}
                >
                  <div className="es-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />

                    <div className="es-card-overlay" />

                    <span className="es-card-number">
                      {service.number}
                    </span>

                    <span className="es-card-tag">
                      {service.tag}
                    </span>

                    <a
                      href={enquiry}
                      target="_blank"
                      rel="noreferrer"
                      className="es-card-arrow"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>

                  <div className="es-card-content">
                    <div className="es-card-title">
                      <span className="es-card-icon">
                        {service.icon}
                      </span>
                      <h3>{service.title}</h3>
                    </div>

                    <p>{service.description}</p>

                    <a
                      href={enquiry}
                      target="_blank"
                      rel="noreferrer"
                      className="es-card-link"
                    >
                      Enquire Now <FiArrowRight />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="es-disclaimer">
            Services depend on eligibility, applicable regulations and
            availability. Aadhaar-related work may require an authorised
            centre or official appointment. Final approvals are made by
            the relevant government authority.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="es-process">
        <div className="es-container">
          <div className="es-section-heading">
            <div>
              <span className="es-section-label">HOW IT WORKS</span>
              <h2>
                Three Steps.
                <br />
                <span>A Clearer Process.</span>
              </h2>
            </div>
          </div>

          <div className="es-process-grid">
            {process.map((step) => (
              <article className="es-process-card" key={step.number}>
                <span className="es-process-number">
                  {step.number}
                </span>

                <FiCheckCircle className="es-process-check" />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="es-cta-section">
        <div className="es-container">
          <div className="es-cta">
            <div className="es-cta-bg" />

            <div className="es-cta-content">
              <span className="es-section-label">
                NEED HELP WITH AN APPLICATION?
              </span>

              <h2>
                Your next step
                <br />
                starts here.
              </h2>

              <p>
                Contact our team to discuss your government e-service
                requirements and find out what assistance is available.
              </p>

              <a
                href={generalEnquiry}
                target="_blank"
                rel="noreferrer"
                className="es-btn es-btn-primary"
              >
                Talk to Our Team <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EServices;
