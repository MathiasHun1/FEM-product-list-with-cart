import styles from './ButtonAdd.module.css';
import helpers from '../../utils';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const ButtonAdd = ({ cardData, itemsListing, setItemsListing, isActive, setIsActive }) => {
  const { add_button, quantity_wrapper, icon, red } = styles;
  const [pickCount, setPickCount] = useState(0);

  useEffect(() => {
    const value = itemsListing.find((i) => i.itemKey === cardData.name).timesPicked;
    setPickCount(value);

    if (value === 0) {
      setIsActive(false);
    }
  }, [itemsListing]);

  useEffect(() => {
    const updatedItemsListing = helpers.setPickedValue(itemsListing, cardData.name, pickCount);
    setItemsListing(updatedItemsListing);
  }, [pickCount]);

  const handleButtonClick = () => {
    if (isActive && pickCount > 0) {
      return;
    }
    setIsActive(!isActive);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    setPickCount(pickCount + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();

    if (pickCount === 0) {
      return;
    }

    setPickCount(pickCount - 1);
  };

  return (
    <button className={`${add_button} ${isActive ? red : ''}`} onClick={handleButtonClick}>
      {!isActive && (
        <>
          <img src="/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </>
      )}

      {isActive && (
        <div className={quantity_wrapper}>
          <div className={icon} onClick={(e) => handleDecrement(e)}>
            <img src="/images/icon-decrement-quantity.svg" alt="" />
          </div>
          {pickCount}
          <div className={icon} onClick={(e) => handleIncrement(e)}>
            <img src="/images/icon-increment-quantity.svg" alt="" />
          </div>
        </div>
      )}
    </button>
  );
};

export default ButtonAdd;
