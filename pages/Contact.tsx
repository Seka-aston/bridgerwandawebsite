
import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get In Touch"
            title="Contact Us"
            description="We're here to help. Whether you're a student, a potential partner, or just have a question, we'd love to hear from you."
          />
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-text-headings">Send us a Message</h3>
                {isSubmitted ? (
                    <div className="text-center p-8 bg-surface text-primary-dark rounded-lg">
                        <h4 className="font-bold text-xl">Thank You!</h4>
                        <p>Your message has been sent successfully. We will get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                        <Input label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                        <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required></textarea>
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-text-headings">Email</h4>
                        <p className="text-text-main">For general inquiries and partnerships.</p>
                        <a href="mailto:Bridge@skytransfers.rw" className="text-primary font-semibold hover:underline">Bridge@skytransfers.rw</a>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-text-headings">Phone Support</h4>
                        <p className="text-text-main">For application support and urgent queries.</p>
                        <a href="tel:+25078834778" className="text-primary font-semibold hover:underline">+250 788 347 78</a>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-xl font-bold text-text-headings">Our Office</h4>
                        <p className="text-text-main">Kigali, Rwanda</p>
                        <p className="text-text-main">(Placeholder: Full address will be here)</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127602.08873226343!2d30.01613243549649!3d-1.946332717804029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1677322744845!5m2!1sen!2srw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bridge Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
