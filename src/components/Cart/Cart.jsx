import { useState } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const { cart_wrapper, empty_cart, cart_title, empty_text } = styles;

  return (
    <div className={cart_wrapper}>
      <h2 className={cart_title}>Your Cart {'()'}</h2>
      {isEmpty && (
        <div className={empty_cart}>
          <img src="/images/illustration-empty-cart.svg" alt="" />
          <p className={empty_text}>Your added items will appear here</p>
        </div>
      )}

      {/* <List /> */}
    </div>
  );
};

export default Cart;
