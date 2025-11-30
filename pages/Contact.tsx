import React, { useState } from 'react';
import { MapPin, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;

    try {
      // Using Resend API to send email
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer re_RQEzFzbr_PDq2Jfki2yEJ6gCKShH9BFXX`
        },
        body: JSON.stringify({
          from: "BIMH LTD Contact Form <onboarding@resend.dev>",
          to: ["o.itangisha@gmail.com"],
          subject: "New Website Inquiry - BIMH LTD",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #e08d26; border-bottom: 2px solid #e08d26; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Name:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Phone:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Interested In:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${interest}</td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd; vertical-align: top;">Message:</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
              <p style="margin-top: 20px; color: #666; font-size: 12px;">
                This email was sent from the BIMH LTD website contact form.
              </p>
            </div>
          `
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <Section id="contact" title="Contact Us" subtitle="Get in touch for orders and partnerships">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-green-600 h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h4>
                  <p className="text-stone-600 mb-6">
                    Thank you for contacting BIMH LTD. We have received your inquiry and will respond shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-stone-100 text-stone-700 font-medium rounded hover:bg-stone-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-2 rounded border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        className="w-full px-4 py-2 rounded border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                        placeholder="+250..."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-2 rounded border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-stone-700 mb-1">Interested In</label>
                    <select 
                      id="interest" 
                      name="interest" 
                      className="w-full px-4 py-2 rounded border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                    >
                      <option value="Bulk Stone Supply">Bulk Stone Supply</option>
                      <option value="Custom Stone Cutting">Custom Stone Cutting</option>
                      <option value="Logistics / Delivery">Logistics / Delivery</option>
                      <option value="Partnership Inquiry">Partnership Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message / Project Details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required 
                      className="w-full px-4 py-2 rounded border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  {errorMessage && (
                    <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 bg-stone-900 text-white font-bold rounded hover:bg-stone-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div className="bg-stone-900 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Head Office</h3>
                <ul className="space-y-6">
                  {CONTACT_INFO.map((info, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-brand-500 p-2 rounded mr-4 text-stone-900">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 uppercase tracking-wider">{info.label}</p>
                        <p className="text-lg font-medium">{info.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-stone-700">
                  <h4 className="font-bold mb-2">Office Hours</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-stone-300">
                    <div>
                      <p>Monday - Friday</p>
                      <p className="text-white">8:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p>Saturday</p>
                      <p className="text-white">8:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Google Map Iframe */}
              <div className="h-80 bg-stone-200 rounded-xl overflow-hidden relative shadow-inner border border-stone-300">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=Nyarugunga+-+Kicukiro,+Kigali,+Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="BIMH LTD Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
      </Section>
    </div>
  );
};