import { useState } from "react";
import Modal from "../../Overlay/Modal";
import CartItems from "./CartItems";

function Cart() {
  const cartedItems = [
    {
      id: "i1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      id: "i2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      id: "i3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const [cartItemsState, setCartItemsState] = useState(cartedItems);

  function removeItem(id) {
    cartItemsState.forEach((item, idx) => {
      if (item.id === id) {
        cartItemsState.pop(idx);
        setCartItemsState([...cartItemsState]);
      }
    });
  }

  return (
    <Modal>
      {cartItemsState.map((item) => {
        return <CartItems data={item} removeItem={removeItem} />;
      })}
    </Modal>
  );
}

export default Cart;
