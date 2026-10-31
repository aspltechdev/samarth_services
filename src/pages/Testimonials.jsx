
import {
  FiMessageCircle,
  FiArrowRight,

  FiStar,
} from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Testimonials.css";

// Replace these placeholders with genuine customer reviews
// and obtain permission before publishing names or photos.
const testimonials = [
  {
    id: 1,
    name: "Customer Name",
    role: "Customer",
    review:
      "Add a genuine customer review here describing their experience withSamarth Groups.",
    service: "Service Used",
  },
  {
    id: 2,
    name: "Customer Name",
    role: "Customer",
    review:
      "Share authentic feedback about the assistance received, communication and overall service experience.",
    service: "Service Used",
  },
  {
    id: 3,
    name: "Customer Name",
    role: "Customer",
    review:
      "Use a real customer testimonial that explains what was helpful about their interaction with the team.",
    service: "Service Used",
  },
];

export default function Testimonials() {
  return (
    <section className="sbs-testimonials" id="testimonials">
      <div className="sbs-testimonials-container">
        <div className="sbs-testimonials-heading">
          <span className="sbs-testimonials-eyebrow">
            CUSTOMER EXPERIENCES
          </span>

          <h2>
            Every conversation
            <span> starts with listening.</span>
          </h2>

          <p>
            Customer feedback helps us understand what we're doing well
            and where we can improve our service.
          </p>
        </div>

        <div className="sbs-testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="sbs-testimonial-card"
              key={testimonial.id}
            >
              <div className="sbs-testimonial-card-top">
                <span className="sbs-testimonial-quote">
                  <FiMessageSquare size={25} />
                </span>

                <span className="sbs-testimonial-pending">
                  Review placeholder
                </span>
              </div>

              <div
                className="sbs-testimonial-stars"
                aria-label="Rating not yet provided"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>

              <p className="sbs-testimonial-review">
                {testimonial.review}
              </p>

              <div className="sbs-testimonial-divider" />

              <div className="sbs-testimonial-author">
                <div className="sbs-testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="sbs-testimonial-author-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>

                <span className="sbs-testimonial-service">
                  {testimonial.service}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="sbs-testimonials-bottom">
          <div className="sbs-testimonials-bottom-copy">
            <span className="sbs-testimonials-bottom-icon">
              <FiMessageCircle size={23} />
            </span>

            <div>
              <h3>Have you worked with our team?</h3>
              <p>
                We welcome genuine feedback about your experience.
              </p>
            </div>
          </div>

          <Link to="/contact" className="sbs-testimonials-button">
            Share Your Feedback <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
