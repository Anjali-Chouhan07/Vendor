import React, { useState } from "react";
import "./OrdersPage.css";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("Pending");

  const orders = [
    {
      id: "ORD-001",
      product: "Blue Printed Kurti",
      sku: "SKU123",
      date: "2025-10-25",
      status: "Pending",
      price: "₹799",
    },
    {
      id: "ORD-002",
      product: "Men’s Running Shoes",
      sku: "SKU124",
      date: "2025-10-24",
      status: "Ready to Ship",
      price: "₹1,299",
    },
    {
      id: "ORD-003",
      product: "Stylish Handbag",
      sku: "SKU125",
      date: "2025-10-22",
      status: "Shipped",
      price: "₹1,099",
    },
  ];

  return (
    <div className="orders-page">
      {/* Top Buttons */}
      <div className="orders-top-buttons">
        <button className="btn primary">Download Order List</button>
        <button className="btn outline">Order History</button>
      </div>

      {/* Tabs */}
      <div className="orders-tabs">
        {["On Hold", "Pending", "Ready to Ship", "Shipped", "Cancelled"].map(
          (tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Filter Section */}
      <div className="orders-filters">
        <div className="filter-group">
          <label>Filter by:</label>
          <select>
            <option>SLA Status</option>
            <option>Dispatched</option>
            <option>Delivered</option>
          </select>
          <select>
            <option>Dispatch Date</option>
            <option>Today</option>
            <option>This Week</option>
          </select>
          <select>
            <option>Order Date</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="filter-search">
          <input type="text" placeholder="Search by SKU ID" />
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-wrap">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Date</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.sku}</td>
                <td>{o.date}</td>
                <td>
                  <span className={`status-badge ${o.status.toLowerCase()}`}>
                    {o.status}
                  </span>
                </td>
                <td>{o.price}</td>
                <td>
                  <button className="btn-link">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
