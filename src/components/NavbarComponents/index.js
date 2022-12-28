import React from 'react'
import "../NavbarComponents/style.scss"
function NavbarComponents() {
  return (
    <>

      <div className='nav-container'>
        <div className='navbar-logo'>
          <a href='#Home'>Start Bootstrap</a>
        </div>
        <div className='navbar-Menu'>
          <ul>
            <li>
              <a href='Home'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li >
              <a href='#'>Portfolio</a>
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