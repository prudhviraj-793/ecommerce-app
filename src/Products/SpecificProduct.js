import Modal from "../Overlay/Modal"

function SpecificProduct(props) {
    return (
        <Modal>
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