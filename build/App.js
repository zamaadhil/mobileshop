import React, { useState } from "react";
import earbuds from "./images/earbuds.png";
import phoneCase from "./images/phone-case.png";
import powerBank from "./images/power-bank.png";
import screenProtector from "./images/screen-protector.png";
import logo from "./images/logo.png";

const App = () => {
  const accessories = [
    { id: 1, name: "Wireless Earbuds", price: 999, image: earbuds },
    { id: 2, name: "Phone Case", price: 250, image: phoneCase },
    { id: 3, name: "Power Bank", price: 1999, image: powerBank },
    { id: 4, name: "Screen Protector", price: 99, image: screenProtector },
  ];

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredAccessories = accessories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-container">
      <hr></hr>
      <h1>
        <img src={logo} alt="Shop Logo" className="shop-logo" />
        Mobile Accessories Shop
      </h1> <hr></hr>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search accessories..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="accessory-list">
        {filteredAccessories.length > 0 ? (
          filteredAccessories.map((item) => (
            <div key={item.id} className="accessory">
              <img src={item.image} alt={item.name} className="product-image" />
              <h2>{item.name}</h2>
              <p>Price: Rs.{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No accessories found.</p>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      {/* Footer with Contact Information */}
      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: support@mobile-accessories-shop.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Connex Street, New Delhi, India</p>
      </footer>
    </div>
  );
};

export default App;