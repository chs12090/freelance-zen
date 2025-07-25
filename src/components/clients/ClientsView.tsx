import { useState } from "react";
import { Plus, Search, Mail, Phone, Building, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projects: number;
  status: "active" | "inactive" | "potential";
  lastContact: string;
}

const ClientsView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app, this would come from your state management
  const [clients] = useState<Client[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john@techcorp.com",
      phone: "+1 (555) 123-4567",
      company: "TechCorp",
      projects: 3,
      status: "active",
      lastContact: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@startupxyz.com",
      phone: "+1 (555) 987-6543",
      company: "StartupXYZ",
      projects: 2,
      status: "active",
      lastContact: "1 week ago"
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@designco.com",
      phone: "+1 (555) 456-7890",
      company: "DesignCo",
      projects: 1,
      status: "inactive",
      lastContact: "2 weeks ago"
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma@newclient.com",
      phone: "+1 (555) 321-9876",
      projects: 0,
      status: "potential",
      lastContact: "3 days ago"
    }
  ]);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "inactive": return "secondary";
      case "potential": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clients</h1>
          <p className="text-muted-foreground mt-1">
            Manage your client relationships and contact information.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client, index) => (
          <Card key={client.id} className="shadow-md hover:shadow-lg transition-smooth animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground">{client.name}</h3>
                  {client.company && (
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <Building className="h-3 w-3 mr-1" />
                      <span className="text-sm">{client.company}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit Client</DropdownMenuItem>
                      <DropdownMenuItem>View Projects</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span className="truncate">{client.email}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  {client.projects} project{client.projects !== 1 ? 's' : ''}
                </span>
                <span className="text-sm text-muted-foreground">
                  Last contact: {client.lastContact}
                </span>
              </div>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <div className="text-center py-12">
          <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No clients found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm ? "Try adjusting your search terms." : "Get started by adding your first client."}
          </p>
          {!searchTerm && (
            <Button className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Client
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientsView;