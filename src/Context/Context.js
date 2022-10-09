import { createContext } from "react";

const Context = createContext({
    items: [],
    token: '',
    addToCart: () => {},
    removeFromCart: () => {},
    addToken: () => {},
    removeToken: () => {}
})

export default Context