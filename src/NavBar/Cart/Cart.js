import { useContext } from "react";
import Context from "../../Context/Context";
import Modal from "../../Overlay/Modal";
import CartItems from "./CartItems";

function Cart() {

  const ctx = useContext(Context)

  const cartedItems = ctx.items

  return (
    <Modal>
      {cartedItems.map((item) => {
        return <CartItems key={item.id} data={item} />;
      })}
    </Modal>
  );
}

export default Cart;
