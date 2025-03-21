import React from "react";

const Item = () => {
  const items = [
    {src:  "src/assets/images/pizza-removebg.png",alt:"food"},
    {src:  "src/assets/images/food.jpg",alt:"food"},
    { src: "src/assets/images/pizza.jpg", alt: "Juice" },
    { src: "/assets/item/Pancake.jpg", alt: "Pancake" },
    { src: "/assets/item/Paratha.jpg", alt: "Paratha" },
    { src: "/assets/item/Poha.jpg", alt: "Poha" },
    { src: "/assets/item/Poori.jpg", alt: "Poori" },
    { src: "/assets/item/Vada.jpg", alt: "Vada" },
    { src: "/assets/item/cake.jpg", alt: "Cake" },
    {src:  "src/assets/images/food.jpg",alt:"food"},
    { src: "/assets/item/coffe.jpg", alt: "coffe" },
    { src: "/assets/item/tea.jpg", alt: "tea" },
    { src: "/assets/item/chaa.jpg", alt: "chaa" },
    { src: "/assets/item/panjabi.jpg", alt: "panjabii" },
    { src: "/assets/item/dosa.jpg", alt: "dosa" },
    { src: "/assets/item/idli.jpg", alt: "idli" }
    
  ];

  return (
    <section className="item-container">
      <div className="item-grid">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.src} alt={item.alt} className="item-image" />
            <h3>{item.alt}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Item;