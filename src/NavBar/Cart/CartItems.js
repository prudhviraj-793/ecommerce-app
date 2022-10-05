function CartItems(props) {
  function remveItem(id) {
    props.removeItem(id);
  }
  return (
    <div>
      <h3>{props.data.title}</h3>
      <h4>{props.data.price}</h4>
      <img src={props.data.imageUrl} alt="carted-items" />
      <button onClick={() => remveItem(props.data.id)}>Remove</button>
    </div>
  );
}

export default CartItems;
