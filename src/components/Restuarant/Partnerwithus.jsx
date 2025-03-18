import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import '../../assets/css/PartnerWithUs.css';

const PartnerWithUs = () => {
  return (
    <div className="partner-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="Food Image" className="hero-image" />
        <div className="hero-overlay">
          <h2>Partner with BHookhBuster!</h2>
          <p>Increase your online Offers</p>
        </div>
        
        {/* Get Started Box */}
        <div className="get-started-box">
          <h3>Get Started</h3>
          <p>Enter a mobile number or restaurant ID to continue</p>
          <div className="input-container">
            <input type="text" placeholder="Enter Restaurant ID / Mobile number" />
            <FaInfoCircle className="info-icon" />
          </div>
          <button disabled className="continue-btn">Continue</button>
          <p className="terms">By logging in, I agree  to BhookhBusters’s <a href="#">terms & conditions</a></p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <h2>In just <span className="highlight">3 easy steps</span></h2>
        <p className="subheading">Get your restaurant delivery-ready in 24hrs!</p>
        <div className="steps-list">
          <div className="step"><div className="step-number">1</div> Install the BHookhBuster Owner App</div>
          <div className="step"><div className="step-number">2</div> Login/Register using your phone number</div>
          <div className="step"><div className="step-number">3</div> Enter restaurant details</div>
        </div>
      </div>

      {/* Document Upload Section */}
      <div className="documents-section">
        <h3>For an easy form filling process,</h3>
        <p className="subheading">You can keep these documents handy.</p>
        
        <div className="document-list">
          <div className="document-card">
            <i className="fas fa-file-alt"></i>
            <p>FSSAI License Copy <a href="#" className="apply-link">Apply Here</a></p>
          </div>

          <div className="document-card">
            <i className="fas fa-utensils"></i>
            <p>Your Restaurant Menu</p>
          </div>

          <div className="document-card">
            <i className="fas fa-university"></i>
            <p>Bank Details</p>
          </div>

          <div className="document-card">
            <i className="fas fa-file-invoice-dollar"></i>
            <p>GSTIN <a href="#" className="apply-link">Apply Here</a></p>
          </div>

          <div className="document-card">
            <i className="fas fa-id-card"></i>
            <p>PAN Card Copy</p>
          </div>
        </div>
      </div>

    {/* <div className="steps-container">
      
      <div className="steps-section">
        <h2>
          In just <span className="highlight">3 easy steps</span>
        </h2>
        <p className="subheading">Get your restaurant delivery-ready in 24hrs!</p>
        <div className="steps-list">
          <div className="step">
            <div className="step-number">1</div>
            Install the BhookBuster Owner App
          </div>
          <div className="step">
            <div className="step-number">2</div>
            Login/Register using your phone number
          </div>
          <div className="step">
            <div className="step-number">3</div>
            Enter restaurant details
          </div>
        </div>
      </div>

      
      <div className="documents-section">
        <h3>For an easy form filling process,</h3>
        <p className="subheading">You can keep these documents handy.</p>

        <div className="document-list">
          <div className="document-card">
            <i className="fas fa-file-alt"></i>
            <p>
              FSSAI License Copy <a href="#" className="apply-link">Apply Here</a>
            </p>
          </div>

          <div className="document-card">
            <i className="fas fa-utensils"></i>
            <p>Your Restaurant Menu</p>
          </div>

          <div className="document-card">
            <i className="fas fa-university"></i>
            <p>Bank Details</p>
          </div>

          <div className="document-card">
            <i className="fas fa-file-invoice-dollar"></i>
            <p>
              GSTIN <a href="#" className="apply-link">Apply Here</a>
            </p>
          </div>

          <div className="document-card">
            <i className="fas fa-id-card"></i>
            <p>PAN Card Copy</p>
          </div>
        </div>
      </div>
    </div> */}

    </div>
  );
};

export default PartnerWithUs;