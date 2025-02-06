import styles from './ButtonAdd.module.css';
import helpers from '../../utils';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const ButtonAdd = ({ cardData, itemsListing, setItemsListing }) => {
  const { add_button, quantity_wrapper, icon, red } = styles;
  const [isActive, setIsActive] = useState(false);
  const [pickCount, setPickCount] = useState(0);

  useEffect(() => {
    const value = itemsListing.find((i) => i.itemKey === cardData.name).timesPicked;
    setPickCount(value);
  }, []);

  const handleButtonClick = () => {
    if (!isActive) {
      return setIsActive(!isActive);
    }

    const itemsListingCopy = _.cloneDeep(itemsListing);
    helpers.setPickedValue(itemsListingCopy, cardData.name, pickCount);
    setItemsListing(itemsListingCopy);
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
