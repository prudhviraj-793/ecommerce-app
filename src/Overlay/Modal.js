import { Fragment } from "react"
import ReactDOM from "react-dom"
import './Overlay.css'

function BackDrop() {
    return <div className="backDrop"></div>
}

function Overlay(props) {
    return (
        <div className="overlay">
            {props.children}
        </div>
    )
}

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('overlay'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
        </Fragment>
    )

}

export default Modal