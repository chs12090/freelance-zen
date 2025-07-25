import { useState } from "react";
import { Plus, Search, Calendar, User, MoreHorizontal, FolderOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  status: "not-started" | "in-progress" | "on-hold" | "completed" | "canceled";
  priority: "high" | "medium" | "low";
  startDate: string;
  endDate: string;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
}

const ProjectsView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app, this would come from your state management
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Complete overhaul of the online store interface and user experience",
      client: "TechCorp",
      status: "in-progress",
      priority: "high",
      startDate: "Jan 15, 2024",
      endDate: "Mar 1, 2024",
      progress: 65,
      tasksCompleted: 13,
      totalTasks: 20
    },
    {
      id: 2,
      title: "Mobile App MVP",
      description: "Development of minimum viable product for iOS and Android",
      client: "StartupXYZ",
      status: "in-progress",
      priority: "medium",
      startDate: "Feb 1, 2024",
      endDate: "Apr 15, 2024",
      progress: 30,
      tasksCompleted: 6,
      totalTasks: 18
    },
    {
      id: 3,
      title: "Brand Guidelines",
      description: "Complete brand identity and style guide documentation",
      client: "DesignCo",
      status: "completed",
      priority: "low",
      startDate: "Dec 1, 2023",
      endDate: "Jan 30, 2024",
      progress: 100,
      tasksCompleted: 8,
      totalTasks: 8
    },
    {
      id: 4,
      title: "Website Maintenance",
      description: "Ongoing maintenance and updates for corporate website",
      client: "TechCorp",
      status: "on-hold",
      priority: "low",
      startDate: "Jan 1, 2024",
      endDate: "Dec 31, 2024",
      progress: 15,
      tasksCompleted: 3,
      totalTasks: 24
    }
  ]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "not-started": return "secondary";
      case "in-progress": return "default";
      case "on-hold": return "outline";
      case "completed": return "default";
      case "canceled": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "not-started": return "Not Started";
      case "in-progress": return "In Progress";
      case "on-hold": return "On Hold";
      case "completed": return "Completed";
      case "canceled": return "Canceled";
      default: return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage all your client projects in one place.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Sort</Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={project.id} className="shadow-md hover:shadow-lg transition-smooth animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground leading-tight">{project.title}</h3>
                  <div className="flex items-center mt-2 text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    <span className="text-sm">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getPriorityColor(project.priority)} className="text-xs">
                    {project.priority}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem>View Tasks</DropdownMenuItem>
                      <DropdownMenuItem>Add Files</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              
              {/* Status */}
              <div className="flex items-center justify-between">
                <Badge variant={getStatusColor(project.status)}>
                  {getStatusLabel(project.status)}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {project.tasksCompleted}/{project.totalTasks} tasks
                </span>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Dates */}
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{project.startDate}</span>
                </div>
                <span>Due: {project.endDate}</span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Tasks
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm ? "Try adjusting your search terms." : "Get started by creating your first project."}
          </p>
          {!searchTerm && (
            <Button className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Project
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsView;