import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = ({ click }) => {
  return (
    <nav className='navbar'>


      <div className='navbar_logo'>
        <h1> Swish Kicks </h1>

      </div>



      <ul className='navbar_links'>

        <li>
          <Link to="/cart" className='cart_link'>
            <i className='fas fa-shopping-cart'> </i>

            <span>
              Cart
              <span className='cartlogo_badge'> 0 </span>
            </span>

          </Link>
        </li>

        <li>
          <Link to="/">
            Sneaker Store
          </Link>
        </li>

        <li>
          <Link to="/login"> Login/Register </Link>
        </li>

      </ul>



      <div className='hamburger_menu' onClick={click}>

        <div></div>
        <div></div>
        <div></div>

      </div>

    </nav>
  )
}

export default Navbar
