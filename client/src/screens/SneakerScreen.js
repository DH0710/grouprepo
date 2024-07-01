import React from 'react'
import "./SneakerScreen.css";

const SneakerScreen = () => {
  return (
    <div className='sneakerscreen'>

      <div classname="sneakerscreen-left">

        <div className='left-image'>

          <img src="https://m.media-amazon.com/images/I/71PkpSxlQ7L._AC_SX575_.jpg"
            alt="sneaker-name" />
        </div>

        <div className='left-info'>
          <p className='left-name'> Air Jordan Retro 3</p>
          <p> Price: 199.99 </p>
          <p> Colorway: White/Cement Gray  </p>

        </div>




      </div>






      <div classname="sneakerscreen-right">
        <div className='right-info'>
          <p>
            Price: <span> 299.99 </span>
          </p>

          <p>
            Status: <span> In Stock </span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default SneakerScreen;
