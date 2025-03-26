import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Offer.css';
import Rsidebar from './Rsidebar';

const OfferForm = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchRestaurants();
    fetchFoodTypes();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get('/locations');
      setRestaurants(res.data);
    } catch (error) {
      toast.error('Failed to load restaurants');
    }
  };

  const fetchFoodTypes = async () => {
    try {
      const res = await axios.get('/offers');
      setFoodTypes(res.data);
    } catch (error) {
      toast.error('Failed to load food types');
    }
  };

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch 
  } = useForm({
    defaultValues: {
      active: true,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      discountPercentage: 0,
      minOrderAmount: 0
    }
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log("Form Data Before Processing:", data);
  
      // Format start and end dates
      data.startDate = new Date(data.startDate).toISOString();
      data.endDate = new Date(data.endDate).toISOString();
  
      // Check if an image is selected for upload
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "your_cloudinary_preset"); // Set your Cloudinary preset
        formData.append("cloud_name", "your_cloud_name"); // Your Cloudinary Cloud Name
  
        console.log("Uploading image to Cloudinary...");
  
        // Upload image to Cloudinary
        const imageRes = await axios.post("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", formData);
        
        console.log("Image Uploaded:", imageRes.data);
        data.image = imageRes.data.secure_url; // Set the image URL from Cloudinary
      }
  
      // Submit the offer data
      const response = await axios.post("/offer", data);
      
      if (response.status === 201) {
        toast.success("Offer created successfully!");
        navigate("/offers"); // Redirect after success
      }
    } catch (error) {
      console.error("Error submitting offer:", error);
      toast.error(error.response?.data?.message || "Offer creation failed");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      <Rsidebar />
      <div className="offer-form-container">
        <div className="offer-form-wrapper">
          <h2>Create New Offer</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="offer-form">
            <div className="form-group">
              <label htmlFor="title">Offer Title</label>
              <input
                type="text"
                id="title"
                {...register('title', { required: 'Offer title is required' })}
                className={errors.title ? 'input-error' : ''}
              />
              {errors.title && <p className="error-message">{errors.title.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                {...register('description', { required: 'Description is required', minLength: 10 })}
                className={errors.description ? 'input-error' : ''}
              ></textarea>
              {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  {...register('startDate', { required: 'Start date is required' })}
                  className={errors.startDate ? 'input-error' : ''}
                />
                {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  {...register('endDate', { 
                    required: 'End date is required',
                    validate: value => new Date(value) > new Date(watch('startDate')) || 'End date must be after start date'
                  })}
                  className={errors.endDate ? 'input-error' : ''}
                />
                {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
              </div>
            </div>

            {/* New Fields - Active, Discount, Min Order */}
            <div className="form-group checkbox-group">
              <input type="checkbox" id="active" {...register('active')} />
              <label htmlFor="active">Is Active?</label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="discountPercentage">Discount (%)</label>
                <input
                  type="number"
                  id="discountPercentage"
                  {...register('discountPercentage', { min: 0, max: 100 })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="minOrderAmount">Min Order Amount</label>
                <input
                  type="number"
                  id="minOrderAmount"
                  {...register('minOrderAmount', { min: 0 })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input type="file" id="image" onChange={handleImageUpload} />
            </div>

            <div className="form-group">
              <label htmlFor="locationId">Restaurant</label>
              <select
                id="locationId"
                {...register('locationId', { required: 'Restaurant is required' })}
                className={errors.locationId ? 'input-error' : ''}
              >
                <option value="">Select Restaurant</option>
                {restaurants.map(restaurant => (
                  <option key={restaurant._id} value={restaurant._id}>{restaurant.title}</option>
                ))}
              </select>
              {errors.locationId && <p className="error-message">{errors.locationId.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="foodType">Food Type</label>
              <input
                type="text"
                id="foodType"
                {...register('foodType', { required: 'Food type is required' })}
                className={errors.foodType ? 'input-error' : ''}
              />
              {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
            </div>

            

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Create Offer'}
            </button>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default OfferForm;
