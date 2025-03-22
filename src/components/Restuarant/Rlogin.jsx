import React from 'react'
import '../../assets/css/Auth.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const Rlogin = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const submitHandler = async(data) => {
    console.log(data)
    const res = await axios.post("/user/login", data)
    console.log(res.data)
    if(res.status === 200){
      alert("Login Success") //tost...
      localStorage.setItem("id",res.data.data._id)
      localStorage.setItem("role",res.data.data.roleId.name)

      if(res.data.data.roleId.name === "USER"){
        navigate("/user") //check in app.js
      }
    }
    else{
      alert("Login Failed")
    }
  }

  const validationSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "email is required"
      }
    },
    passwordValidator: {
      required: {
        value: true,
        message: "password is required*"
      }
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
          <div className="form-group">
            <label className="form-label" >Email Address</label>
            <input type="text" placeholder="Email" className="form-input" {...register("email", validationSchema.emailValidator)} /> <br />
            <span style={{ color: "red" }}>
              {errors.email?.message}
            </span>

          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type='password' placeholder="Password" className="form-input" {...register("password", validationSchema.passwordValidator)} /><br />
            <span style={{ color: "red" }}>
              {errors.password?.message}
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="form-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Rlogin
