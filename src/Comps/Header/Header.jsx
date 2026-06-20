import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/house.jpg"
import "./Header.scss"

const Header = () => {
  return (
    <>
     <div class="header_parent parent">
      <div class="header_cont cont">
        <img src={logo} alt="" />
        <div class="navlinks">
          <Link to="/">About Us</Link>
          <Link to="/">Properties</Link>
          <Link to="">Services</Link>
          <Link to="">More</Link>
        </div>
      </div>
     </div>
    </>
  )
}
export default Header
