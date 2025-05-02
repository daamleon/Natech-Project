import React from 'react';
import SectionTitle from './SectionTitle';
import PortfolioTabs from './PortfolioTabs';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Portofolio" 
          subtitle="Beberapa proyek terbaik yang telah kami kerjakan untuk klien-klien kami."
          highlight="Portofolio"
        />
        
        <PortfolioTabs />
      </div>
    </section>
  );
};

export default PortfolioSection;