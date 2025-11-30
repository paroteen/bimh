import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Section } from '../components/Section';

export const Products: React.FC = () => {
  return (
    <div className="pt-20">
      <Section id="products" title="Our Products & Services" subtitle="Supporting Rwanda's Infrastructure Growth" dark>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group bg-stone-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-brand-900/20 transition-all duration-300 flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-500 p-2 rounded-full text-stone-900 z-10">
                    <product.icon size={24} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow md:w-3/5">
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-stone-300 mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-brand-500 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                        <li key={i} className="text-sm text-stone-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                            {feature}
                        </li>
                        ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact"
                    className="inline-block w-full text-center py-3 border border-stone-600 text-stone-300 rounded hover:bg-brand-500 hover:text-stone-900 hover:border-brand-500 transition-colors font-medium"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        <section className="bg-brand-50 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-6">Need Custom Specifications?</h2>
                <p className="text-stone-700 text-lg mb-8">
                    We understand that every project is unique. Our team is ready to discuss your specific stone cutting and aggregate requirements.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-stone-900 text-white font-bold rounded-md hover:bg-stone-800 transition-colors">
                    Contact Our Sales Team
                </Link>
            </div>
        </section>
    </div>
  );
};