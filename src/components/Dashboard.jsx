import React from "react";
import GrowthChart from "./GrowthChart";

const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Top Cards */}
      <div className="cards flex flex-wrap gap-6 mb-6">
        <div className="card">
          <h3>Units Sold</h3>
          <p className="card-value text-blue-600">1,240</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p className="card-value text-green-600">₹2,45,000</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p className="card-value text-purple-600">320</p>
        </div>
        
        <div className="card">
          <h3>Returns</h3>
          <p className="card-value text-orange-500">85</p>
        </div>
      </div>

      {/* Middle Section: Chart + Right Panel */}
      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
        {/* Chart */}
        <div style={{
          width: "550px",
          height: "350px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 10px 24px rgba(16,24,40,0.04)"
        }}>
          <h3 style={{ marginBottom: "12px", fontSize: "16px", fontWeight: "600", color: "#374151" }}>
            Sales Growth Overview
          </h3>
          <GrowthChart />
        </div>

        {/* Right Panel: Top Products + Bottom Summary */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Top Products */}
          <div style={{
            background: "#cfeffdff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", // softer shadow
            flex: 1
          }}>
            <h4 style={{ fontSize: "16px", color: "#1f2937", marginBottom: "12px", fontWeight: 600 }}>Top Products</h4>
            <ul style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>
              <li>Bluethoot - 120 sold</li>
              <li>Macbook Pro - 90 sold</li>
              <li>Earbuds - 75 sold</li>
              <li>Mobiles - 50 sold</li>
            </ul>
          </div>

          {/* Bottom Summary: New Products + Total Sales */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{
              flex: 1,
              background: "#d5ecd7ff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
            }}>
              <h3 style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600", color: "#101111ff" }}>New Products</h3>
              <p style={{ fontSize: "22px", fontWeight: "700", color: "#0d0e0eff" }}>12</p>
              <p style={{ color: "#161c1aff", marginTop: "4px", fontSize: "14px" }}>Added this week</p>
            </div>

            <div style={{
              flex: 1,
              background: "#fdcfe7ff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
            }}>
              <h3 style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600", color: "#121312ff" }}>Total Sales</h3>
              <p style={{ fontSize: "22px", fontWeight: "700", color: "#0d321fff" }}>₹8,45,500</p>
              <p style={{ color: "#17411fff", marginTop: "4px", fontSize: "14px" }}>In this quarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
