import "./Sneakers.css";
import {Link} from "react-router-dom";

const Sneaker = ({brand, name, image, size, instock, price, color, sneakerId}) => {
    return (
        <div className='sneaker'>

            <img src={image} alt={name}>

            </img>

            <div className='sneaker-info'>

            <p className='sneaker-brand'> {brand}</p>

                <p className='info-name'> {name} </p>


                <p className='info-instock'> {instock} </p>

                 <p className='sneaker-price'> {price}</p>

                 <p className='sneaker-color'> {color}</p>

                 <p className='sneaker-size'> {size}</p>



                <Link to={`/sneaker/${sneakerId}`} className='info_button'> 
                View 
                </Link>
               

            </div>

        </div>
    )
}

export default Sneaker;
