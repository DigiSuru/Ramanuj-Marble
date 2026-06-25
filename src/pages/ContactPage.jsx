import { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, CheckCircleIcon } from '../components/icons/Icons';
import { CONTACT_INFO } from '../data/mockData';
import { supabase } from '../lib/supabaseClient';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, phone, message } = formState;

    try {
      // 1. Save to Database
      const { error } = await supabase
        .from('inquiries')
        .insert([{ name, email, phone, message }]);

      if (error) {
        console.error("Database insert error:", error);
      }
    } catch (err) {
      console.error("Failed to save inquiry:", err);
    }

    // 2. Open WhatsApp
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}${email ? `%0A*Email:* ${email}` : ''}%0A*Requirements:* ${message}`;
    const whatsappNumber = CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');

    // 3. Open Email Client (mailto)
    const emailSubject = encodeURIComponent(`New Website Inquiry from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nRequirements:\n${message}`);
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    
    // We open email in the same window (or new window) after a short delay so WhatsApp opens first
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
    
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-amber-600 tracking-[0.2em] uppercase text-sm font-bold">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mt-2 mb-6">Visit Our Showroom</h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Whether you are looking for a ready-made murti or wish to commission a custom architectural piece, our experts are ready to assist you. Contact us today for a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <MapPinIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Factory & Showroom</h3>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <PhoneIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100 mr-5">
                  <MailIcon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-200 h-64 rounded-xl overflow-hidden relative shadow-inner flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-medium">Google Map Embed Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 h-fit">
            <h2 className="text-2xl font-serif text-slate-900 mb-8">Send an Inquiry</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <CheckCircleIcon size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for contacting Ramanuj Marble. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="+919252145887"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product/Requirements *</label>
                  <textarea 
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                    placeholder="Tell us about what you are looking for..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold tracking-wider uppercase hover:bg-amber-600 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
