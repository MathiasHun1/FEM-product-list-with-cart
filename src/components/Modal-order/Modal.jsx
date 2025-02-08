import styles from './Modal.module.css';
import confirmSvg from './icon-order-confirmed.svg';

import ListItem from '../List-Item/ListItem';
import ButtonConfirm from '../Button-confirm/ButtonConfirm';

const Modal = ({ itemsInCart, modalOpen, setModalOpen }) => {
  if (!modalOpen) {
    return null;
  }

  const totalPrice = itemsInCart.reduce((prev, item) => prev + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={styles.overlay}>
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

        <ButtonConfirm text="Start new order" modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default Modal;
