import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import OrdersTable from "./components/OrdersTable";
import ListingsPage from "./components/ListingsPage";
import GrowthPage from "./components/GrowthPage"; // ✅ new import
import "./App.css";

export default function App() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <>
            <Dashboard />
            <OrdersTable />
          </>
        );
      case "listings":
        return <ListingsPage />;
      case "growth":
        return <GrowthPage />;
      default:
        return (
          <>
            <Dashboard />
            <OrdersTable />
          </>
        );
    }
  };

  return (
    <div className="app-root">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main Content */}
      <main className="main-content">
        <div className="main-inner">
          {/* Header */}
          <header className="page-header">
            <h1 className="page-title">
              {active === "home"
                ? "User Dashboard"
                : active === "listings"
                ? "Product Listings"
                : active === "growth"
                ? "Growth Analytics"
                : "Dashboard"}
            </h1>
            <div className="header-actions">Welcome, New User</div>
          </header>

          {/* Dynamic Content */}
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
