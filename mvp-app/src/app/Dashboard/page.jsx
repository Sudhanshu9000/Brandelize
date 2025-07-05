"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth-modal"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
  Target,
  Brain,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [user, setUser] = useState(null)

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    console.log("User authenticated:", userData)
  }

  const handleGetStarted = () => {
    setIsAuthModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Brandelize
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Digital Marketing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Service Digital Marketing Solutions powered by cutting-edge AI technology. From strategy to execution,
            we deliver results-driven solutions that unlock your brand&apos;s full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={handleGetStarted}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">100%</div>
              <div className="text-gray-600">AI-Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2024</div>
              <div className="text-gray-600">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions powered by the latest AI tools and proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Performance Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• PPC Advertising (Google Ads, Facebook Ads)</li>
                  <li>• Social Media Advertising</li>
                  <li>• Email Marketing</li>
                  <li>• Affiliate Marketing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-pink-100">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-pink-600 mb-4" />
                <CardTitle className="text-xl">Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Logo Design</li>
                  <li>• Brand Identity</li>
                  <li>• Website Design</li>
                  <li>• Content Creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">AI Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chatbots</li>
                  <li>• Predictive Analytics</li>
                  <li>• Personalization</li>
                  <li>• Automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Digital Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Market Research</li>
                  <li>• Competitor Analysis</li>
                  <li>• SEO Audit</li>
                  <li>• Social Media Strategy</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                  Social Media Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Engage your audience across all major social platforms with AI-driven content strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 text-green-600 mr-2" />
                  SEO Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Boost your search rankings with our advanced SEO techniques and AI-powered insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-6 h-6 text-purple-600 mr-2" />
                  Content Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create compelling content that converts with our AI-powered content writing services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Brandelize?</h2>
            <p className="text-xl text-gray-600">
              We combine experience, innovation, and results to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">10+ years of experience with proven track record of success</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge AI</h3>
              <p className="text-gray-600">Powered by Aurora AI and latest generation AI tools in the market</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">Tailored strategies for your unique business needs and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
              <p className="text-gray-600">Clear communication and detailed performance reports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Hand-holding support with sustainable growth guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Building</h3>
              <p className="text-gray-600">Complete brand building from scratch to market leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started today with a customized digital marketing strategy that delivers real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 8406842340
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to grow your business? Contact us today!</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
            {/* Contact Information */}
            <div className="md:w-1/2">
              <div className="bg-purple-50 rounded-xl p-8 h-full flex flex-col justify-between shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-purple-700">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">8406842340</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">brandelize.com@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-gray-600">
                        Main Road, near Indrapuri Chowk,
                        <br />
                        Domino&apos;s Pizza, Hazaribagh,
                        <br />
                        Jharkhand, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4 mb-2">
                    <Link
                      href="#"
                      className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-purple-600" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-sky-600" />
                    </Link>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Facebook: @brandelize india</div>
                    <div>Instagram: @officialbrandelize</div>
                    <div>LinkedIn: @brandelize india</div>
                    <div>Twitter: @brandelize57640</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {/* <div className="hidden md:flex flex-col justify-center">
              <div className="w-px h-full bg-gray-200"></div>
            </div>
            <div className="flex md:hidden justify-center">
              <div className="w-full h-px bg-gray-200 my-8"></div>
            </div> */}

            {/* Get Free Consultation Form */}
            <div className="md:w-1/2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-purple-700">Get Free Consultation</CardTitle>
                  <CardDescription className="text-center">
                    Fill out the form and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Select a service</option>
                        <option>Performance Marketing</option>
                        <option>Branding</option>
                        <option>AI Marketing</option>
                        <option>Digital Strategy</option>
                        <option>SEO</option>
                        <option>Social Media Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Brandelize</span>
              </div>
              <p className="text-gray-400 mb-4">Transform your business with AI-powered digital marketing solutions.</p>
              <div className="text-sm text-gray-400">
                <div>Founded: 2024</div>
                <div>Team: 2-10 employees</div>
                <div>Industry: Marketing Services</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Performance Marketing</li>
                <li>AI Marketing</li>
                <li>Branding</li>
                <li>Digital Strategy</li>
                <li>SEO</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Specialties</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Powered Branding</li>
                <li>AI Powered Marketing</li>
                <li>AI Content Writing</li>
                <li>24X7 Customer Support</li>
                <li>Sustainable Growth</li>
                <li>Brand Building</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>8406842340</div>
                <div>brandelize.com@gmail.com</div>
                <div>Hazaribagh, Jharkhand</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Brandelize. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onSuccess={handleAuthSuccess} />
    </div>
  )
}
