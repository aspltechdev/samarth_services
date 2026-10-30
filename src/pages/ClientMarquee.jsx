
// // // import "./ClientMarquee.css";

// // // const clients = [
// // //   "STAR",
// // //   "ICCI",
// // //   "care",
// // //   "HDFC",
// // //   "BAJAJ Allianz",
// // //   "TATA AIG",
// // //   "Reliance",
// // // ];

// // // export default function ClientMarquee() {
// // //   // Duplicate the items so the animation loops seamlessly.
// // //   const marqueeItems = [...clients, ...clients];

// // //   return (
// // //     <section className="client-marquee-section">
// // //       <div className="client-marquee-container">
// // //         <div className="client-marquee-heading">
// // //           <span className="section-kicker">OUR NETWORK</span>
// // //           <h2>Built on Relationships</h2>
// // //           <p>
// // //             Connecting people and businesses with services
// // //             that help them move forward.
// // //           </p>
// // //         </div>

// // //         <div
// // //           className="client-marquee"
// // //           aria-label="Client names"
// // //         >
// // //           <div className="client-marquee-track">
// // //             {marqueeItems.map((client, index) => (
// // //               <div
// // //                 className="client-marquee-item"
// // //                 key={`${client}-${index}`}
// // //                 aria-hidden={index >= clients.length}
// // //               >
// // //                 <span className="client-marquee-dot" />
// // //                 <span>{client}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import { FiArrowUpRight } from "react-icons/fi";
// // import "./ClientMarquee.css";

// // const clients = [
// //   { name: "STAR", style: "star" },
// //   { name: "ICICI", style: "icici" },
// //   { name: "care", style: "care" },
// //   { name: "HDFC", style: "hdfc" },
// //   { name: "BAJAJ Allianz", style: "bajaj" },
// //   { name: "TATA AIG", style: "tata" },
// //   { name: "Reliance", style: "reliance" },
// // ];

// // export default function ClientMarquee() {
// //   const marqueeItems = [...clients, ...clients];

// //   return (
// //     <section className="sm-network">
// //       <div className="sm-network-container">
// //         <div className="sm-network-heading">
// //           <div className="sm-network-heading-copy">
// //             <span className="sm-network-eyebrow">
// //               <span className="sm-network-eyebrow-line" />
// //               OUR NETWORK
// //             </span>

// //             <h2>
// //               Trusted names.
// //               <span> Connected possibilities.</span>
// //             </h2>

// //             <p>
// //               Explore our service network across finance, insurance
// //               and other customer needs.
// //             </p>
// //           </div>

// //           <div className="sm-network-index">
// //             <span>01</span>
// //             <span className="sm-network-index-line" />
// //             <span>NETWORK</span>
// //           </div>
// //         </div>

// //         <div className="sm-network-divider" />

// //         <div
// //           className="sm-network-marquee"
// //           aria-label="Brands in our network"
// //         >
// //           <div className="sm-network-track">
// //             {marqueeItems.map((client, index) => (
// //               <div
// //                 className={`sm-network-card sm-logo-${client.style}`}
// //                 key={`${client.name}-${index}`}
// //                 aria-hidden={index >= clients.length}
// //               >
// //                 <span className="sm-network-logo">
// //                   {client.name}
// //                 </span>
// //                 <FiArrowUpRight
// //                   className="sm-network-card-arrow"
// //                   size={16}
// //                   aria-hidden="true"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="sm-network-footer">
// //           <span className="sm-network-footer-dot" />
// //           <p>
// //             A network of names associated with the services we help
// //             customers explore.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import "./ClientMarquee.css";

// const clients = [
//   {
//     name: "STAR",
//     domain: "starhealth.in",
//   },
//   {
//     name: "ICICI",
//     domain: "icicibank.com",
//   },
//   {
//     name: "Care",
//     domain: "careinsurance.com",
//   },
//   {
//     name: "HDFC",
//     domain: "hdfcbank.com",
//   },
//   {
//     name: "Bajaj Allianz",
//     domain: "bajajallianz.com",
//   },
//   {
//     name: "TATA AIG",
//     domain: "tataaig.com",
//   },
//   {
//     name: "Reliance",
//     domain: "reliancegeneral.co.in",
//   },
// ];

// export default function ClientMarquee() {
//   const marqueeItems = [
//     ...clients.map((client, index) => ({
//       ...client,
//       key: `original-${index}`,
//       duplicate: false,
//     })),
//     ...clients.map((client, index) => ({
//       ...client,
//       key: `duplicate-${index}`,
//       duplicate: true,
//     })),
//   ];

//   return (
//     <section className="sm-network">
//       <div className="sm-network-container">
//         <div className="sm-network-heading">
//           <span className="sm-network-eyebrow">
//             <span className="sm-network-eyebrow-line" />
//             OUR NETWORK
//           </span>

//           <h2>
//             Names you know.
//             <span> Services you can explore.</span>
//           </h2>

//           <p>
//             Explore services across finance, insurance and other
//             customer requirements.
//           </p>
//         </div>
//       </div>

//       <div className="sm-network-marquee">
//         <div className="sm-network-track">
//           {marqueeItems.map((client) => (
//             <div
//               className="sm-network-logo-card"
//               key={client.key}
//               aria-hidden={client.duplicate}
//             >
//               <img
//                 src={`https://logo.clearbit.com/${client.domain}`}
//                 alt={client.duplicate ? "" : client.name}
//                 loading="lazy"
//                 onError={(event) => {
//                   event.currentTarget.style.display = "none";
//                   event.currentTarget.parentElement.classList.add(
//                     "logo-fallback"
//                   );
//                   event.currentTarget.parentElement.dataset.name =
//                     client.name;
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="sm-network-bottom">
//         <span />
//         <p>Our service network, all in one place.</p>
//         <span />
//       </div>
//     </section>
//   );
// }


import "./ClientMarquee.css";

import galaxyHealthLogo from "../assets/gal.png";
import starHealthLogo from "../assets/star.png";
import iciciLogo from "../assets/ic.png";
import careLogo from "../assets/care.png";
import hdfcLogo from "../assets/hdfc.png";
import bajajLogo from "../assets/bajaj.png";
import tataAigLogo from "../assets/tata.png";
import relianceLogo from "../assets/reliance.png";

const clients = [
  {
    name: "Galaxy Health Insurance",
    logo: galaxyHealthLogo,
  },
  {
    name: "Star Health",
    logo: starHealthLogo,
  },
  {
    name: "ICICI",
    logo: iciciLogo,
  },
  {
    name: "Care Health",
    logo: careLogo,
  },
  {
    name: "HDFC",
    logo: hdfcLogo,
  },
  {
    name: "Bajaj Allianz",
    logo: bajajLogo,
  },
  {
    name: "TATA AIG",
    logo: tataAigLogo,
  },
  {
    name: "Reliance",
    logo: relianceLogo,
  },
];

export default function ClientMarquee() {
  const marqueeItems = [...clients, ...clients].map((client, index) => ({
    ...client,
    key: index,
    duplicate: index >= clients.length,
  }));

  return (
    <section className="sm-network">
      <div className="sm-network-container">
        <div className="sm-network-heading">
          <span className="sm-network-eyebrow">
            <span className="sm-network-eyebrow-line" />
            OUR NETWORK
          </span>

          <h2>
            Names you know.
            <span> Services you can explore.</span>
          </h2>

          <p>
            Explore services across finance, insurance and other
            customer requirements.
          </p>
        </div>
      </div>

      <div className="sm-network-marquee">
        <div className="sm-network-track">
          {marqueeItems.map((client) => (
            <div
              className="sm-network-logo-card"
              key={client.key}
              aria-hidden={client.duplicate ? "true" : undefined}
            >
              <img
                src={client.logo}
                alt={client.duplicate ? "" : client.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="sm-network-bottom">
        <span />
        <p>Our service network, all in one place.</p>
        <span />
      </div>
    </section>
  );
}