import "./FullAdminPage.css";
import AdminPageHeader from "./AdminPageHeader";
import AdminSidebar from "./AdminSidebar";
import AdminPageMain from "./AdminPageMain";

function AdminPage() {
  return (
    <div className="adminPage-root">
      <AdminSidebar />
      <AdminPageMain />
    </div>
  );
}

export default AdminPage;
