import React from "react";


const AboutUs = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About BuffetApp</h1>
        <p>
          Discover the best Unlimited Buffet and Combo offers in Indore.
          We help food lovers find amazing deals at cafes, restaurants,
          and food outlets across the city.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make it easy for users to explore and book
          the best food offers available in their city. We connect
          customers with restaurants offering exciting buffet and combo deals.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Best Deals</h3>
            <p>We list the most affordable and trending buffet offers.</p>
          </div>

          <div className="about-card">
            <h3>Easy Search</h3>
            <p>Search by restaurant name, offer type, or location easily.</p>
          </div>

          <div className="about-card">
            <h3>Trusted Restaurants</h3>
            <p>We partner with verified and quality restaurants.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="about-section">
        <h2>Contact Information</h2>
        <p>Email: support@buffetapp.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Indore, Madhya Pradesh</p>
      </section>

    </div>
  );
};

export default AboutUs;