
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlassCard } from "@/components/ui/glass-card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Let's Build Something
            <span className="text-gradient block">Amazing Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-neutral-900">Get Started</CardTitle>
                  <p className="text-neutral-600">Tell us about your project and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                      <Input placeholder="John" className="border-white/30 focus:border-primary-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" className="border-white/30 focus:border-primary-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="border-white/30 focus:border-primary-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Company (Optional)</label>
                    <Input placeholder="Your company name" className="border-white/30 focus:border-primary-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Service Interest</label>
                    <Select>
                      <SelectTrigger className="border-white/30 focus:border-primary-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="you-build">You Build (AI Tools)</SelectItem>
                        <SelectItem value="website-revamp">Website Revamp (EU Compliance)</SelectItem>
                        <SelectItem value="custom-mvp">Custom MVP Development</SelectItem>
                        <SelectItem value="flexfluencer">Flexfluencer Program</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Budget</label>
                    <Select>
                      <SelectTrigger className="border-white/30 focus:border-primary-500">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Timeline</label>
                    <Select>
                      <SelectTrigger className="border-white/30 focus:border-primary-500">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Project Description</label>
                    <Textarea 
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="border-white/30 focus:border-primary-500 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white text-lg py-3">
                    Send Message
                  </Button>

                  <p className="text-sm text-neutral-600 text-center">
                    We'll respond within 24 hours with next steps and project options.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <GlassCard>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Email</div>
                      <div className="text-neutral-600">hello@flexperts.dev</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Global Coverage</div>
                      <div className="text-neutral-600">15+ Countries, 24/7 Support</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Response Time</div>
                      <div className="text-neutral-600">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Quick Actions */}
              <GlassCard>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat with askFlexi AI
                  </Button>

                  <Button variant="outline" className="w-full border-primary-500 text-primary-600 hover:bg-primary-50 justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Consultation
                  </Button>

                  <Button variant="outline" className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-50 justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Portfolio
                  </Button>
                </div>
              </GlassCard>

              {/* Social Media */}
              <GlassCard>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a href="#" className="flex flex-col items-center p-4 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg mb-2"></div>
                    <span className="text-sm text-neutral-700">LinkedIn</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
                    <div className="w-8 h-8 bg-sky-500 rounded-lg mb-2"></div>
                    <span className="text-sm text-neutral-700">Twitter</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
                    <div className="w-8 h-8 bg-neutral-900 rounded-lg mb-2"></div>
                    <span className="text-sm text-neutral-700">GitHub</span>
                  </a>
                </div>
              </GlassCard>

              {/* Emergency Contact for EU Compliance */}
              <GlassCard className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">EU Compliance Deadline: June 28, 2025</h4>
                    <p className="text-sm text-orange-800 mb-3">
                      Need urgent website transformation for accessibility compliance? 
                    </p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Emergency Consultation
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50/20 to-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">How quickly can you revamp my website?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our AI-powered website revamps are typically completed within 24 hours after approval. 
                You'll get a free preview before paying anything, and we can make it live immediately after payment.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">What's included in EU accessibility compliance?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We ensure your site meets EAA (European Accessibility Act) requirements including proper heading structure, 
                alt text for images, keyboard navigation, color contrast, and screen reader compatibility.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">How does the Flexfluencer program work?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                You share your audience insights, we build custom AI products for your niche, you promote to your followers, 
                and we split revenue 50/50. Plus earn 20% commission on website revamp referrals.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">What makes askFlexi different from ChatGPT?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                askFlexi is specifically trained for development tasks with access to current frameworks, 
                visual planning tools, project templates, and integrated development workflow.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Do you offer payment plans for custom development?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Yes! We offer milestone-based payments, equity partnerships, and revenue sharing models. 
                We work with you to find a payment structure that fits your budget and goals.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">What ongoing support do you provide?</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                All projects include initial support period. We also offer ongoing maintenance plans, 
                priority support for Pro subscribers, and 24/7 community support through our global network.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
