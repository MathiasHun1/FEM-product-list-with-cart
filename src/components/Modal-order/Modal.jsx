import styles from './Modal.module.css';
import confirmSvg from './icon-order-confirmed.svg';
import helpers from '../../utils';

import ListItem from '../List-Item/ListItem';
import ButtonConfirm from '../Button-confirm/ButtonConfirm';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const Modal = ({ itemsInCart, modalOpen, setModalOpen, itemsListing, setItemsListing }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setVisible(true);
      }, 100);
    } else {
      setVisible(false);
    }
  }, [modalOpen]);

  const handleConfirm = () => {
    const itemsListingCopy = _.cloneDeep(itemsListing);
    itemsListingCopy.forEach((item) => (item.timesPicked = 0));

    setVisible(false);
    setTimeout(() => {
      setItemsListing(itemsListingCopy);
      setModalOpen(!modalOpen);
    }, 200);
  };

  const totalPrice = itemsInCart.reduce((prev, item) => prev + item.price * item.quantity, 0).toFixed(2);

  if (!modalOpen) {
    return null;
  }

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.modal_wrapper}>
        <div className={styles.modal_header}>
          <img className={styles.modal_icon} src={confirmSvg} alt="" />
          <h2 className={styles.modal_title}>Order Confirmed</h2>
          <p className={styles.modal_subtitle}>We hope you enjoy your food!</p>
        </div>

        <div className={styles.list_wrapper}>
          <ul className={styles.modal_list}>
            {itemsInCart.map((item) => (
              <ListItem
                key={item.id}
                itemName={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                type="ordered"
              />
            ))}
          </ul>
          <div className={styles.total_wrapper}>
            <p>Order total</p>
            <p className={styles.total_value}>${totalPrice}</p>
          </div>
        </div>

        <button className={styles.button} onClick={handleConfirm}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Modal;
