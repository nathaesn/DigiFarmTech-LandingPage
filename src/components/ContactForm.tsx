import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    farmSize: '',
    cropType: [] as string[]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormState(prev => {
      if (checked) {
        return { ...prev, cropType: [...prev.cropType, value] };
      } else {
        return { ...prev, cropType: prev.cropType.filter(type => type !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your tomato and chili irrigation? Contact us for a personalized demo and consultation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-green-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="mr-3">📍</span>
                  <span>Ketawanggede, Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">📱</span>
                  <span>+62 123-4567</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">✉️</span>
                  <span>info@DigiFarmTech.com</span>
                </p>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">What happens next?</h4>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-green-600 font-semibold mr-3">1</span>
                    <span>We'll contact you within 24 hours to discuss your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-green-600 font-semibold mr-3">2</span>
                    <span>Our experts will prepare a custom demonstration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-green-600 font-semibold mr-3">3</span>
                    <span>We'll provide a detailed quote based on your farm's needs</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent. We'll be in touch with you shortly to discuss your irrigation needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Farm/Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Farm Size
                    </label>
                    <select
                      id="farmSize"
                      name="farmSize"
                      value={formState.farmSize}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select farm size</option>
                      <option value="small">Small (1-10 acres)</option>
                      <option value="medium">Medium (11-100 acres)</option>
                      <option value="large">Large (100+ acres)</option>
                    </select>
                  </div>
                  
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-1">Crops Grown</p>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="cropType"
                          value="tomato"
                          checked={formState.cropType.includes('tomato')}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        Tomatoes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="cropType"
                          value="chili"
                          checked={formState.cropType.includes('chili')}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        Chilies
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="cropType"
                          value="other"
                          checked={formState.cropType.includes('other')}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        Other Crops
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us about your irrigation needs and challenges..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;