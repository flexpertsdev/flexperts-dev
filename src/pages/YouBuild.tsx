
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Sparkles, 
  Code2, 
  GitBranch, 
  Database, 
  Layout, 
  Palette,
  MessageSquare,
  Zap,
  Play,
  Pause,
  ChevronRight,
  CheckCircle,
  Layers,
  Cpu,
  FileCode
} from "lucide-react";

const YouBuild = () => {
  const [activeDemo, setActiveDemo] = useState<'flow' | 'component' | 'code'>('flow');
  const [isPlaying, setIsPlaying] = useState(true);
  const [demoStep, setDemoStep] = useState(0);

  // Auto-cycle through demo steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying, activeDemo]);

  // Interactive Demo Component
  const InteractiveDemo = () => {
    if (activeDemo === 'flow') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          
          {/* Visual Flow Designer */}
          <div className="relative p-6 h-full">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10" 
                 style={{
                   backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }}></div>
            
            {/* Flow Nodes */}
            <div className="relative z-10">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path 
                  className={`transition-all duration-1000 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
                  stroke="#22C55E" 
                  strokeWidth="2" 
                  fill="none" 
                  d="M 150 80 Q 250 80 250 180"
                />
                <path 
                  className={`transition-all duration-1000 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
                  stroke="#22C55E" 
                  strokeWidth="2" 
                  fill="none" 
                  d="M 450 210 L 550 210"
                />
                <path 
                  className={`transition-all duration-1000 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}
                  stroke="#22C55E" 
                  strokeWidth="2" 
                  fill="none" 
                  d="M 450 250 L 550 350"
                />
              </svg>
              
              {/* User Input Node */}
              <div className={`absolute bg-white rounded-lg p-4 shadow-xl transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                   style={{ left: '50px', top: '50px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Layout className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">User Input</span>
                </div>
                <p className="text-xs text-gray-600">Form Component</p>
              </div>

              {/* API Call Node */}
              <div className={`absolute bg-white rounded-lg p-4 shadow-xl transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                   style={{ left: '200px', top: '150px', transform: 'rotate(45deg)' }}>
                <div style={{ transform: 'rotate(-45deg)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">API</span>
                  </div>
                  <p className="text-xs text-gray-600">Validate Data</p>
                </div>
              </div>

              {/* Success Path */}
              <div className={`absolute bg-white rounded-lg p-4 shadow-xl transition-all duration-700 delay-600 ${demoStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                   style={{ left: '500px', top: '180px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Success</span>
                </div>
                <p className="text-xs text-gray-600">Show Dashboard</p>
              </div>

              {/* Error Path */}
              <div className={`absolute bg-white rounded-lg p-4 shadow-xl transition-all duration-700 delay-900 ${demoStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                   style={{ left: '500px', top: '320px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">!</span>
                  </div>
                  <span className="font-medium">Error</span>
                </div>
                <p className="text-xs text-gray-600">Show Message</p>
              </div>

              {/* AI Assistant Popup */}
              <div className={`absolute bg-gray-800 text-white rounded-lg p-4 shadow-xl transition-all duration-700 ${demoStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                   style={{ right: '30px', top: '30px' }}>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium mb-1">AI Suggestion:</p>
                    <p className="text-xs text-gray-300">Add loading state between API call and results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeDemo === 'component') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          
          {/* Component Builder */}
          <div className="relative p-6 h-full flex">
            {/* Left Panel - Properties */}
            <div className="w-1/3 pr-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Component Properties</h4>
                <div className="space-y-3">
                  <div className={`transition-all duration-500 ${demoStep >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <label className="text-xs text-gray-400">Button Text</label>
                    <input type="text" value="Get Started" className="w-full bg-gray-700 text-white px-3 py-2 rounded text-sm" readOnly />
                  </div>
                  <div className={`transition-all duration-500 delay-300 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <label className="text-xs text-gray-400">Style</label>
                    <select className="w-full bg-gray-700 text-white px-3 py-2 rounded text-sm">
                      <option>Primary</option>
                      <option>Secondary</option>
                    </select>
                  </div>
                  <div className={`transition-all duration-500 delay-600 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <label className="text-xs text-gray-400">Size</label>
                    <div className="flex gap-2 mt-1">
                      <button className="px-3 py-1 bg-gray-700 text-white rounded text-xs">SM</button>
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">MD</button>
                      <button className="px-3 py-1 bg-gray-700 text-white rounded text-xs">LG</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Preview */}
            <div className="flex-1 pl-4">
              <div className="bg-white rounded-lg p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Welcome to Flexperts</h3>
                  <p className="text-gray-600 mb-6">Build amazing apps without code</p>
                  <button className={`
                    transition-all duration-500 
                    ${demoStep >= 0 ? 'opacity-100' : 'opacity-0'}
                    ${demoStep >= 2 ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
                    bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium
                  `}>
                    Get Started
                  </button>
                  
                  {/* Generated Code Preview */}
                  <div className={`mt-6 transition-all duration-500 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xs text-gray-500 mb-2">Generated React Code:</p>
                    <code className="text-xs bg-gray-100 p-2 rounded block text-left">
                      {'<Button variant="primary" size="md">Get Started</Button>'}
                    </code>
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
          
          {/* AI Code Generation */}
          <div className="relative p-6 h-full flex flex-col">
            {/* AI Chat */}
            <div className="mb-4">
              <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-500 ${demoStep >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">I'll help you create a user authentication system. Here's the code:</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-hidden">
              <div className="text-gray-400 mb-2">auth.service.ts</div>
              <pre className="text-gray-300">
                <code className={`transition-all duration-500 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
{`export class AuthService {
  private apiUrl = '/api/auth';`}
                </code>
                <code className={`block transition-all duration-500 delay-500 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
{`
  async login(email: string, password: string) {
    const response = await fetch(\`\${this.apiUrl}/login\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });`}
                </code>
                <code className={`block transition-all duration-500 delay-1000 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
{`
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  }
}`}
                </code>
              </pre>
            </div>

            {/* Code Actions */}
            <div className={`mt-4 flex gap-2 transition-all duration-500 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <button className="px-3 py-1.5 bg-green-600 text-white rounded text-sm">Copy Code</button>
              <button className="px-3 py-1.5 bg-gray-700 text-white rounded text-sm">Add to Project</button>
              <button className="px-3 py-1.5 bg-gray-700 text-white rounded text-sm">Explain Code</button>
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
                Build Smarter
                <span className="text-gradient block">With AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                Visual development tools powered by AI. Design flows, build components, and generate code - all in one place.
              </p>
              
              {/* Demo Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveDemo('flow')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'flow' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <GitBranch className="w-4 h-4 inline mr-2" />
                  Flow Designer
                </button>
                <button
                  onClick={() => setActiveDemo('component')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'component' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Layers className="w-4 h-4 inline mr-2" />
                  Component Builder
                </button>
                <button
                  onClick={() => setActiveDemo('code')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'code' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Code2 className="w-4 h-4 inline mr-2" />
                  AI Coder
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                >
                  <Link to="/login">
                    Start Free Trial
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
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

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A complete toolkit for visual development, powered by AI at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visual Flow Designer */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Visual Flow Designer</h3>
                <p className="text-neutral-600 mb-4 text-center">Design user journeys and application logic with drag-and-drop simplicity</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Drag & drop flow nodes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Pre-built templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Real-time validation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Export to code</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Component Builder */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Component Builder</h3>
                <p className="text-neutral-600 mb-4 text-center">Create reusable UI components without writing code</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Visual property editor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Live preview</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Style customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Component library</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* AI Code Assistant */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Ask Flexi AI</h3>
                <p className="text-neutral-600 mb-4 text-center">Your intelligent coding companion that understands context</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Natural language to code</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Context-aware suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Code explanation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Bug detection</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Database Designer */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Database Designer</h3>
                <p className="text-neutral-600 mb-4 text-center">Visual database schema design with relationship mapping</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Visual table editor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Relationship mapping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Auto migrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>SQL generation</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* API Builder */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">API Builder</h3>
                <p className="text-neutral-600 mb-4 text-center">Design and test APIs with automatic documentation</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Visual endpoint design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Request/response builder</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Built-in testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Auto documentation</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Code Export */}
            <GlassCard className="group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <FileCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 text-center">Code Export</h3>
                <p className="text-neutral-600 mb-4 text-center">Export clean, production-ready code in multiple frameworks</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>React/Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Vue/Nuxt</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Angular</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>Clean code output</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Planning Process */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Plan Before You Build
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Start with clear documentation. Every project begins with 5 essential documents that guide your entire development process.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Visual Workflow */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 transform -translate-y-1/2 hidden lg:block"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                {/* Step 1: Project Overview */}
                <div className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      1
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">Project Overview</h3>
                    <p className="text-sm text-gray-600 text-center mb-3">Define your vision, goals, and core concepts</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Project purpose</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Target audience</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Success metrics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Features */}
                <div className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      2
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">Features</h3>
                    <p className="text-sm text-gray-600 text-center mb-3">List and prioritize all functionality</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Core features</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>MVP scope</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Future roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: User Journeys */}
                <div className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      3
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">User Journeys</h3>
                    <p className="text-sm text-gray-600 text-center mb-3">Map how users interact with your app</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Flow diagrams</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>User personas</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Edge cases</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Pages & Components */}
                <div className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      4
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">Pages & Components</h3>
                    <p className="text-sm text-gray-600 text-center mb-3">Structure your application architecture</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Tech stack</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>File structure</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Component library</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5: Design System */}
                <div className="relative group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      5
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-center">Design System</h3>
                    <p className="text-sm text-gray-600 text-center mb-3">Define visual language and patterns</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Colors & typography</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>UI components</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        <span>Brand guidelines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Integration */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">AI-Assisted Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Ask Flexi guides you through each document, providing intelligent suggestions and best practices. 
                    Work on markdown documents with real-time AI assistance that understands your project context.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Contextual Suggestions</h4>
                        <p className="text-sm text-gray-600">AI understands your project and suggests relevant features</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Auto-Generation</h4>
                        <p className="text-sm text-gray-600">Generate user stories, components, and documentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-neutral-50 to-primary-50/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Free</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary-600">$0</span>
                  <span className="text-neutral-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Basic AI assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    3 projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Community support
                  </li>
                </ul>
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 ring-2 ring-primary-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Pro</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary-600">$11.11</span>
                  <span className="text-neutral-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Unlimited AI assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Unlimited projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Visual planning tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouBuild;
