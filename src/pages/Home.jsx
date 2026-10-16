import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Home.css";
import About from "./About.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import FeaturedServices from "../components/FeaturedServices.jsx";
import TrustSection from "../components/TrustSection.jsx";
import Testimonials from "./Testimonials.jsx";
import ClientMarquee from "./ClientMarquee.jsx";
import Gallery from "../components/Gallery.jsx";
import FinalCTA from "../components/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home-services section-padding">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">WHAT WE OFFER</span>
            <h2>Solutions for Every Step Forward</h2>
            <p>
              Explore our range of business and personal services
              from one convenient destination.
            </p>
          </div>

          <div className="services-grid">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}
          </div>

          <div className="home-services-footer">
            <Link to="/services" className="text-link">
              Explore all services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <ClientMarquee/>
   
      <WhyChooseUs/>
      <HowItWorks/>
      <FeaturedServices/>
      <TrustSection/>
      <Gallery/>
      <Testimonials/>
      <FinalCTA/>


    </>
  );
}