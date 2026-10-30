
// import { Link } from "react-router-dom";
// import {
//   FiArrowRight,
//   FiCheckCircle,
//   FiTarget,
//   FiUsers,
//   FiAward,
//   FiTrendingUp,
// } from "react-icons/fi";
// import "./About.css";

// const values = [
//   {
//     icon: FiUsers,
//     title: "Customer First",
//     description:
//       "We focus on understanding each customer's needs and helping them explore suitable services.",
//   },
//   {
//     icon: FiTarget,
//     title: "Practical Solutions",
//     description:
//       "We help customers navigate different service options with clear and useful guidance.",
//   },
//   {
//     icon: FiAward,
//     title: "Professional Approach",
//     description:
//       "We aim to provide a responsive, respectful and reliable customer experience.",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Long-Term Relationships",
//     description:
//       "We believe in building lasting relationships through communication and continued support.",
//   },
// ];

// export default function About() {
//   return (
//     <div className="about-page">
//       {/* Page Hero */}
//       <section className="about-hero">
//         <div className="container about-hero-inner">
//           <div className="about-breadcrumb">
//             <Link to="/">Home</Link>
//             <span>/</span>
//             <span>About Us</span>
//           </div>

//           <span className="about-eyebrow">GET TO KNOW US</span>

//           <h1>
//             Your Needs Matter.
//             <br />
//             <span>Our Solutions Bring You Closer.</span>
//           </h1>

//           <p>
//             Discover Samarth Business Solutions, a destination
//             for exploring a range of financial, travel and
//             business-related services.
//           </p>

//           <Link to="/contact" className="about-hero-button">
//             Connect With Our Team
//             <FiArrowRight />
//           </Link>
//         </div>
//       </section>

//       {/* About Introduction */}
//       <section className="about-intro section-padding">
//         <div className="container about-intro-grid">
//           <div className="about-image-wrap">
//             <img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
//               alt="Professionals collaborating in a business meeting"
//              loading="lazy"
//             />

//             <div className="about-image-label">
//               <FiUsers size={25} />
//               <div>
//                 <strong>People-Focused Service</strong>
//                 <span>Understanding your requirements</span>
//               </div>
//             </div>
//           </div>

//           <div className="about-intro-content">
//             <span className="section-kicker">WHO WE ARE</span>

//             <h2>
//               One Destination.
//               <br />
//               Multiple Service Solutions.
//             </h2>

//             <p>
//               At Samarth Business Solutions, we bring together
//               different service categories to make it easier
//               for customers to explore their options.
//             </p>

//             <p>
//               Whether you are looking into loan options,
//               insurance, travel planning, vehicle rentals,
//               courier and cargo, e-stamp or real estate services,
//               our goal is to help you connect with the right
//               service for your requirements.
//             </p>

//             <div className="about-check-list">
//               <div>
//                 <FiCheckCircle />
//                 Multiple service categories
//               </div>

//               <div>
//                 <FiCheckCircle />
//                 Customer-focused assistance
//               </div>

//               <div>
//                 <FiCheckCircle />
//                 Convenient enquiry process
//               </div>
//             </div>

//             <Link to="/services" className="about-text-link">
//               Explore our services
//               <FiArrowRight />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Mission and Vision */}
//       <section className="about-purpose">
//         <div className="container about-purpose-grid">
//           <article className="purpose-card">
//             <span className="purpose-number">01</span>
//             <span className="purpose-icon">
//               <FiTarget size={25} />
//             </span>
//             <h3>Our Mission</h3>
//             <p>
//               To make exploring everyday financial and business
//               services more convenient through accessible
//               information and helpful customer assistance.
//             </p>
//           </article>

//           <article className="purpose-card purpose-card-highlight">
//             <span className="purpose-number">02</span>
//             <span className="purpose-icon">
//               <FiTrendingUp size={25} />
//             </span>
//             <h3>Our Vision</h3>
//             <p>
//               To build lasting customer relationships and become
//               a trusted destination for discovering a broad range
//               of service solutions.
//             </p>
//           </article>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="about-values section-padding">
//         <div className="container">
//           <div className="section-heading">
//             <span className="section-kicker">WHAT GUIDES US</span>
//             <h2>The Values Behind Our Service</h2>
//             <p>
//               The principles that shape how we communicate,
//               support customers and approach their requirements.
//             </p>
//           </div>

//           <div className="about-values-grid">
//             {values.map((value) => {
//               const Icon = value.icon;

//               return (
//                 <article className="about-value-card" key={value.title}>
//                   <div className="about-value-icon">
//                     <Icon size={25} />
//                   </div>

//                   <h3>{value.title}</h3>
//                   <p>{value.description}</p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="about-cta-section">
//         <div className="container about-cta">
//           <div>
//             <span>LET'S CONNECT</span>
//             <h2>Looking for a service that fits your needs?</h2>
//             <p>
//               Talk to our team about your requirements and
//               available service options.
//             </p>
//           </div>

//           <Link to="/contact" className="about-cta-button">
//             Contact Us
//             <FiArrowRight />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }




// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FiArrowRight,
//   FiArrowUpRight,
//   FiCheckCircle,
//   FiTarget,
//   FiUsers,
//   FiAward,
//   FiTrendingUp,
//   FiShield,
//   FiLayers,
//   FiHeadphones,
//   FiUser,
// } from "react-icons/fi";
// import "./About.css";

// const values = [
//   {
//     icon: FiUsers,
//     title: "Customer First",
//     description:
//       "We focus on understanding each customer's needs and helping them explore suitable services.",
//     color: "blue",
//   },
//   {
//     icon: FiTarget,
//     title: "Practical Solutions",
//     description:
//       "We help customers navigate different service options with clear and useful guidance.",
//     color: "green",
//   },
//   {
//     icon: FiAward,
//     title: "Professional Approach",
//     description:
//       "We aim to provide a responsive, respectful and reliable customer experience.",
//     color: "gold",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Long-Term Relationships",
//     description:
//       "We believe in building lasting relationships through communication and continued support.",
//     color: "purple",
//   },
// ];

// const services = [
//   "Loans & Finance",
//   "Insurance",
//   "Travel & Tourism",
//   "RTO Services",
//   "Courier & Cargo",
//   "Real Estate",
//   "E-Stamp Services",
//   "Business Services",
// ];

// const reveal = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// };

// export default function About() {
//   return (
//     <main className="about-page">
//       {/* HERO */}
//       <section className="about-hero">
//         <div className="about-hero-grid" />
//         <div className="about-hero-glow" />

//         <div className="container about-hero-inner">
//           <motion.div
//             className="about-hero-content"
//             initial="hidden"
//             animate="visible"
//             variants={stagger}
//           >
//             <motion.div
//               className="about-breadcrumb"
//               variants={reveal}
//             >
//               <Link to="/">Home</Link>
//               <span>›</span>
//               <span>About Us</span>
//             </motion.div>

//             <motion.div
//               className="about-eyebrow"
//               variants={reveal}
//             >
//               <span className="about-eyebrow-line" />
//               GET TO KNOW US
//             </motion.div>

//             <motion.h1 variants={reveal}>
//               Your Needs Matter.
//               <br />
//               <span>Our Solutions Bring You Closer.</span>
//             </motion.h1>

//             <motion.p variants={reveal}>
//               Discover Samarth Business Solutions, a destination
//               for exploring a range of financial, travel and
//               business-related services.
//             </motion.p>

//             <motion.div
//               className="about-hero-actions"
//               variants={reveal}
//             >
//               <Link
//                 to="/contact"
//                 className="about-hero-button"
//               >
//                 Connect With Our Team
//                 <span>
//                   <FiArrowRight />
//                 </span>
//               </Link>
//             </motion.div>

//             <motion.div
//               className="about-hero-features"
//               variants={reveal}
//             >
//               <div>
//                 <FiShield />
//                 <span>Trusted Guidance</span>
//               </div>
//               <i />
//               <div>
//                 <FiUsers />
//                 <span>Multiple Services</span>
//               </div>
//               <i />
//               <div>
//                 <FiHeadphones />
//                 <span>Customer Support</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="about-hero-visual"
//             initial={{ opacity: 0, scale: 0.96, x: 25 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           >
//             <div className="about-hero-image">
//               <img
//                 src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=90"
//                 alt="Business professionals collaborating"
//                 fetchPriority="high"
//               />
//               <div className="about-hero-image-overlay" />
//             </div>

//             <div className="about-hero-image-ring" />

//             <motion.div
//               className="about-image-label"
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <span className="about-image-label-icon">
//                 <FiUsers />
//               </span>
//               <span className="about-image-label-content">
//                 <strong>People-Focused Service</strong>
//                 <small>Understanding your requirements</small>
//               </span>
//             </motion.div>

//             <span className="about-hero-dot-pattern" />
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT INTRODUCTION */}
//       <section className="about-intro section-padding">
//         <div className="container about-intro-grid">
//           <motion.div
//             className="about-intro-visual"
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="about-intro-image">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=90"
//                 alt="Modern commercial office building"
//                loading="lazy"
//               />
//             </div>

//             <div className="about-intro-backdrop about-intro-backdrop-blue" />
//             <div className="about-intro-backdrop about-intro-backdrop-gold" />

//             <div className="about-intro-badge">
//               <span className="about-intro-badge-icon">
//                 <FiUsers />
//               </span>
//               <span>
//                 <strong>Building Brighter Possibilities</strong>
//                 <small>Through trusted guidance</small>
//               </span>
//             </div>

//             <span className="about-intro-dots" />
//           </motion.div>

//           <motion.div
//             className="about-intro-content"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={stagger}
//           >
//             <motion.div
//               className="about-section-kicker"
//               variants={reveal}
//             >
//               <span />
//               WHO WE ARE
//             </motion.div>

//             <motion.h2 variants={reveal}>
//               One Destination.
//               <br />
//               Multiple Service Solutions.
//             </motion.h2>

//             <motion.p variants={reveal}>
//               At Samarth Business Solutions, we bring together
//               different service categories to make it easier
//               for customers to explore their options.
//             </motion.p>

//             <motion.p variants={reveal}>
//               Whether you are looking into loan options,
//               insurance, travel planning, vehicle rentals,
//               courier and cargo, e-stamp or real estate services,
//               our goal is to help you connect with the right
//               service for your requirements.
//             </motion.p>

//             <motion.div
//               className="about-check-list"
//               variants={reveal}
//             >
//               <div>
//                 <span><FiLayers /></span>
//                 Multiple service categories
//               </div>
//               <div>
//                 <span><FiUser /></span>
//                 Customer-focused assistance
//               </div>
//               <div>
//                 <span><FiCheckCircle /></span>
//                 Convenient enquiry process
//               </div>
//             </motion.div>

//             <motion.div variants={reveal}>
//               <Link to="/services" className="about-text-link">
//                 Explore our services
//                 <span><FiArrowRight /></span>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* MISSION AND VISION */}
//       <section className="about-purpose">
//         <div className="about-purpose-background">
//           <img
//             src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
//             alt=""
//            loading="lazy"
//           />
//         </div>
//         <div className="about-purpose-overlay" />

//         <div className="container about-purpose-grid">
//           <motion.article
//             className="about-purpose-card"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="about-purpose-top">
//               <span className="about-purpose-number">01</span>
//               <span className="about-purpose-icon">
//                 <FiTarget />
//               </span>
//             </div>

//             <h3>Our Mission</h3>
//             <span className="about-purpose-line" />
//             <p>
//               To make exploring everyday financial and business
//               services more convenient through accessible
//               information and helpful customer assistance.
//             </p>
//           </motion.article>

//           <motion.article
//             className="about-purpose-card about-purpose-card-vision"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6, delay: 0.12 }}
//           >
//             <div className="about-purpose-top">
//               <span className="about-purpose-number">02</span>
//               <span className="about-purpose-icon">
//                 <FiTrendingUp />
//               </span>
//             </div>

//             <h3>Our Vision</h3>
//             <span className="about-purpose-line" />
//             <p>
//               To build lasting customer relationships and become
//               a trusted destination for discovering a broad range
//               of service solutions.
//             </p>
//           </motion.article>
//         </div>
//       </section>

//       {/* CORE VALUES */}
//       <section className="about-values section-padding">
//         <div className="container">
//           <motion.div
//             className="about-section-heading"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="about-section-kicker">
//               <span />
//               WHAT GUIDES US
//             </div>
//             <h2>The Values Behind Our Service</h2>
//             <p>
//               The principles that shape how we communicate,
//               support customers and approach their requirements.
//             </p>
//           </motion.div>

//           <motion.div
//             className="about-values-grid"
//             variants={stagger}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//           >
//             {values.map((value) => {
//               const Icon = value.icon;

//               return (
//                 <motion.article
//                   className={`about-value-card about-value-${value.color}`}
//                   key={value.title}
//                   variants={reveal}
//                   whileHover={{ y: -7 }}
//                 >
//                   <div className="about-value-top">
//                     <span className="about-value-icon">
//                       <Icon />
//                     </span>
//                     <span className="about-value-number">
//                       {String(values.indexOf(value) + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   <h3>{value.title}</h3>
//                   <p>{value.description}</p>

//                   <div className="about-value-bottom">
//                     <span />
//                     <FiArrowUpRight />
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* CALL TO ACTION */}
//       <section className="about-cta-section">
//         <div className="container">
//           <motion.div
//             className="about-cta"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.65 }}
//           >
//             <div className="about-cta-decoration" />

//             <div className="about-cta-content">
//               <div className="about-cta-eyebrow">
//                 <span />
//                 LET'S CONNECT
//               </div>

//               <h2>
//                 Looking for a service
//                 <br />
//                 that <span>fits your needs?</span>
//               </h2>

//               <p>
//                 Talk to our team about your requirements and
//                 available service options.
//               </p>

//               <Link to="/contact" className="about-cta-button">
//                 Contact Us
//                 <span><FiArrowRight /></span>
//               </Link>
//             </div>

//             <div className="about-cta-visual">
//               <img
//                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
//                 alt="Professional using a laptop to manage business tasks"
//                loading="lazy"
//               />
//               <div className="about-cta-image-overlay" />
//               <div className="about-cta-image-caption">
//                 <FiUsers />
//                 <span>
//                   <strong>We're ready to listen.</strong>
//                   <small>Let's discuss your requirements.</small>
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiTarget,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiHeadphones,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiBriefcase,
  FiHome,
  FiCompass,
} from "react-icons/fi";
import "./About.css";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";


const slides = [
  {
    eyebrow: "WELCOME TO SAMARTH BUSINESS SOLUTIONS",
    title: "Your Needs Matter.",
    highlight: "Our Solutions Move You Forward.",
    description:
      "Discover financial, travel, insurance, and business-related services in one convenient destination.",
    image:
      a1,
    icon: FiUsers,
    badge: "People-Focused Service",
    badgeText: "We start by understanding your needs.",
    features: ["Multiple Services", "Helpful Guidance", "Customer Support"],
  },
  {
    eyebrow: "SOLUTIONS FOR YOUR NEXT STEP",
    title: "From Big Dreams",
    highlight: "To Practical Solutions.",
    description:
      "Explore loan, insurance, property, and other service options with guidance to help you understand your next steps.",
    image:
      a2,
    icon: FiBriefcase,
    badge: "Solutions That Connect",
    badgeText: "Explore services around your requirements.",
    features: ["Financial Services", "Business Support", "Clear Information"],
  },
  {
    eyebrow: "BUILT AROUND YOUR REQUIREMENTS",
    title: "One Destination.",
    highlight: "More Possibilities.",
    description:
      "Whether you're planning, protecting, moving, or growing, connect with our team to explore available service categories.",
    image:
     a3,
    icon: FiCompass,
    badge: "Your Journey Matters",
    badgeText: "Let's explore the right next step.",
    features: ["Personal Assistance", "Service Discovery", "Convenient Enquiries"],
  },
];

const values = [
  {
    icon: FiUsers,
    title: "Customer First",
    description:
      "We focus on understanding each customer's needs and helping them explore suitable services.",
    color: "blue",
  },
  {
    icon: FiTarget,
    title: "Practical Solutions",
    description:
      "We help customers navigate different service options with clear and useful guidance.",
    color: "green",
  },
  {
    icon: FiAward,
    title: "Professional Approach",
    description:
      "We aim to provide a responsive, respectful and reliable customer experience.",
    color: "gold",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Relationships",
    description:
      "We believe in building lasting relationships through communication and continued support.",
    color: "purple",
  },
];

const services = [
  "Loans & Finance",
  "Insurance",
  "Travel & Tourism",
  "RTO Services",
  "Courier & Cargo",
  "Real Estate",
  "E-Stamp Services",
  "Business Services",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const heroStyles = `
.about-cinema {
  --about-blue: #3185e6;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  min-height: 690px;
  height: min(790px, 88vh);
  overflow: hidden;
  color: #fff;
  background: #071323;
}
.about-cinema-bg {
  position: absolute;
  inset: 0;
  z-index: -3;
  background-size: cover;
  background-position: center;
  will-change: transform, opacity;
}
.about-cinema-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(4,15,29,.97) 0%, rgba(4,15,29,.91) 33%, rgba(4,15,29,.62) 55%, rgba(4,15,29,.15) 100%),
    linear-gradient(0deg, rgba(4,15,29,.76), transparent 55%);
}
.about-cinema-container {
  position: relative;
  width: min(1200px, calc(100% - 120px));
  margin: 0 auto;
  padding: 85px 0 105px;
}
.about-cinema-copy { width: min(690px, 70%); }
.about-cinema-breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  color: rgba(255,255,255,.68);
  font-size: 12px;
}
.about-cinema-breadcrumb a { color: #a7d1ff; text-decoration: none; }
.about-cinema-breadcrumb a:hover { color: #fff; }
.about-cinema-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  color: #91c7ff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.3px;
  line-height: 1.7;
}
.about-cinema-eyebrow span { width: 32px; height: 2px; flex-shrink: 0; background: #3185e6; }
.about-cinema h1 {
  max-width: 760px;
  margin: 0;
  color: #fff;
  font-size: clamp(43px, 5.3vw, 73px);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -2.5px;
}
.about-cinema h1 em { display: inline; color: #69adff; font-style: normal; }
.about-cinema-description {
  max-width: 570px;
  margin: 23px 0 25px;
  color: rgba(255,255,255,.79);
  font-size: 16px;
  line-height: 1.85;
}
.about-cinema-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 30px;
}
.about-cinema-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,.92);
  font-size: 12px;
  font-weight: 650;
}
.about-cinema-feature svg { flex-shrink: 0; color: #69adff; }
.about-cinema-actions { display: flex; flex-wrap: wrap; gap: 13px; }
.about-cinema-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  min-height: 53px;
  padding: 0 22px;
  border-radius: 9px;
  color: #fff;
  font-size: 13px;
  font-weight: 750;
  text-decoration: none;
  transition: transform .25s ease, background .25s ease;
}
.about-cinema-btn:hover { transform: translateY(-3px); }
.about-cinema-primary {
  background: linear-gradient(135deg,#3185e6,#075fd3);
  box-shadow: 0 10px 28px rgba(16,100,221,.26);
}
.about-cinema-secondary {
  border: 1px solid rgba(125,186,255,.7);
  background: rgba(7,20,36,.48);
  backdrop-filter: blur(12px);
}
.about-cinema-float {
  position: absolute;
  right: 0;
  bottom: 165px;
  display: flex;
  align-items: center;
  gap: 13px;
  width: 285px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 16px;
  color: #14243b;
  background: rgba(255,255,255,.93);
  box-shadow: 0 22px 60px rgba(0,0,0,.2);
  backdrop-filter: blur(16px);
}
.about-cinema-float-icon {
  display: grid;
  flex-shrink: 0;
  width: 49px;
  height: 49px;
  place-items: center;
  border-radius: 13px;
  color: #176fda;
  background: #e5f1ff;
}
.about-cinema-float strong { display: block; font-size: 13px; line-height: 1.5; }
.about-cinema-float small { display: block; margin-top: 5px; color: #667184; font-size: 11px; line-height: 1.55; }
.about-cinema-arrow {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  transform: translateY(-50%);
  border: 1px solid rgba(255,255,255,.32);
  border-radius: 50%;
  color: #fff;
  background: rgba(6,19,34,.58);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background .2s ease;
}
.about-cinema-arrow:hover { background: #3185e6; }
.about-cinema-prev { left: 19px; }
.about-cinema-next { right: 19px; }
.about-cinema-bottom {
  position: absolute;
  right: 0;
  bottom: 30px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-cinema-dots { display: flex; align-items: center; gap: 10px; }
.about-cinema-dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 20px;
  background: rgba(255,255,255,.53);
  cursor: pointer;
  transition: width .3s ease, background .3s ease;
}
.about-cinema-dot.active { width: 27px; background: #3185e6; }
.about-cinema-count {
  position: absolute;
  right: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}
.about-cinema-progress { position: absolute; right: 0; bottom: 0; left: 0; height: 3px; background: rgba(255,255,255,.14); }
.about-cinema-progress > div { height: 100%; background: #3185e6; }
@media (max-width: 900px) {
  .about-cinema { height: auto; min-height: 700px; }
  .about-cinema-container { width: calc(100% - 90px); min-height: 700px; display: flex; flex-direction: column; justify-content: center; }
  .about-cinema-copy { width: 80%; }
  .about-cinema-float { right: 0; bottom: 95px; width: 245px; }
  .about-cinema-overlay { background: linear-gradient(90deg,rgba(4,15,29,.96),rgba(4,15,29,.76) 68%,rgba(4,15,29,.35)),linear-gradient(0deg,rgba(4,15,29,.7),transparent); }
}
@media (max-width: 600px) {
  .about-cinema { height: auto; min-height: 750px; }
  .about-cinema-bg { background-position: 58% center; }
  .about-cinema-container { width: calc(100% - 44px); min-height: 750px; padding: 55px 0 175px; }
  .about-cinema-copy { width: 100%; }
  .about-cinema-breadcrumb { margin-bottom: 21px; }
  .about-cinema-eyebrow { font-size: 9px; letter-spacing: 1.3px; margin-bottom: 18px; }
  .about-cinema h1 { font-size: clamp(37px, 9.5vw, 51px); letter-spacing: -1.5px; }
  .about-cinema-description { font-size: 14px; line-height: 1.75; margin: 18px 0 21px; }
  .about-cinema-features { display: grid; gap: 11px; margin-bottom: 23px; }
  .about-cinema-actions { flex-direction: column; }
  .about-cinema-btn { width: 100%; min-height: 50px; box-sizing: border-box; }
  .about-cinema-float { right: auto; left: 0; bottom: 78px; width: min(275px,calc(100% - 35px)); padding: 12px; }
  .about-cinema-arrow { top: auto; bottom: 20px; width: 36px; height: 36px; transform: none; }
  .about-cinema-prev { left: 12px; }
  .about-cinema-next { right: 12px; }
  .about-cinema-count { display: none; }
  .about-cinema-overlay { background: linear-gradient(90deg,rgba(4,15,29,.95),rgba(4,15,29,.75)),linear-gradient(0deg,rgba(4,15,29,.97),transparent 90%); }
}
`;

function AboutHero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const Icon = slide.icon;

  const next = () => setActive((current) => (current + 1) % slides.length);
  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <style>{heroStyles}</style>
      <section className="about-cinema" aria-label="About Samarth Business Solutions">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            className="about-cinema-bg"
            style={{ backgroundImage: `url("${slide.image}")` }}
            initial={{ opacity: 0.55, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.55 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div className="about-cinema-overlay" />

        <button
          type="button"
          className="about-cinema-arrow about-cinema-prev"
          onClick={previous}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={22} />
        </button>

        <div className="about-cinema-container">
          <div className="about-cinema-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <div className="about-cinema-breadcrumb">
                  <Link to="/">Home</Link>
                  <span>›</span>
                  <span>About Us</span>
                </div>

                <div className="about-cinema-eyebrow">
                  <span />
                  {slide.eyebrow}
                </div>

                <h1>
                  {slide.title}
                  <br />
                  <em>{slide.highlight}</em>
                </h1>

                <p className="about-cinema-description">
                  {slide.description}
                </p>

                <div className="about-cinema-features">
                  {slide.features.map((feature) => (
                    <div className="about-cinema-feature" key={feature}>
                      <FiCheckCircle size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="about-cinema-actions">
                  <Link
                    to="/contact"
                    className="about-cinema-btn about-cinema-primary"
                  >
                    Connect With Our Team <FiArrowRight />
                  </Link>

                  <Link
                    to="/services"
                    className="about-cinema-btn about-cinema-secondary"
                  >
                    Explore Our Services <FiArrowUpRight />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${active}`}
              className="about-cinema-float"
              initial={{ opacity: 0, x: 24, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.45 }}
            >
              <div className="about-cinema-float-icon">
                <Icon size={25} />
              </div>
              <div>
                <strong>{slide.badge}</strong>
                <small>{slide.badgeText}</small>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="about-cinema-bottom">
            <div className="about-cinema-dots">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  className={`about-cinema-dot ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
            <span className="about-cinema-count">
              0{active + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="about-cinema-arrow about-cinema-next"
          onClick={next}
          aria-label="Next slide"
        >
          <FiChevronRight size={22} />
        </button>

        <div className="about-cinema-progress">
          <motion.div
            key={`progress-${active}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
      </section>
    </>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />

      {/* INTRODUCTION */}
      <section className="about-intro section-padding">
        <div className="container about-intro-grid">
          <motion.div
            className="about-intro-visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="about-intro-image">
              <img
                src={a4}
                alt="Modern commercial office building"
               loading="lazy"
              />
            </div>
            <div className="about-intro-backdrop about-intro-backdrop-blue" />
            <div className="about-intro-backdrop about-intro-backdrop-gold" />

            <div className="about-intro-badge">
              <span className="about-intro-badge-icon">
                <FiUsers />
              </span>
              <span>
                <strong>Building Brighter Possibilities</strong>
                <small>Through helpful guidance</small>
              </span>
            </div>
            <span className="about-intro-dots" />
          </motion.div>

          <motion.div
            className="about-intro-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div className="about-section-kicker" variants={reveal}>
              <span /> WHO WE ARE
            </motion.div>

            <motion.h2 variants={reveal}>
              One Destination.
              <br />
              Multiple Service Solutions.
            </motion.h2>

            <motion.p variants={reveal}>
              At Samarth Business Solutions, we bring together different
              service categories to make it easier for customers to explore
              their options.
            </motion.p>

            <motion.p variants={reveal}>
              Whether you are looking into loan options, insurance, travel
              planning, vehicle-related services, courier and cargo, e-stamp,
              or real estate services, our goal is to help you connect with
              services relevant to your requirements.
            </motion.p>

            <motion.div className="about-check-list" variants={reveal}>
              <div><span><FiLayers /></span>Multiple service categories</div>
              <div><span><FiUser /></span>Customer-focused assistance</div>
              <div><span><FiCheckCircle /></span>Convenient enquiry process</div>
            </motion.div>

            <motion.div variants={reveal}>
              <Link to="/services" className="about-text-link">
                Explore our services <span><FiArrowRight /></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="about-service-strip">
        <div className="container">
          <div className="about-service-strip-heading">
            <span className="about-section-kicker"><span /> WHAT WE HELP WITH</span>
            <h2>Services for Different Needs</h2>
          </div>

          <div className="about-service-tags">
            {services.map((service, index) => (
              <motion.div
                className="about-service-tag"
                key={service}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <FiCheckCircle />
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose">
        <div className="about-purpose-background">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt=""
           loading="lazy"
          />
        </div>
        <div className="about-purpose-overlay" />

        <div className="container about-purpose-inner">
          <div className="about-purpose-heading">
            <span className="about-section-kicker"><span /> OUR DIRECTION</span>
            <h2>What We Work Towards</h2>
          </div>

          <div className="about-purpose-grid">
            <motion.article
              className="about-purpose-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <div className="about-purpose-top">
                <span className="about-purpose-number">01</span>
                <span className="about-purpose-icon"><FiTarget /></span>
              </div>
              <h3>Our Mission</h3>
              <span className="about-purpose-line" />
              <p>
                To make exploring everyday financial and business services more
                convenient through accessible information and helpful customer
                assistance.
              </p>
            </motion.article>

            <motion.article
              className="about-purpose-card about-purpose-card-vision"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <div className="about-purpose-top">
                <span className="about-purpose-number">02</span>
                <span className="about-purpose-icon"><FiTrendingUp /></span>
              </div>
              <h3>Our Vision</h3>
              <span className="about-purpose-line" />
              <p>
                To build lasting customer relationships and become a trusted
                destination for discovering a broad range of service solutions.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values section-padding">
        <div className="container">
          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-section-kicker"><span /> WHAT GUIDES US</div>
            <h2>The Values Behind Our Service</h2>
            <p>
              The principles that shape how we communicate, support customers,
              and approach their requirements.
            </p>
          </motion.div>

          <motion.div
            className="about-values-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className={`about-value-card about-value-${value.color}`}
                  key={value.title}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                >
                  <div className="about-value-top">
                    <span className="about-value-icon"><Icon /></span>
                    <span className="about-value-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="about-value-bottom">
                    <span />
                    <FiArrowUpRight />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-cta-decoration" />

            <div className="about-cta-content">
              <div className="about-cta-eyebrow"><span /> LET'S CONNECT</div>
              <h2>
                Looking for a service that <span>fits your needs?</span>
              </h2>
              <p>
                Talk to our team about your requirements and available service
                options. We are ready to help you explore the next step.
              </p>
              <Link to="/contact" className="about-cta-button">
                Contact Us <span><FiArrowRight /></span>
              </Link>
            </div>

            <div className="about-cta-visual">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
                alt="Professional using a laptop for business tasks"
               loading="lazy"
              />
              <div className="about-cta-image-overlay" />
              <div className="about-cta-image-caption">
                <FiUsers />
                <span>
                  <strong>We're ready to listen.</strong>
                  <small>Let's discuss your requirements.</small>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
