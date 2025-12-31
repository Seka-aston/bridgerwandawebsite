
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { PROGRAMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            subtitle="Our Offerings"
            title="Explore Our Programs"
            description="We offer a range of services designed to equip TVET students with the skills, experience, and connections needed to thrive professionally."
          />
        </div>
      </header>

      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {PROGRAMS.map((program) => (
              <Card key={program.id} className="flex flex-col group">
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-text-headings mb-3">{program.title}</h3>
                  <p className="text-text-main mb-6">{program.description}</p>
                </div>
                <div className="p-8 bg-gray-50 border-t border-gray-200">
                  <Link
                    to={`/programs/${program.id}`}
                    className="font-bold text-primary hover:text-primary-dark transition-colors duration-200 flex items-center"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Programs;
