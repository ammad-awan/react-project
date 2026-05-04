import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Login.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

<div className="social-icons">
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaGoogle /></a>
  <a href="#"><FaApple /></a>
</div>

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
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
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simulate login delay
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <AuthLayout>
      <div className="login-left-panel">
        <div className="welcome-container">
          <div className="welcome-text-container">
            <h3 className="welcome-message">Welcome to the Expat Cares</h3>
            <h3 className="welcome-subtext">Login to explore</h3>
          </div>
        </div>
      </div>

      <div className="login-right-panel">
        <button className="close-btn">✕</button>
        

        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="form-title">Welcome Back</h1>

          <FormInput
            label="Full name"
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <div className="forgot-password">
            <a href="#forgot">Forgot password?</a>
          </div>

          <Button 
            type="submit" 
            fullWidth 
            disabled={loading}
            className="login-btn"
          >
            {loading ? "Logging in..." : "Log In"}
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

        <div className="signup-link">
          <span>First time here?</span>
          <a href="/signup" className="create-account">Create an account</a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
