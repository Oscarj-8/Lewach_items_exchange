import React from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import SearchBar from "./SearchBar";
function AdminPage() {
  return (
    <div className="adminPage-root">
      <Sidebar />
      <SearchBar />
    </div>
  );
}

export default AdminPage;
