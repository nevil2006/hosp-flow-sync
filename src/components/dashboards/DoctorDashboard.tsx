import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  Activity, 
  Stethoscope,
  MessageCircle,
  FileText,
  TrendingUp,
  Phone,
  Video
} from 'lucide-react';

export function DoctorDashboard() {
  const recentPatients = [
    { id: 'P001', name: 'John Smith', room: 'ICU-12', condition: 'Critical', vitals: 'Stable', lastUpdate: '5 min ago' },
    { id: 'P002', name: 'Emma Davis', room: 'Ward-23', condition: 'Moderate', vitals: 'Normal', lastUpdate: '12 min ago' },
    { id: 'P003', name: 'Robert Johnson', room: 'CCU-8', condition: 'Severe', vitals: 'Alert', lastUpdate: '18 min ago' },
  ];

  const consultationRequests = [
    { from: 'Dr. Martinez (Cardiology)', patient: 'John Smith', priority: 'High', time: '10:30 AM' },
    { from: 'Dr. Chen (Neurology)', patient: 'Sarah Wilson', priority: 'Medium', time: '2:15 PM' },
  ];

  const pendingTasks = [
    { task: 'Review Lab Results - Emma Davis', priority: 'High', due: '30 min' },
    { task: 'Discharge Summary - Mike Brown', priority: 'Medium', due: '2 hours' },
    { task: 'Surgery Prep - Alice Johnson', priority: 'Critical', due: '15 min' },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Active Patients"
          value="24"
          subtitle="Under your care"
          icon={Users}
          status="info"
          trend={{ value: "+3 today", type: "increase" }}
        />
        <DashboardCard
          title="Critical Cases"
          value="3"
          subtitle="Require immediate attention"
          icon={AlertTriangle}
          status="critical"
        />
        <DashboardCard
          title="Consultations"
          value="8"
          subtitle="Pending requests"
          icon={MessageCircle}
          status="warning"
        />
        <DashboardCard
          title="Avg Response Time"
          value="12 min"
          subtitle="Last 24 hours"
          icon={Clock}
          status="success"
          trend={{ value: "-8% faster", type: "increase" }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Patients */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-subtle border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{patient.name}</p>
                      <Badge variant={patient.condition === 'Critical' ? 'destructive' : patient.condition === 'Severe' ? 'secondary' : 'default'} className="text-xs">
                        {patient.condition}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Room: {patient.room}</p>
                    <p className="text-xs text-success">Vitals: {patient.vitals}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Stethoscope className="h-4 w-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground mt-1">{patient.lastUpdate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Consultation Requests */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Consultation Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {consultationRequests.map((req, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-subtle border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{req.from}</p>
                      <p className="text-xs text-muted-foreground">Patient: {req.patient}</p>
                      <p className="text-xs text-primary font-medium">Scheduled: {req.time}</p>
                    </div>
                    <Badge variant={req.priority === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                      {req.priority}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="flex-1 text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      Video Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Phone className="h-3 w-3 mr-1" />
                      Voice
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-warning" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-subtle border">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-sm flex-1">{task.task}</p>
                    <Badge variant={task.priority === 'Critical' ? 'destructive' : task.priority === 'High' ? 'secondary' : 'default'} className="text-xs ml-2">
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Due in: {task.due}</span>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Complete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Vitals Monitor */}
      <Card className="shadow-medical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Live Patient Vitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="p-4 rounded-lg bg-gradient-subtle border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-sm">{patient.name}</h4>
                    <p className="text-xs text-muted-foreground">{patient.room}</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse-medical"></div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Heart Rate:</span>
                    <span className="font-medium text-primary">72 BPM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blood Pressure:</span>
                    <span className="font-medium text-success">120/80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span className="font-medium text-warning">98.6°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SpO2:</span>
                    <span className="font-medium text-primary">98%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}