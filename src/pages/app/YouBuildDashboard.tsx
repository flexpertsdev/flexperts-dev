import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Layers,
  Code2,
  Plus,
  ChevronRight,
  Clock,
  TrendingUp,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  lastEdited: string;
  status: 'active' | 'in-progress' | 'draft';
  progress: number;
}

export const YouBuildDashboard = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration',
      lastEdited: '2 hours ago',
      status: 'active',
      progress: 75,
    },
    {
      id: '2',
      name: 'Portfolio Website',
      description: 'Personal portfolio with blog functionality',
      lastEdited: 'yesterday',
      status: 'in-progress',
      progress: 45,
    },
    {
      id: '3',
      name: 'Mobile App Prototype',
      description: 'React Native fitness tracking app',
      lastEdited: '3 days ago',
      status: 'draft',
      progress: 20,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">You Build Dashboard</h1>
            <p className="text-gray-600">Your AI-powered development workspace</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* AI Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>
                Get instant help with code, design, and architecture decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="link" 
                className="p-0 text-green-600 group-hover:text-green-700"
                onClick={() => navigate('/app/you-build/ask-flexi')}
              >
                Open Assistant
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Visual Planning</CardTitle>
              <CardDescription>
                Create flowcharts and wireframes with drag-and-drop simplicity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="link" 
                className="p-0 text-green-600 group-hover:text-green-700"
                onClick={() => navigate('/app/you-build/visual-planner')}
              >
                Start Planning
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Code2 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Code Generation</CardTitle>
              <CardDescription>
                Generate code from natural language descriptions instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="link" 
                className="p-0 text-green-600 group-hover:text-green-700"
              >
                Generate Code
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Projects</h2>
            <Button variant="ghost" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    index !== projects.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                  onClick={() => navigate(`/app/you-build/project/${project.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-medium text-gray-900">{project.name}</h3>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.lastEdited}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {project.progress}% complete
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-green-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Projects</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Code Generated</p>
                  <p className="text-2xl font-bold">48K</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Assists</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Time Saved</p>
                  <p className="text-2xl font-bold">72h</p>
                </div>
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};