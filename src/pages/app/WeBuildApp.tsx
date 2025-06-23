import React from "react";
import { Routes, Route } from "react-router-dom";
import AskFlexiChat from "@/components/chat/AskFlexiChat";
import SpaceChat from "@/components/chat/SpaceChat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Calendar,
  Clock,
  MessageSquare,
  Star,
  TrendingUp,
  Award,
  Briefcase,
} from "lucide-react";

const WeBuildDashboard = () => {
  // Mock data for experts
  const experts = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      skills: ["React", "Node.js", "AWS"],
      availability: "Available",
      avatar: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      title: "UI/UX Designer",
      rating: 4.8,
      reviews: 98,
      hourlyRate: 75,
      skills: ["Figma", "Design Systems", "User Research"],
      availability: "Busy",
      avatar: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Emily Watson",
      title: "DevOps Engineer",
      rating: 5.0,
      reviews: 64,
      hourlyRate: 95,
      skills: ["Kubernetes", "CI/CD", "Docker"],
      availability: "Available",
      avatar: "/placeholder.svg",
    },
  ];

  const activeProjects = [
    {
      id: "1",
      name: "Mobile App Redesign",
      expert: "Sarah Chen",
      status: "In Progress",
      progress: 65,
      nextMilestone: "UI Implementation",
      dueDate: "Dec 15, 2024",
    },
    {
      id: "2",
      name: "E-commerce Backend",
      expert: "Michael Rodriguez",
      status: "Review",
      progress: 90,
      nextMilestone: "Final Testing",
      dueDate: "Dec 10, 2024",
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Expert Collaboration Hub</h1>
        <p className="text-muted-foreground">
          Connect with skilled professionals to bring your ideas to life.
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
                <p className="text-2xl font-bold">3</p>
              </div>
              <Briefcase className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Total Spent
                </p>
                <p className="text-2xl font-bold">$4,280</p>
              </div>
              <TrendingUp className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Hours Saved
                </p>
                <p className="text-2xl font-bold">124</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Experts Hired
                </p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Projects</CardTitle>
            <Button size="sm">New Project</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {project.expert.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      with {project.expert} • Due {project.dueDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge
                      variant={
                        project.status === "In Progress"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {project.nextMilestone}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Experts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recommended Experts</CardTitle>
            <Button size="sm" variant="outline">
              Browse All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experts.map((expert) => (
              <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={expert.avatar} />
                      <AvatarFallback>
                        {expert.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Badge
                      variant={
                        expert.availability === "Available"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {expert.availability}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-1">{expert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {expert.title}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">
                        {expert.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({expert.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {expert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      ${expert.hourlyRate}/hr
                    </span>
                    <Button size="sm">Hire</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const WeBuildApp = () => {
  return (
    <Routes>
      <Route path="/" element={<WeBuildDashboard />} />
      <Route path="/ask-flexi" element={<AskFlexiChat />} />
      <Route path="/hub/:hubId/space/:spaceId" element={<SpaceChat />} />
    </Routes>
  );
};

export default WeBuildApp;