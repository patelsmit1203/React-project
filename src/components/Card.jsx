import React from 'react';
import './Card.css';
import'./Products.js';

function Card({ courses }) {
  return (
    <div className="card-container">
      {courses.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-info">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="card-footer">
              <span className="price-tag">₹{item.price}</span>
              <button className="order-btn" onClick={() => alert("Your order is booked now!")}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;