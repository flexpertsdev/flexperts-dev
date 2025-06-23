
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Star, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  MessageSquare,
  TrendingUp,
  Award,
  Code2,
  Palette,
  Megaphone,
  Play,
  Pause,
  ChevronRight,
  AlertCircle,
  Zap,
  DollarSign
} from "lucide-react";

const WeBuild = () => {
  const [activeDemo, setActiveDemo] = useState<'experts' | 'process' | 'results'>('experts');
  const [isPlaying, setIsPlaying] = useState(true);
  const [demoStep, setDemoStep] = useState(0);

  // Auto-cycle through demo steps
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, activeDemo]);

  // Interactive Demo Component
  const InteractiveDemo = () => {
    if (activeDemo === 'experts') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          
          {/* Expert Marketplace */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Expert Marketplace</h4>
            <div className="grid grid-cols-2 gap-4">
              {/* Expert 1 */}
              <div className={`bg-white rounded-lg p-4 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Sarah Johnson</h5>
                    <p className="text-xs text-gray-600">Frontend Expert</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(127)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">React/Next.js</span>
                    <span className="text-green-600 font-medium">$85/hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Available</span>
                    <span className="text-gray-500">🇺🇸 EST</span>
                  </div>
                </div>
                <div className={`mt-3 transition-all duration-500 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-xs text-gray-600 mb-1">Recent projects:</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Expert 2 */}
              <div className={`bg-white rounded-lg p-4 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Mike Kim</h5>
                    <p className="text-xs text-gray-600">Full-Stack Expert</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(89)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Node.js/Python</span>
                    <span className="text-green-600 font-medium">$95/hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Available</span>
                    <span className="text-gray-500">🇬🇧 GMT</span>
                  </div>
                </div>
              </div>

              {/* Expert 3 */}
              <div className={`bg-white rounded-lg p-4 transition-all duration-700 delay-600 ${demoStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Ana Lopez</h5>
                    <p className="text-xs text-gray-600">UI/UX Designer</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(156)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Figma/Design</span>
                    <span className="text-green-600 font-medium">$75/hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Available</span>
                    <span className="text-gray-500">🇪🇸 CET</span>
                  </div>
                </div>
              </div>

              {/* Expert 4 */}
              <div className={`bg-white rounded-lg p-4 transition-all duration-700 delay-900 ${demoStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    RB
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Rachel Brown</h5>
                    <p className="text-xs text-gray-600">Marketing Expert</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(92)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">SEO/Content</span>
                    <span className="text-green-600 font-medium">$65/hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Available</span>
                    <span className="text-gray-500">🇦🇺 AEST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Score */}
            <div className={`absolute bottom-6 left-6 right-6 bg-gray-800 rounded-lg p-4 transition-all duration-700 ${demoStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">AI Match Score</p>
                  <p className="text-gray-400 text-xs">Based on your project needs</p>
                </div>
                <div className="text-2xl font-bold text-green-400">95%</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeDemo === 'process') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          
          {/* Project Process */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Your Project Timeline</h4>
            
            {/* Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-700"></div>
              <div className={`absolute left-8 top-8 w-0.5 bg-green-500 transition-all duration-1000`} 
                   style={{ height: `${demoStep * 25}%` }}></div>
              
              {/* Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className={`flex items-start gap-4 transition-all duration-500 ${demoStep >= 0 ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    demoStep >= 0 ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h5 className="text-white font-medium mb-1">Project Brief</h5>
                    <p className="text-gray-400 text-sm">Share your vision and requirements</p>
                    <p className="text-green-400 text-xs mt-1">Day 1</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`flex items-start gap-4 transition-all duration-500 ${demoStep >= 1 ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    demoStep >= 1 ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h5 className="text-white font-medium mb-1">Team Assembly</h5>
                    <p className="text-gray-400 text-sm">AI matches perfect experts for your project</p>
                    <p className="text-green-400 text-xs mt-1">Day 2-3</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`flex items-start gap-4 transition-all duration-500 ${demoStep >= 2 ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    demoStep >= 2 ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h5 className="text-white font-medium mb-1">Development Sprint</h5>
                    <p className="text-gray-400 text-sm">Rapid iteration with daily updates</p>
                    <p className="text-green-400 text-xs mt-1">Day 4-12</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`flex items-start gap-4 transition-all duration-500 ${demoStep >= 3 ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    demoStep >= 3 ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h5 className="text-white font-medium mb-1">Launch Ready</h5>
                    <p className="text-gray-400 text-sm">Deployed and ready for users</p>
                    <p className="text-green-400 text-xs mt-1">Day 14</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-green-900/20"></div>
          
          {/* Results Dashboard */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Client Success Stories</h4>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="text-3xl font-bold text-green-400 mb-1">127</div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="text-3xl font-bold text-blue-400 mb-1">4.9</div>
                <p className="text-gray-400 text-sm">Average Rating</p>
              </div>
              <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-700 delay-600 ${demoStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="text-3xl font-bold text-purple-400 mb-1">14</div>
                <p className="text-gray-400 text-sm">Days Average Delivery</p>
              </div>
              <div className={`bg-gray-800 rounded-lg p-4 transition-all duration-700 delay-900 ${demoStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="text-3xl font-bold text-orange-400 mb-1">92%</div>
                <p className="text-gray-400 text-sm">Client Retention</p>
              </div>
            </div>

            {/* Recent Project */}
            <div className={`bg-white rounded-lg p-4 transition-all duration-700 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg"></div>
                <div className="flex-1">
                  <h5 className="font-semibold">TechStartup MVP</h5>
                  <p className="text-sm text-gray-600 mb-2">SaaS Dashboard built in 12 days</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      5.0 rating
                    </span>
                    <span className="text-gray-500">React + Node.js</span>
                    <span className="text-green-600 font-medium">$5,200</span>
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
                Expert Teams
                <span className="text-gradient block">On Demand</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                From quick website revamps to full MVP development. Our vetted experts deliver quality projects in record time.
              </p>
              
              {/* Demo Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveDemo('experts')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'experts' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Expert Network
                </button>
                <button
                  onClick={() => setActiveDemo('process')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'process' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="w-4 h-4 inline mr-2" />
                  Fast Process
                </button>
                <button
                  onClick={() => setActiveDemo('results')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'results' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Award className="w-4 h-4 inline mr-2" />
                  Results
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                >
                  <Link to="/login">
                    Start Your Project
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

      {/* Services Tabs */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="revamp" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/20 backdrop-blur-sm mb-12">
              <TabsTrigger value="revamp" className="text-lg py-3">Website Revamp</TabsTrigger>
              <TabsTrigger value="custom" className="text-lg py-3">Custom Development</TabsTrigger>
            </TabsList>

            <TabsContent value="revamp" className="space-y-12">
              {/* EU Accessibility Warning */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-red-800 mb-2">⚠️ EU Accessibility Deadline: June 28, 2025</h3>
                <p className="text-red-700">Don't get caught unprepared. Transform your website to meet new EU accessibility requirements.</p>
              </div>

              {/* Revamp Packages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Basic Revamp</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ AI-powered website analysis</li>
                      <li>✅ Modern responsive design</li>
                      <li>✅ EU Accessibility compliance</li>
                      <li>✅ SEO optimization</li>
                      <li>✅ 24-hour delivery</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 ring-2 ring-primary-500">
                  <CardHeader>
                    <CardTitle className="text-xl">Premium Revamp</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$1,500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Everything in Basic</li>
                      <li>✅ Custom brand styling</li>
                      <li>✅ New content sections</li>
                      <li>✅ Advanced functionality</li>
                      <li>✅ Analytics setup</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Choose Premium
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Complete Transform</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$3,000</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Everything in Premium</li>
                      <li>✅ Full content rewrite</li>
                      <li>✅ Advanced integrations</li>
                      <li>✅ E-commerce setup</li>
                      <li>✅ 3 months support</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Transform Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-12">
              {/* Custom Development Packages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Standard MVP</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$5,000</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Custom MVP Development</li>
                      <li>✅ UI/UX Design</li>
                      <li>✅ Technical Architecture</li>
                      <li>✅ 2-Week Delivery</li>
                      <li>✅ 1 Month Support</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Start Project
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 ring-2 ring-primary-500">
                  <CardHeader>
                    <CardTitle className="text-xl">With Marketing</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$7,500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Everything in Standard</li>
                      <li>✅ Marketing Strategy</li>
                      <li>✅ Social Media Setup</li>
                      <li>✅ Competitor Analysis</li>
                      <li>✅ Content Creation</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Launch with Marketing
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Full Service</CardTitle>
                    <div className="text-3xl font-bold text-primary-600">$12,500</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Everything in Marketing</li>
                      <li>✅ SEO Optimization</li>
                      <li>✅ Partnership Development</li>
                      <li>✅ Launch Strategy</li>
                      <li>✅ 3 Months Support</li>
                    </ul>
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Go Full Service
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default WeBuild;
