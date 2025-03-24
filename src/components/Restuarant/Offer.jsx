// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../../assets/css/Offer.css';
// import Rsidebar from './Rsidebar';

// const OfferForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [restaurants, setRestaurants] = useState([]);
//   const [foodTypes, setFoodTypes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchRestaurants();
//     fetchFoodTypes();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//       const res = await axios.get("/locations");
//       setRestaurants(res.data);
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//       toast.error("Failed to load restaurants");
//     }
//   };

//   const fetchFoodTypes = async () => {
//     try {
//       const res = await axios.get("/offers");
//       setFoodTypes(res.data);
//     } catch (error) {
//       console.error("Error fetching food types:", error);
//       toast.error("Failed to load food types");
//     }
//   };

//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     setValue,
//     watch
//   } = useForm({
//     defaultValues: {
//       active: true,
//       startDate: new Date().toISOString().split('T')[0],
//       endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//     }
//   });

//   const onSubmit = async (data) => {
//     try {
          
//       setIsLoading(true);
//       const response = await axios.post('/offer', data);
//       //data.roleId=
//       if (response.status === 201) {
//         toast.success('Restaurant registered successfully!');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       toast.error(error.response?.data?.message || 'Registration failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <Rsidebar />
//       <div className="offer-form-container">
//         <div className="offer-form-wrapper">
//           <div className="glow-effect"></div>
//           <h2>Create New Offer</h2>
          
//           <form onSubmit={handleSubmit(onSubmit)} className="offer-form">
//             <div className="form-group">
//               <label htmlFor="title">Offer Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 placeholder="Enter offer title"
//                 {...register("title", { required: "Offer title is required" })}
//                 className={errors.title ? "input-error" : ""}
//               />
//               {errors.title && <p className="error-message">{errors.title.message}</p>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 placeholder="Describe your offer in detail"
//                 rows="4"
//                 {...register("description", { 
//                   required: "Description is required",
//                   minLength: { value: 10, message: "Description must be at least 10 characters" }
//                 })}
//                 className={errors.description ? "input-error" : ""}
//               ></textarea>
//               {errors.description && <p className="error-message">{errors.description.message}</p>}
//             </div>
            
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   {...register("startDate", { required: "Start date is required" })}
//                   className={errors.startDate ? "input-error" : ""}
//                 />
//                 {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   id="endDate"
//                   {...register("endDate", { 
//                     required: "End date is required",
//                     validate: value => {
//                       const startDate = watch("startDate");
//                       return new Date(value) > new Date(startDate) || "End date must be after start date";
//                     }
//                   })}
//                   className={errors.endDate ? "input-error" : ""}
//                 />
//                 {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
//               </div>
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="locationId">Restaurant</label>
//               <select
//                 id="locationId"
//                 {...register("locationId", { required: "Restaurant is required" })}
//                 className={errors.locationId ? "input-error" : ""}
//               >
//                 <option value="">Select Restaurant</option>
//                 {restaurants?.map((restaurant) => (
//                   <option key={restaurant._id} value={restaurant._id}>{restaurant.title}</option>
//                 ))}
//               </select>
//               {errors.locationId && <p className="error-message">{errors.locationId.message}</p>}
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="foodtype">Food Type</label>
//               <select
//                 id="foodtype"
//                 {...register("foodType", { required: "Food type is required" })}
//                 className={errors.foodtype ? "input-error" : ""}
//               >
//                 <option value="">Select Food Type</option>
//                 {foodTypes?.map((foodType) => (
//                   <option key={foodType._id} value={foodType._id}>{foodType.foodType}</option>
//                 ))}
//               </select>
//               {errors.foodtype && <p className="error-message">{errors.foodtype.message}</p>}
//             </div>
            
//             <div className="form-group checkbox-group">
//               <input
//                 type="checkbox"
//                 id="active"
//                 {...register("active")}
//               />
//               <label htmlFor="active">Set as Active Offer</label>
//             </div>
            
//             <button 
//               type="submit" 
//               className="submit-button"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Processing...' : 'Create Offer'}
//             </button>
//           </form>
//         </div>
//         <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </>
//   );
// };

// export default OfferForm;

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

  useEffect(() => {
    fetchRestaurants();
    fetchFoodTypes();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get("/locations");
      setRestaurants(res.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      toast.error("Failed to load restaurants");
    }
  };

  const fetchFoodTypes = async () => {
    try {
      const res = await axios.get("/offers");
      setFoodTypes(res.data);
    } catch (error) {
      console.error("Error fetching food types:", error);
      toast.error("Failed to load food types");
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

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post('/offer', data);
      if (response.status === 201) {
        toast.success('Offer created successfully!');
        navigate('/offers');
      }
    } catch (error) {
      console.error('Error creating offer:', error);
      toast.error(error.response?.data?.message || 'Offer creation failed');
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
            {/* Offer Title */}
            <div className="form-group">
              <label htmlFor="title">Offer Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter offer title"
                {...register("title", { required: "Offer title is required" })}
                className={errors.title ? "input-error" : ""}
              />
              {errors.title && <p className="error-message">{errors.title.message}</p>}
            </div>
            
            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Describe your offer"
                rows="4"
                {...register("description", { required: "Description is required", minLength: 10 })}
                className={errors.description ? "input-error" : ""}
              ></textarea>
              {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>

            {/* Start Date & End Date */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  {...register("startDate", { required: "Start date is required" })}
                  className={errors.startDate ? "input-error" : ""}
                />
                {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  {...register("endDate", { 
                    required: "End date is required",
                    validate: value => new Date(value) > new Date(watch("startDate")) || "End date must be after start date"
                  })}
                  className={errors.endDate ? "input-error" : ""}
                />
                {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
              </div>
            </div>
            
            {/* Discount Percentage */}
            <div className="form-group">
              <label htmlFor="discountPercentage">Discount Percentage</label>
              <input
                type="number"
                id="discountPercentage"
                placeholder="Enter discount percentage"
                {...register("discountPercentage", { min: 0, max: 100 })}
                className={errors.discountPercentage ? "input-error" : ""}
              />
              {errors.discountPercentage && <p className="error-message">{errors.discountPercentage.message}</p>}
            </div>

            {/* Minimum Order Amount */}
            <div className="form-group">
              <label htmlFor="minOrderAmount">Minimum Order Amount</label>
              <input
                type="number"
                id="minOrderAmount"
                placeholder="Enter minimum order amount"
                {...register("minOrderAmount", { min: 0 })}
                className={errors.minOrderAmount ? "input-error" : ""}
              />
              {errors.minOrderAmount && <p className="error-message">{errors.minOrderAmount.message}</p>}
            </div>

            {/* Restaurant Selection */}
            <div className="form-group">
              <label htmlFor="locationId">Restaurant</label>
              <select
                id="locationId"
                {...register("locationId", { required: "Restaurant is required" })}
                className={errors.locationId ? "input-error" : ""}
              >
                <option value="">Select Restaurant</option>
                {restaurants?.map((restaurant) => (
                  <option key={restaurant._id} value={restaurant._id}>{restaurant.title}</option>
                ))}
              </select>
              {errors.locationId && <p className="error-message">{errors.locationId.message}</p>}
            </div>
            
            {/* Food Type Selection */}
            <div className="form-group">
              <label htmlFor="foodType">Food Type</label>
              <select
                id="foodType"
                {...register("foodType", { required: "Food type is required" })}
                className={errors.foodType ? "input-error" : ""}
              >
                <option value="">Select Food Type</option>
                {foodTypes?.map((foodType) => (
                  <option key={foodType._id} value={foodType.foodType}>{foodType.foodType}</option>
                ))}
              </select>
              {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
            </div>
            
            {/* Active Checkbox */}
            <div className="form-group checkbox-group">
              <input type="checkbox" id="active" {...register("active")} />
              <label htmlFor="active">Set as Active Offer</label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
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
