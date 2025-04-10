import { useState } from "react";   
import { Route, Routes } from "react-router-dom";
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import "./assets/css/Auth.css";
import './App.css'
import { useEffect } from 'react';

import { UserSidebar } from "./components/layouts/UserSidebar";
import Login from "./components/common/Login";
import Signup from "./components/common/Signup";
import PrivateRoutes from "./components/hooks/PrivateRoutes";
import RestaurantPrivateRoutes from "./components/hooks/RestaurantPrivateRoutes";

import Rsidebar from "./components/Restuarant/Rsidebar";
import Adminsidebar from "./components/admin/Adminsidebar";
import Rlogin from "./components/Restuarant/Rlogin";
import Alogin from "./components/admin/Alogin";
import Rsignup from "./components/Restuarant/Rsignup";
// import { AddOffer } from "./components/Restuarant/AddOffer";
import Offer from "./components/Restuarant/Offer";
import LocationForm from "./components/Restuarant/LocationForm";
import LandingPage from "./components/frontpages/LandingPage";
import axios from "axios";
import PartnerWithus from "./components/Restuarant/Partnerwithus";
import ResHero from "./components/Restuarant/ResHero";
import Rdashboard from "./components/Restuarant/Rdasborad";

import HomePage from "./components/common/HomePage";
import AboutPage from "./components/common/AboutPage";
import FoodPage from "./components/frontpages/FoodPage";
import OffersPage from "./components/frontpages/OffersPage";
import ViewOffers from "./components/Restuarant/ViewOffer";
import ViewSingleOffer from './components/Restuarant/ViewSingleOffer';

// import Adminsidebar from './components/admin/Adminsidebar';


import AdminDashboard from './components/admin/AdminDashboard';
import RestaurantOffers from "./components/frontpages/RestaurantOffers";
import AllRestaurants from "./components/admin/AllRestaurants";
import AdminAllOffers from "./components/admin/AdminAllOffers";
import AdminAllUsers from "./components/admin/AdminAllUsers";
import ResetPassword from "./components/common/ResetPassword";
// import ResetPassword from "./components/common/ResetPassword";

function App() {
  useEffect(() => {
    // Apply saved theme on app load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
  }, []);

  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <>
      <div className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
        <div className="app-wrapper">
          <Routes>  
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          
          <Route path="/allrestaurants" element={<AllRestaurants />} />
          <Route path="/alloffers" element={<AdminAllOffers />} />
          <Route path="/allusers" element={<AdminAllUsers />} />


          <Route path="/restaurant/:id/offers" element={<RestaurantOffers />} />

          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/rlogin" element={<Rlogin />} />
          <Route path="/rsignup" element={<Rsignup />} />

          <Route path="/Rhero" element={<ResHero />} />

          <Route path="/food/:category" element={<FoodPage />} /> 
          <Route path="/offers" element={<OffersPage />} /> 
            <Route path="/partnerwithus" element={<PartnerWithus />} />
            
            <Route path="/about" element={<AboutPage />} />

            <Route element={<RestaurantPrivateRoutes />}>
              <Route path="/rdashboard" element={<Rdashboard />} />
              <Route path="/add-restaurant" element={<LocationForm />} />
              <Route path="/add-offer" element={<Offer />} />
              <Route path="/view-offers" element={<ViewOffers />} />
              <Route path="/singleoffer" element={<ViewSingleOffer />} />
            </Route>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="admins" element={<Adminsidebar />} />
                <Route path="alogin" element={<Alogin />} />
                <Route path="asignup" element={<Signup />} />
              </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/user" element={<UserSidebar />}>
               
              </Route>

              <Route path="/restaurant" element={<Rsidebar />}>
              </Route>
              
              
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
