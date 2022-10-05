import { useState } from "react";
import Context from "./Context";

function ContextProvider(props) {

    const [cartedItems, setCartedItems] = useState([])

    function addToCart(addItem) {
        let hasItem = false
        cartedItems.forEach(item => {
            if (item.id === addItem.id) {
                hasItem = true
            }
        })

        if (hasItem) {
            alert('you have already added')
        } else {
            setCartedItems([...cartedItems, addItem])
        }
    }

    function removeFromCart(id) {
        cartedItems.forEach((item, idx) => {
            if (item.id === id) {
                cartedItems.splice(idx, 1)
                setCartedItems([...cartedItems])
            }
        })
    }

    const data = {
        items: cartedItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider