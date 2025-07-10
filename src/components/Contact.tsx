import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && elementsRef.current) {
            elementsRef.current.classList.add('opacity-100', 'translate-y-0');
            elementsRef.current.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <div ref={sectionRef} className="container mx-auto px-6 h-screen flex flex-col justify-center relative">
      <div 
        ref={elementsRef}
        className="transform transition-all duration-1000 opacity-0 translate-y-8"
      >
        <div className="flex items-center mb-12">
          <span className="text-8xl text-gray-700 font-bold"></span>
          <h2 className="text-5xl font-bold ml-8">Contact</h2>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <p className="text-lg">thosodfried@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <p className="text-lg">+212 649 26 55 46</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-lg">Capo Negro, MAR</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              {submitMessage && (
                <div className="mb-6 p-4 rounded-lg bg-green-900/30 text-green-400">
                  {submitMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition-transform hover:scale-105 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-text transform -rotate-90 flex items-center bg-gray-900/50 px-1 py-1 rounded-lg">
          <div className="w-8 h-px bg-gray-700 mr-2"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;