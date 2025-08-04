import React, { useState } from 'react';
import { Menu, X, Heart, Users, BookOpen, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduCare Foundation</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentSection('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentSection('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'about' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentSection('volunteer')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSection === 'volunteer' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Volunteer
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentSection('home');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setCurrentSection('volunteer');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Volunteer
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md font-medium transition-colors mt-4">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8)), url("https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities Through Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to provide quality education and support to underserved communities worldwide. Together, we can build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentSection('volunteer')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Schools Built</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h3>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every contribution, big or small, helps us reach more children and communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentSection('volunteer')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Become a Volunteer
            </button>
            <button 
              onClick={() => setCurrentSection('about')}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutUs = () => (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About EduCare Foundation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2010, EduCare Foundation is dedicated to breaking the cycle of poverty through education, 
            community development, and sustainable programs that empower individuals and families.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education, resources, and opportunities to underserved communities, 
              enabling them to build sustainable, thriving futures.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every child has access to quality education and the opportunity to reach 
              their full potential, regardless of their circumstances.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, compassion, sustainability, and empowerment guide everything we do. 
              We believe in transparent, community-driven solutions.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300"
                style={{
                  backgroundImage: 'url("https://th.bing.com/th/id/R.fd6afbd6486963f2892c3af2064f7ae1?rik=W6nlRGmMGt1gTw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-clLQ5TNWQlM%2fWZP2lerlY4I%2fAAAAAAAAECM%2f7m8ZILMTMD0w8n3Vw_-_Y4NgKAmF5PsMACK4BGAYYCw%2fs1600%2fprabhas.jpg&ehk=YAvot%2bKGm2%2bkGXj3RYz6XRvhbhPDN5sb%2fMCGk1zDQWY%3d&risl=&pid=ImgRaw&r=0")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">PraBOSS</h4>
              <p className="text-blue-600 font-medium mb-2">Executive Director</p>
              <p className="text-gray-600 text-sm">15+ years in international development and education policy.</p>
            </div>
            <div className="text-center">
              <div 
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300"
                style={{
                  backgroundImage: 'url("https://w0.peakpx.com/wallpaper/643/390/HD-wallpaper-allu-arjun-alluarjun-sarrainodu.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">BhAAi</h4>
              <p className="text-blue-600 font-medium mb-2">Program Director</p>
              <p className="text-gray-600 text-sm">Former teacher with expertise in curriculum development and training.</p>
            </div>
            <div className="text-center">
              <div 
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-300"
                style={{
                  backgroundImage: 'url("https://tse3.mm.bing.net/th/id/OIP.-D3jIGvK4hvi1xTlBWPfFQHaLj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Aishwarya Roy</h4>
              <p className="text-blue-600 font-medium mb-2">Community Outreach</p>
              <p className="text-gray-600 text-sm">Specialist in grassroots organizing and community engagement.</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education Programs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Built 200+ schools in rural communities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Trained 1,500+ teachers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Provided scholarships to 10,000+ students
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Established 50+ community centers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Launched 100+ adult literacy programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  Supported 500+ small businesses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VolunteerForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      areaOfInterest: '',
      skills: '',
      availability: '',
      experience: '',
      motivation: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormSubmitted(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        skills: '',
        availability: '',
        experience: '',
        motivation: ''
      });
    };

    if (formSubmitted) {
      return (
        <div className="min-h-screen py-16 bg-gray-50 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you for volunteering!</h2>
              <p className="text-lg text-gray-600 mb-6">
                We've received your application and will be in touch with you soon. Your willingness to help makes a real difference!
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Volunteer Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Help us make a difference in communities around the world. Fill out the form below to get started on your volunteer journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+91 93461 90434"
                  />
                </div>
              </div>

              {/* Area of Interest */}
              <div>
                <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  required
                  value={formData.areaOfInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an area...</option>
                  <option value="education">Education & Teaching</option>
                  <option value="community">Community Development</option>
                  <option value="healthcare">Healthcare & Wellness</option>
                  <option value="technology">Technology & Digital Literacy</option>
                  <option value="fundraising">Fundraising & Events</option>
                  <option value="administration">Administration & Operations</option>
                  <option value="marketing">Marketing & Communications</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Expertise
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your relevant skills, qualifications, or experience..."
                />
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your availability...</option>
                  <option value="few-hours-week">A few hours per week</option>
                  <option value="few-hours-month">A few hours per month</option>
                  <option value="weekends">Weekends only</option>
                  <option value="evenings">Evenings only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="full-time">Full-time commitment</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Volunteer Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Describe any previous volunteer work or community involvement..."
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  required
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us what motivates you to volunteer and how you hope to contribute..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions? Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">volunteersandy@educare.org</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+91 93461 90434</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-gray-600">RGMCET, Nandyal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUs />;
      case 'volunteer':
        return <VolunteerForm />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderCurrentSection()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">EduCare Foundation</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering communities through education and sustainable development programs worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentSection('volunteer')} className="text-gray-400 hover:text-white transition-colors">Volunteer</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fundraise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sponsor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  sandeep@educare.org
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 93461 90434 
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  RGMCET,Nandyal
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduCare Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;