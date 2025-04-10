import { useState } from "react";   
import { Route, Routes, Navigate } from "react-router-dom";
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
import AdminPrivateRoutes from "./components/hooks/AdminPrivateRoutes";

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
import AdminHome from "./components/admin/AdminHome";

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
            
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/food/:category" element={<FoodPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/restaurant/:id/offers" element={<RestaurantOffers />} />
            <Route path="/partnerwithus" element={<PartnerWithus />} />

            {/* Restaurant Public Routes */}
            <Route path="/rlogin" element={<Rlogin />} />
            <Route path="/rsignup" element={<Rsignup />} />
            <Route path="/Rhero" element={<ResHero />} />

            {/* Restaurant Protected Routes */}
            <Route element={<RestaurantPrivateRoutes />}>
              <Route path="/rdashboard" element={<Rdashboard />} />
              <Route path="/add-restaurant" element={<LocationForm />} />
              <Route path="/add-offer" element={<Offer />} />
              <Route path="/view-offers" element={<ViewOffers />} />
              <Route path="/singleoffer" element={<ViewSingleOffer />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminPrivateRoutes />}>
              <Route path="/admin" element={<AdminDashboard />}>
              <Route path="adminsidebar" element={<Adminsidebar />} />
                {/* <Route index element={<AdminHome />} /> */}
                <Route path="dashboard" element={<AdminHome />} />
                <Route path="restaurants" element={<AllRestaurants />} />
                <Route path="offers" element={<AdminAllOffers />} />
                <Route path="users" element={<AdminAllUsers />} />
              </Route> 
            </Route>

            {/* User Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/user" element={<UserSidebar />} />
              <Route path="/restaurant" element={<Rsidebar />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/admin/login" element={<Alogin />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
