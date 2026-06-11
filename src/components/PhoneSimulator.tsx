import { useState, useEffect } from 'react';
import { 
  Wifi, Battery, Signal, CheckCircle2, Circle, Clock, Flame, 
  Award, Play, Lock, AlertCircle, Droplets, Sparkles,
  Camera, HeartPulse, MessageSquare, TrendingUp, Newspaper
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  themeColor: string;
  metrics: string;
}

interface PhoneSimulatorProps {
  activeProjectId: string;
  projects: Project[];
}

export const PhoneSimulator = ({ activeProjectId }: PhoneSimulatorProps) => {
  const [time, setTime] = useState('09:41');
  const [painLevel, setPainLevel] = useState(3);
  const [waterAmount, setWaterAmount] = useState(1.8);
  const [selectedArItem, setSelectedArItem] = useState('Glasses');
  const [calculatorTab, setCalculatorTab] = useState<'EMI' | 'SIP' | 'GST' | 'GoldNews' | 'AIAdvisor'>('EMI');
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [activeAviationModule, setActiveAviationModule] = useState(1);
  const [advisorPrompt, setAdvisorPrompt] = useState<number | null>(null);

  // Keep phone time synced with current time
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
      const hoursStr = hours < 10 ? `0${hours}` : hours;
      setTime(`${hoursStr}:${minutesStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // UI Renderers for each simulated application
  const renderAviationApp = () => (
    <div className="phone-app-inner" style={{ color: '#f8fafc' }}>
      <div className="phone-app-header">
        <span className="phone-app-logo" style={{ color: '#00d8ff' }}>SkyLearn Pro</span>
        <span className="phone-app-badge" style={{ backgroundColor: 'rgba(0, 216, 255, 0.1)', borderColor: 'rgba(0, 216, 255, 0.3)' }}>Aviation Admin</span>
      </div>

      <div className="phone-ui-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Certification Progress</span>
          <span style={{ fontSize: '11px', color: '#00d8ff', fontWeight: 'bold' }}>74%</span>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '74%', height: '100%', backgroundColor: '#00d8ff', borderRadius: '3px' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '10px', fontSize: '10px', color: '#94a3b8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Award size={12} color="#00d8ff" /> 3 Certificates</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Clock size={12} /> 12.5 hrs</span>
        </div>
      </div>

      <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: '#cbd5e1' }}>TRAINING MODULES</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { id: 1, name: 'Aerodynamics Principles', status: 'completed', duration: '45 mins' },
          { id: 2, name: 'Cockpit Instrumentation', status: 'active', duration: '60 mins' },
          { id: 3, name: 'Emergency Deceleration', status: 'locked', duration: '30 mins' }
        ].map((m) => (
          <div 
            key={m.id} 
            className="phone-ui-card" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '10px',
              border: m.id === activeAviationModule ? '1px solid rgba(0, 216, 255, 0.4)' : '1px solid rgba(255,255,255,0.06)',
              backgroundColor: m.id === activeAviationModule ? 'rgba(0, 216, 255, 0.05)' : 'rgba(255,255,255,0.02)',
              cursor: 'pointer'
            }}
            onClick={() => m.status !== 'locked' && setActiveAviationModule(m.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {m.status === 'completed' && <CheckCircle2 size={14} color="#10b981" />}
              {m.status === 'active' && <Play size={14} color="#00d8ff" fill="#00d8ff" />}
              {m.status === 'locked' && <Lock size={14} color="#64748b" />}
              <div>
                <div style={{ fontSize: '11px', fontWeight: '500', color: m.status === 'locked' ? '#64748b' : '#f1f5f9' }}>{m.name}</div>
                <div style={{ fontSize: '9px', color: '#64748b' }}>{m.duration}</div>
              </div>
            </div>
            {m.status === 'active' && <span style={{ fontSize: '8px', padding: '2px 4px', backgroundColor: '#00d8ff', color: '#090c15', borderRadius: '3px', fontWeight: 'bold' }}>LIVE</span>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderHealthApp = () => (
    <div className="phone-app-inner" style={{ color: '#f8fafc' }}>
      <div className="phone-app-header">
        <span className="phone-app-logo" style={{ color: '#10b981' }}><HeartPulse size={14} style={{ marginRight: '4px', display: 'inline' }} />Relversiv</span>
        <span className="phone-app-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>Active Care</span>
      </div>

      <div className="phone-ui-card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
          {/* Circular progress SVG */}
          <svg style={{ transform: 'rotate(-90deg)', width: '50px', height: '50px' }}>
            <circle cx="25" cy="25" r="20" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="transparent" />
            <circle cx="25" cy="25" r="20" stroke="#10b981" strokeWidth="4" fill="transparent" strokeDasharray="125" strokeDashoffset="25" />
          </svg>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', fontWeight: 'bold' }}>80%</span>
        </div>
        <div>
          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Today's Exercise Goal</div>
          <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#10b981' }}>24 / 30 Mins Done</div>
        </div>
      </div>

      <div className="phone-ui-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
          <span>Pain Rating Today</span>
          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{painLevel}/10 (Mild)</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={painLevel} 
          onChange={(e) => setPainLevel(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#10b981', background: 'rgba(255,255,255,0.1)', height: '4px', borderRadius: '2px', outline: 'none' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b', marginTop: '4px' }}>
          <span>1 - Low</span>
          <span>10 - Severe</span>
        </div>
      </div>

      <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '8px', color: '#cbd5e1' }}>TODAY'S SCHEDULE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { name: 'Spine Stretch Routine', time: '08:00 AM', done: true },
          { name: 'Lumbar Stabilization', time: '02:00 PM', done: true },
          { name: 'Evening Walk & Posture Check', time: '07:30 PM', done: false }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', gap: '8px', fontSize: '10px', padding: '6px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
            {item.done ? <CheckCircle2 size={12} color="#10b981" /> : <Circle size={12} color="#64748b" />}
            <div style={{ flex: 1, textDecoration: item.done ? 'line-through' : 'none', color: item.done ? '#64748b' : '#f1f5f9' }}>{item.name}</div>
            <div style={{ color: '#64748b', fontSize: '8px' }}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBackPainApp = () => (
    <div className="phone-app-inner" style={{ color: '#f8fafc' }}>
      <div className="phone-app-header">
        <span className="phone-app-logo" style={{ color: '#8b5cf6' }}>SpineComp</span>
        <span className="phone-app-badge" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>Companion</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
        <div className="phone-ui-card" style={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Droplets size={16} color="#3b82f6" style={{ marginBottom: '4px' }} />
          <span style={{ fontSize: '9px', color: '#94a3b8' }}>Hydration</span>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{waterAmount.toFixed(1)} L / 2.5L</span>
          <button 
            onClick={() => setWaterAmount(prev => Math.min(2.5, prev + 0.25))}
            style={{ marginTop: '6px', fontSize: '9px', padding: '2px 8px', border: 'none', borderRadius: '4px', backgroundColor: '#3b82f6', color: '#fff', cursor: 'pointer', fontWeight: '600' }}
          >
            +250ml
          </button>
        </div>
        <div className="phone-ui-card" style={{ padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Flame size={16} color="#ef4444" style={{ marginBottom: '4px' }} />
          <span style={{ fontSize: '9px', color: '#94a3b8' }}>Energy Log</span>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>1,420 kcal</span>
          <span style={{ fontSize: '8px', color: '#10b981', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}><CheckCircle2 size={8} /> Target Met</span>
        </div>
      </div>

      <div className="phone-ui-card" style={{ padding: '10px' }}>
        <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '4px' }}>DAILY POSTURE RATING</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#8b5cf6' }}>92/100</span>
          <span style={{ fontSize: '8px', padding: '1px 4px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '3px' }}>Excellent</span>
        </div>
        <div style={{ fontSize: '8px', color: '#64748b', marginTop: '4px' }}>Based on smart posture alerts & activity logs</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px' }}>
        <div style={{ padding: '8px', borderRadius: '6px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={12} color="#8b5cf6" />
          <span style={{ flex: 1 }}>Time to stretch! You've been sitting for 45m.</span>
        </div>
      </div>
    </div>
  );

  const renderArApp = () => (
    <div className="phone-app-inner" style={{ color: '#f8fafc', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="phone-app-header" style={{ marginBottom: '4px' }}>
        <span className="phone-app-logo" style={{ color: '#ec4899' }}><Camera size={14} style={{ marginRight: '4px', display: 'inline' }} />MirrorAR</span>
        <span className="phone-app-badge" style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)', borderColor: 'rgba(236, 72, 153, 0.3)' }}>95% Match</span>
      </div>

      {/* Simulated Camera Viewfinder */}
      <div style={{ 
        flex: 1, 
        position: 'relative', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        backgroundColor: '#1e1b4b',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* AR Tracking Overlay Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Facial Mesh Lines */}
          <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.4 }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 30 30 L 70 30 M 30 70 L 70 70 M 30 30 L 50 15 L 70 30 L 80 50 L 70 70 L 50 85 L 30 70 L 20 50 Z" stroke="#ec4899" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
            
            {/* Mesh Points */}
            <circle cx="50" cy="15" r="1.5" fill="#10b981" />
            <circle cx="30" cy="30" r="1.5" fill="#10b981" />
            <circle cx="70" cy="30" r="1.5" fill="#10b981" />
            <circle cx="20" cy="50" r="1.5" fill="#10b981" />
            <circle cx="80" cy="50" r="1.5" fill="#10b981" />
            <circle cx="50" cy="45" r="1.5" fill="#ec4899" /> {/* Nose point */}
            <circle cx="40" cy="65" r="1.5" fill="#10b981" /> {/* Lips */}
            <circle cx="60" cy="65" r="1.5" fill="#10b981" />
            <circle cx="50" cy="68" r="1.5" fill="#10b981" />
          </svg>
        </div>

        {/* Dynamic AR Item Rendering on Mock Profile */}
        <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Avatar Face Mock */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" fill="#312e81" stroke="#4338ca" strokeWidth="2" />
            <circle cx="30" cy="35" r="4" fill="#818cf8" />
            <circle cx="50" cy="35" r="4" fill="#818cf8" />
            <path d="M 32 52 Q 40 58 48 52" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>

          {/* AR Overlay Layer */}
          {selectedArItem === 'Glasses' && (
            <svg style={{ position: 'absolute', top: '27px', left: '16px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} width="48" height="18" viewBox="0 0 48 18">
              {/* Aviator Sunglasses */}
              <path d="M 2 4 Q 8 2 12 4 L 14 6 L 16 6 L 18 4 Q 22 2 28 4" stroke="#ec4899" strokeWidth="1.5" fill="none" />
              <rect x="3" y="5" width="17" height="11" rx="4" fill="rgba(236, 72, 153, 0.4)" stroke="#ec4899" strokeWidth="1" />
              <rect x="28" y="5" width="17" height="11" rx="4" fill="rgba(236, 72, 153, 0.4)" stroke="#ec4899" strokeWidth="1" />
              <line x1="20" y1="7" x2="28" y2="7" stroke="#ec4899" strokeWidth="2" />
            </svg>
          )}
          
          {selectedArItem === 'Hats' && (
            <svg style={{ position: 'absolute', top: '-10px', left: '10px' }} width="60" height="30" viewBox="0 0 60 30">
              {/* Fedora Hat */}
              <ellipse cx="30" cy="22" rx="28" ry="4" fill="#db2777" />
              <path d="M 14 20 C 14 8, 46 8, 46 20 Z" fill="#9d174d" />
              <rect x="15" y="16" width="30" height="4" fill="#f472b6" />
            </svg>
          )}

          {selectedArItem === 'Lipstick' && (
            <svg style={{ position: 'absolute', top: '48px', left: '30px' }} width="20" height="10" viewBox="0 0 20 10">
              {/* Glossy Lips */}
              <path d="M 2 5 Q 10 2 18 5 Q 10 9 2 5 Z" fill="#f43f5e" />
              <line x1="2" y1="5" x2="18" y2="5" stroke="#be123c" strokeWidth="0.5" />
            </svg>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '8px', color: '#10b981', backgroundColor: 'rgba(0,0,0,0.6)', padding: '2px 6px', borderRadius: '4px' }}>
          <Sparkles size={8} /> Active Face Mesh (ARCore)
        </div>
      </div>

      {/* AR Product Selector */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', marginTop: '6px', fontSize: '9px' }}>
        {['Glasses', 'Hats', 'Lipstick'].map((item) => (
          <button 
            key={item}
            onClick={() => setSelectedArItem(item)}
            style={{ 
              padding: '6px', 
              border: selectedArItem === item ? '1px solid #ec4899' : '1px solid rgba(255,255,255,0.06)', 
              borderRadius: '6px', 
              backgroundColor: selectedArItem === item ? 'rgba(236, 72, 153, 0.1)' : 'transparent',
              color: selectedArItem === item ? '#ec4899' : '#94a3b8',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  const renderCalculatorApp = () => {
    const interest = 8.5;
    const tenure = 20;
    const n = tenure * 12;
    const r = interest / (12 * 100);
    const emi = Math.round((loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalAmount = emi * n;
    const totalInterest = totalAmount - loanAmount;
    
    // Formatting currency
    const formatRupee = (num: number) => {
      return '₹ ' + num.toLocaleString('en-IN');
    };

    return (
      <div className="phone-app-inner" style={{ color: '#f8fafc', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="phone-app-header" style={{ marginBottom: '4px' }}>
          <span className="phone-app-logo" style={{ color: '#06b6d4' }}>FinCalc India</span>
          <span className="phone-app-badge" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)' }}>Play Store API</span>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '2px', marginBottom: '8px', gap: '2px' }}>
          {[
            { id: 'EMI', label: 'EMI' },
            { id: 'SIP', label: 'SIP' },
            { id: 'GoldNews', label: 'Gold/News' },
            { id: 'AIAdvisor', label: 'AI Advisor' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCalculatorTab(tab.id as any)}
              style={{
                flex: 1,
                padding: '5px 0',
                border: 'none',
                borderRadius: '4px',
                fontSize: '8px',
                fontWeight: '700',
                backgroundColor: calculatorTab === tab.id ? '#06b6d4' : 'transparent',
                color: calculatorTab === tab.id ? '#090c15' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {calculatorTab === 'EMI' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="phone-ui-card" style={{ padding: '8px', marginBottom: '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', marginBottom: '2px' }}>
                <span>Loan Amount</span>
                <span>{formatRupee(loanAmount)}</span>
              </div>
              <input 
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#06b6d4', height: '3px', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#64748b' }}>
                <span>5 L</span>
                <span>1 Cr</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div className="phone-ui-card" style={{ padding: '6px', margin: 0 }}>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Interest Rate</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{interest}% p.a.</div>
              </div>
              <div className="phone-ui-card" style={{ padding: '6px', margin: 0 }}>
                <div style={{ fontSize: '8px', color: '#94a3b8' }}>Tenure</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{tenure} Yrs</div>
              </div>
            </div>

            <div className="phone-ui-card" style={{ padding: '8px', backgroundColor: 'rgba(6, 182, 212, 0.05)', borderColor: 'rgba(6, 182, 212, 0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>MONTHLY PAYMENT (EMI)</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: '#06b6d4', margin: '2px 0' }}>{formatRupee(emi)}</div>
              <div style={{ fontSize: '8px', color: '#64748b', display: 'flex', gap: '6px' }}>
                <span>Principal: 52%</span>
                <span>Interest: 48%</span>
              </div>
            </div>

            <div style={{ fontSize: '8px', color: '#64748b', display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
              <span>Total Interest: {formatRupee(totalInterest)}</span>
              <span>Total Amount: {formatRupee(totalAmount)}</span>
            </div>
          </div>
        )}

        {calculatorTab === 'SIP' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="phone-ui-card" style={{ padding: '10px' }}>
              <div style={{ fontSize: '10px', color: '#94a3b8' }}>Monthly Investment</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#06b6d4', margin: '2px 0' }}>₹ 10,000</div>
              <div style={{ fontSize: '9px', color: '#64748b' }}>Expected Return: 12% p.a.</div>
            </div>
            
            <div className="phone-ui-card" style={{ padding: '10px', backgroundColor: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.15)' }}>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>ESTIMATED RETURNS (10 Years)</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#10b981', margin: '2px 0' }}>₹ 23,23,391</div>
              <div style={{ fontSize: '8px', color: '#64748b' }}>Invested: ₹ 12,00,000 | Profit: ₹ 11,23,391</div>
            </div>
          </div>
        )}

        {calculatorTab === 'GST' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="phone-ui-card" style={{ padding: '10px' }}>
              <div style={{ fontSize: '10px', color: '#94a3b8' }}>Base Amount</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#06b6d4', margin: '2px 0' }}>₹ 25,000</div>
              <div style={{ fontSize: '9px', color: '#64748b' }}>GST Rate Selected: 18%</div>
            </div>
            
            <div className="phone-ui-card" style={{ padding: '10px', backgroundColor: 'rgba(6, 182, 212, 0.05)', borderColor: 'rgba(6, 182, 212, 0.15)' }}>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>TOTAL BILLING AMOUNT</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#06b6d4', margin: '2px 0' }}>₹ 29,500</div>
              <div style={{ fontSize: '8px', color: '#64748b' }}>CGST (9%): ₹ 2,250 | SGST (9%): ₹ 2,250</div>
            </div>
          </div>
        )}

        {calculatorTab === 'GoldNews' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', animation: 'fadeIn 0.3s' }}>
            {/* Live Gold Rates */}
            <div className="phone-ui-card" style={{ padding: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#10b981', fontWeight: 'bold', marginBottom: '6px' }}>
                <TrendingUp size={12} /> Live Gold Rates (MCX India)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '8px', color: '#64748b' }}>24K Gold (10g)</div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#f59e0b' }}>₹ 72,450</div>
                  <div style={{ fontSize: '7px', color: '#10b981' }}>▲ +0.85%</div>
                </div>
                <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '8px', color: '#64748b' }}>22K Gold (10g)</div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#cbd5e1' }}>₹ 66,410</div>
                  <div style={{ fontSize: '7px', color: '#10b981' }}>▲ +0.78%</div>
                </div>
              </div>
            </div>

            {/* Financial News */}
            <div className="phone-ui-card" style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '4px' }}>
                <Newspaper size={12} /> Top Financial News
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { title: "RBI Repo Rate holds at 6.50%; home loan EMIs steady.", time: "2h ago" },
                  { title: "Gold prices hit lifetime highs on festival demand.", time: "5h ago" },
                  { title: "SIP flows hit historic ₹20k Crore mark in India.", time: "1d ago" }
                ].map((item, idx) => (
                  <div key={idx} style={{ paddingBottom: '4px', borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div style={{ fontSize: '9px', fontWeight: '500', color: '#e2e8f0', lineHeight: '1.2' }}>{item.title}</div>
                    <div style={{ fontSize: '7px', color: '#64748b' }}>{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {calculatorTab === 'AIAdvisor' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', animation: 'fadeIn 0.3s' }}>
            <div className="phone-ui-card" style={{ padding: '8px', backgroundColor: 'rgba(6, 182, 212, 0.03)', borderColor: 'rgba(6, 182, 212, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#06b6d4', fontWeight: 'bold', marginBottom: '4px' }}>
                <Sparkles size={12} /> Smart AI Loan Advisor
              </div>
              <span style={{ fontSize: '8px', color: '#94a3b8' }}>Get instant compounding tips based on compounding algorithms.</span>
            </div>

            {/* Chat Box */}
            <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '6px', display: 'flex', flexDirection: 'column', gap: '6px', minHeight: '90px' }}>
              {advisorPrompt === null ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '8px', margin: 'auto', textAlign: 'center' }}>
                  <MessageSquare size={10} /> Select a query below to ask AI Advisor...
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', animation: 'fadeIn 0.2s' }}>
                  {/* User query bubble */}
                  <div style={{ alignSelf: 'flex-end', backgroundColor: 'rgba(6, 182, 212, 0.2)', border: '1px solid rgba(6, 182, 212, 0.3)', color: '#f8fafc', padding: '4px 8px', borderRadius: '8px 8px 0 8px', fontSize: '8px', maxWidth: '85%' }}>
                    {advisorPrompt === 1 ? "How to save home loan interest?" : "Is SIP better than Fixed Deposit?"}
                  </div>
                  {/* AI Response bubble */}
                  <div style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#cbd5e1', padding: '4px 8px', borderRadius: '8px 8px 8px 0', fontSize: '8px', maxWidth: '95%', lineHeight: '1.3' }}>
                    {advisorPrompt === 1 ? (
                      <span>
                        🔥 <strong>Interest Save:</strong> Prepaying just <strong>1 extra EMI</strong> annually on a ₹50L loan at 8.5% saves up to <strong>₹8.2 Lakhs</strong> interest & cuts tenure by <strong>3.5 years</strong>!
                      </span>
                    ) : (
                      <span>
                        📈 <strong>Compounding:</strong> Equity SIPs return <strong>12-14% CAGR</strong> over 5+ yrs, beating inflation, whereas FDs yield a fixed <strong>6.5-7.5%</strong> which loses value to taxes.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Prompt Selector */}
            <div style={{ display: 'flex', gap: '4px' }}>
              <button 
                onClick={() => setAdvisorPrompt(1)}
                style={{ flex: 1, padding: '5px', fontSize: '8px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', backgroundColor: advisorPrompt === 1 ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: advisorPrompt === 1 ? '#06b6d4' : '#94a3b8', cursor: 'pointer' }}
              >
                Save Loan Interest?
              </button>
              <button 
                onClick={() => setAdvisorPrompt(2)}
                style={{ flex: 1, padding: '5px', fontSize: '8px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', backgroundColor: advisorPrompt === 2 ? 'rgba(6, 182, 212, 0.1)' : 'transparent', color: advisorPrompt === 2 ? '#06b6d4' : '#94a3b8', cursor: 'pointer' }}
              >
                SIP vs FD analysis?
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderActiveApp = () => {
    switch (activeProjectId) {
      case 'aviation':
        return renderAviationApp();
      case 'wellness':
        return renderHealthApp();
      case 'backpain':
        return renderBackPainApp();
      case 'ar_tryon':
        return renderArApp();
      case 'calculator':
        return renderCalculatorApp();
      default:
        return renderAviationApp();
    }
  };

  return (
    <div className="phone-simulator-wrapper animate-float">
      {/* Background radial glow */}
      <div 
        style={{ 
          position: 'absolute', 
          width: '350px', 
          height: '350px', 
          left: '-15px', 
          top: '100px', 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          zIndex: 0,
          opacity: 0.15,
          pointerEvents: 'none',
          background: activeProjectId === 'aviation' ? '#00d8ff' : 
                      activeProjectId === 'wellness' ? '#10b981' :
                      activeProjectId === 'backpain' ? '#8b5cf6' :
                      activeProjectId === 'ar_tryon' ? '#ec4899' : '#06b6d4',
          transition: 'background 0.5s ease'
        }}
      />

      <div className="phone-outer-frame">
        {/* Notch / Speaker */}
        <div className="phone-speaker-camera">
          <div className="phone-camera-lens"></div>
          <div className="phone-speaker-grill"></div>
        </div>

        {/* Status Bar */}
        <div className="phone-status-bar">
          <span>{time}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={14} style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }} />
          </div>
        </div>

        {/* Main Screen Container */}
        <div className="phone-screen-container">
          <div className="phone-app-content">
            {renderActiveApp()}
          </div>
        </div>
      </div>
    </div>
  );
};
