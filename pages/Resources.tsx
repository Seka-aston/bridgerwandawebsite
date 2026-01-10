
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { supabase } from '../lib/supabase';
import { Resource } from '../types';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase.from('resources').select('*');
        if (error) throw error;
        
        // Use Supabase data if available, otherwise fallback to constants
        setResources(data && data.length > 0 ? data : RESOURCES);
      } catch (error) {
        console.error('Error fetching resources:', error);
        // Fallback on error
        setResources(RESOURCES);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const blogs = resources.filter(r => r.type === 'Blog');
  const webinars = resources.filter(r => r.type === 'Webinar');
  const guides = resources.filter(r => r.type === 'Mentorship Guide');

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-text-main">Loading resources...</p>
      </div>
    );
  }

  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Knowledge Hub"
            title="Resources for Your Growth"
            description="Explore articles, guides, and workshop information to support your career development journey."
          />
        </div>
      </header>

      {/* Blog & Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-headings mb-8">Blog & Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length === 0 ? (
              <p className="col-span-full text-center text-text-main italic">No blogs available yet.</p>
            ) : blogs.map(resource => (
              <Card key={resource.id}>
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{resource.type}</p>
                  <h3 className="text-xl font-bold mb-3 text-text-headings">{resource.title}</h3>
                  <p className="text-text-main mb-4">{resource.summary}</p>
                  <a href={resource.link} className="font-semibold text-primary hover:underline">Read More</a>
                </div>
                <div className="px-6 py-3 bg-gray-50 text-sm text-gray-500 border-t">
                  <span>{resource.date}</span> {resource.author && `by ${resource.author}`}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars & Workshops */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-headings mb-8">Webinars & Workshops</h2>
          <div className="space-y-6">
            {webinars.length === 0 ? (
              <p className="text-center text-text-main italic">No upcoming webinars or workshops.</p>
            ) : webinars.map(resource => (
              <Card key={resource.id} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <p className="text-sm text-primary font-semibold">{resource.date}</p>
                  <h3 className="text-xl font-bold mt-1 text-text-headings">{resource.title}</h3>
                  <p className="text-text-main mt-2 max-w-2xl">{resource.summary}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a href={resource.link} className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-headings mb-8">Mentorship Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.length === 0 ? (
              <p className="text-text-main italic">No mentorship resources currently available.</p>
            ) : guides.map(resource => (
               <Card key={resource.id} className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{resource.type}</p>
                  <h3 className="text-xl font-bold mb-3 text-text-headings">{resource.title}</h3>
                  <p className="text-text-main mb-4">{resource.summary}</p>
                  <a href={resource.link} className="font-semibold text-primary hover:underline">Download Guide</a>
              </Card>
            ))}
            <div className="p-6 bg-surface rounded-lg flex flex-col justify-center">
                <h3 className="text-xl font-bold text-text-headings">Interested in being a mentor?</h3>
                <p className="text-text-main mt-2 mb-4">Share your experience and guide the next generation of professionals. Partner with us to make a lasting impact.</p>
                <Link to="/partnerships" className="font-semibold text-primary hover:underline">Learn About Partnering</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
