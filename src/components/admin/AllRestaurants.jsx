import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/ADashboard/AllRestaurants.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function AllLocations() {
  const [locations, setLocations] = useState([]);
  const [editingLocation, setEditingLocation] = useState(null);
  const [formData, setFormData] = useState({});

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
  
  

  return (
    <div className="table-container">
      <h2 className="table-title">All Locations</h2>
      <table className="custom-table">
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
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((loc, index) => (
            <tr key={index}>
              <td>{loc.id}</td>
              <td>{loc.title}</td>
              <td>{loc.category}</td>
              <td>{loc.description}</td>
              <td>{loc.contactNumber}</td>
              <td>{loc.address}</td>
              <td>{loc.timings}</td>
              <td>{loc.active ? 'Yes' : 'No'}</td>
              <td>{loc.foodType}</td>
              <td>{loc.latitude}</td>
              <td>{loc.longtitude ?? 'N/A'}</td>
              <td>
                <FaEdit className="action-icon edit-icon" onClick={() => handleEdit(loc)} />
                <FaTrash className="action-icon delete-icon" onClick={() => handleDelete(loc.id || loc._id)} />


              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit Modal */}
        {editingLocation && (
        <div className="modal">
            <div className="modal-content">
            <span className="close-btn" onClick={() => setEditingLocation(null)}>×</span>
            <h3 className="modal-title">Edit Location</h3>
            <div className="modal-form">
                <div className="form-group">
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                <input type="text" name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" />
                <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="Food Type" />
                <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} placeholder="Latitude" />
                <input type="number" name="longtitude" value={formData.longtitude || ''} onChange={handleChange} placeholder="Longitude" />
                </div>
                <div className="modal-actions">
                <button className="btn-save" onClick={handleUpdate}>Save</button>
                <button className="btn-cancel" onClick={() => setEditingLocation(null)}>Cancel</button>
                </div>
            </div>
            </div>
        </div>
        )}

    </div>
  );
}

export default AllLocations;
