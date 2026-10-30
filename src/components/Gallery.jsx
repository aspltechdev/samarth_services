
import { useState } from "react";
import {
  FiArrowUpRight,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Business Meetings",
    category: "Business",
    image: "/gallery/business-meeting.jpg",
  },
  {
    id: 2,
    title: "Customer Services",
    category: "Services",
    image: "/gallery/customer-service.jpg",
  },
  {
    id: 3,
    title: "Travel & Tourism",
    category: "Travel",
    image: "/gallery/travel-tourism.jpg",
  },
  {
    id: 4,
    title: "Financial Services",
    category: "Services",
    image: "/gallery/financial-services.jpg",
  },
  {
    id: 5,
    title: "Our Business Network",
    category: "Business",
    image: "/gallery/business-network.jpg",
  },
  {
    id: 6,
    title: "Customer Connections",
    category: "Events",
    image: "/gallery/customer-connections.jpg",
  },
];

const categories = ["All", "Business", "Services", "Travel", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const showPrevious = () => {
    const index = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (index - 1 + filteredItems.length) % filteredItems.length;

    setSelectedImage(filteredItems[previousIndex]);
  };

  const showNext = () => {
    const index = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    setSelectedImage(
      filteredItems[(index + 1) % filteredItems.length]
    );
  };

  return (
    <section className="sbs-gallery">
      <div className="sbs-gallery-container">
        <div className="sbs-gallery-heading">
          <span className="section-kicker">OUR GALLERY</span>

          <h2>
            Moments That
            <span> Connect Us</span>
          </h2>

          <p>
            Explore our business activities, customer interactions,
            services and memorable moments.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => {
                setActiveCategory(category);
                setSelectedImage(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <button
              type="button"
              className={`gallery-item gallery-item-${index % 6}`}
              key={item.id}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
fetchPriority="high"
  decoding="async"
              />

              <span className="gallery-overlay">
                <span className="gallery-item-info">
                  <span className="gallery-item-category">
                    {item.category}
                  </span>
                  <span className="gallery-item-title">
                    {item.title}
                  </span>
                </span>

                <span className="gallery-open-icon">
                  <FiArrowUpRight size={22} />
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="gallery-note">
          Add your actual business photos to display your work here.
        </p>
      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <FiX size={26} />
          </button>

          <button
            type="button"
            className="gallery-nav gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft size={28} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>

          <button
            type="button"
            className="gallery-nav gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <FiChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
