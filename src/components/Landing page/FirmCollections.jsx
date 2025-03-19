import React, { useState } from "react";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");

  const firmData = [
    {
      firm: [
        {
          _id: "1",
          firmName: "Spice Delight",
          image: "/assets/spice-delight.jpg",
          offer: "20% Off",
          region: ["south-indian"],
          area: "Banjara Hills",
        },
        {
          _id: "2",
          firmName: "Tandoori Flames",
          image: "/assets/tandoori-flames.jpg",
          offer: "15% Off",
          region: ["north-indian"],
          area: "Kukatpally",
        },
        {
          _id: "3",
          firmName: "Chinese Wok",
          image: "/assets/chinese-wok.jpg",
          offer: "10% Off",
          region: ["chinese"],
          area: "Madhapur",
        },
      ],
    },
  ];

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <>
    <div className="hero-box-padding-y">
      <h3>Why Pay More? Get the Best Food Offers Now!</h3>
    </div>
      <div className="filterButtons">
        {[
          { label: "All", region: "All", category: "all" },
          { label: "South-Indian", region: "South-Indian", category: "south-indian" },
          { label: "North-Indian", region: "North-Indian", category: "north-indian" },
          { label: "Chinese", region: "Chinese", category: "chinese" },
          { label: "Bakery", region: "Bakery", category: "bakery" },
        ].map(({ label, region, category }) => (
          <button
            key={category}
            onClick={() => filterHandler(region, category)}
            className={activeCategory === category ? "activeButton" : ""}
          >
            {label}
          </button>
        ))}
      </div>
      <section className="firmSection">
        {firmData.map((vendor) =>
          vendor.firm.map((item) =>
            selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase()) ? (
              <Link to={`/products/${item._id}/${item.firmName}`} className="link" key={item._id}>
                <div className="zoomEffect">
                  <div className="firmGroupBox">
                    <div className="firmGroup">
                      <img src={item.image} alt={item.firmName} />
                      <div className="firmOffer">{item.offer}</div>
                    </div>
                    <div className="firmDetails">
                      <strong>{item.firmName}</strong>
                      <br />
                      <div className="firmArea">{item.region.join(", ")}</div>
                      <div className="firmArea">{item.area}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : null
          )
        )}
      </section>
    </>
  );
};

export default FirmCollections;