
import "./ClientMarquee.css";

const clients = [
  "STAR",
  "ICCI",
  "care",
  "HDFC",
  "BAJAJ Allianz",
  "TATA AIG",
  "Reliance",
];

export default function ClientMarquee() {
  // Duplicate the items so the animation loops seamlessly.
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="client-marquee-section">
      <div className="client-marquee-container">
        <div className="client-marquee-heading">
          <span className="section-kicker">OUR NETWORK</span>
          <h2>Built on Relationships</h2>
          <p>
            Connecting people and businesses with services
            that help them move forward.
          </p>
        </div>

        <div
          className="client-marquee"
          aria-label="Client names"
        >
          <div className="client-marquee-track">
            {marqueeItems.map((client, index) => (
              <div
                className="client-marquee-item"
                key={`${client}-${index}`}
                aria-hidden={index >= clients.length}
              >
                <span className="client-marquee-dot" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
