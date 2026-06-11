import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
  metrics?: string;
}

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Expand first item by default

  const experiences: Experience[] = [
    {
      role: 'Senior Software Engineer | React Native Developer',
      company: 'Metaloga Private Limited (Reinvision Labs Pvt Ltd)',
      location: 'Hyderabad, India',
      period: 'Mar 2024 – Present',
      bullets: [
        'Develop and maintain production React Native applications with robust REST API integrations and state management.',
        'Architect responsive mobile screens using Redux Toolkit, React Hooks, and clean architectural principles.',
        'Optimize application performance, render speeds, and startup latency for Android releases.',
        'Integrate Firebase push notifications and manage Android Play Store deployments (Keystore signing, AAB/APK generation).'
      ],
      tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Firebase', 'Play Store Publishing', 'Performance Optimization'],
      metrics: 'Active Android and Enterprise releases'
    },
    {
      role: 'Senior Mobile Application Developer | React Native Developer',
      company: 'Reinvision Labs Pvt Ltd',
      location: 'Hyderabad, India',
      period: 'Feb 2021 – Feb 2024',
      bullets: [
        'Led the development of production-grade React Native apps, delivering highly responsive user experiences on Android and iOS.',
        'Designed and integrated RESTful APIs, real-time data sync modules, and client-facing analytics dashboards.',
        'Reduced manual database and system maintenance efforts by 60% by automating updates and improving scalability.',
        'Collaborated with designers, backend engineers, and product managers to refine features from concept to production.'
      ],
      tags: ['React Native', 'JavaScript', 'REST APIs', 'Redux', 'Real-time Sync', 'Fastlane Automation', 'CI/CD'],
      metrics: 'Reduced system maintenance by 60%'
    },
    {
      role: 'Senior Member of Technical Staff | Mobile Developer',
      company: 'Kiksar Technologies Pvt Ltd',
      location: 'Bangalore, India',
      period: 'Dec 2018 – Dec 2020',
      bullets: [
        'Developed innovative augmented reality (AR) fashion try-on and beauty applications using ARCore and ARFoundation.',
        'Created real-time AR facial tracking systems with 95% accuracy for virtual makeup, goggles, and jewelry simulation.',
        'Implemented custom image processing filters using XZIMG for real-time accessory fitting.'
      ],
      tags: ['ARCore', 'ARFoundation', 'XZIMG', 'Unity3D', 'C#', 'Android Studio', 'Image Processing'],
      metrics: '95% Face Tracking Accuracy'
    },
    {
      role: 'Mobile Application Developer',
      company: 'Pixel Games Studio',
      location: 'Hyderabad, India',
      period: 'Aug 2017 – Dec 2018',
      bullets: [
        'Built and optimized mobile applications for Android platforms with focus on performance and engagement.',
        'Designed scalable code architecture based on MVC and SOLID principles, streamlining code readability.',
        'Integrated AdMob monetization (Banner, Interstitial, Rewarded Ads) and analytics SDKs to track user retention.'
      ],
      tags: ['Android App Development', 'Unity3D', 'C#', 'SOLID', 'MVC', 'AdMob Integration', 'Game UI'],
      metrics: 'AdMob Integration & Monetization'
    },
    {
      role: 'Mobile Application Developer',
      company: 'Capital Numbers Infotech Pvt. Ltd',
      location: 'Chennai, India',
      period: 'Jan 2017 – Jul 2017',
      bullets: [
        'Created simulation and educational apps for healthcare training (spine health, backpain routines, anatomical models).',
        'Improved training efficiency by 40% for medical professionals using highly visual and interactive step-by-step app modules.',
        'Ensured code quality and layout responsiveness across multiple Android tablet device resolutions.'
      ],
      tags: ['Unity3D', 'C#', 'Healthcare Training Simulation', 'UI Optimization', 'Asset Bundles'],
      metrics: 'Improved learning efficiency by 40%'
    },
    {
      role: 'Software Engineer',
      company: 'The Red & Black',
      location: 'Visakhapatnam, India',
      period: 'Sep 2014 – Jan 2017',
      bullets: [
        'Developed interactive mobile applications and real-time user experiences using C# and Unity.',
        'Implemented UI layouts, asset pipelines, and audio engine components for multimedia applications.',
        'Wrote clean, documented code and participated in team peer code reviews.'
      ],
      tags: ['Unity3D', 'C#', 'Mobile UI', 'Asset Pipelines', 'Git version control'],
      metrics: 'Core C# and Unity architecture'
    }
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="experience" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Work <span className="text-gradient-purple">Experience</span></h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            A chronology of my professional experience in mobile application architecture, AR systems development, and cross-platform programming.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedIndex === index;

            return (
              <div 
                key={index} 
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
              >
                <div 
                  className="glass-card" 
                  style={{ 
                    padding: '24px', 
                    borderRadius: '16px',
                    border: isExpanded ? '1px solid rgba(0, 216, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
                    backgroundColor: isExpanded ? 'rgba(13, 17, 33, 0.9)' : 'var(--bg-card)',
                    cursor: 'pointer',
                    boxShadow: isExpanded ? '0 10px 30px rgba(0, 216, 255, 0.08)' : 'none'
                  }}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Timeline Card Header */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', lineHeight: '1.3' }}>
                        {exp.role}
                      </h3>
                      <button style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignSelf: 'flex-start', padding: '2px' }}>
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    <div style={{ fontSize: '14px', color: '#00d8ff', fontWeight: '600' }}>
                      {exp.company}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {exp.period}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {exp.location}</span>
                    </div>

                    {/* Metric pill */}
                    {exp.metrics && (
                      <div style={{ 
                        alignSelf: 'flex-start',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.15)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        marginTop: '4px'
                      }}>
                        {exp.metrics}
                      </div>
                    )}
                  </div>

                  {/* Expanded Bullet Points */}
                  {isExpanded && (
                    <div style={{ 
                      marginTop: '20px', 
                      paddingTop: '16px', 
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      textAlign: 'left',
                      animation: 'fadeIn 0.3s ease-out forwards'
                    }}>
                      <ul style={{ paddingLeft: '16px', color: '#cbd5e1', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ lineHeight: '1.5' }}>{bullet}</li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {exp.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            style={{ 
                              fontSize: '11px', 
                              backgroundColor: 'rgba(255,255,255,0.03)', 
                              border: '1px solid rgba(255,255,255,0.06)',
                              color: '#94a3b8',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontWeight: '500'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
