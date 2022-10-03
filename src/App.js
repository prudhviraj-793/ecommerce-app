import { Fragment } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import NavBar from "./NavBar/NavBar"
import Products from "./Products/Products"

function App() {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <Products />
      <Footer />
    </Fragment>
  )
}

export default App