import { Fragment, useRef } from "react";

function ContactUs() {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const phneNumberRef = useRef("");
  function nameHandler(e) {
    nameRef.current = e.target.value;
  }
  function mailHandler(e) {
    mailRef.current = e.target.value;
  }
  function phoneNumberHandler(e) {
    phneNumberRef.current = e.target.value;
  }
  async function requestToContact(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current,
      mail: mailRef.current,
      phneNumber: phneNumberRef.current,
    };
    let response = await fetch(
      "https://contact-us-request-default-rtdb.firebaseio.com/request.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data);
  }
  return (
    <Fragment>
      <div className="conatiner p-3 d-md-flex justify-content-center">
        <form onSubmit={requestToContact}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              ref={nameRef}
              onChange={nameHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              ref={mailRef}
              onChange={mailHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              className="form-control"
              type="text"
              ref={phneNumberRef}
              onChange={phoneNumberHandler}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default ContactUs;
