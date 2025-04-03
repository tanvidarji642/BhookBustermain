import React from "react";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();
  
  const items = [
    { src: "src/assets/images/pizza.png" , alt: "Pizza", category: "pizza" },
    { src: "src/assets/images/Burger.png", alt: "Burger", category: "burger" },
    { src: "src/assets/images/Biriyani.png", alt: "Biryani", category: "biryani" },
    { src: "src/assets/images/Shake.png", alt: "Shake", category: "shake" },
    { src: "src/assets/images/Chinese.png", alt: "Chinese", category: "chinese" },
    { src: "src/assets/items/Choll.png", alt: "Cholle", category: "cholle" },
    { src: "src/assets/images/Cake.png", alt: "Cake", category: "cake" },
    { src: "src/assets/images/Dosa.png", alt: "Dosa", category: "dosa" },
    { src: "src/assets/Items/Biryani-removebg-preview.png", alt: "Biryani", category: "biryani" },
    { src: "src/assets/Items/cake-removebg-preview.png", alt: "Cake", category: "cake" },
    { src: "src/assets/Items/Desserts-removebg-preview.png", alt: "Desserts", category: "desserts" },
    { src: "src/assets/Items/Khichdi-removebg-preview.png", alt: "Khichdi", category: "khichdi" },
    { src: "src/assets/Items/Pizzas-removebg-preview.png", alt: "Pizzas", category: "Pizzas" },
    { src: "src/assets/Items/Poori-removebg-preview.png", alt: "Poori", category: "poori" },
    { src: "src/assets/Items/Chinese2-removebg-preview.png", alt: "Chinese2", category: "chinese2" },
    { src: "src/assets/Items/tea-removebg-preview.png", alt: "Tea", category: "tea" },
    { src: "src/assets/Items/coffee-removebg-preview.png", alt: "Coffee", category: "coffee" },
    { src: "src/assets/Items/Salad-1-removebg-preview.png", alt: "Salad", category: "salad" },
    { src: "src/assets/Items/cutlet-removebg-preview.png", alt: "Cutlet", category: "cutlet" },
    { src: "src/assets/Items/Noodles-removebg-preview.png", alt: "Noodles", category: "noodles" },


    { src: "/assets/item/butterchicken.jpg", alt: "Butter Chicken", category: "butter-chicken" },
    { src: "/assets/item/rajma.jpg", alt: "Rajma Chawal", category: "rajma-chawal" },
    { src: "/assets/item/kulcha.jpg", alt: "Amritsari Kulcha", category: "amritsari-kulcha" },
    { src: "/assets/item/paneerbuttermasala.jpg", alt: "Paneer Butter Masala", category: "paneer-butter-masala" },
    { src: "/assets/item/golgappa.jpg", alt: "Golgappa", category: "golgappa" },
    { src: "/assets/item/lassi.jpg", alt: "Lassi", category: "lassi" },
    { src: "/assets/item/malai.jpg", alt: "Rabri", category: "rabri" },

    { src: "src/assets/images/Samosa.png", alt: "Samosa", category: "samosa" }

  ];

  const handleItemClick = (category) => {
    navigate(`/food/${category}`);
  };

  return (
    <section className="item-container">
      <div className="item-grid">
        {items.map((item, index) => (
          <div 
            className="item-card" 
            key={index} 
            onClick={() => handleItemClick(item.category)}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.src} alt={item.alt} className="item-image" />
            <h3>{item.alt}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Item;