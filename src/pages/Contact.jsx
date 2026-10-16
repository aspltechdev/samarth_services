
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";
import "./Contact.css";

const WHATSAPP_NUMBER = "919904856687"; // Replace with the verified business number

const services = [
  "Loans & Finance",
  "Insurance",
  "Travel & Tourism",
  "Vehicle Rentals",
  "Courier & Cargo",
  "Real Estate",
  "E-Stamp Services",
  "Other Services",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Samarth Business Solutions!

I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message || "I would like more information about this service."}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's Talk About
            <span> Your Next Step.</span>
          </h1>

          <p>
            Have a question about loans, insurance, travel or any of our
            services? Tell us what you need, and let's explore the right
            solution together.
          </p>

          <div className="contact-hero-points">
            <span>
              <FiCheckCircle /> Personalised assistance
            </span>
            <span>
              <FiCheckCircle /> Simple enquiries
            </span>
            <span>
              <FiCheckCircle /> One trusted contact
            </span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container contact-layout">
          {/* Contact Information */}
          <aside className="contact-info-card">
            <span className="contact-section-label">GET IN TOUCH</span>

            <h2>How can we help you?</h2>

            <p className="contact-info-intro">
              Connect with our team to discuss your requirements and learn
              more about our available services.
            </p>

            <div className="contact-info-list">
              <a
                href="tel:+919904856687"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <FiPhone />
                </span>

                <span className="contact-info-copy">
                  <small>Call us</small>
                  <strong>+91 99048 56687</strong>
                  <span>Speak with our team</span>
                </span>

                <FiArrowRight className="contact-info-arrow" />
              </a>

              <a
                href="mailto:info@samarthbusinesssolutions.in"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <FiMail />
                </span>

                <span className="contact-info-copy">
                  <small>Email us</small>
                  <strong>Send an enquiry</strong>
                  <span>Share your requirements</span>
                </span>

                <FiArrowRight className="contact-info-arrow" />
              </a>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FiMapPin />
                </span>

                <span className="contact-info-copy">
                  <small>Our location</small>
                  <strong>Samarth Business Solutions</strong>
                  <span>Contact us for our office address</span>
                </span>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FiClock />
                </span>

                <span className="contact-info-copy">
                  <small>Business hours</small>
                  <strong>Connect with our team</strong>
                  <span>Ask us about our availability</span>
                </span>
              </div>
            </div>

            <div className="contact-whatsapp-box">
              <div className="contact-whatsapp-icon">
                <FiMessageCircle />
              </div>

              <div>
                <strong>Prefer WhatsApp?</strong>
                <p>Send us your enquiry directly.</p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Samarth Business Solutions! I would like to enquire about your services."
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Samarth Business Solutions on WhatsApp"
              >
                <FiArrowRight />
              </a>
            </div>
          </aside>

          {/* Enquiry Form */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-section-label">
                SEND AN ENQUIRY
              </span>

              <h2>Tell us what you need.</h2>

              <p>
                Fill in the details below. Your enquiry will be prepared in
                WhatsApp so you can review and send it to our team.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full name *</label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone number *</label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[+]?[0-9 ()-]{8,18}"
                    title="Enter a valid phone number."
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">
                  Which service are you interested in? *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Tell us more <span>(optional)</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Briefly describe your requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>

              <button type="submit" className="contact-submit-button">
                <FiMessageCircle size={19} />
                Continue to WhatsApp
                <FiArrowRight size={19} />
              </button>

              {submitted && (
                <p className="contact-success-message" role="status">
                  <FiCheckCircle />
                  WhatsApp should open in a new tab. Review your message and
                  press Send to submit your enquiry.
                </p>
              )}

              <p className="contact-form-note">
                Your enquiry will be shared only when you send the message
                through WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="contact-bottom-cta">
        <div className="container contact-bottom-inner">
          <div>
            <span>ONE POINT OF CONTACT</span>
            <h2>Let's find the right solution for you.</h2>
            <p>
              From financial enquiries to everyday business needs, we're
              ready to help you take the next step.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Samarth Business Solutions! I would like to discuss my requirements."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="contact-bottom-button"
          >
            Chat with us <FiArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
