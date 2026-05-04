import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Signup.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

<div className="social-icons">
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaGoogle /></a>
  <a href="#"><FaApple /></a>
</div>

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+92",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/verification-code");
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <AuthLayout>
      <div className="signup-left-panel">
        <div className="welcome-container">
          <div className="welcome-text-container">
            <h3 className="welcome-message">Welcome to the Expat Cares</h3>
            <h3 className="welcome-subtext">Create Account to explore</h3>
          </div>
          
        </div>
      </div>

      <div className="signup-right-panel">
        <button className="close-btn">✕</button>
        <div className="signup-header">
          <span className="signup-tab">Sign Up</span>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <h1 className="form-title">Let's Get Your Account Set Up</h1>

          <FormInput
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <div className="phone-field">
            <label className="form-label">
              Phone Number
              <span className="required">*</span>
            </label>
            <div className="phone-input-group">
              <select
                className="country-code"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+92">+92</option>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
              </select>
              <input
                type="text"
                placeholder="Enter your contact number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`phone-number ${errors.phoneNumber ? "error" : ""}`}
              />
            </div>
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </div>

          <FormInput
            label="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <p className="form-disclaimer">
            By creating an account using email, Google or Apple, I agree to the{" "}
            <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a> of Expat Cares.
          </p>

          <Button 
            type="submit" 
            fullWidth 
            disabled={loading}
            className="signup-btn"
          >
            {loading ? "Creating Account..." : "Continue"}
          </Button>
        </form>

        <div className="signin-divider">Sign in With</div>

        <div className="social-icons">
        <a href="#facebook" className="social-btn facebook">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        </a>

        <a href="#google" className="social-btn google">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
        </a>

        <a href="#apple" className="social-btn apple">
          <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" />
        </a>
      </div>

        <div className="login-link">
          <span>Already have an account?</span>
          <a href="/login" className="login-anchor">Log in</a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
