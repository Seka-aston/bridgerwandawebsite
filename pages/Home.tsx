
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { PROGRAMS, TESTIMONIALS } from '../constants';
import { ArrowRight, Briefcase, Target, Users, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const whyBridgeBenefits = [
    { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Hands-on Experience", description: "Internships aligned with TVET curriculum to build practical skills." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Workshops & Training", description: "Develop professional and technical skills demanded by the industry." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Network Development", description: "Connect with mentors, industry professionals, and potential employers." },
    { icon: <Target className="w-8 h-8 text-primary" />, title: "Ongoing Support", description: "Continuous guidance from university prep to your first job." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://unsplash.com/photos/two-female-coworkers-collaborating-showing-them-something-on-their-black-surface-laptop-QKml62yu-dA"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Empowering the Next Generation of Skilled Professionals
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            Bridge connects TVET students in Rwanda with internships, training, and career opportunities to close the gap between learning and professional readiness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/apply" variant="primary" className="text-lg">Register Now</Button>
            <Button to="/programs" variant="secondary" className="text-lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Brief Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-text-headings mb-4">What is Bridge?</h2>
                <p className="text-lg text-text-main mb-6">
                Bridge's mission is to empower student communities through accessible resources, fostering connections and collaboration to enhance career development. We offer structured internship and training programs tied to the TVET curriculum and market needs, complemented by mentorship, exposure, and professional skill development.
                </p>
                <Link to="/about" className="font-bold text-primary hover:underline flex items-center">
                    Discover Our Story <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1600880292203-942bb68b2b35?q=80&w=600&h=400&auto=format&fit=crop" alt="Team meeting" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Snapshot */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Services"
            title="Programs Designed for Your Success"
            description="We provide a mix of internship placement, mentorship, career guidance, and entrepreneurship training to prepare you for the modern workforce."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program) => (
              <Card key={program.id} className="flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-text-headings">{program.title}</h3>
                  <p className="text-text-main">{program.description}</p>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <Link to={`/programs/${program.id}`} className="font-semibold text-primary hover:underline flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bridge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Value"
            title="Why Choose Bridge?"
            description="We go beyond standard placements to provide a holistic support system for your career growth."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {whyBridgeBenefits.map((benefit) => (
                <div key={benefit.title} className="p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-surface mx-auto mb-4">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text-headings">{benefit.title}</h3>
                    <p className="text-text-main">{benefit.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader
            subtitle="Success Stories"
            title="Hear From Our Students"
            className="text-white"
          />
           <div className="max-w-4xl mx-auto">
            {TESTIMONIALS.slice(0, 1).map(testimonial => (
              <div key={testimonial.id} className="text-center">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/50" />
                <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-green-200">{testimonial.program}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/success-stories" variant="secondary">View More Stories</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
