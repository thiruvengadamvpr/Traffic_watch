
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "./LoginForm";

const AuthForm = ({ isAdmin = false }) => {
  const { user, signUp, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate(isAdmin ? "/admin/dashboard" : "/dashboard");
    }
  }, [user, navigate, isAdmin]);

  const handleLogin = async (email: string, isAdmin: boolean) => {
    if (isAdmin) {
      await signIn(email, isAdmin);
    } else {
      await signIn(email, false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <LoginForm isAdmin={isAdmin} onLogin={handleLogin} />
    </div>
  );
};

export default AuthForm;
