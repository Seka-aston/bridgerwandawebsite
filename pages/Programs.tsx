
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Program } from '../types';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data, error } = await supabase.from('programs').select('*');
        if (error) throw error;
        
        // Use Supabase data if available, otherwise fallback to constants
        setPrograms(data && data.length > 0 ? data : PROGRAMS);
      } catch (error) {
        console.error('Error fetching programs:', error);
        // Fallback on error
        setPrograms(PROGRAMS);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

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
            {loading ? (
              <div className="col-span-full text-center py-10 text-text-main">Loading programs...</div>
            ) : programs.map((program) => (
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
