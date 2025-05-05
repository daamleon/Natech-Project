import React from 'react';
import SectionTitle from './SectionTitle';
import PortfolioTabs from './PortfolioTabs';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="">
      <div className="container mx-auto px-8 py-12 overflow-x-hidden">
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