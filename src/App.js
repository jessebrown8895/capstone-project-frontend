import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import BarberLogin from './components/Barber/BarberLogin';
import CustomerLogin from './components/customer/CustomerLogin';
import { CustomerProvider } from "./context/Customer"
import { BarberProvider } from "./context/Barber"
import CustomerHome from './components/customer/CustomerHome';
import CustomerSignUp from './components/customer/CustomerSignUp';
export const context = React.createContext();
function App() {


  return (
    <div>
      <BarberProvider>
        <CustomerProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Barber-login" element={<BarberLogin />} />
              <Route path="/Customer-login" element={<CustomerLogin />} />
              <Route path="/Customer-home" element={<CustomerHome />} />
              <Route path="/Sign-up" element={<CustomerSignUp />} />
            </Routes>
          </Router>
        </CustomerProvider>
      </BarberProvider>
    </div>
  );
}
export const PORT = "http://localhost:3000";

export default App;