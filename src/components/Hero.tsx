import React from 'react';
import { ArrowRight, Droplets, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smart Irrigation for 
              <span className="text-green-600"> Tomato</span> and 
              <span className="text-red-600"> Chili</span> Farms
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Precision irrigation technology that increases yield by 35%, reduces water usage by 40%, 
              and puts control right at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                Get Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Smart irrigation system" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg flex items-center">
                <Droplets className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Water Saved</p>
                  <p className="text-2xl font-bold text-blue-600">40%</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg flex items-center">
                <BarChart2 className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Yield Increase</p>
                  <p className="text-2xl font-bold text-green-600">35%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;