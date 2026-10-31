
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FiMap,
// // //   FiMapPin,
// // //   FiCompass,
// // //   FiBriefcase,
// // //   FiUsers,
// // //   FiCheckCircle,
// // //   FiArrowRight,
// // //   FiPhoneCall,
// // //   FiCalendar,
// // // } from "react-icons/fi";

// // // import "./Travel.css";

// // // const travelServices = [
// // //   {
// // //     icon: FiMap,
// // //     title: "Holiday Packages",
// // //     description:
// // //       "Enquire about available holiday packages for your preferred destination, dates and budget.",
// // //     features: [
// // //       "Destination options",
// // //       "Trip duration enquiries",
// // //       "Package inclusions and pricing",
// // //     ],
// // //   },
// // //   {
// // //     icon: FiCompass,
// // //     title: "Domestic Travel",
// // //     description:
// // //       "Explore travel options for holidays, family visits and journeys across India.",
// // //     features: [
// // //       "Destination planning",
// // //       "Travel itinerary assistance",
// // //       "Transport options",
// // //     ],
// // //   },
// // //   {
// // //     icon: FiMapPin,
// // //     title: "International Travel",
// // //     description:
// // //       "Discuss international travel arrangements and requirements for your planned trip.",
// // //     features: [
// // //       "Destination information",
// // //       "Travel arrangement enquiries",
// // //       "Visa requirements guidance",
// // //     ],
// // //   },
// // //   {
// // //     icon: FiBriefcase,
// // //     title: "Business Travel",
// // //     description:
// // //       "Enquire about travel arrangements for meetings, work visits and business trips.",
// // //     features: [
// // //       "Business trip planning",
// // //       "Travel schedule coordination",
// // //       "Accommodation enquiries",
// // //     ],
// // //   },
// // //   {
// // //     icon: FiUsers,
// // //     title: "Group & Family Travel",
// // //     description:
// // //       "Explore travel arrangements for families, groups and special occasions.",
// // //     features: [
// // //       "Group travel enquiries",
// // //       "Family trip planning",
// // //       "Travel coordination",
// // //     ],
// // //   },
// // //   {
// // //     icon: FiCalendar,
// // //     title: "Custom Travel Planning",
// // //     description:
// // //       "Share your preferred dates and interests to discuss a travel plan that suits your needs.",
// // //     features: [
// // //       "Flexible itinerary enquiries",
// // //       "Activity and destination options",
// // //       "Travel budget discussion",
// // //     ],
// // //   },
// // // ];

// // // export default function Travel() {
// // //   const phoneNumber = "919900458068";

// // //   const createWhatsAppLink = (serviceTitle) => {
// // //     const message = encodeURIComponent(
// // //       `HelloSamarth Groups, I would like to enquire about ${serviceTitle}. Please share the available options and details.`
// // //     );

// // //     return `https://wa.me/${phoneNumber}?text=${message}`;
// // //   };

// // //   return (
// // //     <div className="travel-page">
// // //       {/* Hero */}
// // //       <section className="travel-hero">
// // //         <div className="container travel-hero-grid">
// // //           <div className="travel-hero-content">
// // //             <div className="travel-breadcrumb">
// // //               <Link to="/">Home</Link>
// // //               <span>/</span>
// // //               <span>Travel & Tourism</span>
// // //             </div>

// // //             <span className="travel-eyebrow">
// // //               DISCOVER YOUR NEXT JOURNEY
// // //             </span>

// // //             <h1>
// // //               Every Journey
// // //               <br />
// // //               <span>Starts With a Plan.</span>
// // //             </h1>

// // //             <p>
// // //               Explore travel possibilities for holidays, family
// // //               trips, business visits and international journeys.
// // //               Tell us your requirements to enquire about available
// // //               arrangements and services.
// // //             </p>

// // //             <div className="travel-hero-actions">
// // //               <a
// // //                 href={createWhatsAppLink("travel services")}
// // //                 target="_blank"
// // //                 rel="noreferrer"
// // //                 className="travel-primary-btn"
// // //               >
// // //                 Plan Your Trip
// // //                 <FiArrowRight />
// // //               </a>

// // //               <a
// // //                 href="#travel-services"
// // //                 className="travel-secondary-btn"
// // //               >
// // //                 Explore Services
// // //               </a>
// // //             </div>

// // //             <div className="travel-trust-note">
// // //               <FiCheckCircle />
// // //               <span>
// // //                 Travel options are subject to availability and provider terms.
// // //               </span>
// // //             </div>
// // //           </div>

// // //           <div className="travel-hero-visual">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85"
// // //               alt="Mountain landscape at a travel destination"
// // //             />

// // //             <div className="travel-image-card">
// // //               <span className="travel-image-icon">
// // //                 <FiCompass size={25} />
// // //               </span>

// // //               <div>
// // //                 <strong>Your next adventure awaits</strong>
// // //                 <span>Start by sharing your travel plans</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Services */}
// // //       <section
// // //         className="travel-services section-padding"
// // //         id="travel-services"
// // //       >
// // //         <div className="container">
// // //           <div className="section-heading">
// // //             <span className="section-kicker">TRAVEL SERVICES</span>

// // //             <h2>Explore Travel Possibilities</h2>

// // //             <p>
// // //               Choose a travel category and let us know what
// // //               arrangements you are looking for.
// // //             </p>
// // //           </div>

// // //           <div className="travel-grid">
// // //             {travelServices.map((service) => {
// // //               const Icon = service.icon;

// // //               return (
// // //                 <article
// // //                   className="travel-card"
// // //                   key={service.title}
// // //                 >
// // //                   <div className="travel-card-heading">
// // //                     <span className="travel-card-icon">
// // //                       <Icon size={25} />
// // //                     </span>

// // //                     <FiArrowRight className="travel-card-arrow" />
// // //                   </div>

// // //                   <h3>{service.title}</h3>

// // //                   <p className="travel-card-description">
// // //                     {service.description}
// // //                   </p>

// // //                   <ul className="travel-features">
// // //                     {service.features.map((feature) => (
// // //                       <li key={feature}>
// // //                         <FiCheckCircle />
// // //                         <span>{feature}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>

// // //                   <a
// // //                     href={createWhatsAppLink(service.title)}
// // //                     target="_blank"
// // //                     rel="noreferrer"
// // //                     className="travel-card-link"
// // //                   >
// // //                     Enquire Now
// // //                     <FiArrowRight />
// // //                   </a>
// // //                 </article>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Planning process */}
// // //       <section className="travel-process">
// // //         <div className="container">
// // //           <div className="section-heading">
// // //             <span className="section-kicker">HOW IT WORKS</span>

// // //             <h2>Make Your Travel Enquiry Simple</h2>

// // //             <p>
// // //               Start with your plans, then explore the available options.
// // //             </p>
// // //           </div>

// // //           <div className="travel-process-grid">
// // //             <article className="travel-step">
// // //               <span className="travel-step-number">01</span>
// // //               <h3>Share Your Destination</h3>
// // //               <p>
// // //                 Tell us where you want to go and who is travelling.
// // //               </p>
// // //             </article>

// // //             <article className="travel-step">
// // //               <span className="travel-step-number">02</span>
// // //               <h3>Discuss Your Requirements</h3>
// // //               <p>
// // //                 Share your dates, preferences and approximate budget.
// // //               </p>
// // //             </article>

// // //             <article className="travel-step">
// // //               <span className="travel-step-number">03</span>
// // //               <h3>Review Available Options</h3>
// // //               <p>
// // //                 Check availability, inclusions, prices and provider terms.
// // //               </p>
// // //             </article>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="travel-cta-section">
// // //         <div className="container travel-cta">
// // //           <div className="travel-cta-icon">
// // //             <FiPhoneCall size={27} />
// // //           </div>

// // //           <div className="travel-cta-content">
// // //             <span>READY TO START PLANNING?</span>
// // //             <h2>Tell us about your next trip.</h2>
// // //             <p>
// // //               Enquire about travel arrangements and the services
// // //               available for your requirements.
// // //             </p>
// // //           </div>

// // //           <a
// // //             href={createWhatsAppLink("a customised travel enquiry")}
// // //             target="_blank"
// // //             rel="noreferrer"
// // //             className="travel-cta-btn"
// // //           >
// // //             Enquire Now
// // //             <FiArrowRight />
// // //           </a>
// // //         </div>
// // //       </section>

// // //       <p className="travel-disclaimer container">
// // //         Travel arrangements, bookings, prices, availability and visa
// // //         requirements depend on the relevant providers and authorities.
// // //         Confirm all details before booking. This page does not guarantee
// // //         availability, visa approval or any particular travel outcome.
// // //       </p>
// // //     </div>
// // //   );
// // // }




// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   FiMap,
// //   FiMapPin,
// //   FiCompass,
// //   FiBriefcase,
// //   FiUsers,
// //   FiCheckCircle,
// //   FiArrowRight,
// //   FiArrowUpRight,
// //   FiPhoneCall,
// //   FiCalendar,
// //   FiGlobe,
// //   FiMessageCircle,
// //   FiClock,
// // } from "react-icons/fi";

// // import "./Travel.css";

// // const WHATSAPP_NUMBER = "919900458068";

// // const travelServices = [
// //   {
// //     id: "holidays",
// //     icon: FiMap,
// //     title: "Holiday Packages",
// //     description:
// //       "Explore holiday possibilities for your preferred destinations, travel dates and budget.",
// //     image:
// //       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Destination options",
// //       "Trip duration planning",
// //       "Package inclusions and pricing",
// //     ],
// //   },
// //   {
// //     id: "domestic",
// //     icon: FiCompass,
// //     title: "Domestic Travel",
// //     description:
// //       "Discover travel options for holidays, family visits and memorable journeys across India.",
// //     image:
// //       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Destination planning",
// //       "Travel itinerary assistance",
// //       "Transport options",
// //     ],
// //   },
// //   {
// //     id: "international",
// //     icon: FiGlobe,
// //     title: "International Travel",
// //     description:
// //       "Explore international destinations and discuss arrangements for your next overseas trip.",
// //     image:
// //       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Destination information",
// //       "Travel arrangement enquiries",
// //       "Visa requirement guidance",
// //     ],
// //   },
// //   {
// //     id: "business",
// //     icon: FiBriefcase,
// //     title: "Business Travel",
// //     description:
// //       "Plan travel enquiries for meetings, corporate visits, conferences and business commitments.",
// //     image:
// //       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Business trip planning",
// //       "Schedule coordination",
// //       "Accommodation enquiries",
// //     ],
// //   },
// //   {
// //     id: "family",
// //     icon: FiUsers,
// //     title: "Group & Family Travel",
// //     description:
// //       "Explore travel arrangements for family holidays, group outings and special occasions.",
// //     image:
// //       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Group travel enquiries",
// //       "Family trip planning",
// //       "Travel coordination",
// //     ],
// //   },
// //   {
// //     id: "custom",
// //     icon: FiCalendar,
// //     title: "Custom Travel Planning",
// //     description:
// //       "Share your interests, preferred dates and budget to discuss a travel plan tailored to your needs.",
// //     image:
// //       "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
// //     features: [
// //       "Flexible itinerary enquiries",
// //       "Activities and destinations",
// //       "Travel budget discussion",
// //     ],
// //   },
// // ];

// // const planningSteps = [
// //   {
// //     number: "01",
// //     icon: FiMapPin,
// //     title: "Choose Your Destination",
// //     description:
// //       "Tell us where you want to go, who is travelling and what kind of experience you are looking for.",
// //   },
// //   {
// //     number: "02",
// //     icon: FiCalendar,
// //     title: "Share Your Travel Plans",
// //     description:
// //       "Discuss your preferred dates, approximate budget, trip duration and accommodation needs.",
// //   },
// //   {
// //     number: "03",
// //     icon: FiCheckCircle,
// //     title: "Explore Available Options",
// //     description:
// //       "Review the available arrangements, prices, inclusions and provider terms before confirming.",
// //   },
// // ];

// // const containerVariants = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: {
// //     opacity: 0,
// //     y: 25,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.55,
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // export default function Travel() {
// //   const createWhatsAppLink = (serviceTitle) => {
// //     const message = encodeURIComponent(
// //       `HelloSamarth Groups, I would like to enquire about ${serviceTitle}. Please share the available travel options and details.`
// //     );

// //     return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
// //   };

// //   return (
// //     <main className="travel-page">
// //       {/* HERO SECTION */}
// //       <section className="travel-hero">
// //         <div className="travel-hero-orb travel-orb-one" />
// //         <div className="travel-hero-orb travel-orb-two" />

// //         <div className="travel-container travel-hero-grid">
// //           <motion.div
// //             className="travel-hero-content"
// //             initial={{ opacity: 0, x: -30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.7 }}
// //           >
// //             <div className="travel-breadcrumb">
// //               <Link to="/">Home</Link>
// //               <span>/</span>
// //               <span>Travel & Tourism</span>
// //             </div>

// //             <div className="travel-eyebrow">
// //               <span className="travel-eyebrow-dot" />
// //               YOUR NEXT JOURNEY STARTS HERE
// //             </div>

// //             <h1>
// //               The World Is
// //               <br />
// //               <span>Waiting for You.</span>
// //             </h1>

// //             <p className="travel-hero-description">
// //               From relaxing holidays to international adventures,
// //               discover travel possibilities for every occasion.
// //               Share your destination, dates and preferences to
// //               explore available arrangements.
// //             </p>

// //             <div className="travel-hero-actions">
// //               <a
// //                 href={createWhatsAppLink("travel services")}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="travel-btn travel-btn-primary"
// //               >
// //                 Plan Your Journey
// //                 <FiArrowRight />
// //               </a>

// //               <a
// //                 href="#travel-services"
// //                 className="travel-btn travel-btn-secondary"
// //               >
// //                 Explore Destinations
// //                 <FiArrowUpRight />
// //               </a>
// //             </div>

// //             <div className="travel-trust-row">
// //               <div className="travel-trust-icon">
// //                 <FiCompass />
// //               </div>

// //               <div>
// //                 <strong>Your plans, your preferences</strong>
// //                 <span>
// //                   Start with a conversation about your travel needs.
// //                 </span>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="travel-hero-visual"
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8, delay: 0.15 }}
// //           >
// //             <div className="travel-hero-image-wrap">
// //               <img
// //                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=90"
// //                 alt="Majestic mountain landscape and scenic travel destination"
// //                 className="travel-hero-image"
// //               />

// //               <div className="travel-hero-image-overlay" />
// //             </div>

// //             <div className="travel-floating-card travel-floating-top">
// //               <div className="travel-floating-icon travel-icon-blue">
// //                 <FiMapPin />
// //               </div>

// //               <div>
// //                 <strong>Your next destination</strong>
// //                 <span>Where would you like to go?</span>
// //               </div>
// //             </div>

// //             <div className="travel-floating-card travel-floating-bottom">
// //               <div className="travel-floating-icon travel-icon-gold">
// //                 <FiCalendar />
// //               </div>

// //               <div>
// //                 <strong>Plan at your pace</strong>
// //                 <span>Dates, preferences and budget</span>
// //               </div>
// //             </div>

// //             <div className="travel-image-caption">
// //               <span>DISCOVER. EXPERIENCE. REMEMBER.</span>
// //               <strong>Make every journey meaningful.</strong>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* TRAVEL SERVICES */}
// //       <section
// //         className="travel-services"
// //         id="travel-services"
// //       >
// //         <div className="travel-container">
// //           <motion.div
// //             className="travel-section-heading"
// //             variants={itemVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.2 }}
// //           >
// //             <span className="travel-section-label">
// //               EXPLORE OUR TRAVEL SERVICES
// //             </span>

// //             <h2>
// //               Find your kind of <span>adventure.</span>
// //             </h2>

// //             <p>
// //               Whether it is a weekend escape, a family holiday or a
// //               business trip, explore the travel categories that fit
// //               your plans.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="travel-grid"
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.1 }}
// //           >
// //             {travelServices.map((service) => {
// //               const Icon = service.icon;

// //               return (
// //                 <motion.article
// //                   className="travel-card"
// //                   key={service.id}
// //                   variants={itemVariants}
// //                   whileHover={{ y: -7 }}
// //                 >
// //                   <div className="travel-card-image-wrap">
// //                     <img
// //                       src={service.image}
// //                       alt={service.title}
// //                       className="travel-card-image"
// //                      loading="lazy"
// //                     />

// //                     <div className="travel-card-image-overlay" />

// //                     <div className="travel-card-icon">
// //                       <Icon />
// //                     </div>
// //                   </div>

// //                   <div className="travel-card-content">
// //                     <h3>{service.title}</h3>

// //                     <p className="travel-card-description">
// //                       {service.description}
// //                     </p>

// //                     <ul className="travel-features">
// //                       {service.features.map((feature) => (
// //                         <li key={feature}>
// //                           <FiCheckCircle />
// //                           <span>{feature}</span>
// //                         </li>
// //                       ))}
// //                     </ul>

// //                     <a
// //                       href={createWhatsAppLink(service.title)}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="travel-card-link"
// //                     >
// //                       Enquire Now
// //                       <FiArrowRight />
// //                     </a>
// //                   </div>
// //                 </motion.article>
// //               );
// //             })}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* FEATURE SECTION */}
// //       <section className="travel-experience">
// //         <div className="travel-container travel-experience-grid">
// //           <motion.div
// //             className="travel-experience-visual"
// //             initial={{ opacity: 0, x: -25 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.65 }}
// //           >
// //             <div className="travel-experience-image-main">
// //               <img
// //                 src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1100&q=90"
// //                 alt="Beautiful lake surrounded by mountains"
// //                loading="lazy"
// //               />
// //             </div>

// //             <div className="travel-experience-image-small">
// //               <img
// //                 src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
// //                 alt="Scenic outdoor travel destination"
// //                loading="lazy"
// //               />
// //             </div>

// //             <div className="travel-experience-badge">
// //               <FiCompass />
// //               <div>
// //                 <strong>Made for your journey</strong>
// //                 <span>Start with your travel ideas</span>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             className="travel-experience-content"
// //             initial={{ opacity: 0, x: 25 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.65 }}
// //           >
// //             <span className="travel-section-label">
// //               YOUR JOURNEY, YOUR WAY
// //             </span>

// //             <h2>
// //               Great trips begin with{" "}
// //               <span>good planning.</span>
// //             </h2>

// //             <p>
// //               Every traveller has different priorities. Whether you
// //               want to explore a new city, spend quality time with
// //               family or organise a business visit, begin by sharing
// //               what matters most to you.
// //             </p>

// //             <div className="travel-benefit-list">
// //               <div className="travel-benefit-item">
// //                 <span className="travel-benefit-icon">
// //                   <FiMapPin />
// //                 </span>
// //                 <div>
// //                   <strong>Destination-focused planning</strong>
// //                   <p>
// //                     Discuss the places and experiences you prefer.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="travel-benefit-item">
// //                 <span className="travel-benefit-icon">
// //                   <FiCalendar />
// //                 </span>
// //                 <div>
// //                   <strong>Dates and budget discussions</strong>
// //                   <p>
// //                     Share your preferred travel period and budget.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="travel-benefit-item">
// //                 <span className="travel-benefit-icon">
// //                   <FiCheckCircle />
// //                 </span>
// //                 <div>
// //                   <strong>Clear information before booking</strong>
// //                   <p>
// //                     Review availability, inclusions and provider terms.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             <a
// //               href={createWhatsAppLink("custom travel planning")}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="travel-btn travel-btn-primary"
// //             >
// //               Discuss Your Trip
// //               <FiArrowRight />
// //             </a>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* PLANNING PROCESS */}
// //       <section className="travel-process">
// //         <div className="travel-container">
// //           <div className="travel-section-heading">
// //             <span className="travel-section-label">
// //               HOW IT WORKS
// //             </span>

// //             <h2>
// //               From travel idea to <span>travel plan.</span>
// //             </h2>

// //             <p>
// //               Three simple steps to start discussing your next trip.
// //             </p>
// //           </div>

// //           <motion.div
// //             className="travel-process-grid"
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.15 }}
// //           >
// //             {planningSteps.map((step) => {
// //               const Icon = step.icon;

// //               return (
// //                 <motion.article
// //                   className="travel-step"
// //                   key={step.number}
// //                   variants={itemVariants}
// //                 >
// //                   <div className="travel-step-top">
// //                     <span className="travel-step-number">
// //                       {step.number}
// //                     </span>

// //                     <div className="travel-step-icon">
// //                       <Icon />
// //                     </div>
// //                   </div>

// //                   <h3>{step.title}</h3>

// //                   <p>{step.description}</p>
// //                 </motion.article>
// //               );
// //             })}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="travel-cta-section">
// //         <div className="travel-container">
// //           <motion.div
// //             className="travel-cta"
// //             initial={{ opacity: 0, y: 25 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <div className="travel-cta-decoration travel-cta-decoration-one" />
// //             <div className="travel-cta-decoration travel-cta-decoration-two" />

// //             <div className="travel-cta-content">
// //               <span className="travel-cta-eyebrow">
// //                 YOUR NEXT ADVENTURE STARTS HERE
// //               </span>

// //               <h2>
// //                 Where will your next story <span>take you?</span>
// //               </h2>

// //               <p>
// //                 Share your destination, travel dates and preferences
// //                 with our team to enquire about available arrangements.
// //               </p>

// //               <div className="travel-cta-actions">
// //                 <a
// //                   href={createWhatsAppLink("a customised travel enquiry")}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="travel-btn travel-btn-light"
// //                 >
// //                   <FiMessageCircle />
// //                   Plan on WhatsApp
// //                 </a>

// //                 <Link
// //                   to="/contact"
// //                   className="travel-btn travel-btn-outline-light"
// //                 >
// //                   <FiPhoneCall />
// //                   Contact Our Team
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="travel-cta-visual">
// //               <img
// //                 src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
// //                 alt="Beautiful scenic destination for a holiday"
// //                loading="lazy"
// //               />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* DISCLAIMER */}
// //       <section className="travel-disclaimer">
// //         <div className="travel-container travel-disclaimer-inner">
// //           <FiCheckCircle />

// //           <p>
// //             <strong>Important information:</strong> Travel
// //             arrangements, bookings, prices and availability depend on
// //             the relevant providers. Visa requirements and entry
// //             permissions are determined by the applicable authorities.
// //             Verify all details before booking. No guarantee of
// //             availability, visa approval or a specific travel outcome
// //             is provided.
// //           </p>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }



// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FiMap,
//   FiMapPin,
//   FiCompass,
//   FiBriefcase,
//   FiUsers,
//   FiCheckCircle,
//   FiArrowRight,
//   FiArrowUpRight,
//   FiPhoneCall,
//   FiCalendar,
//   FiGlobe,
//   FiMessageCircle,
//   FiAnchor,
//   FiNavigation,
// } from "react-icons/fi";

// import "./Travel.css";

// const WHATSAPP_NUMBER = "919900458068";

// const travelServices = [
//   {
//     id: "holidays",
//     icon: FiMap,
//     title: "Holiday Packages",
//     description:
//       "Discover holiday experiences based on your preferred destinations, travel dates and budget.",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Destination options",
//       "Trip duration planning",
//       "Package inclusions and pricing",
//     ],
//   },
//   {
//     id: "domestic",
//     icon: FiCompass,
//     title: "Domestic Travel",
//     description:
//       "Explore journeys across India, from relaxing getaways to cultural destinations and family holidays.",
//     image:
//       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Destination planning",
//       "Itinerary enquiries",
//       "Transport options",
//     ],
//   },
//   {
//     id: "international",
//     icon: FiGlobe,
//     title: "International Travel",
//     description:
//       "Explore international destinations and discuss travel arrangements for your next overseas adventure.",
//     image:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Destination information",
//       "Travel arrangement enquiries",
//       "Visa requirement guidance",
//     ],
//   },
//   {
//     id: "marine",
//     icon: FiAnchor,
//     title: "Marine Travel",
//     description:
//       "Explore cruise holidays, sea journeys and available marine travel arrangements for your next adventure.",
//     image:
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Cruise and sea travel enquiries",
//       "Marine destination options",
//       "Journey dates and package details",
//     ],
//   },
//   {
//     id: "business",
//     icon: FiBriefcase,
//     title: "Business Travel",
//     description:
//       "Discuss travel arrangements for corporate visits, conferences, business meetings and work trips.",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Business trip planning",
//       "Schedule coordination",
//       "Accommodation enquiries",
//     ],
//   },
//   {
//     id: "family",
//     icon: FiUsers,
//     title: "Group & Family Travel",
//     description:
//       "Explore travel arrangements for family holidays, group outings and memorable special occasions.",
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Group travel enquiries",
//       "Family trip planning",
//       "Travel coordination",
//     ],
//   },
//   {
//     id: "custom",
//     icon: FiCalendar,
//     title: "Custom Travel Planning",
//     description:
//       "Share your interests, travel dates and budget to discuss a personalised trip plan.",
//     image:
//       "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85",
//     features: [
//       "Flexible itinerary enquiries",
//       "Activities and destinations",
//       "Travel budget discussion",
//     ],
//   },
// ];

// const marqueeServices = [
//   "Holiday Packages",
//   "Domestic Travel",
//   "International Travel",
//   "Marine Travel",
//   "Business Travel",
//   "Family Adventures",
//   "Custom Trip Planning",
// ];

// const planningSteps = [
//   {
//     number: "01",
//     icon: FiMapPin,
//     title: "Choose Your Destination",
//     description:
//       "Tell us where you want to go, who is travelling and what kind of experience you prefer.",
//   },
//   {
//     number: "02",
//     icon: FiCalendar,
//     title: "Share Your Travel Plans",
//     description:
//       "Discuss your preferred dates, approximate budget, trip duration and accommodation needs.",
//   },
//   {
//     number: "03",
//     icon: FiCheckCircle,
//     title: "Explore Available Options",
//     description:
//       "Review arrangements, prices, inclusions and provider terms before confirming your trip.",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.09,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Travel() {
//   const createWhatsAppLink = (serviceTitle) => {
//     const message = encodeURIComponent(
//       `HelloSamarth Groups, I would like to enquire about ${serviceTitle}. Please share the available travel options and details.`
//     );

//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
//   };

//   return (
//     <main className="travel-page">
//       {/* CINEMATIC HERO */}
//       <section className="travel-hero">
//         <div className="travel-hero-background">
//           <img
//             src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=90"
//             alt=""
//             aria-hidden="true"
//           />
//         </div>

//         <div className="travel-hero-shade" />
//         <div className="travel-hero-glow" />

//         <div className="travel-container travel-hero-grid">
//           <motion.div
//             className="travel-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85 }}
//           >
//             <div className="travel-breadcrumb">
//               <Link to="/">Home</Link>
//               <span>/</span>
//               <span>Travel & Tourism</span>
//             </div>

//             <div className="travel-eyebrow">
//               <span className="travel-eyebrow-dot" />
//               YOUR NEXT CHAPTER STARTS HERE
//             </div>

//             <h1>
//               Beyond the
//               <br />
//               <span>Ordinary.</span>
//               <br />
//               Into the World.
//             </h1>

//             <p className="travel-hero-description">
//               From breathtaking destinations to unforgettable
//               sea journeys, discover travel possibilities shaped
//               around your interests, plans and ambitions.
//             </p>

//             <div className="travel-hero-actions">
//               <a
//                 href={createWhatsAppLink("travel services")}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="travel-btn travel-btn-primary"
//               >
//                 Start Your Journey
//                 <FiArrowRight />
//               </a>

//               <a
//                 href="#travel-services"
//                 className="travel-btn travel-btn-hero-secondary"
//               >
//                 Explore Services
//                 <FiArrowUpRight />
//               </a>
//             </div>

//             <div className="travel-hero-note">
//               <FiNavigation />
//               <span>
//                 Land, sea and international travel enquiries.
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             className="travel-hero-visual"
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.15 }}
//           >
//             <div className="travel-hero-frame">
//               <img
//                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=90"
//                 alt="Dramatic mountain landscape at a travel destination"
//               />

//               <div className="travel-frame-gradient" />

//               <div className="travel-frame-caption">
//                 <span>01 / DISCOVER</span>
//                 <strong>Find somewhere extraordinary.</strong>
//               </div>
//             </div>

//             <div className="travel-floating-card travel-floating-top">
//               <span className="travel-floating-icon">
//                 <FiCompass />
//               </span>
//               <div>
//                 <strong>Find your next escape</strong>
//                 <span>New places. New perspectives.</span>
//               </div>
//             </div>

//             <div className="travel-floating-card travel-floating-bottom">
//               <span className="travel-floating-icon travel-floating-gold">
//                 <FiAnchor />
//               </span>
//               <div>
//                 <strong>Travel beyond borders</strong>
//                 <span>Including marine travel enquiries</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* SERVICES MARQUEE */}
//         <div className="travel-marquee">
//           <div className="travel-marquee-label">
//             <span className="travel-marquee-dot" />
//             EXPLORE OUR WORLD
//           </div>

//           <div
//             className="travel-marquee-window"
//             aria-label={marqueeServices.join(", ")}
//           >
//             <div className="travel-marquee-track">
//               {[0, 1].map((copy) => (
//                 <div
//                   className="travel-marquee-group"
//                   key={copy}
//                   aria-hidden={copy === 1 ? "true" : undefined}
//                 >
//                   {marqueeServices.map((service) => (
//                     <span
//                       className="travel-marquee-item"
//                       key={service}
//                     >
//                       <FiArrowUpRight />
//                       {service}
//                     </span>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="travel-services" id="travel-services">
//         <div className="travel-container">
//           <motion.div
//             className="travel-section-heading"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <span className="travel-section-label">
//               JOURNEYS WITHOUT LIMITS
//             </span>

//             <h2>
//               One world. <span>Endless possibilities.</span>
//             </h2>

//             <p>
//               Explore travel services for holidays, international
//               destinations, marine journeys, business trips and
//               personalised travel plans.
//             </p>
//           </motion.div>

//           <motion.div
//             className="travel-grid"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {travelServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <motion.article
//                   className="travel-card"
//                   key={service.id}
//                   variants={itemVariants}
//                   whileHover={{ y: -7 }}
//                 >
//                   <div className="travel-card-image-wrap">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="travel-card-image"
//                      loading="lazy"
//                     />

//                     <div className="travel-card-image-overlay" />

//                     <div className="travel-card-number">
//                       {String(
//                         travelServices.indexOf(service) + 1
//                       ).padStart(2, "0")}
//                     </div>

//                     <div className="travel-card-icon">
//                       <Icon />
//                     </div>
//                   </div>

//                   <div className="travel-card-content">
//                     <h3>{service.title}</h3>

//                     <p className="travel-card-description">
//                       {service.description}
//                     </p>

//                     <ul className="travel-features">
//                       {service.features.map((feature) => (
//                         <li key={feature}>
//                           <FiCheckCircle />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     <a
//                       href={createWhatsAppLink(service.title)}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="travel-card-link"
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

//       {/* EXPERIENCE SECTION */}
//       <section className="travel-experience">
//         <div className="travel-container travel-experience-grid">
//           <motion.div
//             className="travel-experience-visual"
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65 }}
//           >
//             <div className="travel-experience-image-main">
//               <img
//                 src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1100&q=90"
//                 alt="Ocean adventure and marine travel experience"
//                loading="lazy"
//               />
//             </div>

//             <div className="travel-experience-image-small">
//               <img
//                 src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
//                 alt="Beautiful scenic outdoor destination"
//                loading="lazy"
//               />
//             </div>

//             <div className="travel-experience-badge">
//               <FiAnchor />
//               <div>
//                 <strong>Land to sea</strong>
//                 <span>Explore more ways to travel</span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="travel-experience-content"
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65 }}
//           >
//             <span className="travel-section-label">
//               MORE THAN A DESTINATION
//             </span>

//             <h2>
//               Your journey can go{" "}
//               <span>beyond the horizon.</span>
//             </h2>

//             <p>
//               Every journey has its own story. Explore scenic
//               destinations, discover international cities, plan
//               a family escape or enquire about cruise and marine
//               travel experiences.
//             </p>

//             <div className="travel-benefit-list">
//               <div className="travel-benefit-item">
//                 <span className="travel-benefit-icon">
//                   <FiGlobe />
//                 </span>
//                 <div>
//                   <strong>Discover new destinations</strong>
//                   <p>
//                     Explore places and experiences that match your plans.
//                   </p>
//                 </div>
//               </div>

//               <div className="travel-benefit-item">
//                 <span className="travel-benefit-icon">
//                   <FiAnchor />
//                 </span>
//                 <div>
//                   <strong>Explore marine travel</strong>
//                   <p>
//                     Ask about cruise journeys, sea travel and related
//                     arrangements where available.
//                   </p>
//                 </div>
//               </div>

//               <div className="travel-benefit-item">
//                 <span className="travel-benefit-icon">
//                   <FiCalendar />
//                 </span>
//                 <div>
//                   <strong>Plan around your preferences</strong>
//                   <p>
//                     Discuss travel dates, trip duration and budget.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <a
//               href={createWhatsAppLink("marine and customised travel")}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="travel-btn travel-btn-primary"
//             >
//               Discuss Your Journey
//               <FiArrowRight />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* PLANNING PROCESS */}
//       <section className="travel-process">
//         <div className="travel-container">
//           <div className="travel-section-heading">
//             <span className="travel-section-label">
//               HOW IT WORKS
//             </span>

//             <h2>
//               Your idea today. <span>Your journey tomorrow.</span>
//             </h2>

//             <p>
//               Start with your travel idea and explore the available
//               arrangements before you book.
//             </p>
//           </div>

//           <motion.div
//             className="travel-process-grid"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//           >
//             {planningSteps.map((step) => {
//               const Icon = step.icon;

//               return (
//                 <motion.article
//                   className="travel-step"
//                   key={step.number}
//                   variants={itemVariants}
//                 >
//                   <div className="travel-step-top">
//                     <span className="travel-step-number">
//                       {step.number}
//                     </span>

//                     <div className="travel-step-icon">
//                       <Icon />
//                     </div>
//                   </div>

//                   <h3>{step.title}</h3>
//                   <p>{step.description}</p>
//                 </motion.article>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="travel-cta-section">
//         <div className="travel-container">
//           <motion.div
//             className="travel-cta"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="travel-cta-decoration travel-cta-decoration-one" />
//             <div className="travel-cta-decoration travel-cta-decoration-two" />

//             <div className="travel-cta-content">
//               <span className="travel-cta-eyebrow">
//                 THE WORLD IS CALLING
//               </span>

//               <h2>
//                 Where will your next story{" "}
//                 <span>take you?</span>
//               </h2>

//               <p>
//                 Tell us about your destination, dates and travel
//                 preferences to enquire about the arrangements available
//                 for your next adventure.
//               </p>

//               <div className="travel-cta-actions">
//                 <a
//                   href={createWhatsAppLink("a customised travel enquiry")}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="travel-btn travel-btn-light"
//                 >
//                   <FiMessageCircle />
//                   Plan on WhatsApp
//                 </a>

//                 <Link
//                   to="/contact"
//                   className="travel-btn travel-btn-outline-light"
//                 >
//                   <FiPhoneCall />
//                   Contact Our Team
//                 </Link>
//               </div>
//             </div>

//             <div className="travel-cta-visual">
//               <img
//                 src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
//                 alt="Scenic destination for a travel adventure"
//                loading="lazy"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* DISCLAIMER */}
//       <section className="travel-disclaimer">
//         <div className="travel-container travel-disclaimer-inner">
//           <FiCheckCircle />

//           <p>
//             <strong>Important information:</strong> Travel services,
//             marine journeys, bookings, prices and availability depend
//             on the relevant providers. Visa, immigration and marine
//             travel requirements depend on applicable authorities and
//             operators. Confirm all details before booking. No
//             guarantee of availability or a particular travel outcome
//             is provided.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMap,
  FiMapPin,
  FiCompass,
  FiBriefcase,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiArrowUpRight,
  FiPhoneCall,
  FiCalendar,
  FiGlobe,
  FiMessageCircle,
  FiAnchor,
  FiNavigation,
  FiStar,
  FiShield,
  FiClock,
} from "react-icons/fi";

import "./Travel.css";

const WHATSAPP_NUMBER = "919900458068";

const travelServices = [
  {
    number: "01",
    title: "Holiday Packages",
    category: "LEISURE & GETAWAYS",
    description:
      "Discover memorable holidays with thoughtfully planned itineraries, comfortable stays, and experiences tailored to your travel style.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
    icon: FiCompass,
    features: ["Custom itineraries", "Hotel arrangements", "Sightseeing"],
  },
  {
    number: "02",
    title: "Domestic Travel",
    category: "EXPLORE INDIA",
    description:
      "Explore India's incredible destinations, from peaceful hill stations and heritage cities to beaches and cultural escapes.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85",
    icon: FiMapPin,
    features: ["Destination planning", "Transport assistance", "Local experiences"],
  },
  {
    number: "03",
    title: "International Travel",
    category: "BEYOND BORDERS",
    description:
      "Plan international journeys with coordinated travel arrangements, destination guidance, and itinerary support.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85",
    icon: FiGlobe,
    features: ["International itineraries", "Stay coordination", "Travel guidance"],
  },
  {
    number: "04",
    title: "Marine Travel",
    category: "OCEAN & SEA EXPERIENCES",
    description:
      "Explore ocean-inspired escapes and marine travel experiences, with trip planning tailored to your destination and preferences.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
    icon: FiAnchor,
    features: ["Coastal destinations", "Marine experiences", "Sea-side getaways"],
  },
  {
    number: "05",
    title: "Business Travel",
    category: "TRAVEL FOR BUSINESS",
    description:
      "Make business journeys more convenient with coordinated itineraries, accommodation planning, and professional travel assistance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    icon: FiBriefcase,
    features: ["Business itineraries", "Hotel coordination", "Travel assistance"],
  },
  {
    number: "06",
    title: "Group & Family Travel",
    category: "TRAVEL TOGETHER",
    description:
      "Bring everyone together with travel plans designed for families, friends, group holidays, and memorable shared experiences.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
    icon: FiUsers,
    features: ["Group coordination", "Family itineraries", "Shared experiences"],
  },
  {
    number: "07",
    title: "Custom Trip Planning",
    category: "YOUR JOURNEY, YOUR WAY",
    description:
      "Have a destination in mind? Build a personalised journey around your interests, schedule, travel preferences, and budget.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    icon: FiNavigation,
    features: ["Personalised itineraries", "Flexible schedules", "Budget planning"],
  },
];

const marqueeServices = [
  {
    title: "Holiday Packages",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Domestic Travel",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "International Travel",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Marine Travel",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Business Travel",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Family Adventures",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Custom Trip Planning",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Share Your Plan",
    description:
      "Tell us your destination, travel dates, interests, and budget.",
    icon: FiMessageCircle,
  },
  {
    number: "02",
    title: "Explore Options",
    description:
      "Review travel ideas and arrangements suited to your requirements.",
    icon: FiMap,
  },
  {
    number: "03",
    title: "Plan Your Journey",
    description:
      "Coordinate your itinerary and confirm the arrangements you need.",
    icon: FiCalendar,
  },
  {
    number: "04",
    title: "Travel With Confidence",
    description:
      "Get ready for your journey with clear plans and travel guidance.",
    icon: FiNavigation,
  },
];

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Travel() {
  const openGeneralEnquiry = () => {
    const message =
      "HelloSamarth Groups, I would like to enquire about your travel services. Please share more details.";

    window.open(
      createWhatsAppLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="travel-page">
      {/* HERO SECTION */}
      <section className="travel-hero" id="travel-home">
        <div className="travel-hero-background" />

        <div className="travel-hero-overlay" />

        <div className="travel-hero-glow travel-hero-glow-one" />
        <div className="travel-hero-glow travel-hero-glow-two" />

        <div className="travel-container travel-hero-content">
          <motion.div
            className="travel-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="travel-eyebrow">
              <span className="travel-eyebrow-dot" />
              YOUR JOURNEY STARTS HERE
            </div>

            <h1>
              Beyond the Ordinary.
              <br />
              <span>Into the World.</span>
            </h1>

            <p className="travel-hero-description">
              From peaceful getaways to extraordinary adventures,
              discover travel experiences designed around you.
              We help bring your next journey to life.
            </p>

            <div className="travel-hero-actions">
              <button
                type="button"
                className="travel-btn travel-btn-primary"
                onClick={openGeneralEnquiry}
              >
                Plan Your Journey
                <FiArrowRight />
              </button>

              <Link
                to="/contact"
                className="travel-btn travel-btn-outline"
              >
                Talk to Our Team
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="travel-hero-trust">
              <div className="travel-trust-icon">
                <FiCheckCircle />
              </div>
              <div>
                <strong>One journey. Thoughtfully planned.</strong>
                <span>Travel solutions tailored to your needs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="travel-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="travel-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=90"
                alt="Majestic mountain destination"
              />

              <div className="travel-hero-image-shade" />

              <div className="travel-image-caption">
                <span>YOUR NEXT CHAPTER</span>
                <strong>Somewhere extraordinary.</strong>
              </div>
            </div>

            <motion.div
              className="travel-floating-card travel-floating-location"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="travel-floating-icon">
                <FiMapPin />
              </div>
              <div>
                <span>YOUR NEXT DESTINATION</span>
                <strong>Waiting to be explored</strong>
              </div>
            </motion.div>

            <motion.div
              className="travel-floating-card travel-floating-explore"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="travel-floating-explore-icon">
                <FiCompass />
              </div>
              <div>
                <strong>Explore more</strong>
                <span>Travel beyond limits</span>
              </div>
            </motion.div>

            <div className="travel-hero-orbit" />
          </motion.div>
        </div>

        {/* IMAGE-BASED CINEMATIC MARQUEE */}
        <div className="travel-marquee">
          <div className="travel-marquee-heading">
            <span>EXPLORE OUR EXPERIENCES</span>
            <div className="travel-marquee-heading-line" />
          </div>

          <div className="travel-marquee-window">
            <div className="travel-marquee-track">
              {[0, 1].map((group) => (
                <div
                  className="travel-marquee-group"
                  key={group}
                  aria-hidden={group === 1 ? "true" : undefined}
                >
                  {marqueeServices.map((service, index) => (
                    <div
                      className="travel-marquee-card"
                      key={`${group}-${service.title}`}
                    >
                      <img
                        src={service.image}
                        alt=""
                       loading="lazy"
                        draggable="false"
                      />

                      <div className="travel-marquee-card-overlay" />

                      <span className="travel-marquee-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{service.title}</h3>

                      <span className="travel-marquee-arrow">
                        ↗
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="travel-hero-bottom">
          <span>MADE FOR THE JOURNEY</span>
          <span className="travel-hero-bottom-line" />
          <a href="#travel-services">
            DISCOVER MORE <FiArrowRight />
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="travel-intro section-padding">
        <div className="travel-container travel-intro-grid">
          <motion.div
            className="travel-intro-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="travel-section-kicker">
              TRAVEL, YOUR WAY
            </span>

            <h2>
              Every destination has a story.
              <span> Let’s create yours.</span>
            </h2>
          </motion.div>

          <motion.div
            className="travel-intro-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <p>
              Great travel is about more than reaching a destination.
              It is about the experiences you discover, the people
              you meet, and the memories you bring home.
            </p>

            <p>
              Our travel solutions help you organise journeys with
              greater clarity, from choosing a destination to planning
              the details that make your trip special.
            </p>

            <a
              href="#travel-services"
              className="travel-text-link"
            >
              Discover our travel services <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRAVEL SERVICES */}
      <section
        className="travel-services section-padding"
        id="travel-services"
      >
        <div className="travel-container">
          <motion.div
            className="travel-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="travel-section-kicker">
                WHERE WOULD YOU LIKE TO GO?
              </span>

              <h2>
                Find your kind
                <span> of journey.</span>
              </h2>
            </div>

            <p>
              Whether you are travelling for relaxation, business,
              exploration, or a special occasion, let’s plan a journey
              that works for you.
            </p>
          </motion.div>

          <div className="travel-services-grid">
            {travelServices.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <motion.article
                  className="travel-service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.1,
                  }}
                >
                  <div className="travel-service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                     loading="lazy"
                    />

                    <div className="travel-service-image-overlay" />

                    <span className="travel-service-number">
                      {service.number}
                    </span>

                    <span className="travel-service-icon">
                      <ServiceIcon />
                    </span>

                    <span className="travel-service-category">
                      {service.category}
                    </span>
                  </div>

                  <div className="travel-service-body">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <ul className="travel-service-features">
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <FiCheckCircle />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="travel-service-link"
                      onClick={() =>
                        window.open(
                          createWhatsAppLink(
                            `HelloSamarth Groups, I am interested in your ${service.title} service. Please share the available options and details.`
                          ),
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      Enquire Now
                      <FiArrowUpRight />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAVEL EXPERIENCE */}
      <section className="travel-experience section-padding">
        <div className="travel-container travel-experience-grid">
          <motion.div
            className="travel-experience-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="travel-experience-main-image">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
                alt="Scenic destination for a memorable journey"
               loading="lazy"
              />
            </div>

            <div className="travel-experience-secondary-image">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=700&q=85"
                alt="Tropical coastal destination"
               loading="lazy"
              />
            </div>

            <div className="travel-experience-stamp">
              <FiCompass />
              <span>DISCOVER</span>
              <strong>MORE</strong>
            </div>
          </motion.div>

          <motion.div
            className="travel-experience-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="travel-section-kicker">
              THE DIFFERENCE IS IN THE DETAILS
            </span>

            <h2>
              Your plans.
              <br />
              <span>Our travel support.</span>
            </h2>

            <p className="travel-experience-lead">
              Travel should feel exciting, not overwhelming.
              We help you bring the moving pieces together so you
              can focus on the experiences ahead.
            </p>

            <div className="travel-benefits-list">
              <div className="travel-benefit">
                <span className="travel-benefit-icon">
                  <FiUsers />
                </span>
                <div>
                  <h3>Personalised Planning</h3>
                  <p>
                    Travel ideas shaped around your interests,
                    schedule, and preferences.
                  </p>
                </div>
              </div>

              <div className="travel-benefit">
                <span className="travel-benefit-icon">
                  <FiShield />
                </span>
                <div>
                  <h3>Coordinated Arrangements</h3>
                  <p>
                    A clearer view of your itinerary and the
                    arrangements you choose.
                  </p>
                </div>
              </div>

              <div className="travel-benefit">
                <span className="travel-benefit-icon">
                  <FiClock />
                </span>
                <div>
                  <h3>Convenient Coordination</h3>
                  <p>
                    Support with organising your travel details
                    in one planned journey.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="travel-btn travel-btn-dark"
              onClick={openGeneralEnquiry}
            >
              Discuss Your Travel Plans
              <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MARINE TRAVEL FEATURE */}
      <section className="travel-marine">
        <div className="travel-marine-background" />

        <div className="travel-marine-overlay" />

        <div className="travel-container travel-marine-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="travel-marine-kicker">
              <FiAnchor /> BEYOND THE SHORE
            </span>

            <h2>
              Find your escape.
              <br />
              <span>Follow the ocean.</span>
            </h2>

            <p>
              Explore coastal getaways and marine-inspired travel
              experiences with a journey planned around your interests.
            </p>

            <button
              type="button"
              className="travel-btn travel-btn-primary"
              onClick={() =>
                window.open(
                  createWhatsAppLink(
                    "HelloSamarth Groups, I would like to know more about Marine Travel and coastal travel experiences."
                  ),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Explore Marine Travel
              <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="travel-planning section-padding">
        <div className="travel-container">
          <motion.div
            className="travel-section-heading travel-planning-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="travel-section-kicker">
                SIMPLE FROM THE START
              </span>

              <h2>
                From first idea
                <span> to take-off.</span>
              </h2>
            </div>

            <p>
              A straightforward process to help you organise your
              next journey with confidence.
            </p>
          </motion.div>

          <div className="travel-planning-grid">
            {planningSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.div
                  className="travel-planning-step"
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="travel-step-top">
                    <span>{step.number}</span>
                    <StepIcon />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="travel-cta-section">
        <div className="travel-container">
          <motion.div
            className="travel-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="travel-cta-decoration travel-cta-decoration-one" />
            <div className="travel-cta-decoration travel-cta-decoration-two" />

            <div className="travel-cta-copy">
              <span className="travel-section-kicker">
                YOUR NEXT ADVENTURE AWAITS
              </span>

              <h2>
                Where will your
                <br />
                <span>next story begin?</span>
              </h2>

              <p>
                Tell us what you have in mind. Let’s explore the
                possibilities for your next journey.
              </p>
            </div>

            <div className="travel-cta-actions">
              <button
                type="button"
                className="travel-btn travel-btn-primary"
                onClick={openGeneralEnquiry}
              >
                Start Planning
                <FiArrowRight />
              </button>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="travel-cta-phone"
              >
                <FiPhoneCall />
                Speak with our team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <div className="travel-disclaimer">
        <div className="travel-container">
          <FiStar />
          <p>
            Travel services and arrangements are subject to
            availability, destination requirements, and confirmation.
            Please contact our team for current service details.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Travel;
