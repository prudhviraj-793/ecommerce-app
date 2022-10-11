import { Fragment, useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Context from "./Context/Context";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Cart from "./NavBar/Cart/Cart";
import NavBar from "./NavBar/NavBar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Products/Products";
import SpecificProduct from "./Products/SpecificProduct";

function App() {
  const [showItems, setShowItems] = useState(false);
  const [item, setItem] = useState("");
  const ctx = useContext(Context);

  function isCartClicked(res) {
    setShowItems(res);
  }

  function isCancelClicked(res) {
    setShowItems(res);
  }

  function specificProductHandler(item) {
    setItem(item);
  }
  return (
    <Fragment>
      <NavBar isCartClicked={isCartClicked} />
      {showItems && <Cart isCancelClicked={isCancelClicked} />}
      <Header />
      <Route path="/products">
        {ctx.token && <Products specificProduct={specificProductHandler} />}
        {!ctx.token && <Redirect to="/login" />}
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contactUs">
        <ContactUs />
      </Route>
      <Route path="/products/:productId">
        <SpecificProduct item={item} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Footer />
    </Fragment>
  );
}

export default App;
