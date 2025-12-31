
import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const HowToApply: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Visit Website & Start Application",
      description: "Click the 'Apply Now' or 'Register' button found on our homepage and program pages to begin."
    },
    {
      step: 2,
      title: "Select Preferred Program",
      description: "Choose the internship or training program that best aligns with your career goals and field of study."
    },
    {
      step: 3,
      title: "Fill Academic & Identification Details",
      description: "Provide your personal information, contact details, and academic background accurately."
    },
    {
      step: 4,
      title: "Upload Required Documents",
      description: "Upload clear copies of your National ID, proof of payment for the registration fee, and your most recent academic transcript."
    },
    {
      step: 5,
      title: "Answer Key Questions",
      description: "Share your aspirations with us by answering questions about your future university and the impact you wish to create."
    },
    {
      step: 6,
      title: "Review and Submit",
      description: "Carefully review all your provided information and documents, then submit your application. You will receive a confirmation email."
    },
  ];

  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Application Process"
            title="How to Apply to Bridge"
            description="Follow these simple steps to complete your application and start your journey with us."
          />
        </div>
      </header>
      
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
              <ul className="space-y-12">
                {steps.map((item, index) => (
                  <li key={item.step} className="relative flex items-center">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${index % 2 === 0 ? 'bg-primary ml-auto mr-8' : 'bg-primary mr-auto ml-8 md:ml-0 md:mr-auto'}`}>
                      {item.step}
                    </div>
                    <div className={`w-1/2 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-left' : 'md:ml-auto text-left'}`}>
                      <h3 className="text-xl font-bold text-text-headings mb-2">{item.title}</h3>
                      <p className="text-text-main">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold text-text-headings mb-4">Ready to Apply?</h3>
            <p className="text-text-main mb-6 max-w-2xl mx-auto">Make sure you have all your documents ready and start your application today.</p>
            <Button to="/apply" className="text-lg">Start Your Application</Button>
          </div>
          
          <div className="mt-20 p-8 bg-surface rounded-lg text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-text-headings">Need Help?</h4>
            <p className="text-text-main mt-2">If you have any questions during the application process, please don't hesitate to contact our support team.</p>
            <p className="text-2xl font-bold text-primary mt-4">+250 788 347 78</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowToApply;
