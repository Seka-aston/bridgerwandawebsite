
import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { TESTIMONIALS } from '../constants';

const SuccessStories: React.FC = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1611214224933-7a2403b57a03?q=80&w=600&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=600&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=600&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&h=400&auto=format&fit=crop',
  ];

  return (
    <div>
      <header className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Impact"
            title="Student Success Stories"
            description="Discover how Bridge has empowered students to achieve their career goals and make a difference."
          />
        </div>
      </header>

      {/* Testimonials Section */}
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col text-center p-8">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
                />
                <p className="text-text-main italic flex-grow">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h4 className="font-bold text-lg text-text-headings">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.program}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Media Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Gallery"
            title="Moments from Our Workshops & Events"
            description="A glimpse into the collaborative and engaging learning environment at Bridge."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
