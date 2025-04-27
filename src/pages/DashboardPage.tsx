
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo, set to true
  const [userEmail, setUserEmail] = useState<string | undefined>("user@example.com"); // For demo
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserEmail(undefined);
    setIsAdmin(false);
  };

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
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
        <Dashboard isAdmin={false} />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
