import React, { useState } from "react";


const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [offerType, setOfferType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState([]);

  const offers = [
    {
      id: 1,
      name: "Apna Sweets",
      type: "Unlimited",
      items: 50,
      price: 399,
      category: "Veg",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 2,
      name: "54 Praangan",
      type: "Combo",
      items: 50,
      price: 199,
      category: "Non-Veg",
      image:
        "https://ik.imagekit.io/Bookmybuffet111/uploads/brunchImage/b0dd779ba767d40c70ba21c10e1ae2f4.jpeg?tr=f-auto,q-auto/ik-seo",
    },
    {
      id: 3,
      name: "Shreemaya Celebration",
      type: "Unlimited",
      price: 399,
      items: 50,
      category: "Veg",
      image:
        "https://ik.imagekit.io/Bookmybuffet111/Homepage-slider/BUffet1..jpg?updatedAt=1770556254874",
    },
    {
      id: 4,
      name: "O2 Cafe",
      type: "Combo",
      price: 199,
      items: 50,
      category: "Non-Veg",
      image:
        "https://ik.imagekit.io/Bookmybuffet111/uploads/breakFastImage/38b7bf5baab6d5e0cd77610370b44648.jpeg?tr=f-auto,q-auto/ik-seo",
    },
    {
      id: 5,
      name: "The Creative Kitchen",
      type: "Unlimited",
      price: 399,
      items: 50,
      category: "Veg",
      image:
        "https://ik.imagekit.io/Bookmybuffet111/uploads/lunchImage/c8cec0935d648c8a5b9cb7824186fc99.jpeg?tr=f-auto,q-auto/ik-seo",
    },
  ];

  const handleSearch = () => {
    const filtered = offers.filter((item) => {
      const nameMatch = searchTerm
        ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const typeMatch = offerType ? item.type === offerType : true;

      const categoryMatch = category ? item.category === category : true;

      const priceMatch = priceRange
        ? priceRange === "0-199"
          ? item.price <= 199
          : priceRange === "200-399"
          ? item.price >= 200 && item.price <= 399
          : item.price >= 400
        : true;

      return nameMatch && typeMatch && categoryMatch && priceMatch;
    });

    setResults(filtered);
  };

  return (
    <div
      className="banner"
    >
      <div className="banner-content" style={{
        backgroundImage:
          "url('https://ik.imagekit.io/Bookmybuffet111/Homepage-slider/BUffet1..jpg?updatedAt=1770556254874')",
      }}>
        <h1>Find Best Buffet Offers in Indore</h1>
        <p>Search unlimited buffet and combo deals at top restaurants</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search restaurant / cafe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
          >
            <option value="">All Offers</option>
            <option value="Unlimited">Unlimited Buffet</option>
            <option value="Combo">Combo Offer</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="0-199">Under ₹200</option>
            <option value="200-399">₹200 - ₹399</option>
            <option value="400-999">Above ₹400</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
<h1>All Offers & Combo</h1>
{results.length > 0 && (
  <div className="search-results">
    {results.map((item) => (
      <div key={item.id} className="result-card">
        <img className="search-results-image" src={item.image} alt={item.name} />
        <div className="card-content">
          <h3>{item.name}</h3>
          <p className="search-results-price">Price: ₹{item.price}</p>
          <p className="search-results-Offer">Offer: {item.type}</p>
          <p className="search-results-items">Items: {item.items}+</p>
          <p className="search-results-Category">Category: {item.category || "N/A"}</p>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  );
};

export default Banner;