import styles from './ListItem.module.css';

const ListItem = ({ itemName, price, id, quantity, image, removeFromCart, type }) => {
  if (type !== 'in-cart' && type !== 'ordered') {
    console.error('Must specify a type for a list-item element!');
  }

  const cartType = type === 'in-cart' ? true : false;
  const orderedType = type === 'ordered' ? true : false;
  const imageSource = image.replace('./assets', '');

  return (
    <>
      <li className={styles.list_item}>
        {orderedType && <img className={styles.thumbnail} src={imageSource} alt="" />}

        <div className={styles.inner_wrapper}>
          <h3 className={styles.title}>{itemName}</h3>
          <div className={styles.container}>
            <p className={styles.quantity}> {quantity}x</p>
            <p className={styles.item_price}>@${price.toFixed(2)}</p>
            {cartType && <p className={styles.item_final}>${(quantity * price).toFixed(2)}</p>}
          </div>

          {cartType && (
            <div className={styles.button_wrapper} onClick={() => removeFromCart(id)}>
              <button className={styles.delete_button}>
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10">
                  <path
                    fill="currentColor"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </button>
            </div>
          )}

          {orderedType && (
            <div className={styles.final_wrapper}>
              <p className={styles.item_final}>${(quantity * price).toFixed(2)}</p>
            </div>
          )}
        </div>
      </li>
      <div className={styles.spacer}></div>
    </>
  );
};

export default ListItem;
