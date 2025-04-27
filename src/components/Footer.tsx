
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h3 className="font-bold text-traffic-red">Traffic Watch</h3>
            <p className="text-sm text-gray-600 max-w-sm">
              A platform for reporting rash driving incidents and making our roads safer for everyone.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-traffic-red">Home</Link></li>
              <li><Link to="/file-report" className="text-gray-600 hover:text-traffic-red">File a Report</Link></li>
              <li><Link to="/view-cases" className="text-gray-600 hover:text-traffic-red">View Cases</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-traffic-red">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-traffic-red">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-traffic-red">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-600 hover:text-traffic-red">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Email: support@trafficwatch.com</li>
              <li className="text-gray-600">Phone: +91 94860 84184</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {currentYear} Traffic Watch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
