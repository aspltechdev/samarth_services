
// // // import { Link } from "react-router-dom";
// // // import {
// // //   MapPin,
// // //   Phone,
// // //   Mail,
// // //   ArrowUpRight,
// // //   Facebook,
// // //   Instagram,
// // //   Linkedin,
// // // } from "lucide-react";
// // // import "./Footer.css";

// // // const services = [
// // //   { label: "Loans & Finance", to: "/loans" },
// // //   { label: "Insurance", to: "/insurance" },
// // //   { label: "Travel & Tourism", to: "/travel" },
// // //   { label: "Vehicle Rentals", to: "/services" },
// // //   { label: "Courier & Cargo", to: "/services" },
// // //   { label: "Real Estate", to: "/services" },
// // // ];

// // // const quickLinks = [
// // //   { label: "Home", to: "/" },
// // //   { label: "About Us", to: "/about" },
// // //   { label: "All Services", to: "/services" },
// // //   { label: "Contact Us", to: "/contact" },
// // // ];

// // // export default function Footer() {
// // //   const currentYear = new Date().getFullYear();

// // //   return (
// // //     <footer className="site-footer">
// // //       <div className="footer-main">
// // //         <div className="container footer-grid">
// // //           <div className="footer-brand-column">
// // //             <Link to="/" className="footer-brand">
// // //               <span className="footer-brand-mark">SBS</span>

// // //               <span className="footer-brand-copy">
// // //                 <strong>SAMARTH</strong>
// // //                 <small>BUSINESS SOLUTIONS</small>
// // //               </span>
// // //             </Link>

// // //             <p className="footer-description">
// // //               Your trusted destination for loans, insurance,
// // //               travel, rentals, courier services and other
// // //               business solutions.
// // //             </p>

// // //             <div className="footer-socials">
// // //               <a
// // //                 href="https://www.facebook.com/"
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 aria-label="Facebook"
// // //               >
// // //                 <Facebook size={18} />
// // //               </a>

// // //               <a
// // //                 href="https://www.instagram.com/"
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 aria-label="Instagram"
// // //               >
// // //                 <Instagram size={18} />
// // //               </a>

// // //               <a
// // //                 href="https://www.linkedin.com/"
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 aria-label="LinkedIn"
// // //               >
// // //                 <Linkedin size={18} />
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className="footer-column">
// // //             <h3>Quick Links</h3>

// // //             <ul>
// // //               {quickLinks.map((item) => (
// // //                 <li key={item.label}>
// // //                   <Link to={item.to}>
// // //                     <ArrowUpRight size={14} />
// // //                     {item.label}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           <div className="footer-column">
// // //             <h3>Our Services</h3>

// // //             <ul>
// // //               {services.map((item) => (
// // //                 <li key={item.label}>
// // //                   <Link to={item.to}>
// // //                     <ArrowUpRight size={14} />
// // //                     {item.label}
// // //                   </Link>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           <div className="footer-column footer-contact">
// // //             <h3>Get in Touch</h3>

// // //             <a href="tel:+919904856687" className="footer-contact-item">
// // //               <span><Phone size={17} /></span>
// // //               <div>
// // //                 <small>Call Us</small>
// // //                 <strong>+91 99048 56687</strong>
// // //               </div>
// // //             </a>

// // //             <a
// // //               href="mailto:info@samarthbusinesssolutions.in"
// // //               className="footer-contact-item"
// // //             >
// // //               <span><Mail size={17} /></span>
// // //               <div>
// // //                 <small>Email Us</small>
// // //                 <strong>Send an email</strong>
// // //               </div>
// // //             </a>

// // //             <div className="footer-contact-item">
// // //               <span><MapPin size={17} /></span>
// // //               <div>
// // //                 <small>Visit Us</small>
// // //                 <strong>Contact us for our office address</strong>
// // //               </div>
// // //             </div>

// // //             <a
// // //               className="footer-whatsapp"
// // //               href="https://wa.me/919904856687?text=Hello%20Samarth%20Business%20Solutions"
// // //               target="_blank"
// // //               rel="noreferrer"
// // //             >
// // //               Enquire on WhatsApp
// // //               <ArrowUpRight size={17} />
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="footer-bottom">
// // //         <div className="container footer-bottom-inner">
// // //           <p>
// // //             © {currentYear} Samarth Business Solutions.
// // //             All rights reserved.
// // //           </p>

// // //           <p>Built around your business needs.</p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }



// // import { Link } from "react-router-dom";
// // import {
// //   FiMapPin,
// //   FiPhone,
// //   FiMail,
// //   FiArrowUpRight,
// //   FiFacebook,
// //   FiInstagram,
// //   FiLinkedin,
// //   FiMessageCircle,
// // } from "react-icons/fi";

// // import "./Footer.css";

// // const services = [
// //   { label: "Loans & Finance", to: "/loans" },
// //   { label: "Insurance", to: "/insurance" },
// //   { label: "Travel & Tourism", to: "/travel" },
// //   { label: "Vehicle Rentals", to: "/services" },
// //   { label: "Courier & Cargo", to: "/services" },
// //   { label: "Real Estate", to: "/services" },
// //   { label: "E-Stamp Services", to: "/services" },
// // ];

// // const quickLinks = [
// //   { label: "Home", to: "/" },
// //   { label: "About Us", to: "/about" },
// //   { label: "All Services", to: "/services" },
// //   { label: "Contact Us", to: "/contact" },
// // ];

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   // Replace these sample details with the client's verified information.
// //   const phone = "+919904856687";
// //   const email = "info@samarthbusinesssolutions.in";

// //   return (
// //     <footer className="site-footer">
// //       <div className="footer-main">
// //         <div className="container footer-grid">
// //           {/* Brand */}
// //           <div className="footer-brand-column">
// //             <Link to="/" className="footer-brand">
// //               <span className="footer-brand-mark">SBS</span>

// //               <span className="footer-brand-copy">
// //                 <strong>SAMARTH</strong>
// //                 <small>Groups</small>
// //               </span>
// //             </Link>

// //             <p className="footer-description">
// //               Your trusted destination for loans, insurance,
// //               travel, rentals, courier services and business
// //               solutions—all in one place.
// //             </p>

// //             <div className="footer-socials">
// //               <a
// //                 href="https://www.facebook.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="Facebook"
// //               >
// //                 <FiFacebook />
// //               </a>

// //               <a
// //                 href="https://www.instagram.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="Instagram"
// //               >
// //                 <FiInstagram />
// //               </a>

// //               <a
// //                 href="https://www.linkedin.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="LinkedIn"
// //               >
// //                 <FiLinkedin />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="footer-column">
// //             <h3>Quick Links</h3>

// //             <ul>
// //               {quickLinks.map((item) => (
// //                 <li key={item.label}>
// //                   <Link to={item.to}>
// //                     <FiArrowUpRight />
// //                     {item.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Services */}
// //           <div className="footer-column">
// //             <h3>Our Services</h3>

// //             <ul>
// //               {services.map((item) => (
// //                 <li key={item.label}>
// //                   <Link to={item.to}>
// //                     <FiArrowUpRight />
// //                     {item.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div className="footer-column footer-contact">
// //             <h3>Get in Touch</h3>

// //             <a
// //               href={`tel:${phone}`}
// //               className="footer-contact-item"
// //             >
// //               <span className="footer-contact-icon">
// //                 <FiPhone />
// //               </span>

// //               <div>
// //                 <small>Call Us</small>
// //                 <strong>{phone.replace("+91", "+91 ")}</strong>
// //               </div>
// //             </a>

// //             <a
// //               href={`mailto:${email}`}
// //               className="footer-contact-item"
// //             >
// //               <span className="footer-contact-icon">
// //                 <FiMail />
// //               </span>

// //               <div>
// //                 <small>Email Us</small>
// //                 <strong>{email}</strong>
// //               </div>
// //             </a>

// //             <div className="footer-contact-item">
// //               <span className="footer-contact-icon">
// //                 <FiMapPin />
// //               </span>

// //               <div>
// //                 <small>Visit Us</small>
// //                 <strong>Contact us for our office address</strong>
// //               </div>
// //             </div>

// //             <a
// //               className="footer-whatsapp"
// //               href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
// //                 "Hello Samarth Business Solutions, I would like to enquire about your services."
// //               )}`}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               <FiMessageCircle size={18} />
// //               Enquire on WhatsApp
// //               <FiArrowUpRight size={17} />
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Copyright */}
// //       <div className="footer-bottom">
// //         <div className="container footer-bottom-inner">
// //           <p>
// //             © {currentYear} Samarth Business Solutions.
// //             All rights reserved.
// //           </p>

// //           <Link to="/contact" className="footer-bottom-link">
// //             Let's work together <FiArrowUpRight />
// //           </Link>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// // import { Link } from "react-router-dom";
// // import {
// //   FiMapPin,
// //   FiPhone,
// //   FiMail,
// //   FiArrowUpRight,
// //   FiFacebook,
// //   FiInstagram,
// //   FiLinkedin,
// //   FiMessageCircle,
// // } from "react-icons/fi";

// // import "./Footer.css";
// // import logo from "../assets/logo.png";

// // const services = [
// //   { label: "Loans & Finance", to: "/loans" },
// //   { label: "Insurance", to: "/insurance" },
// //   { label: "Travel & Tourism", to: "/travel" },
// //   { label: "Vehicle Rentals", to: "/services" },
// //   { label: "Courier & Cargo", to: "/services" },
// //   { label: "Real Estate", to: "/services" },
// //   { label: "E-Stamp Services", to: "/services" },
// // ];

// // const quickLinks = [
// //   { label: "Home", to: "/" },
// //   { label: "About Us", to: "/about" },
// //   { label: "All Services", to: "/services" },
// //   { label: "Contact Us", to: "/contact" },
// // ];

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   const phone = "+919904856687";
// //   const email = "info@samarthbusinesssolutions.in";

// //   return (
// //     <footer className="site-footer">
// //       <div className="footer-main">
// //         <div className="container footer-grid">
// //           {/* Brand and Logo */}
// //           <div className="footer-brand-column">
// //             <Link to="/" className="footer-brand" aria-label="Samarth Groups Home">
// //               <img
// //                 src={logo}
// //                 alt="Samarth Groups Logo"
// //                 className="footer-logo"
// //               />
// //             </Link>

// //             <p className="footer-description">
// //               Your trusted destination for loans, insurance, travel,
// //               rentals, courier services and business solutions — all
// //               in one place.
// //             </p>

// //             {/* Social Media */}
// //             <div className="footer-socials">
// //               <a
// //                 href="https://www.facebook.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="Facebook"
// //               >
// //                 <FiFacebook />
// //               </a>

// //               <a
// //                 href="https://www.instagram.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="Instagram"
// //               >
// //                 <FiInstagram />
// //               </a>

// //               <a
// //                 href="https://www.linkedin.com/"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 aria-label="LinkedIn"
// //               >
// //                 <FiLinkedin />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div className="footer-column">
// //             <h3>Quick Links</h3>

// //             <ul>
// //               {quickLinks.map((item) => (
// //                 <li key={item.label}>
// //                   <Link to={item.to}>
// //                     <FiArrowUpRight />
// //                     <span>{item.label}</span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Services */}
// //           <div className="footer-column">
// //             <h3>Our Services</h3>

// //             <ul>
// //               {services.map((item) => (
// //                 <li key={item.label}>
// //                   <Link to={item.to}>
// //                     <FiArrowUpRight />
// //                     <span>{item.label}</span>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Information */}
// //           <div className="footer-column footer-contact">
// //             <h3>Get in Touch</h3>

// //             <a href={`tel:${phone}`} className="footer-contact-item">
// //               <span className="footer-contact-icon">
// //                 <FiPhone />
// //               </span>

// //               <div>
// //                 <small>Call Us</small>
// //                 <strong>+91 99048 56687</strong>
// //               </div>
// //             </a>

// //             <a href={`mailto:${email}`} className="footer-contact-item">
// //               <span className="footer-contact-icon">
// //                 <FiMail />
// //               </span>

// //               <div>
// //                 <small>Email Us</small>
// //                 <strong>{email}</strong>
// //               </div>
// //             </a>

// //             <div className="footer-contact-item">
// //               <span className="footer-contact-icon">
// //                 <FiMapPin />
// //               </span>

// //               <div>
// //                 <small>Visit Us</small>
// //                 <strong>Contact us for our office address</strong>
// //               </div>
// //             </div>

// //             {/* WhatsApp */}
// //             <a
// //               className="footer-whatsapp"
// //               href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
// //                 "Hello Samarth Business Solutions, I would like to enquire about your services."
// //               )}`}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               <FiMessageCircle size={18} />
// //               <span>Enquire on WhatsApp</span>
// //               <FiArrowUpRight size={17} />
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Copyright */}
// //       <div className="footer-bottom">
// //         <div className="container footer-bottom-inner">
// //           <p>
// //             © {currentYear} Samarth Business Solutions. All rights reserved.
// //           </p>

// //           <Link to="/contact" className="footer-bottom-link">
// //             Let's work together <FiArrowUpRight />
// //           </Link>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import { Link } from "react-router-dom";
// import {
//   FiMapPin,
//   FiPhone,
//   FiMail,
//   FiArrowUpRight,
//   FiFacebook,
//   FiInstagram,
//   FiLinkedin,
//   FiMessageCircle,
//   FiYoutube,
// } from "react-icons/fi";

// import "./Footer.css";
// import logo from "../assets/logo.png";

// const services = [
//   { label: "Loans & Finance", to: "/loans" },
//   { label: "Insurance", to: "/insurance" },
//   { label: "Travel & Tourism", to: "/travel" },
//   { label: "Vehicle Rentals", to: "/services" },
//   { label: "Courier & Cargo", to: "/services" },
//   { label: "Real Estate", to: "/services" },
//   { label: "E-Stamp Services", to: "/services" },
// ];

// const quickLinks = [
//   { label: "Home", to: "/" },
//   { label: "About Us", to: "/about" },
//   { label: "All Services", to: "/services" },
//   { label: "Contact Us", to: "/contact" },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const phone = "+919904856687";
//   const email = "info@samarthbusinesssolutions.in";

//   const socialLinks = [
//     {
//       label: "Instagram",
//       href: "https://www.instagram.com/samarth_.services/",
//       icon: <FiInstagram />,
//     },
//     {
//       label: "YouTube",
//       href: "https://youtube.com/@samrathservices?si=abDkhWhVHHvqyICr",
//       icon: <FiYoutube />,
//     },
//     {
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/company/samarth-multy-services/home/?viewAsMember=true",
//       icon: <FiLinkedin />,
//     },
//   ];

//   return (
//     <footer className="site-footer">
//       <div className="footer-main">
//         <div className="container footer-grid">
//           {/* Brand and Logo */}
//           <div className="footer-brand-column">
//             <Link
//               to="/"
//               className="footer-brand"
//               aria-label="Samarth Groups Home"
//             >
//               <img
//                 src={logo}
//                 alt="Samarth Groups Logo"
//                 className="footer-logo"
//               />
//             </Link>

//             <p className="footer-description">
//               Your trusted destination for loans, insurance, travel,
//               rentals, courier services and business solutions — all
//               in one place.
//             </p>

//             {/* Social Media Links */}
//             <div className="footer-socials">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   title={social.label}
//                 >
//                   {social.icon}
//                 </a>
//               ))}

//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 title="Facebook"
//               >
//                 <FiFacebook />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="footer-column">
//             <h3>Quick Links</h3>

//             <ul>
//               {quickLinks.map((item) => (
//                 <li key={item.label}>
//                   <Link to={item.to}>
//                     <FiArrowUpRight />
//                     <span>{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="footer-column">
//             <h3>Our Services</h3>

//             <ul>
//               {services.map((item) => (
//                 <li key={item.label}>
//                   <Link to={item.to}>
//                     <FiArrowUpRight />
//                     <span>{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div className="footer-column footer-contact">
//             <h3>Get in Touch</h3>

//             <a
//               href={`tel:${phone}`}
//               className="footer-contact-item"
//             >
//               <span className="footer-contact-icon">
//                 <FiPhone />
//               </span>

//               <div>
//                 <small>Call Us</small>
//                 <strong>+91 99048 56687</strong>
//               </div>
//             </a>

//             <a
//               href={`mailto:${email}`}
//               className="footer-contact-item"
//             >
//               <span className="footer-contact-icon">
//                 <FiMail />
//               </span>

//               <div>
//                 <small>Email Us</small>
//                 <strong>{email}</strong>
//               </div>
//             </a>

//             <div className="footer-contact-item">
//               <span className="footer-contact-icon">
//                 <FiMapPin />
//               </span>

//               <div>
//                 <small>Visit Us</small>
//                 <strong>
//                   Contact us for our office address
//                 </strong>
//               </div>
//             </div>

//             {/* WhatsApp */}
//             <a
//               className="footer-whatsapp"
//               href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
//                 "Hello Samarth Business Solutions, I would like to enquire about your services."
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FiMessageCircle size={18} />
//               <span>Enquire on WhatsApp</span>
//               <FiArrowUpRight size={17} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="footer-bottom">
//         <div className="container footer-bottom-inner">
//           <p>
//             © {currentYear} Samarth Business Solutions. All rights
//             reserved.
//           </p>

//           <Link to="/contact" className="footer-bottom-link">
//             Let's work together <FiArrowUpRight />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }




















import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMessageCircle,
  FiYoutube,
} from "react-icons/fi";

import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Loans & Finance", path: "/loans" },
    { name: "Insurance", path: "/insurance" },
    { name: "Travel & Tourism", path: "/travel" },
    { name: "Other Services", path: "/services" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram />,
      url: "https://www.instagram.com/samarth_.services/",
    },
    {
      name: "YouTube",
      icon: <FiYoutube />,
      url: "https://youtube.com/@samrathservices?si=abDkhWhVHHvqyICr",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/company/samarth-multy-services/home/?viewAsMember=true",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      url: "https://www.facebook.com/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-about">
          <Link to="/" className="footer-logo-link">
            <img
              src={logo}
              alt="Samarth Business Solutions"
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            Samarth Business Solutions provides reliable and professional
            services to simplify your personal and business needs. We are
            committed to delivering convenient solutions with trust,
            transparency, and customer satisfaction.
          </p>

          {/* Social Media Links */}
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>
                  <FiArrowUpRight className="footer-link-icon" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3 className="footer-heading">Our Services</h3>

          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.path}>
                  <FiArrowUpRight className="footer-link-icon" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Contact Us</h3>

          <div className="footer-contact-item">
            <FiPhone className="footer-contact-icon" />
            <a href="tel:+919904856687">+91 99048 56687</a>
          </div>

          <div className="footer-contact-item">
            <FiMail className="footer-contact-icon" />
            <a href="mailto:info@samarthbusinesssolutions.in">
              info@samarthbusinesssolutions.in
            </a>
          </div>

          <div className="footer-contact-item">
            <FiMapPin className="footer-contact-icon" />
            <span>Samarth Business Solutions</span>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919904856687"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <FiMessageCircle />
            <span>Chat With Us</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            &copy; {currentYear} Samarth Business Solutions. All rights
            reserved.
          </p>

          {/* Developer Credit */}
          <p className="footer-developer-credit">
            Developed by{" "}
            <a
              href="https://aspltech.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASPL Tech Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;