import React from 'react';
import SectionTitle from './SectionTitle';
import { Award, Users, ThumbsUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:px-8 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Tentang NatechProject" 
          highlight="NatechProject"
        />
        
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 -skew-x-6 bg-orange-400 rounded-lg opacity-70"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="NatechProject Team" 
                className="relative rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Tim Ahli di Bidangnya</h3>
            <p className="text-gray-600 mb-6">
              NatechProject adalah platform jasa pembuatan project programming dan elektronika
              yang didirikan oleh sekelompok engineer dan developer berpengalaman. Kami berkomitmen untuk
              memberikan solusi teknologi berkualitas tinggi dengan pendekatan yang profesional dan
              harga yang kompetitif.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Berpengalaman</h4>
                  <p className="text-gray-600">Tim kami telah mengerjakan berbagai proyek untuk klien dari berbagai sektor industri.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Tim Multidisiplin</h4>
                  <p className="text-gray-600">Terdiri dari programmer dan teknisi elektronika yang ahli dalam bidangnya masing-masing.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white">
                <div className="bg-orange-100 p-3 rounded-full">
                  <ThumbsUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Kepuasan Klien</h4>
                  <p className="text-gray-600">Kami memberikan revisi hingga klien puas dengan hasil yang diberikan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;