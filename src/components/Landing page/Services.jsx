import React from "react";

const services = [
  { title: "BHOOK DEALS", discount: "60%", img: "🍔" },
  { title: "DINE & SAVE", discount: "40%", img: "🍕" },
  { title: "EASY DINE", discount: "50%", img: "🍽️" },
  { title: "BHOOK GENIE", discount: "Pickup & Drop", img: "🚀" },
];

const Services = () => {
  return (
    <section className="services">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <span className="emoji">{service.img}</span>
          <h3>{service.title}</h3>
          <p>UPTO {service.discount} OFF</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
