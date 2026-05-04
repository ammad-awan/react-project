import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountCreated.css";

const AccountCreated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect after 3 seconds
    // const timer = setTimeout(() => navigate("/dashboard"), 3000);
    // return () => clearTimeout(timer);
  }, [navigate]);

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <div className="account-created-wrapper">
      <div className="account-created-card">
        <div className="created-left">
          <div className="left-overlay" />
          <div className="left-caption">
            <p>Welcome to the Expat Cares<br />Create Account to explore</p>
            <div className="dots">
              <div className="dot active" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </div>

        <div className="created-right">
          <button className="close-btn">✕</button>
          
          <h2 className="created-title">Account Created</h2>

          <div className="created-content">
            <div className="success-icon">
              <svg viewBox="0 0 120 140" width="120" height="140">
                {/* Phone frame */}
                <rect x="20" y="10" width="80" height="100" rx="8" fill="#f0f0ff" stroke="#e0d8f8" strokeWidth="1.5" />
                {/* Camera dot */}
                <circle cx="60" cy="22" r="5" fill="#c8bfee" />
                {/* Profile circle */}
                <circle cx="60" cy="45" r="16" fill="#7c5cbf" />
                {/* Two lines */}
                <line x1="40" y1="70" x2="80" y2="70" stroke="#d8d0f0" strokeWidth="2" />
                <line x1="45" y1="80" x2="75" y2="80" stroke="#d8d0f0" strokeWidth="2" />
                {/* Check mark */}
                <g transform="translate(65, 105)">
                  <circle cx="0" cy="0" r="18" fill="#10b981" />
                  <path d="M -8 0 L -2 6 L 8 -4" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>

            <h3 className="success-heading">Account Created Successfully</h3>

            <p className="success-desc">
              Welcome to Expat Cares. Your account has been securely created, and you can now access consultations, prescription services, and personalized healthcare support.
            </p>

            <button className="cta-btn" onClick={handleContinue}>
              Continue To Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;
