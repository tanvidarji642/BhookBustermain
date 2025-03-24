import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/css/FoodPage.css";

// This component will show all details and offers for a specific food category
const FoodDetail = () => {
  const { category } = useParams();
  const [foodOffers, setFoodOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Mock data for food offers - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      // Example offers based on category
      const mockOffers = {
        pizza: [
          { id: 1, title: "Buy 1 Get 1 Free", image: "/assets/item/pizza1.jpg", price: "₹299", description: "Medium size pizza with 2 toppings" },
          { id: 2, title: "Family Pack Special", image: "/assets/item/pizza2.jpg", price: "₹599", description: "Large pizza with unlimited toppings" },
          { id: 3, title: "Weekend Offer", image: "/assets/item/pizza3.jpg", price: "₹399", description: "Medium pizza with soft drink and garlic bread" }
        ],
        burger: [
          { id: 1, title: "Classic Combo", image: "/assets/item/burger1.jpg", price: "₹199", description: "Burger with fries and cola" },
          { id: 2, title: "Double Patty Special", image: "/assets/item/burger2.jpg", price: "₹249", description: "Double patty burger with cheese" }
        ],
        // Add more categories as needed
      };
      
      // If we have offers for this category, use them, otherwise use a default empty array
      setFoodOffers(mockOffers[category] || []);
      setLoading(false);
    }, 500);
  }, [category]);
  
  // Function to format category name for display (convert kebab-case to Title Case)
  const formatCategoryName = (name) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="food-detail-container">
      <div className="food-detail-header">
        <Link to="/" className="back-button">← Back to All Foods</Link>
        <h1>{formatCategoryName(category)} Offers</h1>
      </div>
      
      {foodOffers.length > 0 ? (
        <div className="food-offers-grid">
          {foodOffers.map(offer => (
            <div className="food-offer-card" key={offer.id}>
              <img src={offer.image} alt={offer.title} className="offer-image" />
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p className="offer-price">{offer.price}</p>
                <p className="offer-description">{offer.description}</p>
                <button className="order-button">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-offers">
          <p>No special offers available for {formatCategoryName(category)} at the moment.</p>
          <p>Check back soon for exciting deals!</p>
        </div>
      )}
    </div>
  );
};

export default FoodDetail;  