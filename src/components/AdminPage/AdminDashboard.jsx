import "./FullAdminPage.css";
import AdminPageHeader from "./AdminPageHeader";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard() {
  return (
    <div className="adminPage-root">
      <AdminSidebar />
      <AdminPageHeader />
    </div>
  );
}

export default AdminDashboard;
