import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { UserNavbar } from './components/layouts/UserNavbar'
//import './App.css'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import "./assets/css/Auth.css"
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
// simport { AddProduct } from './components/vendor/AddProduct'
import { UserDashboard } from './components/users/UserDashboard'
import { UserProfile } from './components/users/UserProfile'
import PrivateRoutes from './components/hooks/PrivateRoutes'
import axios from 'axios'
//import Home from './components/layouts/Home'



function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
      <div className="app-wrapper">
      <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<UserSidebar />}>
              <Route path='home' element={<Home/>}></Route>
              <Route path="dashboard" element={<UserDashboard />}></Route>
              <Route path="profile" element={<UserProfile />}></Route>
            </Route>

            
          </Route>
        </Routes>
      </div>
    </div>
    </> 
  )
}

export default App
