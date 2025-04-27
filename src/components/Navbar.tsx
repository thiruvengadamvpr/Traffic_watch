
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isLoggedIn: boolean;
  userEmail?: string;
  isAdmin?: boolean;
  onLogOut?: () => void;
}

const Navbar = ({ isLoggedIn, userEmail, isAdmin, onLogOut }: NavbarProps) => {
  const location = useLocation();
  
  return (
    <header className="bg-traffic-red py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">Traffic Watch</Link>
          
          <nav className="hidden md:flex space-x-6 ml-10">
            <NavLink to="/" current={location.pathname}>Home</NavLink>
            <NavLink to="/file-report" current={location.pathname}>File a Report</NavLink>
            <NavLink to="/view-cases" current={location.pathname}>View Cases</NavLink>
            <NavLink to="/how-it-works" current={location.pathname}>How It Works</NavLink>
            <NavLink to="/contact" current={location.pathname}>Contact Us</NavLink>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {userEmail && <span className="hidden md:inline text-sm mr-2">{userEmail}</span>}
              {isAdmin && <Link to="/admin/dashboard" className="text-sm mr-2 text-white hover:text-gray-200">Admin Dashboard</Link>}
              <Button 
                variant="outline" 
                onClick={onLogOut}
                className="bg-transparent hover:bg-white hover:text-traffic-red border-white text-white"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:text-traffic-red hover:bg-white">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="bg-white text-traffic-red hover:bg-gray-100 border-white">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, current, children }: { to: string, current: string, children: React.ReactNode }) => {
  const isActive = current === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "text-white hover:text-gray-200 transition-colors",
        isActive && "font-medium"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
