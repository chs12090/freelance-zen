import { Calendar, Clock, VideoIcon, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MeetingsView = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meetings</h1>
          <p className="text-muted-foreground mt-1">
            Schedule meetings and keep track of communication logs.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Meeting
        </Button>
      </div>

      {/* Coming Soon */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Meeting Management
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <VideoIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Meeting Management Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            Schedule meetings, manage video calls, and keep detailed meeting notes and recordings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Schedule & Track</h4>
              <p className="text-sm text-muted-foreground">Calendar integration and reminders</p>
            </div>
            <div className="text-center">
              <VideoIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Video Calls</h4>
              <p className="text-sm text-muted-foreground">Zoom, Meet integration</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Meeting Notes</h4>
              <p className="text-sm text-muted-foreground">Rich text notes and recordings</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetingsView;