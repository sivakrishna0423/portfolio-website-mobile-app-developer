import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Get the key from .env file or fallback to string edit
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "c838421d-acf7-4bf2-a796-ee8502fbb277";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Message",
          message: formData.message,
          from_name: "Siva's Portfolio Visitor"
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(result.message || "Failed to send message. Please ensure your access key is correct.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)', backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Let's <span className="text-gradient-react">Connect</span></h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Whether you want to discuss a senior React Native role, an AR/VR implementation, or just talk tech, feel free to reach out.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'stretch'
        }} className="contact-grid">
          
          {/* Left Panel: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', gap: '28px', padding: '40px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '8px', textAlign: 'left' }}>Contact Details</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', textAlign: 'left', marginBottom: '8px' }}>
                Hiring managers and recruiters can reach me directly through the details below. I am based in Hyderabad and open to hybrid, remote, and relocation opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="mailto:siva0423@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit', textAlign: 'left' }} className="contact-item">
                  <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(0, 216, 255, 0.08)', border: '1px solid rgba(0, 216, 255, 0.15)', display: 'flex' }}>
                    <Mail size={20} color="#00d8ff" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Email me at</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#f1f5f9' }}>siva0423@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+918639277629" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit', textAlign: 'left' }} className="contact-item">
                  <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.15)', display: 'flex' }}>
                    <Phone size={20} color="#8b5cf6" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Call or WhatsApp</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#f1f5f9' }}>+91 86392 77629</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                  <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.15)', display: 'flex' }}>
                    <MapPin size={20} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Location</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#f1f5f9' }}>Hyderabad, India</div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', marginTop: '8px' }}>
                <a 
                  href="/Siva_Krishna_Karri_Resume.pdf" 
                  download="Siva_Krishna_Karri_Resume.pdf"
                  className="btn-secondary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', width: '100%' }}
                >
                  Download PDF Resume <FileText size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '24px', textAlign: 'left' }}>Send a Message</h3>
            
            {isSent ? (
              <div style={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center',
                gap: '16px',
                padding: '40px 0',
                animation: 'fadeIn 0.5s ease-out forwards'
              }}>
                <CheckCircle2 size={48} color="#10b981" style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))' }} />
                <h4 style={{ fontSize: '20px', color: '#f8fafc' }}>Message Sent Successfully!</h4>
                <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '300px' }}>
                  Thank you for reaching out. Siva will reply to your email at his earliest convenience.
                </p>
                <button 
                  onClick={() => setIsSent(false)} 
                  className="btn-secondary" 
                  style={{ marginTop: '12px', padding: '8px 20px', fontSize: '13px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#f8fafc',
                        outline: 'none',
                        fontSize: '14px',
                        transition: 'border-color 0.2s'
                      }}
                      className="form-input"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#f8fafc',
                        outline: 'none',
                        fontSize: '14px',
                        transition: 'border-color 0.2s'
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Senior React Native Developer Position"
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#f8fafc',
                      outline: 'none',
                      fontSize: '14px',
                      transition: 'border-color 0.2s'
                    }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Message *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell me about your project or open position..."
                    required
                    rows={4}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#f8fafc',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    className="form-input"
                  />
                </div>

                {error && <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'left' }}>{error}</div>}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary" 
                  style={{ 
                    marginTop: '8px', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <style>{`
        .contact-item:hover .contact-item-bg {
          border-color: rgba(0, 216, 255, 0.3) !important;
        }
        .form-input:focus {
          border-color: #00d8ff !important;
          box-shadow: 0 0 0 1px rgba(0, 216, 255, 0.2);
        }
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
