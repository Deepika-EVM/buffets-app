import React, { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // yaha data show hoga
    alert("Form Submitted Successfully!");

    // optional: reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Get in touch with us!</p>
      </div>

      <div className="contact-content">

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p><strong>Email:</strong> support@buffetapp.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Indore, Madhya Pradesh</p>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;