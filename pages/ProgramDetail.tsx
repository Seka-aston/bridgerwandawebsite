
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { CheckCircle, Clock, ListChecks } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Program } from '../types';
import { PROGRAMS } from '../constants';

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('*')
          .eq('id', programId)
          .single();
        
        if (error || !data) {
          // If not found in Supabase, check constants
          const localProgram = PROGRAMS.find(p => p.id === programId);
          if (localProgram) {
            setProgram(localProgram);
          } else {
            throw error || new Error('Program not found');
          }
        } else {
          setProgram(data);
        }
      } catch (error) {
        console.error('Error fetching program:', error);
        // Final fallback to check constants one last time
        const localProgram = PROGRAMS.find(p => p.id === programId);
        if (localProgram) setProgram(localProgram);
      } finally {
        setLoading(false);
      }
    };

    if (programId) fetchProgram();
  }, [programId]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-text-main">Loading program details...</p>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Program not found</h1>
        <p className="mt-4">The program you are looking for does not exist.</p>
        <Button to="/programs" className="mt-8">Back to Programs</Button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <header className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">{program.title}</h1>
          <p className="mt-4 text-lg text-green-100 max-w-3xl">{program.description}</p>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-text-headings mb-6">Program Overview</h2>
              <p className="text-lg text-text-main leading-relaxed">{program.longDescription}</p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-headings mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                  Objectives & Skills Developed
                </h3>
                <ul className="space-y-3">
                  {program.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-text-main">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-surface p-8 rounded-lg sticky top-28">
                <h3 className="text-2xl font-bold text-text-headings mb-6">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-gray-500" />
                    <div>
                      <p className="font-semibold text-text-headings">Duration</p>
                      <p className="text-text-main">{program.duration}</p>
                    </div>
                  </div>
                   <div className="flex items-start">
                    <ListChecks className="w-6 h-6 mr-3 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-text-headings">Requirements</p>
                      <ul className="list-disc list-inside text-text-main">
                        {program.requirements.map((req, i) => <li key={i}>{req}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <Button to={`/apply?program=${program.id}`} className="w-full mt-8 text-lg">Register for this Program</Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgramDetail;
