import { useState, type ReactNode } from 'react';
import { PhoneSimulator } from './PhoneSimulator';
import { ExternalLink, Sparkles, HeartPulse, BookOpen, Calculator, ShieldCheck } from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  themeColor: string;
  metrics: string;
  description: string;
  bullets: string[];
  tech: string[];
  playStoreUrl?: string;
  icon: ReactNode;
}

export const ProjectsSection = () => {
  const [activeId, setActiveId] = useState('aviation');

  const projects: ProjectDetail[] = [
    {
      id: 'aviation',
      title: 'Aviation Learning & Training App',
      category: 'React Native Enterprise',
      themeColor: '#00d8ff',
      metrics: 'Serving 500+ professionals, -35% operational costs',
      description: 'A comprehensive educational platform enabling aviation crew members to access courseware, complete rigorous tests, and monitor certification pipelines offline.',
      bullets: [
        'Designed React Native offline data storage system for continuous learning in flight modes.',
        'Integrated secure REST APIs with high-speed data payload compression.',
        'Developed interactive assessments module and localized analytics tracker.'
      ],
      tech: ['React Native', 'TypeScript', 'REST APIs', 'SQLite', 'Offline Storage', 'Analytics'],
      icon: <BookOpen size={20} color="#00d8ff" />
    },
    {
      id: 'wellness',
      title: 'Relversiv Health & Wellness App',
      category: 'Healthcare Mobile App',
      themeColor: '#10b981',
      metrics: '1,000+ active users, HIPAA-compliant flows',
      description: 'A mobile clinical application targeting chronic pain management through tailored recovery exercise pathways, activity logs, and real-time therapist reviews.',
      bullets: [
        'Built custom progress rings and charting layouts with clean animation behaviors.',
        'Designed real-time background sync routines minimizing manual data loss.',
        'Programmed patient reminder triggers for exercises and medication schedules.'
      ],
      tech: ['React Native', 'Redux Toolkit', 'Context API', 'Axios', 'Local Storage', 'Push Notifications'],
      icon: <HeartPulse size={20} color="#10b981" />
    },
    {
      id: 'backpain',
      title: 'Relversiv BackPain Companion',
      category: 'Spine Health Tracker',
      themeColor: '#8b5cf6',
      metrics: 'Tailored spine routines, nutrition loggers',
      description: 'A dedicated patient companion app focusing on core back stabilization, featuring posture reminders, water intake trackers, and macro-nutrition loggers.',
      bullets: [
        'Created modular, highly responsive mobile interfaces using React Native flex layouts.',
        'Coded fluid water tracking reminders synced with background timers.',
        'Engineered an interactive diet diary with offline food database indexing.'
      ],
      tech: ['React Native', 'TypeScript', 'AsyncStorage', 'Notification Service', 'Flexbox layouts'],
      icon: <ShieldCheck size={20} color="#8b5cf6" />
    },
    {
      id: 'ar_tryon',
      title: 'AR Fashion & Beauty Try-On App',
      category: 'Spatial Computing (XR)',
      themeColor: '#ec4899',
      metrics: '95% facial tracking accuracy, real-time overlays',
      description: 'An advanced augmented reality shopping app allowing users to virtually wear sunglasses, hats, jewelry, and test beauty cosmetics instantly using face tracking.',
      bullets: [
        'Designed robust real-time face mesh overlays with 95% mapping accuracy.',
        'Integrated Unity3D modules with React Native bridges for rendering high-fidelity 3D assets.',
        'Leveraged ARCore/ARFoundation libraries to stabilize accessory positioning during fast movements.'
      ],
      tech: ['ARCore', 'ARKit', 'Unity3D', 'C#', 'React Native Bridge', 'MRTK', '3D Asset Rendering'],
      icon: <Sparkles size={20} color="#ec4899" />
    },
    {
      id: 'calculator',
      title: 'EMI SIP GST Calculator',
      category: 'Finance Utility (Published)',
      themeColor: '#06b6d4',
      metrics: 'Published to Google Play, AdMob integrated',
      description: 'A comprehensive finance utility app featuring detailed SIP, EMI, GST, FD, RD, and Reverse SIP calculators. Features live gold rates and real-time financial news integrations.',
      bullets: [
        'Independently launched the application on the Google Play Store (EMI SIP GST Calculator-India).',
        'Implemented responsive calculation modules with accurate double-precision compounding algorithms.',
        'Integrated AdMob SDK for monetization (banner and rewarded video ads) and managed releases.'
      ],
      tech: ['React Native', 'AdMob', 'Keystore Signing', 'Fastlane Release', 'compounding engines', 'Google Play API'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kushalapps.smartemisipcalculator',
      icon: <Calculator size={20} color="#06b6d4" />
    }
  ];

  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <section id="projects" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div className="glow-circle" style={{ top: '20%', right: '10%', width: '400px', height: '400px', backgroundColor: 'var(--color-react)' }} />

      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Interactive <span className="text-gradient-react">Projects</span></h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Click on a project to inspect its details and view a live simulation of its UI features inside the interactive smartphone mockup.
          </p>
        </div>

        {/* Dual Pane Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'start'
        }} className="projects-grid">
          
          {/* Left Column: Project Selector & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Horizontal Project Tabs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {projects.map((project) => {
                const isActive = project.id === activeId;
                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveId(project.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      border: isActive ? `1px solid ${project.themeColor}50` : '1px solid rgba(255,255,255,0.05)',
                      backgroundColor: isActive ? `${project.themeColor}0c` : 'rgba(255, 255, 255, 0.01)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className={`project-tab-item ${isActive ? 'active' : ''}`}
                  >
                    <div style={{
                      padding: '10px',
                      borderRadius: '12px',
                      backgroundColor: isActive ? `${project.themeColor}1a` : 'rgba(255,255,255,0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}>
                      {project.icon}
                    </div>

                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: project.themeColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {project.category}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: isActive ? '#f8fafc' : '#cbd5e1', marginTop: '2px' }}>
                        {project.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Project Details Card */}
            <div className="glass-card" style={{ 
              padding: '32px',
              border: `1px solid ${activeProject.themeColor}20`,
              backgroundColor: 'rgba(10, 13, 26, 0.8)',
              animation: 'fadeIn 0.4s ease-out forwards',
              textAlign: 'left'
            }} key={activeProject.id}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: activeProject.themeColor, textTransform: 'uppercase' }}>{activeProject.category}</span>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', marginTop: '4px' }}>{activeProject.title}</h3>
                </div>

                {activeProject.playStoreUrl && (
                  <a 
                    href={activeProject.playStoreUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary" 
                    style={{ 
                      padding: '8px 16px', 
                      fontSize: '12px', 
                      backgroundColor: '#10b981', 
                      backgroundImage: 'none', 
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' 
                    }}
                  >
                    View on Play Store <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Metrics Pill */}
              <div style={{
                display: 'inline-flex',
                fontSize: '12px',
                fontWeight: '700',
                color: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.15)',
                padding: '4px 12px',
                borderRadius: '6px',
                marginBottom: '20px'
              }}>
                ⭐ Key Result: {activeProject.metrics}
              </div>

              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                {activeProject.description}
              </p>

              {/* Achievements bullet list */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#cbd5e1', marginBottom: '10px' }}>TECHNICAL CONTRIBUTIONS:</div>
                <ul style={{ paddingLeft: '16px', fontSize: '14px', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeProject.bullets.map((b, idx) => (
                    <li key={idx} style={{ lineHeight: '1.4' }}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Project Tech Tags */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#cbd5e1', marginBottom: '10px' }}>TECH STACK:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeProject.tech.map((t) => (
                    <span 
                      key={t} 
                      style={{ 
                        fontSize: '11px', 
                        backgroundColor: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: activeProject.themeColor,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontWeight: '600'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Phone Simulator Panel */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'sticky',
            top: '100px'
          }} className="projects-phone-pane">
            <PhoneSimulator activeProjectId={activeId} projects={projects} />
          </div>

        </div>

      </div>

      <style>{`
        .project-tab-item:hover {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateX(4px);
        }
        .project-tab-item.active {
          transform: translateX(6px);
        }
        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
