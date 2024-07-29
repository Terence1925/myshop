// Checkout.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(0); // Initialize state

  useEffect(() => {
    if (location.state && location.state.totalAmount !== undefined) {
      setTotalAmount(location.state.totalAmount);
    }
    console.log("Total Amount updated:", totalAmount);
    console.log("Location state:", location.state); // Log location state for debugging
  }, [location.state, totalAmount]);

  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [gcashPhone, setGcashPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", {
      name,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      gcashPhone,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <p className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</p>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="payment-method">Payment Method</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="visa">Visa</option>
          <option value="mastercard">MasterCard</option>
          <option value="gcash">GCash</option>
        </select>
      </div>

      {paymentMethod === "visa" || paymentMethod === "mastercard" ? (
        <>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date (MM/YY)</label>
            <input
              type="text"
              id="expiry-date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </>
      ) : paymentMethod === "gcash" ? (
        <div className="form-group">
          <label htmlFor="gcash-phone">GCash Phone Number</label>
          <input
            type="text"
            id="gcash-phone"
            value={gcashPhone}
            onChange={(e) => setGcashPhone(e.target.value)}
            required
          />
        </div>
      ) : null}

      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
