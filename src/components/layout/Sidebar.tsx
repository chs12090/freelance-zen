import { 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  CheckSquare, 
  Calendar, 
  FileText,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: LayoutDashboard,
      description: "Overview & metrics"
    },
    { 
      id: "clients", 
      label: "Clients", 
      icon: Users,
      description: "Manage client relationships"
    },
    { 
      id: "projects", 
      label: "Projects", 
      icon: FolderOpen,
      description: "Track project progress"
    },
    { 
      id: "tasks", 
      label: "Task Board", 
      icon: CheckSquare,
      description: "Kanban task management"
    },
    { 
      id: "meetings", 
      label: "Meetings", 
      icon: Calendar,
      description: "Schedule & notes"
    },
    { 
      id: "files", 
      label: "File Manager", 
      icon: FileText,
      description: "Organize documents"
    },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border shadow-sm">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-auto p-3 text-left transition-smooth",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-muted/50"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <div className="flex items-center w-full">
                  <Icon className={cn("h-4 w-4 mr-3", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                  <div className="flex-1">
                    <div className={cn("font-medium", isActive ? "text-primary-foreground" : "text-foreground")}>
                      {item.label}
                    </div>
                    <div className={cn("text-xs", isActive ? "text-primary-foreground/80" : "text-muted-foreground")}>
                      {item.description}
                    </div>
                  </div>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>
              </Button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;