import { createContext } from 'react';
import { useState, useEffect } from 'react';
import services from '../services/products';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    services.getAll().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <Context.Provider value={{ items, setItems, itemsInCart, setItemsInCart, modalOpen, setModalOpen }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
