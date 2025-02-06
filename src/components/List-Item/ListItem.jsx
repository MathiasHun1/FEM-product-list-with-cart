import styles from './ListItem.module.css';

const ListItem = ({ itemName, price, quantity, image }) => {
  return (
    <li className={styles.list_item}>
      <h3 className={styles.title}>{itemName}</h3>

      <div className={styles.container}>
        <p className={styles.quantity}> {quantity}x</p>
        <p className={styles.item_price}>@${price}</p>
        <p className={styles.item_final}>${quantity * price}</p>
      </div>

      <div className={styles.spacer}></div>
    </li>
  );
};

export default ListItem;
