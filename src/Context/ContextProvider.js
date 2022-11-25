import { useCallback, useEffect, useState } from "react";
import Context from "./Context";

function ContextProvider(props) {
  const [cartedItems, setCartedItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [mail, setMail] = useState("");
  const data = {
    token: token,
    mail: mail,
    items: cartedItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
    addMail: addMailHandler,
  };

  let url = `https://crudcrud.com/api/bc3c44e8898a40a380bdbfa4100c8be2/cartedItems${mail}`;

  const fetchCartItems = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCartedItems([...data]);
  }, [url]);

  const removeFromCrud = useCallback(
    async (id) => {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.ok);
    },
    [url]
  );

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

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
      setCartedItems([...cartedItems, data]);
    }
  }

  function removeFromCart(id) {
    cartedItems.forEach((item, idx) => {
      if (item.id === id) {
        removeFromCrud(item._id);
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
    let updatedMail = "";
    for (let char of userMail) {
      if (char === "@" || char === ".") {
        continue;
      } else {
        updatedMail += char;
      }
    }
    setMail(updatedMail);
    console.log(updatedMail);
  }

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}

export default ContextProvider;
