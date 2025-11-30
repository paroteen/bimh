import React from 'react';
import { ArrowRight, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT, ABOUT_CONTENT, CORE_VALUES, PRODUCTS } from '../constants';
import { Section } from '../components/Section';

export const Home: React.FC = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden hero-pattern">
        {/* Background Image Overlay - Quarry/Excavator Image */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1920&auto=format&fit=crop" 
              alt="Quarry Heavy Machinery" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/50 to-stone-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500 text-brand-400 text-sm font-semibold tracking-wide mb-6">
            WOMEN-LED ENTERPRISE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {HERO_CONTENT.headline}
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products"
              className="px-8 py-4 bg-brand-500 text-stone-900 font-bold rounded-md hover:bg-brand-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-500/20 flex items-center justify-center"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all flex items-center justify-center"
            >
              {HERO_CONTENT.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <Section id="intro" title="Welcome to BIMH LTD" subtitle="Building Rwanda's Future">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              {ABOUT_CONTENT.description_1}
            </p>
             <p className="text-lg text-stone-700 leading-relaxed mb-8">
              We provide the highest quality hard core, gravel, and stone products for projects of all sizes.
            </p>
            <Link to="/about" className="text-brand-600 font-bold hover:text-brand-700 inline-flex items-center">
              Read more about our mission <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-100 rounded-xl transform rotate-2"></div>
             {/* Construction Site / Engineer Image */}
             <img 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
               alt="Construction Site" 
               className="relative rounded-lg shadow-xl w-full h-auto object-cover" 
             />
          </div>
        </div>
      </Section>

      {/* --- FEATURED PRODUCTS PREVIEW --- */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <Link key={product.id} to="/products" className="group block bg-stone-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                   <p className="text-stone-400 text-sm">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-block px-8 py-3 border border-stone-600 text-stone-300 rounded hover:bg-brand-500 hover:text-stone-900 transition-colors font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};