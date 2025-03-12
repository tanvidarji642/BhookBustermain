import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Auth.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  const [animating, setAnimating] = useState(false);

  const { 
    register, 
    handleSubmit, 
    watch ,
    formState: { errors },
  } = useForm();

  const password = React.useRef({});
  password.current = watch("password", "");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const onSubmit = async (data) => {
    console.log('Signup submitted:', data);

    data.role_id = "67beb40ae44bac5f3f079e11";
    data.status = data.status === "true" || data.status === true;
    console.log("formData...", data);

    try {
      const res = await axios.post("http://localhost:8000/user/", data, { 
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res);
      console.log(res.data);
      if (res.status === 201) {
        toast.success('Account created successfully!');
        navigate("/login");
      } else {
        toast.error('Signup failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        toast.error('Invalid data. Please check your input.');
      } else {
        toast.error('Signup failed');
      }
    }
  };

  const handleLoginTransition = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate('/login');
    }, 500);
  };


  return (
    <div className={`auth-container ${animating ? 'slide-left' : ''}`}>
      <div className="auth-left">
        <div className="auth-welcome">
          {/* <h1>Create Account</h1> */}
          {/* <p>Join us today and start your journey with our platform.</p> */}
          <h1>Join Us Today</h1>
          <p>Create an account and start your journey with us. It only takes a few minutes.</p>
          
          <div className="auth-switch-left">
            <button 
              className="switch-button-left login-button"
              onClick={handleLoginTransition}
            >
              <span>Login</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="glow-effect"></div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter your first name"
                {...register("firstname", { 
                  required: "Full name is required",
                  minLength: { 
                    value: 2, 
                    message: "Name must be at least 2 characters" 
                  } 
                })}
                className={errors.firstname ? "input-error" : ""}
              />
              {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                {...register("lastname", { 
                  required: "Last name is required", 
                  minLength: { 
                    value: 2, message: "Name must be at least 2 characters" 
                  } 
                })}
                className={errors.lastname ? "input-error" : ""} 
              />
              {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="form-group-radio">
                <label htmlFor="male">
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  Male
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  Female
                </label>
                <label htmlFor="other">
                  <input
                    type="radio"
                    id="other"
                    value="other"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  Other
                </label>
              </div>
              {errors.gender && <p className="error-message">{errors.gender.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact number"
                {...register("contact", { 
                  required: "Contact number is required", 
                  pattern: { 
                    value: /^[0-9]{10}$/,  // Validates a 10-digit number (adjust the pattern as per your requirement)
                    message: "Invalid contact number"
                  }
                })}
                className={errors.contact ? "input-error" : ""}
              />
              {errors.contact && <p className="error-message">{errors.contact.message}</p>}
            </div>
          

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                {...register("age", { required: "Age is required" })}
                className={errors.age ? "input-error" : ""}
              />
              {errors.age && <p className="error-message">{errors.age.message}</p>}
            </div>



            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                placeholder="Enter status"
                {...register("status", { required: "Status is required" })}
                className={errors.status ? "input-error" : ""}
              />
              {errors.status && <p className="error-message">{errors.status.message}</p>}
            </div>

            {/* <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image is required" })}
                className={errors.profilePicPath ? "input-error" : ""}
              />
              {errors.profilePicPath && <p className="error-message">{errors.profilePicPath.message}</p>}
            </div> */}
            

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { 
                      value: 8, 
                      message: "Password must be at least 8 characters" 
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
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
            
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm_password"
                  placeholder="Confirm your password"
                  {...register("confirm_password", { 
                    required: "Please confirm your password",
                    validate: value => value === password.current || "Passwords do not match"
                  })}
                  className={errors.confirm_password ? "input-error" : ""}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirm_password && <p className="error-message">{errors.confirm_password.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select 
                id="role" 
                {...register("role", { required: "Please select a role" })}
                className={errors.role ? "input-error" : ""}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
              {errors.role && <p className="error-message">{errors.role.message}</p>}
            </div>
            
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
            </div>
            
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;