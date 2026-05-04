import { useState, useEffect } from "react";
import './AccountCreated.css'

const phoneCheckIcon = (
  <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
    <div
      style={{
        width: "80px",
        height: "100px",
        background: "linear-gradient(160deg, #f0f0ff 0%, #e8e8f8 100%)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 32px rgba(100,80,200,0.13)",
        border: "1.5px solid #e0d8f8",
        gap: "8px",
        padding: "14px 10px",
      }}
    >
      {/* Top camera dot */}
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#c8bfee",
          marginBottom: "2px",
        }}
      />
      {/* Profile circle */}
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c5cbf 0%, #9b7de8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="white" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {/* Lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%", alignItems: "center" }}>
        <div style={{ height: "5px", width: "52px", borderRadius: "3px", background: "#d4caf0" }} />
        <div style={{ height: "5px", width: "40px", borderRadius: "3px", background: "#e4dcf8" }} />
      </div>
    </div>
    {/* Green check badge */}
    <div
      style={{
        position: "absolute",
        bottom: "-10px",
        right: "-10px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #34c759 0%, #28a745 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "3px solid white",
        boxShadow: "0 4px 12px rgba(52,199,89,0.35)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export default function AccountCreated() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <>

      <div className="page-wrapper">
        <div className="card-shell">
          {/* ── LEFT ── */}
          <div className="left-panel">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80"
              alt="Expat traveler"
            />
            <div className="left-overlay" />
            <div className="left-caption">
              <p>
                Welcome to the Expat Cares<br />
                Create Account to explore
              </p>
              <div className="dots">
                <div className="dot active" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="right-panel">
            <button className="close-btn" aria-label="Close">✕</button>
            <span className="panel-title">Account Created</span>

            {phoneCheckIcon}

            <h2 className="success-heading">Account Created Successfully</h2>
            <p className="success-desc">
              Welcome to Expat Cares. Your account has been securely created, and
              you can now access consultations, prescription services, and
              personalized healthcare support.
            </p>

            <button className="cta-btn">Continue To Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
}
