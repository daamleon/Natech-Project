export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: 'programming' | 'electronics';
  technologies: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}