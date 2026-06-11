import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { PlayStoreHighlight } from './components/PlayStoreHighlight';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Smartphone, Mail, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Interactive Projects Showcase (Includes Phone Simulator) */}
        <ProjectsSection />

        {/* Dedicated Published Play Store Highlight */}
        <PlayStoreHighlight />

        {/* Filterable Skills Grid */}
        <SkillsMatrix />

        {/* Expandable Experience Timeline */}
        <ExperienceTimeline />

        {/* Contact Form & Direct details */}
        <ContactSection />
      </main>

      {/* Premium Footer */}
      <footer style={{
        backgroundColor: '#05070f',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '40px 0 30px',
        color: '#64748b',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {/* Footer Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '18px', color: '#f8fafc' }}>
              <Smartphone size={18} color="#00d8ff" />
              <span>Siva<span style={{ color: '#00d8ff' }}>.dev</span></span>
            </div>
            
            {/* Brief Bio */}
            <p style={{ maxWidth: '500px', lineHeight: '1.5' }}>
              Senior Mobile Application Developer specializing in React Native, state management architectures, automation, and virtual try-on systems.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
              <a href="mailto:siva0423@gmail.com" style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', transition: 'all 0.2s' }} className="footer-icon" title="Email">
                <Mail size={16} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.kushalapps.smartemisipcalculator" target="_blank" rel="noreferrer" style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', transition: 'all 0.2s' }} className="footer-icon" title="Play Store App">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }} className="footer-bottom">
            <span>© {new Date().getFullYear()} Siva Krishna Karri. All rights reserved.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Built with <span style={{ color: '#00d8ff', fontWeight: 'bold' }}>React</span> & TypeScript • Deployed on Vercel
            </span>
          </div>
        </div>

        <style>{`
          .footer-icon:hover {
            background-color: rgba(0, 216, 255, 0.1) !important;
            border-color: rgba(0, 216, 255, 0.3) !important;
            color: #00d8ff !important;
            transform: translateY(-2px);
          }
          @media (max-width: 576px) {
            .footer-bottom {
              flex-direction: column !important;
              text-align: center;
            }
          }
        `}</style>
      </footer>
    </div>
  );
}

export default App;
