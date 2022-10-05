import './NavBar.css'

function NavBar(props) {

    function showCartItems(e) {
        e.preventDefault();
        props.isCartClicked(true);
    }
    
    return (
        <div className="navBar">
            <a href="#home">Home</a>
            <a href="#store">Store</a>
            <a href="#about">About</a>
            <button onClick={showCartItems}>Cart</button>
        </div>
    )
}

export default NavBar