import React from 'react'
import "./CartScreen.css"
// import componemnts

import Newitem from "../components/Newitem"
const CartScreen = () => {
  return (
    <div className='cartscreen'>

      <div className='cartscreen_left'>
        <h2> Shopping Cart </h2>

        <Newitem />


      </div>

      <div className='cartscreen_right'>

      </div>

    </div>
  )
}

export default CartScreen
