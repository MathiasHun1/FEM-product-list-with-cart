import styles from './ListItem.module.css';

const ListItem = ({ itemName, price, quantity, image, removeFromCart }) => {
  return (
    <li className={styles.list_item}>
      <div className={styles.inner_wrapper}>
        <h3 className={styles.title}>{itemName}</h3>
        <div className={styles.container}>
          <p className={styles.quantity}> {quantity}x</p>
          <p className={styles.item_price}>@${price.toFixed(2)}</p>
          <p className={styles.item_final}>${(quantity * price).toFixed(2)}</p>
        </div>

        <button className={styles.delete_button} onClick={() => removeFromCart(itemName)}>
          <img className={styles.delete_icon} src="/images/icon-remove-item.svg" alt="" />
        </button>
      </div>

      <div className={styles.spacer}></div>
    </li>
  );
};

export default ListItem;
