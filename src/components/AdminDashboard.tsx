
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface Complaint {
  id: number;
  vehicleNumber: string;
  date: string;
  location: string;
  status: "Pending Analysis" | "Under Review" | "Resolved" | "Rejected";
  policeAction?: string;
  reportedBy?: string;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const [complaints, setComplaints] = useState<Complaint[]>([
    { 
      id: 1, 
      vehicleNumber: "KA01AB1234", 
      date: "2024-04-18", 
      location: "Bangalore", 
      status: "Pending Analysis",
      reportedBy: "user1@example.com" 
    },
    { 
      id: 2, 
      vehicleNumber: "MH02CD5678", 
      date: "2024-04-17", 
      location: "Mumbai", 
      status: "Resolved",
      policeAction: "Fine Issued",
      reportedBy: "user2@example.com" 
    },
    { 
      id: 3, 
      vehicleNumber: "TN03EF9012", 
      date: "2024-04-16", 
      location: "Chennai", 
      status: "Under Review",
      reportedBy: "user3@example.com" 
    },
    { 
      id: 4, 
      vehicleNumber: "DL04GH3456", 
      date: "2024-04-15", 
      location: "Delhi", 
      status: "Rejected",
      reportedBy: "user4@example.com" 
    }
  ]);

  const handleStatusChange = (complaintId: number, newStatus: string, policeAction?: string) => {
    setComplaints(prevComplaints =>
      prevComplaints.map(complaint => {
        if (complaint.id === complaintId) {
          return { 
            ...complaint, 
            status: newStatus as any, 
            policeAction 
          };
        }
        return complaint;
      })
    );

    toast({
      title: "Status updated",
      description: `Complaint #${complaintId} status updated to ${newStatus}`,
    });
  };

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = 
      complaint.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.reportedBy?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.id.toString().includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || complaint.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending Analysis":
        return <Badge className="bg-yellow-100 text-yellow-800">⏳ Pending Analysis</Badge>;
      case "Under Review":
        return <Badge className="bg-blue-100 text-blue-800">👁️ Under Review</Badge>;
      case "Resolved":
        return <Badge className="bg-green-100 text-green-800">✓ Resolved</Badge>;
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800">✗ Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-traffic-red">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-sm text-gray-600">
          Administrator Dashboard
        </div>
      </div>

      <h1 className="text-3xl font-bold text-traffic-red mb-8">Complaint Management</h1>
      
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by ID, vehicle number, location or reporter..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-1/4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending analysis">Pending Analysis</SelectItem>
              <SelectItem value="under review">Under Review</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Vehicle Number</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reported By</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredComplaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.id}</TableCell>
                <TableCell>{complaint.vehicleNumber}</TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>{complaint.location}</TableCell>
                <TableCell>{getStatusBadge(complaint.status)}</TableCell>
                <TableCell>{complaint.reportedBy}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Select 
                      onValueChange={(value) => handleStatusChange(complaint.id, value)}
                      defaultValue=""
                    >
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Update Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending Analysis">Pending Analysis</SelectItem>
                        <SelectItem value="Under Review">Under Review</SelectItem>
                        <SelectItem value="Resolved">Resolve (Fine)</SelectItem>
                        <SelectItem value="Rejected">Reject</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
