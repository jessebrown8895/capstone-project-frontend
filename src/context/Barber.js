import React, { useState } from "react";

const BarberContext = React.createContext();

const BarberProvider = ({ children }) => {
  const [barber, setBarber] = useState(null);

  return (
    <BarberContext.Provider value={{ barber, setBarber }}>
      {children}
    </BarberContext.Provider>
  );
};

export { BarberContext, BarberProvider };
