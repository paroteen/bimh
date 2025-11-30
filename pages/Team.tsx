import React from 'react';
import { User, Quote } from 'lucide-react';
import { TEAM, TESTIMONIALS } from '../constants';
import { Section } from '../components/Section';

export const Team: React.FC = () => {
  return (
    <div className="pt-20">
        <Section id="team" title="Our Leadership" subtitle="Guided by experienced women leaders dedicated to excellence">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 text-center hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden bg-stone-100 flex items-center justify-center relative group">
                   {/* Placeholder logic: If image exists show it, else show icon */}
                   {member.imageUrl ? (
                       <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                   ) : (
                       <div className="flex flex-col items-center justify-center text-stone-300 group-hover:text-brand-500 transition-colors">
                           <div className="p-4 rounded-full bg-stone-200 mb-2">
                               <User size={64} />
                           </div>
                           <span className="text-xs uppercase tracking-wider font-semibold">Photo Coming Soon</span>
                       </div>
                   )}
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-stone-900">{member.name}</h4>
                  <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-20 bg-stone-50 border-t border-stone-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-stone-900">Partnership & Trust</h2>
               <p className="text-stone-600 mt-4 max-w-2xl mx-auto">What our partners say about working with BIMH LTD.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {TESTIMONIALS.map((t) => (
                 <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative">
                   <div className="absolute top-6 right-6 text-brand-100">
                        <Quote size={48} fill="currentColor" />
                   </div>
                   <p className="text-stone-600 italic mb-6 text-lg relative z-10">"{t.text}"</p>
                   <div>
                     <p className="font-bold text-stone-900">{t.clientName}</p>
                     <p className="text-sm text-brand-600 font-medium">{t.company}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>
    </div>
  );
};