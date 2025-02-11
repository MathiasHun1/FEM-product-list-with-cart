import './styles/global.css';
import './styles/variables.css';
import styles from './App.module.css';

import MainGrid from './components/MainGrid/MainGrid';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal-order/Modal';
import ContextProvider from './contexts/ItemsContext';

const App = () => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <ContextProvider>
        <MainGrid />
        <Cart />
        <Modal />
      </ContextProvider>
    </div>
  );
};

export default App;
