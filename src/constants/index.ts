import { NavItem, ServiceItem, PortfolioItem, TestimonialItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Kontak', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Project Programming',
    icon: 'code',
    description: 'Web App, Mobile App, dan sistem berbasis AI yang dibangun sesuai kebutuhan bisnis Anda.',
  },
  {
    title: 'Project Elektronika',
    icon: 'cpu',
    description: 'Solusi elektronika berbasis Arduino, IoT, dan sistem robotik dengan kualitas terbaik.',
  },
  {
    title: 'Konsultasi Teknis Gratis',
    icon: 'message-circle',
    description: 'Diskusi gratis untuk menganalisa kebutuhan dan menemukan solusi terbaik untuk project Anda.',
  },
  {
    title: 'Custom Request',
    icon: 'settings',
    description: 'Solusi kustom sesuai ide unik dan kebutuhan spesifik yang Anda miliki.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Sistem E-commerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'programming',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Dashboard Admin',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'programming',
    technologies: ['Vue.js', 'Express', 'MySQL'],
  },
  {
    id: 3,
    title: 'Aplikasi Mobile',
    image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'programming',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    id: 4,
    title: 'Sistem IoT',
    image: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    technologies: ['Arduino', 'ESP32', 'Firebase'],
  },
  {
    id: 5,
    title: 'Robot Line Follower',
    image: 'https://images.pexels.com/photos/8566454/pexels-photo-8566454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    technologies: ['Arduino', 'Sensors', 'C++'],
  },
  {
    id: 6,
    title: 'Smart Home System',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    technologies: ['ESP8266', 'MQTT', 'Node.js'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Ahmad Rizal',
    role: 'CEO, PT Solusi Digital',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'NatechProject berhasil membangun sistem manajemen inventaris yang sangat meningkatkan efisiensi operasional kami.',
  },
  {
    id: 2,
    name: 'Siti Nurhayati',
    role: 'Founder, EduTech Startup',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'Aplikasi mobile yang dibuat sangat user-friendly dan tepat sesuai kebutuhan pengguna kami.',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'CTO, Agritech Indonesia',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    comment: 'Sistem IoT untuk monitoring tanaman yang NatechProject kembangkan sangat andal dan membantu petani kami.',
  },
];