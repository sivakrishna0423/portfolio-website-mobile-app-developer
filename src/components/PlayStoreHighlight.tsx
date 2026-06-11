import { Smartphone, ExternalLink, ShieldCheck, Coins, TrendingUp } from 'lucide-react';

export const PlayStoreHighlight = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.kushalapps.smartemisipcalculator";

  return (
    <section id="published-app" style={{ 
      borderTop: '1px solid rgba(255, 255, 255, 0.03)', 
      backgroundColor: 'rgba(5, 7, 15, 0.6)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        left: '-100px',
        top: '20%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="play-highlight-grid">
          
          {/* Left Side: Interactive App Preview Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ 
              maxWidth: '450px', 
              padding: '24px', 
              border: '1px solid rgba(16, 185, 129, 0.2)',
              backgroundColor: 'rgba(10, 13, 26, 0.8)',
              boxShadow: '0 20px 40px -15px rgba(16, 185, 129, 0.15)'
            }}>
              {/* App UI Header Mockup */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '12px', 
                  backgroundColor: '#0f172a',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)'
                }}>
                  {/* Custom Calculator Icon */}
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>₹%</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#f8fafc' }}>EMI SIP GST Calculator</h4>
                  <p style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Published Product</p>
                </div>
              </div>

              {/* Feature Highlights Mockup Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <ShieldCheck size={16} color="#10b981" />
                  <span>Fully Signed Production Release (AAB Bundle)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <Coins size={16} color="#10b981" />
                  <span>Google AdMob Monetization (Banner & Rewarded)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                  <TrendingUp size={16} color="#10b981" />
                  <span>Compounding SIP, GST, and FD Compiling Engine</span>
                </div>
              </div>

              {/* Simulated Screen Segment */}
              <div style={{ 
                borderRadius: '10px', 
                backgroundColor: 'rgba(0,0,0,0.4)', 
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '16px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '4px' }}>LIVE MONETIZATION METRIC</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9' }}>AdMob Active Status</span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '4px', fontWeight: 'bold' }}>ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Store CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '12px',
              fontWeight: '700',
              color: '#10b981',
              alignSelf: 'flex-start'
            }}>
              <Smartphone size={14} /> Live Production Showcase
            </div>

            <h2 style={{ fontSize: '36px', lineHeight: '1.2' }}>
              Published App:<br/>
              <span className="text-gradient-react" style={{ backgroundImage: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' }}>EMI SIP GST Calculator</span>
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>
              I independently designed, developed, tested, and published this cross-platform financial utility app on the Google Play Store. It demonstrates full lifecycle release capability—including building custom calculation packages, UI styling, AdMob advertising integrations, keystore security, and version release pipelines.
            </p>

            {/* List of Engineering Feats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '8px 0' }} className="feats-grid">
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>Release Engineering</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Fastlane automation, AAB/APK signing, build versioning.</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>Monetization</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>AdMob SDK integration (Banner, Interstitial, and Rewarded ads).</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>Calculators Suite</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>EMI, SIP, FD, RD, SWP, GST with compounding charts.</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f1f5f9', marginBottom: '4px' }}>Integrations</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Financial news and gold rates via external REST APIs.</div>
              </div>
            </div>

            {/* Google Play Store Badge Button */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px' }}>
              <a 
                href={playStoreUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                  cursor: 'pointer'
                }}
                className="play-badge"
              >
                {/* SVG Play Logo */}
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '10px' }}>
                  <path d="M3,5.277L14.77,12L3,18.723V5.277 M17.92,10.2L20,11.4C20.62,11.75,20.62,12.25,20,12.6L17.92,13.8L15.9,12.65L17.92,10.2 M14.36,11.77L4.7,6.24L15.9,12.65L14.36,11.77z" fill="#00f0ff" />
                  <path d="M3,3.023C3,2.5,3.37,2.2,3.82,2.46L19.46,11.4C20.08,11.75,20.08,12.25,19.46,12.6L3.82,21.54C3.37,21.8,3,21.5,3,20.98V3.023z" fill="none" stroke="#fff" strokeWidth="1.5" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', lineHeight: '1' }}>GET IT ON</span>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#f8fafc', lineHeight: '1.2' }}>Google Play</span>
                </div>
              </a>

              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#94a3b8', transition: 'color 0.2s' }}
                className="highlight-details-link"
              >
                Inspect Play Store App <ExternalLink size={14} />
              </a>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .play-badge:hover {
          border-color: #10b981 !important;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
        }
        .highlight-details-link:hover {
          color: #10b981 !important;
        }
        @media (min-width: 992px) {
          .play-highlight-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 576px) {
          .feats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
