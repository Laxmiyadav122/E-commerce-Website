import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get Shoping with Us</h1>

      <div className="contact-cards">
        <div className="card">
          <div className="emoji">📍</div>
          <h3>Address</h3>
          <p>
            Pathalgaon, Ambikapur Road<br />
            Jashpur, Chhattisgarh – 496331
          </p>
        </div>

        <div className="card">
          <div className="emoji">📞</div>
          <h3>Phone</h3>
          <p>+91 12345 67890</p>
        </div>

        <div className="card">
          <div className="emoji">✉️</div>
          <h3>Email</h3>
          <p>support@shopsphere.com</p>
        </div>

        <div className="card">
          <div className="emoji">⏰</div>
          <h3>Office Hours</h3>
          <p>Mon – Fri: 9 AM – 5 PM</p>
        </div>
      </div>

      <div className="form-box">
        <h2>Send Us a Message</h2>

        {submitted && (
          <div className="success-msg">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
