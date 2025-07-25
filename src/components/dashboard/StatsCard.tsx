import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient?: boolean;
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  gradient = false 
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-smooth hover:shadow-lg",
      gradient && "bg-gradient-primary text-primary-foreground"
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={cn(
              "text-sm font-medium",
              gradient ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
              {title}
            </p>
            <p className={cn(
              "text-2xl font-bold mt-2",
              gradient ? "text-primary-foreground" : "text-foreground"
            )}>
              {value}
            </p>
            {change && (
              <p className={cn(
                "text-xs mt-1",
                gradient ? "text-primary-foreground/80" : (
                  changeType === "positive" ? "text-accent" :
                  changeType === "negative" ? "text-destructive" :
                  "text-muted-foreground"
                )
              )}>
                {change}
              </p>
            )}
          </div>
          <div className={cn(
            "p-3 rounded-lg",
            gradient 
              ? "bg-primary-foreground/20" 
              : "bg-primary/10"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              gradient ? "text-primary-foreground" : "text-primary"
            )} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;