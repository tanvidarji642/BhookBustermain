import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import '../../assets/css/Auth.css';

export const AddOffer = () => {
  const { register, handleSubmit } = useForm();
  const [animating, setAnimating] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  // const [locations, setLocations] = useState([]);
  // const [Offers, setOffers] = useState([]);

  useEffect(() => {
    getAllStates();
    // getCityByStateId();
    // getAreaByCityId();
  }, []);

  const getAllStates = async () => {
    try {
      const res = await axios.get("/getStates");
      if (res.status) {
        setStates(res?.data);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  }

  const getCityByStateId = async (id) => {
    try {
      const res = await axios.get(`/city/${id}`);
      if (res.status) {
        setCities(res?.data);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  const getAreaByCityId = async (id) => {
    try {
      const res = await axios.get(`/area/${id}`);
      if (res.status) {
        setAreas(res?.data);
      }
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  }

  // const getLocationByAreaId = async () => {
  //   try {
  //     const res = await axios.get(`/location/${id}`);
  //     if (res.status) {
  //       setLocations(res?.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching locations:", error);
  //   }
  // }

  // const getOfferByLocationId = async () => {
  //   try {
  //     const res = await axios.get("/offers");
  //     if (res.status) {
  //       setOffers(res?.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching offers:", error);
  //   }
  // }

  const submitHandler = async (data) => { 
        console.log(data);
        try {
          const res = await axios.post("/addScreen", data);
          console.log(res.data);
        } catch (error) {
          console.error("Error adding screen:", error);   
        }
      }

  return (
    
    // <div>
    //   <h1>ADD OFFER</h1>
    //   <form onSubmit={handleSubmit(submitHandler)} >
    //     <div>
    //       <label>NAME</label>
    //       <input type='text' {...register("name")} required />
    //     </div>
    //     <div>
    //       <label>STATUS</label>
    //       <select {...register("status")} required>
    //         <option value="true">True</option>
    //         <option value="false">False</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label>STATE</label>
    //       <select {...register("stateID")} required
    //         onChange={(event) => { getCityByStateId(event.target.value) }} >
    //         <option value="">Select State</option>
    //         {states?.map((s) => (
    //           <option key={s._id} value={s._id}>{s.name}</option>
    //         ))}
    //       </select>
    //     </div>

    //     <div>
    //       <label>CITY</label>
    //       <select {...register("cityId")} required
    //       onChange={(event) => { getAreaByCityId(event.target.value) }}>
    //         <option value="">Select City</option>
    //         {cities?.map((c) => (
    //           <option key={c._id} value={c._id}>{c.name}</option>
    //         ))}
    //       </select>
    //     </div>

    //     <div>
    //       <label>Area</label>
    //       <select {...register("areaId")} required 
    //       onChange={(event) => getLocationByAreaId(event.target.value)} >
    //         <option value="">Select Area</option>
    //         {areas?.map((a) => (
    //           <option key={a._id} value={a._id}>{a._id || a.areaName}</option>
    //         ))}
    //       </select>
    //     </div>
    //     <div>
    //     <label>Location</label>
    //     <select {...register("locationId")} required
    //       onChange={(event) => getOfferByLocationId(event.target.value)}>
    //       <option value="">Select Location</option>
    //       {locations?.map((l) => (
    //         <option key={l._id} value={l._id}>{l.name}</option>
    //       ))}
    //     </select> 
    //   </div>
        
    //   <div>
    //     <label>OFFERS</label>
    //     <select {...register("offerId")} required>
    //       <option value="">Select Offer</option>
    //       {Offers?.map((o) => (
    //         <option key={o._id} value={o._id}>{o.name}</option>
    //       ))}
    //     </select>
    //   </div>

    //   <div>
    //     <input type='submit' value='ADD SCREEN' />
    //   </div>    
    //   </form>
    // </div>
    <div className={`auth-container ${animating ? 'slide-left' : ''}`}>
    <div className="auth-left">
      <div className="auth-welcome">
        {/* <h1>Create Account</h1> */}
        {/* <p>Join us today and start your journey with our platform.</p> */}
        <h1>Join Us Today</h1>
        <p>Create an account and start your journey with us. It only takes a few minutes.</p>
      </div>
    </div>
    
    <div className="auth-right">
      <div className="auth-container">
        <div className="auth-form-container">
          <h1>ADD OFFER</h1>
          <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
            
            <div className="form-group">
              <label>NAME</label>
              <input type='text' {...register("name")} required className="input-field" />
            </div>

            <div className="form-group">
              <label>STATUS</label>
              <select {...register("status")} required className="input-field">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className="form-group">
              <label>STATE</label>
              <select 
                {...register("stateID")} 
                required 
                className="input-field"
                onChange={(event) => getCityByStateId(event.target.value)}
              >
                <option value="">Select State</option>
                {states?.map((s) => (
                  <option key={s._id} value={s._id}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>CITY</label>
              <select 
                {...register("cityId")} 
                required 
                className="input-field"
                onChange={(event) => getAreaByCityId(event.target.value)}
              >
                <option value="">Select City</option>
                {cities?.map((c) => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>AREA</label>
              <select 
                {...register("areaId")} 
                required 
                className="input-field"
                
              >
                <option value="">Select Area</option>
                {areas?.map((a) => (
                  <option key={a._id} value={a._id}>{a.areaName}</option>
                ))}
              </select>
            </div>

            {/* <div className="form-group">
              <label>LOCATION</label>
              <select 
                {...register("locationId")} 
                required 
                className="input-field"
                onChange={(event) => getOfferByLocationId(event.target.value)}
              >
                <option value="">Select Location</option>
                {locations?.map((l) => (
                  <option key={l._id} value={l._id}>{l.name}</option>
                ))}
              </select> 
            </div>

            <div className="form-group">
              <label>OFFERS</label>
              <select {...register("offerId")} required className="input-field">
                <option value="">Select Offer</option>
                {Offers?.map((o) => (
                  <option key={o._id} value={o._id}>{o.name}</option>
                ))}
              </select>
            </div> */}

            <div className="form-group">
              <input type='submit' value='ADD OFFERS' className="auth-button" />
            </div>    

          </form>
        </div>
      </div>
    </div>
  
  </div>

  )
}



