import React from "react";
import { Routes, Route } from "react-router-dom";
import AskFlexiChat from "@/components/chat/AskFlexiChat";
import SpaceChat from "@/components/chat/SpaceChat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  FileCode,
  GitBranch,
  Terminal,
} from "lucide-react";

const YouBuildDashboard = () => {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <Button size="sm" variant="ghost">
                Start
              </Button>
            </div>
            <h3 className="font-semibold mb-1">Ask Flexi</h3>
            <p className="text-sm text-muted-foreground">
              Get instant AI assistance
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <Button size="sm" variant="ghost">
                Create
              </Button>
            </div>
            <h3 className="font-semibold mb-1">New Project</h3>
            <p className="text-sm text-muted-foreground">
              Start building something new
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <FileCode className="h-6 w-6 text-blue-600" />
              </div>
              <Button size="sm" variant="ghost">
                Browse
              </Button>
            </div>
            <h3 className="font-semibold mb-1">Templates</h3>
            <p className="text-sm text-muted-foreground">
              Start from a template
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-purple-600" />
              </div>
              <Button size="sm" variant="ghost">
                Import
              </Button>
            </div>
            <h3 className="font-semibold mb-1">Import Repository</h3>
            <p className="text-sm text-muted-foreground">
              Continue from GitHub
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">E-commerce Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    Last updated 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">75% Complete</p>
                  <Progress value={75} className="w-24 h-2" />
                </div>
                <Button size="sm">Open</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">API Integration Tool</h4>
                  <p className="text-sm text-muted-foreground">
                    Last updated yesterday
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">45% Complete</p>
                  <Progress value={45} className="w-24 h-2" />
                </div>
                <Button size="sm">Open</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  AI Queries Today
                </p>
                <p className="text-2xl font-bold">42</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% from yesterday
                </p>
              </div>
              <Target className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Active Projects
                </p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground mt-1">
                  2 deployed this week
                </p>
              </div>
              <Rocket className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Code Generated
                </p>
                <p className="text-2xl font-bold">1.2k</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Lines this month
                </p>
              </div>
              <Code className="h-8 w-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const YouBuildApp = () => {
  return (
    <Routes>
      <Route path="/" element={<YouBuildDashboard />} />
      <Route path="/ask-flexi" element={<AskFlexiChat />} />
      <Route path="/hub/:hubId/space/:spaceId" element={<SpaceChat />} />
    </Routes>
  );
};

export default YouBuildApp;