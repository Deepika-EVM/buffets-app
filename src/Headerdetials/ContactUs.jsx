import React from "react";


const ContactUs = () => {
  return (
    <div className="contact-container">

      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Get in touch with us!</p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p><strong>Email:</strong> support@buffetapp.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Indore, Madhya Pradesh</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;