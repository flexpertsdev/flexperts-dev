import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  BarChart3,
  Sparkles,
  Target,
  Rocket,
  CheckCircle,
  Heart
} from "lucide-react";

const BuildTogether = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Influencer Partnership Program
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Turn Your Followers Into
              <span className="text-gradient block">Recurring Revenue</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Earn 50% commission on every subscription your followers sign up for - forever. 
              No caps, no limits, no fine print.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg">
                <Link to="/signup">
                  Apply Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-300 px-8 py-4 text-lg">
                <Link to="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">50%</div>
                <div className="text-neutral-600">Lifetime Commission</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">$2-5K</div>
                <div className="text-neutral-600">Avg Monthly Earnings</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">Forever</div>
                <div className="text-neutral-600">Earning Duration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Simple steps to start earning from your influence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Apps</h3>
              <p className="text-gray-600">Explore our marketplace of SaaS products ready for promotion</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply to Promote</h3>
              <p className="text-gray-600">Choose products that align with your audience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Content</h3>
              <p className="text-gray-600">Use our AI tools and assets to create engaging content</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Earn Forever</h3>
              <p className="text-gray-600">Get 50% of every subscription payment, forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Why We're Different
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Traditional affiliate programs pay pennies. We share real revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Traditional Affiliate Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    <span>5-10% commissions (if you're lucky)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    <span>One-time payments only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    <span>Cookie windows that expire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    <span>Promoting products you don't believe in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    <span>No say in product development</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Flexperts Build Together</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>50% lifetime commission</strong> on all payments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Recurring revenue</strong> for life of customer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Your link works forever</strong> - no expiration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Choose products you love</strong> to promote</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct input</strong> on product roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Support */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We provide all the tools and support to maximize your earnings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
                <p className="text-gray-600 mb-4">
                  Generate posts, scripts, and content ideas tailored to your audience
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Social media posts</li>
                  <li>• Video scripts</li>
                  <li>• Email templates</li>
                  <li>• Blog articles</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing Assets</h3>
                <p className="text-gray-600 mb-4">
                  Professional materials ready to use across all platforms
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Product demos</li>
                  <li>• Graphics & banners</li>
                  <li>• Landing pages</li>
                  <li>• Tracking links</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track your performance and optimize your campaigns
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Conversion tracking</li>
                  <li>• Revenue reports</li>
                  <li>• Audience insights</li>
                  <li>• A/B testing tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real influencers earning real revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  TM
                </div>
                <div>
                  <h4 className="font-semibold">Tech with Maria</h4>
                  <p className="text-sm text-gray-600">YouTube - 125K subs</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I've been promoting SaaS tools for years. With Flexperts, I finally earn what I'm worth. 
                $4,200 last month alone!"
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4 mr-1" />
                $4,200/month
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JR
                </div>
                <div>
                  <h4 className="font-semibold">Jake Reviews</h4>
                  <p className="text-sm text-gray-600">TikTok - 50K followers</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The 50% commission is game-changing. One viral video brought me recurring income 
                that keeps growing every month."
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4 mr-1" />
                $2,850/month
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SD
                </div>
                <div>
                  <h4 className="font-semibold">StartupDev</h4>
                  <p className="text-sm text-gray-600">Newsletter - 30K subs</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "My newsletter readers love useful tools. Now I can recommend products I believe in 
                and earn meaningful revenue."
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4 mr-1" />
                $3,100/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Marketplace Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Products Ready to Promote
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              High-quality SaaS products your audience will love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-4 mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aww Honey</h3>
                <p className="text-gray-600 mb-4">AI therapy companion with personality</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Commission per sale:</span>
                  <span className="font-semibold text-green-600">$5.55/mo</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active users:</span>
                    <span>10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg rating:</span>
                    <span>4.8/5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">FlexLingo</h3>
                <p className="text-gray-600 mb-4">WhatsApp translator for global chat</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Commission per sale:</span>
                  <span className="font-semibold text-green-600">$9.99/mo</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span>25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth rate:</span>
                    <span>+45% MoM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-4 mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">TaskFlow Pro</h3>
                <p className="text-gray-600 mb-4">Visual project management for teams</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Commission per sale:</span>
                  <span className="font-semibold text-green-600">$24.99/mo</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team size:</span>
                    <span>5-50 users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Churn rate:</span>
                    <span>&lt;2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-50">
              <Link to="/signup">
                View All Products
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">How much can I really earn?</h3>
              <p className="text-gray-600">
                There's no limit! You earn 50% of every subscription payment from customers you refer. 
                Our top influencers earn $2,000-$5,000+ per month. Your earnings depend on your audience size, 
                engagement, and the products you promote.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">When do I get paid?</h3>
              <p className="text-gray-600">
                We pay out monthly via direct deposit or PayPal. Payments are processed on the 1st of each month 
                for the previous month's earnings. Minimum payout is $50.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do I need a large following?</h3>
              <p className="text-gray-600">
                Not at all! We welcome influencers of all sizes. What matters most is engagement and alignment 
                with your audience. We've seen micro-influencers (1K-10K followers) earn significant revenue 
                with the right product match.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I promote multiple products?</h3>
              <p className="text-gray-600">
                Yes! You can apply to promote as many products as you want. We recommend focusing on 2-3 
                products that best align with your audience for optimal results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What if a customer cancels?</h3>
              <p className="text-gray-600">
                You earn 50% for as long as the customer remains subscribed. If they cancel, your recurring 
                commission stops, but you keep everything earned up to that point. Our products have very low 
                churn rates (typically under 5%).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of influencers building sustainable income streams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link to="/signup">
                  Apply Now
                  <Rocket className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildTogether;