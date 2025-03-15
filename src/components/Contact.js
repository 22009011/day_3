import React from "react";
import "../App.css";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Our Sales Team will reach out to you ASAP!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <h6>Your Home Town</h6>
        <select>
          <option>Choose</option>
          <option>Pollachi</option>
          <option>Thanjavur</option>
          <option>Chidambaram</option>
        </select>

        <h6>Where would you like to go?</h6>
        <select>
          <option>Choose</option>
          <option>Pollachi</option>
          <option>Thanjavur</option>
          <option>Chidambaram</option>
        </select>

        <label htmlFor="contact">Contact Number</label>
        <input type="tel" id="contact" name="contact" placeholder="Contact Number" required />
        <div>
          <button type="submit">SUBMIT INTEREST</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
