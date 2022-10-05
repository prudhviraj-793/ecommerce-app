import { useContext } from "react"
import Context from "../Context/Context"

function Product(props) {

    const ctx = useContext(Context)

    const item = {
        id: props.id,
        title: props.title,
        img: props.img,
        price: props.price
    }

    function addToCart(e) {
        e.preventDefault()
        ctx.addToCart(item)
    }

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
                <button onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product