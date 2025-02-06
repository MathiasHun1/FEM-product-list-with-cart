import { useEffect, useState } from 'react';
import styles from './Cart.module.css';

import List from '../List/List';
import ListItem from '../List-Item/ListItem';
import ButtonConfirm from '../Button-confirm/ButtonConfirm';

const Cart = ({ itemsListing, data }) => {
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
  const [isEmpty, setIsEmpty] = useState(true);
  const [itemsInCart, setItemsInCart] = useState([]);

  const cartItemCount = itemsInCart ? itemsInCart.reduce((prev, item) => prev + item.quantity, 0) : 0;

  const totalPrice = itemsInCart ? itemsInCart.reduce((prev, item) => prev + item.quantity * item.price, 0) : 0;

  useEffect(() => {
    initCartState();
    updateCart(itemsListing, data);
  }, [itemsListing]);

  const initCartState = () => {
    if (itemsListing.every((i) => i.timesPicked === 0)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const updateCart = (itemsListing, data) => {
    // filter out picked items from listing
    const pickedItems = itemsListing.filter((i) => i.timesPicked !== 0);

    let mergedItems = [];
    // merge the needed data for every picked item
    data.forEach((dataElement) => {
      pickedItems.forEach((pickedItem) => {
        if (dataElement.name === pickedItem.itemKey) {
          const mergedItem = {
            name: dataElement.name,
            price: dataElement.price,
            image: dataElement.image.thumbnail,
            quantity: pickedItem.timesPicked,
          };
          mergedItems.push(mergedItem);
        }
      });
    });

    setItemsInCart(mergedItems);
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
              <ListItem itemName={item.name} price={item.price} quantity={item.quantity} image={item.image} />
            ))}

            <div className={total_wrapper}>
              <p className={total_text}>Order Total</p>
              <p className={total_value}>${totalPrice}</p>
            </div>
          </List>

          <div className={neutral_text_wrapper}>
            <img className={neutral_image} src="/images/icon-carbon-neutral.svg" alt="" />
            <p className={neutral_text}>
              This is a <span className={neutral_span}>carbon-neutral </span> delivery
            </p>
          </div>

          <ButtonConfirm />
        </>
      )}
    </div>
  );
};

export default Cart;
