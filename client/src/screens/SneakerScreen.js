import React from 'react'
import "./SneakerScreen.css";

const SneakerScreen = () => {
  return (
    <div className='sneakerscreen'>

      <div className='sneakerscreen_left'>

        <div className="left_image">
          <img src="https://sneak.eu/cdn/shop/files/Sneak-Air-Jordan-3-Retro-White-Cement-Reimagined-_2023_-2.png?v=1686324817&width=5000"
            alt="sneaker name" />
        </div>

        <div className='left_info'>

          <p className='left_name'> Air Jordan Retro 3 "Cement"</p>
          <p> Price: $199.99</p>
          <p> The revered Air Jordan 3 'Black Cement' is set to
            dazzle once again with its re-release on
            November 23, 2024. First hitting the scene in 1988,
            this sneaker quickly leapt to iconic status,
            loved for its groundbreaking design and Michael Jordan's
            legendary on-court exploits.
          </p>
        </div>

      </div>


      <div className='sneakerscreen_right'> 

      <div className='right_info'>
        <p>
          Price: <span> $199.99 </span>
        </p>

        <p>
          Status:  <span> In Stock </span>
        </p>

        <p>
          Sz
          <select>
          <option value="9"> 9 </option>
            <option value="9.5"> 9.5 </option>
            <option value="10"> 10 </option>
          </select>
        </p>

        <p>
          Qty
          <select> 
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
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
