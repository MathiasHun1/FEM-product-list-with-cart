import './styles/global.css';
import './styles/variables.css';
import styles from './App.module.css';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import MainGrid from './components/MainGrid/MainGrid';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal-order/Modal';
import { Context } from './contexts/ItemsContext';

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const { modalOpen } = useContext(Context);

  return (
    <div className={styles.wrapper}>
      <MainGrid />
      <Cart />
      {modalOpen && createPortal(<Modal isVisible={isVisible} setVisible={setVisible} />, document.body)}
    </div>
  );
};

export default App;
