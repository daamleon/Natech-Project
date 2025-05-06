import React from 'react';
import Button from './Button';
import { Code, Cpu } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 min-h-screen flex items-center md:p-8 p-2"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Solusi Project{" "}
              <span className="text-orange-400">Programming</span> &amp;{" "}
              <span className="text-orange-400">Elektronika</span> dalam Satu
              Tempat
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
              Kami bantu realisasikan ide Anda dalam bentuk aplikasi atau
              perangkat berbasis mikrokontroler.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 px-24 md:px-0">
              {/* <Button className="rounded-3xl" size="md">
                Mulai Sekarang
              </Button> */}
              <Button
                className="rounded-3xl"
                variant="outline"
                size="md"
              >
                Lihat Portofolio
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-400/20 blur-xl rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20">
                    <Code className="w-12 h-12 text-orange-400 mb-4" />
                    <span className="text-white font-medium">Programming</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20">
                    <Cpu className="w-12 h-12 text-orange-400 mb-4" />
                    <span className="text-white font-medium">Elektronika</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1300 320"
          className="w-full text-gray-50"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,234.7C672,235,768,213,864,192C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;