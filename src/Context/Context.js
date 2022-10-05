import { createContext } from "react";

const Context = createContext({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {}
})

export default Context