import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Heart, 
  FlaskConical, 
  Pill, 
  Shield, 
  Users,
  Calendar,
  Activity,
  MessageCircle,
  Bell,
  Menu,
  X
} from 'lucide-react';

export type UserRole = 'doctor' | 'nurse' | 'lab' | 'pharmacy' | 'admin';

interface NavigationProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  notifications: number;
}

const roleConfig = {
  doctor: {
    icon: Stethoscope,
    label: 'Doctor',
    color: 'bg-primary',
    items: ['Dashboard', 'Patients', 'Consultations', 'Orders', 'Vitals']
  },
  nurse: {
    icon: Heart,
    label: 'Nurse',
    color: 'bg-accent',
    items: ['Dashboard', 'Tasks', 'Patients', 'Charting', 'Vitals']
  },
  lab: {
    icon: FlaskConical,
    label: 'Lab Tech',
    color: 'bg-info',
    items: ['Dashboard', 'Tests', 'Results', 'Reports', 'Upload']
  },
  pharmacy: {
    icon: Pill,
    label: 'Pharmacy',
    color: 'bg-warning',
    items: ['Dashboard', 'Orders', 'Inventory', 'Dispensing']
  },
  admin: {
    icon: Shield,
    label: 'Admin',
    color: 'bg-critical',
    items: ['Dashboard', 'Roster', 'Analytics', 'Users', 'Settings']
  }
};

export function Navigation({ currentRole, onRoleChange, notifications }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentConfig = roleConfig[currentRole];
  const CurrentIcon = currentConfig.icon;

  return (
    <>
      {/* Top Navigation Bar */}
      <Card className="fixed top-0 left-0 right-0 z-50 rounded-none border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">HospSync</h1>
                <p className="text-xs text-muted-foreground">Real-time Hospital Management</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Role Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              {Object.entries(roleConfig).map(([role, config]) => {
                const Icon = config.icon;
                return (
                  <Button
                    key={role}
                    variant={currentRole === role ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onRoleChange(role as UserRole)}
                    className={`h-9 px-3 ${currentRole === role ? config.color : ''}`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {config.label}
                  </Button>
                );
              })}
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* Current User */}
            <div className="flex items-center space-x-2 border-l pl-4">
              <div className={`p-2 rounded-lg ${currentConfig.color}`}>
                <CurrentIcon className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Dr. Sarah Wilson</p>
                <p className="text-xs text-muted-foreground">{currentConfig.label}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-card p-4">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(roleConfig).map(([role, config]) => {
                const Icon = config.icon;
                return (
                  <Button
                    key={role}
                    variant={currentRole === role ? "default" : "ghost"}
                    onClick={() => {
                      onRoleChange(role as UserRole);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {config.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </Card>

      {/* Sidebar Navigation */}
      <Card className="fixed left-0 top-16 bottom-0 w-64 hidden md:block border-r rounded-none bg-card/95 backdrop-blur">
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            {currentConfig.items.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start hover:bg-primary/10 hover:text-primary"
              >
                {item === 'Dashboard' && <Activity className="h-4 w-4 mr-3" />}
                {item === 'Patients' && <Users className="h-4 w-4 mr-3" />}
                {item === 'Consultations' && <MessageCircle className="h-4 w-4 mr-3" />}
                {item === 'Roster' && <Calendar className="h-4 w-4 mr-3" />}
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}