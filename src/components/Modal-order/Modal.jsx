import styles from './Modal.module.css';
import confirmSvg from './icon-order-confirmed.svg';

import ListItem from '../List-Item/ListItem';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import ItemsContext from '../../contexts/ItemsContext';

const Modal = () => {
  const [isVisible, setVisible] = useState(false);
  const { itemsInCart, modalOpen, setModalOpen, items, setItems } = useContext(ItemsContext);

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
    const itemsCopy = _.cloneDeep(items);
    itemsCopy.forEach((i) => (i.timesPicked = 0));

    setVisible(false);
    setTimeout(() => {
      setItems(itemsCopy);
      setModalOpen(!modalOpen);
    }, 200);
  };

  const totalPrice = itemsInCart.reduce((prev, item) => prev + item.price * item.timesPicked, 0).toFixed(2);

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
                quantity={item.timesPicked}
                image={item.image.thumbnail}
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
