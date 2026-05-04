import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main-screen">
      <div className="already-have-account-container">
        <span>Already have an account?</span>
        <span className="log-in">Log in</span>
      </div>

      <img className="vector-icon" alt="" src="/Vector@2x.png" />

      <main className="wrapper-frame-0">
        <section className="wrapper-frame-02">
          <div className="welcome-container">
            <div className="welcome-text-container">
              <h3 className="welcome-message">Welcome to the Expat Cares</h3>
              <h3 className="login-to-explore">Create Account</h3>
            </div>

            <img
              className="welcome-dots-container"
              alt=""
              src="/Welcome-Dots-Container@2x.png"
            />
          </div>
        </section>
      </main>

      <div className="main-screen-inner">
        <div className="frame-wrapper">
          <div className="modal-header-parent">
            <div className="modal-header">
              <div className="modal-header2">
                <img
                  className="modal-header-child"
                  alt=""
                  src="/Group-1000005906@2x.png"
                />

                <button className="forgot-password-link">Sign Up</button>
              </div>
            </div>

            {/* FORM */}
            <section className="login-container">
              <h1 className="welcome-back">Create Account</h1>

              <div className="email-and-password-container">
                <div className="auto-layout-vertical">

                  {/* FULL NAME */}
                  <div className="auto-layout-vertical2">
                    <div className="label">
                      <span>Full Name</span><span className="span">*</span>
                    </div>

                    <div className="input-box">
                      <input type="text" placeholder="Enter full name" />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="auto-layout-vertical2">
                    <div className="label">
                      <span>Email</span><span className="span">*</span>
                    </div>

                    <div className="input-box">
                      <input type="email" placeholder="Enter email" />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="auto-layout-vertical2">
                    <div className="label">
                      <span>Phone Number</span><span className="span">*</span>
                    </div>

                    <div className="phone-box">
                      <select className="country-code">
                        <option>+92</option>
                        <option>+91</option>
                        <option>+1</option>
                      </select>

                      <input type="text" placeholder="Enter number" />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="auto-layout-vertical2">
                    <div className="label">
                      <span>Password</span><span className="span">*</span>
                    </div>

                    <div className="password-box">
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* BUTTON */}
            <button className="log-in-wrapper">
              <div className="log-in2">Create Account</div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;