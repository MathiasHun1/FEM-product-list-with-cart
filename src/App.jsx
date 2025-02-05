import { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/variables.css';
import styles from './App.module.css';
import services from './services/products';
import helpers from './utils';

import MainGrid from './components/MainGrid/MainGrid';
import Cart from './components/Cart/Cart';

const App = () => {
  const { wrapper } = styles;
  const [data, setData] = useState(null);
  const [itemsListing, setItemsListing] = useState(null);

  // loading data
  useEffect(() => {
    services.getAll().then((res) => {
      setData(res);
      const listing = helpers.createItemListing(res);
      setItemsListing(listing);
    });
  }, []);

  useEffect(() => {}, [itemsListing]);

  return (
    <div className={wrapper}>
      <MainGrid data={data} itemsListing={itemsListing} setItemsListing={setItemsListing} />
      <Cart />
    </div>
  );
};

export default App;
