import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";


// Screens
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


      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main classname="app">
        <Routes>
          <Route exact path="/" element={ <HomeScreen/> } />
          <Route exact path="/login" element={ <LoginScreen/> } />
          <Route exact path="/sneaker/:id" element={ <SneakerScreen/> } />
          <Route exact path="/cart" element={ <CartScreen/> } />
        </Routes>
      </main>


    </Router>
  );
}

export default App;
