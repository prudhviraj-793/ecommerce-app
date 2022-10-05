import { useContext } from 'react';
import Context from '../Context/Context';
import './NavBar.css'

function NavBar(props) {

    const ctx = useContext(Context)

    function showCartItems(e) {
        e.preventDefault();
        props.isCartClicked(true);
    }
    
    return (
        <div className="navBar">
            <a href="#home">Home</a>
            <a href="#store">Store</a>
            <a href="#about">About</a>
            <button onClick={showCartItems}>Cart {ctx.items.length}</button>
        </div>
    )
}

export default NavBar