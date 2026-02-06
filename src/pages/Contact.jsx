import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>
          Have questions or need help? Our team at{" "}
          <span className="highlight">ElectroMart</span> is always ready to assist
          you.
        </p>

        <div className="contact-info">
          <div>
            <h3> Address</h3>
            <p>ElectroMart, Ahmedabad, Gujarat, India</p>
          </div>

          <div>
            <h3> Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h3> Email</h3>
            <p>support@electromart.com</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
