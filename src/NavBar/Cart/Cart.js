import { useContext } from "react";
import Context from "../../Context/Context";
import Modal from "../../Overlay/Modal";
import NavBar from "../NavBar";
import CartItems from "./CartItems";

function Cart(props) {

  const ctx = useContext(Context)

  const cartedItems = ctx.items

  function cancelHandler(e) {
    e.preventDefault()
    props.isCancelClicked(false)
  }

  return (
    <Modal>
      <NavBar />
      {ctx.items.length === 0 && <p>add items to cart</p>}
      {cartedItems.map((item) => {
        return <CartItems key={item.id} data={item} />;
      })}
      <button onClick={cancelHandler}>Cancel</button>
    </Modal>
  );
}

export default Cart;
