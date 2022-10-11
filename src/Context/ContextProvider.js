import { useCallback, useEffect, useState } from "react";
import Context from "./Context";

function ContextProvider(props) {

  const [cartedItems, setCartedItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [mail, setMail] = useState('')
  const data = {
    token: token,
    mail: mail,
    items: cartedItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
    addMail: addMailHandler
  };

  let url =
    `https://crudcrud.com/api/8bdc0d58be9e4496b2d03bad46f8f9bb/cartedItems${mail}`;

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

  function addMailHandler(userMail) {
    let updatedMail = ''
    for(let char of userMail) {
      if(char === '@' || char === '.') {
        continue
      } else {
        updatedMail += char
      }
    }
    setMail(updatedMail)
    console.log(updatedMail)
  }

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}

export default ContextProvider;
