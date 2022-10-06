import { useState } from "react"
import { Route } from "react-router-dom"
import ContextProvider from "./Context/ContextProvider"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Cart from "./NavBar/Cart/Cart"
import NavBar from "./NavBar/NavBar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Products from "./Products/Products"

function App() {

  const [showItems, setShowItems] = useState(false)


  function isCartClicked(res) {
    setShowItems(res)
  }

  function isCancelClicked(res) {
    setShowItems(res)
  }
  return (
    <ContextProvider>
      {showItems && <Cart isCancelClicked={isCancelClicked}/>}
      <NavBar isCartClicked={isCartClicked} />
      <Header />
      <Products />
      <Footer />
      <Route path='/about' >
        <About />
      </Route>
      <Route path='/home' >
        <Home />
      </Route>
    </ContextProvider>
  )
}

export default App