import "./Sneakers.css";
import { Link } from "react-router-dom";

const Sneakers = () => {
    return (

       

        
        <div className='sneaker'>

            <img src="https://m.media-amazon.com/images/I/71PkpSxlQ7L._AC_SX575_.jpg" alt=""></img>

            

            <div className='sneaker-info'>

            <p className='sneaker-brand'> <h2> Nike </h2> </p>

                <p className='sneaker-name'> Air Jordan Retro 3</p>


                <p className='sneaker-instock'> In stock: 2 </p>

                 <p className='sneaker-price'> 199.99</p>

                 <p className='sneaker-color'>White/Cement </p>

                 <p className='sneaker-size'>Size: 9.5, 10 </p>



                 <Link to={`/sneaker/${1111}`} className='sneaker-button'> 
                 View 
                 </Link>
               

            </div>

        </div>

        

        
    );
};

export default Sneakers;
