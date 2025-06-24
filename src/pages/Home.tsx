import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  ChevronRight, 
  CheckCircle,
  Zap,
  Users,
  Shield,
  Code,
  Rocket,
  HeartHandshake
} from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState('you-build');
  const [activeFeature, setActiveFeature] = useState('feature-1');

  // Define demos for each path and feature combination
  const demos = {
    'you-build': {
      'feature-1': {
        title: 'AI-Powered Chat Assistant',
        content: (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-green-600 font-semibold mb-2">🤖 AI Assistant</div>
              <p className="text-gray-700">Hello! I understand you want to build a task management app. Let me help you get started...</p>
            </div>
            <div className="bg-green-100 rounded-lg p-4 ml-auto max-w-xs">
              <p className="text-gray-700">I need a simple todo app with categories</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-green-600 font-semibold mb-2">🤖 AI Assistant</div>
              <p className="text-gray-700">Perfect! I'll create a todo app with:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Task categories</li>
                <li>Priority levels</li>
                <li>Due dates</li>
                <li>Progress tracking</li>
              </ul>
              <div className="mt-4 bg-gray-100 rounded p-3">
                <p className="text-sm text-gray-600">Generating app structure...</p>
                <div className="mt-2 bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        )
      },
      'feature-2': {
        title: 'Visual Flow Designer',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Drag & Drop Interface Builder</h4>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 border-2 border-blue-200 rounded p-3 text-center">
                <div className="text-2xl mb-1">📝</div>
                <p className="text-sm">Form Input</p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded p-3 text-center">
                <div className="text-2xl mb-1">🔘</div>
                <p className="text-sm">Button</p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-200 rounded p-3 text-center">
                <div className="text-2xl mb-1">📊</div>
                <p className="text-sm">Chart</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <p className="text-sm text-gray-600 mb-2">Canvas</p>
              <div className="bg-white rounded p-4 min-h-[150px] border-2 border-dashed border-gray-300">
                <div className="bg-blue-100 rounded p-3 mb-3">
                  <p className="font-medium">User Input Form</p>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <p className="font-medium">Submit Button</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      'feature-3': {
        title: 'One-Click Deployment',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Deploy to Production</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Build Status</span>
                <span className="text-green-600">✓ Ready</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Tests</span>
                <span className="text-green-600">✓ All Passing</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="font-medium">Environment</span>
                <span className="text-blue-600">Production</span>
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                🚀 Deploy Now
              </button>
              <div className="mt-4 text-center text-sm text-gray-600">
                Your app will be live at: <span className="text-blue-600 font-mono">app.flexperts.io/your-app</span>
              </div>
            </div>
          </div>
        )
      }
    },
    'we-build': {
      'feature-1': {
        title: 'Project Dashboard',
        content: (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Your Project Dashboard</h4>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">E-commerce Platform</h5>
                  <span className="text-green-600 text-sm font-medium">In Progress</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Building your custom online store with payment integration</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">Team: 3 experts</span>
                  <span className="text-gray-500">Timeline: 2 weeks</span>
                </div>
                <div className="mt-3">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Latest Update:</strong> Payment gateway integration completed. Testing checkout flow...
                </p>
              </div>
            </div>
          </div>
        )
      },
      'feature-2': {
        title: 'Expert Team Chat',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Team Communication</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">JD</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">John (Lead Dev)</p>
                  <p className="text-gray-700 bg-gray-100 rounded p-2 text-sm">Just finished the authentication module. Ready for review!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">SC</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah (Designer)</p>
                  <p className="text-gray-700 bg-gray-100 rounded p-2 text-sm">Updated the checkout flow mockups based on your feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">You</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">You</p>
                  <p className="text-gray-700 bg-blue-100 rounded p-2 text-sm">Great work team! Let's review this afternoon</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      'feature-3': {
        title: 'Fixed Pricing Calculator',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Project Cost Estimator</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Base Development</span>
                  <span className="font-medium">$500</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Payment Integration</span>
                  <span className="font-medium">$200</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Mobile Responsive</span>
                  <span className="font-medium">$150</span>
                </div>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Fixed Price</span>
                  <span className="font-bold text-green-600 text-xl">$850</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">✓ No hidden fees ✓ Revisions included ✓ 30-day support</p>
            </div>
          </div>
        )
      }
    },
    'build-together': {
      'feature-1': {
        title: 'Partner Dashboard',
        content: (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Partner Dashboard</h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Monthly Earnings</p>
                <p className="text-2xl font-bold text-green-600">$3,847</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Active Referrals</p>
                <p className="text-2xl font-bold text-blue-600">47</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-gray-500">You Build - Pro Plan</p>
                </div>
                <span className="text-green-600 font-medium">+$47.50</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Mike Johnson</p>
                  <p className="text-sm text-gray-500">We Build - Project</p>
                </div>
                <span className="text-green-600 font-medium">+$250.00</span>
              </div>
            </div>
          </div>
        )
      },
      'feature-2': {
        title: 'Marketing Tools',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">AI Content Generator</h4>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium mb-2">Generate Social Post</p>
                <select className="w-full p-2 border rounded text-sm">
                  <option>Twitter/X Thread</option>
                  <option>LinkedIn Post</option>
                  <option>Instagram Caption</option>
                </select>
              </div>
              <div className="p-3 bg-blue-50 rounded">
                <p className="text-sm font-medium mb-2">Generated Content:</p>
                <p className="text-sm text-gray-700">
                  "🚀 Just discovered @Flexperts - build apps 10x faster with AI! 
                  Whether you code or not, they have a path for you. 
                  I'm already earning $3k/month as a partner! 
                  Check it out: flexperts.dev/ref/yourname"
                </p>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded font-medium">
                Copy & Schedule Post
              </button>
            </div>
          </div>
        )
      },
      'feature-3': {
        title: 'Analytics & Tracking',
        content: (
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Performance Analytics</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-blue-600">1,247</p>
                  <p className="text-xs text-gray-600">Clicks</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-green-600">47</p>
                  <p className="text-xs text-gray-600">Conversions</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="text-2xl font-bold text-purple-600">3.8%</p>
                  <p className="text-xs text-gray-600">Conv. Rate</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-sm font-medium mb-2">Top Performing Content</p>
                <div className="text-sm text-gray-700">
                  <div className="flex justify-between py-1">
                    <span>"AI Builder Tutorial"</span>
                    <span className="text-green-600">+12 signups</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>"No-Code Success Story"</span>
                    <span className="text-green-600">+8 signups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  };

  const currentDemo = demos[activeTab]?.[activeFeature] || demos['you-build']['feature-1'];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From idea to launch in days, not months. Experience the future of app development.
          </p>
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg transition-all transform hover:scale-105"
            onClick={() => {
              document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See Live Demo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* 2. Interactive Demo Section */}
      <section id="interactive-demo" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Demo Container */}
            <div className="mockup-container bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="mockup-browser-bar bg-gray-800 p-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm">{currentDemo.title}</span>
                </div>
              </div>
              <div className="p-6 bg-gray-50 h-96 overflow-y-auto">
                {currentDemo.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Path Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three ways to build, each designed for different needs and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* You Build */}
            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeTab === 'you-build' 
                  ? 'ring-2 ring-green-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveTab('you-build')}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">You Build</h3>
              <p className="text-gray-600 mb-6 text-center">
                AI-powered visual development. Build apps with drag-and-drop simplicity.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Visual flow designer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">From $11.11/month</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                <Link to="/you-build">Learn More</Link>
              </Button>
            </GlassCard>

            {/* We Build */}
            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeTab === 'we-build' 
                  ? 'ring-2 ring-green-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveTab('we-build')}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">We Build</h3>
              <p className="text-gray-600 mb-6 text-center">
                Expert teams build for you. Fixed prices, guaranteed quality.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fixed pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">From $500/project</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                <Link to="/we-build">Learn More</Link>
              </Button>
            </GlassCard>

            {/* Build Together */}
            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeTab === 'build-together' 
                  ? 'ring-2 ring-green-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveTab('build-together')}
            >
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Build Together</h3>
              <p className="text-gray-600 mb-6 text-center">
                Promote and earn. Turn your audience into recurring revenue.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50% commission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Marketing tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Monthly payouts</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                <Link to="/build-together">Learn More</Link>
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. Features Section (Clickable to change demos) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click any feature below to see it in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeFeature === 'feature-1' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveFeature('feature-1')}
            >
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {activeTab === 'you-build' && 'AI Assistant'}
                {activeTab === 'we-build' && 'Project Dashboard'}
                {activeTab === 'build-together' && 'Earnings Tracker'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'you-build' && 'Get intelligent help building your app with our AI assistant'}
                {activeTab === 'we-build' && 'Track your project progress in real-time'}
                {activeTab === 'build-together' && 'Monitor your earnings and referrals'}
              </p>
            </GlassCard>

            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeFeature === 'feature-2' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveFeature('feature-2')}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {activeTab === 'you-build' && 'Visual Builder'}
                {activeTab === 'we-build' && 'Team Chat'}
                {activeTab === 'build-together' && 'Content Tools'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'you-build' && 'Design your app visually with drag and drop'}
                {activeTab === 'we-build' && 'Communicate directly with your expert team'}
                {activeTab === 'build-together' && 'AI-powered marketing content generation'}
              </p>
            </GlassCard>

            <GlassCard 
              className={`p-8 cursor-pointer transition-all duration-300 ${
                activeFeature === 'feature-3' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveFeature('feature-3')}
            >
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {activeTab === 'you-build' && 'Quick Deploy'}
                {activeTab === 'we-build' && 'Fixed Pricing'}
                {activeTab === 'build-together' && 'Analytics'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'you-build' && 'Deploy to production with one click'}
                {activeTab === 'we-build' && 'Know your costs upfront, no surprises'}
                {activeTab === 'build-together' && 'Track performance and optimize'}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5. Pricing Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* You Build Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You Build</h3>
              <p className="text-gray-600 mb-6">AI-powered development</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$11.11</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited AI assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Visual app builder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">One-click deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Export source code</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link to="/you-build">Get Started</Link>
              </Button>
            </div>

            {/* We Build Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative transform scale-105 border-2 border-green-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">We Build</h3>
              <p className="text-gray-600 mb-6">Expert team delivery</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$500</span>
                <span className="text-gray-600">+/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated expert team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fixed-price guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link to="/we-build">Get Quote</Link>
              </Button>
            </div>

            {/* Build Together Pricing */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Build Together</h3>
              <p className="text-gray-600 mb-6">Partner program</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">50%</span>
                <span className="text-gray-600"> commission</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lifetime commissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Marketing materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI content tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly payouts</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link to="/build-together">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of builders, entrepreneurs, and creators bringing their ideas to life
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
            <Link to="/signup">
              Start Free Trial
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;