
import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import ApplyLink from '../components/ApplyLink';

const About: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <header className="bg-secondary py-24 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Bridge</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Closing the gap between TVET learning and practical career readiness in Rwanda.
          </p>
        </div>
      </header>
      
      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 text-center">
            <div>
              <h2 className="text-3xl font-bold text-text-headings mb-4">Our Mission</h2>
              <p className="text-lg text-text-main">
                Bridge's mission is to empower student communities through accessible resources, fostering connections and collaboration to enhance career development.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-headings mb-4">Our Vision</h2>
              <p className="text-lg text-text-main">
                Bridge envisions a world where every graduate thrives through shared resources and connectedness, enabling full potential and inclusive collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background and Inspiration */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="/images/about.jpg" alt="Inspiration for Bridge" className="rounded-lg shadow-xl"/>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader
                subtitle="Our Story"
                title="Background and Inspiration"
                className="text-left mb-6"
              />
              <p className="text-lg text-text-main mb-4">
                Bridge was founded to address the critical need for practical experience among TVET students in Rwanda. We saw a disconnect between the valuable skills learned in classrooms and the dynamic needs of the modern workplace.
              </p>
              <p className="text-lg text-text-main">
                Our inspiration comes from the ambition and potential of these students. We believe that with the right support, mentorship, and opportunities, they can become the skilled professionals who will drive Rwanda's future. We are the "bridge" that connects their potential to their profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Context */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                subtitle="The Challenge"
                title="Why Our Work Matters"
                description="We are responding to critical challenges faced by a TVET students in their transition to the workforce."
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-text-headings mb-3">Limited Standardized Internships</h3>
                    <p className="text-text-main">The lack of quality, standardized internship opportunities often leads to skill mismatches and low-quality placements, hindering a student's career start.</p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-text-headings mb-3">Lack of Mentorship & Resources</h3>
                    <p className="text-text-main">Many students lack access to professional mentorship and career guidance, resulting in poor career choices and misaligned goals after graduation.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join Bridge today and take the first step towards a successful and fulfilling career.
          </p>
          <ApplyLink variant="secondary">Apply Now</ApplyLink>
        </div>
      </section>
    </div>
  );
};

export default About;
