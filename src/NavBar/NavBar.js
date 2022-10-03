import './NavBar.css'

function NavBar() {
    return (
        <div className="navBar">
            <a href="#home">Home</a>
            <a href="#store">Store</a>
            <a href="#about">About</a>
            <button>cart</button>
        </div>
    )
}

export default NavBar