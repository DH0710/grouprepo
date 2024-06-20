import React from 'react'
import "./HomeScreen.css";
import Sneaker from '../components/Sneakers';


const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'> Latest Sneakers In Stock</h2>

      <div className='homescreen_sneakers'>

        <Sneaker />



      </div>

    </div>
  )
}

export default HomeScreen;
