function Product(props) {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <img src={props.img} alt='product-images' />
            </div>
            <div>
                <p>{props.price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product