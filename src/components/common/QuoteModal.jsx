import { useState } from 'react';
import { XIcon, CheckCircleIcon } from '../icons/Icons';
import { CONTACT_INFO } from '../../data/mockData';
import { supabase } from '../../lib/supabaseClient';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
    const text = `*New Quote Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}${email ? `%0A*Email:* ${email}` : ''}%0A*Requirements:* ${message}`;
    const whatsappNumber = CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');

    // 3. Open Email Client (mailto)
    const emailSubject = encodeURIComponent(`New Quote Request from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nRequirements:\n${message}`);
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
    
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-2xl font-serif text-slate-900">Request a Quote</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <XIcon size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
              <CheckCircleIcon size={48} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p>We will review your requirements and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="+91..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Requirements *</label>
                <textarea 
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold tracking-wider uppercase hover:bg-amber-600 transition-colors mt-2"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
