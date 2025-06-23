import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  ChevronRight, 
  CheckCircle
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Clean Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Turn Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Build applications 10x faster with AI, collaborate with experts, or earn while you promote
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
            onClick={() => {
              document.getElementById('three-ways-to-build')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Three Ways to Build Section */}
      <section id="three-ways-to-build" className="py-24 px-4 bg-gray-50">
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
            {/* You Build */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="text-center p-8 h-full flex flex-col">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">You Build</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  AI-powered visual development. Build apps with drag-and-drop simplicity and AI assistance.
                </p>
                
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Visual flow designer with AI suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">One-click deployment to production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">From $11.11/month</span>
                  </li>
                </ul>
                
                <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                  <Link to="/you-build">Learn More</Link>
                </Button>
              </div>
            </GlassCard>

            {/* We Build */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="text-center p-8 h-full flex flex-col">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">We Build</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  Expert teams build for you. Fixed prices, guaranteed quality, no rigid processes.
                </p>
                
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated expert team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fixed-price projects from $500</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quality guarantee</span>
                  </li>
                </ul>
                
                <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                  <Link to="/we-build">Learn More</Link>
                </Button>
              </div>
            </GlassCard>

            {/* Build Together */}
            <GlassCard className="hover:bg-white/15 transition-all duration-300 group h-full">
              <div className="text-center p-8 h-full flex flex-col">
                <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Build Together</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                  Turn your followers into revenue. Promote products you love and earn 50% forever.
                </p>
                
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">50% lifetime commission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Marketing tools & AI content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Monthly payouts</span>
                  </li>
                </ul>
                
                <Button asChild variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50">
                  <Link to="/build-together">Learn More</Link>
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built With Flexperts
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            See what our community has created
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Aww Honey</h3>
              <p className="text-gray-600 mb-4">Sassy AI-powered therapy companion</p>
              <p className="text-sm text-primary-600">10K+ active users</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">FlexLingo</h3>
              <p className="text-gray-600 mb-4">Multi-lingual WhatsApp chat translator</p>
              <p className="text-sm text-primary-600">25+ languages</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">UnlimitedZZZs</h3>
              <p className="text-gray-600 mb-4">Never-ending interactive bedtime stories</p>
              <p className="text-sm text-primary-600">50K+ stories generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join 500+ builders creating the future
          </p>
          <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg">
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