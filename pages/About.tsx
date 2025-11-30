import React from 'react';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT, CORE_VALUES, IMPACT_STATS, TAGLINE } from '../constants';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section id="about-main" title={ABOUT_CONTENT.title} subtitle={TAGLINE}>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
           <div className="space-y-6">
             <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
                <div className="flex items-start mb-4">
                  <Target className="text-brand-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-stone-900">Our Mission</h4>
                    <p className="text-stone-700 text-sm">{ABOUT_CONTENT.mission}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="text-brand-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-stone-900">Our Vision</h4>
                    <p className="text-stone-700 text-sm">{ABOUT_CONTENT.vision}</p>
                  </div>
                </div>
             </div>
             
             <p className="text-stone-600 leading-relaxed">
               {ABOUT_CONTENT.description_1}
             </p>
             <p className="text-stone-600 leading-relaxed">
               {ABOUT_CONTENT.description_2}
             </p>
             
             <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Licensed & Compliant', 'Eco-Friendly Practices', 'Community Focused', 'Vision 2050 Aligned'].map((item, i) => (
                  <div key={i} className="flex items-center text-stone-700 font-medium">
                    <CheckCircle2 className="text-brand-600 mr-2 h-5 w-5" />
                    {item}
                  </div>
                ))}
             </div>
           </div>
           
           <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-stone-200 rounded-xl transform -rotate-2"></div>
              {/* Professional Business/Leadership Image */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                alt="Leadership Team" 
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover" 
              />
           </div>
         </div>

         {/* Core Values */}
         <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {CORE_VALUES.map((value, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow text-center">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center mb-4 mx-auto text-brand-600">
                      <value.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 mb-2">{value.title}</h4>
                    <p className="text-xs text-stone-600">{value.description}</p>
                  </div>
                ))}
            </div>
         </div>
      </Section>

      {/* --- IMPACT / STATS SECTION --- */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Driving Social & Economic Impact</h2>
          <p className="max-w-2xl mx-auto text-brand-100 mb-12">By 2031, BIMH LTD aims to be a benchmark for inclusive development.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-brand-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};