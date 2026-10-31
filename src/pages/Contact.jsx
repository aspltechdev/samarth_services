
// // import { useState } from "react";
// // import {
// //   FiMapPin,
// //   FiPhone,
// //   FiMail,
// //   FiClock,
// //   FiArrowRight,
// //   FiMessageCircle,
// //   FiCheckCircle,
// // } from "react-icons/fi";
// // import "./Contact.css";

// // const WHATSAPP_NUMBER = "919900458068"; // Replace with the verified business number

// // const services = [
// //   "Loans & Finance",
// //   "Insurance",
// //   "Travel & Tourism",
// //   "Vehicle Rentals",
// //   "Courier & Cargo",
// //   "Real Estate",
// //   "E-Stamp Services",
// //   "Other Services",
// // ];

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setFormData((previous) => ({
// //       ...previous,
// //       [name]: value,
// //     }));

// //     setSubmitted(false);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     const whatsappMessage = `
// // HelloSamarth Groups!

// // I would like to enquire about your services.

// // Name: ${formData.name}
// // Phone: ${formData.phone}
// // Service: ${formData.service}

// // Message:
// // ${formData.message || "I would like more information about this service."}
// //     `.trim();

// //     const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
// //       whatsappMessage
// //     )}`;

// //     window.open(whatsappURL, "_blank", "noopener,noreferrer");
// //     setSubmitted(true);
// //   };

// //   return (
// //     <div className="contact-page">
// //       {/* Page Hero */}
// //       <section className="contact-hero">
// //         <div className="container contact-hero-inner">
// //           <span className="contact-eyebrow">
// //             <span className="contact-eyebrow-dot" />
// //             WE'RE HERE TO HELP
// //           </span>

// //           <h1>
// //             Let's Talk About
// //             <span> Your Next Step.</span>
// //           </h1>

// //           <p>
// //             Have a question about loans, insurance, travel or any of our
// //             services? Tell us what you need, and let's explore the right
// //             solution together.
// //           </p>

// //           <div className="contact-hero-points">
// //             <span>
// //               <FiCheckCircle /> Personalised assistance
// //             </span>
// //             <span>
// //               <FiCheckCircle /> Simple enquiries
// //             </span>
// //             <span>
// //               <FiCheckCircle /> One trusted contact
// //             </span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Content */}
// //       <section className="contact-section">
// //         <div className="container contact-layout">
// //           {/* Contact Information */}
// //           <aside className="contact-info-card">
// //             <span className="contact-section-label">GET IN TOUCH</span>

// //             <h2>How can we help you?</h2>

// //             <p className="contact-info-intro">
// //               Connect with our team to discuss your requirements and learn
// //               more about our available services.
// //             </p>

// //             <div className="contact-info-list">
// //               <a
// //                 href="tel:+919900458068"
// //                 className="contact-info-item"
// //               >
// //                 <span className="contact-info-icon">
// //                   <FiPhone />
// //                 </span>

// //                 <span className="contact-info-copy">
// //                   <small>Call us</small>
// //                   <strong>+91 9900458068</strong>
// //                   <span>Speak with our team</span>
// //                 </span>

// //                 <FiArrowRight className="contact-info-arrow" />
// //               </a>

// //               <a
// //                 href="mailto:info@samarthmultiservices.in"
// //                 className="contact-info-item"
// //               >
// //                 <span className="contact-info-icon">
// //                   <FiMail />
// //                 </span>

// //                 <span className="contact-info-copy">
// //                   <small>Email us</small>
// //                   <strong>Send an enquiry</strong>
// //                   <span>Share your requirements</span>
// //                 </span>

// //                 <FiArrowRight className="contact-info-arrow" />
// //               </a>

// //               <div className="contact-info-item">
// //                 <span className="contact-info-icon">
// //                   <FiMapPin />
// //                 </span>

// //                 <span className="contact-info-copy">
// //                   <small>Our location</small>
// //                   <strong>Samarth Groups</strong>
// //                   <span>Contact us for our office address</span>
// //                 </span>
// //               </div>

// //               <div className="contact-info-item">
// //                 <span className="contact-info-icon">
// //                   <FiClock />
// //                 </span>

// //                 <span className="contact-info-copy">
// //                   <small>Business hours</small>
// //                   <strong>Connect with our team</strong>
// //                   <span>Ask us about our availability</span>
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="contact-whatsapp-box">
// //               <div className="contact-whatsapp-icon">
// //                 <FiMessageCircle />
// //               </div>

// //               <div>
// //                 <strong>Prefer WhatsApp?</strong>
// //                 <p>Send us your enquiry directly.</p>
// //               </div>

// //               <a
// //                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
// //                   "HelloSamarth Groups! I would like to enquire about your services."
// //                 )}`}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="Chat withSamarth Groups on WhatsApp"
// //               >
// //                 <FiArrowRight />
// //               </a>
// //             </div>
// //           </aside>

// //           {/* Enquiry Form */}
// //           <div className="contact-form-card">
// //             <div className="contact-form-heading">
// //               <span className="contact-section-label">
// //                 SEND AN ENQUIRY
// //               </span>

// //               <h2>Tell us what you need.</h2>

// //               <p>
// //                 Fill in the details below. Your enquiry will be prepared in
// //                 WhatsApp so you can review and send it to our team.
// //               </p>
// //             </div>

// //             <form className="contact-form" onSubmit={handleSubmit}>
// //               <div className="contact-form-row">
// //                 <div className="contact-field">
// //                   <label htmlFor="contact-name">Full name *</label>

// //                   <input
// //                     id="contact-name"
// //                     name="name"
// //                     type="text"
// //                     placeholder="Enter your full name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     autoComplete="name"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="contact-field">
// //                   <label htmlFor="contact-phone">Phone number *</label>

// //                   <input
// //                     id="contact-phone"
// //                     name="phone"
// //                     type="tel"
// //                     placeholder="Enter your phone number"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     autoComplete="tel"
// //                     inputMode="tel"
// //                     pattern="[+]?[0-9 ()-]{8,18}"
// //                     title="Enter a valid phone number."
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="contact-field">
// //                 <label htmlFor="contact-service">
// //                   Which service are you interested in? *
// //                 </label>

// //                 <select
// //                   id="contact-service"
// //                   name="service"
// //                   value={formData.service}
// //                   onChange={handleChange}
// //                   required
// //                 >
// //                   <option value="">Select a service</option>

// //                   {services.map((service) => (
// //                     <option key={service} value={service}>
// //                       {service}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className="contact-field">
// //                 <label htmlFor="contact-message">
// //                   Tell us more <span>(optional)</span>
// //                 </label>

// //                 <textarea
// //                   id="contact-message"
// //                   name="message"
// //                   placeholder="Briefly describe your requirement..."
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows={5}
// //                 />
// //               </div>

// //               <button type="submit" className="contact-submit-button">
// //                 <FiMessageCircle size={19} />
// //                 Continue to WhatsApp
// //                 <FiArrowRight size={19} />
// //               </button>

// //               {submitted && (
// //                 <p className="contact-success-message" role="status">
// //                   <FiCheckCircle />
// //                   WhatsApp should open in a new tab. Review your message and
// //                   press Send to submit your enquiry.
// //                 </p>
// //               )}

// //               <p className="contact-form-note">
// //                 Your enquiry will be shared only when you send the message
// //                 through WhatsApp.
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Closing CTA */}
// //       <section className="contact-bottom-cta">
// //         <div className="container contact-bottom-inner">
// //           <div>
// //             <span>ONE POINT OF CONTACT</span>
// //             <h2>Let's find the right solution for you.</h2>
// //             <p>
// //               From financial enquiries to everyday business needs, we're
// //               ready to help you take the next step.
// //             </p>
// //           </div>

// //           <a
// //             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
// //               "HelloSamarth Groups! I would like to discuss my requirements."
// //             )}`}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="contact-bottom-button"
// //           >
// //             Chat with us <FiArrowRight />
// //           </a>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiMapPin,
//   FiPhone,
//   FiMail,
//   FiClock,
//   FiArrowRight,
//   FiArrowUpRight,
//   FiMessageCircle,
//   FiCheckCircle,
//   FiShield,
// } from "react-icons/fi";
// import "./Contact.css";
// import contact from "../assets/contact.png";


// const WHATSAPP_NUMBER = "919900458068";

// const services = [
//   "Loans & Finance",
//   "Insurance",
//   "Travel & Tourism",
//   "Vehicle Rentals",
//   "Courier & Cargo",
//   "Real Estate",
//   "E-Stamp Services",
//   "RTO Services",
//   "Government E-Services",
//   "Business Support",
//   "Other Services",
// ];

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setSubmitted(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const whatsappMessage = `
// HelloSamarth Groups!

// I would like to enquire about your services.

// Name: ${formData.name}
// Phone: ${formData.phone}
// Service: ${formData.service}

// Message:
// ${formData.message || "I would like more information about this service."}
//     `.trim();

//     const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     window.open(whatsappURL, "_blank", "noopener,noreferrer");
//     setSubmitted(true);
//   };

//   const quickMessage = encodeURIComponent(
//     "HelloSamarth Groups! I would like to enquire about your services."
//   );

//   return (
//     <main className="contact-page">
//       {/* Cinematic Hero */}
//       <section className="contact-hero">
//         <div className="contact-hero-bg" />
//         <div className="contact-hero-shade" />

//         <div className="container contact-hero-inner">
//           <div className="contact-breadcrumb">
//             <a href="/">Home</a>
//             <span>/</span>
//             <span>Contact Us</span>
//           </div>

//           <motion.div
//             className="contact-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.75 }}
//           >
//             <span className="contact-eyebrow">
//               <span className="contact-eyebrow-dot" />
//               WE'RE HERE TO HELP
//             </span>

//             <h1>
//               Every Great Step
//               <br />
//               <span>Starts with a Conversation.</span>
//             </h1>

//             <p>
//               Whether you need financial guidance, insurance, travel
//               assistance or everyday business services, our team is
//               ready to understand your requirements.
//             </p>

//             <div className="contact-hero-actions">
//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${quickMessage}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="contact-primary-btn"
//               >
//                 <FiMessageCircle />
//                 Let's Talk
//                 <FiArrowUpRight />
//               </a>

//               <a href="#contact-details" className="contact-hero-link">
//                 Explore Contact Options
//                 <FiArrowRight />
//               </a>
//             </div>
//           </motion.div>

//           <div className="contact-hero-bottom">
//             <span>YOUR REQUIREMENT</span>
//             <span className="contact-hero-line" />
//             <span>OUR NEXT STEP TOGETHER</span>
//           </div>
//         </div>
//       </section>

//       {/* Contact and Form */}
//       <section className="contact-section" id="contact-details">
//         <div className="container">
//           <div className="contact-section-heading">
//             <span className="contact-section-label">
//               GET IN TOUCH
//             </span>
//             <h2>
//               Let's make things
//               <br />
//               <span>happen together.</span>
//             </h2>
//             <p>
//               Tell us what you are looking for. We will help you
//               understand the next steps and available services.
//             </p>
//           </div>

//           <div className="contact-layout">
//             {/* Contact Information */}
//             <motion.aside
//               className="contact-info-card"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.55 }}
//             >
//               <div className="contact-info-top">
//                 <span className="contact-section-label">
//                   CONTACT INFORMATION
//                 </span>

//                 <h3>
//                   We'd love to
//                   <br />
//                   hear from you.
//                 </h3>

//                 <p>
//                   Choose the most convenient way to connect with
//                  Samarth Groups.
//                 </p>
//               </div>

//               <div className="contact-info-list">
//                 <a
//                   href="tel:+919900458068"
//                   className="contact-info-item"
//                 >
//                   <span className="contact-info-icon">
//                     <FiPhone />
//                   </span>

//                   <span className="contact-info-copy">
//                     <small>CALL OUR TEAM</small>
//                     <strong>+91 9900458068</strong>
//                     <span>Speak with us directly</span>
//                   </span>

//                   <FiArrowUpRight className="contact-info-arrow" />
//                 </a>

//                 <a
//                   href="mailto:info@samarthmultiservices.in"
//                   className="contact-info-item"
//                 >
//                   <span className="contact-info-icon">
//                     <FiMail />
//                   </span>

//                   <span className="contact-info-copy">
//                     <small>EMAIL US</small>
//                     <strong>Send an enquiry</strong>
//                     <span>Share your requirements</span>
//                   </span>

//                   <FiArrowUpRight className="contact-info-arrow" />
//                 </a>

//                 <div className="contact-info-item">
//                   <span className="contact-info-icon">
//                     <FiMapPin />
//                   </span>

//                   <span className="contact-info-copy">
//                     <small>OUR LOCATION</small>
//                     <strong>Samarth Groups</strong>
//                     <span>Contact us for our office address</span>
//                   </span>
//                 </div>

//                 <div className="contact-info-item">
//                   <span className="contact-info-icon">
//                     <FiClock />
//                   </span>

//                   <span className="contact-info-copy">
//                     <small>BUSINESS HOURS</small>
//                     <strong>We're ready to connect</strong>
//                     <span>Ask our team about availability</span>
//                   </span>
//                 </div>
//               </div>

//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${quickMessage}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="contact-whatsapp-box"
//               >
//                 <span className="contact-whatsapp-icon">
//                   <FiMessageCircle />
//                 </span>

//                 <span className="contact-whatsapp-copy">
//                   <strong>Prefer WhatsApp?</strong>
//                   <span>Message us directly</span>
//                 </span>

//                 <FiArrowUpRight className="contact-whatsapp-arrow" />
//               </a>

//               <div className="contact-trust-note">
//                 <FiShield />
//                 <span>
//                   Your enquiry is shared through WhatsApp only when
//                   you choose to send the message.
//                 </span>
//               </div>
//             </motion.aside>

//             {/* Enquiry Form */}
//             <motion.div
//               className="contact-form-card"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.12 }}
//             >
//               <div className="contact-form-heading">
//                 <span className="contact-section-label">
//                   SEND AN ENQUIRY
//                 </span>

//                 <h2>Tell us what you need.</h2>

//                 <p>
//                   Complete this short form to prepare your enquiry
//                   for our WhatsApp team.
//                 </p>
//               </div>

//               <form className="contact-form" onSubmit={handleSubmit}>
//                 <div className="contact-form-row">
//                   <div className="contact-field">
//                     <label htmlFor="contact-name">Full name *</label>

//                     <input
//                       id="contact-name"
//                       name="name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       autoComplete="name"
//                       required
//                     />
//                   </div>

//                   <div className="contact-field">
//                     <label htmlFor="contact-phone">
//                       Phone number *
//                     </label>

//                     <input
//                       id="contact-phone"
//                       name="phone"
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       autoComplete="tel"
//                       inputMode="tel"
//                       pattern="[+]?[0-9 ()-]{8,18}"
//                       title="Enter a valid phone number."
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="contact-field">
//                   <label htmlFor="contact-service">
//                     Which service do you need? *
//                   </label>

//                   <select
//                     id="contact-service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Choose a service</option>

//                     {services.map((service) => (
//                       <option key={service} value={service}>
//                         {service}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="contact-field">
//                   <label htmlFor="contact-message">
//                     Tell us more <span>(optional)</span>
//                   </label>

//                   <textarea
//                     id="contact-message"
//                     name="message"
//                     placeholder="Briefly describe your requirement..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                   />
//                 </div>

//                 <button type="submit" className="contact-submit-button">
//                   <FiMessageCircle size={19} />
//                   Continue to WhatsApp
//                   <FiArrowRight size={19} />
//                 </button>

//                 {submitted && (
//                   <p className="contact-success-message" role="status">
//                     <FiCheckCircle />
//                     WhatsApp should open in a new tab. Review your
//                     message and press Send to submit your enquiry.
//                   </p>
//                 )}

//                 <p className="contact-form-note">
//                   Nothing is submitted until you send the prepared
//                   message through WhatsApp.
//                 </p>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Closing CTA */}
//       <section className="contact-bottom-section">
//         <div className="container">
//           <div className="contact-bottom-cta">
//             <div className="contact-bottom-bg" />

//             <div className="contact-bottom-inner">
//               <div>
//                 <span className="contact-section-label">
//                   ONE POINT OF CONTACT
//                 </span>

//                 <h2>
//                   Let's find the right
//                   <br />
//                   solution for you.
//                 </h2>

//                 <p>
//                   One conversation can help you understand your
//                   options and take the next step.
//                 </p>
//               </div>

//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   "HelloSamarth Groups! I would like to discuss my requirements."
//                 )}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="contact-primary-btn"
//               >
//                 Chat with Us <FiArrowUpRight />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiArrowUpRight,
  FiMessageCircle,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import "./Contact.css";
import contact from "../assets/contact.png";

const WHATSAPP_NUMBER = "919900458068";

const WEB3FORMS_ACCESS_KEY = "e5e14949-9765-42f7-8c6b-d779c560079b";

const services = [
  "Loans & Finance",
  "Insurance",
  "Travel & Tourism",
  "Vehicle Rentals",
  "Courier & Cargo",
  "Real Estate",
  "E-Stamp Services",
  "RTO Services",
  "Government E-Services",
  "Business Support",
  "Other Services",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmissionStatus("");
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setSubmissionStatus("");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry - ${formData.service}`,
          from_name: "Samarth Groups Website",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message:
            formData.message.trim() ||
            "I would like more information about this service.",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setSubmissionStatus("success");

      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setSubmissionStatus("error");

      setErrorMessage(
        error.message ||
          "We couldn't submit your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const quickMessage = encodeURIComponent(
    "HelloSamarth Groups! I would like to enquire about your services."
  );

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-shade" />

        <div className="container contact-hero-inner">
          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </div>

          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              WE'RE HERE TO HELP
            </span>

            <h1>
              Every Great Step
              <br />
              <span>Starts with a Conversation.</span>
            </h1>

            <p>
              Whether you need financial guidance, insurance, travel
              assistance or everyday business services, our team is
              ready to understand your requirements.
            </p>

            <div className="contact-hero-actions">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${quickMessage}`}
                target="_blank"
                rel="noreferrer"
                className="contact-primary-btn"
              >
                <FiMessageCircle />
                Let's Talk
                <FiArrowUpRight />
              </a>

              <a
                href="#contact-details"
                className="contact-hero-link"
              >
                Explore Contact Options
                <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <div className="contact-hero-bottom">
            <span>YOUR REQUIREMENT</span>
            <span className="contact-hero-line" />
            <span>OUR NEXT STEP TOGETHER</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact-details">
        <div className="container">
          <div className="contact-section-heading">
            <span className="contact-section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's make things
              <br />
              <span>happen together.</span>
            </h2>

            <p>
              Tell us what you are looking for. We will help you
              understand the next steps and available services.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Information */}
            <motion.aside
              className="contact-info-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="contact-info-top">
                <span className="contact-section-label">
                  CONTACT INFORMATION
                </span>

                <h3>
                  We'd love to
                  <br />
                  hear from you.
                </h3>

                <p>
                  Choose the most convenient way to connect with
                 Samarth Groups.
                </p>
              </div>

              <div className="contact-info-list">
                {/* Phone */}
                <a
                  href="tel:+919900458068"
                  className="contact-info-item"
                >
                  <span className="contact-info-icon">
                    <FiPhone />
                  </span>

                  <span className="contact-info-copy">
                    <small>CALL OUR TEAM</small>
                    <strong>+91 9900458068</strong>
                    <span>Speak with us directly</span>
                  </span>

                  <FiArrowUpRight className="contact-info-arrow" />
                </a>

                {/* Email */}
                <a
                  href="mailto:info@samarthmultiservices.in"
                  className="contact-info-item"
                >
                  <span className="contact-info-icon">
                    <FiMail />
                  </span>

                  <span className="contact-info-copy">
                    <small>EMAIL US</small>
                    <strong>Send an enquiry</strong>
                    <span>Share your requirements</span>
                  </span>

                  <FiArrowUpRight className="contact-info-arrow" />
                </a>

                {/* Location */}
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <FiMapPin />
                  </span>

                  <span className="contact-info-copy">
                    <small>OUR LOCATION</small>
                    <strong>Samarth Groups</strong>
                    <span>
                      Contact us for our office address
                    </span>
                  </span>
                </div>

                {/* Business Hours */}
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <FiClock />
                  </span>

                  <span className="contact-info-copy">
                    <small>BUSINESS HOURS</small>
                    <strong>We're ready to connect</strong>
                    <span>Ask our team about availability</span>
                  </span>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${quickMessage}`}
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-box"
              >
                <span className="contact-whatsapp-icon">
                  <FiMessageCircle />
                </span>

                <span className="contact-whatsapp-copy">
                  <strong>Prefer WhatsApp?</strong>
                  <span>Message us directly</span>
                </span>

                <FiArrowUpRight className="contact-whatsapp-arrow" />
              </a>

              <div className="contact-trust-note">
                <FiShield />

                <span>
                  Your enquiry is submitted through our secure
                  contact form when you click Submit Enquiry.
                </span>
              </div>
            </motion.aside>

            {/* Enquiry Form */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="contact-form-heading">
                <span className="contact-section-label">
                  SEND AN ENQUIRY
                </span>

                <h2>Tell us what you need.</h2>

                <p>
                  Complete this short form and our team will
                  get in touch with you.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                {/* Name and Phone */}
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      maxLength={100}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone number *
                    </label>

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
                      maxLength={18}
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="contact-field">
                  <label htmlFor="contact-service">
                    Which service do you need? *
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  >
                    <option value="">
                      Choose a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
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
                    maxLength={3000}
                    disabled={submitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <FiMessageCircle size={19} />
                      Submit Enquiry
                      <FiArrowRight size={19} />
                    </>
                  )}
                </button>

                {/* Success Confirmation */}
                {submissionStatus === "success" && (
                  <div
                    className="contact-success-message"
                    role="status"
                    aria-live="polite"
                  >
                    <FiCheckCircle size={22} />

                    <div>
                      <strong>
                        Thank you for contacting us!
                      </strong>

                      <p>
                        Your enquiry has been submitted successfully.
                        Our team will get in touch with you soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Confirmation */}
                {submissionStatus === "error" && (
                  <div
                    className="contact-error-message"
                    role="alert"
                    aria-live="assertive"
                  >
                    <strong>Submission failed.</strong>

                    <p>
                      {errorMessage ||
                        "We couldn't submit your enquiry. Please try again."}
                    </p>

                    <p>
                      You can also contact our team directly by phone
                      or WhatsApp.
                    </p>
                  </div>
                )}

                {/* Form Note */}
                <p className="contact-form-note">
                  Your information will be sent through Web3Forms.
                  Please ensure your contact details are correct.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="contact-bottom-section">
        <div className="container">
          <div className="contact-bottom-cta">
            <div className="contact-bottom-bg" />

            <div className="contact-bottom-inner">
              <div>
                <span className="contact-section-label">
                  ONE POINT OF CONTACT
                </span>

                <h2>
                  Let's find the right
                  <br />
                  solution for you.
                </h2>

                <p>
                  One conversation can help you understand your
                  options and take the next step.
                </p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "HelloSamarth Groups! I would like to discuss my requirements."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="contact-primary-btn"
              >
                Chat with Us
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}