import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { CONTACT_INFO, WORKING_HOURS } from '../constants/config';
import { Footer } from '../components/Footer/Footer';

// Initialize EmailJS
init("4BGDsE0fWVSkMt8Ft");

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dij7ynio3/image/upload/v1741877594/kontakt_page_m2w7p6.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Kontaktirajte Nas</h1>
            <p className="text-lg sm:text-xl text-blue-100/90 font-light">
              Tu smo da odgovorimo na sva vaša pitanja i pomognemo vam u realizaciji projekata
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold mb-1">Adresa</h3>
                      <p className="text-sm sm:text-base text-blue-100">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-blue-100">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100">{CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Radno vreme</h3>
                      <div className="text-blue-100 space-y-1">
                        <p>Pon - Pet: {WORKING_HOURS.weekdays}</p>
                        <p>Subota: {WORKING_HOURS.saturday}</p>
                        <p>Nedelja: {WORKING_HOURS.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="group flex items-center justify-center w-full px-6 py-3 mt-6 text-white bg-blue-600/20 rounded-xl border border-blue-400/20 hover:bg-blue-600/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Pozovite nas</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-black/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
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
                  
                  
                </div>
                
                <div className="mb-8">
                  <label className="flex items-center text-white text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                    Vaša poruka
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-medium
                    hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:scale-[1.02]
                    shadow-lg hover:shadow-xl flex items-center justify-center space-x-2
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}"
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
                      <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 animate-[successSlideIn_0.5s_ease-out_forwards]">
                    <div className="relative p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center animate-[successPulse_2s_ease-in-out_infinite]">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-lg font-semibold text-green-500 mb-2">Poruka je uspešno poslata!</h3>
                        <p className="text-green-600/80">Odgovorićemo vam u najkraćem mogućem roku.</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 animate-[successSlideIn_0.5s_ease-out_forwards]">
                    <div className="relative p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-lg font-semibold text-red-500 mb-2">Došlo je do greške!</h3>
                        <p className="text-red-600/80">Molimo proverite vašu internet konekciju i pokušajte ponovo.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 sm:mt-8">
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-2 border border-white/10 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.3968429462366!2d19.8080413!3d45.2551301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE1JzE4LjUiTiAxOcKwNDgnMjkuMCJF!5e0!3m2!1sen!2srs!4v1635961234567!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija LOKI N-4"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
};