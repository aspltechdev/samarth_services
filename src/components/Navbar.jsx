import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Loans", to: "/loans" },
  { label: "Insurance", to: "/insurance" },
  { label: "Travel", to: "/travel" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Your trusted partner for everyday business services</span>

          <a href="tel:+919904856687">
            <PhoneCall size={14} />
            Call for enquiries
          </a>
        </div>
      </div>

      <div className="navbar container">
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">SBS</span>

          <span className="brand-copy">
            <strong>SAMARTH</strong>
            <small>BUSINESS SOLUTIONS</small>
          </span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}