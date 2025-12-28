import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  UserCheck, 
  Zap, 
  Handshake, 
  Building2, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Menu,
  X,
  Globe
} from 'lucide-react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const iconMap = {
    'user-check': UserCheck,
    'zap': Zap,
    'handshake': Handshake
  };

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-8 h-10 bg-gradient-to-r from-slate-700 to-slate-800 transform -skew-x-12"></div>
                <div className="w-8 h-10 bg-gradient-to-r from-orange-500 to-orange-600 transform -skew-x-12 -ml-2"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">{mockData.company.name}</h1>
                <p className="text-xs text-slate-600">{mockData.company.tagline}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {mockData.navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:text-orange-600 ${
                    index === 0 ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {mockData.navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-slate-700 hover:text-orange-600 py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mockData.hero.image})` }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {mockData.hero.title}
              </h2>
              <p className="text-xl text-slate-200 mb-8">
                {mockData.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 transform hover:scale-105"
                >
                  {mockData.hero.ctaText}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-200"
                >
                  {mockData.hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Features</h3>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Statistics Dashboard</h3>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.statistics.map((stat) => (
              <div
                key={stat.id}
                className={`p-8 rounded-xl ${
                  stat.color === 'orange' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-slate-200 text-slate-800'
                } hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wide opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="for-companies" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {mockData.forCompanies.title}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {mockData.forCompanies.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.forCompanies.benefits.map((benefit) => (
              <Card key={benefit.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">{benefit.title}</CardTitle>
                  <CardDescription className="text-slate-600">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white">
              <Building2 className="mr-2 w-5 h-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* For Workers Section */}
      <section id="for-workers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {mockData.forWorkers.title}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {mockData.forWorkers.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.forWorkers.benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-slate-50 p-6 rounded-xl border-2 border-transparent hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-600 rounded"></div>
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Users className="mr-2 w-5 h-5" />
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {mockData.about.title}
            </h3>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              {mockData.about.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {mockData.about.values.map((value) => (
              <div key={value.id} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 border-4 border-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{mockData.contact.title}</h3>
            <p className="text-xl text-slate-300">{mockData.contact.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
              <Mail className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-slate-300 text-sm">{mockData.contact.email}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
              <Phone className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-slate-300 text-sm">{mockData.contact.phone}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
              <MapPin className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-slate-300 text-sm">{mockData.contact.address}</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2025 {mockData.company.name}. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">Imprint</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
