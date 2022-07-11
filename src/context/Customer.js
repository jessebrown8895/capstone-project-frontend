import React, { useState } from "react";

const customerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);
    
  return (
    <customerContext.Provider value={{customer, setCustomer}}>
      {children}
    </customerContext.Provider>
  );
};

export { customerContext, CustomerProvider };
