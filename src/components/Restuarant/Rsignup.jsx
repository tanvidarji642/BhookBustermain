import React, { useRef, useState } from 'react';
import '../../assets/css/RDasboard/Rauth.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Rsignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = useRef();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  password.current = watch("password", "");

  // const onSubmit = async (data) => {
  //   try {
  //     const res = await axios.post("/restaurant", data);
  //     console.log(res.data); // 👀 Debug output      
  //     if (res.status === 200 || res.status === 201) {
  //       toast.success("Account created successfully!");
  //       setTimeout(() => navigate('/login'), 1500);
  //     }
  //   } catch (err) {
  //     toast.error("Signup failed");
  //   }
  // };

  const onSubmit = async (data) => {
    console.log("Form Data:", data); // 👈 Add this for debugging
    try {
      const payload = {
        ...data,
        role_id: "restaurant"
      };
      const res = await axios.post("/restaurant", payload);
      if (res.status === 200 || res.status === 201) {
        toast.success("Account created successfully!");
        setTimeout(() => navigate('/Rlogin'), 1500);
      }
    } catch (err) {
      toast.error("Signup failed");
      console.error(err); // 👈 See exact error here
    }
  };
  

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-welcome">
          <h1>Welcome Restaurant</h1>
          <p>Already have an account? Login to manage your offers and profile.</p>
          <div className="auth-switch-left">
            <button
              className="switch-button-left login-button"
              onClick={() => navigate('/Rlogin')}
            >
              <span>Login</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container scrollable-form">
          <div className="glow-effect"></div>
          <h2>Restaurant Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            {/* Name */}
            <div className="form-group">
              {/* <input
                type="text"
                placeholder="Restaurant Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "input-error" : ""}
              /> */}
              <input
                type="text"
                placeholder="Restaurant Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <input type="hidden" value="restaurant" {...register("role_id")} />


            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Restaurant Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                      message: "Password must include uppercase, lowercase, number, and special character"
                    }
                  })}
                  className={errors.password ? "input-error" : ""}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: value => value === password.current || "Passwords do not match"
                  })}
                  className={errors.confirmPassword ? "input-error" : ""}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </div>

            {/* Terms */}
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    required: "You must accept the terms and conditions"
                  })}
                />
                <label htmlFor="terms">I agree to the Terms & Conditions</label>
              </div>
              {errors.terms && <p className="error-message">{errors.terms.message}</p>}
            </div>

            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Rsignup;
