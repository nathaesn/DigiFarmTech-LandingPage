import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">DigiFarmTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming agriculture with intelligent irrigation systems designed specifically for tomato and chili crops.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'How It Works', 'Benefits', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                'IoT Moisture Sensors', 
                'Smart Irrigation Controllers', 
                'Weather Stations', 
                'Mobile App', 
                'Analytics Dashboard',
                'Farm Management Tools'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new features and agricultural technology innovations.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DigiFarmTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;