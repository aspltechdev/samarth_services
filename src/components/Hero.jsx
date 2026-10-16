import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Headset,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

const benefits = [
  "Multiple services, one destination",
  "Personalised customer assistance",
  "Simple and convenient enquiries",
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-shape shape-one" />
      <div className="hero-background-shape shape-two" />

      <div className="container hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            YOUR TRUSTED BUSINESS PARTNER
          </div>

          <h1>
            Your Goals.
            <br />
            <span>Our Solutions.</span>
            <br />
            One Trusted Partner.
          </h1>

          <p className="hero-description">
            From loans and insurance to travel, vehicle rentals,
            courier services and real estate, Samarth Business
            Solutions helps you explore services that meet your needs.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="hero-primary-button">
              Explore Our Services
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="hero-secondary-button">
              Talk to Our Team
            </Link>
          </div>

          <div className="hero-benefits">
            {benefits.map((benefit) => (
              <div className="hero-benefit" key={benefit}>
                <CheckCircle2 size={17} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
              alt="Modern commercial buildings representing business growth"
            />

            <div className="hero-image-overlay" />

            <div className="hero-image-caption">
              <span className="caption-icon">
                <Handshake size={25} />
              </span>

              <div>
                <strong>Solutions that work for you</strong>
                <span>One destination. Multiple services.</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card floating-card-top">
            <span className="floating-icon">
              <ShieldCheck size={23} />
            </span>
            <div>
              <strong>Trusted Guidance</strong>
              <small>Support for your next step</small>
            </div>
          </div>

          <div className="hero-floating-card floating-card-bottom">
            <span className="floating-icon headset-icon">
              <Headset size={23} />
            </span>
            <div>
              <strong>Customer Support</strong>
              <small>Here to help you enquire</small>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}