import styles from './ButtonAdd.module.css';
import { useContext, useEffect } from 'react';
import _ from 'lodash';

import { Context } from '../../contexts/ItemsContext';

const ButtonAdd = ({ item, isActive, setActive }) => {
  const { add_button, quantity_wrapper, icon, red, clickable } = styles;
  const { dispatch } = useContext(Context);

  useEffect(() => {
    if (item.timesPicked === 0) {
      setActive(false);
    }
  }, [item]);

  const handleButtonClick = () => {
    if (isActive && item.timesPicked > 0) {
      return;
    }

    if (!isActive && item.timesPicked === 0) {
      dispatch({ type: 'increment', payload: { id: item.id } });
    }

    setActive(true);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    dispatch({ type: 'increment', payload: { id: item.id } });
  };

  const handleDecrement = (e) => {
    e.stopPropagation();

    if (item.timesPicked === 0) {
      return;
    }

    dispatch({ type: 'decrement', payload: { id: item.id } });
  };

  return (
    <button className={`${add_button} ${isActive ? red : ''}`} onClick={handleButtonClick}>
      {!isActive && (
        <>
          <img src="/images/icon-add-to-cart.svg" alt="" style={{ color: 'black' }} />
          Add to Cart
        </>
      )}

      {isActive && (
        <div className={quantity_wrapper}>
          <div className={icon} onClick={(e) => handleDecrement(e)}>
            <img src="/images/icon-decrement-quantity.svg" alt="" />
            <div className={clickable}></div>
          </div>
          {item.timesPicked}
          <div className={icon} onClick={(e) => handleIncrement(e)}>
            <img src="/images/icon-increment-quantity.svg" alt="" />
            <div className={clickable}></div>
          </div>
        </div>
      )}
    </button>
  );
};

export default ButtonAdd;
