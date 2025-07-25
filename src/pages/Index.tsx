import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import ClientsView from "@/components/clients/ClientsView";
import ProjectsView from "@/components/projects/ProjectsView";
import TaskBoard from "@/components/tasks/TaskBoard";
import MeetingsView from "@/components/meetings/MeetingsView";
import FileManager from "@/components/files/FileManager";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "clients":
        return <ClientsView />;
      case "projects":
        return <ProjectsView />;
      case "tasks":
        return <TaskBoard />;
      case "meetings":
        return <MeetingsView />;
      case "files":
        return <FileManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
