import React from 'react'
import { NavLink } from 'react-router-dom'
import "../NavbarComponents/style.scss"
function NavbarComponents() {
  return (
    <>

      <div className='nav-container'>
        <div className='navbar-logo'>
          <NavLink to={"/"}>Start Bootstrap</NavLink >
        </div>
        <div className='navbar-Menu'>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/Pricing"}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to={"/FAQ"}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to={"/Blog"}>Blog</NavLink>
            </li>
            <li >
              <NavLink to={"/Portfolio"}>Portfolio</NavLink>
            </li>
          </ul>
        </div>
        <div className='hamburger-icon'>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>



    </>
  )
}

export default NavbarComponents