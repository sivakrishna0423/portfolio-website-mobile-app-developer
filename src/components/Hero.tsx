import { ArrowRight, MapPin, Mail, Phone, FileText } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" style={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 70px)', padding: '60px 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              gap: '8px',
              backgroundColor: 'rgba(0, 216, 255, 0.08)',
              border: '1px solid rgba(0, 216, 255, 0.2)',
              borderRadius: '30px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#00d8ff'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981'
              }} className="pulse" />
              Available for Senior Mobile Roles & Contracts
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'calc(2.5rem + 1vw)', lineHeight: '1.15', textAlign: 'left', margin: 0 }}>
              Building High-Performance <br/>
              <span className="text-gradient-multi">React Native Applications</span>
            </h1>

            {/* Subtitle */}
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#94a3b8', textAlign: 'left' }}>
              Senior Mobile Application Developer & XR Engineer
            </h3>

            {/* Short Bio */}
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '580px', textAlign: 'left' }}>
              Over <strong>9+ years of experience</strong> architecting mobile and spatial computing apps. 
              Specializing in React Native, cross-platform performance optimization, Play Store deployment pipelines, and custom AR/VR integrations.
            </p>

            {/* Contact Quick Links */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '14px',
              color: '#94a3b8',
              marginTop: '8px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} color="#00d8ff" /> Hyderabad, India</span>
              <a href="mailto:siva0423@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} className="hero-link"><Mail size={16} color="#00d8ff" /> siva0423@gmail.com</a>
              <a href="tel:+918639277629" style={{ display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} className="hero-link"><Phone size={16} color="#00d8ff" /> +91 86392 77629</a>
            </div>

            {/* Call to Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
              <a href="#projects" className="btn-primary">
                View Interactive Projects <ArrowRight size={16} />
              </a>
              <a href="/Siva_Krishna_Karri_Resume.pdf" download="Siva_Krishna_Karri_Resume.pdf" className="btn-secondary">
                Download Resume <FileText size={16} />
              </a>
            </div>

            {/* Metrics Dashboard */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '16px',
              marginTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingTop: '24px'
            }}>
              {[
                { number: '9+', label: 'Years Experience' },
                { number: '10+', label: 'Published Apps' },
                { number: '60%', label: 'Maint. Reduction' },
                { number: '95%', label: 'AR Tracking Acc.' }
              ].map((metric, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: '#00d8ff', letterSpacing: '-0.02em' }}>{metric.number}</span>
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        .hero-link:hover {
          color: #00d8ff !important;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
