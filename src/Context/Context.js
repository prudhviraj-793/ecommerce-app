import { createContext } from "react";

const Context = createContext({
    items: [],
    mail: '',
    token: '',
    addToCart: () => {},
    removeFromCart: () => {},
    addToken: () => {},
    removeToken: () => {},
    addMail: () => {}
})

export default Context