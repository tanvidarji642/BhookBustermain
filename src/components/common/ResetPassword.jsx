import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../assets/css/Auth.css'

const ResetPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors } 
  } = useForm()

  const password = watch("password", "")

  const submitHandler = async(data) => {
    try {
      const obj = {
        token: token,
        password: data.password
      }
      const res = await axios.post("/user/resetpassword", obj)
      if (res.status === 200) {
        toast.success('Password reset successfully!')
        setTimeout(() => {
          navigate('/login')
        }, 1500)
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Invalid or expired reset token')
      } else {
        toast.error('Failed to reset password. Please try again.')
      }
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="glow-effect"></div>
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
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

            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: value => value === password || "Passwords do not match"
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

            <button type="submit" className="auth-button">Reset Password</button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default ResetPassword