
import { FiMessageCircle, FiX } from "react-icons/fi";
import { useState } from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  // Replace with the client's verified WhatsApp number.
  const phoneNumber = "919900458068";

  const message = encodeURIComponent(
    "Hello Samarth Business Solutions! I would like to know more about your services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-widget">
      {showMessage && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <div className="whatsapp-popup-icon">
              <FiMessageCircle size={22} />
            </div>

            <div>
              <strong>Samarth Business Solutions</strong>
              <span>How can we help you?</span>
            </div>

            <button
              type="button"
              className="whatsapp-popup-close"
              onClick={() => setShowMessage(false)}
              aria-label="Close WhatsApp message"
            >
              <FiX size={18} />
            </button>
          </div>

          <p>
            Looking for loans, insurance, travel or other services?
            Send us your enquiry on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-popup-button"
          >
            <FiMessageCircle size={18} />
            Start a conversation
          </a>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-floating-button"
        onClick={() => setShowMessage((current) => !current)}
        aria-label={
          showMessage ? "Close WhatsApp contact" : "Open WhatsApp contact"
        }
        aria-expanded={showMessage}
      >
        {showMessage ? (
          <FiX size={25} />
        ) : (
          <FiMessageCircle size={26} />
        )}
      </button>
    </div>
  );
}
