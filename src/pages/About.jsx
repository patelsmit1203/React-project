import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-card">
        <h1>About ElectroMart</h1>

        <p>
          Welcome to <span className="highlight">ElectroMart</span>, your trusted
          destination for the latest electronics and home appliances. ElectroMart
          is a multi-brand retail company dedicated to providing customers with a
          wide range of high-quality electronic products that enhance everyday
          life.
        </p>

        <p>
          From consumer electronics and home appliances to small gadgets and
          accessories, we offer products that combine innovation, performance,
          and affordability.
        </p>

        <p>
          At ElectroMart, we carefully curate our product lineup to include
          leading global brands and trusted names in technology. Our extensive
          selection helps customers find everything they need — whether it’s a
          new smart device, kitchen appliance, entertainment system, or accessory
          — all in one convenient place.
        </p>

        <h2> = Our Mission</h2>
        <p>
          Our mission is to make quality technology accessible to everyone by
          delivering exceptional products and reliable service. We focus on
          customer satisfaction, easy shopping experiences, and after-sales
          support that you can depend on.
        </p>

        <h2>= What We Offer</h2>
        <ul>
          <li>Wide range of electronics & appliances</li>
          <li>Multi-brand product variety</li>
          <li>Online and offline support</li>
          <li>Flexible payment options</li>
          <li>Convenient home delivery service (terms apply)</li>
        </ul>

        <p>
          Whether you’re upgrading your home, finding the perfect gift, or
          looking for professional-grade electronics,
          <span className="highlight"> ElectroMart</span> has something for
          everyone — backed by a commitment to quality, value, and innovation.
        </p>
      </div>
    </section>
  );
}

export default About;
