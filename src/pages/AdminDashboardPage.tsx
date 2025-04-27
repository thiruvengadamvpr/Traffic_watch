
import Navbar from "@/components/Navbar";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo, set to true
  const [userEmail, setUserEmail] = useState<string | undefined>("admin@trafficwatch.com"); // For demo
  const [isAdmin, setIsAdmin] = useState(true); // For demo, set to true

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserEmail(undefined);
    setIsAdmin(false);
  };

  // Redirect to admin login if not logged in as admin
  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userEmail={userEmail}
        isAdmin={isAdmin}
        onLogOut={handleLogOut}
      />
      <main className="flex-grow py-8">
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
