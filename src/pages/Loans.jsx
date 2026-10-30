
// // import { Link } from "react-router-dom";
// // import {
// //   FiArrowRight,
// //   FiCheckCircle,
// //   FiHome,
// //   FiBriefcase,
// //   FiTruck,
// //   FiBookOpen,
// //   FiDollarSign,
// //   FiCreditCard,
// //   FiShield,
// //   FiPhone,
// // } from "react-icons/fi";

// // import "./Loans.css";

// // const loanTypes = [
// //   {
// //     icon: FiDollarSign,
// //     title: "Personal Loans",
// //     description:
// //       "Explore financing options for eligible personal expenses and financial needs.",
// //     features: [
// //       "Flexible loan options",
// //       "Eligibility-based assessment",
// //       "Guidance through the enquiry process",
// //     ],
// //   },
// //   {
// //     icon: FiHome,
// //     title: "Home Loans",
// //     description:
// //       "Explore financing options for purchasing, constructing or improving a home.",
// //     features: [
// //       "Home purchase financing",
// //       "Construction loan enquiries",
// //       "Property-related guidance",
// //     ],
// //   },
// //   {
// //     icon: FiBriefcase,
// //     title: "Business Loans",
// //     description:
// //       "Discover financing options for eligible business expenses and growth plans.",
// //     features: [
// //       "Business funding enquiries",
// //       "Working capital options",
// //       "Business expansion financing",
// //     ],
// //   },
// //   {
// //     icon: FiTruck,
// //     title: "Vehicle Loans",
// //     description:
// //       "Enquire about financing options for eligible new or used vehicles.",
// //     features: [
// //       "Car financing enquiries",
// //       "Commercial vehicle options",
// //       "Eligibility information",
// //     ],
// //   },
// //   {
// //     icon: FiBookOpen,
// //     title: "Education Loans",
// //     description:
// //       "Explore education financing options for eligible academic programmes.",
// //     features: [
// //       "Course-related financing",
// //       "Eligible study expenses",
// //       "Application guidance",
// //     ],
// //   },
// //   {
// //     icon: FiCreditCard,
// //     title: "Gold Loans",
// //     description:
// //       "Enquire about gold-backed loan products offered by eligible lenders.",
// //     features: [
// //       "Lender-specific eligibility",
// //       "Gold valuation requirements",
// //       "Terms and charges information",
// //     ],
// //   },
// //   {
// //     icon: FiShield,
// //     title: "Loan Against Property",
// //     description:
// //       "Explore secured borrowing options subject to property and lender eligibility.",
// //     features: [
// //       "Property eligibility enquiries",
// //       "Documentation guidance",
// //       "Lender-specific loan terms",
// //     ],
// //   },
// //   {
// //     icon: FiDollarSign,
// //     title: "Other Loan Options",
// //     description:
// //       "Tell us what type of financing you need so we can discuss available options.",
// //     features: [
// //       "Discuss your requirements",
// //       "Understand eligibility criteria",
// //       "Explore available products",
// //     ],
// //   },
// // ];

// // export default function Loans() {
// //   const phoneNumber = "919900458068";

// //   const getWhatsAppLink = (loanTitle) => {
// //     const message = encodeURIComponent(
// //       `Hello Samarth Business Solutions, I would like to enquire about ${loanTitle}. Please share the available options and eligibility requirements.`
// //     );

// //     return `https://wa.me/${phoneNumber}?text=${message}`;
// //   };

// //   return (
// //     <div className="loans-page">
// //       {/* Hero */}
// //       <section className="loans-hero">
// //         <div className="container loans-hero-grid">
// //           <div className="loans-hero-content">
// //             <div className="loans-breadcrumb">
// //               <Link to="/">Home</Link>
// //               <span>/</span>
// //               <span>Loans & Finance</span>
// //             </div>

// //             <span className="loans-eyebrow">
// //               FINANCING OPTIONS
// //             </span>

// //             <h1>
// //               Explore Your
// //               <br />
// //               <span>Loan Options</span>
// //               With Confidence.
// //             </h1>

// //             <p>
// //               Explore different loan categories and enquire about
// //               eligibility, documentation and terms from the relevant
// //               lending provider.
// //             </p>

// //             <div className="loans-hero-actions">
// //               <a
// //                 href={getWhatsAppLink("loan options")}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="loans-primary-btn"
// //               >
// //                 Enquire About Loans
// //                 <FiArrowRight />
// //               </a>

// //               <a href="#loan-types" className="loans-secondary-btn">
// //                 Explore Categories
// //               </a>
// //             </div>

// //             <div className="loans-trust-note">
// //               <FiCheckCircle />
// //               <span>
// //                 Options and approvals depend on lender criteria.
// //               </span>
// //             </div>
// //           </div>

// //           <div className="loans-hero-visual">
// //             <img
// //               src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=85"
// //               alt="Professional discussing financial planning"
// //             />

// //             <div className="loans-image-card">
// //               <span className="loans-image-icon">
// //                 <FiCreditCard size={23} />
// //               </span>
// //               <div>
// //                 <strong>Find an option for your needs</strong>
// //                 <span>Start with a simple enquiry</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Loan categories */}
// //       <section className="loans-categories section-padding" id="loan-types">
// //         <div className="container">
// //           <div className="section-heading">
// //             <span className="section-kicker">OUR LOAN CATEGORIES</span>
// //             <h2>Explore Available Loan Options</h2>
// //             <p>
// //               Choose a category to discuss your requirements
// //               and learn about applicable eligibility conditions.
// //             </p>
// //           </div>

// //           <div className="loans-grid">
// //             {loanTypes.map((loan) => {
// //               const Icon = loan.icon;

// //               return (
// //                 <article className="loan-card" key={loan.title}>
// //                   <div className="loan-card-heading">
// //                     <span className="loan-card-icon">
// //                       <Icon size={25} />
// //                     </span>

// //                     <span className="loan-card-arrow">
// //                       <FiArrowRight size={19} />
// //                     </span>
// //                   </div>

// //                   <h3>{loan.title}</h3>
// //                   <p className="loan-card-description">
// //                     {loan.description}
// //                   </p>

// //                   <ul className="loan-features">
// //                     {loan.features.map((feature) => (
// //                       <li key={feature}>
// //                         <FiCheckCircle />
// //                         <span>{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>

// //                   <a
// //                     href={getWhatsAppLink(loan.title)}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="loan-card-link"
// //                   >
// //                     Enquire Now
// //                     <FiArrowRight size={17} />
// //                   </a>
// //                 </article>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* How it works */}
// //       <section className="loans-process">
// //         <div className="container">
// //           <div className="section-heading">
// //             <span className="section-kicker">HOW IT WORKS</span>
// //             <h2>Start With Three Simple Steps</h2>
// //             <p>
// //               A straightforward way to begin your loan enquiry.
// //             </p>
// //           </div>

// //           <div className="loans-process-grid">
// //             <article className="loan-step">
// //               <span className="loan-step-number">01</span>
// //               <h3>Choose a Category</h3>
// //               <p>
// //                 Select the type of financing that matches your needs.
// //               </p>
// //             </article>

// //             <article className="loan-step">
// //               <span className="loan-step-number">02</span>
// //               <h3>Share Your Enquiry</h3>
// //               <p>
// //                 Tell our team what you are looking for and ask about
// //                 the next steps.
// //               </p>
// //             </article>

// //             <article className="loan-step">
// //               <span className="loan-step-number">03</span>
// //               <h3>Review Your Options</h3>
// //               <p>
// //                 Review available products, eligibility, charges and
// //                 lender terms before making a decision.
// //               </p>
// //             </article>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="loans-cta-section">
// //         <div className="container loans-cta">
// //           <div className="loans-cta-icon">
// //             <FiPhone size={28} />
// //           </div>

// //           <div className="loans-cta-content">
// //             <span>NEED HELP GETTING STARTED?</span>
// //             <h2>Let's discuss your financing requirements.</h2>
// //             <p>
// //               Contact our team to enquire about available loan
// //               categories and the relevant lender's requirements.
// //             </p>
// //           </div>

// //           <a
// //             href={getWhatsAppLink("financing requirements")}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="loans-cta-btn"
// //           >
// //             Contact Us
// //             <FiArrowRight />
// //           </a>
// //         </div>
// //       </section>

// //       <p className="loans-disclaimer container">
// //         Loan availability, eligibility, interest rates, fees and approval
// //         are determined by the respective lender. The categories shown are
// //         informational and do not guarantee that a particular product is
// //         offered by Samarth Business Solutions.
// //       </p>
// //     </div>
// //   );
// // }


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FiArrowRight,
//   FiArrowUpRight,
//   FiCheckCircle,
//   FiHome,
//   FiBriefcase,
//   FiTruck,
//   FiBookOpen,
//   FiDollarSign,
//   FiCreditCard,
//   FiShield,
//   FiPhone,
//   FiMessageCircle,
//   FiFileText,
//   FiMessageSquare,
//   FiUsers,
//   FiBuilding,
// } from "react-icons/fi";
// import "./Loans.css";

// const WHATSAPP_NUMBER = "919900458068"; // Verify before publishing

// const loanTypes = [
//   {
//     icon: FiDollarSign,
//     title: "Personal Loans",
//     description:
//       "Explore financing options for eligible personal expenses and financial needs.",
//     features: [
//       "Flexible loan options",
//       "Eligibility-based assessment",
//       "Guidance through the enquiry process",
//     ],
//     color: "blue",
//   },
//   {
//     icon: FiHome,
//     title: "Home Loans",
//     description:
//       "Explore financing options for purchasing, constructing or improving a home.",
//     features: [
//       "Home purchase financing",
//       "Construction loan enquiries",
//       "Property-related guidance",
//     ],
//     color: "gold",
//   },
//   {
//     icon: FiBriefcase,
//     title: "Business Loans",
//     description:
//       "Discover financing options for eligible business expenses and growth plans.",
//     features: [
//       "Business funding enquiries",
//       "Working capital options",
//       "Business expansion financing",
//     ],
//     color: "green",
//   },
//   {
//     icon: FiTruck,
//     title: "Vehicle Loans",
//     description:
//       "Enquire about financing options for eligible new or used vehicles.",
//     features: [
//       "Car financing enquiries",
//       "Commercial vehicle options",
//       "Eligibility information",
//     ],
//     color: "purple",
//   },
//   {
//     icon: FiBookOpen,
//     title: "Education Loans",
//     description:
//       "Explore education financing options for eligible academic programmes.",
//     features: [
//       "Course-related financing",
//       "Eligible study expenses",
//       "Application guidance",
//     ],
//     color: "pink",
//   },
//   {
//     icon: FiDollarSign,
//     title: "Gold Loans",
//     description:
//       "Enquire about gold-backed loan products offered by eligible lenders.",
//     features: [
//       "Lender-specific eligibility",
//       "Gold valuation requirements",
//       "Terms and charges information",
//     ],
//     color: "gold",
//   },
//   {
//     icon: FiBuilding,
//     title: "Loan Against Property",
//     description:
//       "Explore secured borrowing options subject to property and lender eligibility.",
//     features: [
//       "Property eligibility enquiries",
//       "Documentation guidance",
//       "Lender-specific loan terms",
//     ],
//     color: "purple",
//   },
//   {
//     icon: FiCreditCard,
//     title: "Other Loan Options",
//     description:
//       "Tell us what type of financing you need so we can discuss available options.",
//     features: [
//       "Discuss your requirements",
//       "Understand eligibility criteria",
//       "Explore available products",
//     ],
//     color: "blue",
//   },
// ];

// const steps = [
//   {
//     number: "01",
//     icon: FiFileText,
//     title: "Choose a Category",
//     description:
//       "Select the type of financing that matches your needs.",
//     color: "blue",
//   },
//   {
//     number: "02",
//     icon: FiMessageSquare,
//     title: "Share Your Enquiry",
//     description:
//       "Tell our team what you are looking for and ask about the next steps.",
//     color: "gold",
//   },
//   {
//     number: "03",
//     icon: FiCheckCircle,
//     title: "Review Your Options",
//     description:
//       "Review available products, eligibility, charges and lender terms before deciding.",
//     color: "blue",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const revealVariants = {
//   hidden: { opacity: 0, y: 22 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function Loans() {
//   const getWhatsAppLink = (loanTitle) => {
//     const message = encodeURIComponent(
//       `Hello Samarth Business Solutions, I would like to enquire about ${loanTitle}. Please share the available options and eligibility requirements.`
//     );

//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
//   };

//   return (
//     <main className="loans-page">
//       {/* HERO */}
//       <section className="loans-hero">
//         <div className="loans-hero-grid" />
//         <div className="loans-hero-glow" />

//         <div className="container loans-hero-inner">
//           <motion.div
//             className="loans-hero-content"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             <motion.div
//               className="loans-breadcrumb"
//               variants={revealVariants}
//             >
//               <Link to="/">Home</Link>
//               <span>›</span>
//               <span>Loans & Finance</span>
//             </motion.div>

//             <motion.div
//               className="loans-eyebrow"
//               variants={revealVariants}
//             >
//               <span />
//               FINANCING OPTIONS
//             </motion.div>

//             <motion.h1 variants={revealVariants}>
//               Explore Your
//               <br />
//               <span>Loan Options</span>
//               <br />
//               With Confidence.
//             </motion.h1>

//             <motion.p variants={revealVariants}>
//               Explore different loan categories and enquire about
//               eligibility, documentation and terms from the
//               relevant lending provider.
//             </motion.p>

//             <motion.div
//               className="loans-hero-actions"
//               variants={revealVariants}
//             >
//               <a
//                 href={getWhatsAppLink("loan options")}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="loans-primary-btn"
//               >
//                 <FiMessageCircle />
//                 Enquire About Loans
//                 <span><FiArrowRight /></span>
//               </a>

//               <a
//                 href="#loan-types"
//                 className="loans-secondary-btn"
//               >
//                 Explore Categories
//               </a>
//             </motion.div>

//             <motion.div
//               className="loans-trust-features"
//               variants={revealVariants}
//             >
//               <div>
//                 <FiShield />
//                 <span>Trusted Guidance</span>
//               </div>
//               <i />
//               <div>
//                 <FiUsers />
//                 <span>Multiple Loan Options</span>
//               </div>
//               <i />
//               <div>
//                 <FiPhone />
//                 <span>Customer Support</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="loans-hero-visual"
//             initial={{ opacity: 0, x: 30, scale: 0.97 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           >
//             <div className="loans-hero-image">
//               <img
//                 src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1300&q=90"
//                 alt="Professional discussing property and financing options"
//                 fetchPriority="high"
//               />
//               <div className="loans-hero-image-overlay" />
//             </div>

//             <div className="loans-hero-image-ring" />

//             <motion.div
//               className="loans-image-card"
//               animate={{ y: [0, -6, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <span className="loans-image-icon">
//                 <FiCreditCard />
//               </span>
//               <span className="loans-image-card-content">
//                 <strong>Find an option for your needs</strong>
//                 <small>Start with a simple enquiry</small>
//               </span>
//               <FiArrowUpRight className="loans-image-card-arrow" />
//             </motion.div>

//             <span className="loans-hero-dots" />
//           </motion.div>
//         </div>
//       </section>

//       {/* LOAN CATEGORIES */}
//       <section
//         className="loans-categories section-padding"
//         id="loan-types"
//       >
//         <div className="container">
//           <motion.div
//             className="loans-section-heading"
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55 }}
//           >
//             <span className="loans-section-kicker">
//               <i />
//               OUR LOAN CATEGORIES
//             </span>
//             <h2>Explore Available Loan Options</h2>
//             <p>
//               Choose a category to discuss your requirements and
//               learn about applicable eligibility conditions.
//             </p>
//           </motion.div>

//           <motion.div
//             className="loans-grid"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.08 }}
//           >
//             {loanTypes.map((loan) => {
//               const Icon = loan.icon;

//               return (
//                 <motion.article
//                   className={`loan-card loan-card-${loan.color}`}
//                   key={loan.title}
//                   variants={revealVariants}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="loan-card-heading">
//                     <span className="loan-card-icon">
//                       <Icon />
//                     </span>
//                     <span className="loan-card-arrow">
//                       <FiArrowRight />
//                     </span>
//                   </div>

//                   <h3>{loan.title}</h3>

//                   <p className="loan-card-description">
//                     {loan.description}
//                   </p>

//                   <ul className="loan-features">
//                     {loan.features.map((feature) => (
//                       <li key={feature}>
//                         <FiCheckCircle />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href={getWhatsAppLink(loan.title)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="loan-card-link"
//                   >
//                     Enquire Now
//                     <FiArrowRight />
//                   </a>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="loans-process">
//         <div className="loans-process-decoration" />

//         <div className="container">
//           <motion.div
//             className="loans-section-heading"
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="loans-section-kicker">
//               <i />
//               HOW IT WORKS
//             </span>
//             <h2>Start With Three Simple Steps</h2>
//             <p>
//               A straightforward way to begin your loan enquiry.
//             </p>
//           </motion.div>

//           <div className="loans-process-grid">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.article
//                   className={`loan-step loan-step-${step.color}`}
//                   key={step.number}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.12,
//                   }}
//                 >
//                   <div className="loan-step-top">
//                     <span className="loan-step-number">
//                       {step.number}
//                     </span>
//                     <span className="loan-step-icon">
//                       <Icon />
//                     </span>
//                   </div>

//                   <h3>{step.title}</h3>
//                   <p>{step.description}</p>

//                   {index < steps.length - 1 && (
//                     <span className="loan-step-connector">
//                       <FiArrowRight />
//                     </span>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT CTA */}
//       <section className="loans-cta-section">
//         <div className="container">
//           <motion.div
//             className="loans-cta"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="loans-cta-pattern" />

//             <div className="loans-cta-icon">
//               <FiPhone />
//             </div>

//             <div className="loans-cta-content">
//               <span className="loans-cta-label">
//                 NEED HELP GETTING STARTED?
//               </span>
//               <h2>Let's discuss your financing requirements.</h2>
//               <p>
//                 Contact our team to enquire about available loan
//                 categories and the relevant lender's requirements.
//               </p>
//             </div>

//             <a
//               href={getWhatsAppLink("financing requirements")}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="loans-cta-btn"
//             >
//               Contact Us
//               <span><FiArrowRight /></span>
//             </a>

//             <div className="loans-cta-image">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
//                 alt=""
//                 loading="lazy"
fetchPriority="high"
  decoding="async"
//               />
//             </div>
//           </motion.div>

//           <div className="loans-disclaimer">
//             <FiShield />
//             <p>
//               Loan availability, eligibility, interest rates, fees
//               and approval are determined by the respective lender.
//               The categories shown are informational and do not
//               guarantee that a particular product is offered by
//               Samarth Business Solutions.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FiArrowRight,
//   FiArrowUpRight,
//   FiCheckCircle,
//   FiHome,
//   FiBriefcase,
//   FiTruck,
//   FiBookOpen,
//   FiDollarSign,
//   FiCreditCard,
//   FiShield,
//   FiPhone,
//   FiMessageCircle,
//   FiFileText,
//   FiUsers,
//   FiTrendingUp,
// } from "react-icons/fi";

// import "./Loans.css";

// const WHATSAPP_NUMBER = "919900458068";

// const loanTypes = [
//   {
//     id: "personal",
//     title: "Personal Loans",
//     description:
//       "Explore personal loan options for planned expenses, emergencies, and important life goals.",
//     image:
//       "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
//     icon: FiDollarSign,
//     features: [
//       "Flexible loan options",
//       "Simple enquiry process",
//       "Guidance with documentation",
//     ],
//   },
//   {
//     id: "home",
//     title: "Home Loans",
//     description:
//       "Get guidance on financing your dream home, whether you are buying, building, or renovating.",
//     image:
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
//     icon: FiHome,
//     features: [
//       "Home purchase financing",
//       "Construction loan options",
//       "Property-related guidance",
//     ],
//   },
//   {
//     id: "business",
//     title: "Business Loans",
//     description:
//       "Discover financing options to support business expansion, working capital, and operational needs.",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
//     icon: FiBriefcase,
//     features: [
//       "Business expansion",
//       "Working capital enquiries",
//       "Business documentation guidance",
//     ],
//   },
//   {
//     id: "vehicle",
//     title: "Vehicle Loans",
//     description:
//       "Explore financing options for your next car or other eligible vehicle purchase.",
//     image:
//       "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
//     icon: FiTruck,
//     features: [
//       "New vehicle financing",
//       "Loan option comparison",
//       "Application guidance",
//     ],
//   },
//   {
//     id: "education",
//     title: "Education Loans",
//     description:
//       "Explore education financing options to help plan for higher studies and career development.",
//     image:
//       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
//     icon: FiBookOpen,
//     features: [
//       "Higher education financing",
//       "Course-related enquiries",
//       "Documentation support",
//     ],
//   },
//   {
//     id: "gold",
//     title: "Gold Loans",
//     description:
//       "Learn about gold-backed financing options, subject to lender policies and eligibility.",
//     image:
//       "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=85",
//     icon: FiShield,
//     features: [
//       "Gold-backed loan enquiries",
//       "Lender option guidance",
//       "Eligibility information",
//     ],
//   },
//   {
//     id: "property",
//     title: "Loan Against Property",
//     description:
//       "Explore secured financing options against eligible residential or commercial property.",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
//     icon: FiHome,
//     features: [
//       "Property-backed financing",
//       "Secured loan enquiries",
//       "Documentation guidance",
//     ],
//   },
//   {
//     id: "other",
//     title: "Other Loan Options",
//     description:
//       "Tell us your financial requirements and explore other suitable financing categories.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
//     icon: FiTrendingUp,
//     features: [
//       "Understand available options",
//       "Personalised enquiry support",
//       "Next-step guidance",
//     ],
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Share Your Requirement",
//     description:
//       "Tell us what type of financing you are looking for and share your basic requirements.",
//     icon: FiMessageCircle,
//   },
//   {
//     number: "02",
//     title: "Explore Available Options",
//     description:
//       "Understand potential options, eligibility requirements, and documentation based on your profile.",
//     icon: FiFileText,
//   },
//   {
//     number: "03",
//     title: "Proceed With Your Application",
//     description:
//       "Review the relevant lender's terms and proceed with an application if the option suits you.",
//     icon: FiCheckCircle,
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   },
// };

// function Loans() {
//   const createWhatsAppLink = (message) =>
//     `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

//   return (
//     <main className="loans-page">
//       {/* HERO SECTION */}
//       <section className="loans-hero">
//         <div className="loans-hero-orb loans-hero-orb-one" />
//         <div className="loans-hero-orb loans-hero-orb-two" />

//         <div className="loans-container loans-hero-grid">
//           <motion.div
//             className="loans-hero-content"
//             initial={{ opacity: 0, x: -35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="loans-eyebrow">
//               <span className="loans-eyebrow-dot" />
//               FINANCIAL SOLUTIONS FOR YOUR NEXT STEP
//             </div>

//             <h1>
//               Find the Right Loan for Your{" "}
//               <span>Next Big Move.</span>
//             </h1>

//             <p className="loans-hero-description">
//               From personal milestones to business ambitions, explore
//               financing options with clear information and guidance
//               throughout your enquiry journey.
//             </p>

//             <div className="loans-hero-actions">
//               <a
//                 href={createWhatsAppLink(
//                   "Hello Samarth Business Solutions, I would like to enquire about your loan services."
//                 )}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="loans-btn loans-btn-primary"
//               >
//                 Explore Loan Options
//                 <FiArrowRight />
//               </a>

//               <Link
//                 to="/contact"
//                 className="loans-btn loans-btn-secondary"
//               >
//                 Talk to Our Team
//                 <FiArrowUpRight />
//               </Link>
//             </div>

//             <div className="loans-trust-row">
//               <div className="loans-trust-icon">
//                 <FiShield />
//               </div>

//               <div>
//                 <strong>Guidance with clarity</strong>
//                 <span>
//                   Understand options before making a decision.
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="loans-hero-visual"
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           >
//             <div className="loans-hero-image-wrap">
//               <img
//                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=90"
//                 alt="Modern home representing financial and property goals"
//                 className="loans-hero-image"
//               />

//               <div className="loans-image-overlay" />
//             </div>

//             <div className="loans-floating-card loans-floating-card-top">
//               <div className="loans-floating-icon loans-floating-icon-blue">
//                 <FiCheckCircle />
//               </div>
//               <div>
//                 <strong>Clear guidance</strong>
//                 <span>Step-by-step support</span>
//               </div>
//             </div>

//             <div className="loans-floating-card loans-floating-card-bottom">
//               <div className="loans-floating-icon loans-floating-icon-gold">
//                 <FiUsers />
//               </div>
//               <div>
//                 <strong>Your goals matter</strong>
//                 <span>Options based on your needs</span>
//               </div>
//             </div>

//             <div className="loans-hero-image-caption">
//               <span>PLAN SMARTER</span>
//               <strong>Move forward with confidence.</strong>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* LOAN CATEGORIES */}
//       <section className="loans-categories-section" id="loan-options">
//         <div className="loans-container">
//           <motion.div
//             className="loans-section-heading"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={itemVariants}
//           >
//             <span className="loans-section-label">
//               OUR LOAN SERVICES
//             </span>

//             <h2>
//               Financing options for <span>every ambition.</span>
//             </h2>

//             <p>
//               Explore our loan categories and connect with our team to
//               understand which options may fit your requirements.
//             </p>
//           </motion.div>

//           <motion.div
//             className="loans-categories-grid"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {loanTypes.map((loan) => {
//               const Icon = loan.icon;

//               return (
//                 <motion.article
//                   className="loans-category-card"
//                   key={loan.id}
//                   variants={itemVariants}
//                   whileHover={{ y: -7 }}
//                 >
//                   <div className="loans-card-image-wrap">
//                     <img
//                       src={loan.image}
//                       alt={loan.title}
//                       className="loans-card-image"
//                       loading="lazy"
fetchPriority="high"
  decoding="async"
//                     />

//                     <div className="loans-card-image-shade" />

//                     <div className="loans-card-icon">
//                       <Icon />
//                     </div>
//                   </div>

//                   <div className="loans-card-content">
//                     <h3>{loan.title}</h3>

//                     <p className="loans-card-description">
//                       {loan.description}
//                     </p>

//                     <ul className="loans-feature-list">
//                       {loan.features.map((feature) => (
//                         <li key={feature}>
//                           <FiCheckCircle />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <a
//                       href={createWhatsAppLink(
//                         `Hello Samarth Business Solutions, I would like to enquire about ${loan.title}. Please share the available options and eligibility details.`
//                       )}
//                       className="loans-card-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Enquire Now
//                       <FiArrowRight />
//                     </a>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* PROCESS SECTION */}
//       <section className="loans-process-section">
//         <div className="loans-container">
//           <div className="loans-process-layout">
//             <motion.div
//               className="loans-process-intro"
//               initial={{ opacity: 0, x: -25 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="loans-section-label">
//                 HOW IT WORKS
//               </span>

//               <h2>
//                 A simpler way to explore your{" "}
//                 <span>loan options.</span>
//               </h2>

//               <p>
//                 Start with a conversation. Our team can help you
//                 understand the next steps, documentation, and
//                 requirements associated with available options.
//               </p>

//               <a
//                 href={createWhatsAppLink(
//                   "Hello Samarth Business Solutions, I need help understanding the loan enquiry process."
//                 )}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="loans-btn loans-btn-primary"
//               >
//                 Start Your Enquiry
//                 <FiArrowRight />
//               </a>
//             </motion.div>

//             <motion.div
//               className="loans-process-list"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.15 }}
//             >
//               {processSteps.map((step) => {
//                 const Icon = step.icon;

//                 return (
//                   <motion.div
//                     className="loans-process-step"
//                     key={step.number}
//                     variants={itemVariants}
//                   >
//                     <div className="loans-step-number">
//                       {step.number}
//                     </div>

//                     <div className="loans-step-icon">
//                       <Icon />
//                     </div>

//                     <div className="loans-step-copy">
//                       <h3>{step.title}</h3>
//                       <p>{step.description}</p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="loans-cta-section">
//         <div className="loans-container">
//           <motion.div
//             className="loans-cta-card"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="loans-cta-decoration loans-cta-decoration-one" />
//             <div className="loans-cta-decoration loans-cta-decoration-two" />

//             <div className="loans-cta-content">
//               <span className="loans-cta-label">
//                 LET'S DISCUSS YOUR REQUIREMENTS
//               </span>

//               <h2>
//                 Your next chapter starts with a{" "}
//                 <span>conversation.</span>
//               </h2>

//               <p>
//                 Tell us what you need. Our team can help you explore
//                 potential financing options and understand the next
//                 steps.
//               </p>

//               <div className="loans-cta-actions">
//                 <a
//                   href={createWhatsAppLink(
//                     "Hello Samarth Business Solutions, I would like to discuss my loan requirements."
//                   )}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="loans-btn loans-btn-light"
//                 >
//                   <FiMessageCircle />
//                   Chat on WhatsApp
//                 </a>

//                 <Link
//                   to="/contact"
//                   className="loans-btn loans-btn-outline-light"
//                 >
//                   <FiPhone />
//                   Contact Us
//                 </Link>
//               </div>
//             </div>

//             <div className="loans-cta-visual">
//               <img
//                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
//                 alt="Professional reviewing financial documents"
//                 loading="lazy"
fetchPriority="high"
  decoding="async"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* DISCLAIMER */}
//       <section className="loans-disclaimer">
//         <div className="loans-container">
//           <FiShield />

//           <p>
//             <strong>Important information:</strong> All loans are
//             subject to the eligibility criteria, documentation,
//             interest rates, terms, and approval processes of the
//             relevant lender. Samarth Business Solutions does not
//             guarantee loan approval or a specific interest rate.
//             Please review all applicable terms with the lender before
//             proceeding.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Loans;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiHome,
  FiBriefcase,
  FiTruck,
  FiBookOpen,
  FiDollarSign,
  FiCreditCard,
  FiShield,
  FiPhone,
  FiMessageCircle,
  FiFileText,
  FiUsers,
  FiTrendingUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./Loans.css";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import l5 from "../assets/l5.png";
import l6 from "../assets/l6.png";
import l7 from "../assets/l7.png";
import l8 from "../assets/l8.png";
import l9 from "../assets/l9.png";
import l10 from "../assets/l10.png";
import l11 from "../assets/l11.png";

const WHATSAPP_NUMBER = "919900458068";

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const slides = [
  {
    eyebrow: "FINANCIAL SOLUTIONS FOR YOUR NEXT STEP",
    title: "Find the Right Loan for Your",
    highlight: "Next Big Move.",
    description:
      "From personal milestones to your dream home, explore financing options with clear information and guidance throughout your enquiry journey.",
    image:
      l1,
    icon: FiHome,
    badge: "Your goals matter",
    badgeText: "Explore options around your needs.",
    features: ["Personal Loans", "Home Financing", "Clear Guidance"],
  },
  {
    eyebrow: "FINANCING YOUR AMBITION",
    title: "Give Your Business",
    highlight: "Room to Grow.",
    description:
      "Explore business financing and working-capital options to support your next stage of growth and operational requirements.",
    image:
     l2,
    icon: FiBriefcase,
    badge: "Think bigger",
    badgeText: "Understand potential financing options.",
    features: ["Business Loans", "Working Capital", "Enquiry Support"],
  },
  {
    eyebrow: "MOVE FORWARD WITH CONFIDENCE",
    title: "Your Next Chapter",
    highlight: "Starts Here.",
    description:
      "From vehicle purchases to higher education and other financial needs, find out which available loan options may suit your requirements.",
    image:
      l3,
    icon: FiTruck,
    badge: "Plan your next step",
    badgeText: "Get support understanding the process.",
    features: ["Vehicle Loans", "Education Loans", "Application Guidance"],
  },
];

const loanTypes = [
  {
    id: "personal",
    title: "Personal Loans",
    description:
      "Explore personal loan options for planned expenses, emergencies, and important life goals.",
    image:
      l4,
    icon: FiDollarSign,
    features: [
      "Flexible loan options",
      "Simple enquiry process",
      "Guidance with documentation",
    ],
  },
  {
    id: "home",
    title: "Home Loans",
    description:
      "Get guidance on financing your dream home, whether you are buying, building, or renovating.",
    image:
    l5,
    icon: FiHome,
    features: [
      "Home purchase financing",
      "Construction loan options",
      "Property-related guidance",
    ],
  },
  {
    id: "business",
    title: "Business Loans",
    description:
      "Discover financing options to support business expansion, working capital, and operational needs.",
    image:
      l6,
    icon: FiBriefcase,
    features: [
      "Business expansion",
      "Working capital enquiries",
      "Business documentation guidance",
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle Loans",
    description:
      "Explore financing options for your next car or other eligible vehicle purchase.",
    image:
 l7,
    icon: FiTruck,
    features: [
      "New vehicle financing",
      "Loan option comparison",
      "Application guidance",
    ],
  },
  {
    id: "education",
    title: "Education Loans",
    description:
      "Explore education financing options to help plan for higher studies and career development.",
    image:
      l8,
    icon: FiBookOpen,
    features: [
      "Higher education financing",
      "Course-related enquiries",
      "Documentation support",
    ],
  },
  {
    id: "gold",
    title: "Gold Loans",
    description:
      "Learn about gold-backed financing options, subject to lender policies and eligibility.",
    image:
     l9,
    icon: FiShield,
    features: [
      "Gold-backed loan enquiries",
      "Lender option guidance",
      "Eligibility information",
    ],
  },
  {
    id: "property",
    title: "Loan Against Property",
    description:
      "Explore secured financing options against eligible residential or commercial property.",
    image:
    l10,
    icon: FiCreditCard,
    features: [
      "Property-backed financing",
      "Secured loan enquiries",
      "Documentation guidance",
    ],
  },
  {
    id: "other",
    title: "Other Loan Options",
    description:
      "Tell us your financial requirements and explore other suitable financing categories.",
    image:
      l11,
    icon: FiTrendingUp,
    features: [
      "Understand available options",
      "Personalised enquiry support",
      "Next-step guidance",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us what type of financing you are looking for and share your basic requirements.",
    icon: FiMessageCircle,
  },
  {
    number: "02",
    title: "Explore Available Options",
    description:
      "Understand potential options, eligibility requirements, and documentation based on your profile.",
    icon: FiFileText,
  },
  {
    number: "03",
    title: "Proceed With Your Application",
    description:
      "Review the relevant lender's terms and proceed with an application if the option suits you.",
    icon: FiCheckCircle,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Hero styling is included here so the hero needs no extra CSS file. */
const heroStyles = `
.loan-cinema {
  --loan-blue: #3185e6;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  height: min(790px, 88vh);
  min-height: 680px;
  overflow: hidden;
  color: #fff;
  background: #071323;
}
.loan-cinema-bg {
  position: absolute;
  inset: 0;
  z-index: -3;
  background-position: center;
  background-size: cover;
  will-change: transform, opacity;
}
.loan-cinema-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(4,15,29,.97) 0%, rgba(4,15,29,.91) 32%, rgba(4,15,29,.63) 54%, rgba(4,15,29,.17) 100%),
    linear-gradient(0deg, rgba(4,15,29,.76), transparent 52%);
}
.loan-cinema-container {
  position: relative;
  width: min(1200px, calc(100% - 120px));
  margin: 0 auto;
  padding: 85px 0 105px;
}
.loan-cinema-content { width: min(660px, 66%); }
.loan-cinema-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
  color: #91c7ff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.4px;
  line-height: 1.7;
}
.loan-cinema-eyebrow span { width: 32px; height: 2px; background: #3185e6; flex-shrink: 0; }
.loan-cinema h1 {
  max-width: 750px;
  margin: 0;
  color: #fff;
  font-size: clamp(43px, 5.4vw, 75px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -2.6px;
}
.loan-cinema h1 em { color: #69adff; font-style: normal; }
.loan-cinema-description {
  max-width: 560px;
  margin: 23px 0 25px;
  color: rgba(255,255,255,.8);
  font-size: 16px;
  line-height: 1.85;
}
.loan-cinema-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 30px;
}
.loan-cinema-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,.93);
  font-size: 12px;
  font-weight: 650;
}
.loan-cinema-feature svg { color: #69adff; flex-shrink: 0; }
.loan-cinema-actions { display: flex; flex-wrap: wrap; gap: 13px; }
.loan-cinema-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 53px;
  padding: 0 22px;
  border-radius: 9px;
  color: #fff;
  font-size: 13px;
  font-weight: 750;
  text-decoration: none;
  transition: transform .25s ease, background .25s ease;
}
.loan-cinema-btn:hover { transform: translateY(-3px); }
.loan-cinema-primary {
  background: linear-gradient(135deg,#3185e6,#075fd3);
  box-shadow: 0 10px 28px rgba(16,100,221,.27);
}
.loan-cinema-secondary {
  border: 1px solid rgba(125,186,255,.7);
  background: rgba(7,20,36,.48);
  backdrop-filter: blur(12px);
}
.loan-cinema-float {
  position: absolute;
  right: 0;
  bottom: 170px;
  display: flex;
  align-items: center;
  gap: 13px;
  width: 280px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 16px;
  color: #14243b;
  background: rgba(255,255,255,.93);
  box-shadow: 0 22px 60px rgba(0,0,0,.2);
  backdrop-filter: blur(16px);
}
.loan-cinema-float-icon {
  display: grid;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 13px;
  color: #176fda;
  background: #e5f1ff;
}
.loan-cinema-float strong { display: block; font-size: 13px; line-height: 1.5; }
.loan-cinema-float small { display: block; margin-top: 5px; color: #667184; font-size: 11px; line-height: 1.55; }
.loan-cinema-arrow {
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
  color: white;
  background: rgba(6,19,34,.58);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: background .2s ease;
}
.loan-cinema-arrow:hover { background: #3185e6; }
.loan-cinema-prev { left: 19px; }
.loan-cinema-next { right: 19px; }
.loan-cinema-bottom {
  position: absolute;
  right: 0;
  bottom: 30px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loan-cinema-dots { display: flex; align-items: center; gap: 10px; }
.loan-cinema-dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 20px;
  background: rgba(255,255,255,.53);
  cursor: pointer;
  transition: width .3s ease, background .3s ease;
}
.loan-cinema-dot.active { width: 27px; background: #3185e6; }
.loan-cinema-count {
  position: absolute;
  right: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}
.loan-cinema-progress { position: absolute; right: 0; bottom: 0; left: 0; height: 3px; background: rgba(255,255,255,.14); }
.loan-cinema-progress > div { height: 100%; background: #3185e6; }
@media (max-width: 900px) {
  .loan-cinema { height: auto; min-height: 700px; }
  .loan-cinema-container { width: calc(100% - 90px); min-height: 700px; display: flex; flex-direction: column; justify-content: center; }
  .loan-cinema-content { width: 78%; }
  .loan-cinema-float { right: 0; bottom: 95px; width: 245px; }
  .loan-cinema-overlay { background: linear-gradient(90deg,rgba(4,15,29,.96),rgba(4,15,29,.75) 68%,rgba(4,15,29,.34)),linear-gradient(0deg,rgba(4,15,29,.7),transparent); }
}
@media (max-width: 600px) {
  .loan-cinema { height: auto; min-height: 740px; }
  .loan-cinema-bg { background-position: 58% center; }
  .loan-cinema-container { width: calc(100% - 44px); min-height: 740px; padding: 65px 0 170px; }
  .loan-cinema-content { width: 100%; }
  .loan-cinema-eyebrow { font-size: 9px; letter-spacing: 1.4px; margin-bottom: 19px; }
  .loan-cinema h1 { font-size: clamp(38px, 10vw, 52px); letter-spacing: -1.6px; }
  .loan-cinema-description { font-size: 14px; line-height: 1.75; margin: 18px 0 21px; }
  .loan-cinema-features { display: grid; gap: 11px; margin-bottom: 24px; }
  .loan-cinema-actions { flex-direction: column; }
  .loan-cinema-btn { width: 100%; min-height: 50px; box-sizing: border-box; }
  .loan-cinema-float { right: auto; left: 0; bottom: 77px; width: min(275px, calc(100% - 35px)); padding: 12px; }
  .loan-cinema-arrow { top: auto; bottom: 20px; width: 36px; height: 36px; transform: none; }
  .loan-cinema-prev { left: 12px; }
  .loan-cinema-next { right: 12px; }
  .loan-cinema-count { display: none; }
  .loan-cinema-overlay { background: linear-gradient(90deg,rgba(4,15,29,.95),rgba(4,15,29,.74)),linear-gradient(0deg,rgba(4,15,29,.97),transparent 90%); }
}
@media (prefers-reduced-motion: reduce) {
  .loan-cinema *, .loan-cinema *::before, .loan-cinema *::after { transition-duration: .01ms !important; }
}
`;

function LoansHero() {
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
      <section className="loan-cinema" aria-label="Loan solutions">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            className="loan-cinema-bg"
            style={{ backgroundImage: `url("${slide.image}")` }}
            initial={{ opacity: 0.55, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.55 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div className="loan-cinema-overlay" />

        <button
          type="button"
          className="loan-cinema-arrow loan-cinema-prev"
          onClick={previous}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={22} />
        </button>

        <div className="loan-cinema-container">
          <div className="loan-cinema-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <div className="loan-cinema-eyebrow">
                  <span />
                  {slide.eyebrow}
                </div>

                <h1>
                  {slide.title}
                  <br />
                  <em>{slide.highlight}</em>
                </h1>

                <p className="loan-cinema-description">
                  {slide.description}
                </p>

                <div className="loan-cinema-features">
                  {slide.features.map((feature) => (
                    <div className="loan-cinema-feature" key={feature}>
                      <FiCheckCircle size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="loan-cinema-actions">
                  <a
                    href={createWhatsAppLink(
                      "Hello Samarth Business Solutions, I would like to enquire about your loan services."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="loan-cinema-btn loan-cinema-primary"
                  >
                    Explore Loan Options <FiArrowRight />
                  </a>

                  <Link
                    to="/contact"
                    className="loan-cinema-btn loan-cinema-secondary"
                  >
                    Talk to Our Team <FiArrowUpRight />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${active}`}
              className="loan-cinema-float"
              initial={{ opacity: 0, x: 24, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.45 }}
            >
              <div className="loan-cinema-float-icon">
                <Icon size={25} />
              </div>
              <div>
                <strong>{slide.badge}</strong>
                <small>{slide.badgeText}</small>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="loan-cinema-bottom">
            <div className="loan-cinema-dots">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  className={`loan-cinema-dot ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
            <span className="loan-cinema-count">
              0{active + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="loan-cinema-arrow loan-cinema-next"
          onClick={next}
          aria-label="Next slide"
        >
          <FiChevronRight size={22} />
        </button>

        <div className="loan-cinema-progress">
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

function Loans() {
  return (
    <main className="loans-page">
      <LoansHero />

      {/* LOAN CATEGORIES */}
      <section className="loans-categories-section" id="loan-options">
        <div className="loans-container">
          <motion.div
            className="loans-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            <span className="loans-section-label">OUR LOAN SERVICES</span>
            <h2>
              Financing options for <span>every ambition.</span>
            </h2>
            <p>
              Explore our loan categories and connect with our team to
              understand which options may fit your requirements.
            </p>
          </motion.div>

          <motion.div
            className="loans-categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {loanTypes.map((loan) => {
              const Icon = loan.icon;

              return (
                <motion.article
                  className="loans-category-card"
                  key={loan.id}
                  variants={itemVariants}
                  whileHover={{ y: -7 }}
                >
                  <div className="loans-card-image-wrap">
                    <img
                      src={loan.image}
                      alt={loan.title}
                      className="loans-card-image"
                      loading="lazy"
fetchPriority="high"
  decoding="async"
                    />
                    <div className="loans-card-image-shade" />
                    <div className="loans-card-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="loans-card-content">
                    <h3>{loan.title}</h3>
                    <p className="loans-card-description">
                      {loan.description}
                    </p>

                    <ul className="loans-feature-list">
                      {loan.features.map((feature) => (
                        <li key={feature}>
                          <FiCheckCircle />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={createWhatsAppLink(
                        `Hello Samarth Business Solutions, I would like to enquire about ${loan.title}. Please share the available options and eligibility details.`
                      )}
                      className="loans-card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now <FiArrowRight />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="loans-process-section">
        <div className="loans-container">
          <div className="loans-process-layout">
            <motion.div
              className="loans-process-intro"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="loans-section-label">HOW IT WORKS</span>
              <h2>
                A simpler way to explore your <span>loan options.</span>
              </h2>
              <p>
                Start with a conversation. Our team can help you understand
                the next steps, documentation, and requirements associated
                with available options.
              </p>

              <a
                href={createWhatsAppLink(
                  "Hello Samarth Business Solutions, I need help understanding the loan enquiry process."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="loans-btn loans-btn-primary"
              >
                Start Your Enquiry <FiArrowRight />
              </a>
            </motion.div>

            <motion.div
              className="loans-process-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="loans-process-step"
                    key={step.number}
                    variants={itemVariants}
                  >
                    <div className="loans-step-number">{step.number}</div>
                    <div className="loans-step-icon">
                      <Icon />
                    </div>
                    <div className="loans-step-copy">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="loans-cta-section">
        <div className="loans-container">
          <motion.div
            className="loans-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="loans-cta-decoration loans-cta-decoration-one" />
            <div className="loans-cta-decoration loans-cta-decoration-two" />

            <div className="loans-cta-content">
              <span className="loans-cta-label">
                LET'S DISCUSS YOUR REQUIREMENTS
              </span>
              <h2>
                Your next chapter starts with a <span>conversation.</span>
              </h2>
              <p>
                Tell us what you need. Our team can help you explore potential
                financing options and understand the next steps.
              </p>

              <div className="loans-cta-actions">
                <a
                  href={createWhatsAppLink(
                    "Hello Samarth Business Solutions, I would like to discuss my loan requirements."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loans-btn loans-btn-light"
                >
                  <FiMessageCircle /> Chat on WhatsApp
                </a>

                <Link to="/contact" className="loans-btn loans-btn-outline-light">
                  <FiPhone /> Contact Us
                </Link>
              </div>
            </div>

            <div className="loans-cta-visual">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85"
                alt="Professional reviewing financial documents"
                loading="lazy"
fetchPriority="high"
  decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="loans-disclaimer">
        <div className="loans-container">
          <FiShield />
          <p>
            <strong>Important information:</strong> All loans are subject to
            the eligibility criteria, documentation, interest rates, terms,
            and approval processes of the relevant lender. Samarth Business
            Solutions does not guarantee loan approval or a specific interest
            rate. Please review all applicable terms with the lender before
            proceeding.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Loans;
