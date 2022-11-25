import Product from "./product";

function Products(props) {
  const productsArr = [
    {
      id: "i1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "i2",
      title: "Black & white",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "i3",
      title: "Yellow & Black",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "i4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  function specificProductHandler(item) {
    props.specificProduct(item);
  }

  return (
    <div className="conatiner m-2 p-2">
      <div className="row">
        {productsArr.map((product) => {
          return (
            <Product
              key={product.id}
              specificProduct={specificProductHandler}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
