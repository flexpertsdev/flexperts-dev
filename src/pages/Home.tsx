import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  Code2, 
  Palette, 
  Users, 
  TrendingUp,
  DollarSign,
  MessageSquare,
  Zap,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const [activeDemo, setActiveDemo] = useState<'you-build' | 'we-build' | 'build-together'>('you-build');
  const [isPlaying, setIsPlaying] = useState(true);
  const [demoStep, setDemoStep] = useState(0);

  // Auto-cycle through demos
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, activeDemo]);

  // Interactive Demo Component
  const InteractiveDemo = () => {
    if (activeDemo === 'you-build') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          
          {/* Visual Flow Designer Demo */}
          <div className="relative p-6 h-full flex items-center justify-center">
            <div className="w-full max-w-2xl">
              {/* Flow nodes */}
              <div className="relative">
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <path 
                    className={`transition-all duration-1000 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
                    stroke="#22C55E" 
                    strokeWidth="2" 
                    fill="none" 
                    d="M 150 60 Q 250 60 250 150"
                  />
                  <path 
                    className={`transition-all duration-1000 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
                    stroke="#22C55E" 
                    strokeWidth="2" 
                    fill="none" 
                    d="M 400 180 L 500 180"
                  />
                </svg>
                
                {/* Start Node */}
                <div className={`absolute bg-white rounded-lg p-4 shadow-lg transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                     style={{ left: '50px', top: '30px', zIndex: 2 }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Login Page</span>
                  </div>
                </div>

                {/* Decision Node */}
                <div className={`absolute bg-white rounded-lg p-4 shadow-lg transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                     style={{ left: '200px', top: '120px', transform: 'rotate(45deg)', zIndex: 2 }}>
                  <div style={{ transform: 'rotate(-45deg)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">?</span>
                      </div>
                      <span className="font-medium">Valid?</span>
                    </div>
                  </div>
                </div>

                {/* Success Node */}
                <div className={`absolute bg-white rounded-lg p-4 shadow-lg transition-all duration-700 delay-600 ${demoStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                     style={{ left: '450px', top: '150px', zIndex: 2 }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Dashboard</span>
                  </div>
                </div>

                {/* AI Assistant Popup */}
                <div className={`absolute bg-gray-800 text-white rounded-lg p-4 shadow-xl transition-all duration-700 ${demoStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                     style={{ right: '20px', bottom: '20px', zIndex: 3 }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Ask Flexi suggests:</p>
                      <p className="text-xs text-gray-300">Add 2FA verification for better security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeDemo === 'we-build') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          
          {/* Expert Collaboration Demo */}
          <div className="relative p-6 h-full">
            <div className="h-full flex flex-col">
              {/* Project Header */}
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">ACME Corp Dashboard</h4>
                    <p className="text-gray-400 text-sm">React + TypeScript MVP</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
                    <span className="text-green-400 text-sm">75% Complete</span>
                  </div>
                </div>
              </div>

              {/* Expert Cards */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {/* Expert 1 */}
                <div className={`bg-white rounded-lg p-4 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      SJ
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Frontend Expert</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">React Components</span>
                      <span className="text-green-600">✓ Done</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Responsive Design</span>
                      <span className="text-yellow-600">In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Expert 2 */}
                <div className={`bg-white rounded-lg p-4 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      MK
                    </div>
                    <div>
                      <p className="font-medium">Mike Kim</p>
                      <p className="text-xs text-gray-500">Backend Expert</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">API Development</span>
                      <span className="text-green-600">✓ Done</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Database Setup</span>
                      <span className="text-green-600">✓ Done</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className={`bg-gray-800 rounded-lg p-4 mt-4 transition-all duration-700 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  <div className="flex-1">
                    <p className="text-white text-sm">Client: "The new dashboard looks amazing!"</p>
                    <p className="text-gray-400 text-xs">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-yellow-900/20"></div>
          
          {/* Influencer Dashboard Demo */}
          <div className="relative p-6 h-full">
            <div className="h-full flex flex-col">
              {/* Earnings Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 mb-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Your Earnings This Month</p>
                    <p className="text-3xl font-bold">$2,450</p>
                  </div>
                  <TrendingUp className="w-8 h-8 opacity-50" />
                </div>
              </div>

              {/* Campaign Performance */}
              <div className="flex-1 space-y-3">
                {/* Campaign 1 */}
                <div className={`bg-white rounded-lg p-4 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">AI Code Assistant Campaign</h5>
                    <span className="text-green-600 font-medium">+$450</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Instagram Stories</span>
                    <span>•</span>
                    <span>5.2K views</span>
                    <span>•</span>
                    <span>18 conversions</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                {/* Campaign 2 */}
                <div className={`bg-white rounded-lg p-4 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">UI Components Pack</h5>
                    <span className="text-green-600 font-medium">+$320</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>YouTube Review</span>
                    <span>•</span>
                    <span>8.1K views</span>
                    <span>•</span>
                    <span>12 conversions</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* AI Content Suggestion */}
              <div className={`bg-gray-800 rounded-lg p-4 mt-4 transition-all duration-700 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">New content idea:</p>
                    <p className="text-gray-300 text-sm">"5 Ways AI is Revolutionizing Coding" - Predicted reach: 10K+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Interactive Demo */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Build Smarter,
                <span className="text-gradient block">Not Harder</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                AI-powered development tools, expert collaboration, and marketing partnerships - all in one platform
              </p>
              
              {/* Demo Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveDemo('you-build')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'you-build' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Code2 className="w-4 h-4 inline mr-2" />
                  Visual Development
                </button>
                <button
                  onClick={() => setActiveDemo('we-build')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'we-build' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Expert Teams
                </button>
                <button
                  onClick={() => setActiveDemo('build-together')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'build-together' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Earn 50%
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                  onClick={() => {
                    document.getElementById('three-ways-to-build')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Options
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                </button>
              </div>
            </div>

            {/* Right - Interactive Demo */}
            <div className="h-[500px] lg:h-[600px]">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section with Enhanced Features */}
      <section id="three-ways-to-build" className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Three Ways to Build
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose your path based on your skills, timeline, and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* You Build - Enhanced */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <div className="text-center p-6 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">You Build</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Interactive tools with AI assistance. Visual flow designers, component builders, and real-time code generation.
                </p>
                
                {/* Feature List */}
                <ul className="text-left space-y-2 mb-6 flex-grow">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Visual flow designer</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>AI code generation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Component library</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Ask Flexi AI assistant</span>
                  </li>
                </ul>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-neutral-500">Start Free</p>
                  <p className="text-2xl font-bold text-primary-600">Pro $11.11/month</p>
                </div>
                <div className="space-y-2">
                  <Button asChild className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                    <Link to="/you-build">Learn More</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* We Build - Enhanced */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="text-center p-6 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">We Build</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Expert teams build your project. Real-time collaboration, milestone tracking, and quality guarantee.
                </p>
                
                {/* Service Types */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-medium text-sm">Website Revamp</div>
                    <div className="text-xs text-gray-600">AI-powered redesign</div>
                    <div className="text-lg font-bold text-primary-600 mt-1">From $500</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-medium text-sm">Custom MVP</div>
                    <div className="text-xs text-gray-600">Full-stack development</div>
                    <div className="text-lg font-bold text-primary-600 mt-1">From $5,000</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button asChild className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                    <Link to="/we-build">Learn More</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Build Together - Enhanced */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="text-center p-6 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Build Together</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Partner program for influencers. Promote products you love and earn 50% commission.
                </p>
                
                {/* Benefits */}
                <ul className="text-left space-y-2 mb-6 flex-grow">
                  <li className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>50% revenue share</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Marketing tools & assets</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <MessageSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>AI content generation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Real-time analytics</span>
                  </li>
                </ul>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-neutral-500">Average Monthly Earnings</p>
                  <p className="text-2xl font-bold text-primary-600">$2,000-$5,000</p>
                </div>
                <div className="space-y-2">
                  <Button asChild className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                    <Link to="/build-together">Learn More</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Experience the power of our platform with these interactive examples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Palette className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visual Flow Designer</h3>
                <p className="text-gray-600 mb-4">Drag and drop to create user journeys and application flows</p>
                <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700">
                  Try it now →
                </Link>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Code2 className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Code Generation</h3>
                <p className="text-gray-600 mb-4">Convert designs to production-ready code instantly</p>
                <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700">
                  Try it now →
                </Link>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contextual AI Assistant</h3>
                <p className="text-gray-600 mb-4">Get real-time suggestions as you build your project</p>
                <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700">
                  Try it now →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-neutral-50 to-primary-50/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Join the Building Revolution
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            Developers, entrepreneurs, and influencers worldwide are transforming their ideas into reality
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="glass-card border-0 transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-neutral-600">Countries</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-neutral-600">Active Builders</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$50K+</div>
                <div className="text-neutral-600">Partner Earnings</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 transform hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-neutral-600">AI Support</div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Ready to Start Building?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
              >
                <Link to="/login">
                  Start Free Trial
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  Book a Demo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;