import React from 'react';
import { Smartphone, CloudRain, Zap, Thermometer, Wifi, BarChart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      title: "Mobile Control",
      description: "Control your irrigation system from anywhere using our intuitive mobile app."
    },
    {
      icon: <CloudRain className="h-6 w-6 text-blue-600" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that adjusts watering based on weather forecasts and soil conditions."
    },
    {
      icon: <Thermometer className="h-6 w-6 text-red-600" />,
      title: "Climate Monitoring",
      description: "Real-time monitoring of temperature, humidity, and other climate factors affecting your crops."
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Energy Efficient",
      description: "Low-power sensors and solar options reduce energy consumption and operating costs."
    },
    {
      icon: <Wifi className="h-6 w-6 text-purple-600" />,
      title: "Wireless Sensors",
      description: "Wireless soil moisture sensors provide accurate data without complex wiring."
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Crop Analytics",
      description: "Advanced analytics help optimize growth conditions specifically for tomato and chili plants."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful IoT Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart irrigation system combines cutting-edge technology with ease of use to transform how you grow tomatoes and chilies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;