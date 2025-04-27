
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ComplaintDetailsProps {
  complaint: {
    id: number;
    vehicleNumber: string;
    date: string;
    location: string;
    status: string;
    description?: string;
    violationType?: string;
    policeAction?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ComplaintDetails = ({ complaint, isOpen, onClose }: ComplaintDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Complaint Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Vehicle Number</h4>
            <p className="text-lg font-medium">{complaint.vehicleNumber}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">Violation Type</h4>
            <p className="text-lg font-medium">{complaint.violationType || "Not specified"}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500">Description</h4>
            <p className="text-base text-gray-700">{complaint.description || "No description provided"}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Date</h4>
              <p className="text-base">{complaint.date}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Location</h4>
              <p className="text-base">{complaint.location}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500">Status</h4>
            <Badge 
              className={complaint.status === "Resolved" ? 
                "bg-green-100 text-green-800" : 
                "bg-yellow-100 text-yellow-800"
              }
            >
              {complaint.status}
            </Badge>
          </div>

          {complaint.policeAction && (
            <div>
              <h4 className="text-sm font-medium text-gray-500">Police Action</h4>
              <p className="text-base text-gray-700">{complaint.policeAction}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComplaintDetails;
