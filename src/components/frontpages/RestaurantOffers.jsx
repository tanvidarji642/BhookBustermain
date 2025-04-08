import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/RestaurantOffers.css"; // 👈 Import the CSS

const RestaurantOffers = () => {
  const { id } = useParams();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(`http://localhost:8000/offer/${id}/offers`);
        const data = await response.json();
        setOffers(Array.isArray(data) ? data : []); // 👈 Ensures `.map()` won’t break
        setLoading(false);
      } catch (error) {
        console.error("Error fetching offers:", error);
        setLoading(false);
      }
    };

    fetchOffers();
  }, [id]);

  return (
    <div className="restaurant-offers-container">
      <h2 className="restaurant-offers-title">Offers for this Restaurant</h2>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : offers.length === 0 ? (
        <p className="text-center text-gray-500">No offers found for this restaurant.</p>
      ) : (
        <div className="offer-grid">
          {offers.map((offer) => (
            <div className="offer-card" key={offer._id}>
              <img
                src={offer.image || "/assets/images/default.png"}
                alt={offer.title}
                className="offer-image"
              />
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">
                  {offer.description || "Delicious food offer for you!"}
                </p>
                <p className="offer-discount">
                  {offer.discountPercentage
                    ? `${offer.discountPercentage}% Off`
                    : "Special Offer"}
                </p>
                <p className="offer-validity">
                  Valid: {new Date(offer.startDate).toLocaleDateString()} -{" "}
                  {new Date(offer.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantOffers;
