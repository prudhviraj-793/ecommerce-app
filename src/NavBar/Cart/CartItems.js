import { useContext } from "react";
import Context from "../../Context/Context";

function CartItems(props) {
  const ctx = useContext(Context);
  function removeItem(e) {
    e.preventDefault();
    ctx.removeFromCart(props.data.id);
  }
  return (
    <div className="container">
      <h3>{props.data.title}</h3>
      <h4>{props.data.price}</h4>
      <img src={props.data.img} alt="carted-items" />
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}

export default CartItems;
