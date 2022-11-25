import { useContext } from "react";
import Context from "../../Context/Context";
import CartItems from "./CartItems";

function Cart(props) {
  const ctx = useContext(Context);

  const cartedItems = ctx.items;

  function cancelHandler(e) {
    e.preventDefault();
    props.isCancelClicked(false);
  }

  return (
    <div
      className="modal p-2 d-xl-flex m-2"
      id="cart"
      tabindex="1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dailog">
        <div className="modal-content">
          <div className="modal-body">
            {ctx.items.length === 0 && <p>add items to cart</p>}
            {cartedItems.map((item) => {
              return <CartItems key={item.id} data={item} />;
            })}
          </div>
          <div className="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
