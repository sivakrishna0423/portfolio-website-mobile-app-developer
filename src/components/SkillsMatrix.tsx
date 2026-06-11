import { useState, type ReactNode } from 'react';
import { 
  Smartphone, Shield, Layout, Wrench, Sparkles, Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories: SkillCategory[] = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={18} />,
      skills: [
        { name: 'React Native', level: 'Expert', iconName: 'rn' },
        { name: 'TypeScript', level: 'Expert', iconName: 'ts' },
        { name: 'JavaScript (ES6+)', level: 'Expert', iconName: 'js' },
        { name: 'Expo & Expo Router', level: 'Expert', iconName: 'expo' },
        { name: 'React Navigation', level: 'Expert', iconName: 'nav' },
        { name: 'REST APIs & Axios', level: 'Expert', iconName: 'api' },
        { name: 'AsyncStorage', level: 'Expert', iconName: 'storage' },
        { name: 'Firebase Suite', level: 'Advanced', iconName: 'fb' },
        { name: 'Push Notifications', level: 'Advanced', iconName: 'notif' },
        { name: 'Android Build & Release', level: 'Expert', iconName: 'android' },
        { name: 'Keystore & Signing', level: 'Expert', iconName: 'key' }
      ]
    },
    {
      id: 'architecture',
      title: 'State & Architecture',
      icon: <Layout size={18} />,
      skills: [
        { name: 'Redux & Redux Toolkit', level: 'Expert', iconName: 'redux' },
        { name: 'React Hooks & Context', level: 'Expert', iconName: 'hooks' },
        { name: 'Clean Architecture', level: 'Expert', iconName: 'clean' },
        { name: 'SOLID Principles', level: 'Expert', iconName: 'solid' },
        { name: 'MVC Pattern', level: 'Expert', iconName: 'mvc' }
      ]
    },
    {
      id: 'publishing',
      title: 'Publishing & DevOps',
      icon: <Shield size={18} />,
      skills: [
        { name: 'Google Play Publishing', level: 'Expert', iconName: 'play' },
        { name: 'Fastlane Automation', level: 'Advanced', iconName: 'fastlane' },
        { name: 'CI/CD for Mobile Releases', level: 'Advanced', iconName: 'cicd' },
        { name: 'AdMob Integration', level: 'Expert', iconName: 'admob' },
        { name: 'In-App Purchases', level: 'Advanced', iconName: 'iap' },
        { name: 'Subscription Systems', level: 'Advanced', iconName: 'sub' }
      ]
    },
    {
      id: 'xr',
      title: 'XR & 3D Development',
      icon: <Sparkles size={18} />,
      skills: [
        { name: 'Unity3D', level: 'Advanced', iconName: 'unity' },
        { name: 'C# Programming', level: 'Advanced', iconName: 'csharp' },
        { name: 'XR Interaction Toolkit', level: 'Advanced', iconName: 'xr' },
        { name: 'OpenXR & MRTK', level: 'Advanced', iconName: 'openxr' },
        { name: 'ARFoundation / ARKit / ARCore', level: 'Advanced', iconName: 'ar' },
        { name: 'Vuforia Engine', level: 'Advanced', iconName: 'vuforia' },
        { name: 'Meta Quest 2/3 & HoloLens 2', level: 'Advanced', iconName: 'headset' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Integrations',
      icon: <Wrench size={18} />,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', iconName: 'git' },
        { name: 'Android Studio', level: 'Expert', iconName: 'studio' },
        { name: 'VS Code', level: 'Expert', iconName: 'vscode' },
        { name: 'AI Service Integration', level: 'Advanced', iconName: 'ai' },
        { name: 'Third-Party SDKs', level: 'Expert', iconName: 'sdk' }
      ]
    }
  ];

  // Helper to color levels
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return { text: '#00d8ff', bg: 'rgba(0, 216, 255, 0.08)', border: 'rgba(0, 216, 255, 0.2)' };
      case 'Advanced': return { text: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.2)' };
      default: return { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.2)' };
    }
  };

  const allSkills = categories.flatMap(c => c.skills.map(s => ({ ...s, categoryId: c.id })));
  const displayedSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.categoryId === activeTab);

  return (
    <section id="skills" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)', backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Technical <span className="text-gradient-react">Skills Matrix</span></h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive mapping of my engineering expertise gathered over 9+ years of professional development across mobile, desktop, and XR hardware.
          </p>
        </div>

        {/* Filters Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '32px'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              border: activeTab === 'all' ? '1px solid rgba(0, 216, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: activeTab === 'all' ? 'rgba(0, 216, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
              color: activeTab === 'all' ? '#00d8ff' : '#94a3b8',
              transition: 'all 0.2s ease'
            }}
          >
            <Cpu size={16} /> All Technologies
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: activeTab === cat.id ? '1px solid rgba(0, 216, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
                backgroundColor: activeTab === cat.id ? 'rgba(0, 216, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                color: activeTab === cat.id ? '#00d8ff' : '#94a3b8',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
          minHeight: '200px'
        }}>
          {displayedSkills.map((skill, index) => {
            const levelStyle = getLevelColor(skill.level);
            return (
              <div 
                key={`${skill.name}-${index}`}
                className="glass-card"
                style={{ 
                  padding: '20px', 
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  animation: 'fadeIn 0.3s ease-out forwards',
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: '#f1f5f9' }}>{skill.name}</span>
                  <span style={{ 
                    fontSize: '10px', 
                    color: levelStyle.text, 
                    backgroundColor: levelStyle.bg,
                    border: `1px solid ${levelStyle.border}`,
                    borderRadius: '4px',
                    padding: '2px 6px',
                    alignSelf: 'flex-start',
                    fontWeight: '700',
                    letterSpacing: '0.03em'
                  }}>
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
