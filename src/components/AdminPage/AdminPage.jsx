import React from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import SearchBar from "./SearchBar";
import AdminDeliveryRequest from "./AdminDeliveryRequest";
function AdminPage() {
  return (
    <div className="adminPage-root">
      <Sidebar />
      <SearchBar />
      {/* <AdminDashboard /> */}
      <AdminDeliveryRequest />
    </div>
  );
}

export default AdminPage;
