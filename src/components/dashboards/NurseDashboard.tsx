import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ClipboardList, 
  Heart, 
  Activity, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Utensils,
  Thermometer,
  Droplets,
  User
} from 'lucide-react';

export function NurseDashboard() {
  const assignedTasks = [
    { id: 'T001', patient: 'John Smith', task: 'Administer medication', priority: 'High', due: '15 min', room: 'ICU-12' },
    { id: 'T002', patient: 'Emma Davis', task: 'Vital signs check', priority: 'Medium', due: '30 min', room: 'Ward-23' },
    { id: 'T003', patient: 'Robert Johnson', task: 'Wound dressing', priority: 'High', due: '45 min', room: 'CCU-8' },
    { id: 'T004', patient: 'Sarah Wilson', task: 'Blood draw', priority: 'Low', due: '1 hour', room: 'Ward-15' },
  ];

  const patients = [
    { 
      id: 'P001', 
      name: 'John Smith', 
      room: 'ICU-12', 
      condition: 'Critical',
      painLevel: 7,
      lastVitals: '5 min ago',
      medications: 3,
      nextMeal: '12:30 PM'
    },
    { 
      id: 'P002', 
      name: 'Emma Davis', 
      room: 'Ward-23', 
      condition: 'Stable',
      painLevel: 3,
      lastVitals: '15 min ago',
      medications: 1,
      nextMeal: '12:30 PM'
    },
    { 
      id: 'P003', 
      name: 'Robert Johnson', 
      room: 'CCU-8', 
      condition: 'Moderate',
      painLevel: 5,
      lastVitals: '8 min ago',
      medications: 2,
      nextMeal: '1:00 PM'
    },
  ];

  const nutritionTracker = [
    { patient: 'John Smith', breakfast: 75, lunch: 0, dinner: 0, fluids: 800 },
    { patient: 'Emma Davis', breakfast: 100, lunch: 60, dinner: 0, fluids: 1200 },
    { patient: 'Robert Johnson', breakfast: 50, lunch: 80, dinner: 0, fluids: 900 },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Assigned Patients"
          value="12"
          subtitle="Currently under care"
          icon={User}
          status="info"
        />
        <DashboardCard
          title="Pending Tasks"
          value="8"
          subtitle="Due in next hour"
          icon={ClipboardList}
          status="warning"
        />
        <DashboardCard
          title="Completed Tasks"
          value="15"
          subtitle="Today"
          icon={CheckCircle}
          status="success"
          trend={{ value: "+3 vs yesterday", type: "increase" }}
        />
        <DashboardCard
          title="Critical Alerts"
          value="2"
          subtitle="Require attention"
          icon={AlertCircle}
          status="critical"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Task Queue */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-warning" />
              Task Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignedTasks.map((task) => (
                <div key={task.id} className="p-3 rounded-lg bg-gradient-subtle border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{task.task}</p>
                      <p className="text-xs text-muted-foreground">Patient: {task.patient}</p>
                      <p className="text-xs text-primary">Room: {task.room}</p>
                    </div>
                    <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'secondary' : 'default'} className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Due: {task.due}</span>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                        Start
                      </Button>
                      <Button size="sm" variant="default" className="h-7 px-2 text-xs">
                        Complete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patient Status */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-critical" />
              Patient Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patients.map((patient) => (
                <div key={patient.id} className="p-3 rounded-lg bg-gradient-subtle border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-sm">{patient.name}</h4>
                      <p className="text-xs text-muted-foreground">{patient.room}</p>
                    </div>
                    <Badge variant={patient.condition === 'Critical' ? 'destructive' : patient.condition === 'Moderate' ? 'secondary' : 'default'} className="text-xs">
                      {patient.condition}
                    </Badge>
                  </div>
                  
                  {/* Pain Scale */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Pain Level:</span>
                      <span className={`font-medium ${patient.painLevel > 6 ? 'text-critical' : patient.painLevel > 3 ? 'text-warning' : 'text-success'}`}>
                        {patient.painLevel}/10
                      </span>
                    </div>
                    <Progress 
                      value={patient.painLevel * 10} 
                      className="h-2" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Activity className="h-3 w-3 text-primary" />
                      <span>Vitals: {patient.lastVitals}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Droplets className="h-3 w-3 text-info" />
                      <span>Meds: {patient.medications}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Tracker */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-success" />
              Nutrition Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nutritionTracker.map((nutrition, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-subtle border">
                  <h4 className="font-medium text-sm mb-3">{nutrition.patient}</h4>
                  
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Breakfast</span>
                        <span className="font-medium">{nutrition.breakfast}%</span>
                      </div>
                      <Progress value={nutrition.breakfast} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Lunch</span>
                        <span className="font-medium">{nutrition.lunch}%</span>
                      </div>
                      <Progress value={nutrition.lunch} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <Droplets className="h-3 w-3 text-primary" />
                        <span>Fluids:</span>
                      </div>
                      <span className="font-medium text-primary">{nutrition.fluids}ml</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vital Signs Chart */}
      <Card className="shadow-medical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-primary" />
            Real-time Charting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {patients.map((patient) => (
              <div key={patient.id} className="p-4 rounded-lg bg-gradient-subtle border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-sm">{patient.name}</h4>
                    <p className="text-xs text-muted-foreground">{patient.room}</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse-medical"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-card rounded">
                      <p className="text-muted-foreground">HR</p>
                      <p className="font-medium text-primary">72</p>
                    </div>
                    <div className="p-2 bg-card rounded">
                      <p className="text-muted-foreground">BP</p>
                      <p className="font-medium text-success">120/80</p>
                    </div>
                    <div className="p-2 bg-card rounded">
                      <p className="text-muted-foreground">Temp</p>
                      <p className="font-medium text-warning">98.6°F</p>
                    </div>
                    <div className="p-2 bg-card rounded">
                      <p className="text-muted-foreground">SpO2</p>
                      <p className="font-medium text-primary">98%</p>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    <ClipboardList className="h-3 w-3 mr-1" />
                    Update Chart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}