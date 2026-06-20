import React from 'react'
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div class="hero_parent parent">
        <div class="hero_cont cont">
          <h1>
            Find Your Dream<br/> Home Today
          </h1>
          <p>
            Wlecome to our real agency, Where your dream home awaits.<br/> Brows our listing and find the perfect property for you.
            </p>
            <div className="buttons">
              <button className='view-btn'>view</button>
              <button className='learn-btn'>Learn More</button>
            </div>
        </div>
      </div>

      <div class="service_parent parent">
        <div class="service_cont cont">
          <h2 class="banner-title">Services</h2>
          <p class="banner-desc">
            A bright,Sun-drenched living room with
            expansive windows opening to a private 
            garden.
          </p>
        </div>
      </div>

      <div class="about_parent">
        <div class="about_cont">
         { /* left side text */}
          <div class="abour_text">
            <h2>Modern<br/>Timeless charm</h2>
            <p>
              Discover Poliform’s 2024 preview, featuring sofas, chairs, and
              armchairs embodying diverse lifestyle concepts, alongside striking
              tables, coffee tables, and sideboards.
            </p>
            <button class="about_btn">About Us</button>
          </div>
          {/*Right side image */}
          <div class="about_image">
            <img src="../../assets/livingroom.jpg" alt="Living Room Interior"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
