import React, { useState, useMemo } from "react";
import "./ListingsPage.css";

const DUMMY_LISTINGS = [
  { id: "#L1001", title: "Wireless Earbuds Bluetooth 5.0", brand: "SoundPro", price: "₹1,299", stock: 33, returnsPercent: "2.5%", fulfillment: "Seller Only", quality: "Good" },
  { id: "#L1002", title: "Stainless Steel Water Bottle 1L", brand: "AquaPure", price: "₹399", stock: 0, returnsPercent: "4.1%", fulfillment: "Fulfilled", quality: "Bad" },
  { id: "#L1003", title: "Classic Analog Watch for Men", brand: "TimeKeep", price: "₹999", stock: 19, returnsPercent: "1.0%", fulfillment: "Seller Only", quality: "Excellent" },
  { id: "#L1004", title: "Yoga Mat Non Slip", brand: "FitFlex", price: "₹549", stock: 3, returnsPercent: "3.3%", fulfillment: "Seller Only", quality: "Good" },
  { id: "#L1005", title: "USB-C Fast Charger 30W", brand: "ChargeX", price: "₹699", stock: 0, returnsPercent: "6.7%", fulfillment: "Fulfilled", quality: "Bad" },
];

export default function ListingsPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(new Set());

  const filtered = useMemo(() => {
    if (filter === "low") return DUMMY_LISTINGS.filter((x) => x.stock <= 5 && x.stock > 0);
    if (filter === "out") return DUMMY_LISTINGS.filter((x) => x.stock === 0);
    return DUMMY_LISTINGS;
  }, [filter]);

  const toggleSelect = (id) => {
    const copy = new Set(selected);
    if (copy.has(id)) copy.delete(id);
    else copy.add(id);
    setSelected(copy);
  };

  const selectAll = (checked) => {
    if (checked) setSelected(new Set(filtered.map((x) => x.id)));
    else setSelected(new Set());
  };

  return (
    <div className="listings-page">
      {/* Top Section */}
      <div className="top-section">
        <div className="stats-grid">
          <div className="stat-box blue">
            <div className="stat-number">253</div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div className="stat-box orange">
            <div className="stat-number">39</div>
            <div className="stat-label">Ready for Activation</div>
          </div>
          <div className="stat-box red">
            <div className="stat-number">14</div>
            <div className="stat-label">Listings at Risk</div>
          </div>
          <div className="stat-box green">
            <div className="stat-number">269</div>
            <div className="stat-label">Archived Listings</div>
          </div>
        </div>

        {/* Filter & Actions */}
        <div className="actions">
          <div className="filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "low" ? "active" : ""}`}
              onClick={() => setFilter("low")}
            >
              Low Stock
            </button>
            <button
              className={`filter-btn ${filter === "out" ? "active" : ""}`}
              onClick={() => setFilter("out")}
            >
              Out of Stock
            </button>
          </div>

          <div className="upload-btns">
            <button className="btn primary">Add Bulk Listing</button>
            <button className="btn secondary">Add Single Listing</button>
          </div>
        </div>
      </div>

      {/* Recommendation Box */}
      <div className="recommend-box">
        <div className="rec-left">
          <strong>Some listings are at risk of losing visibility</strong>
          <div className="rec-sub">
            Check listing quality and catalog issues to improve visibility.
          </div>
        </div>
        <div className="rec-right">
          <button className="btn small">View Insights</button>
        </div>
      </div>

      {/* Listings Table */}
      <div className="listings-table-wrap">
        <table className="listings-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => selectAll(e.target.checked)}
                  checked={selected.size === filtered.length}
                />
              </th>
              <th>Product Details</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Returns</th>
              <th>Fulfillment</th>
              <th>Listing Quality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.has(item.id)}
                    onChange={() => toggleSelect(item.id)}
                  />
                </td>
                <td className="prod-col">
                  <div className="prod-img">IMG</div>
                  <div className="prod-meta">
                    <div className="prod-title">{item.title}</div>
                    <div className="prod-brand">
                      {item.brand} • {item.id}
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td className={item.stock === 0 ? "stock out" : "stock"}>
                  {item.stock}
                </td>
                <td>{item.returnsPercent}</td>
                <td>{item.fulfillment}</td>
                <td>
                  <span className={`badge ${item.quality.toLowerCase()}`}>
                    {item.quality}
                  </span>
                </td>
                <td>
                  <button className="btn-link">Edit Listing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
