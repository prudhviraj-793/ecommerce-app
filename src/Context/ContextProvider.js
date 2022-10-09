import { useState } from "react";
import Context from "./Context";

function ContextProvider(props) {

    const [cartedItems, setCartedItems] = useState([])
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)

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

    function addTokenHandler(idToken) {
        localStorage.setItem('token', idToken)
        setToken(idToken)
    }

    function removeTokenHandler() {
        localStorage.removeItem('token')
        setToken(null)
    }

    const data = {
        token: token,
        items: cartedItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        addToken: addTokenHandler,
        removeToken: removeTokenHandler
    }

    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider