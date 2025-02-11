import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/variables.css';
import styles from './App.module.css';
import services from './services/products';

import MainGrid from './components/MainGrid/MainGrid';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal-order/Modal';
import ItemsContext from './contexts/ItemsContext';

const App = () => {
  const { wrapper } = styles;
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  //get and set formatted data to state
  useEffect(() => {
    services.getAll().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div className={wrapper}>
      <ItemsContext.Provider value={{ items, setItems, itemsInCart, setItemsInCart, modalOpen, setModalOpen }}>
        <MainGrid />
        <Cart />
        <Modal />
      </ItemsContext.Provider>
    </div>
  );
};

export default App;
