import { Link } from "react-router-dom";
import "./Header.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">⚡ ElectroMart</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;
