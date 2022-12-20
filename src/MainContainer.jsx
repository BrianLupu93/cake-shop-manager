import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Navigation/Sidebar";
import Topbar from "./components/Navigation/Topbar";
import Dashboard from "./components/Dashboard/Dashboard";
import CakeShop from "./components/CakeShop/CakeShop";
import Laboratory from "./components/Laboratory/Laboratory";
import Warehouse from "./components/Warehouse/Warehouse";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Users from "./components/Users/Users";

const MainContainer = () => {
  return (
    <div className="container-scroller">
      <Topbar />
      <div className="container-fluid page-body-wrapper pt-0">
        <Sidebar />
        <div className="main-panel">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cake-shop" element={<CakeShop />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
