import React, { Fragment, Suspense, useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Context from "./Context/Context";
import NavBar from "./NavBar/NavBar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Products from "./Products/Products";
import SpecificProduct from "./Products/SpecificProduct";

const Cart = React.lazy(() => import("./NavBar/Cart/Cart"));
const Login = React.lazy(() => import("./Pages/Login"));

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
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar isCartClicked={isCartClicked} />
        {showItems && <Cart isCancelClicked={isCancelClicked} />}
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
      </Suspense>
    </Fragment>
  );
}

export default App;
