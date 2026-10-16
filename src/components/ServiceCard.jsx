import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className="service-icon">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="service-card-arrow">
          <ArrowUpRight size={20} />
        </span>
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <Link to={service.link} className="service-card-link">
        Explore service
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}