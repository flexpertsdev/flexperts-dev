
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AuthenticatedLayout from "./components/layout/AuthenticatedLayout";
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
          
          {/* Authenticated routes */}
          <Route path="/app" element={<AuthenticatedLayout />}>
            <Route path="you-build/*" element={<YouBuildApp />} />
            <Route path="we-build/*" element={<WeBuildApp />} />
            <Route path="build-together/*" element={<BuildTogetherApp />} />
            <Route index element={<YouBuildApp />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
