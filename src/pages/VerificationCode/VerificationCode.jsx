import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./VerificationCode.css";

const VerificationCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(300);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (s) => {
    const minutes = Math.floor(s / 60);
    const secs = s % 60;
    return `${minutes}:${String(secs).padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length === 6) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/account-created");
      }, 1000);
    }
  };

  const handleResend = () => {
    setSeconds(300);
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <div className="verification-wrapper">
      <div className="verification-card">
        <div className="verification-left">
          <div className="dots-bg" />
          
          <div className="sms-bubble">
            <div className="sms-header">
              <div className="sms-icon-wrap">
                <div className="sms-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#fff" />
                  </svg>
                </div>
                <div className="sms-badge" />
              </div>
              <span className="sms-label">SMS</span>
            </div>
            <div className="sms-body">Your verification code is <strong>12345</strong></div>
          </div>

          <div className="connector-line">
            <div className="connector-dot" />
          </div>

          <div className="woman-figure">
            <div className="woman-body" />
            <div className="woman-head" />
            <div className="woman-hair" />
            <div className="phone-dot" />
          </div>

          <div className="left-caption">
            <p>Welcome to the Expat Cares<br />Verify Email to explore</p>
            <div className="carousel-dots">
              <div className="dot active" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </div>

        <div className="verification-right">
          <button className="close-btn">✕</button>
          
          <h2 className="verification-title">Verification Code</h2>

          <div className="verification-content">
            <h3 className="verification-heading">
              We've Sent A 6-Digit Verification Code<br />To Your Email.
            </h3>

            <p className="verification-subtitle">
              Please enter the code below to continue securely
            </p>

            <div className="otp-input-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otp-input"
                  placeholder="0"
                />
              ))}
            </div>

            <div className="expiry-info">
              <span>Expire in {formatTime(seconds)}</span>
            </div>

            <button 
              className="verify-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Continue"}
            </button>

            <div className="resend-section">
              <span>Didn't receive a code?</span>
              <button 
                className="resend-btn"
                onClick={handleResend}
              >
                Resend
              </button>
            </div>

            <a href="/login" className="back-login">Back to login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
