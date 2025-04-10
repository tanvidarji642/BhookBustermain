// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../assets/css/RDasboard/Rsidebar.css';
// import Rnav from './Rnav';
// import { FaHome, FaUtensils, FaTag, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

// const Rsidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear all localStorage items
//     localStorage.clear();
    
//     // Redirect to home page
//     navigate('/');
    
//     // Optional: Reload the page to ensure clean state
//     window.location.reload();
//   };

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleItem = (item) => {
//     if (expandedItem === item) {
//       setExpandedItem(null);
//     } else {
//       setExpandedItem(item);
//     }
//   };

//   return (
//     <>
//     <Rnav></Rnav>
    
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <div className="toggle-btn" onClick={toggleSidebar}>
//         {isOpen ? '☰' : '☰'}
//       </div>

//       <div className="sidebar-header">
//         <h4>Restaurant Dashboard</h4>
//       </div>
//       <div className="separator"></div>

//       <div className="sidebar-items">
//         <div className="sidebar-item">
//           <div className="item-header" onClick={() => toggleItem('restaurant')}>
//             <i className="icon">🍽</i>
//             <span>Restaurant</span>
//             <i className={`arrow ${expandedItem === 'restaurant' ? 'down' : 'right'}`}>▼</i>
//           </div>
//           {expandedItem === 'restaurant' && (
//             <div className="item-content">
//               <Link to="/add-restaurant" className="nav-link">
//                 <div className="sub-item">
//                   <i className="icon">➕</i>
//                   <span><h4>Add Restaurant</h4></span>
//                 </div>
//               </Link>
//               <div className="separator"></div>
//               <Link to="/add-branches" className="nav-link">
//                 <div className="sub-item">
//                   <i className="icon">🏢</i>
//                   <span><h4>Add Branches</h4></span>
//                 </div>
//               </Link>
//             </div>
//           )} 
//         </div>

//         <div className="separator"></div>

//         <div className="sidebar-item">
//           <div className="item-header" onClick={() => toggleItem('offers')}>
//             <i className="icon">🏷️</i>
//             <span>Offers</span>
//             <i className={`arrow ${expandedItem === 'offers' ? 'down' : 'right'}`}>▼</i>
//           </div>
//           {expandedItem === 'offers' && (
//             <div className="item-content">
//               <Link to="/add-offer" className="nav-link">
//                 <div className="sub-item">
//                   <i className="icon">➕</i>
//                   <span><h4>Add Offer</h4></span>
//                 </div>
//                 <div className="separator"></div>
//               </Link>
//               <Link to="/view-offers" className="nav-link">
//                 <div className="sub-item">
//                   <i className="icon">👁️</i>
//                   <span><h4>View Offers</h4></span>
//                 </div>
//               </Link>
//             </div>
//           )}
//         </div>
//         <div className="separator"></div>
       
//           <div className="sidebar-item">
//             <div className="item-header">
//               <i className="icon">🏢</i>
//               <span>View Branches</span>
//             </div>
//           </div>
      

//         <div className="separator"></div>

        
//           <div className="sidebar-item logout" onClick={handleLogout}>
//             <div className="item-header">
//               <i className="icon">🚪</i>
//               <span>Logout</span>
//             </div>
//           </div>
//           <div className="separator"></div>
     
//       </div>
//     </div>
//     </>
//   );
// };

// export default Rsidebar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Home, Store, ShoppingBag, 
  PlusCircle, Eye, LogOut, Coffee, ChevronLeft, ChevronRight
} from 'lucide-react';
import '../../assets/css/RDasboard/Rsidebar.css';
import Rnav from './Rnav';

const Rsidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Rnav />
      
      <div className={`restaurant-sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-brand">
          <Coffee size={24} />
          <h3 className={`brand-text ${!isOpen && 'hidden'}`}>Resto Admin</h3>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-section">
            <Link to="/dashboard" className="section-link">
              <Home size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>Dashboard</span>
            </Link>
          </div>

          <div className="sidebar-divider"></div>
          
          <div className="section-category">
            <span className={`category-text ${!isOpen && 'hidden'}`}>Restaurant</span>
          </div>

          <div className="sidebar-section">
            <Link to="/add-restaurant" className="section-link">
              <Store size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>Add Restaurant</span>
            </Link>
          </div>

          <div className="sidebar-section">
            <Link to="" className="section-link">
              <Eye size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>View Restaurant</span>
            </Link>
          </div>

          <div className="sidebar-divider"></div>
          
          <div className="section-category">
            <span className={`category-text ${!isOpen && 'hidden'}`}>Offers</span>
          </div>

          <div className="sidebar-section">
            <Link to="/add-offer" className="section-link">
              <PlusCircle size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>Add Offer</span>
            </Link>
          </div>

          <div className="sidebar-section">
            <Link to="/view-offers" className="section-link">
              <Eye size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>View Offers</span>
            </Link>
          </div>

          <div className="sidebar-divider"></div>
        </div>

        <div className="sidebar-footer">
          {/* Toggle button placed at the bottom of the sidebar */}
          <div className="toggle-container">
            <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
              {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              <span className={`toggle-text ${!isOpen && 'hidden'}`}>
                {isOpen ? "Collapse" : "Expand"}
              </span>
            </button>
          </div>
          
          <div className="sidebar-section logout">
            <Link to="/logout" className="section-link">
              <LogOut size={20} />
              <span className={`section-text ${!isOpen && 'hidden'}`}>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rsidebar;