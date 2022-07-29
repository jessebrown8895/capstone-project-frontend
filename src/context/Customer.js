import React, { useState } from "react";

const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };
