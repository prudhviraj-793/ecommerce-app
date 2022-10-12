import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Modal from "../Overlay/Modal"

function SpecificProduct(props) {
    const parms = useParams()
    console.log(parms.productId)
    return (
        <Modal>
            <NavBar />
            <div>
                <h3>{props.item.title}</h3>
            </div>
            <div>
                <img src={props.item.img} alt='product-images' />
            </div>
            <div>
                <p>{props.item.price}</p>
            </div>
            <button>Add Cart</button>
        </Modal>
    )
}

export default SpecificProduct