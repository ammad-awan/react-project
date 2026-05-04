
import React from "react";
import "./Login.css";

const LoginScreen = () => {
    return (
        <div className="main-screen">
            <div className="already-have-account-container">
                <span>Already have an account?</span>
                <span className="log-in">Log in</span>
            </div>

            <img className="vector-icon" loading="lazy" alt="" src="/Vector@2x.png" />

            <main className="wrapper-frame-0">
                <section className="wrapper-frame-02">
                    <div className="welcome-container">
                        <div className="welcome-text-container">
                            <h3 className="welcome-message">Welcome to the Expat Cares</h3>
                            <h3 className="login-to-explore">Login to explore</h3>
                        </div>

                        <img
                            className="welcome-dots-container"
                            loading="lazy"
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
                                    loading="lazy"
                                    alt=""
                                    src="/Group-1000005906@2x.png"
                                />

                                <button className="forgot-password-link">Login</button>
                            </div>
                        </div>

                        <section className="login-container">
                            <h1 className="welcome-back">Welcome Back</h1>

                            <div className="email-and-password-container">
                                <div className="auto-layout-vertical">
                                    <div className="auto-layout-vertical2">
                                        <div className="full-name-container">
                                            <span>Full name</span>
                                            <span className="span">*</span>
                                        </div>

                                        <div className="auto-layout-horizontal">
                                            <input
                                                className="enter-your-full"
                                                placeholder="Enter your full name"
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="auto-layout-vertical2">
                                        <div className="password">
                                            <span>Password</span>
                                            <span className="span">*</span>
                                        </div>

                                        <div className="auto-layout-horizontal2">
                                            <input
                                                className="password2"
                                                placeholder="Password"
                                                type="text"
                                            />

                                            <img className="mdieye-icon" alt="" src="/mdi-eye@2x.png" />
                                        </div>
                                    </div>
                                </div>

                                <div className="forgot-password-link2">Forgot password?</div>
                            </div>
                        </section>

                        <button className="log-in-wrapper">
                            <div className="log-in2">Log In</div>
                        </button>

                        <div className="sign-in-options-container">
                            <div className="sign-in-options">Sign in With</div>

                            <div className="sign-in-options-icons-containe">
                                <img className="vector-icon2" alt="" src="/Vector@2x.png" />
                                <img className="google-icon" alt="" src="/google-icon@2x.png" />
                                <img className="group-icon" alt="" src="/Group@2x.png" />
                            </div>

                            <div className="sign-up-link-container">
                                <span>First time here?</span>
                                <span className="create-an-account">Create an account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
