
import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { PARTNERS } from '../constants';
import Button from '../components/ui/Button';
import { Briefcase, Zap, Users } from 'lucide-react';

const Partnerships: React.FC = () => {

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Access Skilled Talent",
      description: "Connect with a pool of motivated and well-prepared TVET students ready for internships and entry-level roles."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Shape Future Professionals",
      description: "Influence the development of the next generation of talent by providing practical experience and mentorship."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Enhance Your Brand",
      description: "Demonstrate your commitment to community development and youth empowerment in Rwanda."
    }
  ];

  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Collaborate With Us"
            title="Partnerships"
            description="We partner with leading institutions, employers, and industry professionals to create impactful opportunities for students."
          />
        </div>
      </header>
      
      {/* List of Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-text-main mb-10">Our Valued Partners & Employers</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {PARTNERS.map(partner => (
              <a key={partner.id} href={partner.website} target="_blank" rel="noopener noreferrer" title={partner.name}>
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Partnering */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Partner with Bridge?"
            title="Benefits of Partnering with Us"
            description="Join us in our mission to empower students and build a stronger workforce for tomorrow."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {benefits.map(benefit => (
              <div key={benefit.title} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-headings">{benefit.title}</h3>
                <p className="text-text-main">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            If you are interested in providing internship opportunities, mentorship, or collaborating with us, we'd love to hear from you.
          </p>
          <Button to="/contact" variant="secondary">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
