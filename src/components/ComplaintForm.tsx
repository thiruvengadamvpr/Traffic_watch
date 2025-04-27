
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComplaintForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Complaint submitted successfully",
        description: "Your complaint has been registered with ID: TW" + Math.floor(1000 + Math.random() * 9000),
      });
      setIsSubmitting(false);
      setVehicleNumber("");
      setLocation("");
      setDescription("");
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Link to="/" className="flex items-center text-gray-600 hover:text-traffic-red mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-traffic-red mb-6">Complaint Quick Form</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
          <div className="p-3 border border-gray-200 rounded-md text-center mb-4">
            <span className="font-mono">TN 22 BB 0001</span>
          </div>

          <h2 className="flex items-center text-lg font-medium mb-4">
            <span className="text-traffic-red mr-2">📋</span>
            How to File a Report:
          </h2>

          <ol className="space-y-3">
            <li className="flex items-baseline gap-2">
              <span className="font-bold">1.</span>
              <span>Enter the vehicle number of the offender (e.g., TN 22 BB 0001)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-bold">2.</span>
              <span>Add the locality where the incident happened</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-bold">3.</span>
              <span>Upload photo/video evidence if available</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="font-bold">4.</span>
              <span>(Optional) Add a short message describing the incident</span>
            </li>
          </ol>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <span className="font-bold">⚠️ </span>
              Misuse of the platform may lead to account suspension or legal action.
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="vehicle-number" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Number Plate
              </label>
              <Input
                id="vehicle-number"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="Enter vehicle number (e.g., TN 22 BB 0001)"
                className="w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Locality
              </label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter the location of the incident"
                className="w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="photo-upload" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photo/Video
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <p className="text-gray-500">(Drop and share)</p>
                <input
                  type="file"
                  id="photo-upload"
                  className="hidden"
                  accept="image/*,video/*"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("photo-upload")?.click()}
                  className="mt-2"
                >
                  Select File
                </Button>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message (Optional)
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a short description of the incident"
                className="w-full h-32"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-traffic-red hover:bg-red-600 text-white py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Complaint"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
