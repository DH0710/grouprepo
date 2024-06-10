import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Screen 
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import SneakerScreen from "./screens/SneakerScreen"
import CartScreen from "./screens/CartScreen"

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    
      
     <Navbar />
     { /* Side Drawer   */}
     {/* Back drop  */}

     <main>
      <Routes>
        <Route exact path= "/login" component= {LoginScreen} />
        <Route exact path= "/home" component= {HomeScreen} />
        <Route exact path= "/sneaker/:id" component= {SneakerScreen} />
        <Route exact path= "/cart" componennt= {CartScreen} />
      </Routes>
     </main>

    
    </Router>
  );
}

export default App;
