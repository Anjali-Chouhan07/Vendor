import React, { useState } from "react";
import "./ReturnsPage.css";

import wireless from "../assets/wireless.jpg";
import denim from "../assets/denim.jpg";
import swatch from "../assets/swatch.jpg";
const dummyReturns = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    customer: "Riya Sharma",
    date: "Returned on 25 Oct 2025",
    review: "Product stopped working after a week.",
    rating: 2,
    status: "In Process",
    image: wireless,
  },
  {
    
    id: 2,
    name: "Cotton T-Shirt for Men",
    customer: "Aditya Verma",
    date: "Returned on 22 Oct 2025",
    review: "Size mismatch, quality was good though.",
    rating: 4,
    status: "Collected",
    image: denim,
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    customer: "Pooja Patel",
    date: "Returned on 20 Oct 2025",
    review: "Received damaged piece, refund issued.",
    rating: 3,
    status: "Received",
    image: swatch,
  },
];

export default function ReturnsPage() {
  const [filter, setFilter] = useState("All");

  const filteredReturns =
    filter === "All"
      ? dummyReturns
      : dummyReturns.filter((item) => item.status === filter);

  return (
    <div className="returns-page">
      {/* ===== Top Info Boxes ===== */}
      <div className="returns-top-cards">
        <div className="return-card gradient-blue">
          <h3>Return %</h3>
          <p>8.4%</p>
          <span>of total orders</span>
        </div>

        <div className="return-card gradient-green">
          <h3>Returns</h3>
          <p>142/200</p>
          <span>(Returns / Total Orders)</span>
        </div>

        <div className="return-card gradient-orange">
          <h3>Received</h3>
          <p>118/150</p>
          <span>(Received / Total Returns)</span>
        </div>
      </div>

      {/* ===== Filter Section ===== */}
      <div className="returns-filter">
        {["All", "In Process", "Collected", "Received"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ===== Return Tracking List ===== */}
      <div className="returns-list">
        {filteredReturns.map((item) => (
          <div key={item.id} className="return-card-item">
            {/* Left Section */}
            <div className="left-side">
              <img src={item.image} alt={item.name} className="return-img" />
              <div className="return-info">
                <h4>{item.name}</h4>
                <p className="return-customer">
                  Customer: {item.customer} • {item.date}
                </p>
                <p className="return-review">“{item.review}”</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-side">
              <div className="return-rating">
                {"⭐".repeat(item.rating)}{" "}
                <span className="rating-count">({item.rating}/5)</span>
              </div>
              <div
                className={`return-status ${
                  item.status.toLowerCase().replace(" ", "-")
                }`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
