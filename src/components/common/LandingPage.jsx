  import React from "react";
  import "../../assets/css/LandingPage.css";
  import UserNavbar from "../layouts/UserNavbar";

  const LandingPage = () => {
    return (
      <div className="landing-page">
      <UserNavbar />
        <div className="landing-page__hero">
          {/* <h1>Welcome to the Food Delivery App</h1>  */}
          <p>Order your favourite food from your favourite restaurants</p>

          {/* <div className="landing-page__search">
            <input type="text" placeholder="Search for restaurants or food" />
            <button>Search</button>
          </div>
          <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pepperoni-pizza-gm187248625-27699016?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=pizza" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pepperoni-pizza-gm187248625-27699016?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=pizza" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pepperoni-pizza-gm187248625-27699016?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=pizza" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pepperoni-pizza-gm187248625-27699016?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=pizza" alt="category" />
              <p>Category 1</p>
            </div> */}
        </div>
        <div className="landing-page__categories">
          <h2>Categories</h2>
          <div className="landing-page__categories-list">
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pepperoni-pizza-gm187248625-27699016?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=pizza" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/pizza-gm184921098-18769510" alt="category" />
              <p>Category 2</p>
            </div>
            <div className="landing-page__category">
              <img src="https://pixabay.com/photos/architecture-landmark-monument-9033164/" alt="category" />
              <p>Category 3</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 4</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/indian-landmark-gadi-sagar-in-rajasthan-gm511119416-86546667?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=adp_topbanner_media&utm_term=architecture+landmark" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/gadisar-lake-in-the-morning-at-jaisalmer-rajasthan-india-gm958634716-261760754" alt="category" />
              <p>Category 2</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 3</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 4</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 4</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/indian-landmark-gadi-sagar-in-rajasthan-gm511119416-86546667?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=adp_topbanner_media&utm_term=architecture+landmark" alt="category" />
              <p>Category 1</p>
            </div>
            <div className="landing-page__category">
              <img src="https://www.istockphoto.com/photo/gadisar-lake-in-the-morning-at-jaisalmer-rajasthan-india-gm958634716-261760754" alt="category" />
              <p>Category 2</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 3</p>
            </div>
            <div className="landing-page__category">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="category" />
              <p>Category 4</p>
            </div>
            
          </div>
        </div>
        <div className="landing-page__popular-items">
          <h2>Popular Items</h2>
          <div className="landing-page__popular-items-list">
            <div className="landing-page__popular-item">
              <img src="https://www.istockphoto.com/photo/gadisar-lake-in-the-morning-at-sunrise-man-made-water-reservoir-with-temples-in-gm1180343722-330637004" alt="item" />    
              <p>Item 1</p>
            </div>
            <div className="landing-page__popular-item">
              <img src="https://via.placeholder.com/150" alt="item" />
              <p>Item 2</p>
            </div>
            <div className="landing-page__popular-item">
              <img src="https://www.istockphoto.com/photo/gadsisar-sagar-lake-in-jaisalmer-rajasthan-sunrise-at-gadsisar-sagar-lake-gm1222287414-358608767" alt="item" />    
              <p>Item 3</p>
            </div>
            <div className="landing-page__popular-item">
              <img src="https://via.placeholder.com/150" alt="item" />
              <p>Item 4</p>
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://www.istockphoto.com/photo/india-agra-gm945548838-258253823"
                    alt="item"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Item 1</h5>
                    <p className="card-text">Description of item 1</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://www.istockphoto.com/photo/sunset-gm2040774606-562673411"
                    alt="item"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Item 2</h5>
                    <p className="card-text">Description of item 2</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="item"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Item 3</h5>
                    <p className="card-text">Description of item 3</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://www.istockphoto.com/photo/majestic-taj-mahal-agra-rajasthan-india-gm2203418944-620954526"
                    alt="item"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Item 4</h5>
                    <p className="card-text">Description of item 4</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              </div>
          
          </div>
      </div>
    );
  };

  export default LandingPage;