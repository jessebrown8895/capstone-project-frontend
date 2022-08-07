import React, {useContext, useState} from 'react'
import Navs from './Navbar'
import { CustomerContext } from "../../context/Customer";
import { useNavigate } from "react-router-dom";
import { PORT } from "../../App";
const CustomerHome = () => {
  const { setCustomer, customer} = useContext(CustomerContext);
  
  const navigate = useNavigate();

  const logOutUser = () => {
    setCustomer({})
    localStorage.removeItem('jwt')
    navigate('/')
  };

 
  
  
  return (
    <div>
        <Navs logOutUser={logOutUser} />

      </div>
  )
}

export default CustomerHome