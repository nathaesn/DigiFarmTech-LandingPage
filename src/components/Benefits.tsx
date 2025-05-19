import React from 'react';
import { Sprout, Droplet, DollarSign, LineChart } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, stat, statLabel }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center">
          <p className="text-3xl font-bold text-green-600">{stat}</p>
          <p className="ml-2 text-sm text-gray-500">{statLabel}</p>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sprout className="h-6 w-6 text-green-600" />,
      title: "Increased Crop Yield",
      description: "Optimize water delivery based on the specific needs of tomato and chili plants at different growth stages.",
      stat: "35%",
      statLabel: "average yield increase"
    },
    {
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      title: "Water Conservation",
      description: "Reduce water waste by delivering precise amounts exactly when and where needed, even in drought conditions.",
      stat: "40%",
      statLabel: "water savings"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
      title: "Reduced Labor Costs",
      description: "Automation eliminates the need for manual irrigation monitoring and adjustment, saving labor hours.",
      stat: "60%",
      statLabel: "labor cost reduction"
    },
    {
      icon: <LineChart className="h-6 w-6 text-purple-600" />,
      title: "Data-Driven Decisions",
      description: "Gain insights from historical data to continually improve growing practices year over year.",
      stat: "15%",
      statLabel: "annual efficiency gains"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Benefits for Your Farm</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our smart irrigation system can transform your tomato and chili growing operation with measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              stat={benefit.stat}
              statLabel={benefit.statLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;