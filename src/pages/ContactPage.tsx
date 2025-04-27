
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useState } from "react";

const ContactPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email: string, admin: boolean) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setIsAdmin(admin);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserEmail(undefined);
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userEmail={userEmail}
        isAdmin={isAdmin}
        onLogOut={handleLogOut}
      />
      <main className="flex-grow py-8">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
