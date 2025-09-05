import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    type: 'increase' | 'decrease' | 'neutral';
  };
  status?: 'success' | 'warning' | 'critical' | 'info';
  className?: string;
  children?: ReactNode;
}

export function DashboardCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  status,
  className = '',
  children
}: DashboardCardProps) {
  const statusColors = {
    success: 'bg-gradient-success text-white',
    warning: 'bg-warning text-white',
    critical: 'bg-gradient-critical text-white',
    info: 'bg-primary text-primary-foreground'
  };

  const trendColors = {
    increase: 'text-success',
    decrease: 'text-critical',
    neutral: 'text-muted-foreground'
  };

  return (
    <Card className={`shadow-medical hover:shadow-elevated transition-all duration-300 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${status ? statusColors[status] : 'bg-primary/10'}`}>
          <Icon className={`h-4 w-4 ${status ? 'text-white' : 'text-primary'}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mb-2">
            {subtitle}
          </p>
        )}
        {trend && (
          <Badge variant="secondary" className={`text-xs ${trendColors[trend.type]}`}>
            {trend.value}
          </Badge>
        )}
        {children && (
          <div className="mt-3">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
}