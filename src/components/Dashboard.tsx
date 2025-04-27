
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ComplaintDetails from "./ComplaintDetails"; // Add this import

interface Complaint {
  id: number;
  vehicleNumber: string;
  date: string;
  location: string;
  status: "Pending Analysis" | "Resolved";
  policeAction?: string;
  violationType?: string;
  description?: string;
}

const Dashboard = ({ isAdmin = false }) => {
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [pendingComplaints, setPendingComplaints] = useState<Complaint[]>([
    { 
      id: 1, 
      vehicleNumber: "KA01AB1234", 
      date: "2024-04-18", 
      location: "Bangalore", 
      status: "Pending Analysis",
      violationType: "Rash Driving",
      description: "Vehicle was observed driving dangerously and cutting lanes"
    }
  ]);

  const [resolvedComplaints, setResolvedComplaints] = useState<Complaint[]>([
    { 
      id: 2, 
      vehicleNumber: "MH02CD5678", 
      date: "2024-04-17", 
      location: "Mumbai", 
      status: "Resolved",
      policeAction: "Fine Issued",
      violationType: "Driving without Helmet",
      description: "Rider was observed without wearing a helmet"
    }
  ]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-traffic-red">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Link to="/file-report">
          <Button className="bg-traffic-red hover:bg-red-600">
            Report New Incident
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-traffic-red mb-8">Complaints Dashboard</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold flex items-center mb-4">
            <span className="text-yellow-500 mr-2">⏳</span> Pending Complaints
          </h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Complaint ID</TableHead>
                  <TableHead>Vehicle Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingComplaints.map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.vehicleNumber}</TableCell>
                    <TableCell>{complaint.date}</TableCell>
                    <TableCell>{complaint.location}</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        ⏳ Pending Analysis
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="link" 
                        className="text-traffic-red hover:underline"
                        onClick={() => setSelectedComplaint(complaint)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center mb-4">
            <span className="text-green-500 mr-2">✓</span> Resolved Complaints
          </h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Complaint ID</TableHead>
                  <TableHead>Vehicle Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>{isAdmin ? 'Police Action' : ''}</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resolvedComplaints.map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.vehicleNumber}</TableCell>
                    <TableCell>{complaint.date}</TableCell>
                    <TableCell>{complaint.location}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        ✓ Resolved
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {complaint.policeAction && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {complaint.policeAction}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="link" 
                        className="text-traffic-red hover:underline"
                        onClick={() => setSelectedComplaint(complaint)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>

      {selectedComplaint && (
        <ComplaintDetails
          complaint={selectedComplaint}
          isOpen={!!selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
