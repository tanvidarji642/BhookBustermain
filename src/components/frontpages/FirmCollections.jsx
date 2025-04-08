import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/FlipCard.css"; 

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // <div
    //   className="flip-card"
    //   onClick={() => setIsFlipped((prev) => !prev)}
    // >
    //   <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
    //     <div className="flip-card-front">
    //       {frontContent}
    //     </div>
    //     <div className="flip-card-back">
    //       {backContent}
    //     </div>
    //   </div>
    // </div>
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>

  );
};

const FirmCollections = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");
  const [firmData, setFirmData] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  useEffect(() => {
    const fetchFirmData = async () => {
      try {
        const response = await fetch("http://localhost:8000/locations");
        const data = await response.json();
        setFirmData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setLoading(false);
      }
    };

    fetchFirmData();
  }, []);

  return (
    <>
      <div className="hero-box-main-container">
        <h3 className="text-main">
          Why Pay More? Get the Best Food Offers Now!
        </h3>
      </div>

      <div className="filterButtons">
        {[
          // { label: "All", region: "All", category: "all" },
          // { label: "South-Indian", region: "South-Indian", category: "south-indian" },
          // { label: "North-Indian", region: "North-Indian", category: "north-indian" },
          // { label: "Chinese", region: "Chinese", category: "chinese" },
          // { label: "Bakery", region: "Bakery", category: "bakery" },
        ].map(({ label, region, category }) => (
          <button
            key={category}
            onClick={() => filterHandler(region, category)}
            className={`border ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600"
            } transition duration-300`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="firmSection">
        {loading ? (
          <p>Loading offers...</p>
        ) : (
          firmData
            .filter(
              (item) =>
                selectedRegion === "All" ||
                item.category?.toLowerCase().includes(selectedRegion.toLowerCase())
            )
            .map((item) => {
              const firmName = item.firmName || item.title;
              const image = item.image || "/assets/images/default.png"; // Default image fallback
              const offer = item.offer || "10% Off";
              const area = item.area || item.address || "Unknown";

              return (
                <FlipCard
                  key={item._id}
                  frontContent={
                    <div className="items-center">
                      <img
                        src={image}
                        alt={firmName}
                        className="object-cover"
                      />
                      <strong className="text-lg">{firmName}</strong>
                      <div className="text-sm">{area}</div>
                      <div className="text-redfont-bold">{offer}</div>
                    </div>
                  }
                  backContent={
                    <div className="items-center">
                      <h4 className="text-lg">{firmName}</h4>
                      <p className="text-gray">
                        {item.description || "Enjoy delicious food at great discounts!"}
                      </p>
                      {/* <Link
                        to={`/restaurant/${item._id}/offers`}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                      >
                        View All Offers
                      </Link> */}
                      <Link to={`/restaurant/${item._id}/offers`}
                      className="rounded-hover"
                      >
                        View All Offers
                      </Link>
                    </div>
                  }
                />
              );
            })
        )}
      </section>
    </>
  );
};

export default FirmCollections;

