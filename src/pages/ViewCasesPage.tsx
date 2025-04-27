
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import { Navigate } from "react-router-dom";

const ViewCasesPage = () => {
  const { user, isAdmin, signOut } = useAuth();

  // Redirect to login if not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={!!user} 
        userEmail={user?.email}
        isAdmin={isAdmin}
        onLogOut={signOut}
      />
      <main className="flex-grow py-8">
        <Dashboard isAdmin={false} />
      </main>
      <Footer />
    </div>
  );
};

export default ViewCasesPage;
