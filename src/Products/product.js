import { useContext } from "react";
import Context from "../Context/Context";

function Product(props) {
  const ctx = useContext(Context);

  const item = {
    id: props.id,
    title: props.title,
    img: props.img,
    price: props.price,
  };

  async function addToCart(e) {
    e.preventDefault();
    console.log("added");
    ctx.addToCart(item);
  }

  function showProduct(item) {
    props.specificProduct(item);
  }

  return (
    <div className="col-6 mb-2 d-md-flex">
      <div
        onClick={() => {
          showProduct(item);
        }}
        className="card p-2"
      >
        <img
          className="card-img-top"
          style={{ width: "15rem" }}
          src={props.img}
          alt="product-images"
        />
        <div className="card-body">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>
          <p>$ {props.price}</p>
        </div>
        <button onClick={addToCart} className="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
