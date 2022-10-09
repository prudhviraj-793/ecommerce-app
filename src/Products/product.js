import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context/Context";

function Product(props) {
  const ctx = useContext(Context);

  const item = {
    id: props.id,
    title: props.title,
    img: props.img,
    price: props.price,
  };

  function addToCart(e) {
    e.preventDefault();
    ctx.addToCart(item);
  }

  function showProduct(item) {
    props.specificProduct(item);
  }

  return (
    <div
      onClick={() => {
        showProduct(item);
      }}
    >
      <Link to={`/products/${props.id}`}>
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <img src={props.img} alt="product-images" />
        </div>
        <div>
          <p>{props.price}</p>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </Link>
    </div>
  );
}

export default Product;
