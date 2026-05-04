import { useState } from "react";
import './ExpatCaresPage2.css'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body, #root {
    font-family: 'Nunito', sans-serif;
    background: #e8edf5;
  }

  .phone-frame {
    max-width: 430px;
    margin: 0 auto;
    background: #fff;
    min-height: 100vh;
    box-shadow: 0 0 50px rgba(0,0,0,0.18);
    overflow: hidden;
  }

  /* ══════════════════════════════
     SECTION 1 — ABOUT / HERO
  ══════════════════════════════ */
  .about-section {
    background: #fff;
    padding: 0 0 30px;
    position: relative;
    overflow: hidden;
  }

  .about-label {
    text-align: center;
    font-size: 0.68rem;
    color: #888;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 18px 0 6px;
  }

  .about-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.6rem;
    text-align: center;
    color: #1a1a2e;
    padding: 0 20px 16px;
    line-height: 1.15;
  }

  /* Hero image with overlay badges */
  .hero-photo-wrap {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: visible;
  }

  .hero-photo-bg {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
    background: #c8d8e8;
    overflow: hidden;
    position: relative;
  }

  /* Stats badges top-left */
  .stat-badges {
    position: absolute;
    top: 12px;
    left: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    z-index: 10;
  }

  .stat-badge {
    background: #1a3a8f;
    color: #fff;
    font-size: 0.62rem;
    font-weight: 800;
    padding: 5px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 3px 10px rgba(26,58,143,0.35);
  }

  .stat-badge .stat-num {
    font-size: 0.72rem;
    font-weight: 900;
    color: #7eb8ff;
  }

  /* Clients badge top-right */
  .clients-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 10;
    background: #e8f4fd;
    border-radius: 14px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.12);
    min-width: 64px;
  }

  .clients-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #1a6fb5, #0d4a8f);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clients-label {
    font-size: 0.6rem;
    font-weight: 800;
    color: #1a3a8f;
    white-space: nowrap;
  }

  /* bottom text overlay */
  .hero-bottom-text {
    background: linear-gradient(to top, rgba(255,255,255,1) 60%, transparent);
    position: absolute;
    bottom: -30px;
    left: 0; right: 0;
    padding: 40px 20px 8px;
    text-align: center;
  }

  .hero-verified-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.45rem;
    color: #1a6fb5;
    line-height: 1.2;
  }

  .hero-verified-sub {
    font-size: 0.7rem;
    color: #666;
    margin: 5px 0 14px;
    line-height: 1.5;
  }

  .btn-learn {
    display: inline-block;
    background: #1a6fb5;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 9px 28px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(26,111,181,0.38);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-learn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26,111,181,0.48);
  }

  /* ══════════════════════════════
     SECTION 2 — HOW IT WORKS
  ══════════════════════════════ */
  .hiw-section {
    background: linear-gradient(175deg, #e8f0f8 0%, #d8eac4 50%, #e8f0c0 100%);
    padding: 36px 0 0;
    position: relative;
    overflow: hidden;
  }

  .hiw-section::before {
    content: '';
    position: absolute;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: rgba(255,255,255,0.18);
    top: -80px; right: -80px;
    pointer-events: none;
  }

  .hiw-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: #1a1a2e;
    text-align: center;
    margin-bottom: 6px;
  }

  /* Dotted decorations */
  .dot-grid {
    position: absolute;
    opacity: 0.25;
    pointer-events: none;
  }

  /* Doctor standing image */
  .hiw-doctor-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 10px 0 0;
    height: 240px;
  }

  /* CTA floating tags */
  .hiw-tags {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 5;
    white-space: nowrap;
  }

  .hiw-tag {
    background: #1a3a8f;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 7px 14px;
    border-radius: 50px;
    box-shadow: 0 3px 12px rgba(26,58,143,0.35);
    cursor: pointer;
    transition: transform 0.2s;
  }
  .hiw-tag:hover { transform: translateY(-2px); }
  .hiw-tag.light {
    background: rgba(255,255,255,0.92);
    color: #1a3a8f;
  }

  /* ── Bottom two cards ── */
  .hiw-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 10px;
    background: #fff;
  }

  .hiw-card {
    background: #fff;
    padding: 18px 14px 0;
    position: relative;
    overflow: hidden;
    border-top: 1px solid #eef0f5;
  }

  .hiw-card:first-child {
    border-right: 1px solid #eef0f5;
  }

  .hiw-card-title {
    font-family: 'Poppins', sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    color: #1a1a2e;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .hiw-card-sub {
    font-size: 0.72rem;
    font-weight: 700;
    color: #1a6fb5;
    margin-bottom: 12px;
  }

  .hiw-card-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 110px;
    position: relative;
  }

  .btn-learn-sm {
    display: inline-block;
    background: #1a6fb5;
    color: #fff;
    font-size: 0.62rem;
    font-weight: 800;
    padding: 6px 18px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    margin: 8px 0 14px;
    box-shadow: 0 3px 10px rgba(26,111,181,0.32);
    transition: transform 0.2s;
  }
  .btn-learn-sm:hover { transform: translateY(-2px); }

  /* Footer tagline */
  .hiw-footer {
    background: #fff;
    text-align: center;
    padding: 14px 20px 20px;
    border-top: 1px solid #f0f2f8;
  }
  .hiw-footer p {
    font-size: 0.62rem;
    color: #aaa;
    line-height: 1.6;
    font-weight: 600;
  }

  /* ── Animations ── */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }
  @keyframes pillSpin {
    0% { transform: rotate(0deg) translateX(14px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(14px) rotate(-360deg); }
  }

  .about-section { animation: fadeInUp 0.5s ease both; }
  .hiw-section { animation: fadeInUp 0.5s ease 0.2s both; }
  .hiw-doctor-svg { animation: floatY 3.8s ease-in-out infinite; }
  .pills-float-svg { animation: floatY 2.8s ease-in-out infinite 0.6s; }
`;

/* ══════════════════════════════════════
   SVG ILLUSTRATIONS
══════════════════════════════════════ */

/* Masked woman with teal top - about section hero */
const WomanMasked = () => (
  <svg viewBox="0 0 400 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
    {/* Background wash */}
    <rect width="400" height="240" fill="#dce8f4" />
    <rect x="0" y="160" width="400" height="80" fill="#c8d8ec" />
    {/* Desk suggestion */}
    <rect x="60" y="175" width="280" height="12" rx="4" fill="#b0c4d8" />
    {/* Items on desk */}
    <rect x="80" y="155" width="30" height="20" rx="3" fill="#e8eef8" />
    <rect x="90" y="150" width="10" height="5" rx="2" fill="#c8d8ec" />
    <rect x="280" y="148" width="50" height="27" rx="3" fill="#e0e8f4" />
    {/* Body - teal/blue top */}
    <ellipse cx="200" cy="240" rx="90" ry="30" fill="#1a9eaf" />
    <path d="M130 165 Q145 145 200 148 Q255 145 270 165 L275 240 L125 240 Z" fill="#7ecdd8" />
    {/* Shirt collar */}
    <path d="M185 148 L200 168 L215 148" fill="#5ab8c4" />
    {/* Vest/jacket */}
    <path d="M130 170 Q140 155 165 155 L185 148 L180 190 L130 200 Z" fill="#5a82b4" />
    <path d="M270 170 Q260 155 235 155 L215 148 L220 190 L270 200 Z" fill="#5a82b4" />
    {/* Neck */}
    <rect x="190" y="120" width="20" height="30" rx="10" fill="#e8c8a8" />
    {/* Head */}
    <ellipse cx="200" cy="98" rx="36" ry="40" fill="#e8c8a8" />
    {/* Dark hair */}
    <path d="M164 88 Q166 55 200 50 Q234 55 236 88 Q222 68 200 66 Q178 68 164 88Z" fill="#1a0a00" />
    <path d="M164 88 Q158 110 162 130" stroke="#1a0a00" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M236 88 Q242 110 238 130" stroke="#1a0a00" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Eyes */}
    <ellipse cx="188" cy="96" rx="5" ry="5.5" fill="#fff" />
    <ellipse cx="212" cy="96" rx="5" ry="5.5" fill="#fff" />
    <circle cx="189" cy="96.5" r="3" fill="#2a1000" />
    <circle cx="213" cy="96.5" r="3" fill="#2a1000" />
    <circle cx="190" cy="95.5" r="1" fill="#fff" />
    <circle cx="214" cy="95.5" r="1" fill="#fff" />
    {/* Eyebrows */}
    <path d="M182 89 Q188 86 194 89" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M206 89 Q212 86 218 89" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Medical mask */}
    <path d="M166 106 Q200 120 234 106 Q234 128 200 132 Q166 128 166 106Z" fill="#90d0e0" />
    <path d="M166 106 Q200 100 234 106" stroke="#70bcd0" strokeWidth="1.5" fill="none" />
    <path d="M162 108 Q158 116 162 124 Q166 108 166 108Z" fill="#70bcd0" />
    <path d="M238 108 Q242 116 238 124 Q234 108 234 108Z" fill="#70bcd0" />
    {/* laptop on desk */}
    <rect x="155" y="162" width="90" height="12" rx="2" fill="#c8d0e0" />
    <rect x="158" y="150" width="84" height="12" rx="2" fill="#2a3a5a" />
    <rect x="160" y="152" width="80" height="8" rx="1" fill="#3a4a6a" />
    {/* screen lines */}
    <rect x="164" y="154" width="40" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)" />
    <rect x="164" y="158" width="28" height="1.5" rx="0.75" fill="rgba(255,255,255,0.25)" />
  </svg>
);

/* Dot grid pattern */
const DotGrid = ({ color = "#1a6fb5", rows = 5, cols = 8, gap = 14 }) => {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * gap + 4} cy={r * gap + 4} r="1.8" fill={color} />);
    }
  }
  return (
    <svg width={cols * gap + 8} height={rows * gap + 8} viewBox={`0 0 ${cols * gap + 8} ${rows * gap + 8}`}>
      {dots}
    </svg>
  );
};

/* Doctor standing with phone - How it Works */
const DoctorStanding = () => (
  <svg viewBox="0 0 140 240" width="140" height="240" className="hiw-doctor-svg" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="232" rx="45" ry="8" fill="rgba(0,0,0,0.1)" />
    {/* Teal scrubs top */}
    <path d="M28 130 Q34 112 70 115 Q106 112 112 130 L115 232 L25 232 Z" fill="#00b4d8" />
    {/* White coat */}
    <path d="M28 134 Q32 116 52 115 L70 135 L55 165 L26 155 Z" fill="#e8f4fd" />
    <path d="M112 134 Q108 116 88 115 L70 135 L85 165 L114 155 Z" fill="#e8f4fd" />
    {/* Pocket */}
    <rect x="76" y="128" width="20" height="14" rx="3" fill="#d0e8f8" />
    <rect x="78" y="126" width="16" height="6" rx="3" fill="#b0c8e0" />
    {/* Neck */}
    <rect x="62" y="95" width="16" height="22" rx="8" fill="#e8c4a0" />
    {/* Head */}
    <ellipse cx="70" cy="78" rx="26" ry="28" fill="#e8c4a0" />
    {/* Hair - short dark */}
    <path d="M44 70 Q46 46 70 44 Q94 46 96 70 Q84 56 70 54 Q56 56 44 70Z" fill="#2a1800" />
    {/* Eyes */}
    <ellipse cx="60" cy="76" rx="4" ry="4.5" fill="#fff" />
    <ellipse cx="80" cy="76" rx="4" ry="4.5" fill="#fff" />
    <circle cx="60.5" cy="76.5" r="2.5" fill="#1a0800" />
    <circle cx="80.5" cy="76.5" r="2.5" fill="#1a0800" />
    <circle cx="61" cy="75.5" r="1" fill="#fff" />
    <circle cx="81" cy="75.5" r="1" fill="#fff" />
    {/* Eyebrows */}
    <path d="M55 69 Q60 66 65 69" stroke="#2a1800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M75 69 Q80 66 85 69" stroke="#2a1800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <path d="M68 82 Q70 86 72 82" stroke="#c8a080" strokeWidth="1" fill="none" />
    {/* Smile */}
    <path d="M62 88 Q70 95 78 88" stroke="#c8a080" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Stethoscope */}
    <path d="M52 118 Q42 134 46 150 Q50 162 58 160" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="58" cy="160" r="6" fill="#1a1a2e" />
    <path d="M88 118 Q98 134 94 150 Q90 162 82 160" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M58 115 Q70 110 82 115" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms */}
    <path d="M28 136 Q14 158 18 185" stroke="#e8c4a0" strokeWidth="14" strokeLinecap="round" fill="none" />
    <path d="M112 136 Q126 155 120 180" stroke="#e8c4a0" strokeWidth="14" strokeLinecap="round" fill="none" />
    {/* Phone in right hand */}
    <rect x="108" y="168" width="20" height="32" rx="4" fill="#1a1a2e" />
    <rect x="110" y="170" width="16" height="26" rx="3" fill="#2a6fd4" />
    <rect x="112" y="172" width="12" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
    <rect x="112" y="176" width="9" height="1.5" rx="0.75" fill="rgba(255,255,255,0.3)" />
  </svg>
);

/* Pills scatter for card 1 */
const PillsScatter = () => (
  <svg viewBox="0 0 160 120" width="160" height="120" className="pills-float-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Big round pill orange/white */}
    <ellipse cx="80" cy="65" rx="38" ry="35" fill="#f8f0e8" />
    <ellipse cx="80" cy="65" rx="38" ry="35" fill="none" stroke="#e8d8c8" strokeWidth="1.5" />
    {/* pill cap orange */}
    <clipPath id="capClip">
      <ellipse cx="80" cy="65" rx="38" ry="35" />
    </clipPath>
    <rect x="42" y="30" width="76" height="35" fill="#f5a623" clipPath="url(#capClip)" />
    <rect x="42" y="65" width="76" height="35" fill="#f8f0e8" clipPath="url(#capClip)" />
    <line x1="42" y1="65" x2="118" y2="65" stroke="#e8d8c8" strokeWidth="1.5" />

    {/* Capsule pill red/white - top left */}
    <g transform="rotate(-30 40 30)">
      <rect x="16" y="22" width="48" height="18" rx="9" fill="#fff" stroke="#e8ddd4" strokeWidth="1" />
      <rect x="16" y="22" width="24" height="18" rx="9" fill="#e8453a" />
      <line x1="40" y1="22" x2="40" y2="40" stroke="#e8ddd4" strokeWidth="1" />
    </g>

    {/* Capsule pill blue/white - top right */}
    <g transform="rotate(20 128 25)">
      <rect x="104" y="14" width="48" height="18" rx="9" fill="#fff" stroke="#e8ddd4" strokeWidth="1" />
      <rect x="128" y="14" width="24" height="18" rx="9" fill="#4a90d9" />
      <line x1="128" y1="14" x2="128" y2="32" stroke="#e8ddd4" strokeWidth="1" />
    </g>

    {/* Small round pills */}
    <circle cx="28" cy="78" r="9" fill="#f5a623" />
    <circle cx="28" cy="78" r="9" stroke="#e89018" strokeWidth="1" fill="none" />
    <circle cx="142" cy="80" r="8" fill="#06d6a0" />
    <circle cx="22" cy="55" r="6" fill="#ff6b9d" />
    <circle cx="148" cy="55" r="6" fill="#ffd166" />
  </svg>
);

/* Businessman for card 2 */
const Businessman = () => (
  <svg viewBox="0 0 120 200" width="100" height="180" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="193" rx="40" ry="7" fill="rgba(0,0,0,0.1)" />
    {/* Dark suit */}
    <path d="M18 120 Q24 102 60 105 Q96 102 102 120 L105 193 L15 193 Z" fill="#1a1a2e" />
    {/* White shirt */}
    <path d="M48 105 L60 125 L72 105" fill="#f0f4f8" />
    <path d="M48 105 L44 125 L60 125 L56 145 L40 148 L18 130 Z" fill="#2a2a4e" />
    <path d="M72 105 L76 125 L60 125 L64 145 L80 148 L102 130 Z" fill="#2a2a4e" />
    {/* Tie */}
    <path d="M57 105 L60 112 L63 105" fill="#1a6fb5" />
    <path d="M58 112 L55 135 L60 140 L65 135 L62 112Z" fill="#1a6fb5" />
    {/* Neck */}
    <rect x="52" y="86" width="16" height="21" rx="8" fill="#e0b890" />
    {/* Head */}
    <ellipse cx="60" cy="70" rx="24" ry="26" fill="#e0b890" />
    {/* Hair - dark short sides, lighter top */}
    <path d="M36 62 Q38 40 60 38 Q82 40 84 62 Q74 50 60 48 Q46 50 36 62Z" fill="#2a1800" />
    {/* Eyes */}
    <ellipse cx="51" cy="68" rx="4" ry="4.5" fill="#fff" />
    <ellipse cx="69" cy="68" rx="4" ry="4.5" fill="#fff" />
    <circle cx="51.5" cy="68.5" r="2.5" fill="#1a0800" />
    <circle cx="69.5" cy="68.5" r="2.5" fill="#1a0800" />
    <circle cx="52" cy="67.5" r="1" fill="#fff" />
    <circle cx="70" cy="67.5" r="1" fill="#fff" />
    {/* Nose */}
    <path d="M58 75 Q60 79 62 75" stroke="#c09070" strokeWidth="1" fill="none" />
    {/* Smile */}
    <path d="M52 82 Q60 89 68 82" stroke="#c09070" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Arms straight down */}
    <path d="M18 124 Q8 150 14 178" stroke="#1a1a2e" strokeWidth="16" strokeLinecap="round" fill="none" />
    <path d="M102 124 Q112 150 106 178" stroke="#1a1a2e" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* Hands */}
    <ellipse cx="15" cy="180" rx="10" ry="8" fill="#e0b890" />
    <ellipse cx="105" cy="180" rx="10" ry="8" fill="#e0b890" />
  </svg>
);

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function ExpatCaresPage2() {
  return (
    <>
      <style>{styles}</style>
      <div className="phone-frame">

        {/* ── SECTION 1: ABOUT ── */}
        <div className="about-section">
          <p className="about-label">About Expat Cares</p>
          <h2 className="about-title">Dubai Health. Decoded.</h2>

          {/* Hero photo area */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-bg">
              <WomanMasked />
            </div>

            {/* Stat badges */}
            <div className="stat-badges">
              <div className="stat-badge">
                <span className="stat-num">30+</span>
                Nationalities served
              </div>
              <div className="stat-badge">
                <span className="stat-num">24 hrs</span>
                Average guidance
              </div>
            </div>

            {/* Clients badge */}
            <div className="clients-badge">
              <div className="clients-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="4" fill="#fff" />
                  <circle cx="15" cy="7" r="4" fill="rgba(255,255,255,0.6)" />
                  <path d="M2 20C2 17 5.1 15 9 15C12.9 15 16 17 16 20" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M15 15C18 15 21 17 21 20" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="clients-label">12+ Clients</span>
            </div>
          </div>

          {/* Bottom overlay text */}
          <div className="hero-bottom-text">
            <h3 className="hero-verified-title">Your Health, Verified.</h3>
            <p className="hero-verified-sub">
              We provide the UAE-licensed expertise you need<br />to land safely.
            </p>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>

        {/* ── SECTION 2: HOW IT WORKS ── */}
        <div className="hiw-section">

          {/* Dot grid decorations */}
          <div className="dot-grid" style={{ top: 16, left: 16 }}>
            <DotGrid color="#1a6fb5" rows={4} cols={6} gap={12} />
          </div>
          <div className="dot-grid" style={{ top: 16, right: 16 }}>
            <DotGrid color="#8fbc8f" rows={4} cols={6} gap={12} />
          </div>

          <h2 className="hiw-title">How it Works</h2>

          {/* Doctor illustration */}
          <div className="hiw-doctor-wrap">
            <DoctorStanding />

            {/* CTA tags */}
            <div className="hiw-tags">
              <div className="hiw-tag">Speak To Doctor</div>
              <div className="hiw-tag light">Check Medication</div>
            </div>
          </div>

          {/* Two cards */}
          <div className="hiw-cards">

            {/* Card 1 */}
            <div className="hiw-card">
              <p className="hiw-card-title">Upload or ask about</p>
              <p className="hiw-card-sub">your medication</p>
              <div className="hiw-card-img">
                <PillsScatter />
              </div>
              <button className="btn-learn-sm">Learn More</button>
            </div>

            {/* Card 2 */}
            <div className="hiw-card">
              <p className="hiw-card-title">Reviewed by licensed</p>
              <p className="hiw-card-sub">pharmacists</p>
              <div className="hiw-card-img">
                <Businessman />
              </div>
              <button className="btn-learn-sm">Learn More</button>
            </div>

          </div>

          {/* Footer line */}
          <div className="hiw-footer">
            <p>We make medication changes simple, secure, and clinically reviewed —<br />wherever you are in the world.</p>
          </div>

        </div>

      </div>
    </>
  );
}
