import { useState, useEffect, useRef } from "react";
import './VerificationCode.css'

 function VerificationCode() {
  const [otp, setOtp] = useState(["8", "8", "8", "8", "8", "8"]);
  const [seconds, setSeconds] = useState(60);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const formatTime = (s) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const handleChange = (i, val) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    if (digit && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0)
      inputRefs.current[i - 1]?.focus();
  };

  const handleResend = () => setSeconds(60);

  return (
    <>
      <style>{styles}</style>
      <div className="page-wrapper">
        <div className="auth-card">

          {/* ── LEFT PANEL ── */}
          <div className="left-panel">
            <div className="dots-bg" />

            {/* SMS Bubble */}
            <div className="sms-bubble">
              <div className="sms-header">
                <div className="sms-icon-wrap">
                  <div className="sms-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <div className="sms-badge" />
                </div>
                <span className="sms-label">SMS</span>
              </div>
              <div className="sms-body">
                Your verification code is
                <br />
                <strong>12345</strong>
              </div>
            </div>

            {/* Connector */}
            <div className="connector-line">
              <div className="connector-dot" />
            </div>

            {/* Woman figure */}
            <div className="woman-figure">
              <div className="woman-hair" />
              <div className="woman-head" />
              <div className="woman-body" />
            </div>

            {/* Phone orange dot */}
            <div className="phone-dot" />

            {/* Caption */}
            <div className="left-caption">
              <p>Welcome to the Expat Gates</p>
              <p>Create Account to explore.</p>
            </div>
            <div className="carousel-dots">
              <div className="dot" />
              <div className="dot active" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="right-panel">
            <button className="close-btn" aria-label="Close">&#x2715;</button>

            <div className="panel-title">Verification Code</div>

            <div className="verify-heading">
              We've Sent A 6-Digit Verification Code
              <br />
              To Your Email.
            </div>
            <div className="verify-sub">
              Please enter the code below to continue securely.
            </div>

            {/* OTP */}
            <div className="otp-group">
              {otp.map((val, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  className="otp-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </div>

            <div className="expire-text">
              Expire in <span>{formatTime(seconds)}</span>
            </div>

            <button className="resend-btn" onClick={handleResend}>
              Resend
            </button>

            <button className="continue-btn">Continue</button>
            <a href="#" className="back-link">Back to login</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default VerificationCode