import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar';

// Screen 
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import SneakerScreen from "./screens/SneakerScreen"
import CartScreen from "./screens/CartScreen"

function App() {
  return (
    <Router>
    
      
     { /* Navbar */}
     { /* Side Drawer   */}
     {/* Back drop  */}

     <main>
      <Switch>
        <Route exact path= "/login" component= {LoginScreen} />
        <Route exact path= "/home" component= {HomeScreen} />
        <Route exact path= "/sneaker/:id" component= {SneakerScreen} />
        <Route exact path= "/cart" componennt= {CartScreen} />
      </Switch>
     </main>

    
    </Router>
  );
}

export default App;
