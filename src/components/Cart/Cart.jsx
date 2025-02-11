import { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';

import List from '../List/List';
import ListItem from '../List-Item/ListItem';
import ButtonConfirm from '../Button-confirm/ButtonConfirm';

import { Context } from '../../contexts/ItemsContext';

const Cart = () => {
  const {
    cart_wrapper,
    empty_cart,
    cart_title,
    empty_text,
    total_wrapper,
    total_text,
    total_value,
    neutral_text_wrapper,
    neutral_image,
    neutral_text,
    neutral_span,
  } = styles;

  const { items, dispatch, itemsInCart } = useContext(Context);
  const [isEmpty, setIsEmpty] = useState(true);

  const cartItemCount = itemsInCart ? itemsInCart.reduce((prev, item) => prev + item.timesPicked, 0) : 0;

  const totalPrice = itemsInCart ? itemsInCart.reduce((prev, item) => prev + item.timesPicked * item.price, 0) : 0;

  useEffect(() => {
    initCartState();
  }, [items]);

  const initCartState = () => {
    if (items.every((i) => i.timesPicked === 0)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'remove', payload: { id: id } });
  };

  return (
    <div className={cart_wrapper}>
      <h2 className={cart_title}>Your Cart {`(${cartItemCount})`}</h2>

      {isEmpty && (
        <div className={empty_cart}>
          <img src="/images/illustration-empty-cart.svg" alt="" />
          <p className={empty_text}>Your added items will appear here</p>
        </div>
      )}

      {!isEmpty && (
        <>
          <List>
            {itemsInCart.map((item) => (
              <ListItem
                key={item.id}
                itemName={item.name}
                id={item.id}
                price={item.price}
                quantity={item.timesPicked}
                image={item.image.thumbnail}
                removeFromCart={removeFromCart}
                type="in-cart"
              />
            ))}

            <div className={total_wrapper}>
              <p className={total_text}>Order Total</p>
              <p className={total_value}>${totalPrice.toFixed(2)}</p>
            </div>
          </List>

          <div className={neutral_text_wrapper}>
            <img className={neutral_image} src="/images/icon-carbon-neutral.svg" alt="" />
            <p className={neutral_text}>
              This is a <span className={neutral_span}>carbon-neutral </span> delivery
            </p>
          </div>

          <ButtonConfirm text={'Confirm Order'} />
        </>
      )}
    </div>
  );
};

export default Cart;
