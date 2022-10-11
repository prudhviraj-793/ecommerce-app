import { useCallback, useEffect, useState } from "react";
import Context from "./Context";

function ContextProvider(props) {

  let url =
    "https://crudcrud.com/api/a52951668eb7450b93105a7276c87163/cartedItems";

  const [cartedItems, setCartedItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const data = {
    token: token,
    items: cartedItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
  };

  const fetchCartItems = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCartedItems([...data])
  }, [url])

  useEffect(() => {
    fetchCartItems()
  }, [fetchCartItems])

  async function addToCart(addItem) {
    let hasItem = false;
    cartedItems.forEach((item) => {
      if (item.id === addItem.id) {
        hasItem = true;
      }
    });

    if (hasItem) {
      alert("you have already added");
    } else {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(addItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      setCartedItems([...cartedItems, data])
    }
  }

  function removeFromCart(id) {
    cartedItems.forEach((item, idx) => {
      if (item.id === id) {
        cartedItems.splice(idx, 1);
        setCartedItems([...cartedItems]);
      }
    });
  }

  function addTokenHandler(idToken) {
    localStorage.setItem("token", idToken);
    setToken(idToken);
  }

  function removeTokenHandler() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}

export default ContextProvider;
