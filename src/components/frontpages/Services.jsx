import React from "react";

const services = [
  { title: "BHOOK DEALS", discount: "60%", img: "🍔" },
  { title: "DINE & SAVE", discount: "40%", img: "🍕" },
  { title: "EASY DINE", discount: "50%", img: "🍽️" },
  { title: "BHOOK GENIE", discount: "Pickup & Drop", img: "🚀" },
];

const Services = () => {
  return (
    // <section className="services">
    //   {services.map((service, index) => (
    //     <div key={index} className="service-card">
    //       <span className="emoji">{service.img}</span>
    //       <h3>{service.title}</h3>
    //       <p>UPTO {service.discount} OFF</p>
    //     </div>
    //   ))}
    // </section>
    <div className="features-section">
        <h2>How Bhookh Buster Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Discover</h3>
            <p>Find the best restaurant deals and offers in your vicinity with our advanced search options.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Save</h3>
            <p>Get exclusive discounts and offers from your favorite restaurants and eateries.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Contribute</h3>
            <p>Add offers you've discovered to help other food enthusiasts in the community.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Review</h3>
            <p>Rate and review offers to help others make informed decisions.</p>
          </div>
        </div>
      </div>
  );
};

export default Services;
