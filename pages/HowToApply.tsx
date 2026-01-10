
import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const HowToApply: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "Visit Website & Start Application",
      description: "Click the 'Apply Now' or 'Apply' button found on our homepage and program pages to begin.",
      image: "/how/Step1.png"
    },
    {
      step: 2,
      title: "Select Preferred Program",
      description: "Choose the internship or training program that best aligns with your career goals and field of study.",
      image: "/how/Step2.png"
    },
    {
      step: 3,
      title: "Fill Academic & Identification Details",
      description: "Provide your personal information, contact details, and academic background accurately.",
      image: "/how/Step3.png"
    },
    {
      step: 4,
      title: "Upload Required Documents",
      description: "Upload clear copies of your National ID, proof of payment for the registration fee, and your most recent academic transcript.",
      image: "/how/Step4.png"
    },
    {
      step: 5,
      title: "Answer Key Questions",
      description: "Share your aspirations with us by answering questions about your future university and the impact you wish to create.",
      image: "/how/Step5.png"
    },
    {
      step: 6,
      title: "Review and Submit",
      description: "Carefully review all your provided information and documents, then submit your application. You will receive a confirmation email.",
      image: "/how/Step6.png"
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
          <div className="space-y-24 max-w-6xl mx-auto">
            {steps.map((item, index) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mr-4 shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-text-headings">{item.title}</h3>
                  </div>
                  <p className="text-lg text-text-main leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Image Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-24">
            <h3 className="text-2xl font-bold text-text-headings mb-4">Ready to Apply?</h3>
            <p className="text-text-main mb-6 max-w-2xl mx-auto">Make sure you have all your documents ready and start your application today.</p>
            <Button to="/apply" className="text-lg">Start Your Application</Button>
          </div>
          
          <div className="mt-24 p-10 bg-surface rounded-3xl text-center max-w-4xl mx-auto border border-primary/10 shadow-sm">
            <h4 className="text-2xl font-bold text-text-headings">Need Help?</h4>
            <p className="text-text-main mt-3">If you have any questions during the application process, please don't hesitate to contact our support team.</p>
            <p className="text-3xl font-bold text-primary mt-6">+250 788 434 778</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowToApply;
