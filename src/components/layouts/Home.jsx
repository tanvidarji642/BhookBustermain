import React from 'react';
import '../../assets/css/Home.css';
import "./UserNavbar"
import "./UserSidebar"

// Home page - ye hamara main landing page hai
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to BhookBuster</h1>
        <p>Discover and share the best restaurant deals in your area.</p>
      </div>
    </div>
  );
};

export default Home;