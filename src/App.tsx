
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AuthenticatedLayout from "./components/layout/AuthenticatedLayout";
import { AuthenticatedAppLayout } from "./layouts/AuthenticatedAppLayout";
import { CleanAuthenticatedLayout } from "./layouts/CleanAuthenticatedLayout";
import { SplitViewLayout } from "./layouts/SplitViewLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import YouBuild from "./pages/YouBuild";
import WeBuild from "./pages/WeBuild";
import BuildTogether from "./pages/BuildTogether";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import YouBuildApp from "./pages/app/YouBuildApp";
import WeBuildApp from "./pages/app/WeBuildApp";
import BuildTogetherApp from "./pages/app/BuildTogetherApp";
import { YouBuildDashboard } from "./pages/app/YouBuildDashboard";
import { AskFlexiChat } from "./components/app/AskFlexiChat";
import { SpaceView } from "./pages/app/SpaceView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/you-build" element={<YouBuild />} />
            <Route path="/we-build" element={<WeBuild />} />
            <Route path="/build-together" element={<BuildTogether />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Authenticated routes - Clean WhatsApp-inspired Layout */}
          <Route path="/app" element={<CleanAuthenticatedLayout />}>
            <Route path="you-build" element={<YouBuildDashboard />} />
            <Route path="you-build/ask-flexi" element={<AskFlexiChat />} />
            <Route path="you-build/space/:spaceId" element={<SpaceView />} />
            <Route path="we-build" element={<WeBuildApp />} />
            <Route path="we-build/space/:spaceId" element={<SpaceView />} />
            <Route path="build-together" element={<BuildTogetherApp />} />
            <Route path="build-together/space/:spaceId" element={<SpaceView />} />
            <Route index element={<YouBuildDashboard />} />
          </Route>
          
          {/* Split View Routes - AI Chat in sidebar */}
          <Route path="/app/visual" element={<SplitViewLayout />}>
            <Route path="flow-designer" element={<div className="flex-1 grid-bg flex items-center justify-center text-gray-400">Visual Flow Designer Content</div>} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
