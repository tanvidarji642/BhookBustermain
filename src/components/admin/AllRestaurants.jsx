// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../../assets/css/ADashboard/AllRestaurants.css';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// function AllRestaurants() {
//   const [locations, setLocations] = useState([]);
//   const [editingLocation, setEditingLocation] = useState(null);
//   const [formData, setFormData] = useState({});

//   // Fetch data
//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   const fetchLocations = () => {
//     axios.get('http://localhost:8000/locations')
//       .then(res => setLocations(res.data))
//       .catch(err => console.error(err));
//   };

//   // Handle delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this location?")) {
//       axios.delete(`http://localhost:8000/location/${id}`)
//         .then(() => {
//           setLocations(prev => prev.filter(loc => loc.id !== id && loc._id !== id));
//         })
//         .catch(err => console.error('Delete error:', err));
//     }
//   };
  
//   // Open edit modal
//   const handleEdit = (location) => {
//     setEditingLocation(location.id || location._id);
//     setFormData({ ...location });
//   };
  

//   // Handle form input change
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   // Submit updated data
//   const handleUpdate = () => {
//     axios.put(`http://localhost:8000/location/${editingLocation}`, formData)
//       .then(() => {
//         alert("Location updated successfully!");
//         setEditingLocation(null);
//         fetchLocations();
//       })
//       .catch(err => console.error('Update error:', err));
//   };
  
  

//   return (
//     <div className="table-container">
//       <h2 className="table-title">All Locations</h2>
//       <table className="custom-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Contact</th>
//             <th>Address</th>
//             <th>Timings</th>
//             <th>Active</th>
//             <th>Food Type</th>
//             <th>Latitude</th>
//             <th>Longitude</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {locations.map((loc, index) => (
//             <tr key={index}>
//               <td>{loc.id}</td>
//               <td>{loc.title}</td>
//               <td>{loc.category}</td>
//               <td>{loc.description}</td>
//               <td>{loc.contactNumber}</td>
//               <td>{loc.address}</td>
//               <td>{loc.timings}</td>
//               <td>{loc.active ? 'Yes' : 'No'}</td>
//               <td>{loc.foodType}</td>
//               <td>{loc.latitude}</td>
//               <td>{loc.longtitude ?? 'N/A'}</td>
//               <td>
//                 <FaEdit className="action-icon edit-icon" onClick={() => handleEdit(loc)} />
//                 <FaTrash className="action-icon delete-icon" onClick={() => handleDelete(loc.id || loc._id)} />


//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Edit Modal */}
//         {editingLocation && (
//         <div className="modal">
//             <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingLocation(null)}>×</span>
//             <h3 className="modal-title">Edit Location</h3>
//             <div className="modal-form">
//                 <div className="form-group">
//                 <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
//                 <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
//                 <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//                 <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
//                 <input type="text" name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" />
//                 <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" />
//                 <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
//                 <input type="number" name="longtitude" value={formData.longtitude || ''} onChange={handleChange} placeholder="Longitude" />
//                 </div>
//                 <div className="modal-actions">
//                 <button className="btn-save" onClick={handleUpdate}>Save</button>
//                 <button className="btn-cancel" onClick={() => setEditingLocation(null)}>Cancel</button>
//                 </div>
//             </div>
//             </div>
//         </div>
//         )}

//     </div>
//   );
// }

// export default AllRestaurants;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaEye, FaList, FaThLarge } from 'react-icons/fa';

// function AllRestaurants() {
//   const [locations, setLocations] = useState([]);
//   const [editingLocation, setEditingLocation] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
//   const [viewingLocation, setViewingLocation] = useState(null);

//   // Fetch data
//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   const fetchLocations = () => {
//     axios.get('http://localhost:8000/locations')
//       .then(res => setLocations(res.data))
//       .catch(err => console.error(err));
//   };

//   // Handle delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this location?")) {
//       axios.delete(`http://localhost:8000/location/${id}`)
//         .then(() => {
//           setLocations(prev => prev.filter(loc => loc.id !== id && loc._id !== id));
//         })
//         .catch(err => console.error('Delete error:', err));
//     }
//   };
  
//   // Open edit modal
//   const handleEdit = (location) => {
//     setEditingLocation(location.id || location._id);
//     setFormData({ ...location });
//   };
  
//   // Open view modal
//   const handleView = (location) => {
//     setViewingLocation(location);
//   };

//   // Handle form input change
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   // Submit updated data
//   const handleUpdate = () => {
//     axios.put(`http://localhost:8000/location/${editingLocation}`, formData)
//       .then(() => {
//         alert("Location updated successfully!");
//         setEditingLocation(null);
//         fetchLocations();
//       })
//       .catch(err => console.error('Update error:', err));
//   };
  
//   // Toggle view mode between table and grid
//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="header-container">
//         <h2 className="table-title">All Locations</h2>
//         <div className="view-toggles">
//           <button 
//             className={`view-toggle ${viewMode === 'table' ? 'active' : ''}`} 
//             onClick={() => toggleViewMode('table')}
//           >
//             <FaList /> List View
//           </button>
//           <button 
//             className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`} 
//             onClick={() => toggleViewMode('grid')}
//           >
//             <FaThLarge /> Grid View
//           </button>
//         </div>
//       </div>

//       {viewMode === 'table' ? (
//         <div className="table-container">
//           <table className="custom-table dark-theme">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Description</th>
//                 <th>Contact</th>
//                 <th>Address</th>
//                 <th>Timings</th>
//                 <th>Active</th>
//                 <th>Food Type</th>
//                 <th>Latitude</th>
//                 <th>Longitude</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {locations.map((loc, index) => (
//                 <tr key={index}>
//                   <td>{loc.id || loc._id}</td>
//                   <td>{loc.title}</td>
//                   <td>{loc.category}</td>
//                   <td className="description-cell">{loc.description}</td>
//                   <td>{loc.contactNumber}</td>
//                   <td>{loc.address}</td>
//                   <td>{loc.timings}</td>
//                   <td>{loc.active ? 'Yes' : 'No'}</td>
//                   <td>{loc.foodType}</td>
//                   <td>{loc.latitude}</td>
//                   <td>{loc.longtitude ?? 'N/A'}</td>
//                   <td className="actions-cell">
//                     <FaEye className="action-icon view-icon" onClick={() => handleView(loc)} title="View" />
//                     <FaEdit className="action-icon edit-icon" onClick={() => handleEdit(loc)} title="Edit" />
//                     <FaTrash className="action-icon delete-icon" onClick={() => handleDelete(loc.id || loc._id)} title="Delete" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="grid-container">
//           {locations.map((loc, index) => (
//             <div key={index} className="grid-item">
//               <div className="grid-header">
//                 <h3>{loc.title}</h3>
//                 <div className="grid-actions">
//                   <FaEye className="action-icon view-icon" onClick={() => handleView(loc)} />
//                   <FaEdit className="action-icon edit-icon" onClick={() => handleEdit(loc)} />
//                   <FaTrash className="action-icon delete-icon" onClick={() => handleDelete(loc.id || loc._id)} />
//                 </div>
//               </div>
//               <div className="grid-body">
//                 <p><strong>Category:</strong> {loc.category}</p>
//                 <p><strong>Food Type:</strong> {loc.foodType}</p>
//                 <p><strong>Address:</strong> {loc.address}</p>
//                 <p><strong>Contact:</strong> {loc.contactNumber}</p>
//                 <p><strong>Timings:</strong> {loc.timings}</p>
//                 <p><strong>Status:</strong> {loc.active ? 'Active' : 'Inactive'}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingLocation && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingLocation(null)}>×</span>
//             <h3 className="modal-title">Edit Location</h3>
//             <div className="modal-form">
//               <div className="form-group">
//                 <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
//                 <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
//                 <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
//                 <input type="text" name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" />
//                 <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" />
//                 <div className="form-row">
//                   <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
//                   <input type="number" name="longtitude" value={formData.longtitude || ''} onChange={handleChange} placeholder="Longitude" />
//                 </div>
//                 <div className="form-row">
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="active" 
//                       checked={!!formData.active} 
//                       onChange={(e) => setFormData({...formData, active: e.target.checked})} 
//                     />
//                     Active
//                   </label>
//                 </div>
//               </div>
//               <div className="modal-actions">
//                 <button className="btn-save" onClick={handleUpdate}>Save</button>
//                 <button className="btn-cancel" onClick={() => setEditingLocation(null)}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Modal */}
//       {viewingLocation && (
//         <div className="modal">
//           <div className="modal-content view-modal">
//             <span className="close-btn" onClick={() => setViewingLocation(null)}>×</span>
//             <h3 className="modal-title">{viewingLocation.title}</h3>
//             <div className="location-details">
//               <div className="detail-row">
//                 <span className="detail-label">ID:</span>
//                 <span className="detail-value">{viewingLocation.id || viewingLocation._id}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Category:</span>
//                 <span className="detail-value">{viewingLocation.category}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Description:</span>
//                 <span className="detail-value">{viewingLocation.description}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Contact:</span>
//                 <span className="detail-value">{viewingLocation.contactNumber}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Address:</span>
//                 <span className="detail-value">{viewingLocation.address}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Timings:</span>
//                 <span className="detail-value">{viewingLocation.timings}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Status:</span>
//                 <span className="detail-value">{viewingLocation.active ? 'Active' : 'Inactive'}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Food Type:</span>
//                 <span className="detail-value">{viewingLocation.foodType}</span>
//               </div>
//               <div className="detail-row">
//                 <span className="detail-label">Coordinates:</span>
//                 <span className="detail-value">
//                   {viewingLocation.latitude}, {viewingLocation.longtitude || 'N/A'}
//                 </span>
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn-edit" onClick={() => {
//                 handleEdit(viewingLocation);
//                 setViewingLocation(null);
//               }}>Edit</button>
//               <button className="btn-close" onClick={() => setViewingLocation(null)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllRestaurants;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaEye, FaThList, FaThLarge } from 'react-icons/fa';
// import '../../assets/css/ADashboard/AllRestaurants.css';

// function AllRestaurants() {
//   const [locations, setLocations] = useState([]);
//   const [editingLocation, setEditingLocation] = useState(null);
//   const [viewingLocation, setViewingLocation] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

//   // Fetch data
//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   const fetchLocations = () => {
//     axios.get('http://localhost:8000/locations')
//       .then(res => setLocations(res.data))
//       .catch(err => console.error(err));
//   };

//   // Handle delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this location?")) {
//       axios.delete(`http://localhost:8000/location/${id}`)
//         .then(() => {
//           setLocations(prev => prev.filter(loc => loc.id !== id && loc._id !== id));
//         })
//         .catch(err => console.error('Delete error:', err));
//     }
//   };
  
//   // Open edit modal
//   const handleEdit = (location) => {
//     setEditingLocation(location.id || location._id);
//     setFormData({ ...location });
//   };
  
//   // Open view modal
//   const handleView = (location) => {
//     setViewingLocation(location);
//   };

//   // Handle form input change
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   // Submit updated data
//   const handleUpdate = () => {
//     axios.put(`http://localhost:8000/location/${editingLocation}`, formData)
//       .then(() => {
//         alert("Location updated successfully!");
//         setEditingLocation(null);
//         fetchLocations();
//       })
//       .catch(err => console.error('Update error:', err));
//   };
  
//   // Toggle view mode
//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };

//   return (
//     <div className="restaurants-container">
//       <div className="header-container">
//         <h2 className="table-title">All Locations</h2>
//         <div className="view-toggle">
//           <button 
//             className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
//             onClick={() => toggleViewMode('list')}
//           >
//             <FaThList /> List
//           </button>
//           <button 
//             className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
//             onClick={() => toggleViewMode('grid')}
//           >
//             <FaThLarge /> Grid
//           </button>
//         </div>
//       </div>

//       {viewMode === 'list' ? (
//         <div className="table-container">
//           <table className="custom-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Description</th>
//                 <th>Contact</th>
//                 <th>Address</th>
//                 <th>Timings</th>
//                 <th>Active</th>
//                 <th>Food Type</th>
//                 <th>Location</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {locations.map((loc, index) => (
//                 <tr key={index}>
//                   <td>{loc.id || loc._id}</td>
//                   <td>{loc.title}</td>
//                   <td>{loc.category}</td>
//                   <td className="description-cell">{loc.description}</td>
//                   <td>{loc.contactNumber}</td>
//                   <td>{loc.address}</td>
//                   <td>{loc.timings}</td>
//                   <td>{loc.active ? 'Yes' : 'No'}</td>
//                   <td>{loc.foodType}</td>
//                   <td>{`${loc.latitude}, ${loc.longtitude || 'N/A'}`}</td>
//                   <td className="actions-cell">
//                     <div className="action-buttons">
//                       <button className="action-btn view-btn" onClick={() => handleView(loc)}>
//                         <FaEye />
//                       </button>
//                       <button className="action-btn edit-btn" onClick={() => handleEdit(loc)}>
//                         <FaEdit />
//                       </button>
//                       <button className="action-btn delete-btn" onClick={() => handleDelete(loc.id || loc._id)}>
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="grid-container">
//           {locations.map((loc, index) => (
//             <div key={index} className="grid-card">
//               <div className="card-header">
//                 <h3>{loc.title}</h3>
//                 <span className="category-badge">{loc.category}</span>
//               </div>
//               <div className="card-body">
//                 <p className="description">{loc.description}</p>
//                 <div className="info-row">
//                   <span className="info-label">Contact:</span>
//                   <span className="info-value">{loc.contactNumber}</span>
//                 </div>
//                 <div className="info-row">
//                   <span className="info-label">Address:</span>
//                   <span className="info-value">{loc.address}</span>
//                 </div>
//                 <div className="info-row">
//                   <span className="info-label">Timings:</span>
//                   <span className="info-value">{loc.timings}</span>
//                 </div>
//                 <div className="info-row">
//                   <span className="info-label">Status:</span>
//                   <span className={`status-badge ${loc.active ? 'active' : 'inactive'}`}>
//                     {loc.active ? 'Active' : 'Inactive'}
//                   </span>
//                 </div>
//               </div>
//               <div className="card-footer">
//                 <button className="action-btn view-btn" onClick={() => handleView(loc)}>
//                   <FaEye /> View
//                 </button>
//                 <button className="action-btn edit-btn" onClick={() => handleEdit(loc)}>
//                   <FaEdit /> Edit
//                 </button>
//                 <button className="action-btn delete-btn" onClick={() => handleDelete(loc.id || loc._id)}>
//                   <FaTrash /> Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingLocation && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingLocation(null)}>×</span>
//             <h3 className="modal-title">Edit Location</h3>
//             <div className="modal-form">
//               <div className="form-group">
//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Title</label>
//                     <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
//                   </div>
//                   <div className="form-field">
//                     <label>Category</label>
//                     <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-field full-width">
//                     <label>Description</label>
//                     <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Contact Number</label>
//                     <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
//                   </div>
//                   <div className="form-field">
//                     <label>Food Type</label>
//                     <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-field full-width">
//                     <label>Address</label>
//                     <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Timings</label>
//                     <input type="text" name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" />
//                   </div>
//                   <div className="form-field">
//                     <label>Active</label>
//                     <select name="active" value={formData.active} onChange={handleChange}>
//                       <option value={true}>Yes</option>
//                       <option value={false}>No</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Latitude</label>
//                     <input type="number" step="0.000001" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
//                   </div>
//                   <div className="form-field">
//                     <label>Longitude</label>
//                     <input type="number" step="0.000001" name="longtitude" value={formData.longtitude || ''} onChange={handleChange} placeholder="Longitude" />
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-actions">
//                 <button className="btn-save" onClick={handleUpdate}>Save</button>
//                 <button className="btn-cancel" onClick={() => setEditingLocation(null)}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Modal */}
//       {viewingLocation && (
//         <div className="modal">
//           <div className="modal-content view-modal">
//             <span className="close-btn" onClick={() => setViewingLocation(null)}>×</span>
//             <h3 className="modal-title">{viewingLocation.title}</h3>
//             <div className="view-content">
//               <div className="view-section">
//                 <h4>Basic Information</h4>
//                 <div className="view-row">
//                   <span className="view-label">ID:</span>
//                   <span className="view-value">{viewingLocation.id || viewingLocation._id}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Category:</span>
//                   <span className="view-value">{viewingLocation.category}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Food Type:</span>
//                   <span className="view-value">{viewingLocation.foodType}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Status:</span>
//                   <span className={`status-badge ${viewingLocation.active ? 'active' : 'inactive'}`}>
//                     {viewingLocation.active ? 'Active' : 'Inactive'}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="view-section">
//                 <h4>Description</h4>
//                 <p className="view-description">{viewingLocation.description}</p>
//               </div>
              
//               <div className="view-section">
//                 <h4>Contact Details</h4>
//                 <div className="view-row">
//                   <span className="view-label">Phone:</span>
//                   <span className="view-value">{viewingLocation.contactNumber}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Address:</span>
//                   <span className="view-value">{viewingLocation.address}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Timings:</span>
//                   <span className="view-value">{viewingLocation.timings}</span>
//                 </div>
//               </div>
              
//               <div className="view-section">
//                 <h4>Location Coordinates</h4>
//                 <div className="view-row">
//                   <span className="view-label">Latitude:</span>
//                   <span className="view-value">{viewingLocation.latitude}</span>
//                 </div>
//                 <div className="view-row">
//                   <span className="view-label">Longitude:</span>
//                   <span className="view-value">{viewingLocation.longtitude || 'N/A'}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn-primary" onClick={() => {
//                 setViewingLocation(null);
//                 handleEdit(viewingLocation);
//               }}>Edit</button>
//               <button className="btn-cancel" onClick={() => setViewingLocation(null)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllRestaurants;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaEye, FaThList, FaThLarge } from 'react-icons/fa';
import '../../assets/css/ADashboard/AllRestaurants.css';

function AllRestaurants() {
  const [locations, setLocations] = useState([]);
  const [editingLocation, setEditingLocation] = useState(null);
  const [viewingLocation, setViewingLocation] = useState(null);
  const [formData, setFormData] = useState({});
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  // Fetch data
  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    axios.get('http://localhost:8000/locations')
      .then(res => setLocations(res.data))
      .catch(err => console.error(err));
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this location?")) {
      axios.delete(`http://localhost:8000/location/${id}`)
        .then(() => {
          setLocations(prev => prev.filter(loc => loc.id !== id && loc._id !== id));
        })
        .catch(err => console.error('Delete error:', err));
    }
  };
  
  // Open edit modal
  const handleEdit = (location) => {
    setEditingLocation(location.id || location._id);
    setFormData({ ...location });
  };
  
  // Open view modal
  const handleView = (location) => {
    setViewingLocation(location);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Submit updated data
  const handleUpdate = () => {
    axios.put(`http://localhost:8000/location/${editingLocation}`, formData)
      .then(() => {
        alert("Location updated successfully!");
        setEditingLocation(null);
        fetchLocations();
      })
      .catch(err => console.error('Update error:', err));
  };
  
  // Toggle view mode
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="restaurants-container dark-theme">
      <div className="header-container">
        <h2 className="table-title">All Locations</h2>
        <div className="view-toggle">
          <button 
            className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
            onClick={() => toggleViewMode('list')}
          >
            <FaThList /> List
          </button>
          <button 
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
            onClick={() => toggleViewMode('grid')}
          >
            <FaThLarge /> Grid
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="table-container">
          <table className="custom-table dark-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Timings</th>
                <th>Active</th>
                <th>Food Type</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc, index) => (
                <tr key={index} className="table-row-divider">
                  <td className="table-cell-divider">{loc.id || loc._id}</td>
                  <td className="table-cell-divider">{loc.title}</td>
                  <td className="table-cell-divider">{loc.category}</td>
                  <td className="table-cell-divider description-cell">{loc.description}</td>
                  <td className="table-cell-divider">{loc.contactNumber}</td>
                  <td className="table-cell-divider">{loc.address}</td>
                  <td className="table-cell-divider">{loc.timings}</td>
                  <td className="table-cell-divider">{loc.active ? 'Yes' : 'No'}</td>
                  <td className="table-cell-divider">{loc.foodType}</td>
                  <td className="table-cell-divider">{`${loc.latitude}, ${loc.longtitude || 'N/A'}`}</td>
                  <td className="table-cell-divider actions-cell">
                    <div className="action-buttons">
                      <button className="action-btn view-btn" onClick={() => handleView(loc)}>
                        <FaEye />
                      </button>
                      <button className="action-btn edit-btn" onClick={() => handleEdit(loc)}>
                        <FaEdit />
                      </button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(loc.id || loc._id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid-container">
          {locations.map((loc, index) => (
            <div key={index} className="grid-card dark-card">
              <div className="card-header">
                <h3>{loc.title}</h3>
                <span className="category-badge">{loc.category}</span>
              </div>
              <div className="card-body">
                <p className="description">{loc.description}</p>
                <div className="info-row">
                  <span className="info-label">Contact:</span>
                  <span className="info-value">{loc.contactNumber}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{loc.address}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Timings:</span>
                  <span className="info-value">{loc.timings}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Status:</span>
                  <span className={`status-badge ${loc.active ? 'active' : 'inactive'}`}>
                    {loc.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="action-btn view-btn card-btn" onClick={() => handleView(loc)}>
                  <FaEye /> <span className="btn-text">View</span>
                </button>
                <button className="action-btn edit-btn card-btn" onClick={() => handleEdit(loc)}>
                  <FaEdit /> <span className="btn-text">Edit</span>
                </button>
                <button className="action-btn delete-btn card-btn" onClick={() => handleDelete(loc.id || loc._id)}>
                  <FaTrash /> <span className="btn-text">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingLocation && (
        <div className="modal">
          <div className="modal-content dark-modal">
            <span className="close-btn" onClick={() => setEditingLocation(null)}>×</span>
            <h3 className="modal-title">Edit Location</h3>
            <div className="modal-form">
              <div className="form-group">
                <div className="form-row">
                  <div className="form-field">
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                  </div>
                  <div className="form-field">
                    <label>Category</label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field full-width">
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Contact Number</label>
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
                  </div>
                  <div className="form-field">
                    <label>Food Type</label>
                    <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field full-width">
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Timings</label>
                    <input type="text" name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" />
                  </div>
                  <div className="form-field">
                    <label>Active</label>
                    <select name="active" value={formData.active} onChange={handleChange}>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Latitude</label>
                    <input type="number" step="0.000001" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
                  </div>
                  <div className="form-field">
                    <label>Longitude</label>
                    <input type="number" step="0.000001" name="longtitude" value={formData.longtitude || ''} onChange={handleChange} placeholder="Longitude" />
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button className="btn-save" onClick={handleUpdate}>Save</button>
                <button className="btn-cancel" onClick={() => setEditingLocation(null)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewingLocation && (
        <div className="modal">
          <div className="modal-content view-modal dark-modal">
            <span className="close-btn" onClick={() => setViewingLocation(null)}>×</span>
            <h3 className="modal-title">{viewingLocation.title}</h3>
            <div className="view-content">
              <div className="view-section">
                <h4>Basic Information</h4>
                <div className="view-row">
                  <span className="view-label">ID:</span>
                  <span className="view-value">{viewingLocation.id || viewingLocation._id}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Category:</span>
                  <span className="view-value">{viewingLocation.category}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Food Type:</span>
                  <span className="view-value">{viewingLocation.foodType}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Status:</span>
                  <span className={`status-badge ${viewingLocation.active ? 'active' : 'inactive'}`}>
                    {viewingLocation.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              
              <div className="view-section">
                <h4>Description</h4>
                <p className="view-description">{viewingLocation.description}</p>
              </div>
              
              <div className="view-section">
                <h4>Contact Details</h4>
                <div className="view-row">
                  <span className="view-label">Phone:</span>
                  <span className="view-value">{viewingLocation.contactNumber}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Address:</span>
                  <span className="view-value">{viewingLocation.address}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Timings:</span>
                  <span className="view-value">{viewingLocation.timings}</span>
                </div>
              </div>
              
              <div className="view-section">
                <h4>Location Coordinates</h4>
                <div className="view-row">
                  <span className="view-label">Latitude:</span>
                  <span className="view-value">{viewingLocation.latitude}</span>
                </div>
                <div className="view-row">
                  <span className="view-label">Longitude:</span>
                  <span className="view-value">{viewingLocation.longtitude || 'N/A'}</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-primary" onClick={() => {
                setViewingLocation(null);
                handleEdit(viewingLocation);
              }}>Edit</button>
              <button className="btn-cancel" onClick={() => setViewingLocation(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllRestaurants;