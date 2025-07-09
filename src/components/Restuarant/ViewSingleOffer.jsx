import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Rsidebar from './Rsidebar';
// import '../../assets/css/RDasboard/ViewSingleOffer.css'; 

const ViewSingleOffer = () => {
  const { offerId } = useParams(); // Get offerId from the URL
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(`/offer/${offer_id}/details`);
        setOffer(response.data);
      } catch (err) {
        console.error('Error fetching offer:', err);
        setError('Failed to load offer.');
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [offerId]);

  if (loading) {
    return (
      <>
        <Rsidebar />
        <div className="offer-detail-container">Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Rsidebar />
        <div className="offer-detail-container">{error}</div>
      </>
    );
  }

  return (
    <>
      <Rsidebar />
      <div className="offer-detail-container">
        <h2>{offer.title}</h2>
        <img src={offer.image} alt={offer.title} className="offer-detail-image" />
        <p><strong>Category:</strong> {offer.foodType}</p>
        <p><strong>Discount:</strong> {offer.discountPercentage}%</p>
        <p><strong>Duration:</strong> {new Date(offer.startDate).toLocaleDateString()} - {new Date(offer.endDate).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {offer.active ? 'Active' : 'Inactive'}</p>
        {offer.description && <p><strong>Description:</strong> {offer.description}</p>}
        <Link to="/view-offer" className="back-button">Back to All Offers</Link>
      </div>
    </>
  );
};

export default ViewSingleOffer;
