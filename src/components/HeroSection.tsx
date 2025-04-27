
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            "Report Rash Driving.<br />Make Roads Safer."
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Use Traffic Watch to file instant complaints and track repeat offenders in your area.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/file-report">
              <Button className="bg-traffic-red hover:bg-red-600 text-white py-2 px-6 rounded-md text-lg">
                Report Now
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-traffic-red text-traffic-red hover:bg-traffic-red hover:text-white py-2 px-6 rounded-md text-lg">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/519a825d-159c-4d87-9af3-951402743329.jpg" 
            alt="Traffic incident reporting illustration" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
