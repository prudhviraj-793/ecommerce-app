import { useState } from "react"
import { Route } from "react-router-dom"
import ContextProvider from "./Context/ContextProvider"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Cart from "./NavBar/Cart/Cart"
import NavBar from "./NavBar/NavBar"
import About from "./Pages/About"
import ContactUs from "./Pages/ContactUs"
import Home from "./Pages/Home"
import Products from "./Products/Products"
import SpecificProduct from "./Products/SpecificProduct"

function App() {

  const [showItems, setShowItems] = useState(false)
  const [item, setItem] = useState('')


  function isCartClicked(res) {
    setShowItems(res)
  }

  function isCancelClicked(res) {
    setShowItems(res)
  }

  function specificProductHandler(item) {
    setItem(item)
  }
  return (
    <ContextProvider>
      <NavBar isCartClicked={isCartClicked} />
      {showItems && <Cart isCancelClicked={isCancelClicked}/>}
      <Header />
      <Products specificProduct = {specificProductHandler} />
      <Footer />
      <Route path='/about' >
        <About />
      </Route>
      <Route path='/home' >
        <Home />
      </Route>
      <Route path='/contactUs' >
        <ContactUs />
      </Route>
      <Route path='/products/:productId' >
        <SpecificProduct item={item} />
      </Route>
    </ContextProvider>
  )
}

export default App