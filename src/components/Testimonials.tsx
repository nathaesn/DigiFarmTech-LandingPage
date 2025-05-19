import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      <div className="md:w-3/4 md:pl-8">
        <p className="text-gray-700 italic mb-6">"{quote}"</p>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Since implementing DigiFarmTech's IoT irrigation system, our tomato yield has increased by 42% while using significantly less water. The ROI was achieved in less than one growing season.",
      name: "Maria Rodriguez",
      role: "Farm Manager",
      company: "SunGrow Farms",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "The precision irrigation for our chili crops has eliminated the issues we had with root rot and uneven growth. The mobile app makes it simple to monitor and adjust from anywhere.",
      name: "Carlos Mendez",
      role: "Owner",
      company: "Spice Valley Growers",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "During last year's drought, farms around us struggled while our tomato crops thrived thanks to the water efficiency of DigiFarmTech's system. Best investment we've made.",
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "Fresh Harvest Co-op",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from farmers who have transformed their tomato and chili operations with our IoT irrigation system.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Testimonial {...testimonials[currentIndex]} />
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;