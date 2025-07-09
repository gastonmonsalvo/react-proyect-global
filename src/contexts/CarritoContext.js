import { createContext, useState, useContext } from "react";

export const CarritoContext = createContext();


export const CarritoProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [contracts, setContracts] = useState([]); 
  
  return (
    <CarritoContext.Provider value={{ mostrarCarrito, setMostrarCarrito, contracts, setContracts }}>
      {children}
    </CarritoContext.Provider>
  );
};
export const useCarrito = () => useContext(CarritoContext);