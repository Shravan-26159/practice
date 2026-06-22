import React from 'react'
import "./Home.scss";
import abt_img from"../../assets/livingroom.jpg";
import { IoIosHome } from "react-icons/io";
import { PiHandCoinsBold } from "react-icons/pi";
import { HiBanknotes } from "react-icons/hi2";
import { FaWarehouse } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

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
          <img src={abt_img} alt="Living Room Interior"/>

          <div class="about_text">
            <h2>Modern Style Timeless Chram</h2>
            <p>
               Discover Poliform’s 2024 preview, featuring sofas, chairs, and
              armchairs embodying diverse lifestyle concepts, alongside striking
              tables, coffee tables, and sideboards.
            </p>
            <button class="about_btn">about us</button>
          </div>
        </div>
      </div>

      <div className="service_grid parent">
  <div className="service_grid_cont cont">

    {/* First row - 3 columns */}
    <div className="top_content">
      <div className="box">
        <span><IoIosHome /></span>
        <h3>Find Your Home</h3>
        <p>
          Access curated residential listing in your 
          ideal areas. Find the perfect match for you 
          needs and lifestyle with our advanced search 
          tools
        </p>
      </div>

      <div className="box">
        <span><PiHandCoinsBold /></span>
        <h3>Home Ownership</h3>
        <p>
          Buying a home exineriod listings in your 
          home to revartor the your next home end 
          need to buy to ront your outing a home.
        </p>
      </div>

      <div className="box">
        <span><HiBanknotes /></span>
        <h3>Property Valuation</h3>
        <p>
          Estimate value of vittor property tn about
          value and hoe matis abeat the annual:
          market trends and intermwarking trends.
        </p>
      </div>
    </div>

    {/* Second row - 3 columns */}
    <div className="top_content">
      <div className="box">
        <span><FaWarehouse /></span>
        <h3>Residential Leasing</h3>
        <p>
          leasing and renting properties with new 
          properties, designo fon, leasing account
          properties, and renlcibale rent stories.
        </p>
      </div>
      <div className="box">
        <span><FaCompass /></span>
        <h3>Neighborhood info</h3>
        <p>
          local facilities, butn and dtrionate local,
          facilities, areas, inrime, disprate, cicuations,
          and pranting of commoratints
        </p>
      </div>
      <div className="box">
        <span><FaHandshakeSimple /></span>
        <h3>Agentt Connection</h3>
        <p>
          Find an agent to your toams to find your 
          home aheme proparing it and a first to 
          sineen when your you
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Home
