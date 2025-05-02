import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    project: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda!');
    setFormData({ name: '', contact: '', project: '', description: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Hubungi Kami" 
          subtitle="Diskusikan ide project Anda dengan tim kami dan dapatkan solusi terbaik."
          highlight="Hubungi"
        />
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  Email atau No. WhatsApp
                </label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Masukkan email atau nomor WhatsApp"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Project
                </label>
                <select
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                >
                  <option value="">Pilih jenis project</option>
                  <option value="web">Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="iot">IoT / Elektronika</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Kebutuhan
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Jelaskan secara singkat kebutuhan project Anda"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold">Telepon</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">hello@natechproject.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Teknologi No. 123<br />
                    Jakarta Selatan, 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Jadwal Operasional</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Senin - Jumat</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sabtu</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minggu</span>
                  <span className="font-medium">Tutup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-20 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </section>
  );
};

export default ContactSection;