import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Download, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const nebula1Ref = useRef<HTMLDivElement>(null);
  const nebula2Ref = useRef<HTMLDivElement>(null);
  const nebula3Ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current)
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: -50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });

      // Cards animation
      if (cardsRef.current)
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 80,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          delay: 0.5
        });

      // Nebula floating animation
      gsap.to(nebula1Ref.current, {
        y: 30,
        x: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(nebula2Ref.current, {
        y: -40,
        x: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(nebula3Ref.current, {
        y: 20,
        x: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      gsap.to(nebula1Ref.current, {
        x: xPos * 1.5,
        y: yPos * 1.5,
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to(nebula2Ref.current, {
        x: -xPos * 1.2,
        y: -yPos * 1.2,
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to(nebula3Ref.current, {
        x: xPos * 0.8,
        y: -yPos * 0.8,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
  
      console.log('Form submitted:', formData);
      
      setFormStatus('success');
      setStatusMessage('Message sent successfully! 🚀 I\'ll get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setStatusMessage('Oops! Something went wrong. Please try again.');
      
      setTimeout(() => {
        setFormStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anas13dec2000@gmail.com',
      href: 'mailto:anas13dec2000@gmail.com',
      gradient: 'from-cyan-400 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-600/10',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      shadowColor: 'hover:shadow-cyan-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anas13dec',
      href: 'https://linkedin.in/anas13dec',
      gradient: 'from-blue-400 to-purple-600',
      bgGradient: 'from-blue-500/10 to-purple-600/10',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
      shadowColor: 'hover:shadow-blue-500/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 73552 35473',
      href: 'tel:+917355235473',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-600/10',
      borderColor: 'border-purple-500/30 hover:border-purple-400/60',
      shadowColor: 'hover:shadow-purple-500/20'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Bahraich, Uttar Preadesh, India',
      href: 'https://www.google.com/maps/place/Bahraich,+Uttar+Pradesh/@27.5743832,81.5243857,13z/data=!3m1!4b1!4m6!3m5!1s0x3999a957005f1d65:0x5df751d83e3a7717!8m2!3d27.5705152!4d81.5976672!16zL20vMDUweGgw?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30 hover:border-green-400/60',
      shadowColor: 'hover:shadow-green-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
  
        {/* Nebula Clouds */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20" ref={nebula1Ref} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20" ref={nebula2Ref} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-15" ref={nebula3Ref} />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12" ref={headerRef}>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                LET'S CONNECT
              </span>
            </h2>
            <p className="text-gray-300 text-lg mt-4">🚀 Ready to launch your next project into orbit? Let's talk.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={cardsRef}>
            {/* Contact Form */}
            <div className="relative bg-gradient-to-br from-purple-900/20 via-black/40 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {statusMessage && (
                  <div className={`p-4 rounded-lg ${
                    formStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}>
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-purple-900/20 via-black/40 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8">
                  ✨ I'm open to collaboration, freelance work, and full-time opportunities. 
                  Reach out via any channel below and I'll get back to you at lightspeed.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 p-4 bg-gradient-to-br ${contact.bgGradient} rounded-xl border ${contact.borderColor} hover:shadow-lg ${contact.shadowColor} transition-all duration-300`}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-cyan-300 text-sm font-semibold">{contact.label}</p>
                          <p className="text-white text-sm md:text-base truncate">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-cyan-500/20">
                  <a
                    href="https://drive.google.com/file/d/1GdRujxM7-Vo7w2rdwKtQ9eWllV_NQDaB/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-lg text-white hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}