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

  useEffect(() => {
    const inCart = items.filter((i) => i.timesPicked > 0);
    setItemsInCart(inCart);
  }, [items]);

  return (
    <Context.Provider value={{ items, setItems, itemsInCart, modalOpen, setModalOpen }}>{children}</Context.Provider>
  );
};

const cartReducer = (itemsInCart, action) => {
  switch (action) {
    case 'increment':
      break;

    default:
      break;
  }
};

export default ContextProvider;
