import { useState } from 'react';
import { Navigation, UserRole } from '@/components/Navigation';
import { DoctorDashboard } from '@/components/dashboards/DoctorDashboard';
import { NurseDashboard } from '@/components/dashboards/NurseDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardCard } from '@/components/DashboardCard';
import { 
  FlaskConical, 
  Pill, 
  Shield, 
  Users, 
  Activity,
  TrendingUp,
  Clock,
  AlertTriangle
} from 'lucide-react';

function LabDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Pending Tests"
          value="23"
          subtitle="Awaiting processing"
          icon={FlaskConical}
          status="warning"
        />
        <DashboardCard
          title="Completed Today"
          value="45"
          subtitle="Results available"
          icon={Activity}
          status="success"
        />
        <DashboardCard
          title="Critical Results"
          value="3"
          subtitle="Require urgent attention"
          icon={AlertTriangle}
          status="critical"
        />
        <DashboardCard
          title="Avg Processing Time"
          value="2.3 hrs"
          subtitle="Last 24 hours"
          icon={Clock}
          status="info"
        />
      </div>
      
      <Card className="shadow-medical">
        <CardHeader>
          <CardTitle>Laboratory Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Lab Dashboard - Test processing queue and results management
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PharmacyDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Pending Orders"
          value="18"
          subtitle="Awaiting fulfillment"
          icon={Pill}
          status="warning"
        />
        <DashboardCard
          title="Dispensed Today"
          value="67"
          subtitle="Medications given"
          icon={Activity}
          status="success"
        />
        <DashboardCard
          title="Low Stock Items"
          value="5"
          subtitle="Need reordering"
          icon={AlertTriangle}
          status="critical"
        />
        <DashboardCard
          title="Avg Fill Time"
          value="18 min"
          subtitle="Last 24 hours"
          icon={Clock}
          status="info"
        />
      </div>
      
      <Card className="shadow-medical">
        <CardHeader>
          <CardTitle>Pharmacy Operations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Pharmacy Dashboard - Medication orders and inventory management
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Active Staff"
          value="156"
          subtitle="Currently on duty"
          icon={Users}
          status="info"
        />
        <DashboardCard
          title="System Alerts"
          value="7"
          subtitle="Require attention"
          icon={AlertTriangle}
          status="warning"
        />
        <DashboardCard
          title="Efficiency Score"
          value="94%"
          subtitle="Overall performance"
          icon={TrendingUp}
          status="success"
        />
        <DashboardCard
          title="System Uptime"
          value="99.8%"
          subtitle="Last 30 days"
          icon={Activity}
          status="success"
        />
      </div>
      
      <Card className="shadow-medical">
        <CardHeader>
          <CardTitle>System Administration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            Admin Dashboard - System management and analytics
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const [currentRole, setCurrentRole] = useState<UserRole>('doctor');
  const [notifications] = useState(12);

  const renderDashboard = () => {
    switch (currentRole) {
      case 'doctor':
        return <DoctorDashboard />;
      case 'nurse':
        return <NurseDashboard />;
      case 'lab':
        return <LabDashboard />;
      case 'pharmacy':
        return <PharmacyDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <DoctorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentRole={currentRole} 
        onRoleChange={setCurrentRole}
        notifications={notifications}
      />
      
      {/* Main Content */}
      <div className="pt-16 md:pl-64">
        <div className="p-6">
          {renderDashboard()}
        </div>
      </div>
    </div>
  );
}