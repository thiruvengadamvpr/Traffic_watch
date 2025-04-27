import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps {
  isAdmin?: boolean;
  onLogin: (email: string, isAdmin: boolean) => void;
}

const LoginForm = ({ isAdmin = false, onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate login API call
    setTimeout(() => {
      if (isAdmin && email === "admin@trafficwatch.com" && password === "admin123") {
        toast({
          title: "Login successful",
          description: "Welcome back, Administrator!",
        });
        onLogin(email, true);
        navigate("/admin/dashboard");
      } else if (!isAdmin && email && password) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        onLogin(email, false);
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isAdmin ? "Administrator Login" : "User Login"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="text-sm text-traffic-red hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-traffic-red hover:bg-red-600 rounded-xl"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log In"}
        </Button>
      </form>

      {!isAdmin && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-traffic-red hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      )}
      
      {!isAdmin && (
        <div className="mt-4 text-center">
          <Link to="/admin/login" className="text-sm text-gray-500 hover:underline">
            Administrator Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
