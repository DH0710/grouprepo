import React from 'react'
import "./Newitem.css"
import {Link} from "react-router-dom";



const Newitem = () => {
  return (
    <div className='newitem'>

      <div classname="newitem_image">

        <img src="https://sneak.eu/cdn/shop/files/Sneak-Air-Jordan-3-Retro-White-Cement-Reimagined-_2023_-2.png?v=1686324817&width=5000" alt="sneaker name" />

      </div>


      <Link to= { `/sneaker/${111}`} className='newitem_name'> 

      <p> Sneaker 1 </p>
      
      </Link>


      <p className='newitem_price'> $199.99</p>


      <select className='newitem_select'> 
        <option value="1"> </option>
        <option value="2"> </option>
        <option value="3"> </option>
        <option value="4"> </option>
      </select>



      <button className='newitem_deleteBtn'> 

       <i classname="fas fa-trash">  </i>

      </button>





    </div>
  )
}

export default Newitem
