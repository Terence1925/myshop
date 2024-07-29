import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product"; // Named import
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Terence Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
