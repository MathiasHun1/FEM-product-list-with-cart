import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/variables.css';
import styles from './App.module.css';
import services from './services/products';
import helpers from './utils';

import MainGrid from './components/MainGrid/MainGrid';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal-order/Modal';

const App = () => {
  const { wrapper } = styles;
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // create initial data from fetched items, for tracking the orders
  useEffect(() => {
    services.getAll().then((res) => {
      const itemList = helpers.createItemListing(res);
      setItems(itemList);
    });
  }, []);

  return (
    <div className={wrapper}>
      <MainGrid items={items} setItems={setItems} />

      <Cart
        items={items}
        setItems={setItems}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

      <Modal
        itemsInCart={itemsInCart}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        items={items}
        setItems={setItems}
        setItemsInCart={setItemsInCart}
      />
    </div>
  );
};

export default App;
