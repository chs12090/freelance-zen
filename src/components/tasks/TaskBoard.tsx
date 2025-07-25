import { useState } from "react";
import { Plus, MoreHorizontal, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Task {
  id: number;
  title: string;
  description?: string;
  project: string;
  priority: "high" | "medium" | "low";
  dueDate?: string;
  assignee?: string;
  status: "todo" | "inprogress" | "done";
}

const TaskBoard = () => {
  // Mock data - in real app, this would come from your state management
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design homepage mockup",
      description: "Create wireframes and high-fidelity designs",
      project: "E-commerce Redesign",
      priority: "high",
      dueDate: "Tomorrow",
      assignee: "You",
      status: "todo"
    },
    {
      id: 2,
      title: "API integration",
      description: "Connect frontend with payment gateway",
      project: "E-commerce Redesign",
      priority: "medium",
      dueDate: "Next week",
      status: "inprogress"
    },
    {
      id: 3,
      title: "User testing session",
      project: "Mobile App MVP",
      priority: "low",
      dueDate: "In 2 weeks",
      status: "todo"
    },
    {
      id: 4,
      title: "Logo design iterations",
      description: "Create 3 logo variations",
      project: "Brand Guidelines",
      priority: "medium",
      status: "done"
    },
    {
      id: 5,
      title: "Database optimization",
      project: "Mobile App MVP",
      priority: "high",
      status: "inprogress"
    }
  ]);

  const columns = [
    { id: "todo", title: "To Do", color: "bg-muted" },
    { id: "inprogress", title: "In Progress", color: "bg-primary" },
    { id: "done", title: "Done", color: "bg-accent" }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
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
          <h1 className="text-3xl font-bold text-foreground">Task Board</h1>
          <p className="text-muted-foreground mt-1">
            Manage your tasks with an intuitive Kanban board.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id);
          
          return (
            <div key={column.id} className="space-y-4">
              {/* Column Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                  <h3 className="font-semibold text-lg text-foreground">{column.title}</h3>
                  <Badge variant="secondary">{columnTasks.length}</Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Tasks */}
              <div className="space-y-3 min-h-[500px]">
                {columnTasks.map((task, index) => (
                  <Card 
                    key={task.id} 
                    className="shadow-sm hover:shadow-md transition-smooth cursor-pointer animate-slide-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground leading-tight">{task.title}</h4>
                          {task.description && (
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          )}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Edit Task</DropdownMenuItem>
                            <DropdownMenuItem>Move to...</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-3">
                      {/* Project */}
                      <div className="text-xs text-muted-foreground font-medium">
                        {task.project}
                      </div>

                      {/* Task Meta */}
                      <div className="flex items-center justify-between">
                        <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                          {task.priority}
                        </Badge>
                        <div className="flex items-center gap-2">
                          {task.dueDate && (
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {task.dueDate}
                            </div>
                          )}
                          {task.assignee && (
                            <div className="flex items-center text-xs text-muted-foreground">
                              <User className="h-3 w-3 mr-1" />
                              {task.assignee}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Add Task Button */}
                <Button 
                  variant="outline" 
                  className="w-full h-16 border-dashed border-2 text-muted-foreground hover:text-foreground hover:border-primary transition-smooth"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add a task
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskBoard;