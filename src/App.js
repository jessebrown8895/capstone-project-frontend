import React, { useEffect, useState, useContext} from "react";
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import BarberLogin from './components/Barber/BarberLogin';
import CustomerLogin from './components/customer/CustomerLogin';
import CustomerHome from './components/customer/CustomerHome';
import CustomerSignUp from './components/customer/CustomerSignUp';
import CustomerProducts from "./components/customer/CustomerProducts";
import { CustomerContext } from "./context/Customer";
// import CustomerProducts from "./components/customer/CustomerProducts";




export const context = React.createContext();


function App() {
  const [products, setProducts] = useState("");
  const {customer} = useContext(CustomerContext)
 

  
    useEffect(() => {
      fetch(PORT + "/api/products", {
        method: "GET",
      })
        .then((r) => r.json())
        .then((products) => setProducts(products));
    }, [])
    
      
 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-up" element={<CustomerSignUp />} />
          <Route path="/Barber-login" element={<BarberLogin />} />
          <Route path="/Customer-login" element={<CustomerLogin />} />
          <Route path="/Customer-home" element={<CustomerHome />} />
          <Route path="/Customer-Products" element={<CustomerProducts products={products}/>} />
        </Routes>
      </Router>
        
     
    </div>
  );
}
export const PORT = "http://localhost:3000";

export default App;