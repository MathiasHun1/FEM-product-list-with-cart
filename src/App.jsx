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
  const [data, setData] = useState([]);
  const [itemsListing, setItemsListing] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // loading initial data
  useEffect(() => {
    services.getAll().then((res) => {
      setData(res);
      const listing = helpers.createItemListing(res);
      setItemsListing(listing);
    });
  }, []);

  // logging cart state for debug
  useEffect(() => {}, [itemsListing]);

  return (
    <div className={wrapper}>
      <MainGrid data={data} itemsListing={itemsListing} setItemsListing={setItemsListing} />

      <Cart
        itemsListing={itemsListing}
        setItemsListing={setItemsListing}
        data={data}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

      <Modal itemsInCart={itemsInCart} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default App;
