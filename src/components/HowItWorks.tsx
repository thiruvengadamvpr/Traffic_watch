
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WorkflowStep = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start">
        <div className="mr-4 text-traffic-red">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Link to="/" className="flex items-center text-gray-600 hover:text-traffic-red mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-3">How Rash Driving Detector Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understanding the complaint lifecycle and what happens after you submit a report
        </p>
      </div>

      <div className="space-y-6">
        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">✓</div>}
          title="Acknowledgment & Complaint ID"
          description="Upon successful upload, receive immediate confirmation and a unique Complaint ID via email/SMS."
        />

        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">⚙️</div>}
          title="Automated AI/ML Analysis"
          description="Our system analyzes your submission within 5 minutes, tracking vehicles and computing metrics."
        />

        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">🔔</div>}
          title="Initial Outcome & Notification"
          description="Receive notifications about the analysis results, whether it's 'No Issue' or 'Rash Driving Detected'."
        />
        
        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">👮</div>}
          title="Police Review & Action"
          description="Local enforcement reviews evidence and takes appropriate action - issuing fines or requesting more information."
        />
        
        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">📄</div>}
          title="Case Closure"
          description="Once resolved, receive a final summary email with the outcome details."
        />
        
        <WorkflowStep 
          icon={<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">📊</div>}
          title="Real-time Updates"
          description="Track your complaint status in real-time through your dashboard. Get notified at every stage - from initial submission to final resolution."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
