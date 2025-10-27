import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./GrowthPage.css";

export default function GrowthPage() {
  const salesData = [
    { name: "Mon", value: 400 },
    { name: "Tue", value: 300 },
    { name: "Wed", value: 500 },
    { name: "Thu", value: 200 },
    { name: "Fri", value: 600 },
    { name: "Sat", value: 700 },
    { name: "Sun", value: 650 },
  ];

  return (
    <div className="growth-page">
      {/* Top Stats Boxes */}
      <div className="growth-stats">
        <div className="growth-card loss">
          <h3>Total Loss</h3>
          <p>₹12,340</p>
        </div>
        <div className="growth-card profit">
          <h3>Total Profit</h3>
          <p>₹28,760</p>
        </div>
        <div className="growth-card risk">
          <h3>Products at Risk</h3>
          <p>18</p>
        </div>
        <div className="growth-card days">
          <h3>Last 7 Days</h3>
          <p>+14%</p>
        </div>
      </div>

      {/* Graph and Table Section */}
      <div className="growth-table">
        <div className="growth-header">
          <h2>Performance Overview</h2>
          <div className="growth-filters">
            <button>Weekly</button>
            <button>Monthly</button>
            <button>Yearly</button>
          </div>
        </div>

        {/* Graph Inside Table */}
        <div className="growth-graph">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <table className="growth-data-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td>₹52,000</td>
              <td className="positive">+12%</td>
            </tr>
            <tr>
              <td>Orders</td>
              <td>320</td>
              <td className="positive">+8%</td>
            </tr>
            <tr>
              <td>Revenue</td>
              <td>₹2,40,000</td>
              <td className="negative">-4%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
