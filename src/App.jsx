import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import OrdersTable from "./components/OrdersTable";
import ListingsPage from "./components/ListingsPage";
import OrdersPage from "./components/OrdersPage"; // ✅ New import
import ReturnsPage from "./components/ReturnsPage";
import GrowthPage from "./components/GrowthPage";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="app-root">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main Content */}
      <main className="main-content">
        <div className="main-inner">
          {/* Header */}
          <header className="page-header">
            <h1 className="page-title">User Dashboard</h1>
            <div className="header-actions">Welcome, New User</div>
          </header>

          {/* Conditional Pages */}
          {active === "home" && (
            <>
              <Dashboard />
              <OrdersTable />
            </>
          )}

          {active === "listings" && <ListingsPage />}

          {active === "orders" && <OrdersPage />} {/* ✅ New Orders Page */}

          {active === "returns" && <ReturnsPage />}

          {active === "growth" && <GrowthPage />}

        </div>
      </main>
    </div>
  );
}
