import React from 'react'
import "./SneakerScreen.css";

const SneakerScreen = () => {
  return (
    <div className="sneakerscreen">

      <div classname="sneakerscreen-left">

        <div className='left-image'>

          <img src="https://m.media-amazon.com/images/I/71PkpSxlQ7L._AC_SX575_.jpg"
            alt="sneaker-name" />
        </div>

        <div className='left-info'>
          <p className='left-name'> Air Jordan Retro 3</p>
          <p> Price: 199.99 </p>
          <p> First hitting the scene in 1988, 
            this sneaker quickly leapt to iconic status, 
            loved for its groundbreaking design and Michael Jordan's 
            legendary on-court exploits.  </p>

        </div>




      </div>






      <div classname="sneakerscreen-right">
        <div className='right-info'>
          <p>
            Price: <span> $199.99</span>
          </p>

          <p>
            Status: <span> In Stock </span>
          </p>

          <p>
            Qty
            <select >
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
            </select>
          </p>

          <p>
            Sz: 
            <select >
              <option value="9"> 9 </option>
              <option value="9.5"> 9.5 </option>
              <option value="10"> 10 </option>
            </select>
          </p>

          <p>
            <button type="button"> Add To Cart </button>
          </p>

        </div>

      </div>

    </div>
  )
}

export default SneakerScreen;
