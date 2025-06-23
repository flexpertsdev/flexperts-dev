import React from "react";
import { Routes, Route } from "react-router-dom";
import AskFlexiChat from "@/components/chat/AskFlexiChat";
import SpaceChat from "@/components/chat/SpaceChat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  GitBranch,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart,
  Calendar,
  Zap,
  TrendingUp,
} from "lucide-react";

const BuildTogetherDashboard = () => {
  // Mock data for team projects
  const teamProjects = [
    {
      id: "1",
      name: "SaaS Dashboard Redesign",
      description: "Complete overhaul of the analytics dashboard",
      team: ["John Doe", "Sarah Chen", "Mike Wilson"],
      progress: 72,
      status: "active",
      dueDate: "Dec 20, 2024",
      tasks: {
        total: 24,
        completed: 18,
        inProgress: 4,
        todo: 2,
      },
    },
    {
      id: "2",
      name: "Mobile App MVP",
      description: "React Native app for iOS and Android",
      team: ["Emily Watson", "Alex Turner"],
      progress: 45,
      status: "active",
      dueDate: "Jan 15, 2025",
      tasks: {
        total: 32,
        completed: 14,
        inProgress: 8,
        todo: 10,
      },
    },
  ];

  const upcomingMilestones = [
    {
      id: "1",
      title: "Design Review",
      project: "SaaS Dashboard Redesign",
      date: "Dec 10, 2024",
      time: "2:00 PM",
      participants: 4,
    },
    {
      id: "2",
      title: "Sprint Planning",
      project: "Mobile App MVP",
      date: "Dec 12, 2024",
      time: "10:00 AM",
      participants: 5,
    },
  ];

  const teamActivity = [
    {
      id: "1",
      user: "Sarah Chen",
      action: "completed task",
      target: "User Authentication Flow",
      time: "10 minutes ago",
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      user: "Mike Wilson",
      action: "commented on",
      target: "API Integration",
      time: "1 hour ago",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      user: "Emily Watson",
      action: "created pull request",
      target: "Feature/payment-gateway",
      time: "2 hours ago",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Team Collaboration Center</h1>
        <p className="text-muted-foreground">
          Build amazing products together with your team.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Active Projects
                </p>
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  2 on track
                </p>
              </div>
              <BarChart className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Team Members
                </p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground mt-1">
                  8 active today
                </p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Tasks Completed
                </p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <CheckCircle className="h-3 w-3" />
                  This week
                </p>
              </div>
              <Zap className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Avg. Velocity
                </p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Per sprint
                </p>
              </div>
              <GitBranch className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Projects */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Projects</CardTitle>
                <Button size="sm">New Project</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamProjects.map((project) => (
                  <Card key={project.id} className="border">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{project.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {project.dueDate}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {project.team.slice(0, 3).map((member, idx) => (
                              <Avatar key={idx} className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-xs">
                                  {member.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {project.team.length > 3 && (
                              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background">
                                +{project.team.length - 3}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-3 text-xs">
                              <span className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                {project.tasks.completed}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3 text-yellow-600" />
                                {project.tasks.inProgress}
                              </span>
                              <span className="flex items-center gap-1">
                                <AlertCircle className="h-3 w-3 text-muted-foreground" />
                                {project.tasks.todo}
                              </span>
                            </div>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>
                        {activity.user.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">
                          {activity.action}
                        </span>{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Upcoming Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingMilestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="p-3 rounded-lg border bg-muted/30"
                  >
                    <h4 className="font-medium text-sm">{milestone.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {milestone.project}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span>{milestone.date} • {milestone.time}</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {milestone.participants}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" size="sm">
                View Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Team Discussion
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <GitBranch className="h-4 w-4 mr-2" />
                Create New Branch
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Create Task
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const BuildTogetherApp = () => {
  return (
    <Routes>
      <Route path="/" element={<BuildTogetherDashboard />} />
      <Route path="/ask-flexi" element={<AskFlexiChat />} />
      <Route path="/hub/:hubId/space/:spaceId" element={<SpaceChat />} />
    </Routes>
  );
};

export default BuildTogetherApp;