import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a
              href="#home"
              className="flex items-center text-2xl font-bold text-white mb-4"
            >
              <img className="max-h-[200px]" src="/natech-white.png" alt="" />
            </a>
            <p className="mb-4">
              Platform jasa pembuatan project programming dan elektronika dengan
              pendekatan simple dan profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  IoT Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Arduino Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Konsultasi Teknis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>Jl. Teknologi No. 123</li>
              <li>Jakarta Selatan, 12345</li>
              <li>Indonesia</li>
              <li className="pt-2">hello@natechproject.com</li>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p>&copy; {currentYear} NatechProject. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;