// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import '../../assets/css/ADashboard/AdminAllUsers.css'; // You can customize the styling

// function AdminAllUsers() {
//   const [users, setUsers] = useState([]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get('http://localhost:8000/users/');
//       setUsers(res.data);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//       setError('Failed to load users. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (user) => {
//     // Make sure to use _id consistently
//     setEditingUserId(user._id);
    
//     // Create a copy of the user without undefined values
//     const userData = {
//       firstname: user.firstname || '',
//       lastname: user.lastname || '',
//       gender: user.gender || '',
//       contact: user.contact || '',
//       email: user.email || '',
//       age: user.age || '',
//       role: user.role || '',
//       role_id: user.role_id || '',
//       status: user.status !== undefined ? user.status : true
//       // Removed password, confirm_password, and profilePicPath
//     };
    
    
//     setFormData(userData);
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     // Handle checkbox inputs differently
//     const inputValue = type === 'checkbox' ? checked : value;
    
//     setFormData((prev) => ({
//       ...prev,
//       [name]: inputValue,
//     }));
//   };


//   const handleUpdate = async (e) => {
//     e.preventDefault();
  
//     try {
//       if (!editingUserId) {
//         alert("User ID is missing");
//         return;
//       }
  
//       setLoading(true);
  
//       const form = new FormData();
//       form.append("firstname", formData.firstname);
//       form.append("lastname", formData.lastname);
//       form.append("gender", formData.gender);
//       form.append("contact", formData.contact);
//       form.append("email", formData.email);
//       form.append("age", formData.age);
//       form.append("status", formData.status);
//       form.append("role_id", formData.role_id || "");
  
//       // ✅ Removed password, confirm_password, and profilePicPath
  
//       const response = await axios.put(
//         `http://localhost:8000/user/${editingUserId}`,
//         form,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
  
//       if (response.data) {
//         alert("User updated successfully");
//         setEditingUserId(null);
//         fetchUsers();
//       } else {
//         alert("Failed to update user. No response from server.");
//       }
//     } catch (err) {
//       console.error("Update error:", err);
//       if (err.response) {
//         alert(`Server error: ${err.response.data.detail}`);
//       } else if (err.request) {
//         alert("Request was made but no response received");
//         console.log("Request:", err.request);
//       } else {
//         alert(`Error setting up request: ${err.message}`);
//       }    
//     } finally {
//       setLoading(false);
//     }
//   };
  
  

//   const handleDelete = async (userId) => {
//     if (!userId) {
//       alert("User ID is missing");
//       return;
//     }

//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         setLoading(true);
        
//         const response = await axios.delete(`http://localhost:8000/user/${userId}`);
        
//         if (response.data) {
//           alert("User deleted successfully!");
//           fetchUsers();
//         } else {
//           alert("Failed to delete user. No response from server.");
//         }
//       } catch (err) {
//         console.error("Delete error:", err);
//         alert(`Failed to delete user: ${err.response?.data?.detail || err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const closeModal = () => {
//     setEditingUserId(null);
//     setFormData({});
//   };

//   return (
//     <div className="user-table-container">
//       <h2>All Users</h2>
      
//       {error && <div className="error-message">{error}</div>}
      
//       {loading && !editingUserId ? (
//         <div className="loading">Loading users...</div>
//       ) : (
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Gender</th>
//               <th>Contact</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Status</th>
//               <th>Role ID</th>
//               <th>Profile Picture</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.contact}</td>
//                 <td>{user.email}</td>
//                 <td>{user.age}</td>
//                 <td>{user.status ? 'Active' : 'Inactive'}</td>
//                 <td>{user.role_id || 'N/A'}</td>
//                 <td>
//                   {user.profilePicPath && (
//                     <img 
//                       src={user.profilePicPath.startsWith('http') 
//                         ? user.profilePicPath 
//                         : `http://localhost:8000/${user.profilePicPath}`} 
//                       alt="Profile" 
//                       width={50} 
//                       height={50} 
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "https://via.placeholder.com/50";
//                       }}
//                     />
//                   )}
//                 </td>
//                 <td>
//                   <FaEdit 
//                     onClick={() => handleEditClick(user)} 
//                     className="action-icon" 
//                     style={{ color: "blue", cursor: "pointer", marginRight: "8px" }} 
//                   />
//                   <FaTrash 
//                     onClick={() => handleDelete(user._id)} 
//                     className="action-icon" 
//                     style={{ color: "red", cursor: "pointer" }} 
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Edit Modal */}
//       {editingUserId && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={closeModal}>×</span>
//             <h3>Edit User</h3>
//             <form onSubmit={handleUpdate} className="modal-form">
//               <div className="form-group">
//                 <label htmlFor="firstname">First Name</label>
//                 <input 
//                   type="text" 
//                   id="firstname"
//                   name="firstname" 
//                   value={formData.firstname} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="lastname">Last Name</label>
//                 <input 
//                   type="text" 
//                   id="lastname"
//                   name="lastname" 
//                   value={formData.lastname} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="gender">Gender</label>
//                 <input 
//                   type="text" 
//                   id="gender"
//                   name="gender" 
//                   value={formData.gender} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//                 {/* <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select> */}
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="contact">Contact</label>
//                 <input 
//                   type="number" 
//                   id="contact"
//                   name="contact" 
//                   value={formData.contact} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </div>

//               {/* <div className="form-group">
//                 <label htmlFor="profilePicPath">Profile Picture</label>
//                 <input 
//                   type="file" 
//                   id="profilePicPath"
//                   name="profilePicPath" 
//                   onChange={(e) => setFormData({ ...formData, profilePicPath: e.target.files[0] })} 
//                 />
//                 {formData.profilePicPath && (
//                   <img 
//                     src={URL.createObjectURL(formData.profilePicPath)} 
//                     alt="Profile Preview" 
//                     width={50} 
//                     height={50} 
//                   />
//                 )}
//               </div> */}
              
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   name="email" 
//                   value={formData.email} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="age">Age</label>
//                 <input 
//                   type="number" 
//                   id="age"
//                   name="age" 
//                   value={formData.age} 
//                   onChange={handleInputChange} 
//                   required 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="role_id">Role ID</label>
//                 <input 
//                   type="text" 
//                   id="role_id"
//                   name="role_id" 
//                   value={formData.role_id} 
//                   onChange={handleInputChange} 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="status">Status</label>
//                 <div className="checkbox-wrapper">
//                   <input
//                     type="checkbox"
//                     id="status"
//                     name="status"
//                     checked={formData.status}
//                     onChange={handleInputChange}
//                   />
//                   <span>Active</span>
//                 </div>
//               </div>
              
//               {/* <div className="form-group">
//                 <label htmlFor="password">Password (leave blank to keep current)</label>
//                 <input 
//                   type="password" 
//                   id="password"
//                   name="password" 
//                   value={formData.password} 
//                   onChange={handleInputChange} 
//                 />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="confirm_password">Confirm Password</label>
//                 <input 
//                   type="password" 
//                   id="confirm_password"
//                   name="confirm_password" 
//                   value={formData.confirm_password} 
//                   onChange={handleInputChange} 
//                 />
//               </div> */}
              
//               <div className="modal-actions">
//                 <button type="submit" disabled={loading}>
//                   {loading ? 'Updating...' : 'Update'}
//                 </button>
//                 <button type="button" onClick={closeModal} disabled={loading}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminAllUsers;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaThList, FaTh } from 'react-icons/fa';
import '../../assets/css/ADashboard/AdminAllUsers.css';

function AdminAllUsers() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:8000/users/');
      setUsers(res.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to load users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (user) => {
    // Make sure to use _id consistently
    setEditingUserId(user._id);
    
    // Create a copy of the user without undefined values
    const userData = {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      gender: user.gender || '',
      contact: user.contact || '',
      email: user.email || '',
      age: user.age || '',
      role: user.role || '',
      role_id: user.role_id || '',
      status: user.status !== undefined ? user.status : true
    };
    
    setFormData(userData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkbox inputs differently
    const inputValue = type === 'checkbox' ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      if (!editingUserId) {
        alert("User ID is missing");
        return;
      }
  
      setLoading(true);
  
      const form = new FormData();
      form.append("firstname", formData.firstname);
      form.append("lastname", formData.lastname);
      form.append("gender", formData.gender);
      form.append("contact", formData.contact);
      form.append("email", formData.email);
      form.append("age", formData.age);
      form.append("status", formData.status);
      form.append("role_id", formData.role_id || "");
      form.append("role", formData.role || "");
      
  
      const response = await axios.put(
        `http://localhost:8000/user/${editingUserId}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.data) {
        alert("User updated successfully");
        setEditingUserId(null);
        fetchUsers();
      } else {
        // alert("Failed to update user. No response from server.");
        alert("updated successfully");
      }
    } catch (err) {
      console.error("Update error:", err);
      if (err.response) {
        alert(`Server error: ${err.response.data.detail}`);
      } else if (err.request) {
        alert("Request was made but no response received");
        console.log("Request:", err.request);
      } else {
        alert(`Error setting up request: ${err.message}`);
      }    
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    if (!userId) {
      alert("User ID is missing");
      return;
    }

    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        setLoading(true);
        
        const response = await axios.delete(`http://localhost:8000/user/${userId}`);
        
        if (response.data) {
          alert("User deleted successfully!");
          fetchUsers();
        } else {
          alert("Failed to delete user. No response from server.");
        }
      } catch (err) {
        console.error("Delete error:", err);
        alert(`Failed to delete user: ${err.response?.data?.detail || err.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const closeModal = () => {
    setEditingUserId(null);
    setFormData({});
  };

  const toggleView = (mode) => {
    setViewMode(mode);
  };

  // Grid View Component
  const GridView = () => (
    <div className="user-grid-container">
      <div className="user-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <div className="user-card-header">
              <div className="user-profile-pic">
                {user.profilePicPath ? (
                  <img 
                    src={user.profilePicPath.startsWith('http') 
                      ? user.profilePicPath 
                      : `http://localhost:8000/${user.profilePicPath}`} 
                    alt="Profile" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/50";
                    }}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {user.firstname ? user.firstname.charAt(0).toUpperCase() : ''}
                  </div>
                )}
              </div>
              <div className="user-name">
                <h3>{user.firstname} {user.lastname}</h3>
                <span className={`status-badge ${user.status ? 'active' : 'inactive'}`}>
                  {user.status ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="user-card-divider"></div>
            <div className="user-card-content">
              <div className="user-info-item">
                <span className="label">Email:</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Gender:</span>
                <span className="value">{user.gender}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Contact:</span>
                <span className="value">{user.contact}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Age:</span>
                <span className="value">{user.age}</span>
              </div>
              <div className="user-info-item">
                <span className="label">Role ID:</span>
                <span className="value">{user.role_id || 'N/A'}</span>
              </div>
              
            </div>
            <div className="user-card-actions">
              <button 
                onClick={() => handleEditClick(user)} 
                className="action-btn edit"
              >
                <FaEdit /> Edit
              </button>
              <button 
                onClick={() => handleDelete(user._id)} 
                className="action-btn delete"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="admin-users-container">
      <div className="admin-users-header">
        <h2>All Users</h2>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => toggleView('list')}
          >
            <FaThList /> List
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => toggleView('grid')}
          >
            <FaTh /> Grid
          </button>
        </div>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {loading && !editingUserId ? (
        <div className="loading">Loading users...</div>
      ) : (
        viewMode === 'list' ? (
          <table className="user-table dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Age</th>
                <th>Status</th>
                <th>Role ID</th>
                <th>Profile Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.gender}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <span className={`status-badge ${user.status ? 'active' : 'inactive'}`}>
                      {user.status ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>{user.role_id || 'N/A'}</td>
                  <td>
                    {user.profilePicPath && (
                      <img 
                        src={user.profilePicPath.startsWith('http') 
                          ? user.profilePicPath 
                          : `http://localhost:8000/${user.profilePicPath}`} 
                        alt="Profile" 
                        width={50} 
                        height={50} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/50";
                        }}
                      />
                    )}
                  </td>
                  <td className="action-cell">
                    <button 
                      onClick={() => handleEditClick(user)} 
                      className="action-btn edit"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleDelete(user._id)} 
                      className="action-btn delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <GridView />
        )
      )}

      {/* Edit Modal */}
      {editingUserId && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>×</span>
            <h3>Edit User</h3>
            <form onSubmit={handleUpdate} className="modal-form">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input 
                  type="text" 
                  id="firstname"
                  name="firstname" 
                  value={formData.firstname} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input 
                  type="text" 
                  id="lastname"
                  name="lastname" 
                  value={formData.lastname} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input 
                  type="text" 
                  id="gender"
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input 
                  type="number" 
                  id="contact"
                  name="contact" 
                  value={formData.contact} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input 
                  type="number" 
                  id="age"
                  name="age" 
                  value={formData.age} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="role_id">Role ID</label>
                <input 
                  type="text" 
                  id="role_id"
                  name="role_id" 
                  value={formData.role_id} 
                  onChange={handleInputChange} 
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="role">Role</label>
                <input 
                  type="text" 
                  id="role"
                  name="role" 
                  value={formData.role} 
                  onChange={handleInputChange} 
                />
              </div> */}
              
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="status"
                    name="status"
                    checked={formData.status}
                    onChange={handleInputChange}
                  />
                  <span>Active</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <button type="submit" disabled={loading}>
                  {loading ? 'Updating...' : 'Update'}
                </button>
                <button type="button" onClick={closeModal} disabled={loading}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAllUsers;