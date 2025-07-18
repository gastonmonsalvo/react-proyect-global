import { createContext, useState, useContext } from "react";

export const CarritoContext = createContext();


export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [contracts, setContracts] = useState([]);

  // Agrega dev por name
  const agregar = (nuevoDev) => {
    setCarrito((prev) => {
      const yaExiste = prev.some((dev) => dev.name === nuevoDev.name);
      return yaExiste ? prev : [...prev, nuevoDev];
    });
  };
  
  

  // Elimina dev por name
  const eliminar = (name) => {
    setCarrito((prev) => prev.filter((d) => d.name !== name));
  };

  // Limpia el carrito entero
  const limpiar = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregar,
        eliminar,
        limpiar,
        mostrarCarrito,
        setMostrarCarrito,
        contracts,
        setContracts,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
