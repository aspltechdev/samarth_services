// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, PhoneCall } from "lucide-react";
// import "./Navbar.css";

// const navItems = [
//   { label: "Home", to: "/" },
//   { label: "About Us", to: "/about" },
//   { label: "Loans", to: "/loans" },
//   { label: "Insurance", to: "/insurance" },
//   { label: "Travel", to: "/travel" },
//     { label: "RTO ", to: "/services" },
//   { label: "E-Services", to: "/e-services" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="site-header">
//       <div className="top-strip">
//         <div className="container top-strip-inner">
//           <span>Your trusted partner for everyday business services</span>

//           <a href="tel:+919900458068">
//             <PhoneCall size={14} />
//             Call for enquiries
//           </a>
//         </div>
//       </div>

//       <div className="navbar container">
//         <Link
//           to="/"
//           className="brand"
//           onClick={() => setOpen(false)}
//         >
//           <span className="brand-mark">SBS</span>

//           <span className="brand-copy">
//             <strong>SAMARTH</strong>
//             <small>BUSINESS SOLUTIONS</small>
//           </span>
//         </Link>

//         <button
//           className="mobile-menu"
//           onClick={() => setOpen(!open)}
//           aria-label={open ? "Close menu" : "Open menu"}
//         >
//           {open ? <X /> : <Menu />}
//         </button>

//         <nav className={open ? "nav-links nav-open" : "nav-links"}>
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end={item.to === "/"}
//               onClick={() => setOpen(false)}
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Loans", to: "/loans" },
  { label: "Insurance", to: "/insurance" },
  { label: "Travel", to: "/travel" },
  { label: "RTO", to: "/services" },
  { label: "E-Services", to: "/e-services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>
            Your trusted partner for everyday business services
          </span>

          <a href="tel:+919900458068" className="top-call">
            <PhoneCall size={14} />
            <span>Call for enquiries</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="navbar container">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Samarth Business Solutions home"
        >
          <img
            src={logo}
            alt="Samarth Business Solutions logo"
            className="brand-logo"
          />

          <span className="brand-copy">
            <strong>SAMARTH</strong>
            <small>Groups</small>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
