import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import Modal from "../Overlay/Modal";

function LogIn() {
  
  const ctx = useContext(Context);
  const history = useHistory()

  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value
    const enteredPassword = passwordRef.current.value
    try {
      const user = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };

      ctx.addMail(enteredEmail)

      let url = "";

      if (ctx.token) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSiB_B1lWKcu544PN7i5u55g0bJNvsNFI";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSiB_B1lWKcu544PN7i5u55g0bJNvsNFI";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        ctx.addToken(data.idToken)
        history.replace('/products')
      } else {
        const data = await response.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Modal>
      <NavBar />
      <form onSubmit={submitHandler}>
        <label>Mail</label>
        <input type="email" ref={emailRef} />
        <label>Password</label>
        <input type="password" ref={passwordRef} />
        <button type="submit">Login</button>
        <button type="submit">Sign up</button>
      </form>
    </Modal>
  );
}

export default LogIn;
