
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  CarFront,
  House,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Headset,
  ClipboardCheck,
  MessageCircle,
  Phone,
  Sparkles,
  BadgeCheck,
  Clock3,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Insurance.css";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
import i9 from "../assets/i9.png";

const WHATSAPP_NUMBER = "919900458068";

const slides = [
  {
    eyebrow: "PROTECTION THAT MATTERS",
    title: "Secure What",
    highlight: "Matters Most.",
    description:
      "Comprehensive insurance solutions to protect you, your family, and everything you value.",
    image:
     i1,
    icon: ShieldCheck,
    badge: "Protection for every stage of life",
    features: ["Trusted Guidance", "Flexible Plans", "Personalised Support"],
  },
  {
    eyebrow: "DRIVE WITH CONFIDENCE",
    title: "Every Journey,",
    highlight: "Better Protected.",
    description:
      "Explore motor insurance options for your car or two-wheeler and travel with greater peace of mind.",
    image:
      i2,
    icon: CarFront,
    badge: "Your journey deserves protection",
    features: ["Motor Insurance", "Renewal Assistance", "Reliable Guidance"],
  },
  {
    eyebrow: "PLAN TODAY. PROTECT TOMORROW.",
    title: "Build a Future",
    highlight: "With Confidence.",
    description:
      "Explore health, life, home, and business insurance options suited to your needs and priorities.",
    image:
      i3,
    icon: Building2,
    badge: "Make protection part of your plan",
    features: ["Health & Life", "Home Protection", "Business Coverage"],
  },
];

const insuranceTypes = [
  {
    id: "health",
    title: "Health Insurance",
    subtitle: "Your health comes first",
    description:
      "Explore health insurance options and understand eligible medical and hospitalisation coverage.",
    image:
    i4,
    icon: HeartPulse,
    features: [
      "Individual and family options",
      "Hospitalisation coverage options",
      "Plan comparison assistance",
    ],
  },
  {
    id: "life",
    title: "Life Insurance",
    subtitle: "Plan for tomorrow",
    description:
      "Explore life insurance products for your family's future and long-term financial planning.",
    image:
      i5,
    icon: ShieldCheck,
    features: [
      "Life protection options",
      "Long-term financial planning",
      "Policy comparison guidance",
    ],
  },
  {
    id: "motor",
    title: "Motor Insurance",
    subtitle: "Confidence on every journey",
    description:
      "Explore insurance options for your car or two-wheeler and understand the available coverage.",
    image:
     i6,
    icon: CarFront,
    features: [
      "Car insurance options",
      "Two-wheeler insurance options",
      "Renewal guidance",
    ],
  },
  {
    id: "home",
    title: "Home Insurance",
    subtitle: "Protect your valuable space",
    description:
      "Explore home insurance options for eligible property interests and covered risks.",
    image:
      i7,
    icon: House,
    features: [
      "Property protection options",
      "Coverage comparison",
      "Policy selection assistance",
    ],
  },
  {
    id: "family",
    title: "Family Insurance",
    subtitle: "Protection for loved ones",
    description:
      "Compare available protection options based on your family's requirements and priorities.",
    image:
    i8,
    icon: Users,
    features: [
      "Family protection options",
      "Needs-based plan comparison",
      "Personalised guidance",
    ],
  },
  {
    id: "business",
    title: "Business Insurance",
    subtitle: "Support your business journey",
    description:
      "Explore insurance options for eligible business, commercial property, and operational risks.",
    image:
      i9,
    icon: Building2,
    features: [
      "Business protection options",
      "Commercial coverage guidance",
      "Plan comparison assistance",
    ],
  },
];

const guidanceSteps = [
  {
    number: "01",
    title: "Understand Your Needs",
    description:
      "Discuss your priorities, budget, family requirements, and the type of protection you need.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Compare Available Options",
    description:
      "Review benefits, exclusions, limits, premiums, and conditions of relevant available policies.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Choose With Clarity",
    description:
      "Understand policy details and make an informed decision based on your requirements.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Get Application Support",
    description:
      "Receive assistance with the application process and understand the next steps.",
    icon: Headset,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Personalised Guidance",
    description:
      "Assistance understanding insurance options relevant to your requirements.",
  },
  {
    icon: Wallet,
    title: "Budget-Conscious Choices",
    description:
      "Compare available plans and premiums before making your decision.",
  },
  {
    icon: FileCheck2,
    title: "Clear Policy Information",
    description:
      "Understand important policy terms, limits, and exclusions.",
  },
  {
    icon: Clock3,
    title: "Convenient Assistance",
    description:
      "Get help navigating insurance enquiries and application steps.",
  },
];

const checklist = [
  "Identify the people, assets, or risks you want to protect.",
  "Set a realistic premium budget.",
  "Compare policy benefits, limits, and exclusions.",
  "Review waiting periods, deductibles, and claim conditions.",
  "Read official policy documents before purchasing.",
  "Keep policy documents and renewal dates accessible.",
];

const heroCss = `
.ins-hero {
  --ins-blue: #3185e6;
  position: relative;
  isolation: isolate;
  min-height: 680px;
  height: min(790px, 88vh);
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #fff;
  background: #071323;
}
.ins-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -3;
  background-size: cover;
  background-position: center;
  will-change: transform, opacity;
}
.ins-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(4,15,29,.97) 0%, rgba(4,15,29,.91) 32%, rgba(4,15,29,.59) 54%, rgba(4,15,29,.15) 100%),
    linear-gradient(0deg, rgba(4,15,29,.7), transparent 50%);
}
.ins-hero-container {
  width: min(1240px, calc(100% - 120px));
  margin: 0 auto;
  padding: 90px 0 105px;
  position: relative;
  z-index: 1;
}
.ins-hero-copy { width: min(650px, 66%); }
.ins-hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
  color: #91c7ff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.7px;
}
.ins-hero-eyebrow span { width: 32px; height: 2px; background: #3185e6; }
.ins-hero h1 {
  margin: 0;
  max-width: 750px;
  color: #fff;
  font-size: clamp(45px, 5.5vw, 76px);
  line-height: 1.04;
  letter-spacing: -2.7px;
  font-weight: 800;
}
.ins-hero h1 em { color: #69adff; font-style: normal; }
.ins-hero-description {
  max-width: 540px;
  margin: 23px 0 26px;
  color: rgba(255,255,255,.79);
  font-size: 17px;
  line-height: 1.8;
}
.ins-hero-features { display: flex; flex-wrap: wrap; gap: 12px 22px; margin-bottom: 31px; }
.ins-hero-feature { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; color: #f4f8ff; }
.ins-hero-feature svg { color: #68adff; }
.ins-hero-actions { display: flex; flex-wrap: wrap; gap: 13px; }
.ins-hero-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 53px; padding: 0 22px; border-radius: 9px;
  text-decoration: none; font-size: 14px; font-weight: 700;
  transition: transform .25s, background .25s;
}
.ins-hero-btn:hover { transform: translateY(-3px); }
.ins-hero-btn-primary { color: white; background: linear-gradient(135deg,#3185e6,#075fd3); box-shadow: 0 10px 28px rgba(16,100,221,.25); }
.ins-hero-btn-secondary { color: white; background: rgba(7,20,36,.48); border: 1px solid rgba(125,186,255,.7); backdrop-filter: blur(12px); }
.ins-hero-float {
  position: absolute; right: 0; bottom: 180px; width: 275px;
  display: flex; align-items: center; gap: 13px; padding: 18px;
  border-radius: 16px; color: #132238;
  background: rgba(255,255,255,.92); border: 1px solid rgba(255,255,255,.55);
  box-shadow: 0 20px 60px rgba(0,0,0,.2); backdrop-filter: blur(16px);
}
.ins-hero-float-icon {
  display: grid; place-items: center; flex-shrink: 0;
  width: 49px; height: 49px; border-radius: 13px;
  color: #176fda; background: #e2efff;
}
.ins-hero-float strong { display: block; font-size: 13px; line-height: 1.5; }
.ins-hero-float small { display: block; margin-top: 5px; color: #667184; font-size: 11px; line-height: 1.5; }
.ins-hero-arrow {
  position: absolute; top: 50%; z-index: 5; transform: translateY(-50%);
  display: grid; place-items: center; width: 45px; height: 45px;
  color: white; cursor: pointer; border-radius: 50%;
  border: 1px solid rgba(255,255,255,.3);
  background: rgba(5,18,32,.58); backdrop-filter: blur(10px);
  transition: background .2s;
}
.ins-hero-arrow:hover { background: #3185e6; }
.ins-hero-arrow-left { left: 20px; }
.ins-hero-arrow-right { right: 20px; }
.ins-hero-bottom {
  position: absolute; bottom: 31px; left: 0; right: 0;
  display: flex; align-items: center; justify-content: center;
}
.ins-hero-dots { display: flex; align-items: center; gap: 10px; }
.ins-hero-dot {
  width: 9px; height: 9px; padding: 0; border: 0; border-radius: 20px;
  cursor: pointer; background: rgba(255,255,255,.55); transition: all .3s;
}
.ins-hero-dot.active { width: 27px; background: #3185e6; }
.ins-hero-count { position: absolute; right: 0; color: #fff; font-size: 12px; letter-spacing: 1px; }
.ins-hero-progress { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: rgba(255,255,255,.14); }
.ins-hero-progress > div { height: 100%; background: #3185e6; }
@media (max-width: 900px) {
  .ins-hero { height: auto; min-height: 700px; }
  .ins-hero-container { width: calc(100% - 90px); min-height: 700px; display: flex; flex-direction: column; justify-content: center; }
  .ins-hero-copy { width: 78%; }
  .ins-hero-float { right: 0; bottom: 95px; width: 240px; }
  .ins-hero-overlay { background: linear-gradient(90deg,rgba(4,15,29,.96),rgba(4,15,29,.76) 68%,rgba(4,15,29,.35)),linear-gradient(0deg,rgba(4,15,29,.65),transparent); }
}
@media (max-width: 600px) {
  .ins-hero { min-height: 740px; height: auto; }
  .ins-hero-container { width: calc(100% - 44px); min-height: 740px; padding: 65px 0 170px; }
  .ins-hero-copy { width: 100%; }
  .ins-hero-eyebrow { font-size: 10px; letter-spacing: 1.8px; margin-bottom: 19px; }
  .ins-hero h1 { font-size: clamp(39px, 10vw, 53px); letter-spacing: -1.7px; }
  .ins-hero-description { font-size: 15px; line-height: 1.7; margin: 18px 0 21px; }
  .ins-hero-features { display: grid; gap: 11px; margin-bottom: 24px; }
  .ins-hero-actions { flex-direction: column; }
  .ins-hero-btn { width: 100%; box-sizing: border-box; min-height: 50px; }
  .ins-hero-float { left: 0; right: auto; bottom: 78px; width: min(270px,calc(100% - 40px)); padding: 12px; }
  .ins-hero-arrow { top: auto; bottom: 20px; width: 36px; height: 36px; transform: none; }
  .ins-hero-arrow-left { left: 13px; }
  .ins-hero-arrow-right { right: 13px; }
  .ins-hero-count { display: none; }
  .ins-hero-overlay { background: linear-gradient(90deg,rgba(4,15,29,.94),rgba(4,15,29,.7)),linear-gradient(0deg,rgba(4,15,29,.96),transparent 85%); }
}
`;

function InsuranceHero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const Icon = slide.icon;

  const next = () => setActive((current) => (current + 1) % slides.length);
  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{heroCss}</style>

      <section className="ins-hero" aria-label="Insurance solutions">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            className="ins-hero-bg"
            style={{ backgroundImage: `url("${slide.image}")` }}
            initial={{ scale: 1.08, opacity: 0.65 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0.55 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div className="ins-hero-overlay" />

        <button
          type="button"
          className="ins-hero-arrow ins-hero-arrow-left"
          onClick={previous}
          aria-label="Previous slide"
        >
          <ChevronLeft size={23} />
        </button>

        <div className="ins-hero-container">
          <div className="ins-hero-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <div className="ins-hero-eyebrow">
                  <span />
                  {slide.eyebrow}
                </div>

                <h1>
                  {slide.title}
                  <br />
                  <em>{slide.highlight}</em>
                </h1>

                <p className="ins-hero-description">{slide.description}</p>

                <div className="ins-hero-features">
                  {slide.features.map((feature) => (
                    <div className="ins-hero-feature" key={feature}>
                      <ShieldCheck size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="ins-hero-actions">
                  <Link to="/contact" className="ins-hero-btn ins-hero-btn-primary">
                    Get a Quote <ArrowRight size={19} />
                  </Link>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Samarth Business Solutions, I would like to discuss insurance options.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ins-hero-btn ins-hero-btn-secondary"
                  >
                    <Phone size={18} /> Talk to an Expert
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${active}`}
              className="ins-hero-float"
              initial={{ opacity: 0, x: 25, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.45 }}
            >
              <div className="ins-hero-float-icon">
                <Icon size={26} />
              </div>
              <div>
                <strong>{slide.badge}</strong>
                <small>Guidance to help you explore your options.</small>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="ins-hero-bottom">
            <div className="ins-hero-dots">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  className={`ins-hero-dot ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
            <span className="ins-hero-count">
              0{active + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="ins-hero-arrow ins-hero-arrow-right"
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight size={23} />
        </button>

        <div className="ins-hero-progress">
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

export default function Insurance() {
  const [expandedCard, setExpandedCard] = useState(null);

  const openWhatsApp = (service = "Insurance Enquiry") => {
    const message = `Hello Samarth Business Solutions, I would like to know more about ${service}. Please help me understand the available options.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="insurance-page">
      <InsuranceHero />

      <section className="insurance-intro section-padding">
        <div className="insurance-container insurance-intro-grid">
          <motion.div
            className="insurance-intro-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">
              <Sparkles size={15} /> INSURANCE SOLUTIONS
            </span>

            <h2>
              Protection That Fits <span>Your Life</span>
            </h2>

            <p>
              Insurance is an important part of financial planning. We help
              you explore available options, understand policy features, and
              compare coverage based on your needs.
            </p>

            <p>
              Whether you are looking for health, life, motor, home, family,
              or business insurance, our goal is to make the process easier
              to understand.
            </p>

            <Link to="/contact" className="insurance-text-link">
              Talk to our team <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="insurance-intro-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
              alt="Insurance planning documents"
              loading="lazy"
fetchPriority="high"
  decoding="async"
            />

            <div className="insurance-intro-badge">
              <div className="insurance-intro-badge-icon">
                <ShieldCheck size={25} />
              </div>
              <div>
                <strong>Make informed decisions</strong>
                <span>Understand before you choose</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="insurance-types section-padding" id="insurance-types">
        <div className="insurance-container">
          <motion.div
            className="insurance-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">
              <ShieldCheck size={15} /> OUR INSURANCE CATEGORIES
            </span>

            <h2>
              Explore Our <span>Insurance Solutions</span>
            </h2>

            <p>
              Discover different types of insurance and explore options that
              may suit your personal, family, or business requirements.
            </p>
          </motion.div>

          <div className="insurance-grid">
            {insuranceTypes.map((item, index) => {
              const Icon = item.icon;
              const isExpanded = expandedCard === item.id;

              return (
                <motion.article
                  className="insurance-card"
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="insurance-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="insurance-card-image-overlay" />
                    <div className="insurance-card-icon">
                      <Icon size={24} />
                    </div>
                    <span className="insurance-card-number">0{index + 1}</span>
                  </div>

                  <div className="insurance-card-content">
                    <span className="insurance-card-subtitle">
                      {item.subtitle}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    {isExpanded && (
                      <motion.ul
                        className="insurance-card-features"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                      >
                        {item.features.map((feature) => (
                          <li key={feature}>
                            <CheckCircle2 size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}

                    <div className="insurance-card-actions">
                      <button
                        type="button"
                        className="insurance-card-learn"
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : item.id)
                        }
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Show Less" : "Explore Benefits"}
                        <ArrowRight
                          size={17}
                          className={isExpanded ? "rotate-arrow" : ""}
                        />
                      </button>

                      <button
                        type="button"
                        className="insurance-card-enquire"
                        onClick={() => openWhatsApp(item.title)}
                        aria-label={`Enquire about ${item.title}`}
                      >
                        <MessageCircle size={18} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insurance-benefits section-padding">
        <div className="insurance-container">
          <motion.div
            className="insurance-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">
              WHY SAMARTH BUSINESS SOLUTIONS
            </span>
            <h2>
              Insurance Guidance, <span>Made Simpler</span>
            </h2>
            <p>
              Get assistance understanding your options and navigating the
              next steps.
            </p>
          </motion.div>

          <div className="insurance-benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  className="insurance-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="insurance-benefit-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insurance-guidance section-padding">
        <div className="insurance-container insurance-guidance-layout">
          <motion.div
            className="insurance-guidance-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">YOUR INSURANCE JOURNEY</span>
            <h2>
              From Questions to <span>Informed Choices</span>
            </h2>
            <p>
              Our process helps you review your requirements and understand
              available options before deciding.
            </p>

            <button
              type="button"
              className="insurance-guidance-button"
              onClick={() => openWhatsApp("Insurance Consultation")}
            >
              Get Personalised Guidance <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="insurance-guidance-steps">
            {guidanceSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="insurance-guidance-step"
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="insurance-step-number">{step.number}</div>
                  <div className="insurance-step-icon">
                    <Icon size={22} />
                  </div>
                  <div className="insurance-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="insurance-checklist section-padding">
        <div className="insurance-container insurance-checklist-grid">
          <motion.div
            className="insurance-checklist-image"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"
              alt="Reviewing insurance and financial documents"
              loading="lazy"
fetchPriority="high"
  decoding="async"
            />
            <div className="insurance-checklist-image-label">
              <ShieldCheck size={21} />
              <span>Choose with confidence</span>
            </div>
          </motion.div>

          <motion.div
            className="insurance-checklist-content"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">BEFORE YOU CHOOSE</span>
            <h2>
              Your Insurance <span>Checklist</span>
            </h2>
            <p>
              Review these important points to help you make a more informed
              decision before selecting a policy.
            </p>

            <ul className="insurance-checklist-list">
              {checklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="insurance-checklist-button"
              onClick={() => openWhatsApp("Insurance Plan Comparison")}
            >
              Discuss Your Requirements <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="insurance-cta">
        <div className="insurance-cta-glow" />
        <div className="insurance-container insurance-cta-inner">
          <motion.div
            className="insurance-cta-content"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="insurance-eyebrow">
              LET'S FIND THE RIGHT OPTIONS
            </span>
            <h2>
              A Little Guidance Today.
              <span> Greater Confidence Tomorrow.</span>
            </h2>
            <p>
              Tell us what you need to protect. Our team can help you explore
              available insurance options and understand the next steps.
            </p>

            <div className="insurance-cta-actions">
              <Link to="/contact" className="insurance-cta-primary">
                Contact Our Team <ArrowRight size={19} />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Samarth Business Solutions, I would like assistance exploring insurance options.")}`}
                target="_blank"
                rel="noreferrer"
                className="insurance-cta-secondary"
              >
                <Phone size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="insurance-disclaimer">
        <div className="insurance-container">
          <ShieldCheck size={19} />
          <p>
            Insurance coverage, eligibility, premiums, exclusions, waiting
            periods, and claim settlements are subject to the respective
            insurer's policy terms and conditions. Review official policy
            documents before purchasing. Coverage and claims are determined
            by the insurer.
          </p>
        </div>
      </section>
    </main>
  );
}
