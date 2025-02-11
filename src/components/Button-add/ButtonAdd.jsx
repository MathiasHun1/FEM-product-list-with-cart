import styles from './ButtonAdd.module.css';
import helpers from '../../utils';
import { useContext, useEffect } from 'react';
import _ from 'lodash';

import ItemsContext from '../../contexts/ItemsContext';

const ButtonAdd = ({ cardData, isActive, setActive }) => {
  const { add_button, quantity_wrapper, icon, red, clickable } = styles;
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    if (cardData.timesPicked === 0) {
      setActive(false);
    }
  }, [cardData]);

  const handleButtonClick = () => {
    if (isActive && cardData.timesPicked > 0) {
      return;
    }

    if (!isActive && cardData.timesPicked === 0) {
      const cardDataCopy = _.cloneDeep(cardData); // neccessary ?
      cardDataCopy.timesPicked += 1;

      const updatedItemsList = helpers.updateItemsList(items, cardDataCopy);

      setItems(updatedItemsList);
    }

    setActive(true);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    const cardDataCopy = _.cloneDeep(cardData); // neccessary ?
    cardDataCopy.timesPicked += 1;

    const updatedItemsList = helpers.updateItemsList(items, cardDataCopy);

    setItems(updatedItemsList);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();

    if (cardData.timesPicked === 0) {
      return;
    }

    const cardDataCopy = _.cloneDeep(cardData); // neccessary ?
    cardDataCopy.timesPicked -= 1;
    const updatedItemsList = helpers.updateItemsList(items, cardDataCopy);
    setItems(updatedItemsList);
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
          {cardData.timesPicked}
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
