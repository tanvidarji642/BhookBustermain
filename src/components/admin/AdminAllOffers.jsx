import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../../assets/css/ADashboard/AdminAllOffers.css';

function AdminAllOffers() {
  const [offers, setOffers] = useState([]);
  const [editingOfferId, setEditingOfferId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchOffers();
  }, []);

  const getOfferId = (offer) => {
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
  

  return (
    <div className="offer-table-container">
      <h2 className="offer-title">All Offers</h2>
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
            <tr key={index}>
              <td>{offer.title}</td>
              <td>{offer.description || '-'}</td>
              <td>{offer.active ? 'Yes' : 'No'}</td>
              <td>{new Date(offer.startDate).toLocaleDateString()}</td>
              <td>{new Date(offer.endDate).toLocaleDateString()}</td>
              <td>{offer.discountPercentage || '-'}</td>
              <td>{offer.minOrderAmount || '-'}</td>
              <td>{offer.foodType}</td>
              <td>{offer.locationId}</td>
              <td>
                <img src={offer.image} alt="Offer" className="offer-img" />
              </td>
              <td>
                <FaEdit
                  className="action-icon edit-icon"
                  onClick={() => handleEditClick(offer)}
                  style={{ cursor: 'pointer', color: 'blue', marginRight: '10px' }}
                />
                <FaTrash
                  className="action-icon delete-icon"
                  onClick={() => handleDelete(getOfferId(offer))}
                  style={{ cursor: 'pointer', color: 'red' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editingOfferId && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setEditingOfferId(null)}>×</span>
            <h3>Edit Offer</h3>
            <div className="modal-form">
              <input type="text" name="title" value={formData.title || ''} onChange={handleInputChange} placeholder="Title" />
              <input type="text" name="description" value={formData.description || ''} onChange={handleInputChange} placeholder="Description" />
              <input type="text" name="discountPercentage" value={formData.discountPercentage || ''} onChange={handleInputChange} placeholder="Discount (%)" />
              <input type="text" name="minOrderAmount" value={formData.minOrderAmount || ''} onChange={handleInputChange} placeholder="Min Order Amount" />
              <input type="text" name="foodType" value={formData.foodType || ''} onChange={handleInputChange} placeholder="Food Type" />
              <input type="text" name="locationId" value={formData.locationId || ''} onChange={handleInputChange} placeholder="Location ID" />
              <input type="datetime-local" name="startDate" value={formData.startDate?.slice(0, 16) || ''} onChange={handleInputChange} />
              <input type="datetime-local" name="endDate" value={formData.endDate?.slice(0, 16) || ''} onChange={handleInputChange} />
            </div>
            <div className="modal-actions">
              <button onClick={handleUpdate}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAllOffers;
