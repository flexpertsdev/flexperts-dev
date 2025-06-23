
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Sparkles, 
  Instagram, 
  Youtube,
  MessageSquare,
  BarChart3,
  Play,
  Pause,
  ChevronRight,
  CheckCircle,
  Zap,
  Award,
  ShoppingBag,
  Target,
  Heart
} from "lucide-react";

const BuildTogether = () => {
  const [activeDemo, setActiveDemo] = useState<'earnings' | 'products' | 'analytics'>('earnings');
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
    if (activeDemo === 'earnings') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-yellow-900/20"></div>
          
          {/* Earnings Dashboard */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Your Earnings Dashboard</h4>
            
            {/* Earnings Stats */}
            <div className="mb-6">
              <div className={`bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm opacity-90">Total Earnings</p>
                    <p className="text-3xl font-bold">$12,450</p>
                  </div>
                  <TrendingUp className="w-8 h-8 opacity-50" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-300">+23%</span>
                  <span className="opacity-70">vs last month</span>
                </div>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-gray-400 text-xs mb-1">This Month</p>
                <p className="text-white text-xl font-bold">$2,890</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-xs text-gray-400">75%</span>
                </div>
              </div>
              
              <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-700 delay-600 ${demoStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-gray-400 text-xs mb-1">Active Subscribers</p>
                <p className="text-white text-xl font-bold">156</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-green-400">
                  <span>+12 this week</span>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className={`transition-all duration-700 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-400 text-sm mb-3">Top Performing Products</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI Content Generator</p>
                        <p className="text-xs text-gray-500">89 subscribers</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">$890/mo</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Analytics Dashboard</p>
                        <p className="text-xs text-gray-500">67 subscribers</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">$670/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeDemo === 'products') {
      return (
        <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          
          {/* Product Showcase */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Your Product Catalog</h4>
            
            {/* Featured Product */}
            <div className={`bg-white rounded-lg p-4 mb-4 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold">AI Content Assistant Pro</h5>
                  <p className="text-sm text-gray-600 mb-2">Perfect for content creators who need help with captions, posts, and engagement</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-green-600">$19.99<span className="text-sm text-gray-500">/mo</span></span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">You earn: $10/mo</span>
                  </div>
                </div>
              </div>
              
              {/* Product Features */}
              <div className={`grid grid-cols-2 gap-2 mt-3 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-xs bg-gray-50 rounded p-2">
                  <CheckCircle className="w-3 h-3 text-green-500 inline mr-1" />
                  AI Caption Writer
                </div>
                <div className="text-xs bg-gray-50 rounded p-2">
                  <CheckCircle className="w-3 h-3 text-green-500 inline mr-1" />
                  Hashtag Generator
                </div>
                <div className="text-xs bg-gray-50 rounded p-2">
                  <CheckCircle className="w-3 h-3 text-green-500 inline mr-1" />
                  Content Calendar
                </div>
                <div className="text-xs bg-gray-50 rounded p-2">
                  <CheckCircle className="w-3 h-3 text-green-500 inline mr-1" />
                  Analytics Insights
                </div>
              </div>
            </div>

            {/* Marketing Assets */}
            <div className={`transition-all duration-700 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-400 text-sm mb-2">Marketing Assets</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <Instagram className="w-6 h-6 text-pink-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-300">IG Stories</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <Youtube className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-300">Video Ads</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <MessageSquare className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-300">Email Copy</p>
                </div>
              </div>
            </div>

            {/* AI Content Suggestion */}
            <div className={`absolute bottom-6 left-6 right-6 bg-gray-800 rounded-lg p-3 transition-all duration-700 ${demoStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-green-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Promotion Idea:</p>
                  <p className="text-gray-300 text-xs">"Limited time: First 50 subscribers get 30% off for life!"</p>
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
          
          {/* Analytics Dashboard */}
          <div className="relative p-6 h-full">
            <h4 className="text-white font-semibold mb-4">Campaign Analytics</h4>
            
            {/* Performance Overview */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-700 ${demoStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <p className="text-gray-400 text-xs">Reach</p>
                </div>
                <p className="text-white text-xl font-bold">45.2K</p>
                <p className="text-xs text-green-400">+15% this week</p>
              </div>
              
              <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-700 delay-300 ${demoStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <p className="text-gray-400 text-xs">Engagement</p>
                </div>
                <p className="text-white text-xl font-bold">8.7%</p>
                <p className="text-xs text-green-400">Above average</p>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className={`mb-4 transition-all duration-700 ${demoStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-400 text-sm mb-2">Conversion Funnel</p>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Views</span>
                    <span className="text-gray-400">45,200</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Clicks</span>
                    <span className="text-gray-400">3,816</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Sign-ups</span>
                    <span className="text-gray-400">342</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">Conversions</span>
                    <span className="text-gray-400">156</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Performing Content */}
            <div className={`bg-white rounded-lg p-3 transition-all duration-700 ${demoStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xs text-gray-500 mb-2">Best Performing Post</p>
              <div className="flex items-start gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">"5 AI Tools That Changed My Life"</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span>12.3K views</span>
                    <span>•</span>
                    <span>892 clicks</span>
                    <span>•</span>
                    <span className="text-green-600 font-medium">23 sales</span>
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
                Turn Influence
                <span className="text-gradient block">Into Income</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                Partner with us to create custom AI products for your audience. Earn 50% revenue share on every sale.
              </p>
              
              {/* Demo Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveDemo('earnings')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'earnings' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Earnings Dashboard
                </button>
                <button
                  onClick={() => setActiveDemo('products')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'products' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 inline mr-2" />
                  Your Products
                </button>
                <button
                  onClick={() => setActiveDemo('analytics')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeDemo === 'analytics' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  Analytics
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                >
                  <Link to="#apply">
                    Apply Now
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
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div>
                  <p className="text-3xl font-bold text-primary-600">50%</p>
                  <p className="text-sm text-gray-600">Revenue Share</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">$50K+</p>
                  <p className="text-sm text-gray-600">Avg Annual Earnings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Demo */}
            <div className="h-[500px] lg:h-[600px]">
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Like Tupperware parties, but for AI. Build your own product empire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">1. Share Your Vision</h3>
                <p className="text-neutral-600 mb-6">Tell us about your audience and what AI product would help them most</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Audience demographics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Product ideas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Revenue goals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">2. We Build & Brand</h3>
                <p className="text-neutral-600 mb-6">Our team creates custom AI products matched to your brand</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Marketing materials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Launch support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">3. Promote & Earn</h3>
                <p className="text-neutral-600 mb-6">Share with your audience and earn 50% on every subscription</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>50% revenue share</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Monthly payouts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Real-time analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Integration Highlight */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">AI-Powered Marketing Support</h3>
                  <p className="text-gray-600 mb-4">
                    Ask Flexi helps you create compelling content for your audience. Generate social media posts, 
                    email campaigns, and promotional materials - all optimized for your specific audience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <Instagram className="w-6 h-6 text-pink-500 mb-2" />
                      <h4 className="font-medium mb-1">Social Content</h4>
                      <p className="text-sm text-gray-600">AI-generated posts & stories</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <MessageSquare className="w-6 h-6 text-blue-500 mb-2" />
                      <h4 className="font-medium mb-1">Email Campaigns</h4>
                      <p className="text-sm text-gray-600">Automated sequences</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <BarChart3 className="w-6 h-6 text-green-500 mb-2" />
                      <h4 className="font-medium mb-1">Performance Tips</h4>
                      <p className="text-sm text-gray-600">Data-driven insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Apply to Join
            </h2>
            <p className="text-xl text-neutral-600">
              Start your journey as a Flexfluencer
            </p>
          </div>

          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Flexfluencer Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Social Media Profiles
                </label>
                <Textarea placeholder="Share your social media profiles and follower counts" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Audience Demographics
                </label>
                <Textarea placeholder="Describe your audience (age, interests, profession, etc.)" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Product Ideas
                </label>
                <Textarea placeholder="What kind of AI product would you like to create for your audience?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Revenue Goals
                </label>
                <Input placeholder="What are your monthly revenue goals?" />
              </div>

              <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white text-lg py-3">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BuildTogether;
