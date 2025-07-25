import { FileText, Upload, FolderOpen, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FileManager = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">File Manager</h1>
          <p className="text-muted-foreground mt-1">
            Organize and manage all your project files and documents.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Coming Soon */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            File Management System
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">File Management Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            Upload, organize, and share files with clients. Support for documents, images, and media files.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Secure Upload</h4>
              <p className="text-sm text-muted-foreground">Drag & drop file uploads</p>
            </div>
            <div className="text-center">
              <FolderOpen className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Organization</h4>
              <p className="text-sm text-muted-foreground">Client & project folders</p>
            </div>
            <div className="text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium">Preview & Share</h4>
              <p className="text-sm text-muted-foreground">In-browser preview & sharing</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileManager;