import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useState} from "react";


// Screen 
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import SneakerScreen from "./screens/SneakerScreen"
import CartScreen from "./screens/CartScreen"

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from './components/SideDrawer';

function App() {

const [sideToggle, setSideToggle] = useState(false);


  return (
    <Router>
    
      
     <Navbar click={() => setSideToggle(true)}/>
     <SideDrawer show={sideToggle} />
     <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

     <main>
      <Routes>
        <Route exact path= "/login" component= {LoginScreen} />
        <Route exact path= "/" component= {HomeScreen} />
        <Route exact path= "/sneaker/:id" component= {SneakerScreen} />
        <Route exact path= "/cart" componennt= {CartScreen} />
      </Routes>
     </main>

    
    </Router>
  );
}

export default App;
