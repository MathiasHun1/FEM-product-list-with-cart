import { createContext, useReducer } from 'react';
import { useState, useEffect } from 'react';
import services from '../services/products';
import _ from 'lodash';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(items);

  useEffect(() => {
    services.getAll().then((result) => {
      dispatch({ type: 'setAll', payload: result });
    });
  }, []);

  useEffect(() => {
    const inCart = items.filter((i) => i.timesPicked > 0);
    setItemsInCart(inCart);
  }, [items]);

  return (
    <Context.Provider value={{ items, dispatch, itemsInCart, modalOpen, setModalOpen }}>{children}</Context.Provider>
  );
};

const itemsReducer = (items, action) => {
  switch (action.type) {
    case 'setAll': {
      return action.payload;
    }
    case 'increment': {
      const itemsCopy = _.cloneDeep(items);
      const item = itemsCopy.find((i) => i.id === action.payload.id);
      item.timesPicked++;
      return itemsCopy;
    }
    case 'decrement': {
      const itemsCopy = _.cloneDeep(items);
      const item = itemsCopy.find((i) => i.id === action.payload.id);
      item.timesPicked--;
      return itemsCopy;
    }
    case 'remove': {
      const itemsCopy = _.cloneDeep(items);
      const item = itemsCopy.find((i) => i.id === action.payload.id);
      item.timesPicked = 0;
      return itemsCopy;
    }
    case 'reset': {
      const resettedItems = items.map((i) => ({ ...i, timesPicked: 0 }));
      return resettedItems;
    }

    default:
      throw new Error(`unknown action: ${action.type}`);
  }
};

export default ContextProvider;
