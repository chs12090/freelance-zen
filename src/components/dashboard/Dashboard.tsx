import { Users, FolderOpen, CheckSquare, Calendar, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  // Mock data - in real app, this would come from your state management
  const stats = [
    {
      title: "Active Clients",
      value: 12,
      change: "+3 this month",
      changeType: "positive" as const,
      icon: Users,
      gradient: true
    },
    {
      title: "Ongoing Projects",
      value: 8,
      change: "2 due this week",
      changeType: "neutral" as const,
      icon: FolderOpen
    },
    {
      title: "Tasks in Progress",
      value: 24,
      change: "+6 completed today",
      changeType: "positive" as const,
      icon: CheckSquare
    },
    {
      title: "This Week's Revenue",
      value: "$4,250",
      change: "+15% from last week",
      changeType: "positive" as const,
      icon: TrendingUp
    }
  ];

  const upcomingDeadlines = [
    { id: 1, project: "E-commerce Redesign", client: "TechCorp", due: "Tomorrow", priority: "high" },
    { id: 2, project: "Mobile App MVP", client: "StartupXYZ", due: "In 3 days", priority: "medium" },
    { id: 3, project: "Brand Guidelines", client: "DesignCo", due: "Next week", priority: "low" }
  ];

  const recentMeetings = [
    { id: 1, title: "Project Kickoff - TechCorp", time: "2 hours ago", type: "completed" },
    { id: 2, title: "Weekly Check-in - StartupXYZ", time: "Tomorrow 2:00 PM", type: "upcoming" },
    { id: 3, title: "Final Review - DesignCo", time: "Friday 10:00 AM", type: "upcoming" }
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your freelance business.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div>
                  <p className="font-medium text-foreground">{deadline.project}</p>
                  <p className="text-sm text-muted-foreground">{deadline.client}</p>
                </div>
                <div className="text-right">
                  <Badge variant={
                    deadline.priority === "high" ? "destructive" :
                    deadline.priority === "medium" ? "default" : "secondary"
                  }>
                    {deadline.due}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-4">
              View All Deadlines
            </Button>
          </CardContent>
        </Card>

        {/* Recent Meetings */}
        <Card className="shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent & Upcoming Meetings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div>
                  <p className="font-medium text-foreground">{meeting.title}</p>
                  <p className="text-sm text-muted-foreground">{meeting.time}</p>
                </div>
                <Badge variant={meeting.type === "completed" ? "secondary" : "default"}>
                  {meeting.type}
                </Badge>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-4">
              View All Meetings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Users className="h-5 w-5" />
              Add Client
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <FolderOpen className="h-5 w-5" />
              New Project
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Meeting
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <CheckSquare className="h-5 w-5" />
              Add Task
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;