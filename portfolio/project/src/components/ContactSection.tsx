import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { colorTheme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Contact <span className={`text-${colorTheme}-500`}>Me</span>
          </h2>
          <div className={`w-20 h-1 bg-${colorTheme}-500 mx-auto mt-2`}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Let's Talk
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:aakash.srisai@gmail.com" className="text-gray-600 dark:text-gray-300 hover:underline">
                    manojmaradani24@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">9392664077</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-${colorTheme}-100 dark:bg-${colorTheme}-900 flex items-center justify-center text-${colorTheme}-500 mr-4`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">GANAPAVARAM, ANDHRA PRADESH, INDIA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 flex items-center`}
                >
                  <CheckCircle className="mr-2" size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-${colorTheme}-500`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-${colorTheme}-500`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-${colorTheme}-500`}
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your message"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-${colorTheme}-500`}
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className={`px-6 py-3 bg-${colorTheme}-500 hover:bg-${colorTheme}-600 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full`}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;