import React from 'react';
import UserNavbar from '../layouts/UserNavbar';
import '../../assets/css/About.css';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah founded Pocket Buddy with a vision to bridge the gap between restaurants and food enthusiasts.",
      imageUrl: "src/assets/images/Biriyani.png"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael oversees all technical aspects of Pocket Buddy, ensuring a seamless user experience.",
      imageUrl: "src/assets/images/Biriyani.png"
    },
    {
      id: 3,
      name: "Emily Patel",
      role: "Head of Marketing",
      bio: "Emily leads our marketing initiatives to connect more users with amazing restaurant offers.",
      imageUrl: "src/assets/images/Biriyani.png"
    }
  ];

  return (
    <div className="about-page">
      <UserNavbar />
      
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Bhookh Buster</h1>
          <p>Connecting Food Lovers with Amazing Offers Since 2023</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Bhookh Buster was born out of a simple idea: making it easier for people to discover great food deals while helping restaurants connect with more customers. 
            </p>
            <p>
              In 2023, our founder noticed a disconnect between restaurant promotions and the people who would benefit from them. Many great offers went unnoticed, and food enthusiasts often missed out on amazing deals simply because they didn't know they existed.
            </p>
            <p>
              That's when Bhookh Buster was created – a community-driven platform where both restaurants and users could share, discover, and benefit from food offers and promotions.
            </p>
          </div>
          <div className="about-image">
            <img src="src/assets/images/spaghetti.jpg" alt="Bhookh Buster Story" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "src/assets/images/spaghetti.jpg";
              }}
            />
          </div>
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-container">
          <div className="mission-image">
            <img src="src/assets/images/spaghetti.jpg" alt="Our Mission" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "src/assets/images/spaghetti.jpg";
              }}
            />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Bhookh Buster, our mission is to create a thriving ecosystem where restaurant owners and food enthusiasts can connect meaningfully through offers and promotions.
            </p>
            <p>
              We believe in:
            </p>
            <ul>
              <li><strong>Community:</strong> Building a supportive network of food lovers and restaurants</li>
              <li><strong>Transparency:</strong> Ensuring all offers are authentic through community moderation</li>
              <li><strong>Accessibility:</strong> Making great food deals available to everyone</li>
              <li><strong>Empowerment:</strong> Giving users the tools to contribute and shape the platform</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.imageUrl} alt={member.name} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "src/assets/images/spaghetti.jpg";
                  }}
                />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Restaurants</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Active Offers</p>
          </div>
          <div className="stat-item">
            <h3>50,000+</h3>
            <p>Happy Users</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Cities Covered</p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We believe in the power of community and working together to create value for everyone.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We're constantly looking for new ways to improve the experience for both users and restaurants.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Authenticity</h3>
            <p>We strive to ensure that all offers on our platform are genuine and provide real value.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Growth</h3>
            <p>We're committed to growing our community and helping restaurants thrive.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/items/logo.png" alt="Bhookh Buster" />
            <p>Finding you the best food deals since 2023.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/offers">Special Offers</a></li>
              <li><a href="/rdashboard">Partner with us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@pocketbuddy.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bhookh Buster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;