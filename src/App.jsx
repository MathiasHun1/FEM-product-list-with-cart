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

  // create initial data from fetched items, for tracking the orders
  useEffect(() => {
    services.getAll().then((res) => {
      setData(res);
      const listing = helpers.createItemListing(res);
      setItemsListing(listing);
    });
  }, []);

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

      <Modal
        itemsInCart={itemsInCart}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={data}
        itemsListing={itemsListing}
        setItemsListing={setItemsListing}
        setItemsInCart={setItemsInCart}
      />
    </div>
  );
};

export default App;
