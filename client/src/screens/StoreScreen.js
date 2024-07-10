import "./StoreScreen.css";
import Sneakers from '../components/Sneakers';


const StoreScreen = () => {
    
    return (
        <div className='storescreen'>

            <h2 className="storescreen_title"> Latest Sneakers </h2>

            <div className="storescreen_sneakers"> 

            <Sneakers />
            <Sneakers />
            <Sneakers />
            <Sneakers />
            <Sneakers />

            </div>
    
    
         </div>
      )


    
}

export default StoreScreen;