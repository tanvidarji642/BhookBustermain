import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../assets/css/Rauth.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Rlogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  // Form Submission
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/restaurant/login", data, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.status === 200) {
        toast.success('Logged in successfully!');
        localStorage.setItem("id", res.data?.user._id || "");
        localStorage.setItem("role", res.data.user.role?.name || "");

        if (res.data.user.role.name === "USER") {
          navigate("/user-dashboard");
        } else if (res.data.user.role.name === "RESTAURANT") {
          navigate("/restaurant-dashboard");
        }
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        toast.error('Invalid credentials. Please check your email or password.');
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={`form-input ${errors.email ? 'input-error' : ''}`} 
              {...register("email", { 
                required: "Email is required", 
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: "Invalid email address" 
                } 
              })} 
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className={`form-input ${errors.password ? 'input-error' : ''}`} 
                {...register("password", { required: "Password is required" })}
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password.message}</span>}
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" {...register("remember")} />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="form-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Rlogin;
