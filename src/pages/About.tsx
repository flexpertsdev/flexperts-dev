
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Meet the
            <span className="text-gradient block">Flexperts</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
            Led by visionary founder Jos Henson Gric, we're building a global ecosystem that transforms how entrepreneurs bring their ideas to life
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image placeholder */}
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-12 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">JG</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <Badge className="bg-primary-500 text-white mb-4">Founder & CEO</Badge>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Jos Henson Gric</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      Passionate about building innovative technology platforms and financial services that empower people and businesses within a more inclusive global economy. Jos leads the FlexGroup ecosystem, which spans multiple continents and connects diverse talents across the innovation landscape.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-neutral-900">Expertise:</h3>
                      <ul className="space-y-2 text-neutral-600">
                        <li>• No-code/Low-code development</li>
                        <li>• AI-powered business solutions</li>
                        <li>• Global entrepreneurship ecosystems</li>
                        <li>• Financial technology innovation</li>
                        <li>• Community building at scale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quote */}
            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                "We're not just building tools - we're democratizing access to world-class development resources and creating pathways for anyone to turn their vision into reality."
              </blockquote>
              <p className="text-neutral-500 mt-4">— Jos Henson Gric, Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Ecosystem */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Part of the FlexGroup Innovation Ecosystem
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Flexperts.dev is the flagship development service within a comprehensive network of platforms supporting global innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">F</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Flexperts.dev</h3>
                <p className="text-neutral-600 text-sm">On-demand developer services</p>
              </div>
            </GlassCard>

            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">Fi</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Flexfluencer</h3>
                <p className="text-neutral-600 text-sm">AI-powered product development for creators</p>
              </div>
            </GlassCard>

            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">FM</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">FlexMoney</h3>
                <p className="text-neutral-600 text-sm">Lifestyle social money app</p>
              </div>
            </GlassCard>

            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">FL</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">FlexLingo</h3>
                <p className="text-neutral-600 text-sm">Real-time AI translation platform</p>
              </div>
            </GlassCard>

            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">FA</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Flex Academy</h3>
                <p className="text-neutral-600 text-sm">Entrepreneur training programs</p>
              </div>
            </GlassCard>

            <GlassCard className="hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">FH</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Flex Hubs</h3>
                <p className="text-neutral-600 text-sm">Global entrepreneurial communities <Badge variant="secondary" className="ml-2">Coming Soon</Badge></p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Global Reach, Local Impact
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our team spans across continents, providing 24/7 support and diverse perspectives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto text-center">
            {[
              "🇬🇧 United Kingdom", "🇺🇸 United States", "🇿🇦 South Africa", "🇳🇬 Nigeria", "🇳🇴 Norway",
              "🇮🇩 Bali", "🇷🇴 Romania", "🇷🇺 Russia", "🇰🇷 South Korea", "🇹🇼 Taiwan",
              "🇦🇺 Australia", "🇮🇹 Italy", "🇭🇷 Croatia", "🇧🇬 Bulgaria", "🇸🇪 Sweden"
            ].map((country, index) => (
              <div key={index} className="p-3 glass-card text-sm text-neutral-700 hover:bg-white/15 transition-all duration-300">
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Distributed Global Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Bringing together the world's best talent to serve our global community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Development Specialists</h3>
                <p className="text-neutral-600 text-sm">Expert developers across multiple time zones ensuring 24/7 development capabilities</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">AI & Automation Experts</h3>
                <p className="text-neutral-600 text-sm">Cutting-edge AI specialists building the next generation of intelligent tools</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Business Strategy Consultants</h3>
                <p className="text-neutral-600 text-sm">Strategic advisors helping turn ideas into successful, scalable businesses</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Marketing & Growth Specialists</h3>
                <p className="text-neutral-600 text-sm">Data-driven marketers focused on sustainable growth and audience development</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-neutral-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Community Managers</h3>
                <p className="text-neutral-600 text-sm">Dedicated community builders fostering connections and collaboration globally</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Technical Support Team</h3>
                <p className="text-neutral-600 text-sm">Round-the-clock technical support ensuring smooth operation across all platforms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Innovation-First Mindset", description: "We're always looking for better ways to solve problems and create value" },
              { title: "Global Perspective", description: "Diverse viewpoints make us stronger and our solutions more inclusive" },
              { title: "Collaborative Approach", description: "Success comes from working together and lifting each other up" },
              { title: "Results-Driven", description: "We measure success by the impact we create for our clients and community" },
              { title: "Community-Focused", description: "Building lasting relationships and fostering growth for everyone involved" },
              { title: "Continuous Learning", description: "Staying ahead of the curve through constant education and adaptation" }
            ].map((value, index) => (
              <GlassCard key={index} className="text-center p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Global Impact by the Numbers
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Measuring our success through the success of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-neutral-600">Countries Represented</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-neutral-600">Projects Delivered</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-neutral-600">Entrepreneurs Supported</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-neutral-600">Global Support</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
                <div className="text-neutral-600">Platform Launches</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
