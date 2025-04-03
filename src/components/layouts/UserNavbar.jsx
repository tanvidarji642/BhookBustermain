// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../../assets/css/adminlte.min.css';

// const UserNavbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userId, setUserId] = useState('');
//   const [profilePic, setProfilePic] = useState('/assets/items/default-profile.png'); // Default profile pic
  
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme ? savedTheme === 'dark' : true;
//   });

//   const fetchUserData = async (id) => {
//     try {
//       const response = await axios.get(`/api/users/${id}`);
      
//       if (response.data && response.data.data && response.data.data.profilePicPath) {
//         const profileImageUrl = response.data.data.profilePicPath;
//         setProfilePic(profileImageUrl);
//         localStorage.setItem("profilePicPath", profileImageUrl);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       const storedProfilePic = localStorage.getItem("profilePicPath");
//       if (storedProfilePic) {
//         setProfilePic(storedProfilePic);
//       }
//     }
//   };

//   useEffect(() => {
//     const storedId = localStorage.getItem("id");
    
//     if (storedId) {
//       setIsLoggedIn(true);
//       setUserId(storedId);
      
//       const storedProfilePic = localStorage.getItem("profilePicPath");
//       if (storedProfilePic) {
//         setProfilePic(storedProfilePic);
//       }
      
//       fetchUserData(storedId);
//     }
//   }, []);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
//     if (darkMode) {
//       document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//       document.documentElement.setAttribute('data-theme', 'light');
//     }
//   }, [darkMode]);

//   const handleLogout = () => {
//     localStorage.removeItem("id");
//     localStorage.removeItem("profilePicPath");
  
//     setIsLoggedIn(false);
//     setUserId('');
//     setProfilePic('/assets/items/default-profile.png');
    
//     navigate('/');
//   };

//   useEffect(() => {
//     console.log("Current profile pic:", profilePic);
//   }, [profilePic]);

//   return (
//     <nav className="navbar">
      
      
//       <div className="navbar">
//   <div className="navbar-logo-container">
//     <Link to="/">
//       <img src={"/assets/items/logo.png"} alt="BHOOKBUSTER" className="navbar-logo" />
//     </Link>
//     <div className="navbar-left">
//         <Link to="/home">Home</Link>
//         <Link to="/about">About Us</Link>
//         {/* <Link to="/menu">Menu</Link> */}
//         <Link to="/offers">Special Offers</Link>
//       </div>
//   </div>
 
// </div>


//       <div className="navbar-right">
     
//         <Link to="/rdashboard">Partner with us</Link>
        
//         <button
//           onClick={toggleTheme}
//           className="theme-toggle"
//           aria-label="Toggle theme"
//           style={{
//             background: 'none',
//             border: '1px solid var(--border-color)',
//             borderRadius: '4px',
//             padding: '0.5rem 0.75rem',
//             color: 'var(--text-color)',
//             cursor: 'pointer',
//             transition: 'var(--transition)'
//           }}
//         >
//           {darkMode ? '☀️ Light' : '🌙 Dark'}
//         </button>
        
//         {isLoggedIn ? (
//           <>
//             <button
//               onClick={handleLogout}
//               className="logout-btn"
//               style={{
//                 background: 'none',
//                 border: '1px solid var(--border-color)',
//                 borderRadius: '4px',
//                 padding: '0.5rem 0.75rem',
//                 color: 'var(--text-color)',
//                 cursor: 'pointer',
//                 transition: 'var(--transition)',
//                 marginLeft: '10px'
//               }}
//             >
//               Logout
//             </button>
            
//             <Link to="/profile" className="profile-link">
//               <img 
//                 src={profilePic} 
//                 alt="Profile" 
//                 className="profile-pic"
//                 style={{
//                   width: '35px',
//                   height: '35px',
//                   borderRadius: '50%',
//                   objectFit: 'cover',
//                   marginLeft: '10px',
//                   border: '2px solid var(--border-color)'
//                 }}
//                 onError={(e) => {
//                   e.target.onerror = null; 
//                   e.target.src = '/assets/items/default-profile.png';
//                 }}
//               />
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link to="login">Login</Link>
//             <Link to="signup">Sign Up</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/adminlte.min.css';

const UserNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [profilePic, setProfilePic] = useState('/assets/items/default-profile.png');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    if (storedId) {
      setIsLoggedIn(true);
      setUserId(storedId);
      const storedProfilePic = localStorage.getItem("profilePicPath");
      if (storedProfilePic) {
        setProfilePic(storedProfilePic);
      }
      fetchUserData(storedId);
    }
  }, [userId]); // Re-fetch if userId changes

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      if (response.data?.data?.profilePicPath) {
        const profileImageUrl = response.data.data.profilePicPath;
        setProfilePic(profileImageUrl);
        localStorage.setItem("profilePicPath", profileImageUrl);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      const storedProfilePic = localStorage.getItem("profilePicPath");
      if (storedProfilePic) {
        setProfilePic(storedProfilePic);
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("profilePicPath");
    setIsLoggedIn(false);
    setUserId('');
    setProfilePic('/assets/items/default-profile.png');
    navigate('/');
    setTimeout(() => window.location.reload(), 500); // Ensure full logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link to="/">
          <img src="/assets/items/logo.png" alt="BHOOKBUSTER" className="navbar-logo" />
        </Link>
      </div>
      
      <div className="navbar-left">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        {/* <Link to="/menu">Menu</Link> */}
        <Link to="/offers">Special Offers</Link>
      </div>

      <div className="navbar-right">
        <Link to="/rdashboard">Partner with us</Link>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            padding: '0.5rem 0.75rem',
            color: 'var(--text-color)',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="logout-btn"
              style={{
                background: 'none',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                padding: '0.5rem 0.75rem',
                color: 'var(--text-color)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                marginLeft: '10px'
              }}
            >
              Logout
            </button>

            {/* <Link to="/profile" className="profile-link">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="profile-pic"
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginLeft: '10px',
                  border: '2px solid var(--border-color)'
                }}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/assets/items/default-profile.png';
                }}
              />
            </Link> */}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
