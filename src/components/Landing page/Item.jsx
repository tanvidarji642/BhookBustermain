import React from "react";

const Item = () => {
  const items = [
    { src: "src/assets/images/pizza.png", alt: "Pizza" },
    { src: "src/assets/images/Burger.png", alt: "Burger" },
    { src: "src/assets/images/Biriyani.png", alt: "Biryani" },
    { src: "src/assets/images/Shake.png", alt: "Shake" },
    { src: "src/assets/images/Samosa.png", alt: "Samosa" },
    { src: "src/assets/images/hinese.png", alt: "Chinese" },



    { src: "/assets/item/Poha.jpg", alt: "Rolls" },

    { src: "src/assets/images/Cake.png", alt: "Cake" },



    
    { src: "/assets/item/cake.jpg", alt: "Dosa" },
    { src: "src/assets/images/food.jpg", alt: "Momos" },
    { src: "/assets/item/coffe.jpg", alt: "Noodles" },
    { src: "/assets/item/tea.jpg", alt: "Kachori" },
    { src: "/assets/item/chaa.jpg", alt: "Chole Bhature" },
    { src: "/assets/item/panjabi.jpg", alt: "Pav Bhaji" },
    { src: "/assets/item/dosa.jpg", alt: "Juice" },
    { src: "/assets/item/idli.jpg", alt: "Pakode" },
    { src: "/assets/item/idli.jpg", alt: "Vada" },
    { src: "/assets/item/idli.jpg", alt: "Pasta" },
    { src: "/assets/item/dal_bati.jpg", alt: "Dal Bati" },
    { src: "/assets/item/gulab_jamun.jpg", alt: "Gulab Jamun" },
    { src: "/assets/item/pani_puri.jpg", alt: "Pani Puri" },
    { src: "/assets/item/rasgulla.jpg", alt: "Rasgulla" },
    { src: "/assets/item/halwa.jpg", alt: "Halwa" },
    { src: "/assets/item/kulfi.jpg", alt: "Kulfi" },
    { src: "/assets/item/malai_chaap.jpg", alt: "Malai Chaap" },
    { src: "/assets/item/paneer_tikka.jpg", alt: "Paneer Tikka" },
    { src: "/assets/item/butter_chicken.jpg", alt: "Butter Chicken" },
    { src: "/assets/item/seekh_kebab.jpg", alt: "Seekh Kebab" },
    { src: "/assets/item/rajma_chawal.jpg", alt: "Rajma Chawal" },
    { src: "/assets/item/spring_rolls.jpg", alt: "Spring Rolls" },
    { src: "/assets/item/masala_dosa.jpg", alt: "Masala Dosa" },
    { src: "/assets/item/chicken_curry.jpg", alt: "Chicken Curry" },
    { src: "/assets/item/mutton_rogan.jpg", alt: "Mutton Rogan Josh" },
    { src: "/assets/item/palak_paneer.jpg", alt: "Palak Paneer" },
    { src: "/assets/item/maggi.jpg", alt: "Maggi" },
    { src: "/assets/item/veg_thali.jpg", alt: "Veg Thali" },
    { src: "/assets/item/non_veg_thali.jpg", alt: "Non-Veg Thali" },
    { src: "/assets/item/sandwich.jpg", alt: "Sandwich" },
    { src: "/assets/item/springroll.jpg", alt: "Spring Roll" },
    { src: "/assets/item/palakpaneer.jpg", alt: "Palak Paneer" },
    { src: "/assets/item/butterchicken.jpg", alt: "Butter Chicken" },
    { src: "/assets/item/rajma.jpg", alt: "Rajma Chawal" },
    { src: "/assets/item/kulcha.jpg", alt: "Amritsari Kulcha" },
    { src: "/assets/item/paneerbuttermasala.jpg", alt: "Paneer Butter Masala" },
    { src: "/assets/item/golgappa.jpg", alt: "Golgappa" },
    { src: "/assets/item/pakora.jpg", alt: "Bhajiya" },
    { src: "/assets/item/khichdi.jpg", alt: "Khichdi" },
    { src: "/assets/item/dhokla.jpg", alt: "Dhokla" },
    { src: "/assets/item/sweet.jpg", alt: "Gulab Jamun" },
    { src: "/assets/item/rasmalai.jpg", alt: "Rasmalai" },
    { src: "/assets/item/halwa.jpg", alt: "Gajar Ka Halwa" },
    { src: "/assets/item/kheer.jpg", alt: "Kheer" },
    { src: "/assets/item/jalebi.jpg", alt: "Jalebi" },
    { src: "/assets/item/lassi.jpg", alt: "Lassi" },
    { src: "/assets/item/malai.jpg", alt: "Rabri" }

   
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