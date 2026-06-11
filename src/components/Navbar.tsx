import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(5, 7, 15, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Brand Logo */}
        <a href="#about" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '20px', letterSpacing: '-0.03em' }}>
          <Smartphone size={22} color="#00d8ff" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 216, 255, 0.5))' }} />
          <span>Siva<span style={{ color: '#00d8ff' }}>.dev</span></span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a 
                key={item.href} 
                href={item.href} 
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #00d8ff, #8b5cf6)',
                    borderRadius: '2px'
                  }} />
                )}
              </a>
            );
          })}
          <a 
            href="#contact" 
            className="btn-primary" 
            style={{ 
              padding: '8px 18px', 
              fontSize: '13px', 
              borderRadius: '8px',
              boxShadow: 'none'
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
          }}
          className="mobile-nav-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          width: '100%',
          backgroundColor: '#05070f',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99
        }}>
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: isActive ? '#00d8ff' : '#94a3b8',
                  padding: '4px 0'
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="btn-primary" 
            style={{ 
              padding: '10px 0', 
              width: '100%', 
              textAlign: 'center',
              marginTop: '8px'
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Embedded CSS for responsive styles without frameworks */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
