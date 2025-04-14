// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import '../../assets/css/ADashboard/AdminAllOffers.css';

// function AdminAllOffers() {
//   const [offers, setOffers] = useState([]);
//   const [editingOfferId, setEditingOfferId] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   const getOfferId = (offer) => {
//     return offer._id?.$oid || offer._id || offer.id || null;
//   };    
  


//   const fetchOffers = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/offers');
//       setOffers(res.data);
//     } catch (err) {
//       console.error('Error fetching offers:', err);
//     }
//   };

//   const handleEditClick = (offer) => {
//     setEditingOfferId(getOfferId(offer));
//     setFormData({ ...offer });
//   };
  

//   const handleInputChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       if (!editingOfferId) {
//         console.error("No offer ID to update.");
//         alert("Offer ID is missing.");
//         return;
//       }
  
//       const updatedData = {
//         ...formData,
//         startDate: new Date(formData.startDate).toISOString(),
//         endDate: new Date(formData.endDate).toISOString(),
//       };
  
//       await axios.put(`http://localhost:8000/offer/${editingOfferId}`, updatedData);
  
//       alert("Offer updated successfully!");
//       setEditingOfferId(null);
//       fetchOffers();
//     } catch (err) {
//       console.error("Update error:", err);
//       alert("Failed to update offer.");
//     }
//   };
  

// const handleDelete = async (id) => {
//     if (!id) {
//       console.error("Delete failed: Invalid or undefined ID", id);
//       alert("Cannot delete offer: ID is missing.");
//       return;
//     }
  
//     if (window.confirm("Are you sure you want to delete this offer?")) {
//       try {
//         await axios.delete(`http://localhost:8000/offer/${id}`);
//         alert("Offer deleted successfully!");
//         fetchOffers();
//       } catch (err) {
//         console.error("Delete error:", err);
//         alert("Failed to delete offer.");
//       }
//     }
//   };
  

//   return (
//     <div className="offer-table-container">
//       <h2 className="offer-title">All Offers</h2>
//       <table className="offer-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Active</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Discount (%)</th>
//             <th>Min Order</th>
//             <th>Food Type</th>
//             <th>Location ID</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers.map((offer, index) => (
//             <tr key={index}>
//               <td>{offer.title}</td>
//               <td>{offer.description || '-'}</td>
//               <td>{offer.active ? 'Yes' : 'No'}</td>
//               <td>{new Date(offer.startDate).toLocaleDateString()}</td>
//               <td>{new Date(offer.endDate).toLocaleDateString()}</td>
//               <td>{offer.discountPercentage || '-'}</td>
//               <td>{offer.minOrderAmount || '-'}</td>
//               <td>{offer.foodType}</td>
//               <td>{offer.locationId}</td>
//               <td>
//                 <img src={offer.image} alt="Offer" className="offer-img" />
//               </td>
//               <td>
//                 <FaEdit
//                   className="action-icon edit-icon"
//                   onClick={() => handleEditClick(offer)}
//                   style={{ cursor: 'pointer', color: 'blue', marginRight: '10px' }}
//                 />
//                 <FaTrash
//                   className="action-icon delete-icon"
//                   onClick={() => handleDelete(getOfferId(offer))}
//                   style={{ cursor: 'pointer', color: 'red' }}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       {editingOfferId && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingOfferId(null)}>×</span>
//             <h3>Edit Offer</h3>
//             <div className="modal-form">
//               <input type="text" name="title" value={formData.title || ''} onChange={handleInputChange} placeholder="Title" />
//               <input type="text" name="description" value={formData.description || ''} onChange={handleInputChange} placeholder="Description" />
//               <input type="text" name="discountPercentage" value={formData.discountPercentage || ''} onChange={handleInputChange} placeholder="Discount (%)" />
//               <input type="text" name="minOrderAmount" value={formData.minOrderAmount || ''} onChange={handleInputChange} placeholder="Min Order Amount" />
//               <input type="text" name="foodType" value={formData.foodType || ''} onChange={handleInputChange} placeholder="Food Type" />
//               <input type="text" name="locationId" value={formData.locationId || ''} onChange={handleInputChange} placeholder="Location ID" />
//               <input type="datetime-local" name="startDate" value={formData.startDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//               <input type="datetime-local" name="endDate" value={formData.endDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//             </div>
//             <div className="modal-actions">
//               <button onClick={handleUpdate}>Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminAllOffers;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaThList, FaThLarge } from 'react-icons/fa';
// import '../../assets/css/ADashboard/AdminAllOffers.css';

// function AdminAllOffers() {
//   const [offers, setOffers] = useState([]);
//   const [editingOfferId, setEditingOfferId] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   const getOfferId = (offer) => {
//     return offer._id?.$oid || offer._id || offer.id || null;
//   };    
  
//   const fetchOffers = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/offers');
//       setOffers(res.data);
//     } catch (err) {
//       console.error('Error fetching offers:', err);
//     }
//   };

//   const handleEditClick = (offer) => {
//     setEditingOfferId(getOfferId(offer));
//     setFormData({ ...offer });
//   };
  
//   const handleInputChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       if (!editingOfferId) {
//         console.error("No offer ID to update.");
//         alert("Offer ID is missing.");
//         return;
//       }
  
//       const updatedData = {
//         ...formData,
//         startDate: new Date(formData.startDate).toISOString(),
//         endDate: new Date(formData.endDate).toISOString(),
//       };
  
//       await axios.put(`http://localhost:8000/offer/${editingOfferId}`, updatedData);
  
//       alert("Offer updated successfully!");
//       setEditingOfferId(null);
//       fetchOffers();
//     } catch (err) {
//       console.error("Update error:", err);
//       alert("Failed to update offer.");
//     }
//   };
  
//   const handleDelete = async (id) => {
//     if (!id) {
//       console.error("Delete failed: Invalid or undefined ID", id);
//       alert("Cannot delete offer: ID is missing.");
//       return;
//     }
  
//     if (window.confirm("Are you sure you want to delete this offer?")) {
//       try {
//         await axios.delete(`http://localhost:8000/offer/${id}`);
//         alert("Offer deleted successfully!");
//         fetchOffers();
//       } catch (err) {
//         console.error("Delete error:", err);
//         alert("Failed to delete offer.");
//       }
//     }
//   };
  
//   const toggleViewMode = () => {
//     setViewMode(viewMode === 'list' ? 'grid' : 'list');
//   };

//   // List view rendering
//   const renderListView = () => (
//     <table className="offer-table">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Active</th>
//           <th>Start Date</th>
//           <th>End Date</th>
//           <th>Discount (%)</th>
//           <th>Min Order</th>
//           <th>Food Type</th>
//           <th>Location ID</th>
//           <th>Image</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {offers.map((offer, index) => (
//           <tr key={index} className="table-row">
//             <td>{offer.title}</td>
//             <td>{offer.description || '-'}</td>
//             <td>{offer.active ? 'Yes' : 'No'}</td>
//             <td>{new Date(offer.startDate).toLocaleDateString()}</td>
//             <td>{new Date(offer.endDate).toLocaleDateString()}</td>
//             <td>{offer.discountPercentage || '-'}</td>
//             <td>{offer.minOrderAmount || '-'}</td>
//             <td>{offer.foodType}</td>
//             <td>{offer.locationId}</td>
//             <td>
//               <img src={offer.image} alt="Offer" className="offer-img" />
//             </td>
//             <td className="action-buttons">
//               <FaEdit
//                 className="action-icon edit-icon"
//                 onClick={() => handleEditClick(offer)}
//                 title="Edit"
//               />
//               <FaTrash
//                 className="action-icon delete-icon"
//                 onClick={() => handleDelete(getOfferId(offer))}
//                 title="Delete"
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   // Grid view rendering
//   const renderGridView = () => (
//     <div className="offer-grid">
//       {offers.map((offer, index) => (
//         <div key={index} className="offer-card">
//           <div className="card-image-container">
//             <img src={offer.image} alt={offer.title} className="card-image" />
//           </div>
//           <div className="card-content">
//             <h3 className="card-title">{offer.title}</h3>
//             <div className="card-details">
//               <p className="card-description">{offer.description || '-'}</p>
//               <div className="card-info-row">
//                 <span className="info-label">Discount:</span>
//                 <span className="info-value">{offer.discountPercentage || '-'}%</span>
//               </div>
//               <div className="card-info-row">
//                 <span className="info-label">Min Order:</span>
//                 <span className="info-value">${offer.minOrderAmount || '-'}</span>
//               </div>
//               <div className="card-info-row">
//                 <span className="info-label">Period:</span>
//                 <span className="info-value">
//                   {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="card-info-row">
//                 <span className="info-label">Food Type:</span>
//                 <span className="info-value">{offer.foodType}</span>
//               </div>
//               <div className="card-info-row">
//                 <span className="info-label">Status:</span>
//                 <span className={`info-value status ${offer.active ? 'active' : 'inactive'}`}>
//                   {offer.active ? 'Active' : 'Inactive'}
//                 </span>
//               </div>
//             </div>
//             <div className="card-actions">
//               <button 
//                 className="card-action-btn edit-btn"
//                 onClick={() => handleEditClick(offer)}
//                 title="Edit"
//               >
//                 <FaEdit />
//               </button>
//               <button 
//                 className="card-action-btn delete-btn"
//                 onClick={() => handleDelete(getOfferId(offer))}
//                 title="Delete"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="offer-container">
//       <div className="offer-header">
//         <h2 className="offer-title">All Offers</h2>
//         <div className="view-toggle">
//           <button 
//             className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
//             onClick={toggleViewMode}
//             title="List View"
//           >
//             <FaThList />
//           </button>
//           <button 
//             className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
//             onClick={toggleViewMode}
//             title="Grid View"
//           >
//             <FaThLarge />
//           </button>
//         </div>
//       </div>
      
//       <div className={`offer-content ${viewMode}-view`}>
//         {viewMode === 'list' ? renderListView() : renderGridView()}
//       </div>

//       {/* Edit Modal */}
//       {editingOfferId && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingOfferId(null)}>×</span>
//             <h3>Edit Offer</h3>
//             <div className="modal-form">
//               <input type="text" name="title" value={formData.title || ''} onChange={handleInputChange} placeholder="Title" />
//               <input type="text" name="description" value={formData.description || ''} onChange={handleInputChange} placeholder="Description" />
//               <input type="text" name="discountPercentage" value={formData.discountPercentage || ''} onChange={handleInputChange} placeholder="Discount (%)" />
//               <input type="text" name="minOrderAmount" value={formData.minOrderAmount || ''} onChange={handleInputChange} placeholder="Min Order Amount" />
//               <input type="text" name="foodType" value={formData.foodType || ''} onChange={handleInputChange} placeholder="Food Type" />
//               <input type="text" name="locationId" value={formData.locationId || ''} onChange={handleInputChange} placeholder="Location ID" />
//               <input type="datetime-local" name="startDate" value={formData.startDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//               <input type="datetime-local" name="endDate" value={formData.endDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//             </div>
//             <div className="modal-actions">
//               <button onClick={handleUpdate}>Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminAllOffers;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaThList, FaThLarge, FaEye } from 'react-icons/fa';
// import '../../assets/css/ADashboard/AdminAllOffers.css';

// function AdminAllOffers() {
//   const [offers, setOffers] = useState([]);
//   const [editingOfferId, setEditingOfferId] = useState(null);
//   const [viewingOfferId, setViewingOfferId] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   const getOfferId = (offer) => {
//     return offer._id?.$oid || offer._id || offer.id || null;
//   };    
  
//   const fetchOffers = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/offers');
//       setOffers(res.data);
//     } catch (err) {
//       console.error('Error fetching offers:', err);
//     }
//   };

//   const handleEditClick = (offer) => {
//     setEditingOfferId(getOfferId(offer));
//     setFormData({ ...offer });
//   };
  
//   const handleViewClick = (offer) => {
//     setViewingOfferId(getOfferId(offer));
//   };
  
//   const handleInputChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       if (!editingOfferId) {
//         console.error("No offer ID to update.");
//         alert("Offer ID is missing.");
//         return;
//       }
  
//       const updatedData = {
//         ...formData,
//         startDate: new Date(formData.startDate).toISOString(),
//         endDate: new Date(formData.endDate).toISOString(),
//       };
  
//       await axios.put(`http://localhost:8000/offer/${editingOfferId}`, updatedData);
  
//       alert("Offer updated successfully!");
//       setEditingOfferId(null);
//       fetchOffers();
//     } catch (err) {
//       console.error("Update error:", err);
//       alert("Failed to update offer.");
//     }
//   };
  
//   const handleDelete = async (id) => {
//     if (!id) {
//       console.error("Delete failed: Invalid or undefined ID", id);
//       alert("Cannot delete offer: ID is missing.");
//       return;
//     }
  
//     if (window.confirm("Are you sure you want to delete this offer?")) {
//       try {
//         await axios.delete(`http://localhost:8000/offer/${id}`);
//         alert("Offer deleted successfully!");
//         fetchOffers();
//       } catch (err) {
//         console.error("Delete error:", err);
//         alert("Failed to delete offer.");
//       }
//     }
//   };
  
//   const toggleViewMode = () => {
//     setViewMode(viewMode === 'list' ? 'grid' : 'list');
//   };

//   // List view rendering
//   const renderListView = () => (
//     <div className="table-responsive">
//       <table className="offer-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Active</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Discount (%)</th>
//             <th>Min Order</th>
//             <th>Food Type</th>
//             <th>Location ID</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers.map((offer, index) => (
//             <tr key={index} className="table-row">
//               <td>{offer.title}</td>
//               <td>{offer.description || '-'}</td>
//               <td>
//                 <span className={`status-badge ${offer.active ? 'active' : 'inactive'}`}>
//                   {offer.active ? 'Active' : 'Inactive'}
//                 </span>
//               </td>
//               <td>{new Date(offer.startDate).toLocaleDateString()}</td>
//               <td>{new Date(offer.endDate).toLocaleDateString()}</td>
//               <td>{offer.discountPercentage || '-'}</td>
//               <td>{offer.minOrderAmount || '-'}</td>
//               <td>{offer.foodType}</td>
//               <td>{offer.locationId}</td>
//               <td>
//                 <img src={offer.image} alt="Offer" className="offer-img" />
//               </td>
//               <td className="action-buttons">
//                 <button 
//                   className="action-btn view-btn" 
//                   onClick={() => handleViewClick(offer)}
//                   title="View"
//                 >
//                   <FaEye />
//                 </button>
//                 <button 
//                   className="action-btn edit-btn" 
//                   onClick={() => handleEditClick(offer)}
//                   title="Edit"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button 
//                   className="action-btn delete-btn" 
//                   onClick={() => handleDelete(getOfferId(offer))}
//                   title="Delete"
//                 >
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   // Grid view rendering
//   const renderGridView = () => (
//     <div className="offer-grid">
//       {offers.map((offer, index) => (
//         <div key={index} className="offer-card">
//           <div className="card-badge">
//             <span className={`status-pill ${offer.active ? 'active' : 'inactive'}`}>
//               {offer.active ? 'Active' : 'Inactive'}
//             </span>
//           </div>
//           <div className="card-image-container">
//             <img src={offer.image} alt={offer.title} className="card-image" />
//             <div className="card-overlay">
//               <div className="overlay-actions">
//                 <button 
//                   className="overlay-btn view-btn" 
//                   onClick={() => handleViewClick(offer)}
//                 >
//                   <FaEye />
//                 </button>
//                 <button 
//                   className="overlay-btn edit-btn" 
//                   onClick={() => handleEditClick(offer)}
//                 >
//                   <FaEdit />
//                 </button>
//                 <button 
//                   className="overlay-btn delete-btn" 
//                   onClick={() => handleDelete(getOfferId(offer))}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="card-content">
//             <h3 className="card-title">{offer.title}</h3>
//             <p className="card-description">{offer.description || '-'}</p>
            
//             <div className="card-divider"></div>
            
//             <div className="card-info-grid">
//               <div className="info-item">
//                 <span className="info-label">Discount:</span>
//                 <span className="info-value highlight">{offer.discountPercentage || '-'}%</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Min Order:</span>
//                 <span className="info-value">${offer.minOrderAmount || '-'}</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Food Type:</span>
//                 <span className="info-value">{offer.foodType}</span>
//               </div>
//               <div className="info-item">
//                 <span className="info-label">Location:</span>
//                 <span className="info-value">{offer.locationId}</span>
//               </div>
//             </div>
            
//             <div className="card-footer">
//               <div className="date-range">
//                 <span className="date-label">Valid:</span>
//                 <span className="date-value">
//                   {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="card-actions">
//                 <button 
//                   className="card-action-btn view-btn"
//                   onClick={() => handleViewClick(offer)}
//                   title="View"
//                 >
//                   <FaEye />
//                 </button>
//                 <button 
//                   className="card-action-btn edit-btn"
//                   onClick={() => handleEditClick(offer)}
//                   title="Edit"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button 
//                   className="card-action-btn delete-btn"
//                   onClick={() => handleDelete(getOfferId(offer))}
//                   title="Delete"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="offer-container">
//       <div className="offer-header">
//         <h2 className="offer-title">All Offers</h2>
//         <div className="view-toggle">
//           <button 
//             className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
//             onClick={() => setViewMode('list')}
//             title="List View"
//           >
//             <FaThList />
//           </button>
//           <button 
//             className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
//             onClick={() => setViewMode('grid')}
//             title="Grid View"
//           >
//             <FaThLarge />
//           </button>
//         </div>
//       </div>
      
//       <div className={`offer-content ${viewMode}-view`}>
//         {viewMode === 'list' ? renderListView() : renderGridView()}
//       </div>

//       {/* View Modal */}
//       {viewingOfferId && (
//         <div className="modal view-modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setViewingOfferId(null)}>×</span>
//             {offers.map((offer, index) => {
//               if (getOfferId(offer) === viewingOfferId) {
//                 return (
//                   <div key={index} className="view-details">
//                     <h3>Offer Details</h3>
//                     <div className="view-header">
//                       <div className="view-image">
//                         <img src={offer.image} alt={offer.title} />
//                       </div>
//                       <div className="view-summary">
//                         <h4>{offer.title}</h4>
//                         <p className="view-description">{offer.description}</p>
//                         <span className={`view-status ${offer.active ? 'active' : 'inactive'}`}>
//                           {offer.active ? 'Active' : 'Inactive'}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="view-grid">
//                       <div className="view-item">
//                         <h5>Discount</h5>
//                         <p>{offer.discountPercentage || '-'}%</p>
//                       </div>
//                       <div className="view-item">
//                         <h5>Minimum Order</h5>
//                         <p>${offer.minOrderAmount || '-'}</p>
//                       </div>
//                       <div className="view-item">
//                         <h5>Food Type</h5>
//                         <p>{offer.foodType}</p>
//                       </div>
//                       <div className="view-item">
//                         <h5>Location ID</h5>
//                         <p>{offer.locationId}</p>
//                       </div>
//                       <div className="view-item">
//                         <h5>Start Date</h5>
//                         <p>{new Date(offer.startDate).toLocaleDateString()}</p>
//                       </div>
//                       <div className="view-item">
//                         <h5>End Date</h5>
//                         <p>{new Date(offer.endDate).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                     <div className="view-actions">
//                       <button className="view-edit-btn" onClick={() => {
//                         setViewingOfferId(null);
//                         handleEditClick(offer);
//                       }}>
//                         <FaEdit /> Edit Offer
//                       </button>
//                     </div>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editingOfferId && (
//         <div className="modal edit-modal">
//           <div className="modal-content">
//             <span className="close-btn" onClick={() => setEditingOfferId(null)}>×</span>
//             <h3>Edit Offer</h3>
//             <div className="modal-form">
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input id="title" type="text" name="title" value={formData.title || ''} onChange={handleInputChange} placeholder="Title" />
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <textarea id="description" name="description" value={formData.description || ''} onChange={handleInputChange} placeholder="Description" />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="discountPercentage">Discount (%)</label>
//                   <input id="discountPercentage" type="number" name="discountPercentage" value={formData.discountPercentage || ''} onChange={handleInputChange} placeholder="Discount (%)" />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="minOrderAmount">Min Order Amount</label>
//                   <input id="minOrderAmount" type="number" name="minOrderAmount" value={formData.minOrderAmount || ''} onChange={handleInputChange} placeholder="Min Order Amount" />
//                 </div>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="foodType">Food Type</label>
//                   <input id="foodType" type="text" name="foodType" value={formData.foodType || ''} onChange={handleInputChange} placeholder="Food Type" />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="locationId">Location ID</label>
//                   <input id="locationId" type="text" name="locationId" value={formData.locationId || ''} onChange={handleInputChange} placeholder="Location ID" />
//                 </div>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="startDate">Start Date</label>
//                   <input id="startDate" type="datetime-local" name="startDate" value={formData.startDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="endDate">End Date</label>
//                   <input id="endDate" type="datetime-local" name="endDate" value={formData.endDate?.slice(0, 16) || ''} onChange={handleInputChange} />
//                 </div>
//               </div>
              
//               <div className="form-group checkbox-group">
//                 <label className="checkbox-container">
//                   <input 
//                     type="checkbox" 
//                     name="active" 
//                     checked={formData.active || false} 
//                     onChange={(e) => setFormData({...formData, active: e.target.checked})}
//                   />
//                   <span className="checkmark"></span>
//                   Active
//                 </label>
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="cancel-btn" onClick={() => setEditingOfferId(null)}>Cancel</button>
//               <button className="save-btn" onClick={handleUpdate}>Save Changes</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminAllOffers;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaThList, FaThLarge, FaEye } from 'react-icons/fa';
import '../../assets/css/ADashboard/AdminAllOffers.css';

function AdminAllOffers() {
  const [offers, setOffers] = useState([]);
  const [editingOfferId, setEditingOfferId] = useState(null);
  const [formData, setFormData] = useState({});
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [viewingOfferId, setViewingOfferId] = useState(null);

  useEffect(() => {
    fetchOffers();
  }, []);

  const getOfferId = (offer) => {

console.lof(offer)
    return offer._id?.$oid || offer._id || offer.id || null;
  };    
  
  const fetchOffers = async () => {
    try {
      const res = await axios.get('http://localhost:8000/offers');
      setOffers(res.data);
    } catch (err) {
      console.error('Error fetching offers:', err);
    }
  };

  const handleEditClick = (offer) => {
    setEditingOfferId(getOfferId(offer));
    setFormData({ ...offer });
  };
  
  const handleViewClick = (offer) => {
    setViewingOfferId(getOfferId(offer));
  };
  
  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async () => {
    try {
      if (!editingOfferId) {
        console.error("No offer ID to update.");
        alert("Offer ID is missing.");
        return;
      }
  
      const updatedData = {
        ...formData,
        startDate: new Date(formData.startDate).toISOString(),
        endDate: new Date(formData.endDate).toISOString(),
      };
  
      await axios.put(`http://localhost:8000/offer/${editingOfferId}`, updatedData);
  
      alert("Offer updated successfully!");
      setEditingOfferId(null);
      fetchOffers();
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update offer.");
    }
  };
  
  const handleDelete = async (id) => {
    alert(id)
    if (!id) {
      console.error("Delete failed: Invalid or undefined ID", id);
      alert("Cannot delete offer: ID is missing.");
      return;
    }
  
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await axios.delete(`http://localhost:8000/offer/${id}`);
        alert("Offer deleted successfully!");
        fetchOffers();
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete offer.");
      }
    }
  };
  
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  // List view rendering
  const renderListView = () => (
    <table className="offer-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Active</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Discount (%)</th>
          <th>Min Order</th>
          <th>Food Type</th>
          <th>Location ID</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer, index) => (
          <tr key={index} className="table-row">
            <td>{offer.title}</td>
            <td>{offer.description || '-'}</td>
            <td>
              <span className={`status-badge ${offer.active ? 'active' : 'inactive'}`}>
                {offer.active ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td>{new Date(offer.startDate).toLocaleDateString()}</td>
            <td>{new Date(offer.endDate).toLocaleDateString()}</td>
            <td>{offer.discountPercentage || '-'}%</td>
            <td>${offer.minOrderAmount || '-'}</td>
            <td>{offer.foodType}</td>
            <td>{offer.locationId}</td>
            <td>
              <img src={offer.image} alt="Offer" className="offer-img" />
            </td>
            <td className="action-buttons">
              <button 
                className="action-btn view-btn" 
                onClick={() => handleViewClick(offer)}
                aria-label="View offer"
                title="View"
              >
                <FaEye />
              </button>
              <button 
                className="action-btn edit-btn" 
                onClick={() => handleEditClick(offer)}
                aria-label="Edit offer"
                title="Edit"
              >
                <FaEdit />
              </button>
              <button 
                className="action-btn delete-btn" 
                onClick={() => handleDelete(offer.locationId)}
                aria-label="Delete offer"
                title="Delete"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // Grid view rendering
  const renderGridView = () => (
    <div className="offer-grid">
      {offers.map((offer, index) => (
        <div key={index} className="offer-card">
          <div className="card-badge">
            <span className={`status-indicator ${offer.active ? 'active' : 'inactive'}`}>
              {offer.active ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div className="card-image-container">
            <img src={offer.image} alt={offer.title} className="card-image" />
            <div className="discount-badge">
              {offer.discountPercentage}% OFF
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{offer.title}</h3>
            <p className="card-description">{offer.description || '-'}</p>
            
            <div className="card-info">
              <div className="info-item">
                <span className="info-label">Period:</span>
                <span className="info-value">
                  {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Min Order:</span>
                <span className="info-value">${offer.minOrderAmount || '-'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Food Type:</span>
                <span className="info-value">{offer.foodType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{offer.locationId}</span>
              </div>
            </div>
            
            <div className="card-actions">
              <button 
                className="card-btn view-btn"
                onClick={() => handleViewClick(offer)}
                aria-label="View offer"
              >
                <FaEye />
                <span>View</span>
              </button>
              <button 
                className="card-btn edit-btn"
                onClick={() => handleEditClick(offer)}
                aria-label="Edit offer"
              >
                <FaEdit />
                <span>Edit</span>
              </button>
              <button 
                className="card-btn delete-btn"
                onClick={() => handleDelete(getOfferId(offer))}
                aria-label="Delete offer"
              >
                <FaTrash />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="offer-container">
      <div className="offer-header">
        <h2 className="offer-title">All Offers</h2>
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`} 
            onClick={() => toggleViewMode('list')}
            title="List View"
            aria-label="Switch to list view"
          >
            <FaThList />
            <span>List</span>
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} 
            onClick={() => toggleViewMode('grid')}
            title="Grid View"
            aria-label="Switch to grid view"
          >
            <FaThLarge />
            <span>Grid</span>
          </button>
        </div>
      </div>
      
      <div className={`offer-content ${viewMode}-view`}>
        {viewMode === 'list' ? renderListView() : renderGridView()}
      </div>

      {/* Edit Modal */}
      {editingOfferId && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setEditingOfferId(null)}>×</span>
            <h3>Edit Offer</h3>
            <div className="modal-form">
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={formData.title || ''} onChange={handleInputChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description || ''} onChange={handleInputChange} placeholder="Description" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Discount (%)</label>
                  <input type="text" name="discountPercentage" value={formData.discountPercentage || ''} onChange={handleInputChange} placeholder="Discount (%)" />
                </div>
                <div className="form-group">
                  <label>Min Order Amount</label>
                  <input type="text" name="minOrderAmount" value={formData.minOrderAmount || ''} onChange={handleInputChange} placeholder="Min Order Amount" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Food Type</label>
                  <input type="text" name="foodType" value={formData.foodType || ''} onChange={handleInputChange} placeholder="Food Type" />
                </div>
                <div className="form-group">
                  <label>Location ID</label>
                  <input type="text" name="locationId" value={formData.locationId || ''} onChange={handleInputChange} placeholder="Location ID" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="datetime-local" name="startDate" value={formData.startDate?.slice(0, 16) || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="datetime-local" name="endDate" value={formData.endDate?.slice(0, 16) || ''} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Active</label>
                <select name="active" value={formData.active || false} onChange={handleInputChange}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setEditingOfferId(null)}>Cancel</button>
              <button className="save-btn" onClick={handleUpdate}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewingOfferId && (
        <div className="modal view-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setViewingOfferId(null)}>×</span>
            <h3>Offer Details</h3>
            {offers.map((offer, index) => {
              if (getOfferId(offer) === viewingOfferId) {
                return (
                  <div key={index} className="view-offer-details">
                    <div className="view-offer-image">
                      <img src={offer.image} alt={offer.title} />
                    </div>
                    <div className="view-offer-info">
                      <h2>{offer.title}</h2>
                      <div className="detail-row">
                        <span className="detail-label">Status:</span>
                        <span className={`detail-value status ${offer.active ? 'active' : 'inactive'}`}>
                          {offer.active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Description:</span>
                        <span className="detail-value">{offer.description || '-'}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Discount:</span>
                        <span className="detail-value">{offer.discountPercentage || '-'}%</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Minimum Order:</span>
                        <span className="detail-value">${offer.minOrderAmount || '-'}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Food Type:</span>
                        <span className="detail-value">{offer.foodType}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Location ID:</span>
                        <span className="detail-value">{offer.locationId}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Start Date:</span>
                        <span className="detail-value">{new Date(offer.startDate).toLocaleString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">End Date:</span>
                        <span className="detail-value">{new Date(offer.endDate).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
            <div className="modal-actions">
              <button onClick={() => setViewingOfferId(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAllOffers;