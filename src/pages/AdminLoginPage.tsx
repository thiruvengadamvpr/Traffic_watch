
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";

const AdminLoginPage = () => {
  const { user, isAdmin, signOut } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col bg-traffic-bg">
      <Navbar 
        isLoggedIn={!!user} 
        userEmail={user?.email}
        isAdmin={isAdmin}
        onLogOut={signOut}
      />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <AuthForm isAdmin />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
