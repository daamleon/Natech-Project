import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem as PortfolioItemType } from '../types';
import { ExternalLink } from 'lucide-react';

const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'electronics'>('all');

  const filteredItems = activeTab === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 p-2.5 md:p-3 md:rounded-3xl rounded-2xl gap-1.5">
          <button
            className={`md:px-6 md:py-2.5 px-2 py-1.5 md:rounded-2xl rounded-xl transition-all duration-300  text-s md:text-lg ${
              activeTab === "all"
                ? "bg-white shadow-lg text-orange-400 font-medium text-s md:text-lg scale-"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("all")}
          >
            Semua
          </button>
          <button
            className={`md:px-6 md:py-2.5 px-2 py-1.5 md:rounded-2xl rounded-xl transition-all duration-300  text-s md:text-lg ${
              activeTab === "programming"
                ? "bg-white shadow-lg text-orange-400 font-medium scale-105 text-s md:text-lg "
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("programming")}
          >
            Programming
          </button>
          <button
            className={`md:px-6 md:py-2.5 px-2 py-1.5 md:rounded-2xl rounded-xl transition-all duration-300 text-s md:text-lg  ${
              activeTab === "electronics"
                ? "bg-white shadow-lg text-orange-400 font-medium text-s md:text-lg scale-105"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("electronics")}
          >
            Elektronika
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const PortfolioItem: React.FC<{ item: PortfolioItemType }> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-orange-400/90 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-orange-400 transition-colors">
              Lihat Detail
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 capitalize">{item.category}</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTabs;