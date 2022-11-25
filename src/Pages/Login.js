import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context/Context";

function LogIn() {
  const ctx = useContext(Context);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    try {
      const user = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };

      ctx.addMail(enteredEmail);

      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSiB_B1lWKcu544PN7i5u55g0bJNvsNFI";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        ctx.addToken(data.idToken);
        history.replace("/products");
      } else {
        const data = await response.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="d-md-flex justify-content-center container p-3">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Mail</label>
          <input className="form-control" type="email" ref={emailRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" ref={passwordRef} />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
