import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { CONTACT_INFO, WORKING_HOURS } from '../../constants/config'; 
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Initialize EmailJS
init("4BGDsE0fWVSkMt8Ft");

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message
    };
    
    try {
      await emailjs.send(
        'service_u5qn1qc',
        'template_zotaww7',
        templateParams,
        '4BGDsE0fWVSkMt8Ft'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Scroll the success message into view
      setTimeout(() => {
        window.scrollTo({
          top: window.scrollY + 100,
          behavior: 'smooth'
        });
      }, 100);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={elementRef} id="kontakt" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwNjZDQyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Kontaktirajte nas</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pošaljite nam poruku i naš tim će vam odgovoriti u najkraćem mogućem roku
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <p key={phone.number} className="text-gray-600">{phone.number}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Radno vreme</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Pon - Pet: {WORKING_HOURS.weekdays}</p>
                    <p>Subota: {WORKING_HOURS.saturday}</p>
                    <p>Nedelja: {WORKING_HOURS.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center text-white text-sm font-medium mb-2">
                    <User className="w-4 h-4 mr-2 text-blue-400" />
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-white text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    Email adresa
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-white text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 mr-2 text-blue-400" />
                    Broj telefona
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="flex items-center text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                    Vaša poruka
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-medium
                  hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:scale-[1.02] 
                  shadow-lg hover:shadow-xl flex items-center justify-center space-x-2
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    <span>Slanje...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Pošalji poruku</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center">
                  <p className="font-medium">Poruka je uspešno poslata!</p>
                  <p className="text-sm mt-1">Odgovorićemo vam u najkraćem mogućem roku.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-center">
                  <p className="font-medium">Došlo je do greške prilikom slanja poruke.</p>
                  <p className="text-sm mt-1">Molimo proverite vašu internet konekciju i pokušajte ponovo.</p>
                </div>
              )}
            </form>
          </div>
          
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.522250618742!2d20.925208!3d43.638599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757625aba56f975%3A0x6a7b10fd6e0e5e89!2sHajduk%20Veljkova%2054%2C%20Vrnjci!5e0!3m2!1sen!2srs!4v1710444444444!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija LOKI N-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};