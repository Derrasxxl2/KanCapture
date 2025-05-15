
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here in a real implementation
    console.log('Form submitted');
  };

  return (
    <Layout>
      <motion.div 
        className="container mx-auto px-4 py-24 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-light mb-12">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-light mb-6">Get in touch</h2>
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-2 font-light">Address</h3>
              <address className="not-italic text-sm text-gray-800">
                <p>Fran Silvestre Arquitectos</p>
                <p>Calle Doctor Manuel Candela 26, 2</p>
                <p>46021 Valencia, Spain</p>
              </address>
            </div>
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-2 font-light">Contact</h3>
              <p className="text-sm text-gray-800">
                <a href="tel:+34963410491" className="hover-link">+34 963 410 491</a><br />
                <a href="mailto:info@fransilvestrearquitectos.com" className="hover-link">info@fransilvestrearquitectos.com</a>
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-2 font-light">Hours</h3>
              <p className="text-sm text-gray-800">
                Monday — Friday: 9:00 AM – 7:00 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9003962352224!2d-0.3559181!3d39.4699075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f29cceb2a53%3A0x9193056c87737c16!2sC.%20del%20Dr.%20Manuel%20Candela%2C%2026%2C%2046021%20Valencia%2C%20Spain!5e0!3m2!1sen!2sus!4v1629462410876!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office location"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-light mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-light mb-1">First Name</label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border-gray-200 focus:border-black focus:ring-0 text-sm font-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-light mb-1">Last Name</label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border-gray-200 focus:border-black focus:ring-0 text-sm font-light"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required
                    className="w-full bg-gray-50 border-gray-200 focus:border-black focus:ring-0 text-sm font-light"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-light mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    type="text" 
                    required
                    className="w-full bg-gray-50 border-gray-200 focus:border-black focus:ring-0 text-sm font-light"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    required
                    rows={6}
                    className="w-full bg-gray-50 border-gray-200 focus:border-black focus:ring-0 text-sm font-light"
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-none inline-flex items-center"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
