// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/css/Offer.css';
// import Rsidebar from './Rsidebar';

// const OfferForm = () => {
//   const navigate = useNavigate();
//   const [restaurants, setRestaurants] = useState([]);
//   const [foodTypes, setFoodTypes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetchRestaurants();
//     fetchFoodTypes();
//     fetchCategories();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//       const res = await axios.get('/locations');
//       setRestaurants(res.data);
//     } catch (error) {
//       toast.error('Failed to load restaurants');
//     }
//   };

//   const fetchFoodTypes = async () => {
//     try {
//       const res = await axios.get('/offers');
//       setFoodTypes(res.data);
//     } catch (error) {
//       toast.error('Failed to load food types');
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get('/offer/categories');
//       console.log('Fetched Categories:', res.data); // Debug log
  
//       if (Array.isArray(res.data.data)) {
//         setCategories(res.data.data);
//       } else {
//         console.error('Unexpected categories format:', res.data);
//         setCategories([]);
//       }
//     } catch (error) {
//       toast.error('Failed to load categories');
//     }
//   };

//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     watch 
//   } = useForm({
//     defaultValues: {
//       active: true,
//       startDate: new Date().toISOString().split('T')[0],
//       endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//       discountPercentage: 0,
//       minOrderAmount: 0
//     }
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//     const handleChange = (e) => {
//       const { name, value, files } = e.target;
  
//       if (name === "profilePic") {
//           const file = files[0];
//           if (!file) {
//               toast.error("Please select a profile picture.");
//               return;
//           }
  
//           setProfilePic(file); // ✅ Store file for FormData
  
//           const reader = new FileReader();
//           reader.onloadend = () => {
//               setFormData((prev) => ({
//                   ...prev,
//                   profilePicPath: reader.result, // ✅ Base64 preview (Optional)
//               }));
//           };
//           reader.readAsDataURL(file);
//       } else {
//           setFormData((prev) => ({
//               ...prev,
//               [name]: value,
//           }));
//       }
//   };

//   const onSubmit = async (data) => {
//     try {
//       console.log("Form Data Before Processing:", data);
  
//       // Create FormData object for file upload
//       const formData = new FormData();
//       formData.append("title", data.title);
//       formData.append("description", data.description || "");
//       formData.append("active", data.active);
//       formData.append("startDate", new Date(data.startDate).toISOString());
//       formData.append("endDate", new Date(data.endDate).toISOString());
//       formData.append("discountPercentage", data.discountPercentage || "");
//       formData.append("minOrderAmount", data.minOrderAmount || "");
//       formData.append("locationId", data.locationId);
//       formData.append("foodType", data.foodType);
//       formData.append("category", data.category);
  
//       // Ensure an image file is selected before submission
//       if (!data.image || data.image.length === 0) {
//         toast.error("Please upload an offer image.");
//         return;
//       }

//       formData.append("image", data.image[0]);
  
//       console.log("Submitting form...");
//       const res = await axios.post("/offer/addwithfile", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
  
//       console.log("Response:", res.data);
  
//       if (res.status === 200 || res.status === 201) {
//         toast.success("Offer created successfully!");
//         setTimeout(() => {
//           navigate("/offers");
//         }, 1500);
//       } else {
//         toast.error("Offer creation failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       if (error.response) {
//         toast.error(error.response.data.detail || "Something went wrong.");
//       } else {
//         toast.error("Connection error. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <Rsidebar />
//       <div className="offer-form-container">
//         <div className="offer-form-wrapper">
//           <h2>Create New Offer</h2>
//           <div className="form-content-scroll">
//           <form onSubmit={handleSubmit(onSubmit)} className="offer-form">
//             <div className="form-group">
//               <label htmlFor="title">Offer Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 {...register('title', { required: 'Offer title is required' })}
//                 className={errors.title ? 'input-error' : ''}
//               />
//               {errors.title && <p className="error-message">{errors.title.message}</p>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 {...register('description', { required: 'Description is required', minLength: 10 })}
//                 className={errors.description ? 'input-error' : ''}
//               ></textarea>
//               {errors.description && <p className="error-message">{errors.description.message}</p>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="category">Category</label>
//               <select
//                 id="category"
//                 {...register('category', { required: 'Category is required' })}
//                 className={errors.category ? 'input-error' : ''}
//               >
//                 <option value="">Select Category</option>
//                 {categories.map((category) => (
//                   <option key={category._id} value={category._id}>{category.name}</option>
//                 ))}
//               </select>
//               {errors.category && <p className="error-message">{errors.category.message}</p>}
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   {...register('startDate', { required: 'Start date is required' })}
//                   className={errors.startDate ? 'input-error' : ''}
//                 />
//                 {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   id="endDate"
//                   {...register('endDate', { 
//                     required: 'End date is required',
//                     validate: value => new Date(value) > new Date(watch('startDate')) || 'End date must be after start date'
//                   })}
//                   className={errors.endDate ? 'input-error' : ''}
//                 />
//                 {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
//               </div>
//             </div>
//             <div className="form-group checkbox-group">
//               <input type="checkbox" id="active" {...register('active')} />
//               <label htmlFor="active">Is Active?</label>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="discountPercentage">Discount (%)</label>
//                 <input
//                   type="number"
//                   id="discountPercentage"
//                   {...register('discountPercentage', { min: 0, max: 100 })}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="minOrderAmount">Min Order Amount</label>
//                 <input
//                   type="number"
//                   id="minOrderAmount"
//                   {...register('minOrderAmount', { min: 0 })}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="image">Upload Offer Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="image"
//                 {...register("image", { required: "Offer image is required" })}
//                 onChange={(e) => {
//                   handleChange(e); 
//                   setPreviewImage(e.target.files[0]);
//                 }}
//                 className={errors.image ? "input-error" : ""}
//               />

//               {/* Image Preview */}
//               {previewImage && (
//                 <div className="file-indicator">
//                   <img
//                     src={URL.createObjectURL(previewImage)}
//                     alt="Offer Preview"
//                     className="preview-image"
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="locationId">Restaurant</label>
//               <select
//                 id="locationId"
//                 {...register('locationId', { required: 'Restaurant is required' })}
//                 className={errors.locationId ? 'input-error' : ''}
//               >
//                 <option value="">Select Restaurant</option>
//                 {restaurants.map(restaurant => (
//                   <option key={restaurant._id} value={restaurant._id}>{restaurant.title}</option>
//                 ))}
//               </select>
//               {errors.locationId && <p className="error-message">{errors.locationId.message}</p>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="foodType">Food Type</label>
//               <input
//                 type="text"
//                 id="foodType"
//                 {...register('foodType', { required: 'Food type is required' })}
//                 className={errors.foodType ? 'input-error' : ''}
//               />
//               {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
//             </div>
//             <button type="submit" className="submit-button" disabled={isLoading}>
//               {isLoading ? 'Processing...' : 'Create Offer'}
//             </button>
//           </form>
//           </div>
//         </div>
//         <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </>
//   );
// };

// export default OfferForm;

// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/css/Offer.css';
// import Rsidebar from './Rsidebar';

// const OfferForm = () => {
//   const navigate = useNavigate();
//   const [restaurants, setRestaurants] = useState([]);
//   const [foodTypes, setFoodTypes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);

//   useEffect(() => {
//     fetchRestaurants();
//     fetchFoodTypes();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//       const res = await axios.get('/locations');
//       setRestaurants(res.data);
//     } catch (error) {
//       toast.error('Failed to load restaurants');
//     }
//   };

//   const fetchFoodTypes = async () => {
//     try {
//       const res = await axios.get('/offers');
//       setFoodTypes(res.data);
//     } catch (error) {
//       toast.error('Failed to load food types');
//     }
//   };

//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     watch 
//   } = useForm({
//     defaultValues: {
//       active: true,
//       startDate: new Date().toISOString().split('T')[0],
//       endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//       discountPercentage: 0,
//       minOrderAmount: 0
//     }
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//     const handleChange = (e) => {
//       const { name, value, files } = e.target;
  
//       if (name === "profilePic") {
//           const file = files[0];
//           if (!file) {
//               toast.error("Please select a profile picture.");
//               return;
//           }
  
//           setProfilePic(file); // ✅ Store file for FormData
  
//           const reader = new FileReader();
//           reader.onloadend = () => {
//               setFormData((prev) => ({
//                   ...prev,
//                   profilePicPath: reader.result, // ✅ Base64 preview (Optional)
//               }));
//           };
//           reader.readAsDataURL(file);
//       } else {
//           setFormData((prev) => ({
//               ...prev,
//               [name]: value,
//           }));
//       }
//   };

//   const onSubmit = async (data) => {
//     try {
//       console.log("Form Data Before Processing:", data);
  
//       // Create FormData object for file upload
//       const formData = new FormData();
//       formData.append("title", data.title);
//       formData.append("description", data.description || "");
//       formData.append("active", data.active);
//       formData.append("startDate", new Date(data.startDate).toISOString());
//       formData.append("endDate", new Date(data.endDate).toISOString());
//       formData.append("discountPercentage", data.discountPercentage || "");
//       formData.append("minOrderAmount", data.minOrderAmount || "");
//       formData.append("locationId", data.locationId);
//       formData.append("foodType", data.foodType);
  
//       // Ensure an image file is selected before submission
//       if (!data.image || data.image.length === 0) {
//         toast.error("Please upload an offer image.");
//         return;
//       }

//       formData.append("image", data.image[0]);
  
//       console.log("Submitting form...");
//       const res = await axios.post("/offer/addwithfile", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
  
//       console.log("Response:", res.data);
  
//       if (res.status === 200 || res.status === 201) {
//         toast.success("Offer created successfully!");
//         setTimeout(() => {
//           navigate("/offers");
//         }, 1500);
//       } else {
//         toast.error("Offer creation failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       if (error.response) {
//         toast.error(error.response.data.detail || "Something went wrong.");
//       } else {
//         toast.error("Connection error. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <Rsidebar />
//       <div className="offer-form-container">
//         <div className="offer-form-wrapper">
//           <h2>Create New Offer</h2>
//           <div className="form-content-scroll">
//           <form onSubmit={handleSubmit(onSubmit)} className="offer-form">
//             <div className="form-group">
//               <label htmlFor="title">Offer Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 {...register('title', { required: 'Offer title is required' })}
//                 className={errors.title ? 'input-error' : ''}
//               />
//               {errors.title && <p className="error-message">{errors.title.message}</p>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 {...register('description', { required: 'Description is required', minLength: 10 })}
//                 className={errors.description ? 'input-error' : ''}
//               ></textarea>
//               {errors.description && <p className="error-message">{errors.description.message}</p>}
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   {...register('startDate', { required: 'Start date is required' })}
//                   className={errors.startDate ? 'input-error' : ''}
//                 />
//                 {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   id="endDate"
//                   {...register('endDate', { 
//                     required: 'End date is required',
//                     validate: value => new Date(value) > new Date(watch('startDate')) || 'End date must be after start date'
//                   })}
//                   className={errors.endDate ? 'input-error' : ''}
//                 />
//                 {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
//               </div>
//             </div>
//             <div className="form-group checkbox-group">
//               <input type="checkbox" id="active" {...register('active')} />
//               <label htmlFor="active">Is Active?</label>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="discountPercentage">Discount (%)</label>
//                 <input
//                   type="number"
//                   id="discountPercentage"
//                   {...register('discountPercentage', { min: 0, max: 100 })}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="minOrderAmount">Min Order Amount</label>
//                 <input
//                   type="number"
//                   id="minOrderAmount"
//                   {...register('minOrderAmount', { min: 0 })}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="image">Upload Offer Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="image"
//                 {...register("image", { required: "Offer image is required" })}
//                 onChange={(e) => {
//                   handleChange(e); 
//                   setPreviewImage(e.target.files[0]);
//                 }}
//                 className={errors.image ? "input-error" : ""}
//               />

//               {/* Image Preview */}
//               {previewImage && (
//                 <div className="file-indicator">
//                   <img
//                     src={URL.createObjectURL(previewImage)}
//                     alt="Offer Preview"
//                     className="preview-image"
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="locationId">Restaurant</label>
//               <select
//                 id="locationId"
//                 {...register('locationId', { required: 'Restaurant is required' })}
//                 className={errors.locationId ? 'input-error' : ''}
//               >
//                 <option value="">Select Restaurant</option>
//                 {restaurants.map(restaurant => (
//                   <option key={restaurant._id} value={restaurant._id}>{restaurant.title}</option>
//                 ))}
//               </select>
//               {errors.locationId && <p className="error-message">{errors.locationId.message}</p>}
//             </div>

//             {/* <div className="form-group">
//               <label htmlFor="foodType">Food Type</label>
//               <input
//                 type="text"
//                 id="foodType"
//                 {...register('foodType', { required: 'Food type is required' })}
//                 className={errors.foodType ? 'input-error' : ''}
//               />
//               {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
//             </div> */}

//             <div className="form-group">
//               <label htmlFor="foodType">Food Type</label>
//               <select
//                 id="foodType"
//                 {...register('foodType', { required: 'Food type is required' })}
//                 className={errors.foodType ? 'input-error' : ''}
//               >
//                 <option value="">Select Food Type</option>
//                 <option value="veg">Vegetarian - Salad</option>
//                 <option value="non-veg">Non-Vegetarian - Chicken Curry</option>
//                 <option value="vegan">Vegan - Tofu Stir Fry</option>
//                 <option value="gluten-free">Gluten-Free - Quinoa Bowl</option>
//                 <option value="pasta">Pasta - Alfredo</option>
//                 <option value="burger">Burger - Cheese Burger</option>
//                 <option value="pizza">Pizza - Margherita</option>
//               </select>
//               {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
//             </div>

//             <button type="submit" className="submit-button" disabled={isLoading}>
//               {isLoading ? 'Processing...' : 'Create Offer'}
//             </button>
//           </form>
//           </div>
//         </div>
//         <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </>
//   );
// };

// export default OfferForm;
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Offer.css";
import Rsidebar from "./Rsidebar";

const OfferForm = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [offers, setOffers] = useState([]); // Stores the fetched offers

  useEffect(() => {
    fetchRestaurants();
    fetchFoodTypes();
    fetchOffers(); // Fetch existing offers to display images
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get("/locations");
      setRestaurants(res.data);
    } catch (error) {
      toast.error("Failed to load restaurants");
    }
  };

  const fetchFoodTypes = async () => {
    try {
      const res = await axios.get("/offers");
      setFoodTypes(res.data);
    } catch (error) {
      toast.error("Failed to load food types");
    }
  };

  const fetchOffers = async () => {
    try {
      const res = await axios.get("/offers");
      setOffers(res.data); // Store offers including image URLs
    } catch (error) {
      toast.error("Failed to fetch offers");
    }
  };

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      active: true,
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      discountPercentage: 0,
      minOrderAmount: 0,
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log("Form Data Before Processing:", data);

      // Create FormData object for file upload
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description || "");
      formData.append("active", data.active);
      formData.append("startDate", new Date(data.startDate).toISOString());
      formData.append("endDate", new Date(data.endDate).toISOString());
      formData.append("discountPercentage", data.discountPercentage || "");
      formData.append("minOrderAmount", data.minOrderAmount || "");
      formData.append("locationId", data.locationId);
      formData.append("foodType", data.foodType);

      // Ensure an image file is selected before submission
      if (!data.image || data.image.length === 0) {
        toast.error("Please upload an offer image.");
        setIsLoading(false);
        return;
      }

      formData.append("image", data.image[0]);

      console.log("Submitting form...");
      const res = await axios.post("/offer/addwithfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", res.data);

      if (res.status === 200 || res.status === 201) {
        toast.success("Offer created successfully!");
        fetchOffers(); // Refresh the list to show the new offer with image
        setTimeout(() => {
          navigate("/offers");
        }, 1500);
      } else {
        toast.error("Offer creation failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.detail || "Something went wrong.");
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
          <div className="form-content-scroll">
            <form onSubmit={handleSubmit(onSubmit)} className="offer-form">
              <div className="form-group">
                <label htmlFor="title">Offer Title</label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Offer title is required" })}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <p className="error-message">{errors.title.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  {...register("description", { required: "Description is required", minLength: 10 })}
                  className={errors.description ? "input-error" : ""}
                ></textarea>
                {errors.description && <p className="error-message">{errors.description.message}</p>}
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
                <label htmlFor="image">Upload Offer Image</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Offer image is required" })}
                  onChange={(e) => setPreviewImage(URL.createObjectURL(e.target.files[0]))}
                  className={errors.image ? "input-error" : ""}
                />
                {previewImage && <img src={previewImage} alt="Offer Preview" className="preview-image" />}
              </div>

        

        {/* Display Offer Images */}
        {/* <div className="offer-list">
          <h3>Existing Offers</h3>
          {offers.length === 0 ? (
            <p>No offers available.</p>
          ) : (
            offers.map((offer) => (
              <div key={offer._id} className="offer-card">
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                {offer.image ? (
                  <img src={offer.image} alt="Offer" className="offer-image" />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>
            ))
          )}
        </div> */}
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

            {/* <div className="form-group">
              <label htmlFor="foodType">Food Type</label>
               <select
                id="foodType"
                {...register('foodType', { required: 'Food type is required' })}
                className={errors.foodType ? 'input-error' : ''}
              >
                <option value="">Select Food Type</option>
                <option value="veg">Vegetarian - Salad</option>
                <option value="non-veg">Non-Vegetarian - Chicken Curry</option>
                <option value="vegan">Vegan - Tofu Stir Fry</option>
                <option value="gluten-free">Gluten-Free - Quinoa Bowl</option>
                <option value="pasta">Pasta - Alfredo</option>
                <option value="burger">Burger - Cheese Burger</option>
                <option value="pizza">Pizza - Margherita</option>
                <option value="pizza">Biryani - Margherita</option>
                <option value="pizza">Coffee - Cold Coffee</option>
              </select>
              {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
            </div> */}

            <div className="form-group">
              <label htmlFor="foodType">Food Type</label>
              <input
                type="text"
                id="foodType"
                {...register('foodType', { required: 'Food type is required' })}
                className={errors.foodType ? 'input-error' : ''}
                placeholder="e.g. Vegetarian - Salad"
              />
              {errors.foodType && <p className="error-message">{errors.foodType.message}</p>}
            </div>


            <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? "Processing..." : "Create Offer"}
              </button>
            </form>
          </div>
        </div>
            
        
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default OfferForm;
