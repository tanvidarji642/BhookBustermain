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
import PrivateRoutes from './components/hooks/PrivateRoutes'

import axios from 'axios'
import Rsidebar from './components/Restuarant/Rsidebar'
import Adminsidebar from './components/admin/Adminsidebar'
import Rlogin from './components/Restuarant/Rlogin';
import Alogin from './components/admin/Alogin';
import Rsignup from './components/Restuarant/Rsignup'
import { AddOffer } from './components/Restuarant/AddOffer'
import LocationForm from "./components/Restuarant/LocationForm";
import LandingPage from './components/common/LandingPage'




function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <>
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
      <div className="app-wrapper">
      <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/' element={<LandingPage />} />

          <Route element={<PrivateRoutes />}>
          
            <Route path="/user" element={<UserSidebar />}>
            <Route path="locationform" element={<LocationForm  />} />
            <Route path='addoffer' element={<AddOffer />}></Route>

               
            </Route>
            
            <Route path='/restaurant' element={<Rsidebar />}>
            <Route path='rlogin' element={<Rlogin />} />
              <Route path='rsignup' element={<Signup />} />

          </Route>

          {/* <Route path='rlogin' element={<Rlogin />} /> */}

          <Route path='/admin' element={<Adminsidebar />}>
            <Route path='alogin' element={<Alogin />} />
            <Route path='asignup' element={<Signup />} />
          </Route>
          </Route>
        </Routes>
      </div>
    </div>
    </> 
  )
}

export default App;
