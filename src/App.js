import { useState } from "react"
import ContextProvider from "./Context/ContextProvider"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Cart from "./NavBar/Cart/Cart"
import NavBar from "./NavBar/NavBar"
import Products from "./Products/Products"

function App() {

  const [showItems, setShowItems] = useState(false)


  function isCartClicked(res) {
    setShowItems(res)
  }
  return (
    <ContextProvider>
      {showItems && <Cart />}
      <NavBar isCartClicked={isCartClicked} />
      <Header />
      <Products />
      <Footer />
    </ContextProvider>
  )
}

export default App