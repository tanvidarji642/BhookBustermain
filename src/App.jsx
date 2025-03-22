import { useState } from "react";   
import { Route, Routes } from "react-router-dom";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import "./assets/css/Auth.css";
import './App.css'

import { UserSidebar } from "./components/layouts/UserSidebar";
import Login from "./components/common/Login";
import Signup from "./components/common/Signup";
import PrivateRoutes from "./components/hooks/PrivateRoutes";

import Rsidebar from "./components/Restuarant/Rsidebar";
import Adminsidebar from "./components/admin/Adminsidebar";
import Rlogin from "./components/Restuarant/Rlogin";
import Alogin from "./components/admin/Alogin";
import Rsignup from "./components/Restuarant/Rsignup";
import { AddOffer } from "./components/Restuarant/AddOffer";
import LocationForm from "./components/Restuarant/LocationForm";
import LandingPage from "./components/Landing page/LandingPage";
import axios from "axios";
import PartnerWithus from "./components/Restuarant/Partnerwithus";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <>
      <div className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
        <div className="app-wrapper">
          <Routes>   
            <Route path="/" element={<LandingPage />} />
            <Route path="partnerwithus" element={<PartnerWithus />} />
            
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UserSidebar />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route path="/restaurant" element={<Rsidebar />}>
                <Route path="rlogin" element={<Rlogin />} />
                <Route path="rsignup" element={<Rsignup />} />
                <Route path="addoffer" element={<AddOffer />} />
                <Route path="locationform" element={<LocationForm />} />
              </Route>
              
              <Route path="/admin" element={<Adminsidebar />}>
                <Route path="alogin" element={<Alogin />} />
                <Route path="asignup" element={<Signup />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
