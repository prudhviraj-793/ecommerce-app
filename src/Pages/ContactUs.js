import { useRef } from "react";
import Modal from "../Overlay/Modal";

function ContactUs() {
    const nameRef = useRef('')
    const mailRef = useRef('')
    const phneNumberRef = useRef('')
  function nameHandler(e) {
    nameRef.current = e.target.value
  }
  function mailHandler(e) {
    mailRef.current = e.target.value
  }
  function phoneNumberHandler(e) {
    phneNumberRef.current = e.target.value
  }
  async function requestToContact(e) {
    e.preventDefault()
    const user = {
        name: nameRef.current,
        mail: mailRef.current,
        phneNumber: phneNumberRef.current
    }
    let response = await fetch('https://contact-us-request-default-rtdb.firebaseio.com/request.json', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    console.log(data)
  }
  return (
    <Modal>
      <form onSubmit={requestToContact}>
        <label>Name</label>
        <input type="text" ref={nameRef} onChange={nameHandler} />
        <label>Email</label>
        <input type="email" ref={mailRef}  onChange={mailHandler} />
        <label>Phone Number</label>
        <input type="text" ref={phneNumberRef} onChange={phoneNumberHandler} />
        <button type="submit">Send Request</button>
      </form>
    </Modal>
  );
}

export default ContactUs;
