// src/HomePage.js

import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Welcome to Our E-Commerce Store</h1>
        {/* Add navigation links if needed */}
      </header>

      {/* Featured Products */}
      <section>
        <h2>Featured Products</h2>
        <div className="product-list">
          {/* Individual Product Cards */}
          <div className="product-card">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            {/* Add buttons or links for more details, add to cart, etc. */}
          </div>
          <div className="product-card">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$24.99</p>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
