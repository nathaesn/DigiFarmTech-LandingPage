import React from 'react';
import { Cpu, Droplets, CloudRain, Smartphone } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl">
          {number}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-green-200 my-2"></div>}
      </div>
      <div className="ml-6 pb-8">
        <div className="flex items-center mb-2">
          <div className="mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our system provides end-to-end automation for precise irrigation control specifically designed for tomato and chili cultivation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col">
            <Step 
              number={1} 
              title="Install Sensors in Your Field" 
              description="Place our wireless soil moisture and temperature sensors strategically in your tomato and chili fields to collect real-time data."
              icon={<Cpu className="h-6 w-6 text-green-600" />}
            />
            
            <Step 
              number={2} 
              title="Connect to the IoT Network" 
              description="Sensors automatically connect to our secure cloud network, creating a smart field that continuously monitors growing conditions."
              icon={<Droplets className="h-6 w-6 text-blue-600" />}
            />
            
            <Step 
              number={3} 
              title="System Analyzes Field Conditions" 
              description="Our AI analyzes soil moisture, weather forecasts, crop growth stage, and water requirements specific to tomato and chili varieties."
              icon={<CloudRain className="h-6 w-6 text-indigo-600" />}
            />
            
            <Step 
              number={4} 
              title="Automated Precise Irrigation" 
              description="The system automatically activates irrigation when needed, delivering the exact amount of water required for optimal growth."
              icon={<Smartphone className="h-6 w-6 text-gray-600" />}
              isLast={true}
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700 mb-6">
            Each component works together seamlessly to create the perfect growing environment
          </p>
          <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200">
            See Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;