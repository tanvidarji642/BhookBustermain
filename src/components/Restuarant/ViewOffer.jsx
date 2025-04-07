import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit, Trash2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import Rsidebar from './Rsidebar';
import '../../assets/css/RDasboard/Viewoffer.css';


const ViewOffer = () => {
  const [offers, setOffers] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchOffers();
  }, []);
  
  const fetchOffers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/offers');
      console.log('Fetched offers:', response.data);
      setOffers(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching offers:', err);
      setError('Failed to load offers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = (offerId) => {
    setConfirmDelete(offerId);
  };

  const handleDeleteCancel = () => {
    setConfirmDelete(null);
  };

  const handleDelete = async (offerId) => {
    try {
      await axios.delete(`/offer/${offerId}`);
      // Remove deleted offer from state
      setOffers(offers.filter(offer => offer._id !== offerId));
      setConfirmDelete(null);
      alert('Offer deleted successfully');
    } catch (err) {
      console.error('Error deleting offer:', err);
      alert('Failed to delete offer. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <Rsidebar />
        <div className="offer-list-container">
          <div className="loading-spinner">Loading offers...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Rsidebar />
        <div className="offer-list-container">
          <div className="error-message">
            <AlertCircle size={24} />
            <p>{error}</p>
            <button onClick={fetchOffers} className="retry-button">Retry</button>
          </div>
        </div>
      </>
    );
  }

  return (  
    <>
      <Rsidebar />
      <div className="offer-list-container">
        <div className="offer-list-header">
          <h2>All Offers</h2>
          <Link to="/admin/offers/add" className="add-offer-button">
            Add New Offer
          </Link>
        </div>

        {Array.isArray(offers) && offers.length === 0 ? (
          <div className="no-offers">
            <p>No offers found. Create your first offer to get started.</p>
            <Link to="/admin/offers/add" className="add-offer-button">
              Add New Offer
            </Link>
          </div>
        ) : (
          <div className="offers-table-container">
            <table className="offers-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Discount</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(offers) && offers.map((offer) => (
                  <tr key={offer._id} className={!offer.active ? 'inactive-offer' : ''}>
                    <td className="offer-image-cell">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="offer-thumbnail" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/placeholder-image.png'; // Fallback image
                        }}
                      />
                    </td>
                    <td>{offer.title}</td>
                    <td>{offer.foodType}</td>
                    <td>{offer.discountPercentage}%</td>
                    <td>
                      {formatDate(offer.startDate)} - {formatDate(offer.endDate)}
                    </td>
                    <td>
                      <span className={`status-badge ${offer.active ? 'active' : 'inactive'}`}>
                        {offer.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <Link to={`/admin/offers/view/${offer._id}`} className="action-button view">
                        <Eye size={18} />
                      </Link>
                      <Link to={`/admin/offers/edit/${offer._id}`} className="action-button edit">
                        <Edit size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDeleteConfirm(offer._id)} 
                        className="action-button delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {confirmDelete && (
          <div className="delete-confirmation-modal">
            <div className="modal-content">
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete this offer? This action cannot be undone.</p>
              <div className="modal-actions">
                <button onClick={handleDeleteCancel} className="cancel-button">
                  Cancel
                </button>
                <button onClick={() => handleDelete(confirmDelete)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewOffer;