// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Handshake,
//   Headset,
//   CheckCircle2,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import "./Hero.css";

// const benefits = [
//   "Multiple services, one destination",
//   "Personalised customer assistance",
//   "Simple and convenient enquiries",
// ];

// export default function Hero() {
//   return (
//     <section className="hero-section">
//       <div className="hero-background-shape shape-one" />
//       <div className="hero-background-shape shape-two" />

//       <div className="container hero-layout">
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="hero-eyebrow">
//             <span className="eyebrow-dot" />
//             YOUR TRUSTED BUSINESS PARTNER
//           </div>

//           <h1>
//             Your Goals.
//             <br />
//             <span>Our Solutions.</span>
//             <br />
//             One Trusted Partner.
//           </h1>

//           <p className="hero-description">
//             From loans and insurance to travel, vehicle rentals,
//             courier services and real estate, Samarth Business
//             Solutions helps you explore services that meet your needs.
//           </p>

//           <div className="hero-actions">
//             <Link to="/services" className="hero-primary-button">
//               Explore Our Services
//               <ArrowRight size={18} />
//             </Link>

//             <Link to="/contact" className="hero-secondary-button">
//               Talk to Our Team
//             </Link>
//           </div>

//           <div className="hero-benefits">
//             {benefits.map((benefit) => (
//               <div className="hero-benefit" key={benefit}>
//                 <CheckCircle2 size={17} />
//                 <span>{benefit}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="hero-visual"
//           initial={{ opacity: 0, scale: 0.94 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="hero-image-frame">
//             <img
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
//               alt="Modern commercial buildings representing business growth"
//             />

//             <div className="hero-image-overlay" />

//             <div className="hero-image-caption">
//               <span className="caption-icon">
//                 <Handshake size={25} />
//               </span>

//               <div>
//                 <strong>Solutions that work for you</strong>
//                 <span>One destination. Multiple services.</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-floating-card floating-card-top">
//             <span className="floating-icon">
//               <ShieldCheck size={23} />
//             </span>
//             <div>
//               <strong>Trusted Guidance</strong>
//               <small>Support for your next step</small>
//             </div>
//           </div>

//           <div className="hero-floating-card floating-card-bottom">
//             <span className="floating-icon headset-icon">
//               <Headset size={23} />
//             </span>
//             <div>
//               <strong>Customer Support</strong>
//               <small>Here to help you enquire</small>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="hero-bottom-line" />
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiDollarSign,
  FiShield,
  FiSend,
  FiTruck,
  FiPackage,
  FiHome,
  FiFileText,
  FiBriefcase,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    eyebrow: "YOUR TRUSTED BUSINESS PARTNER",
    title: "Multiple Services.",
    accent: "One Destination.",
    ending: "For a Better Tomorrow.",
    description:
      "From loans and insurance to travel, vehicle rentals, courier services and real estate, discover solutions for your personal and business needs.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
    number: "01",
    color: "#176bc1",
  },
  {
    eyebrow: "FINANCIAL SOLUTIONS",
    title: "Make Your Next",
    accent: "Move With Confidence.",
    ending: "Start Exploring Today.",
    description:
      "Explore available loan and insurance options with guidance to help you understand your choices and next steps.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
    number: "02",
    color: "#2876c9",
  },
  {
    eyebrow: "TRAVEL WITHOUT LIMITS",
    title: "Every Journey.",
    accent: "A Better Experience.",
    ending: "Let Your Plans Begin.",
    description:
      "Explore travel assistance, tourism services and vehicle rental options to help plan your next journey.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90",
    number: "03",
    color: "#178aaf",
  },
  {
    eyebrow: "SOLUTIONS FOR BUSINESSES",
    title: "Your Business.",
    accent: "Our Support.",
    ending: "Move Forward Together.",
    description:
      "From courier and cargo to real estate and other business services, connect with us to explore the support you need.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90",
    number: "04",
    color: "#176bc1",
  },
];

const benefits = [
  "Multiple services, one destination",
  "Personalised customer assistance",
  "Simple and convenient enquiries",
];

const services = [
  { title: "Loans & Finance", icon: FiDollarSign, link: "/loans" },
  { title: "Insurance", icon: FiShield, link: "/insurance" },
  { title: "Travel & Tourism", icon: FiSend, link: "/travel" },
  { title: "RTO Services", icon: FiTruck, link: "/services" },
  { title: "Courier & Cargo", icon: FiPackage, link: "/services" },
  { title: "Real Estate", icon: FiHome, link: "/services" },
  { title: "E-Stamp Services", icon: FiFileText, link: "/services" },
  { title: "Business Services", icon: FiBriefcase, link: "/contact" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(nextSlide, 7000);

    return () => window.clearInterval(timer);
  }, [activeSlide, isPaused]);

  return (
    <section
      className="cinematic-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Cinematic backgrounds */}
      <div className="cinematic-backgrounds">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.image}
            className="cinematic-background"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url("${currentSlide.image}")`,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="cinematic-overlay" />
      <div className="cinematic-grain" />



      {/* Main slide */}
      <div className="cinematic-main">
        <AnimatePresence mode="wait">
          <motion.div
            className="cinematic-copy"
            key={currentSlide.number}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
        

            <div className="cinematic-eyebrow">
              <span />
              {currentSlide.eyebrow}
            </div>

            <h1>
              {currentSlide.title}
              <br />
              <span style={{ color: currentSlide.color }}>
                {currentSlide.accent}
              </span>
              <br />
              {currentSlide.ending}
            </h1>

            <p className="cinematic-description">
              {currentSlide.description}
            </p>

            <div className="cinematic-actions">
              <Link to="/services" className="cinematic-primary">
                Explore Our Services
                <FiArrowRight size={19} />
              </Link>

              <Link to="/contact" className="cinematic-secondary">
                Talk to Our Team
              </Link>
            </div>

            <div className="cinematic-benefits">
              {benefits.map((benefit) => (
                <div key={benefit} className="cinematic-benefit">
                  <FiCheckCircle size={17} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider controls */}
        <div className="cinematic-controls">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="cinematic-pagination">
            {slides.map((slide, index) => (
              <button
                key={slide.number}
                type="button"
                className={index === activeSlide ? "active" : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Bottom service selector */}
      <div className="cinematic-services">
        <div className="cinematic-services-heading">
          <span>DISCOVER WHAT WE DO</span>
          <small>Explore our services</small>
        </div>

        <div className="cinematic-services-track">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                to={service.link}
                className="cinematic-service-card"
                key={service.title}
                style={{ "--service-index": index }}
              >
                <span className="cinematic-service-icon">
                  <Icon size={23} />
                </span>

                <span className="cinematic-service-title">
                  {service.title}
                </span>

                <span className="cinematic-service-arrow">
                  <FiArrowRight size={17} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
